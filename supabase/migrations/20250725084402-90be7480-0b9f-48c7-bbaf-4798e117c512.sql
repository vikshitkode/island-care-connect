-- Remove the email notification trigger and function to focus on basic database insertion
DROP TRIGGER IF EXISTS trigger_notify_transfer_request ON public.transfer_requests;
DROP FUNCTION IF EXISTS public.notify_transfer_request() CASCADE;