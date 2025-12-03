import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, MessageSquare, Bot, Zap, Crown, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const plans = [
  {
    name: "Starter",
    price: "₹8,999",
    description: "Perfect for small businesses getting started with AI",
    features: [
      "WhatsApp AI Chatbot (500 msgs/day)",
      "Auto-reply to common questions",
      "Business hours configuration",
      "Basic CRM integration",
      "Email support",
      "Monthly performance report"
    ],
    popular: false,
    icon: MessageSquare,
    color: "primary",
    link: "/plans/starter"
  },
  {
    name: "Growth",
    price: "₹24,999",
    description: "Most popular - Full AI automation suite",
    features: [
      "WhatsApp AI Bot (Unlimited)",
      "AI Sales Agent (Lead qualification)",
      "Appointment booking automation",
      "Multi-channel support (WA + FB + IG)",
      "CRM + Google Sheets sync",
      "Workflow automations (5 flows)",
      "Dedicated account manager",
      "Weekly strategy calls"
    ],
    popular: true,
    icon: Bot,
    color: "secondary",
    link: "/plans/growth"
  },
  {
    name: "Enterprise",
    price: "₹59,999",
    description: "Complete AI transformation for your business",
    features: [
      "Everything in Growth +",
      "Voice AI Agent (Call handling)",
      "Custom AI training on your data",
      "Unlimited workflow automations",
      "E-commerce integrations",
      "Multi-language support",
      "White-label chatbot",
      "Priority 24/7 support",
      "Dedicated growth manager"
    ],
    popular: false,
    icon: Crown,
    color: "accent",
    link: "/plans/pro"
  }
];

const addOns = [
  { name: "AI Voice Agent", price: "₹15,000/mo", desc: "Handle incoming calls" },
  { name: "WhatsApp Group Summarizer", price: "₹5,000/mo", desc: "Daily insights" },
  { name: "Custom Integration", price: "₹10,000", desc: "One-time setup" },
  { name: "Additional Workflows", price: "₹3,000/flow", desc: "Per automation" }
];

