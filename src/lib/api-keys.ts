import { supabase } from "@/integrations/supabase/client";

/**
 * Securely retrieve an API key from the database
 * @param keyName - The name of the API key to retrieve
 * @returns The API key value or null if not found
 */
export async function getApiKey(keyName: string): Promise<string | null> {
  try {
    const { data, error } = await supabase.rpc('get_api_key', {
      p_key_name: keyName
    });

    if (error) {
      console.error(`Error fetching API key "${keyName}":`, error);
      return null;
    }

    return data as string;
  } catch (error) {
    console.error(`Failed to retrieve API key "${keyName}":`, error);
    return null;
  }
}

/**
 * Get Google API Key from database
 */
export async function getGoogleApiKey(): Promise<string | null> {
  return getApiKey('google_api_key');
}

// Available API keys in the system
export const API_KEYS = {
  GOOGLE: 'google_api_key',
} as const;

