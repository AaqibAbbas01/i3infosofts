import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Check, TrendingUp, Users, Clock, DollarSign, Sparkles, Target, BarChart } from "lucide-react";
import { Link } from "react-router-dom";

const StarterPlan = () => {
  const features = [
    {
      title: "Landing Page + SEO Setup",
      description: "Get a professional, conversion-optimized landing page that ranks on Google",
      benefits: [
        "Custom design that reflects your brand",
        "Mobile-responsive for all devices",
        "SEO optimized to rank for local keywords",
        "Fast loading speed for better conversions"
      ],
      roi: "A well-optimized landing page can increase conversions by 30-50%"
    },
    {
      title: "1 Marketing Campaign",
      description: "Launch your first digital marketing campaign to attract customers",
      benefits: [
        "Google Ads or Meta Ads campaign setup",
        "Targeted to your ideal customers",
        "Professional ad copy and creatives",
        "Campaign monitoring and optimization"
      ],
      roi: "Typical ROI of 3-5X on initial campaigns with proper targeting"
    },
    {
      title: "Email/WhatsApp Auto-Reply",
      description: "Never miss a customer inquiry with automated responses",
      benefits: [
        "Instant acknowledgment to customer queries",
        "24/7 availability even when you're busy",
        "Professional first impression",
        "Collect customer information automatically"
      ],
      roi: "Save 5-10 hours per week responding to basic inquiries"
    },
    {
      title: "Basic CRM Setup",
      description: "Organize and track your customer interactions efficiently",
      benefits: [
        "Centralized customer database",
        "Track leads and follow-ups",
        "Never lose a potential customer",
        "Simple interface for easy adoption"
      ],
      roi: "Improve lead conversion by 20-30% with organized follow-ups"
    },
    {
      title: "Monthly Performance Reports",
      description: "Understand what's working with detailed analytics",
      benefits: [
        "Track website visitors and conversions",
        "Campaign performance metrics",
        "ROI calculations and insights",
        "Data-driven recommendations"
      ],
      roi: "Make informed decisions to improve results month over month"
    }
  ];

  const useCases = [
    {
      business: "Local Restaurant",
      challenge: "Low online visibility, manual inquiry handling",
      result: "40% increase in online orders, saved 8 hours/week on phone inquiries"
    },
    {
      business: "Retail Store",
      challenge: "No online presence, losing customers to competitors",
      result: "Generated 50+ new leads in first month, 15% sales increase"
    },
    {
      business: "Service Provider",
      challenge: "Missed customer calls, no follow-up system",
      result: "Converted 25% more inquiries with automated responses and CRM"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero py-20 lg:py-32">
        <div className="absolute inset-0 cyber-grid opacity-20" />
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-6 relative z-10">
          <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-secondary transition-colors mb-8">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect border border-primary/30 text-sm mb-6">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-primary font-semibold">Perfect for Getting Started</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              Starter Plan
              <span className="text-gradient block mt-2">Launch Your Digital Presence</span>
            </h1>

            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Perfect for small businesses ready to establish their online presence and start attracting customers digitally. 
              Get everything you need to launch and grow without overwhelming complexity.
            </p>

            <div className="flex items-baseline gap-3 mb-8">
              <span className="text-6xl font-bold text-gradient">₹14,999</span>
              <span className="text-2xl text-muted-foreground">/ month</span>
            </div>

            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2 glass-effect px-4 py-2 rounded-full">
                <Clock className="h-4 w-4 text-primary" />
                <span className="text-sm">Quick 2-week setup</span>
              </div>
              <div className="flex items-center gap-2 glass-effect px-4 py-2 rounded-full">
                <Users className="h-4 w-4 text-secondary" />
                <span className="text-sm">Dedicated support</span>
              </div>
              <div className="flex items-center gap-2 glass-effect px-4 py-2 rounded-full">
                <DollarSign className="h-4 w-4 text-accent" />
                <span className="text-sm">Cancel anytime</span>
              </div>
            </div>

            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 shadow-soft text-lg px-8 py-6"
              onClick={() => {
                const message = encodeURIComponent(
                  `Hi! I'm interested in the *Starter Plan* (₹14,999/month)\n\n` +
                  `I'd like to know more about:\n` +
                  `• Landing Page + SEO Setup\n` +
                  `• 1 Marketing Campaign\n` +
                  `• Email/WhatsApp Auto-Reply\n` +
                  `• Basic CRM Setup\n` +
                  `• Monthly Performance Reports\n\n` +
                  `Please schedule a free consultation for me.`
                );
                window.open(`https://wa.me/918178199664?text=${message}`, '_blank');
              }}
            >
              Get Started with Starter Plan
              <Sparkles className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* ROI Overview */}
      <section className="py-20 bg-background relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Expected ROI & Benefits</h2>
            <p className="text-xl text-muted-foreground">Real value you can expect from the Starter Plan</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="glass-effect border-primary/20">
              <CardContent className="pt-6 text-center">
                <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-gradient mb-2">3-5X</div>
                <div className="text-sm text-muted-foreground">Average ROI on campaigns</div>
              </CardContent>
            </Card>

            <Card className="glass-effect border-secondary/20">
              <CardContent className="pt-6 text-center">
                <Users className="h-12 w-12 text-secondary mx-auto mb-4" />
                <div className="text-3xl font-bold text-gradient mb-2">50+</div>
                <div className="text-sm text-muted-foreground">New leads per month</div>
              </CardContent>
            </Card>

            <Card className="glass-effect border-accent/20">
              <CardContent className="pt-6 text-center">
                <Clock className="h-12 w-12 text-accent mx-auto mb-4" />
                <div className="text-3xl font-bold text-gradient mb-2">10hrs</div>
                <div className="text-sm text-muted-foreground">Saved per week</div>
              </CardContent>
            </Card>

            <Card className="glass-effect border-primary/20">
              <CardContent className="pt-6 text-center">
                <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-gradient mb-2">30%</div>
                <div className="text-sm text-muted-foreground">Conversion improvement</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What's Not Included - Exclusions */}
      <section className="py-20 bg-background relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Plan Limitations & Exclusions</h2>
            <p className="text-xl text-muted-foreground">What's not included in the Starter Plan (available in higher tiers)</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="glass-effect border-destructive/30">
              <CardContent className="pt-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                      <svg className="w-5 h-5 text-destructive" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      Not Included in Starter
                    </h3>
                    <ul className="space-y-3 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-destructive">✗</span>
                        <span>Full website (only 1 landing page)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-destructive">✗</span>
                        <span>AI WhatsApp chatbot</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-destructive">✗</span>
                        <span>Advanced automation workflows</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-destructive">✗</span>
                        <span>Dedicated account manager</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-destructive">✗</span>
                        <span>Weekly strategy calls</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-destructive">✗</span>
                        <span>Multiple marketing channels (single channel only)</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                      <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                      Upgrade for More
                    </h3>
                    <ul className="space-y-3 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-primary">→</span>
                        <span><span className="font-semibold text-primary">Growth Plan</span>: Full website, AI chatbot, dedicated manager</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">→</span>
                        <span><span className="font-semibold text-primary">Pro Plan</span>: Custom app, advanced AI, priority support</span>
                      </li>
                    </ul>
                    <div className="mt-6 p-4 bg-primary/10 rounded-lg border border-primary/30">
                      <p className="text-sm text-foreground">
                        <span className="font-semibold">Perfect for:</span> Businesses just starting their digital journey who need the essentials without overwhelming features.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Detailed Features */}
      <section className="py-20 bg-background relative">
        <div className="absolute inset-0 cyber-grid opacity-5" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What's Included & How It Helps You</h2>
            <p className="text-xl text-muted-foreground">Detailed breakdown of each service and its benefits</p>
          </div>

          <div className="max-w-5xl mx-auto space-y-8">
            {features.map((feature, index) => (
              <Card key={index} className="glass-effect border-primary/20 hover:border-primary/40 transition-all">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/10 border border-primary/30 flex items-center justify-center flex-shrink-0">
                      <Check className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-2xl mb-2">{feature.title}</CardTitle>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="ml-16 space-y-4">
                    <div>
                      <h4 className="font-semibold text-primary mb-3">Key Benefits:</h4>
                      <ul className="space-y-2">
                        {feature.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                            <span className="text-muted-foreground">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
                      <div className="flex items-start gap-2">
                        <BarChart className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <span className="font-semibold text-primary">ROI Impact: </span>
                          <span className="text-foreground">{feature.roi}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Real-World Success Stories */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Real Success Stories</h2>
            <p className="text-xl text-muted-foreground">See how businesses like yours benefited</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {useCases.map((useCase, index) => (
              <Card key={index} className="glass-effect border-primary/20">
                <CardHeader>
                  <CardTitle className="text-xl">{useCase.business}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <span className="text-sm font-semibold text-muted-foreground">Challenge:</span>
                    <p className="text-sm mt-1">{useCase.challenge}</p>
                  </div>
                  <div className="pt-4 border-t border-border/30">
                    <span className="text-sm font-semibold text-primary">Result:</span>
                    <p className="text-sm mt-1 font-semibold">{useCase.result}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background relative overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-10" />
        <div className="absolute top-20 left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-6 relative z-10">
          <Card className="glass-effect border-primary/30 max-w-4xl mx-auto">
            <CardContent className="p-12 text-center">
              <Sparkles className="h-16 w-16 text-primary mx-auto mb-6" />
              <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Join 100+ businesses already growing with i3infosoft
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 shadow-soft text-lg px-8 py-6"
                  onClick={() => {
                    const message = encodeURIComponent(
                      `Hi! I'm interested in the *Starter Plan* (₹14,999/month)\n\n` +
                      `I'd like to schedule a free consultation to discuss how this plan can help my business grow.\n\n` +
                      `Looking forward to hearing from you!`
                    );
                    window.open(`https://wa.me/918178199664?text=${message}`, '_blank');
                  }}
                >
                  Start Your Free Consultation
                  <Sparkles className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="glass-effect border-primary/50 text-lg px-8 py-6"
                  onClick={() => window.open('https://wa.me/918178199664', '_blank')}
                >
                  Chat with Our Team
                </Button>
              </div>
              <p className="text-sm text-muted-foreground mt-6">
                No hidden costs • Cancel anytime • 100% money-back guarantee
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default StarterPlan;

