import { z } from "zod";

// Phone number validation regex (US format)
const phoneRegex = /^\+?1?[-.\s]?\(?([0-9]{3})\)?[-.\s]?([0-9]{3})[-.\s]?([0-9]{4})$/;

// Sanitize HTML to prevent XSS
export const sanitizeHtml = (input: string): string => {
  return input
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;")
    .replace(/\//g, "&#x2F;");
};

export const transferRequestSchema = z.object({
  first_name: z
    .string()
    .min(1, "First name is required")
    .max(50, "First name must be less than 50 characters")
    .regex(/^[a-zA-Z\s-']+$/, "First name can only contain letters, spaces, hyphens, and apostrophes"),
  
  last_name: z
    .string()
    .min(1, "Last name is required")
    .max(50, "Last name must be less than 50 characters")
    .regex(/^[a-zA-Z\s-']+$/, "Last name can only contain letters, spaces, hyphens, and apostrophes"),
  
  phone: z
    .string()
    .min(1, "Phone number is required")
    .regex(phoneRegex, "Please enter a valid US phone number"),
  
  email: z
    .string()
    .email("Please enter a valid email address")
    .optional()
    .or(z.literal("")),
  
  date_of_birth: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Please enter a valid date (YYYY-MM-DD)")
    .optional()
    .or(z.literal("")),
  
  current_pharmacy: z
    .string()
    .min(1, "Current pharmacy is required")
    .max(200, "Pharmacy name must be less than 200 characters"),
  
  current_pharmacy_phone: z
    .string()
    .regex(phoneRegex, "Please enter a valid pharmacy phone number")
    .optional()
    .or(z.literal("")),
  
  medications: z
    .string()
    .max(1000, "Medications list must be less than 1000 characters")
    .optional(),
  
  notes: z
    .string()
    .max(500, "Notes must be less than 500 characters")
    .optional(),
});

export type TransferRequestData = z.infer<typeof transferRequestSchema>;