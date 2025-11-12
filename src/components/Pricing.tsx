import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Sparkles, Rocket, Crown, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const plans = [
  {
    name: "Starter",
    price: "₹14,999",
    description: "Perfect for businesses just getting started",
    features: [
      "Landing Page + SEO Setup",
      "1 Marketing Campaign",
      "Email/WhatsApp Auto-Reply",
      "Basic CRM Setup",
      "Monthly Performance Reports"
    ],
    popular: false,
    icon: Sparkles,
    gradient: "from-primary/20 to-primary/5",
    link: "/plans/starter"
  },
  {
    name: "Growth",
    price: "₹29,999",
    description: "Most popular for growing businesses",
    features: [
      "Website (Up to 5 Pages)",
      "SEO + Google + Meta Ads",
      "AI WhatsApp Chatbot",
      "Email + Workflow Automation",
      "Dedicated Account Manager",
      "Weekly Strategy Calls"
    ],
    popular: true,
    icon: Rocket,
    gradient: "from-secondary/20 to-secondary/5",
    link: "/plans/growth"
  },
  {
    name: "Pro",
    price: "₹59,999",
    description: "For businesses ready to dominate",
    features: [
      "Custom Website/App",
      "Advanced SEO & CRO",
      "Full WhatsApp AI Automation",
      "Custom Workflow Integration",
      "Dedicated Growth Manager",
      "Priority 24/7 Support",
      "Quarterly Business Review"
    ],
    popular: false,
    icon: Crown,
    gradient: "from-accent/20 to-accent/5",
    link: "/plans/pro"
  }
];

const Pricing = () => {
  return (
    <section id="plans" className="py-20 lg:py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 cyber-grid opacity-10" />
      <div className="absolute bottom-40 left-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute top-40 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20 animate-in fade-in slide-in-from-bottom duration-500">
          <div className="inline-block px-4 py-2 rounded-full glass-effect border border-primary/30 text-sm mb-6">
            <span className="text-gradient font-semibold">Transparent Pricing</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Plans Built for
            <span className="text-gradient"> Indian Businesses</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            No hidden costs. No long-term contracts. Cancel anytime. 
            <br />
            <span className="text-primary font-semibold">Get started with a free consultation today!</span>
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Link key={index} to={plan.link}>
              <Card 
                className={`group relative glass-effect hover:shadow-medium transition-all duration-500 hover:-translate-y-3 overflow-hidden cursor-pointer ${
                  plan.popular 
                    ? 'border-primary/50 shadow-soft scale-105' 
                    : 'border-border/50'
                }`}
              >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                  <span className="bg-gradient-to-r from-primary to-secondary text-primary-foreground text-sm font-bold px-6 py-2 rounded-full shadow-soft flex items-center gap-2 animate-glow">
                    <Sparkles className="h-4 w-4" />
                    Most Popular
                  </span>
                </div>
              )}
              
              {/* Top accent line */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${
                plan.popular 
                  ? 'from-primary via-secondary to-accent' 
                  : 'from-primary/50 to-accent/50'
              }`} />
              
              <CardHeader className="relative pt-10">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${plan.gradient} border ${
                  plan.popular ? 'border-primary/50' : 'border-border/50'
                } flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-500`}>
                  <plan.icon className={`h-8 w-8 ${
                    plan.popular ? 'text-primary' : 'text-primary'
                  }`} />
                </div>
                
                <CardTitle className="text-3xl font-bold mb-2">{plan.name}</CardTitle>
                <CardDescription className="text-base">{plan.description}</CardDescription>
                <div className="mt-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-bold text-gradient">{plan.price}</span>
                    <span className="text-muted-foreground text-lg">/ month</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">Billed monthly, cancel anytime</p>
                </div>
              </CardHeader>
              
              <CardContent className="relative">
                <div className="mb-4 text-sm font-semibold text-primary">
                  What's included:
                </div>
                <ul className="space-y-4">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start group/item">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center mr-3 group-hover/item:scale-110 transition-transform">
                        <Check className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-foreground leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              
              <CardFooter className="relative pt-6">
                <Button 
                  className={`w-full text-lg py-6 group-hover:scale-105 transition-transform ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-primary to-secondary hover:opacity-90 shadow-soft' 
                      : 'glass-effect border-primary/50 hover:border-primary hover:bg-primary/10'
                  }`}
                  variant={plan.popular ? "default" : "outline"}
                >
                  Learn More About {plan.name}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardFooter>
            </Card>
            </Link>
          ))}
        </div>

        {/* Trust section */}
        <div className="mt-20 text-center">
          <div className="glass-effect rounded-2xl p-8 max-w-4xl mx-auto border border-primary/20">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Money-back Guarantee</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-secondary mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Customer Support</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent mb-2">Free</div>
                <div className="text-sm text-muted-foreground">Consultation Call</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">No</div>
                <div className="text-sm text-muted-foreground">Hidden Costs</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
