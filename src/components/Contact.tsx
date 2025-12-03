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

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validatePhone = (phone: string) => {
    // Allow Indian phone numbers with or without country code
    const re = /^(\+91[\-\s]?)?[6-9]\d{9}$/;
    return re.test(phone.replace(/[\s\-]/g, ''));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name.trim()) {
      toast({
        title: "Name Required",
        description: "Please enter your full name.",
        variant: "destructive",
      });
      return;
    }

    if (!formData.email.trim() || !validateEmail(formData.email)) {
      toast({
        title: "Valid Email Required",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    if (!formData.phone.trim() || !validatePhone(formData.phone)) {
      toast({
        title: "Valid Phone Required",
        description: "Please enter a valid 10-digit Indian phone number.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);

    try {
      const submissionData = {
        name: formData.name.trim(),
        email: formData.email.trim().toLowerCase(),
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
      };

      console.log('Submitting form data:', submissionData);

      const { data, error } = await supabase
        .from('contact_submissions')
        .insert([submissionData])
        .select();

      if (error) {
        console.error('Supabase error:', error);
        throw error;
      }

      console.log('Submission successful:', data);

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
    } catch (error: any) {
      console.error('Form submission error:', error);
      
      let errorMessage = "Failed to send. Please try WhatsApp: +91 81781 99664";
      
      if (error?.message?.includes('relation') || error?.message?.includes('does not exist')) {
        errorMessage = "Database not configured. Please contact us on WhatsApp: +91 81781 99664";
      } else if (error?.code === 'PGRST301') {
        errorMessage = "Connection error. Please try WhatsApp: +91 81781 99664";
      }
      
      toast({
        title: "Submission Error",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-32 bg-background relative overflow-hidden">
      {/* n8n-style dot grid background */}
      <div className="absolute inset-0 cyber-grid opacity-30" />
      
      {/* Glowing orbs */}
      <div className="absolute top-20 left-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/8 rounded-full blur-3xl" />
      
      {/* Workflow lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-15">
        <path 
          d="M 0 30% Q 30% 20% 50% 30% T 100% 25%" 
          stroke="url(#contactGrad)" 
          strokeWidth="1.5" 
          fill="none"
          strokeDasharray="6 4"
          className="animate-workflow-line"
        />
        <defs>
          <linearGradient id="contactGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{stopColor: 'hsl(10 85% 62%)', stopOpacity: 0.5}} />
            <stop offset="100%" style={{stopColor: 'hsl(142 71% 45%)', stopOpacity: 0.5}} />
          </linearGradient>
        </defs>
      </svg>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect border border-primary/40 text-sm mb-6">
            <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            <span className="text-gradient font-semibold">Start Your Workflow</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Let's Build
            <span className="text-gradient"> Your Automation</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to transform your business? Our workflow experts are here to help.
            <br />
            <span className="text-primary font-semibold">Get a response within 24 hours!</span>
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="n8n-node shadow-medium border-border/50 hover:border-primary/30 transition-all">
            <CardContent className="pt-8">
              <form onSubmit={handleSubmit} className="space-y-8">
                
                {/* Personal Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gradient flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    Personal Information
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
                        className="w-full h-12 glass-effect border border-border/50 focus:border-primary rounded-lg px-3 bg-background text-foreground"
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
                <div className="space-y-4 pt-6 border-t border-border/20">
                  <h3 className="text-lg font-semibold text-gradient flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-secondary" />
                    Business Information
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
                        className="w-full h-12 glass-effect border border-border/50 focus:border-primary rounded-lg px-3 bg-background text-foreground"
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
                        className="w-full h-12 glass-effect border border-border/50 focus:border-primary rounded-lg px-3 bg-background text-foreground"
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
                        className="w-full h-12 glass-effect border border-border/50 focus:border-primary rounded-lg px-3 bg-background text-foreground"
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
                <div className="space-y-4 pt-6 border-t border-border/20">
                  <h3 className="text-lg font-semibold text-gradient flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                    Workflow Nodes You Need
                  </h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    {servicesOptions.map(service => (
                      <label 
                        key={service} 
                        htmlFor={service}
                        className="flex items-start gap-3 p-3 rounded-lg n8n-node hover:border-primary/40 transition-all cursor-pointer"
                      >
                        <Checkbox
                          id={service}
                          checked={formData.servicesInterested.includes(service)}
                          onCheckedChange={() => handleServiceToggle(service)}
                          className="mt-0.5 border-primary/50 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                        />
                        <span className="text-sm leading-relaxed">
                          {service}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Project Details */}
                <div className="space-y-4 pt-6 border-t border-border/20">
                  <h3 className="text-lg font-semibold text-gradient flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    Project Details
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
                        className="w-full h-12 glass-effect border border-border/50 focus:border-primary rounded-lg px-3 bg-background text-foreground"
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
                        className="glass-effect border-border/50 focus:border-primary min-h-[100px] rounded-lg"
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
                        className="glass-effect border-border/50 focus:border-primary min-h-[100px] rounded-lg"
                        rows={4}
                      />
                    </div>
                  </div>
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90 shadow-soft text-lg py-6 font-semibold" 
                  disabled={loading}
                >
                  <div className="w-2 h-2 rounded-full bg-primary-foreground mr-2 animate-pulse" />
                  {loading ? "Processing..." : "Start Building Your Workflow"}
                </Button>
              </form>
              
              {/* Contact Info */}
              <div className="mt-8 pt-8 border-t border-border/20 text-center">
                <p className="text-sm text-muted-foreground mb-4">Or connect directly:</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm">
                  <a href="mailto:contact@i3infosoft.com" className="text-primary hover:text-primary/80 transition-colors flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    contact@i3infosoft.com
                  </a>
                  <span className="hidden sm:inline text-muted-foreground">•</span>
                  <a href="tel:+918178199664" className="text-primary hover:text-primary/80 transition-colors flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                    +91 81781 99664
                  </a>
                  <span className="hidden sm:inline text-muted-foreground">•</span>
                  <a href="https://wa.me/918178199664" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-secondary/80 transition-colors flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
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
