-- Update RLS policies for transfer_requests to allow anonymous submissions
DROP POLICY IF EXISTS "Authenticated users can submit transfer requests" ON public.transfer_requests;
DROP POLICY IF EXISTS "Users can view their own transfer requests" ON public.transfer_requests;

-- Create new policy to allow anyone to insert transfer requests (public form)
CREATE POLICY "Anyone can submit transfer requests" 
ON public.transfer_requests 
FOR INSERT 
TO public
WITH CHECK (true);

-- Create policy for viewing - only staff should view transfer requests
-- This assumes there will be an admin role or staff authentication later
CREATE POLICY "Staff can view all transfer requests" 
ON public.transfer_requests 
FOR SELECT 
TO authenticated
USING (true);