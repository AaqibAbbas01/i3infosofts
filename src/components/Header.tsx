import { Button } from "@/components/ui/button";
import { Menu, X, Workflow } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 glass-effect backdrop-blur-xl border-b border-border/30">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 group cursor-pointer">
            <div className="relative">
              {/* Light background for logo */}
              <div className="bg-white/95 rounded-lg px-3 py-2 shadow-lg group-hover:shadow-primary/20 transition-all duration-300">
                <img 
                  src="https://www.i3infosoft.com/images/website-design-web-development-company-in-noida-digital-marketing-seo-company-in-noida.png" 
                  alt="i3infosoft Logo" 
                  className="h-9 group-hover:scale-105 transition-all duration-300 relative z-10"
                />
              </div>
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-primary/15 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            </div>
            <div className="hidden sm:block">
              <span className="text-xs text-primary/90 block font-semibold flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
                Workflow Automation
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <a href="#services" className="text-foreground hover:text-primary transition-all font-medium text-sm relative group flex items-center gap-2">
              <span>Services</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#plans" className="text-foreground hover:text-primary transition-all font-medium text-sm relative group flex items-center gap-2">
              <span>Pricing</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-all font-medium text-sm relative group flex items-center gap-2">
              <span>Contact</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </a>
            <Button 
              className="bg-primary hover:bg-primary/90 shadow-soft ml-4 font-semibold"
              onClick={() => window.dispatchEvent(new Event('openChatbot'))}
            >
              <Workflow className="h-4 w-4 mr-2" />
              Talk to AI
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 rounded-lg glass-effect border border-primary/30 hover:border-primary transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-primary" />
            ) : (
              <Menu className="h-6 w-6 text-primary" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-6 pb-6 space-y-6 border-t border-border/30 pt-6 animate-in fade-in slide-in-from-top duration-300">
            <a href="#services" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors font-medium text-lg" onClick={() => setMobileMenuOpen(false)}>
              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              Services
            </a>
            <a href="#plans" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors font-medium text-lg" onClick={() => setMobileMenuOpen(false)}>
              <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
              Pricing
            </a>
            <a href="#contact" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors font-medium text-lg" onClick={() => setMobileMenuOpen(false)}>
              <div className="w-1.5 h-1.5 rounded-full bg-accent" />
              Contact
            </a>
            <Button 
              className="w-full bg-primary hover:bg-primary/90 shadow-soft font-semibold"
              onClick={() => {
                setMobileMenuOpen(false);
                window.dispatchEvent(new Event('openChatbot'));
              }}
            >
              <Workflow className="h-4 w-4 mr-2" />
              Talk to AI
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
