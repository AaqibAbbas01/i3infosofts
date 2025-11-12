import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap, TrendingUp } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero min-h-screen flex items-center">
      {/* Animated background grid */}
      <div className="absolute inset-0 cyber-grid opacity-30" />
      
      {/* Glowing orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}} />
      
      {/* Animated AI Bots Walking */}
      <div className="absolute top-1/4 left-0 w-full h-16 overflow-hidden opacity-40">
        <div className="animate-bot-walk">
          <svg width="60" height="60" viewBox="0 0 24 24" fill="none" className="text-primary">
            <path d="M12 2L2 7V17L12 22L22 17V7L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.6"/>
            <circle cx="12" cy="12" r="3" fill="currentColor" opacity="0.8"/>
            <path d="M12 2V7M12 17V22M2 7L7 10M17 14L22 17" stroke="currentColor" strokeWidth="1" opacity="0.4"/>
          </svg>
        </div>
      </div>
      
      <div className="absolute top-2/3 left-0 w-full h-16 overflow-hidden opacity-30" style={{animationDelay: '3s'}}>
        <div className="animate-bot-walk" style={{animationDelay: '8s'}}>
          <svg width="50" height="50" viewBox="0 0 24 24" fill="none" className="text-secondary">
            <rect x="6" y="6" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" opacity="0.6"/>
            <circle cx="10" cy="10" r="1.5" fill="currentColor"/>
            <circle cx="14" cy="10" r="1.5" fill="currentColor"/>
            <path d="M9 14H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M12 2V6M12 18V22M2 12H6M18 12H22" stroke="currentColor" strokeWidth="1" opacity="0.3"/>
          </svg>
        </div>
      </div>

      {/* Workflow Connection Lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" style={{zIndex: 1}}>
        <path 
          d="M 100 200 Q 400 100 800 300" 
          stroke="url(#gradient1)" 
          strokeWidth="2" 
          fill="none"
          strokeDasharray="10 5"
          className="animate-workflow-line"
        />
        <path 
          d="M 200 600 Q 600 400 1000 700" 
          stroke="url(#gradient2)" 
          strokeWidth="2" 
          fill="none"
          strokeDasharray="10 5"
          className="animate-workflow-line"
          style={{animationDelay: '2s'}}
        />
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{stopColor: 'hsl(190 100% 50%)', stopOpacity: 0.6}} />
            <stop offset="100%" style={{stopColor: 'hsl(240 100% 60%)', stopOpacity: 0.6}} />
          </linearGradient>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{stopColor: 'hsl(240 100% 60%)', stopOpacity: 0.6}} />
            <stop offset="100%" style={{stopColor: 'hsl(280 100% 65%)', stopOpacity: 0.6}} />
          </linearGradient>
        </defs>
      </svg>

      {/* Floating Data Particles */}
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-primary/40 rounded-full animate-data-flow"
          style={{
            left: `${10 + i * 12}%`,
            animationDelay: `${i * 1.5}s`,
            animationDuration: `${8 + (i % 3) * 2}s`
          }}
        />
      ))}

      {/* Workflow Nodes */}
      <div className="absolute top-1/3 right-20 w-32 h-32 opacity-30">
        <div className="relative w-full h-full animate-pulse-slow">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-8 rounded-lg border-2 border-primary/60 bg-primary/10" />
          <div className="absolute bottom-0 left-0 w-8 h-8 rounded-lg border-2 border-secondary/60 bg-secondary/10" />
          <div className="absolute bottom-0 right-0 w-8 h-8 rounded-lg border-2 border-accent/60 bg-accent/10" />
          <svg className="absolute inset-0 w-full h-full">
            <line x1="50%" y1="16" x2="25%" y2="100%" stroke="hsl(190 100% 50% / 0.4)" strokeWidth="1.5" strokeDasharray="4 4"/>
            <line x1="50%" y1="16" x2="75%" y2="100%" stroke="hsl(190 100% 50% / 0.4)" strokeWidth="1.5" strokeDasharray="4 4"/>
          </svg>
        </div>
      </div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-in fade-in slide-in-from-left duration-700">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect border border-primary/30 text-sm mb-4">
              <Sparkles className="h-4 w-4 text-primary animate-pulse" />
              <span className="text-primary font-semibold">Powered by Advanced AI</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              Transform Your Business with{" "}
              <span className="text-gradient">
                AI-Powered Solutions
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-muted-foreground max-w-xl leading-relaxed">
              India's leading digital transformation partner. We help businesses grow through 
              <span className="text-primary font-semibold"> cutting-edge AI</span>, 
              <span className="text-secondary font-semibold"> automation</span>, and 
              <span className="text-accent font-semibold"> intelligent marketing</span>.
            </p>

            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-6 pt-4">
              <div className="glass-effect rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-primary">100+</div>
                <div className="text-sm text-muted-foreground mt-1">Projects</div>
              </div>
              <div className="glass-effect rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-secondary">5X</div>
                <div className="text-sm text-muted-foreground mt-1">ROI Average</div>
              </div>
              <div className="glass-effect rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-accent">24/7</div>
                <div className="text-sm text-muted-foreground mt-1">AI Support</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="group bg-gradient-to-r from-primary to-secondary hover:opacity-90 shadow-soft hover:shadow-medium transition-all text-lg px-8 py-6">
                Start Free Consultation
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="glass-effect border-primary/50 hover:border-primary text-lg px-8 py-6">
                View Success Stories
              </Button>
            </div>

            {/* Trust badges */}
            <div className="flex items-center gap-6 pt-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Zap className="h-4 w-4 text-primary" />
                <span>Fast Implementation</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-secondary" />
                <span>Guaranteed Results</span>
              </div>
            </div>
          </div>
          
          {/* Right Visual */}
          <div className="relative animate-in fade-in slide-in-from-right duration-700">
            <div className="relative">
              {/* Central hologram effect */}
              <div className="relative w-full aspect-square glass-effect rounded-3xl p-8 animate-float">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 rounded-3xl animate-glow" />
                
                {/* Floating cards */}
                <div className="relative h-full flex flex-col justify-around">
                  <div className="glass-effect p-6 rounded-2xl border border-primary/30 transform hover:scale-105 transition-all">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                        <Sparkles className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-semibold">AI Chatbots</div>
                        <div className="text-sm text-muted-foreground">1000+ queries/day</div>
                      </div>
                    </div>
                  </div>

                  <div className="glass-effect p-6 rounded-2xl border border-secondary/30 transform hover:scale-105 transition-all ml-12">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                        <Zap className="h-5 w-5 text-secondary" />
                      </div>
                      <div>
                        <div className="font-semibold">Automation</div>
                        <div className="text-sm text-muted-foreground">Save 20+ hours/week</div>
                      </div>
                    </div>
                  </div>

                  <div className="glass-effect p-6 rounded-2xl border border-accent/30 transform hover:scale-105 transition-all">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                        <TrendingUp className="h-5 w-5 text-accent" />
                      </div>
                      <div>
                        <div className="font-semibold">Digital Marketing</div>
                        <div className="text-sm text-muted-foreground">5X ROI guaranteed</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Orbiting elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-pulse" />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-accent/20 rounded-full blur-xl animate-pulse" style={{animationDelay: '1.5s'}} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
