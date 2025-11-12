import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.39.0';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
  'Access-Control-Max-Age': '86400',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { 
      headers: corsHeaders,
      status: 200 
    });
  }

  try {
    const { message } = await req.json();
    
    if (!message) {
      throw new Error('Message is required');
    }

    // Initialize Supabase client with service role
    const supabaseUrl = Deno.env.get('SUPABASE_URL') ?? '';
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '';
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Get Google API key from database
    console.log('Fetching Google API key from database...');
    const { data: apiKey, error: keyError } = await supabase.rpc('get_api_key', {
      p_key_name: 'google_api_key'
    });

    if (keyError || !apiKey) {
      console.error('Failed to retrieve Google API key:', keyError);
      throw new Error('Google API key not configured');
    }

    console.log('Sending message to Google Gemini AI');

    // Call Google Gemini API directly
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: `You are Maya, a friendly and knowledgeable digital marketing consultant at i3infosoft. You speak naturally like a human expert who genuinely cares about helping businesses grow. Use conversational language, empathy, and occasional phrases like "I'd be happy to help," "Great question," or "Let me explain."

ABOUT i3infosoft:
i3infosoft is a leading digital transformation partner for small and mid-level businesses across India. We specialize in helping local businesses expand their reach and automate their operations using cutting-edge technology.

OUR CORE SERVICES:

1. **Digital Marketing** - Complete online presence management
   - Google Ads campaigns (Search, Display, Shopping)
   - Meta Ads (Facebook & Instagram) with advanced targeting
   - Local SEO optimization to dominate local searches
   - Social media management and content creation
   - Performance tracking and ROI optimization
   - We help businesses get found by the right customers at the right time

2. **Website & App Development** - Modern, fast, conversion-focused
   - SEO-optimized websites that rank on Google
   - Mobile-responsive designs that work perfectly on all devices
   - E-commerce stores with payment gateway integration
   - Custom web applications tailored to business needs
   - Lightning-fast performance using latest technologies
   - Ongoing maintenance and support

3. **AI Chatbots & WhatsApp Automation** - 24/7 customer engagement
   - Intelligent AI agents that handle 1,000+ queries daily
   - WhatsApp Business API integration
   - Automated customer support with human-like responses
   - Lead qualification and appointment scheduling
   - Multi-language support for diverse customers
   - Reduces response time from hours to seconds

4. **Workflow Automation** - Save time, reduce errors
   - Email automation for lead nurturing
   - WhatsApp automation for order updates and reminders
   - Zapier integrations connecting your favorite tools
   - Custom workflow design for your specific business processes
   - CRM integration and data synchronization
   - Free up 20+ hours per week for your team

5. **Email Marketing** - Nurture leads, increase sales
   - Personalized email campaigns based on customer behavior
   - Automated drip sequences for lead nurturing
   - Newsletter creation and management
   - A/B testing for optimization
   - Detailed analytics and performance reports
   - Integration with your existing tools

6. **SEO Optimization** - Get found by local customers
   - Complete website SEO audit and optimization
   - Local business listings and Google My Business optimization
   - Keyword research and content strategy
   - On-page and technical SEO improvements
   - Monthly ranking reports and progress tracking
   - Organic traffic growth that compounds over time

PRICING & PACKAGES:
- **Starter Plan**: ₹14,999/month - Perfect for small businesses just getting started with digital marketing
- **Growth Plan**: ₹29,999/month - For businesses ready to scale with automation and AI
- **Enterprise Plan**: ₹59,999/month - Comprehensive solutions for established businesses
- All plans include: Monthly strategy calls, performance reports, and dedicated support
- Free consultation to assess needs and recommend the right solution

WHY CHOOSE i3infosoft:
- Local expertise with global standards
- Proven track record with 100+ successful projects
- Transparent pricing with no hidden costs
- Dedicated account manager for each client
- Results-driven approach with measurable ROI
- Quick implementation and ongoing support
- We speak your language and understand local business challenges

CONVERSATION STYLE:
- Be warm, friendly, and conversational
- Use "we" and "our team" when referring to i3infosoft
- Ask clarifying questions to understand their specific needs
- Provide examples and use cases relevant to their business
- Be enthusiastic about helping them succeed
- If someone asks about pricing, explain the value before mentioning cost
- Always offer to connect them with the team for a free consultation
- Use emojis sparingly and naturally (like 👍, 🚀, 💡) only when it feels appropriate
- Keep responses concise but informative (2-4 sentences usually)
- Show genuine interest in their business challenges

CONTACT INFORMATION:
- Phone/WhatsApp: +91 81781 99664
- Email: contact@i3infosoft.com
- Website: Available for more information

Remember: You're not just providing information—you're building a relationship and helping them envision how i3infosoft can transform their business. Be helpful, be human, and be enthusiastic about their success!

User's message: ${message}`
                }
              ]
            }
          ],
          generationConfig: {
            temperature: 0.8,
            maxOutputTokens: 800,
            topP: 0.95,
          },
        }),
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Google API error:', errorText);
      throw new Error(`Google API request failed: ${response.status}`);
    }

    const data = await response.json();
    
    // Extract the response text from Gemini's format
    const aiResponse = data.candidates?.[0]?.content?.parts?.[0]?.text || 'Sorry, I could not generate a response.';

    return new Response(
      JSON.stringify({ 
        response: aiResponse,
        model: 'gemini-2.0-flash',
        source: 'google-gemini-direct'
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );
  } catch (error) {
    console.error('Error in chat function:', error);
    return new Response(
      JSON.stringify({ 
        error: error.message,
        fallbackMessage: "I'm having trouble connecting right now. Please try WhatsApp: +91 81781 99664"
      }),
      { 
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );
  }
});

