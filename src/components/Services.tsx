import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  MessageSquare, 
  Bot, 
  Calendar, 
  Phone, 
  Users, 
  ShoppingCart, 
  FileText, 
  Mail, 
  Share2, 
  Search, 
  Globe, 
  Smartphone,
  TrendingUp,
  Zap,
  Database,
  Brain
} from "lucide-react";

const aiAgents = [
  {
    icon: MessageSquare,
    title: "WhatsApp AI Chatbot",
    description: "24/7 intelligent customer support. Handle 1000+ queries daily, auto-reply to messages, process orders, and provide instant information.",
    color: "primary",
    stats: "₹15K/mo",
    popular: true
  },
  {
    icon: Bot,
    title: "AI Sales Agent",
    description: "Multi-channel AI that qualifies leads on WhatsApp, Facebook & Instagram. Auto-books consultations and follows up automatically.",
    color: "secondary",
    stats: "₹25K/mo",
    popular: true
  },
  {
    icon: Calendar,
    title: "AI Appointment Agent",
    description: "Automate booking via WhatsApp. Checks calendar availability, confirms appointments, sends reminders, reduces no-shows by 80%.",
    color: "accent",
    stats: "₹12K/mo",
    popular: false
  },
  {
    icon: Phone,
    title: "AI Voice Agent",
    description: "Handle incoming calls with AI. Answer FAQs, take orders, schedule callbacks, and transfer to humans when needed. 24/7 availability.",
    color: "primary",
    stats: "₹20K/mo",
    popular: false
  },
  {
    icon: Users,
    title: "WhatsApp Group Summarizer",
    description: "Get daily AI summaries from your WhatsApp groups. Extract insights, action items, and important updates automatically.",
    color: "secondary",
    stats: "₹8K/mo",
    popular: false
  },
  {
    icon: Brain,
    title: "AI Personal Assistant",
    description: "Multi-service task automation via WhatsApp. Manage calendar, emails, documents, research, and content creation - all from chat.",
    color: "accent",
    stats: "₹30K/mo",
    popular: true
  }
];

const automationServices = [
  {
    icon: Database,
    title: "Lead & CRM Automation",
    description: "Auto-capture leads from forms, ads, WhatsApp. Sync to CRM, assign to sales team, trigger follow-up sequences automatically.",
    color: "primary",
    stats: "Save 15hrs/wk"
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Automation",
    description: "Automate Shopify/WooCommerce orders. Inventory sync, order notifications, abandoned cart recovery, delivery tracking.",
    color: "secondary",
    stats: "2X Sales"
  },
  {
    icon: FileText,
    title: "Invoice & Payment Automation",
    description: "Auto-generate invoices, send payment reminders, reconcile payments, update accounting software. Never miss a payment.",
    color: "accent",
    stats: "0 Delays"
  },
  {
    icon: Mail,
    title: "Email Marketing Automation",
    description: "Personalized email campaigns, drip sequences, welcome series, re-engagement flows. Integrate with any CRM or tool.",
    color: "primary",
    stats: "40% Open Rate"
  },
  {
    icon: Share2,
    title: "Social Media Automation",
    description: "Schedule posts, auto-reply to comments/DMs, cross-post content, track engagement. Save hours on social media.",
    color: "secondary",
    stats: "Save 10hrs/wk"
  },
  {
    icon: Zap,
    title: "Custom Workflow Builder",
    description: "Connect any 500+ apps. Build custom automations for your unique business processes. We design, you approve.",
    color: "accent",
    stats: "Any Process"
  }
];

const digitalServices = [
  {
    icon: Search,
    title: "SEO & Google Ads",
    description: "Rank #1 on Google. Local SEO, Google My Business, search ads, display ads. Track every rupee spent.",
    color: "primary",
    stats: "5X ROI"
  },
  {
    icon: TrendingUp,
    title: "Meta & Social Ads",
    description: "Facebook, Instagram, YouTube ads. Targeted campaigns, retargeting, lookalike audiences. Performance guaranteed.",
    color: "secondary",
    stats: "Low CPA"
  },
  {
    icon: Globe,
    title: "Website Development",
    description: "Fast, mobile-friendly websites. Landing pages, e-commerce stores, business websites. SEO-optimized from day 1.",
    color: "accent",
    stats: "7 Days"
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Android & iOS apps for your business. Customer apps, delivery apps, internal tools. Native or cross-platform.",
    color: "primary",
    stats: "30 Days"
  }
];

