-- Update the trigger function to use the correct schema for net.http_post
DROP FUNCTION IF EXISTS public.notify_transfer_request() CASCADE;

CREATE OR REPLACE FUNCTION public.notify_transfer_request()
RETURNS TRIGGER AS $$
BEGIN
  -- Call the edge function to send email notification
  PERFORM
    extensions.net.http_post(
      url := 'https://nnlzoltcklkjpdaijxcu.supabase.co/functions/v1/send-transfer-notification',
      headers := '{"Content-Type": "application/json", "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5ubHpvbHRja2xranBkYWlqeGN1Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1MzQyOTg0MiwiZXhwIjoyMDY5MDA1ODQyfQ.CcKEoUJTWz-ebqMfKgvZmfTQs-8NRnl1YP8dfsc2gSo"}'::jsonb,
      body := json_build_object('record', row_to_json(NEW))::text
    );
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = '';

-- Recreate the trigger
CREATE TRIGGER trigger_notify_transfer_request
  AFTER INSERT ON public.transfer_requests
  FOR EACH ROW
  EXECUTE FUNCTION public.notify_transfer_request();