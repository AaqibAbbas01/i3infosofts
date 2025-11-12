-- Add business details columns to contact_submissions table
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

-- Add index for faster queries
CREATE INDEX IF NOT EXISTS idx_contact_submissions_created_at ON public.contact_submissions(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_business_type ON public.contact_submissions(business_type);

