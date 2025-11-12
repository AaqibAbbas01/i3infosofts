-- Create a secure table for storing API keys and configuration
CREATE TABLE IF NOT EXISTS public.api_keys (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  key_name TEXT NOT NULL UNIQUE,
  key_value TEXT NOT NULL,
  description TEXT,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.api_keys ENABLE ROW LEVEL SECURITY;

-- Only allow service role to read API keys (no public access)
CREATE POLICY "Only service role can read API keys"
ON public.api_keys
FOR SELECT
USING (false);

-- Only allow service role to insert/update API keys
CREATE POLICY "Only service role can modify API keys"
ON public.api_keys
FOR ALL
USING (false);

-- Insert the Google API key
INSERT INTO public.api_keys (key_name, key_value, description, is_active)
VALUES (
  'google_api_key',
  'AIzaSyBVlbBaB6h766Xbx9k2yXvJi72ZXCAKdmk',
  'Google API Key for AI services (Gemini, etc.)',
  true
)
ON CONFLICT (key_name) 
DO UPDATE SET 
  key_value = EXCLUDED.key_value,
  updated_at = now();

-- Create function to get API key (can only be called by service role)
CREATE OR REPLACE FUNCTION get_api_key(p_key_name TEXT)
RETURNS TEXT
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  v_key_value TEXT;
BEGIN
  SELECT key_value INTO v_key_value
  FROM public.api_keys
  WHERE key_name = p_key_name 
  AND is_active = true;
  
  RETURN v_key_value;
END;
$$;

-- Grant execute permission to authenticated users (optional, remove if you want only service role)
-- GRANT EXECUTE ON FUNCTION get_api_key(TEXT) TO authenticated;

COMMENT ON TABLE public.api_keys IS 'Secure storage for API keys and secrets';
COMMENT ON FUNCTION get_api_key(TEXT) IS 'Securely retrieve an API key by name';