const Pricing = () => {
  return (
    <section id="plans" className="py-20 lg:py-32 bg-background relative overflow-hidden">
      {/* n8n-style dot grid background */}
      <div className="absolute inset-0 cyber-grid opacity-30" />
      
      {/* Glowing orbs */}
      <div className="absolute bottom-40 left-20 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute top-40 right-20 w-96 h-96 bg-primary/8 rounded-full blur-3xl" />
      
      {/* Workflow lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-15">
        <path 
          d="M 0 50% Q 25% 30% 50% 50% T 100% 50%" 
          stroke="url(#pricingGrad)" 
          strokeWidth="1.5" 
          fill="none"
          strokeDasharray="6 4"
          className="animate-workflow-line"
        />
        <defs>
          <linearGradient id="pricingGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{stopColor: 'hsl(10 85% 62%)', stopOpacity: 0.6}} />
            <stop offset="50%" style={{stopColor: 'hsl(142 71% 45%)', stopOpacity: 0.8}} />
            <stop offset="100%" style={{stopColor: 'hsl(217 91% 60%)', stopOpacity: 0.6}} />
          </linearGradient>
        </defs>
      </svg>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom duration-500">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect border border-primary/40 text-sm mb-6">
            <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            <span className="text-gradient font-semibold">Simple Pricing</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            AI Agents Starting
            <span className="text-gradient"> ₹8,999/mo</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            No hidden costs. Cancel anytime. All plans include setup & training.
            <br />
            <span className="text-primary font-semibold">Get a free demo before you decide!</span>
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto mb-16">
          {plans.map((plan, index) => (
            <Link key={index} to={plan.link}>
              <Card 
                className={`group relative n8n-node hover:shadow-medium transition-all duration-500 hover:-translate-y-3 overflow-hidden cursor-pointer h-full ${
                  plan.popular 
                    ? 'border-primary/50 shadow-soft scale-105 z-10' 
                    : 'border-border/50'
                }`}
              >
              {/* Background gradient on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                plan.color === 'primary' ? 'from-primary/5 to-transparent' :
                plan.color === 'secondary' ? 'from-secondary/5 to-transparent' :
                'from-accent/5 to-transparent'
              }`} />
              
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-px left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent" />
              )}
              {plan.popular && (
                <div className="absolute top-4 right-4 z-20">
                  <span className="bg-primary text-primary-foreground text-xs font-bold px-3 py-1.5 rounded-md shadow-soft flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary-foreground animate-pulse" />
                    Most Popular
                  </span>
                </div>
              )}
              
              <CardHeader className="relative pt-8">
                {/* n8n-style icon */}
                <div className={`w-14 h-14 rounded-lg border flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300 ${
                  plan.color === 'primary' ? 'bg-primary/20 border-primary/40' :
                  plan.color === 'secondary' ? 'bg-secondary/20 border-secondary/40' :
                  'bg-accent/20 border-accent/40'
                }`}>
                  <plan.icon className={`h-7 w-7 ${
                    plan.color === 'primary' ? 'text-primary' :
                    plan.color === 'secondary' ? 'text-secondary' :
                    'text-accent'
                  }`} />
                </div>
                
                <CardTitle className="text-2xl font-bold mb-2">{plan.name}</CardTitle>
                <CardDescription className="text-base">{plan.description}</CardDescription>
                <div className="mt-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-gradient">{plan.price}</span>
                    <span className="text-muted-foreground text-base">/ month</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">+ GST • Cancel anytime</p>
                </div>
              </CardHeader>
              
              <CardContent className="relative">
                <div className="mb-4 text-sm font-semibold text-primary flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                  What's included:
                </div>
                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start group/item">
                      <div className={`flex-shrink-0 w-5 h-5 rounded-md flex items-center justify-center mr-3 mt-0.5 ${
                        plan.color === 'primary' ? 'bg-primary/20 border border-primary/30' :
                        plan.color === 'secondary' ? 'bg-secondary/20 border border-secondary/30' :
                        'bg-accent/20 border border-accent/30'
                      }`}>
                        <Check className={`h-3 w-3 ${
                          plan.color === 'primary' ? 'text-primary' :
                          plan.color === 'secondary' ? 'text-secondary' :
                          'text-accent'
                        }`} />
                      </div>
                      <span className="text-foreground/90 leading-relaxed text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              
              <CardFooter className="relative pt-4 pb-6">
                <Button 
                  className={`w-full py-5 group-hover:scale-[1.02] transition-transform font-semibold ${
                    plan.popular 
                      ? 'bg-primary hover:bg-primary/90 shadow-soft' 
                      : 'glass-effect border-primary/40 hover:border-primary hover:bg-primary/10'
                  }`}
                  variant={plan.popular ? "default" : "outline"}
                >
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardFooter>
            </Card>
            </Link>
          ))}
        </div>

        {/* Add-ons Section */}
        <div className="n8n-node rounded-xl p-8 mb-16 max-w-4xl mx-auto">
          <h3 className="text-xl font-bold mb-6 text-center flex items-center justify-center gap-2">
            <Zap className="w-5 h-5 text-primary" />
            Add-on Services
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {addOns.map((addon, idx) => (
              <div key={idx} className="glass-effect rounded-lg p-4 border border-border/50 hover:border-primary/40 transition-colors">
                <div className="font-semibold text-foreground">{addon.name}</div>
                <div className="text-primary font-bold">{addon.price}</div>
                <div className="text-xs text-muted-foreground mt-1">{addon.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust section */}
        <div className="n8n-node rounded-xl p-8 max-w-4xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-2">48hrs</div>
              <div className="text-sm text-muted-foreground">Setup Time</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-secondary mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Money-back (7 days)</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent mb-2">Free</div>
              <div className="text-sm text-muted-foreground">Demo & Training</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-2">₹0</div>
              <div className="text-sm text-muted-foreground">Setup Fees</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Not sure which plan? Talk to our team.
          </p>
          <a 
            href="https://wa.me/918178199664?text=Hi%2C%20I%20want%20to%20know%20more%20about%20your%20AI%20automation%20services" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-secondary hover:text-secondary/80 font-semibold"
          >
            <MessageSquare className="w-5 h-5" />
            Chat on WhatsApp for custom pricing
          </a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
