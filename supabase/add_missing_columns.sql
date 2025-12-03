-- Run this in Supabase SQL Editor to add missing columns
-- https://supabase.com/dashboard/project/lpqonqhpzncjptedxrjp/sql/new

-- Add all missing columns to contact_submissions
ALTER TABLE public.contact_submissions 
ADD COLUMN IF NOT EXISTS phone TEXT;

ALTER TABLE public.contact_submissions 
ADD COLUMN IF NOT EXISTS business_name TEXT;

ALTER TABLE public.contact_submissions 
ADD COLUMN IF NOT EXISTS business_type TEXT;

ALTER TABLE public.contact_submissions 
ADD COLUMN IF NOT EXISTS business_size TEXT;

ALTER TABLE public.contact_submissions 
ADD COLUMN IF NOT EXISTS current_challenges TEXT;

ALTER TABLE public.contact_submissions 
ADD COLUMN IF NOT EXISTS monthly_budget TEXT;

ALTER TABLE public.contact_submissions 
ADD COLUMN IF NOT EXISTS services_interested TEXT[];

ALTER TABLE public.contact_submissions 
ADD COLUMN IF NOT EXISTS preferred_contact_method TEXT;

ALTER TABLE public.contact_submissions 
ADD COLUMN IF NOT EXISTS timeline TEXT;

-- Verify columns were added
SELECT column_name, data_type 
FROM information_schema.columns 
WHERE table_name = 'contact_submissions'
ORDER BY ordinal_position;

