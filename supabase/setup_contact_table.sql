-- Run this in your Supabase SQL Editor to create/update the contact_submissions table
-- Go to: https://supabase.com/dashboard/project/lpqonqhpzncjptedxrjp/sql/new

-- Create the contact_submissions table if it doesn't exist
CREATE TABLE IF NOT EXISTS public.contact_submissions (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    name TEXT,
    email TEXT,
    phone TEXT,
    message TEXT,
    business_name TEXT,
    business_type TEXT,
    business_size TEXT,
    current_challenges TEXT,
    monthly_budget TEXT,
    services_interested TEXT[],
    preferred_contact_method TEXT,
    timeline TEXT
);

-- Add any missing columns (safe to run multiple times)
ALTER TABLE public.contact_submissions
ADD COLUMN IF NOT EXISTS phone TEXT,
ADD COLUMN IF NOT EXISTS business_name TEXT,
ADD COLUMN IF NOT EXISTS business_type TEXT,
ADD COLUMN IF NOT EXISTS business_size TEXT,
ADD COLUMN IF NOT EXISTS current_challenges TEXT,
ADD COLUMN IF NOT EXISTS monthly_budget TEXT,
ADD COLUMN IF NOT EXISTS services_interested TEXT[],
ADD COLUMN IF NOT EXISTS preferred_contact_method TEXT,
ADD COLUMN IF NOT EXISTS timeline TEXT;

-- Enable Row Level Security (RLS)
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- Create policy to allow inserts from anonymous users (for the contact form)
DROP POLICY IF EXISTS "Allow anonymous inserts" ON public.contact_submissions;
CREATE POLICY "Allow anonymous inserts" ON public.contact_submissions
    FOR INSERT
    WITH CHECK (true);

-- Create policy to allow reading (optional - for admin dashboard)
DROP POLICY IF EXISTS "Allow authenticated reads" ON public.contact_submissions;
CREATE POLICY "Allow authenticated reads" ON public.contact_submissions
    FOR SELECT
    USING (true);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_contact_submissions_created_at ON public.contact_submissions(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_email ON public.contact_submissions(email);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_phone ON public.contact_submissions(phone);

-- Grant permissions
GRANT INSERT ON public.contact_submissions TO anon;
GRANT SELECT ON public.contact_submissions TO anon;
GRANT ALL ON public.contact_submissions TO authenticated;

-- Success message
SELECT 'Contact submissions table is ready!' as status;

