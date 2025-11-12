import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter Plan",
    price: "₹14,999",
    description: "Perfect for businesses just getting started",
    features: [
      "Landing Page + SEO Setup",
      "1 Marketing Campaign",
      "Email/WhatsApp Auto-Reply",
      "Basic CRM Setup"
    ],
    popular: false
  },
  {
    name: "Growth Plan",
    price: "₹29,999",
    description: "Most popular for growing businesses",
    features: [
      "Website (Up to 5 Pages)",
      "SEO + Google + Meta Ads",
      "AI WhatsApp Chatbot",
      "Email + Workflow Automation"
    ],
    popular: true
  },
  {
    name: "Pro Plan",
    price: "₹59,999",
    description: "For businesses ready to scale",
    features: [
      "Custom Website/App",
      "Advanced SEO & CRO",
      "Full WhatsApp AI Automation",
      "Dedicated Growth Manager"
    ],
    popular: false
  }
];

const Pricing = () => {
  return (
    <section id="plans" className="py-20 lg:py-32 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom duration-500">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">Affordable Plans for Every Business</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect plan to accelerate your growth
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative hover:shadow-medium transition-all duration-300 hover:-translate-y-2 ${
                plan.popular ? 'border-primary border-2 shadow-soft' : 'border-border'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-primary text-primary-foreground text-sm font-semibold px-4 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}
              
              <CardHeader>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground"> / month</span>
                </div>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              
              <CardFooter>
                <Button 
                  className="w-full" 
                  variant={plan.popular ? "default" : "outline"}
                >
                  Choose {plan.name.split(' ')[0]}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