const getColorClasses = (color: string) => {
  switch (color) {
    case 'primary':
      return {
        icon: 'text-primary',
        iconBg: 'bg-primary/20 border-primary/40',
        iconBgHover: 'group-hover:bg-primary/30',
        dot: 'bg-primary shadow-[0_0_8px_hsl(10_85%_62%_/_0.5)]',
        statsBorder: 'border-primary/40',
        statsText: 'text-primary'
      };
    case 'secondary':
      return {
        icon: 'text-secondary',
        iconBg: 'bg-secondary/20 border-secondary/40',
        iconBgHover: 'group-hover:bg-secondary/30',
        dot: 'bg-secondary shadow-[0_0_8px_hsl(142_71%_45%_/_0.5)]',
        statsBorder: 'border-secondary/40',
        statsText: 'text-secondary'
      };
    case 'accent':
      return {
        icon: 'text-accent',
        iconBg: 'bg-accent/20 border-accent/40',
        iconBgHover: 'group-hover:bg-accent/30',
        dot: 'bg-accent shadow-[0_0_8px_hsl(217_91%_60%_/_0.5)]',
        statsBorder: 'border-accent/40',
        statsText: 'text-accent'
      };
    default:
      return {
        icon: 'text-primary',
        iconBg: 'bg-primary/20 border-primary/40',
        iconBgHover: 'group-hover:bg-primary/30',
        dot: 'bg-primary shadow-[0_0_8px_hsl(10_85%_62%_/_0.5)]',
        statsBorder: 'border-primary/40',
        statsText: 'text-primary'
      };
  }
};

