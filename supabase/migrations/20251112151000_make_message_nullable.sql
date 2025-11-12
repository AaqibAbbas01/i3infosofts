-- Make message column nullable since it's now optional in the enhanced form
ALTER TABLE public.contact_submissions
ALTER COLUMN message DROP NOT NULL;

-- Also make email and name more flexible (though they remain required in the form)
-- This prevents database-level errors if validation is bypassed
ALTER TABLE public.contact_submissions
ALTER COLUMN email DROP NOT NULL;

ALTER TABLE public.contact_submissions
ALTER COLUMN name DROP NOT NULL;

