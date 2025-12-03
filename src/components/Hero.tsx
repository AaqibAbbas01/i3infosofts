import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, Zap, TrendingUp, MessageSquare, Calendar, Phone } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero min-h-screen flex items-center">
      {/* n8n-style dot grid background */}
      <div className="absolute inset-0 cyber-grid opacity-50" />
      
      {/* Animated workflow connection lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{zIndex: 1}}>
        {/* Curved workflow paths */}
        <path 
          d="M -100 200 Q 300 150 600 250 T 1200 180" 
          stroke="url(#n8nGradient1)" 
          strokeWidth="2" 
          fill="none"
          strokeDasharray="8 6"
          className="animate-workflow-line"
          strokeLinecap="round"
        />
        <path 
          d="M -50 450 Q 400 350 700 500 T 1400 420" 
          stroke="url(#n8nGradient2)" 
          strokeWidth="2" 
          fill="none"
          strokeDasharray="8 6"
          className="animate-workflow-line"
          style={{animationDelay: '3s'}}
          strokeLinecap="round"
        />
        <path 
          d="M 200 700 Q 500 600 900 750 T 1500 680" 
          stroke="url(#n8nGradient1)" 
          strokeWidth="2" 
          fill="none"
          strokeDasharray="8 6"
          className="animate-workflow-line"
          style={{animationDelay: '6s'}}
          strokeLinecap="round"
        />
        <defs>
          <linearGradient id="n8nGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{stopColor: 'hsl(10 85% 62%)', stopOpacity: 0.8}} />
            <stop offset="100%" style={{stopColor: 'hsl(142 71% 45%)', stopOpacity: 0.6}} />
          </linearGradient>
          <linearGradient id="n8nGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{stopColor: 'hsl(142 71% 45%)', stopOpacity: 0.6}} />
            <stop offset="100%" style={{stopColor: 'hsl(217 91% 60%)', stopOpacity: 0.8}} />
          </linearGradient>
        </defs>
      </svg>
      
      {/* Floating n8n-style workflow nodes */}
      <div className="absolute top-24 left-[8%] w-14 h-14 n8n-node flex items-center justify-center animate-float opacity-60" style={{animationDelay: '0s'}}>
        <MessageSquare className="w-6 h-6 text-primary" />
      </div>
      <div className="absolute top-40 right-[12%] w-14 h-14 n8n-node flex items-center justify-center animate-float opacity-50" style={{animationDelay: '1.5s'}}>
        <Bot className="w-6 h-6 text-secondary" />
      </div>
      <div className="absolute bottom-32 left-[15%] w-14 h-14 n8n-node flex items-center justify-center animate-float opacity-40" style={{animationDelay: '3s'}}>
        <Zap className="w-6 h-6 text-accent" />
      </div>
      <div className="absolute top-[60%] right-[8%] w-12 h-12 n8n-node flex items-center justify-center animate-float opacity-50" style={{animationDelay: '4.5s'}}>
        <Calendar className="w-5 h-5 text-primary" />
      </div>

      {/* Glowing orbs - n8n orange theme */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/15 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}} />
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}} />

      {/* Flowing data particles */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 rounded-full animate-data-flow"
          style={{
            left: `${15 + i * 14}%`,
            animationDelay: `${i * 1.2}s`,
            animationDuration: `${5 + (i % 3)}s`,
            background: i % 2 === 0 ? 'hsl(10 85% 62%)' : 'hsl(142 71% 45%)',
            boxShadow: i % 2 === 0 ? '0 0 8px hsl(10 85% 62% / 0.6)' : '0 0 8px hsl(142 71% 45% / 0.6)'
          }}
        />
      ))}

      {/* Connection dots on workflow lines */}
      <div className="absolute top-[200px] left-[20%] n8n-dot animate-pulse-slow" style={{animationDelay: '0.5s'}} />
      <div className="absolute top-[240px] left-[45%] n8n-dot-success animate-pulse-slow" style={{animationDelay: '1s'}} />
      <div className="absolute top-[200px] right-[25%] n8n-dot animate-pulse-slow" style={{animationDelay: '1.5s'}} />
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-in fade-in slide-in-from-left duration-700">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect border border-primary/40 text-sm mb-4">
              <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              <span className="text-primary font-semibold">AI Agents & Automation for India</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              Deploy <span className="text-gradient">AI Agents</span> That Work 24/7
            </h1>
            
            <p className="text-xl lg:text-2xl text-muted-foreground max-w-xl leading-relaxed">
              WhatsApp chatbots, AI sales agents, voice bots & workflow automation. 
              <span className="text-primary font-semibold"> Built for Indian businesses</span>. 
              Start from <span className="text-secondary font-semibold">₹8,000/month</span>.
            </p>

            {/* Service highlights */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2 text-sm">
                <div className="w-8 h-8 rounded-lg bg-primary/20 border border-primary/40 flex items-center justify-center">
                  <MessageSquare className="w-4 h-4 text-primary" />
                </div>
                <span className="text-foreground/90">WhatsApp AI Bots</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <div className="w-8 h-8 rounded-lg bg-secondary/20 border border-secondary/40 flex items-center justify-center">
                  <Bot className="w-4 h-4 text-secondary" />
                </div>
                <span className="text-foreground/90">AI Sales Agents</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <div className="w-8 h-8 rounded-lg bg-accent/20 border border-accent/40 flex items-center justify-center">
                  <Phone className="w-4 h-4 text-accent" />
                </div>
                <span className="text-foreground/90">Voice AI Agents</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <div className="w-8 h-8 rounded-lg bg-primary/20 border border-primary/40 flex items-center justify-center">
                  <Zap className="w-4 h-4 text-primary" />
                </div>
                <span className="text-foreground/90">Workflow Automation</span>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="n8n-node p-4 text-center animate-node-connect" style={{animationDelay: '0s'}}>
                <div className="text-2xl font-bold text-primary">500+</div>
                <div className="text-xs text-muted-foreground mt-1">Agents Deployed</div>
              </div>
              <div className="n8n-node p-4 text-center animate-node-connect" style={{animationDelay: '0.5s'}}>
                <div className="text-2xl font-bold text-secondary">1M+</div>
                <div className="text-xs text-muted-foreground mt-1">Messages/Month</div>
              </div>
              <div className="n8n-node p-4 text-center animate-node-connect" style={{animationDelay: '1s'}}>
                <div className="text-2xl font-bold text-accent">24/7</div>
                <div className="text-xs text-muted-foreground mt-1">Always Online</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="group bg-primary hover:bg-primary/90 shadow-soft hover:shadow-medium transition-all text-lg px-8 py-6 font-semibold">
                Get Free Demo
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="glass-effect border-secondary/50 hover:border-secondary hover:bg-secondary/10 text-lg px-8 py-6 font-semibold"
                onClick={() => window.open('https://wa.me/918178199664', '_blank')}
              >
                <MessageSquare className="mr-2 h-5 w-5 text-secondary" />
                WhatsApp Us
              </Button>
            </div>

            {/* Trust badges */}
            <div className="flex items-center gap-6 pt-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-secondary" />
                <span>No coding needed</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span>Setup in 48 hours</span>
              </div>
            </div>
          </div>
          
          {/* Right Visual - AI Agent Cards */}
          <div className="relative animate-in fade-in slide-in-from-right duration-700">
            <div className="relative">
              {/* Main workflow canvas */}
              <div className="relative w-full aspect-square glass-effect rounded-2xl p-6 animate-float border border-border/50">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 rounded-2xl" />
                
                {/* AI Agent cards */}
                <div className="relative h-full flex flex-col justify-around">
                  {/* WhatsApp AI Agent */}
                  <div className="n8n-node p-5 transform hover:scale-105 transition-all group cursor-pointer">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/20 border border-primary/40 flex items-center justify-center group-hover:bg-primary/30 transition-all">
                        <MessageSquare className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-foreground">WhatsApp AI Bot</div>
                        <div className="text-sm text-muted-foreground">Handle 1000+ queries/day</div>
                      </div>
                      <div className="n8n-dot" />
                    </div>
                  </div>

                  {/* Connection indicator */}
                  <div className="flex justify-center my-2">
                    <div className="w-0.5 h-8 bg-gradient-to-b from-primary to-secondary opacity-60" />
                  </div>

                  {/* AI Sales Agent */}
                  <div className="n8n-node p-5 ml-8 transform hover:scale-105 transition-all group cursor-pointer">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg bg-secondary/20 border border-secondary/40 flex items-center justify-center group-hover:bg-secondary/30 transition-all">
                        <Bot className="h-6 w-6 text-secondary" />
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-foreground">AI Sales Agent</div>
                        <div className="text-sm text-muted-foreground">Qualify & book leads 24/7</div>
                      </div>
                      <div className="n8n-dot-success" />
                    </div>
                  </div>

                  {/* Connection indicator */}
                  <div className="flex justify-center my-2 ml-8">
                    <div className="w-0.5 h-8 bg-gradient-to-b from-secondary to-accent opacity-60" />
                  </div>

                  {/* Voice AI Agent */}
                  <div className="n8n-node p-5 transform hover:scale-105 transition-all group cursor-pointer">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg bg-accent/20 border border-accent/40 flex items-center justify-center group-hover:bg-accent/30 transition-all">
                        <Phone className="h-6 w-6 text-accent" />
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-foreground">Voice AI Agent</div>
                        <div className="text-sm text-muted-foreground">Answer calls automatically</div>
                      </div>
                      <div className="w-2.5 h-2.5 rounded-full bg-accent shadow-[0_0_8px_hsl(217_91%_60%_/_0.5)]" />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Glow effects */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl animate-pulse" />
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-secondary/20 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1.5s'}} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
