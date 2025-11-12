import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Megaphone, Code, Workflow, Bot, Mail, TrendingUp } from "lucide-react";

const services = [
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description: "Complete online marketing solutions including Google Ads, Meta Ads, and local SEO optimization."
  },
  {
    icon: Code,
    title: "Website & App Development",
    description: "Build fast, SEO-optimized, and mobile-friendly websites or custom apps to grow your business."
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    description: "Automate repetitive tasks through WhatsApp, Email, and Zapier integrations."
  },
  {
    icon: Bot,
    title: "AI Chatbots",
    description: "Let our AI agents handle 1,000+ customer queries daily through intelligent WhatsApp automation."
  },
  {
    icon: Mail,
    title: "Email Marketing",
    description: "Send personalized, automated email campaigns that nurture leads and increase sales."
  },
  {
    icon: TrendingUp,
    title: "SEO Optimization",
    description: "Rank higher on search engines and attract local customers effortlessly."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom duration-500">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">Our Key Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive digital solutions tailored for your business growth
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-medium transition-all duration-300 hover:-translate-y-2 border-border"
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <service.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
