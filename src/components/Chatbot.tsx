import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { MessageCircle, X, Send, Loader2, Workflow } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { chatWithMaya } from "@/lib/gemini";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([
    { text: "Hey there! 👋 I'm Maya from i3infosoft. We deploy AI agents that work 24/7 - WhatsApp bots, voice agents, sales automation, and more. Starting at just ₹8,999/month! What kind of business do you have? I'd love to suggest the right solution for you.", isUser: false }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  // Listen for custom event to open chatbot
  useEffect(() => {
    const handleOpenChatbot = () => {
      setIsOpen(true);
    };
    
    window.addEventListener('openChatbot', handleOpenChatbot);
    
    return () => {
      window.removeEventListener('openChatbot', handleOpenChatbot);
    };
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");
    setMessages(prev => [...prev, { text: userMessage, isUser: true }]);
    setIsLoading(true);

    try {
      // Call Gemini API directly using the environment variable
      const response = await chatWithMaya(userMessage);

      setMessages(prev => [...prev, { 
        text: response || "I apologize, but I couldn't generate a response. Please try again.", 
        isUser: false 
      }]);
    } catch (error: any) {
      console.error('Chat error:', error);
      
      // Check error type
      const isQuotaError = error.message?.includes('Quota exceeded') || error.message?.includes('429');
      const isOverloadError = error.message?.includes('503') || error.message?.includes('overloaded');
      
      if (isQuotaError) {
        toast({
          title: "Rate Limit Reached",
          description: "Please wait a moment and try again, or contact us directly.",
          variant: "destructive"
        });
        setMessages(prev => [...prev, { 
          text: "I apologize, but I've reached my rate limit for the moment. Please try again in a few seconds, or reach out directly:\n\n📞 +91 81781 99664\n📧 contact@i3infosoft.com\n💬 WhatsApp: wa.me/918178199664\n\nI'll be back shortly!", 
          isUser: false 
        }]);
      } else if (isOverloadError) {
        toast({
          title: "Service Busy",
          description: "AI service is currently busy. Please try again in a moment.",
          variant: "destructive"
        });
        setMessages(prev => [...prev, { 
          text: "I apologize, but I'm experiencing high demand right now. Please try again in a few seconds, or contact us directly:\n\n📞 +91 81781 99664\n💬 WhatsApp: wa.me/918178199664\n📧 contact@i3infosoft.com", 
          isUser: false 
        }]);
      } else {
        toast({
          title: "Error",
          description: "Failed to get response. Please try again or contact us at +91 81781 99664",
          variant: "destructive"
        });
        setMessages(prev => [...prev, { 
          text: "I apologize, but I'm having trouble connecting right now. Please reach out to us directly:\n\n📞 +91 81781 99664\n📧 contact@i3infosoft.com", 
          isUser: false 
        }]);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Chat Button - n8n style */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 h-16 w-16 rounded-xl shadow-medium hover:shadow-soft transition-all z-50 bg-primary hover:bg-primary/90"
        size="icon"
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <div className="relative">
            <MessageCircle className="h-6 w-6" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-secondary rounded-full animate-pulse" />
          </div>
        )}
      </Button>

      {/* Chat Window - n8n style */}
      {isOpen && (
        <Card className="fixed bottom-24 right-6 w-[380px] h-[600px] shadow-medium z-50 flex flex-col n8n-node overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-primary to-primary/80 rounded-t-lg py-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-white/20 flex items-center justify-center">
                <Workflow className="h-5 w-5 text-white" />
              </div>
              <div>
                <CardTitle className="text-lg font-bold text-white flex items-center gap-2">
                  Maya
                  <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                </CardTitle>
                <p className="text-xs text-white/80">AI Workflow Assistant</p>
              </div>
            </div>
          </CardHeader>
          
          <CardContent className="flex-1 overflow-y-auto p-4 space-y-4 bg-background/80">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'} animate-in fade-in slide-in-from-bottom-2`}
              >
                <div
                  className={`max-w-[85%] rounded-xl px-4 py-3 ${
                    msg.isUser
                      ? 'bg-primary text-primary-foreground shadow-soft'
                      : 'n8n-node text-foreground shadow-sm'
                  }`}
                >
                  <p className="text-sm leading-relaxed">{msg.text}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="n8n-node rounded-xl px-4 py-3 flex items-center gap-2">
                  <Loader2 className="h-4 w-4 animate-spin text-primary" />
                  <span className="text-sm text-foreground">Processing...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </CardContent>

          <div className="p-4 border-t border-border/30 bg-card">
            <div className="flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && !e.shiftKey && handleSend()}
                placeholder="Ask about automation..."
                disabled={isLoading}
                className="flex-1 glass-effect border-border/50 focus:border-primary rounded-lg"
              />
              <Button 
                onClick={handleSend} 
                size="icon"
                disabled={isLoading || !input.trim()}
                className="bg-primary hover:bg-primary/90 shadow-soft rounded-lg"
              >
                {isLoading ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <Send className="h-4 w-4" />
                )}
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-2 text-center flex items-center justify-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
              Always online • Powered by AI
            </p>
          </div>
        </Card>
      )}
    </>
  );
};

export default Chatbot;
