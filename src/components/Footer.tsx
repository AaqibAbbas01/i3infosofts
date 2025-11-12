import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border/40 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 cyber-grid opacity-5" />
      
      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              {/* Light background for logo */}
              <div className="bg-white/95 rounded-xl px-3 py-2 shadow-lg">
                <img 
                  src="https://www.i3infosoft.com/images/website-design-web-development-company-in-noida-digital-marketing-seo-company-in-noida.png" 
                  alt="i3infosoft Logo" 
                  className="h-10"
                />
              </div>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              India's leading AI-powered digital transformation partner. 
              We help businesses grow through cutting-edge technology and intelligent automation.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-lg glass-effect border border-primary/30 hover:border-primary flex items-center justify-center transition-all hover:scale-110">
                <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-lg glass-effect border border-primary/30 hover:border-primary flex items-center justify-center transition-all hover:scale-110">
                <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-lg glass-effect border border-primary/30 hover:border-primary flex items-center justify-center transition-all hover:scale-110">
                <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.441 16.892c-2.102.144-6.784.144-8.883 0C5.282 16.736 5.017 15.622 5 12c.017-3.629.285-4.736 2.558-4.892 2.099-.144 6.782-.144 8.883 0C18.718 7.264 18.982 8.378 19 12c-.018 3.629-.285 4.736-2.559 4.892zM10 9.658l4.917 2.338L10 14.342V9.658z"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#services" className="text-muted-foreground hover:text-primary transition-colors">Services</a></li>
              <li><a href="#plans" className="text-muted-foreground hover:text-primary transition-colors">Pricing</a></li>
              <li><a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">About Us</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-foreground mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">contact@i3infosoft.com</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <a href="tel:+918178199664" className="text-muted-foreground hover:text-primary transition-colors">
                  +91 81781 99664
                </a>
              </li>
              <li className="flex items-start gap-2">
                <svg className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                <a href="https://wa.me/918178199664" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  WhatsApp Chat
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">Noida, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/30 text-center text-sm text-muted-foreground">
          <p>
            © {currentYear} <span className="text-primary font-semibold">i3infosoft</span>. All rights reserved. |{" "}
            <a href="#" className="text-primary hover:text-secondary transition-colors">
              Privacy Policy
            </a>
            {" "} | {" "}
            <a href="#" className="text-primary hover:text-secondary transition-colors">
              Terms of Service
            </a>
          </p>
          <p className="mt-2 text-xs">
            Powered by AI • Built for Indian Businesses
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
