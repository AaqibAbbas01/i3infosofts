import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Megaphone, Code, Workflow, Bot, Mail, TrendingUp } from "lucide-react";

const services = [
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description: "Complete online marketing solutions including Google Ads, Meta Ads, and local SEO optimization.",
    color: "primary",
    stats: "5X ROI"
  },
  {
    icon: Code,
    title: "Website & App Development",
    description: "Build fast, SEO-optimized, and mobile-friendly websites or custom apps to grow your business.",
    color: "secondary",
    stats: "Fast Delivery"
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    description: "Automate repetitive tasks through WhatsApp, Email, and Zapier integrations.",
    color: "accent",
    stats: "Save 20+ hrs"
  },
  {
    icon: Bot,
    title: "AI Chatbots",
    description: "Let our AI agents handle 1,000+ customer queries daily through intelligent WhatsApp automation.",
    color: "primary",
    stats: "1000+ queries"
  },
  {
    icon: Mail,
    title: "Email Marketing",
    description: "Send personalized, automated email campaigns that nurture leads and increase sales.",
    color: "secondary",
    stats: "High Convert"
  },
  {
    icon: TrendingUp,
    title: "SEO Optimization",
    description: "Rank higher on search engines and attract local customers effortlessly.",
    color: "accent",
    stats: "Top Rankings"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 lg:py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 cyber-grid opacity-10" />
      <div className="absolute top-40 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      
      {/* Animated Workflow Connections */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-15">
        <circle cx="20%" cy="30%" r="4" fill="hsl(190 100% 50%)" className="animate-pulse">
          <animate attributeName="r" values="4;6;4" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle cx="80%" cy="60%" r="4" fill="hsl(240 100% 60%)" className="animate-pulse">
          <animate attributeName="r" values="4;6;4" dur="3s" begin="1s" repeatCount="indefinite" />
        </circle>
        <circle cx="50%" cy="80%" r="4" fill="hsl(280 100% 65%)" className="animate-pulse">
          <animate attributeName="r" values="4;6;4" dur="3s" begin="2s" repeatCount="indefinite" />
        </circle>
        <path d="M 20% 30% L 80% 60%" stroke="hsl(190 100% 50% / 0.3)" strokeWidth="1" strokeDasharray="5 5">
          <animate attributeName="stroke-dashoffset" from="0" to="10" dur="1s" repeatCount="indefinite" />
        </path>
        <path d="M 80% 60% L 50% 80%" stroke="hsl(240 100% 60% / 0.3)" strokeWidth="1" strokeDasharray="5 5">
          <animate attributeName="stroke-dashoffset" from="0" to="10" dur="1s" repeatCount="indefinite" />
        </path>
      </svg>

      {/* Floating Bot Icons */}
      {[...Array(4)].map((_, i) => (
        <div
          key={i}
          className="absolute opacity-20"
          style={{
            top: `${20 + i * 20}%`,
            right: `${5 + (i % 2) * 10}%`,
            animation: 'float 6s ease-in-out infinite',
            animationDelay: `${i * 1.5}s`
          }}
        >
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" className="text-primary">
            <rect x="8" y="8" width="8" height="8" rx="1" stroke="currentColor" strokeWidth="1.5" opacity="0.6"/>
            <circle cx="10.5" cy="10.5" r="0.75" fill="currentColor"/>
            <circle cx="13.5" cy="10.5" r="0.75" fill="currentColor"/>
            <line x1="10" y1="13" x2="14" y2="13" stroke="currentColor" strokeWidth="1.5"/>
          </svg>
        </div>
      ))}
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20 animate-in fade-in slide-in-from-bottom duration-500">
          <div className="inline-block px-4 py-2 rounded-full glass-effect border border-primary/30 text-sm mb-6">
            <span className="text-gradient font-semibold">AI-Powered Services</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Complete Digital
            <span className="text-gradient"> Transformation</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Enterprise-grade solutions designed for Indian businesses. 
            From local shops to scaling startups, we've got you covered.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group glass-effect border-border/50 hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/10 group-hover:via-secondary/10 group-hover:to-accent/10 transition-all duration-500" />
              
              {/* Stats badge */}
              <div className="absolute top-4 right-4 px-3 py-1 rounded-full glass-effect text-xs font-semibold text-primary border border-primary/30">
                {service.stats}
              </div>

              <CardHeader className="relative">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-${service.color}/20 to-${service.color}/10 border border-${service.color}/30 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                  <service.icon className={`h-8 w-8 text-${service.color}`} />
                  <div className={`absolute inset-0 bg-${service.color}/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                </div>
                <CardTitle className="text-2xl font-bold group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="relative">
                <CardDescription className="text-base leading-relaxed text-muted-foreground group-hover:text-foreground transition-colors">
                  {service.description}
                </CardDescription>
                
                {/* Hover indicator */}
                <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <span>Learn More</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </CardContent>
              
              {/* Bottom gradient line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </Card>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6 text-lg">
            Ready to transform your business?
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all shadow-soft hover:shadow-medium font-semibold text-lg"
          >
            Get Started Today
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
