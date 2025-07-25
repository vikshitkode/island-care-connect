import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.52.1";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface TransferRequest {
  id: string;
  first_name: string;
  last_name: string;
  phone: string;
  email?: string;
  date_of_birth?: string;
  current_pharmacy: string;
  current_pharmacy_phone?: string;
  medications?: string;
  notes?: string;
  created_at: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { record }: { record: TransferRequest } = await req.json();

    console.log("Processing transfer request notification:", record.id);

    // Format the email content
    const emailHtml = `
      <h1>New Prescription Transfer Request</h1>
      <p>A new prescription transfer request has been submitted:</p>
      
      <h2>Patient Information</h2>
      <ul>
        <li><strong>Name:</strong> ${record.first_name} ${record.last_name}</li>
        <li><strong>Phone:</strong> ${record.phone}</li>
        <li><strong>Email:</strong> ${record.email || 'Not provided'}</li>
        <li><strong>Date of Birth:</strong> ${record.date_of_birth || 'Not provided'}</li>
      </ul>
      
      <h2>Current Pharmacy</h2>
      <ul>
        <li><strong>Pharmacy:</strong> ${record.current_pharmacy}</li>
        <li><strong>Phone:</strong> ${record.current_pharmacy_phone || 'Not provided'}</li>
      </ul>
      
      <h2>Medications</h2>
      <p>${record.medications || 'Not specified - transfer all active prescriptions'}</p>
      
      <h2>Additional Notes</h2>
      <p>${record.notes || 'None'}</p>
      
      <hr>
      <p><small>Request ID: ${record.id}</small></p>
      <p><small>Submitted: ${new Date(record.created_at).toLocaleString()}</small></p>
    `;

    const emailResponse = await resend.emails.send({
      from: "Pharmacy Notifications <notifications@resend.dev>",
      to: ["kodevikshit2000@gmail.com"], // Your pharmacy email
      subject: `New Transfer Request: ${record.first_name} ${record.last_name}`,
      html: emailHtml,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true, emailId: emailResponse.data?.id }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-transfer-notification function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);