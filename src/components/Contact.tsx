import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    businessName: "",
    businessType: "",
    businessSize: "",
    currentChallenges: "",
    monthlyBudget: "",
    servicesInterested: [] as string[],
    preferredContactMethod: "",
    timeline: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const businessTypes = [
    "Retail / E-commerce",
    "Restaurant / Cafe",
    "Healthcare",
    "Education",
    "Real Estate",
    "Professional Services",
    "Manufacturing",
    "Technology / IT",
    "Other"
  ];

  const businessSizes = [
    "Solo / Freelancer (1 person)",
    "Small (2-10 employees)",
    "Medium (11-50 employees)",
    "Large (50+ employees)"
  ];

  const budgetRanges = [
    "₹10,000 - ₹25,000/month",
    "₹25,000 - ₹50,000/month",
    "₹50,000 - ₹1,00,000/month",
    "₹1,00,000+/month"
  ];

  const servicesOptions = [
    "Digital Marketing (Google/Meta Ads)",
    "Website Development",
    "AI Chatbot & WhatsApp Automation",
    "Workflow Automation",
    "Email Marketing",
    "SEO Optimization",
    "Mobile App Development"
  ];

  const contactMethods = ["Phone Call", "WhatsApp", "Email", "Video Call"];
  
  const timelines = [
    "Urgent (Within 1 week)",
    "Soon (1-2 weeks)",
    "This Month",
    "Next Month",
    "Just Exploring"
  ];

  const handleServiceToggle = (service: string) => {
    setFormData(prev => ({
      ...prev,
      servicesInterested: prev.servicesInterested.includes(service)
        ? prev.servicesInterested.filter(s => s !== service)
        : [...prev.servicesInterested, service]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()) {
      toast({
        title: "Missing Information",
        description: "Please fill in name, email, and phone number.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);

    try {
      const { error } = await supabase
        .from('contact_submissions')
        .insert([
          {
            name: formData.name.trim(),
            email: formData.email.trim(),
            phone: formData.phone.trim(),
            business_name: formData.businessName.trim() || null,
            business_type: formData.businessType || null,
            business_size: formData.businessSize || null,
            current_challenges: formData.currentChallenges.trim() || null,
            monthly_budget: formData.monthlyBudget || null,
            services_interested: formData.servicesInterested.length > 0 ? formData.servicesInterested : null,
            preferred_contact_method: formData.preferredContactMethod || null,
            timeline: formData.timeline || null,
            message: formData.message.trim() || null,
          }
        ]);

      if (error) throw error;

      toast({
        title: "🎉 Request Submitted Successfully!",
        description: "Our team will contact you within 24 hours.",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        businessName: "",
        businessType: "",
        businessSize: "",
        currentChallenges: "",
        monthlyBudget: "",
        servicesInterested: [],
        preferredContactMethod: "",
        timeline: "",
        message: "",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send. Please try WhatsApp: +91 81781 99664",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 cyber-grid opacity-10" />
      <div className="absolute top-20 left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 rounded-full glass-effect border border-primary/30 text-sm mb-6">
            <span className="text-gradient font-semibold">Get Started Today</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Let's Build
            <span className="text-gradient"> Your Future</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to transform your business? Our AI experts are here to help.
            <br />
            <span className="text-primary font-semibold">Get a response within 24 hours!</span>
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="glass-effect shadow-medium border-primary/20 hover:border-primary/40 transition-all">
            <CardContent className="pt-8">
              <form onSubmit={handleSubmit} className="space-y-8">
                
                {/* Personal Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gradient flex items-center gap-2">
                    <span className="text-2xl">👤</span> Personal Information
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="text-sm text-muted-foreground mb-2 block">
                        Full Name <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="glass-effect border-border/50 focus:border-primary h-12"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-sm text-muted-foreground mb-2 block">
                        Email Address <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="glass-effect border-border/50 focus:border-primary h-12"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-sm text-muted-foreground mb-2 block">
                        Phone Number <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+91 XXXXX XXXXX"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="glass-effect border-border/50 focus:border-primary h-12"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="preferredContact" className="text-sm text-muted-foreground mb-2 block">
                        Preferred Contact Method
                      </Label>
                      <select
                        id="preferredContact"
                        value={formData.preferredContactMethod}
                        onChange={(e) => setFormData({...formData, preferredContactMethod: e.target.value})}
                        className="w-full h-12 glass-effect border border-border/50 focus:border-primary rounded-md px-3 bg-background text-foreground"
                      >
                        <option value="">Select method</option>
                        {contactMethods.map(method => (
                          <option key={method} value={method}>{method}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Business Information */}
                <div className="space-y-4 pt-6 border-t border-border/30">
                  <h3 className="text-lg font-semibold text-gradient flex items-center gap-2">
                    <span className="text-2xl">🏢</span> Business Information
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="businessName" className="text-sm text-muted-foreground mb-2 block">
                        Business Name
                      </Label>
                      <Input
                        id="businessName"
                        type="text"
                        placeholder="Your company name"
                        value={formData.businessName}
                        onChange={(e) => setFormData({...formData, businessName: e.target.value})}
                        className="glass-effect border-border/50 focus:border-primary h-12"
                      />
                    </div>
                    <div>
                      <Label htmlFor="businessType" className="text-sm text-muted-foreground mb-2 block">
                        Business Type
                      </Label>
                      <select
                        id="businessType"
                        value={formData.businessType}
                        onChange={(e) => setFormData({...formData, businessType: e.target.value})}
                        className="w-full h-12 glass-effect border border-border/50 focus:border-primary rounded-md px-3 bg-background text-foreground"
                      >
                        <option value="">Select type</option>
                        {businessTypes.map(type => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <Label htmlFor="businessSize" className="text-sm text-muted-foreground mb-2 block">
                        Business Size
                      </Label>
                      <select
                        id="businessSize"
                        value={formData.businessSize}
                        onChange={(e) => setFormData({...formData, businessSize: e.target.value})}
                        className="w-full h-12 glass-effect border border-border/50 focus:border-primary rounded-md px-3 bg-background text-foreground"
                      >
                        <option value="">Select size</option>
                        {businessSizes.map(size => (
                          <option key={size} value={size}>{size}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <Label htmlFor="monthlyBudget" className="text-sm text-muted-foreground mb-2 block">
                        Monthly Budget
                      </Label>
                      <select
                        id="monthlyBudget"
                        value={formData.monthlyBudget}
                        onChange={(e) => setFormData({...formData, monthlyBudget: e.target.value})}
                        className="w-full h-12 glass-effect border border-border/50 focus:border-primary rounded-md px-3 bg-background text-foreground"
                      >
                        <option value="">Select budget range</option>
                        {budgetRanges.map(range => (
                          <option key={range} value={range}>{range}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Services Interested */}
                <div className="space-y-4 pt-6 border-t border-border/30">
                  <h3 className="text-lg font-semibold text-gradient flex items-center gap-2">
                    <span className="text-2xl">🎯</span> Services You're Interested In
                  </h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    {servicesOptions.map(service => (
                      <div key={service} className="flex items-start gap-3 p-3 rounded-lg glass-effect border border-border/30 hover:border-primary/50 transition-all">
                        <Checkbox
                          id={service}
                          checked={formData.servicesInterested.includes(service)}
                          onCheckedChange={() => handleServiceToggle(service)}
                          className="mt-0.5"
                        />
                        <Label htmlFor={service} className="text-sm cursor-pointer leading-relaxed">
                          {service}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Project Details */}
                <div className="space-y-4 pt-6 border-t border-border/30">
                  <h3 className="text-lg font-semibold text-gradient flex items-center gap-2">
                    <span className="text-2xl">📋</span> Project Details
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="timeline" className="text-sm text-muted-foreground mb-2 block">
                        When do you want to start?
                      </Label>
                      <select
                        id="timeline"
                        value={formData.timeline}
                        onChange={(e) => setFormData({...formData, timeline: e.target.value})}
                        className="w-full h-12 glass-effect border border-border/50 focus:border-primary rounded-md px-3 bg-background text-foreground"
                      >
                        <option value="">Select timeline</option>
                        {timelines.map(time => (
                          <option key={time} value={time}>{time}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <Label htmlFor="challenges" className="text-sm text-muted-foreground mb-2 block">
                        What challenges are you facing?
                      </Label>
                      <Textarea
                        id="challenges"
                        placeholder="E.g., Low website traffic, manual processes taking too much time, need better customer engagement..."
                        value={formData.currentChallenges}
                        onChange={(e) => setFormData({...formData, currentChallenges: e.target.value})}
                        className="glass-effect border-border/50 focus:border-primary min-h-[100px]"
                        rows={4}
                      />
                    </div>
                    <div>
                      <Label htmlFor="message" className="text-sm text-muted-foreground mb-2 block">
                        Additional Comments / Goals
                      </Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us more about your goals, expectations, or any specific requirements..."
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        className="glass-effect border-border/50 focus:border-primary min-h-[100px]"
                        rows={4}
                      />
                    </div>
                  </div>
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 shadow-soft text-lg py-6" 
                  disabled={loading}
                >
                  {loading ? "Submitting..." : "🚀 Get Free Consultation"}
                </Button>
              </form>
              
              {/* Contact Info */}
              <div className="mt-8 pt-8 border-t border-border/30 text-center">
                <p className="text-sm text-muted-foreground mb-4">Or reach us directly:</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm">
                  <a href="mailto:contact@i3infosoft.com" className="text-primary hover:text-secondary transition-colors">
                    contact@i3infosoft.com
                  </a>
                  <span className="hidden sm:inline text-muted-foreground">•</span>
                  <a href="tel:+918178199664" className="text-primary hover:text-secondary transition-colors">
                    +91 81781 99664
                  </a>
                  <span className="hidden sm:inline text-muted-foreground">•</span>
                  <a href="https://wa.me/918178199664" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-secondary transition-colors">
                    WhatsApp Chat
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
