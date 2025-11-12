import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-marketing.jpg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero">
      <div className="container mx-auto px-6 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-in fade-in slide-in-from-left duration-700">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-foreground">
              Grow Your Local Business with{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                i3infosoft
              </span>
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-xl">
              We help small and mid-level businesses expand their reach through digital marketing, 
              SEO, website/app development, AI chatbots, WhatsApp automation, and workflow integration. 
              Let technology work for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group shadow-medium hover:shadow-soft transition-all">
                Get a Free Consultation
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline">
                View Our Work
              </Button>
            </div>
          </div>
          
          <div className="relative animate-in fade-in slide-in-from-right duration-700">
            <div className="relative rounded-2xl overflow-hidden shadow-medium">
              <img 
                src={heroImage}
                alt="Digital Marketing Solutions" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
