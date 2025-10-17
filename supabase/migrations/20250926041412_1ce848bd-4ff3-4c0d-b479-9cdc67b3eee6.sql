-- Create storage bucket for CVs
INSERT INTO storage.buckets (id, name, public) VALUES ('cvs', 'cvs', false);

-- Create storage policies for CV uploads
CREATE POLICY "Anyone can upload CVs" 
ON storage.objects 
FOR INSERT 
WITH CHECK (bucket_id = 'cvs');

CREATE POLICY "Anyone can view CVs" 
ON storage.objects 
FOR SELECT 
USING (bucket_id = 'cvs');

-- Enable RLS on both tables (if not already enabled)
ALTER TABLE public.applications ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contact_us ENABLE ROW LEVEL SECURITY;

-- Create policies to allow anyone to insert data (public forms)
CREATE POLICY "Anyone can submit applications" 
ON public.applications 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Anyone can submit contact messages" 
ON public.contact_us 
FOR INSERT 
WITH CHECK (true);