const ServiceCard = ({ service, showPopular = false }: { service: any; showPopular?: boolean }) => {
  const colors = getColorClasses(service.color);
  return (
    <Card 
      className="group n8n-node border-border/50 hover:border-primary/40 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden cursor-pointer h-full"
    >
      {/* Popular badge */}
      {showPopular && service.popular && (
        <div className="absolute top-3 right-3 px-2 py-1 rounded-md bg-primary text-primary-foreground text-xs font-bold flex items-center gap-1">
          <div className="w-1.5 h-1.5 rounded-full bg-primary-foreground animate-pulse" />
          Hot
        </div>
      )}
      
      {/* Hover glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:via-transparent group-hover:to-secondary/5 transition-all duration-500" />
      
      {/* Stats badge */}
      {!showPopular && (
        <div className={`absolute top-3 right-3 px-2 py-1 rounded-md glass-effect text-xs font-semibold ${colors.statsText} border ${colors.statsBorder}`}>
          {service.stats}
        </div>
      )}

      <CardHeader className="relative pb-3">
        <div className="flex items-start gap-4">
          {/* n8n-style icon container */}
          <div className={`w-12 h-12 rounded-lg ${colors.iconBg} border flex items-center justify-center ${colors.iconBgHover} transition-all duration-300 group-hover:scale-110 flex-shrink-0`}>
            <service.icon className={`h-6 w-6 ${colors.icon}`} />
          </div>
        </div>
        
        <CardTitle className="text-lg font-bold mt-3 group-hover:text-primary transition-colors">
          {service.title}
        </CardTitle>
        
        {showPopular && (
          <div className={`text-sm font-bold ${colors.statsText}`}>
            {service.stats}
          </div>
        )}
      </CardHeader>
      
      <CardContent className="relative pt-0">
        <CardDescription className="text-sm leading-relaxed text-muted-foreground group-hover:text-foreground/80 transition-colors">
          {service.description}
        </CardDescription>
        
        {/* Hover indicator */}
        <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
          <span>Learn More</span>
          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </CardContent>
      
      {/* Bottom connector line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
    </Card>
  );
};

const Services = () => {
  return (
    <section id="services" className="py-20 lg:py-32 bg-background relative overflow-hidden">
      {/* n8n-style dot grid background */}
      <div className="absolute inset-0 cyber-grid opacity-30" />
      
      {/* Glowing orbs */}
      <div className="absolute top-40 right-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-40 left-20 w-96 h-96 bg-secondary/8 rounded-full blur-3xl" />
      
      {/* Workflow connection lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
        <path 
          d="M 10% 20% Q 50% 35% 90% 20%" 
          stroke="url(#serviceGrad1)" 
          strokeWidth="1.5" 
          fill="none"
          strokeDasharray="6 4"
          className="animate-workflow-line"
        />
        <defs>
          <linearGradient id="serviceGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{stopColor: 'hsl(10 85% 62%)', stopOpacity: 0.6}} />
            <stop offset="100%" style={{stopColor: 'hsl(142 71% 45%)', stopOpacity: 0.6}} />
          </linearGradient>
        </defs>
      </svg>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom duration-500">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect border border-primary/40 text-sm mb-6">
            <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            <span className="text-gradient font-semibold">Our Services</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            AI Agents &
            <span className="text-gradient"> Automation</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Deploy AI agents that work 24/7 for your business. Automate WhatsApp, calls, sales, 
            support & more. Built for Indian businesses.
          </p>
        </div>

        {/* AI Agents Section */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-lg bg-primary/20 border border-primary/40 flex items-center justify-center">
              <Bot className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="text-2xl font-bold">AI Agents</h3>
              <p className="text-sm text-muted-foreground">Deploy intelligent agents that work for you</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {aiAgents.map((service, index) => (
              <ServiceCard key={index} service={service} showPopular={true} />
            ))}
          </div>
        </div>

        {/* Workflow Automation Section */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-lg bg-secondary/20 border border-secondary/40 flex items-center justify-center">
              <Zap className="h-5 w-5 text-secondary" />
            </div>
            <div>
              <h3 className="text-2xl font-bold">Workflow Automation</h3>
              <p className="text-sm text-muted-foreground">Connect your tools & automate everything</p>
            </div>
              </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {automationServices.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
        </div>

        {/* Digital Services Section */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-lg bg-accent/20 border border-accent/40 flex items-center justify-center">
              <Globe className="h-5 w-5 text-accent" />
            </div>
            <div>
              <h3 className="text-2xl font-bold">Digital Marketing & Development</h3>
              <p className="text-sm text-muted-foreground">Grow your online presence</p>
            </div>
                </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {digitalServices.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
                </div>

        {/* Industries We Serve */}
        <div className="n8n-node rounded-xl p-8 mb-16">
          <h3 className="text-xl font-bold mb-6 text-center">Industries We Serve</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Restaurants & Cafes",
              "Healthcare & Clinics", 
              "Real Estate",
              "E-commerce",
              "Education & Coaching",
              "Retail & Shops",
              "Hotels & Travel",
              "Professional Services",
              "Manufacturing",
              "Fitness & Gyms"
            ].map((industry, idx) => (
              <span key={idx} className="px-4 py-2 rounded-lg glass-effect border border-border/50 text-sm hover:border-primary/50 transition-colors cursor-pointer">
                {industry}
              </span>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center">
          <p className="text-muted-foreground mb-6 text-lg">
            Ready to automate your business?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#contact" 
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-primary hover:bg-primary/90 transition-all font-semibold text-lg text-primary-foreground shadow-soft"
            >
              <div className="w-2 h-2 rounded-full bg-primary-foreground animate-pulse" />
              Get Free Consultation
            </a>
            <a 
              href="https://wa.me/918178199664" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg n8n-node hover:border-secondary/50 transition-all font-semibold text-lg group"
            >
              <MessageSquare className="w-5 h-5 text-secondary" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
