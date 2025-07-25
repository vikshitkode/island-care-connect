-- Create a database function to call the edge function when a new transfer request is inserted
CREATE OR REPLACE FUNCTION notify_transfer_request()
RETURNS TRIGGER AS $$
BEGIN
  -- Call the edge function to send email notification
  PERFORM
    net.http_post(
      url := 'https://nnlzoltcklkjpdaijxcu.supabase.co/functions/v1/send-transfer-notification',
      headers := '{"Content-Type": "application/json", "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5ubHpvbHRja2xranBkYWlqeGN1Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1MzQyOTg0MiwiZXhwIjoyMDY5MDA1ODQyfQ.CcKEoUJTWz-ebqMfKgvZmfTQs-8NRnl1YP8dfsc2gSo"}'::jsonb,
      body := json_build_object('record', row_to_json(NEW))::text
    );
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger to automatically send notifications
CREATE TRIGGER trigger_notify_transfer_request
  AFTER INSERT ON public.transfer_requests
  FOR EACH ROW
  EXECUTE FUNCTION notify_transfer_request();