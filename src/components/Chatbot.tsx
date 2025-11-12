import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { MessageCircle, X, Send, Loader2, Sparkles } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { chatWithMaya } from "@/lib/gemini";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([
    { text: "Hey there! 👋 I'm Maya from i3infosoft. I'd love to help you discover how we can grow your business through digital marketing, automation, and AI. What brings you here today?", isUser: false }
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
      {/* Chat Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 h-16 w-16 rounded-full shadow-medium hover:shadow-soft transition-all z-50 bg-gradient-to-r from-primary to-secondary hover:opacity-90 animate-glow"
        size="icon"
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <div className="relative">
            <MessageCircle className="h-6 w-6" />
            <Sparkles className="h-3 w-3 absolute -top-1 -right-1 text-white animate-pulse" />
          </div>
        )}
      </Button>

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-24 right-6 w-[380px] h-[600px] shadow-medium z-50 flex flex-col glass-effect border-primary/30">
          <CardHeader className="bg-gradient-to-r from-primary to-secondary rounded-t-lg py-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center animate-pulse">
                <Sparkles className="h-5 w-5 text-white" />
              </div>
              <div>
                <CardTitle className="text-lg font-bold text-white">Maya - AI Assistant</CardTitle>
                <p className="text-xs text-white/80">Powered by Gemini AI</p>
              </div>
            </div>
          </CardHeader>
          
          <CardContent className="flex-1 overflow-y-auto p-4 space-y-4 bg-background/50">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'} animate-in fade-in slide-in-from-bottom-2`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-3 ${
                    msg.isUser
                      ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-soft'
                      : 'glass-effect text-foreground border border-primary/20 shadow-sm'
                  }`}
                >
                  <p className="text-sm leading-relaxed">{msg.text}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="glass-effect border border-primary/20 rounded-2xl px-4 py-3 flex items-center gap-2">
                  <Loader2 className="h-4 w-4 animate-spin text-primary" />
                  <span className="text-sm text-foreground">Maya is thinking...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </CardContent>

          <div className="p-4 border-t border-border/30 glass-effect">
            <div className="flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && !e.shiftKey && handleSend()}
                placeholder="Ask about our AI services..."
                disabled={isLoading}
                className="flex-1 glass-effect border-border/50 focus:border-primary"
              />
              <Button 
                onClick={handleSend} 
                size="icon"
                disabled={isLoading || !input.trim()}
                className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 shadow-soft"
              >
                {isLoading ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <Send className="h-4 w-4" />
                )}
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-2 text-center flex items-center justify-center gap-1">
              <Sparkles className="h-3 w-3 text-primary" />
              AI-powered • Always online
            </p>
          </div>
        </Card>
      )}
    </>
  );
};

export default Chatbot;
