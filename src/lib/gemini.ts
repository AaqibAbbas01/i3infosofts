/**
 * Google Gemini AI Integration
 * Direct API calls to Gemini 2.0 Flash
 */

const GEMINI_API_KEY = import.meta.env.VITE_GOOGLE_GEMINI_API_KEY;
// Using gemini-2.0-flash - stable model, less likely to be overloaded
const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent';

interface GeminiMessage {
  role: 'user' | 'model';
  parts: { text: string }[];
}

interface GeminiRequest {
  contents: GeminiMessage[];
  generationConfig?: {
    temperature?: number;
    maxOutputTokens?: number;
    topP?: number;
  };
}

/**
 * Retry helper function with exponential backoff
 */
async function retryWithBackoff<T>(
  fn: () => Promise<T>,
  maxRetries: number = 2,
  initialDelay: number = 1000
): Promise<T> {
  let lastError: Error;
  
  for (let i = 0; i < maxRetries; i++) {
    try {
      return await fn();
    } catch (error: any) {
      lastError = error;
      
      // Don't retry on certain errors
      if (!error.message?.includes('503') && !error.message?.includes('overloaded')) {
        throw error;
      }
      
      // Wait before retrying (exponential backoff)
      if (i < maxRetries - 1) {
        const delay = initialDelay * Math.pow(2, i);
        console.log(`Model overloaded, retrying in ${delay}ms...`);
        await new Promise(resolve => setTimeout(resolve, delay));
      }
    }
  }
  
  throw lastError!;
}

/**
 * Send a message to Google Gemini AI
 */
export async function sendToGemini(userMessage: string, systemPrompt?: string): Promise<string> {
  if (!GEMINI_API_KEY) {
    throw new Error('Gemini API key not configured. Please set VITE_GOOGLE_GEMINI_API_KEY in .env.local');
  }

  const contents: GeminiMessage[] = [];

  // If system prompt is provided, add it as the first user message
  if (systemPrompt) {
    contents.push({
      role: 'user',
      parts: [{ text: systemPrompt }]
    });
    contents.push({
      role: 'model',
      parts: [{ text: 'I understand. I will follow these instructions and respond accordingly.' }]
    });
  }

  // Add the actual user message
  contents.push({
    role: 'user',
    parts: [{ text: userMessage }]
  });

  const requestBody: GeminiRequest = {
    contents,
    generationConfig: {
      temperature: 0.8,
      maxOutputTokens: 800,
      topP: 0.95,
    },
  };

  try {
    const response = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Gemini API error:', errorData);
      
      // Handle quota exceeded specifically
      if (response.status === 429) {
        const retryAfter = errorData.error?.details?.find(
          (d: any) => d['@type'] === 'type.googleapis.com/google.rpc.RetryInfo'
        )?.retryDelay;
        
        throw new Error(
          `Quota exceeded. ${retryAfter ? `Please try again in ${retryAfter}.` : 'Please try again later.'}\n\n` +
          `You can:\n` +
          `1. Wait a few seconds and try again\n` +
          `2. Check your usage at: https://ai.dev/usage\n` +
          `3. Contact us at +91 81781 99664 for immediate help`
        );
      }
      
      // Handle service overload (503)
      if (response.status === 503) {
        throw new Error('503: Model overloaded');
      }
      
      throw new Error(`Gemini API request failed: ${response.status}`);
    }

    const data = await response.json();
    const aiResponse = data.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!aiResponse) {
      throw new Error('No response from Gemini AI');
    }

    return aiResponse;
  } catch (error) {
    console.error('Error calling Gemini API:', error);
    throw error;
  }
}

/**
 * System prompt for Maya - i3infosoft AI Assistant
 */
export const MAYA_SYSTEM_PROMPT = `You are Maya, a friendly and knowledgeable digital marketing consultant at i3infosoft. You speak naturally like a human expert who genuinely cares about helping businesses grow. Use conversational language, empathy, and occasional phrases like "I'd be happy to help," "Great question," or "Let me explain."

ABOUT i3infosoft:
i3infosoft is a leading digital transformation partner for small and mid-level businesses across India. We specialize in helping local businesses expand their reach and automate their operations using cutting-edge technology.

OUR CORE SERVICES:

1. **Digital Marketing** - Complete online presence management
   - Google Ads campaigns (Search, Display, Shopping)
   - Meta Ads (Facebook & Instagram) with advanced targeting
   - Local SEO optimization to dominate local searches
   - Social media management and content creation
   - Performance tracking and ROI optimization

2. **Website & App Development** - Modern, fast, conversion-focused
   - SEO-optimized websites that rank on Google
   - Mobile-responsive designs
   - E-commerce stores with payment gateway integration
   - Custom web applications
   - Lightning-fast performance

3. **AI Chatbots & WhatsApp Automation** - 24/7 customer engagement
   - Intelligent AI agents that handle 1,000+ queries daily
   - WhatsApp Business API integration
   - Automated customer support
   - Lead qualification and appointment scheduling
   - Multi-language support

4. **Workflow Automation** - Save time, reduce errors
   - Email automation for lead nurturing
   - WhatsApp automation for order updates
   - Zapier integrations
   - Custom workflow design
   - CRM integration

5. **Email Marketing** - Nurture leads, increase sales
   - Personalized email campaigns
   - Automated drip sequences
   - A/B testing for optimization
   - Detailed analytics

6. **SEO Optimization** - Get found by local customers
   - Complete website SEO audit
   - Local business listings optimization
   - Keyword research and content strategy
   - Monthly ranking reports

PRICING & PACKAGES:
- **Starter Plan**: ₹14,999/month - Perfect for small businesses
- **Growth Plan**: ₹29,999/month - For businesses ready to scale
- **Pro Plan**: ₹59,999/month - Comprehensive enterprise solutions

CONTACT INFORMATION:
- Phone/WhatsApp: +91 81781 99664
- Email: contact@i3infosoft.com

CONVERSATION STYLE:
- Be warm, friendly, and conversational
- Use "we" and "our team" when referring to i3infosoft
- Ask clarifying questions to understand their specific needs
- Provide examples relevant to their business
- Be enthusiastic about helping them succeed
- Keep responses concise but informative (2-4 sentences usually)
- Show genuine interest in their business challenges

Remember: You're building a relationship and helping them envision how i3infosoft can transform their business!`;

/**
 * Send a message to Maya (i3infosoft AI Assistant)
 * Includes automatic retry on server overload
 */
export async function chatWithMaya(userMessage: string): Promise<string> {
  return retryWithBackoff(() => sendToGemini(userMessage, MAYA_SYSTEM_PROMPT));
}

