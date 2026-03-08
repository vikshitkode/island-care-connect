import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

// HTML-escape helper to prevent injection
const escHtml = (s: string): string =>
  (s ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

// In-memory rate limiter: max 5 requests per IP per 10 minutes
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  entry.count++;
  if (entry.count > RATE_LIMIT_MAX) {
    return true;
  }
  return false;
}

// Clean up stale entries periodically
setInterval(() => {
  const now = Date.now();
  for (const [key, entry] of rateLimitMap) {
    if (now > entry.resetAt) {
      rateLimitMap.delete(key);
    }
  }
}, 60_000);

// Validation helpers
function validateString(value: unknown, maxLength: number): string | null {
  if (typeof value !== "string") return null;
  const trimmed = value.trim();
  if (trimmed.length === 0 || trimmed.length > maxLength) return null;
  return trimmed;
}

function validateOptionalString(value: unknown, maxLength: number): string | null {
  if (value === undefined || value === null || value === "") return "";
  if (typeof value !== "string") return null;
  const trimmed = value.trim();
  if (trimmed.length > maxLength) return null;
  return trimmed;
}

interface ValidatedRecord {
  id: string;
  first_name: string;
  last_name: string;
  phone: string;
  email: string;
  date_of_birth: string;
  current_pharmacy: string;
  current_pharmacy_phone: string;
  medications: string;
  notes: string;
  created_at: string;
}

function validateRecord(record: unknown): ValidatedRecord | string {
  if (!record || typeof record !== "object") {
    return "Invalid request body";
  }

  const r = record as Record<string, unknown>;

  const first_name = validateString(r.first_name, 100);
  if (!first_name) return "Invalid or missing first_name (max 100 chars)";

  const last_name = validateString(r.last_name, 100);
  if (!last_name) return "Invalid or missing last_name (max 100 chars)";

  const phone = validateString(r.phone, 30);
  if (!phone) return "Invalid or missing phone (max 30 chars)";

  const email = validateOptionalString(r.email, 255);
  if (email === null) return "Invalid email (max 255 chars)";

  const date_of_birth = validateOptionalString(r.date_of_birth, 20);
  if (date_of_birth === null) return "Invalid date_of_birth";

  const current_pharmacy = validateString(r.current_pharmacy, 300);
  if (!current_pharmacy) return "Invalid or missing current_pharmacy (max 300 chars)";

  const current_pharmacy_phone = validateOptionalString(r.current_pharmacy_phone, 30);
  if (current_pharmacy_phone === null) return "Invalid current_pharmacy_phone (max 30 chars)";

  const medications = validateOptionalString(r.medications, 2000);
  if (medications === null) return "Invalid medications (max 2000 chars)";

  const notes = validateOptionalString(r.notes, 2000);
  if (notes === null) return "Invalid notes (max 2000 chars)";

  const id = typeof r.id === "string" ? r.id : `transfer-${Date.now()}`;
  const created_at = typeof r.created_at === "string" ? r.created_at : new Date().toISOString();

  return {
    id,
    first_name,
    last_name,
    phone,
    email,
    date_of_birth,
    current_pharmacy,
    current_pharmacy_phone,
    medications,
    notes,
    created_at,
  };
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Rate limiting by IP
    const clientIp =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("cf-connecting-ip") ||
      "unknown";

    if (isRateLimited(clientIp)) {
      console.warn(`Rate limited IP: ${clientIp}`);
      return new Response(
        JSON.stringify({ error: "Too many requests. Please try again later." }),
        {
          status: 429,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    const body = await req.json();
    const result = validateRecord(body?.record);

    if (typeof result === "string") {
      console.warn(`Validation failed: ${result}`);
      return new Response(
        JSON.stringify({ error: result }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    const record = result;
    console.log("Processing transfer request notification:", record.id);

    // Build email with all fields HTML-escaped
    const emailHtml = `
      <h1>New Prescription Transfer Request</h1>
      <p>A new prescription transfer request has been submitted:</p>
      
      <h2>Patient Information</h2>
      <ul>
        <li><strong>Name:</strong> ${escHtml(record.first_name)} ${escHtml(record.last_name)}</li>
        <li><strong>Phone:</strong> ${escHtml(record.phone)}</li>
        <li><strong>Email:</strong> ${escHtml(record.email || "Not provided")}</li>
        <li><strong>Date of Birth:</strong> ${escHtml(record.date_of_birth || "Not provided")}</li>
      </ul>
      
      <h2>Current Pharmacy</h2>
      <ul>
        <li><strong>Pharmacy:</strong> ${escHtml(record.current_pharmacy)}</li>
        <li><strong>Phone:</strong> ${escHtml(record.current_pharmacy_phone || "Not provided")}</li>
      </ul>
      
      <h2>Medications</h2>
      <p>${escHtml(record.medications || "Not specified - transfer all active prescriptions")}</p>
      
      <h2>Additional Notes</h2>
      <p>${escHtml(record.notes || "None")}</p>
      
      <hr>
      <p><small>Request ID: ${escHtml(record.id)}</small></p>
      <p><small>Submitted: ${escHtml(new Date(record.created_at).toLocaleString())}</small></p>
    `;

    // Also escape fields used in email subject
    const safeSubject = `New Transfer Request: ${record.first_name} ${record.last_name}`
      .replace(/[<>]/g, "")
      .substring(0, 200);

    const emailResponse = await resend.emails.send({
      from: "Mercer Island Pharmacy <noreply@mercerislandpharmacy.com>",
      to: ["mercerislandpharmacy@gmail.com"],
      subject: safeSubject,
      html: emailHtml,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(
      JSON.stringify({ success: true }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: unknown) {
    console.error("Error in send-transfer-notification function:", error);
    return new Response(
      JSON.stringify({ error: "An unexpected error occurred. Please try again." }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
