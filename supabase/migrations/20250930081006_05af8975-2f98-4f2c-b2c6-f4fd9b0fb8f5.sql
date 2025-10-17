-- Update applications table schema
ALTER TABLE public.applications 
DROP COLUMN IF EXISTS phone,
ADD COLUMN IF NOT EXISTS country_code text NOT NULL DEFAULT 'IN',
ADD COLUMN IF NOT EXISTS phone_number text NOT NULL DEFAULT '',
ADD COLUMN IF NOT EXISTS full_phone text NOT NULL DEFAULT '';

-- Update contact_us table schema  
ALTER TABLE public.contact_us
DROP COLUMN IF EXISTS phone,
ADD COLUMN IF NOT EXISTS country_code text NOT NULL DEFAULT 'IN',
ADD COLUMN IF NOT EXISTS phone_number text NOT NULL DEFAULT '',
ADD COLUMN IF NOT EXISTS full_phone text NOT NULL DEFAULT '';