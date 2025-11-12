import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Check, TrendingUp, Users, Clock, DollarSign, Sparkles, Target, BarChart, Crown, Zap, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const ProPlan = () => {
  const features = [
    {
      title: "Custom Website/App",
      description: "Enterprise-grade custom solution built specifically for your business",
      benefits: [
        "Unlimited pages with custom functionality",
        "Mobile app (iOS & Android) if needed",
        "Advanced features and integrations",
        "Custom admin panel for easy management",
        "Scalable architecture for growth"
      ],
      roi: "Custom solutions increase operational efficiency by 80% and enable 3X faster scaling"
    },
    {
      title: "Advanced SEO & CRO",
      description: "Dominate search rankings and maximize conversions",
      benefits: [
        "Technical SEO + Content strategy",
        "Conversion Rate Optimization (CRO)",
        "A/B testing and data analysis",
        "Local + National SEO campaigns",
        "Competitor analysis and strategy"
      ],
      roi: "Advanced SEO brings 500+ qualified visitors daily, CRO improves conversions by 100-150%"
    },
    {
      title: "Full WhatsApp AI Automation",
      description: "Enterprise AI chatbot handling complete customer journey",
      benefits: [
        "Advanced AI with GPT-4 integration",
        "Multi-agent system for complex queries",
        "Payment collection via WhatsApp",
        "Order tracking and status updates",
        "Custom workflows for your business"
      ],
      roi: "Handle 5,000+ conversations monthly, reduce support costs by 90%, 24/7 availability"
    },
    {
      title: "Custom Workflow Integration",
      description: "Connect all your tools and automate entire business processes",
      benefits: [
        "Integrate CRM, ERP, accounting software",
        "Custom API development",
        "Automated reporting dashboards",
        "Multi-platform synchronization",
        "Real-time data flow between systems"
      ],
      roi: "Save 40+ hours per week on manual tasks, eliminate human errors completely"
    },
    {
      title: "Dedicated Growth Manager",
      description: "Senior strategist focused exclusively on your business growth",
      benefits: [
        "Strategic planning and execution",
        "Market research and opportunity analysis",
        "Budget optimization across channels",
        "Team coordination and vendor management",
        "Direct line to CEO for urgent matters"
      ],
      roi: "Having a dedicated expert increases ROI by 200% through strategic optimization"
    },
    {
      title: "Priority 24/7 Support",
      description: "Immediate response anytime, any issue",
      benefits: [
        "Dedicated support hotline",
        "< 15 min response time guarantee",
        "Priority bug fixes and updates",
        "Proactive monitoring and alerts",
        "Technical team on standby"
      ],
      roi: "Zero downtime means zero revenue loss - worth millions for growing businesses"
    },
    {
      title: "Quarterly Business Review",
      description: "Strategic sessions with our leadership team",
      benefits: [
        "In-depth performance analysis",
        "Market trends and predictions",
        "Long-term growth roadmap",
        "Investment recommendations",
        "Executive-level strategic planning"
      ],
      roi: "Strategic planning sessions identify opportunities worth 5-10X your investment"
    }
  ];

  const useCases = [
    {
      business: "SaaS Startup",
      challenge: "Rapid scaling, complex integrations, customer support overload",
      result: "Automated 95% of support, integrated 12 systems, scaled from 500 to 5,000 users",
      revenue: "ARR grew from ₹50L to ₹5Cr in 8 months",
      impact: "10X growth"
    },
    {
      business: "Manufacturing Company",
      challenge: "Manual processes, no online presence, supply chain inefficiencies",
      result: "Full ERP integration, B2B portal with 24/7 ordering, automated inventory",
      revenue: "Reduced operational costs by ₹30L/year, revenue up 250%",
      impact: "₹2Cr+ saved"
    },
    {
      business: "Healthcare Chain",
      challenge: "Multi-location management, appointment chaos, patient data scattered",
      result: "Centralized system, AI appointment booking, patient portal, analytics dashboard",
      revenue: "40% increase in appointments, 90% administrative time saved",
      impact: "₹8Cr additional revenue"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero py-20 lg:py-32">
        <div className="absolute inset-0 cyber-grid opacity-20" />
        <div className="absolute top-20 left-20 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1.5s'}} />
        
        <div className="container mx-auto px-6 relative z-10">
          <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors mb-8">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect border border-accent/30 text-sm mb-6 animate-glow">
              <Crown className="h-4 w-4 text-accent" />
              <span className="text-accent font-semibold">Enterprise Solution</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              Pro Plan
              <span className="text-gradient block mt-2">Dominate Your Market</span>
            </h1>

            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              For established businesses ready to dominate with enterprise-grade technology, 
              AI automation, and strategic growth management. Everything you need to become the market leader.
            </p>

            <div className="flex items-baseline gap-3 mb-8">
              <span className="text-6xl font-bold text-gradient">₹59,999</span>
              <span className="text-2xl text-muted-foreground">/ month</span>
            </div>

            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2 glass-effect px-4 py-2 rounded-full border border-accent/30">
                <Shield className="h-4 w-4 text-accent" />
                <span className="text-sm">Enterprise security</span>
              </div>
              <div className="flex items-center gap-2 glass-effect px-4 py-2 rounded-full border border-accent/30">
                <Users className="h-4 w-4 text-primary" />
                <span className="text-sm">Dedicated team</span>
              </div>
              <div className="flex items-center gap-2 glass-effect px-4 py-2 rounded-full border border-accent/30">
                <Zap className="h-4 w-4 text-secondary" />
                <span className="text-sm">Priority support 24/7</span>
              </div>
            </div>

            <Button 
              size="lg" 
              className="bg-gradient-to-r from-accent via-secondary to-primary hover:opacity-90 shadow-medium text-lg px-8 py-6 animate-glow"
              onClick={() => {
                const message = encodeURIComponent(
                  `Hi! I'm interested in the *Pro Plan* (₹59,999/month) - Enterprise Solution 👑\n\n` +
                  `I need enterprise-grade solutions including:\n` +
                  `• Custom Website/App Development\n` +
                  `• Advanced SEO & CRO\n` +
                  `• Full WhatsApp AI Automation\n` +
                  `• Custom Workflow Integration\n` +
                  `• Dedicated Growth Manager\n` +
                  `• Priority 24/7 Support\n` +
                  `• Quarterly Business Review\n\n` +
                  `I want to dominate my market. Please schedule an enterprise consultation.`
                );
                window.open(`https://wa.me/918178199664?text=${message}`, '_blank');
              }}
            >
              Schedule Enterprise Consultation
              <Crown className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* ROI Overview */}
      <section className="py-20 bg-background relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Enterprise-Level Returns</h2>
            <p className="text-xl text-muted-foreground">Numbers that matter for serious businesses</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="glass-effect border-accent/20 hover:scale-105 transition-all">
              <CardContent className="pt-6 text-center">
                <TrendingUp className="h-12 w-12 text-accent mx-auto mb-4" />
                <div className="text-4xl font-bold text-gradient mb-2">10-20X</div>
                <div className="text-sm text-muted-foreground">ROI for enterprises</div>
              </CardContent>
            </Card>

            <Card className="glass-effect border-primary/20 hover:scale-105 transition-all">
              <CardContent className="pt-6 text-center">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <div className="text-4xl font-bold text-gradient mb-2">500+</div>
                <div className="text-sm text-muted-foreground">Qualified leads/month</div>
              </CardContent>
            </Card>

            <Card className="glass-effect border-secondary/20 hover:scale-105 transition-all">
              <CardContent className="pt-6 text-center">
                <Clock className="h-12 w-12 text-secondary mx-auto mb-4" />
                <div className="text-4xl font-bold text-gradient mb-2">80%</div>
                <div className="text-sm text-muted-foreground">Time saved on tasks</div>
              </CardContent>
            </Card>

            <Card className="glass-effect border-accent/20 hover:scale-105 transition-all">
              <CardContent className="pt-6 text-center">
                <Target className="h-12 w-12 text-accent mx-auto mb-4" />
                <div className="text-4xl font-bold text-gradient mb-2">250%</div>
                <div className="text-sm text-muted-foreground">Revenue growth avg.</div>
              </CardContent>
            </Card>
          </div>

          {/* Value Comparison */}
          <div className="mt-16 max-w-5xl mx-auto">
            <Card className="glass-effect border-accent/30">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-center mb-8">Enterprise ROI Calculator</h3>
                <div className="grid md:grid-cols-3 gap-8">
                  <div>
                    <h4 className="font-semibold text-accent mb-4">Your Investment:</h4>
                    <div className="space-y-2 text-muted-foreground">
                      <p>• Monthly: ₹59,999</p>
                      <p>• Annual: ₹7,19,988</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-4">Expected Returns:</h4>
                    <div className="space-y-2">
                      <p>• 500 leads × 15% conversion</p>
                      <p>• 75 new customers/month</p>
                      <p>• Avg. value: ₹10,000</p>
                      <p className="font-bold text-gradient text-xl">= ₹7,50,000/month</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary mb-4">Additional Value:</h4>
                    <div className="space-y-2">
                      <p>• Cost savings: ₹2L/month</p>
                      <p>• Efficiency gains: ₹3L/month</p>
                      <p className="font-bold text-gradient text-2xl mt-4">ROI: 1,150%</p>
                      <p className="text-accent font-semibold">11.5X return!</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What's Included - Pro Has Everything */}
      <section className="py-20 bg-background relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Enterprise - No Limitations</h2>
            <p className="text-xl text-muted-foreground">Everything included - designed for market domination</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="glass-effect border-accent/30">
              <CardContent className="pt-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                      <Crown className="w-5 h-5 text-accent" />
                      Everything from Lower Tiers
                    </h3>
                    <ul className="space-y-3 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-primary">✓</span>
                        <span><span className="font-semibold">Starter Plan:</span> Landing page, basic CRM, 1 campaign</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-secondary">✓</span>
                        <span><span className="font-semibold">Growth Plan:</span> Full website, AI chatbot, multi-channel ads</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent">✓</span>
                        <span><span className="font-semibold">PLUS:</span> Everything below exclusive to Pro</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                      <Sparkles className="w-5 h-5 text-accent" />
                      Pro Plan Exclusives
                    </h3>
                    <ul className="space-y-3 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-accent">★</span>
                        <span className="font-semibold">Unlimited pages & custom features</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent">★</span>
                        <span className="font-semibold">Mobile app development (iOS & Android)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent">★</span>
                        <span className="font-semibold">Custom API & enterprise integrations</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent">★</span>
                        <span className="font-semibold">Priority 24/7 support (&lt;15min response)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent">★</span>
                        <span className="font-semibold">Quarterly executive business reviews</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent">★</span>
                        <span className="font-semibold">Dedicated growth manager (senior level)</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-8 p-6 bg-accent/10 rounded-lg border border-accent/30 text-center">
                  <Crown className="w-12 h-12 text-accent mx-auto mb-4" />
                  <p className="text-lg font-bold mb-2">No Limitations. No Compromises.</p>
                  <p className="text-sm text-muted-foreground">
                    Pro Plan is our complete enterprise solution with everything you need to dominate your market. 
                    If you need something not listed, we'll build it custom for you.
                  </p>
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
            <h2 className="text-4xl font-bold mb-4">Enterprise Feature Suite</h2>
            <p className="text-xl text-muted-foreground">Complete breakdown of what you get</p>
          </div>

          <div className="max-w-5xl mx-auto space-y-8">
            {features.map((feature, index) => (
              <Card key={index} className="glass-effect border-accent/20 hover:border-accent/40 transition-all">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/20 to-primary/10 border border-accent/30 flex items-center justify-center flex-shrink-0 animate-pulse">
                      <Crown className="h-6 w-6 text-accent" />
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
                      <h4 className="font-semibold text-accent mb-3">Enterprise Features:</h4>
                      <ul className="space-y-2">
                        {feature.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                            <span className="text-muted-foreground">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-accent/10 border border-accent/20 rounded-lg p-4">
                      <div className="flex items-start gap-2">
                        <BarChart className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                        <div>
                          <span className="font-semibold text-accent">Business Value: </span>
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

      {/* Real Success Stories */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Enterprise Success Stories</h2>
            <p className="text-xl text-muted-foreground">How Pro Plan transformed these businesses</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {useCases.map((useCase, index) => (
              <Card key={index} className="glass-effect border-accent/20 hover:scale-105 transition-all">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-xl">{useCase.business}</CardTitle>
                    <Crown className="h-5 w-5 text-accent" />
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <span className="text-sm font-semibold text-muted-foreground">Challenge:</span>
                    <p className="text-sm mt-1">{useCase.challenge}</p>
                  </div>
                  <div className="pt-4 border-t border-border/30">
                    <span className="text-sm font-semibold text-accent">Solution & Results:</span>
                    <p className="text-sm mt-1 font-semibold">{useCase.result}</p>
                  </div>
                  <div className="pt-2">
                    <div className="bg-gradient-to-r from-accent/20 to-primary/20 rounded-lg p-3 text-center">
                      <p className="text-lg font-bold text-gradient">{useCase.revenue}</p>
                      <p className="text-sm text-accent mt-1">{useCase.impact}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Pro Plan */}
      <section className="py-20 bg-background relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose Pro Plan?</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="glass-effect border-accent/20">
              <CardContent className="pt-6">
                <Shield className="h-10 w-10 text-accent mb-4" />
                <h3 className="text-xl font-bold mb-2">Enterprise Security</h3>
                <p className="text-muted-foreground">Bank-level security, compliance certifications, data privacy guaranteed</p>
              </CardContent>
            </Card>

            <Card className="glass-effect border-primary/20">
              <CardContent className="pt-6">
                <Zap className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Lightning Fast</h3>
                <p className="text-muted-foreground">Premium infrastructure, CDN delivery, 99.99% uptime SLA</p>
              </CardContent>
            </Card>

            <Card className="glass-effect border-secondary/20">
              <CardContent className="pt-6">
                <Users className="h-10 w-10 text-secondary mb-4" />
                <h3 className="text-xl font-bold mb-2">Dedicated Team</h3>
                <p className="text-muted-foreground">Senior developers, strategists, and support team assigned to you</p>
              </CardContent>
            </Card>

            <Card className="glass-effect border-accent/20">
              <CardContent className="pt-6">
                <Target className="h-10 w-10 text-accent mb-4" />
                <h3 className="text-xl font-bold mb-2">Results Guaranteed</h3>
                <p className="text-muted-foreground">Performance guarantees, ROI targets, or your money back</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background relative overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-10" />
        <div className="absolute top-20 left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" />
        
        <div className="container mx-auto px-6 relative z-10">
          <Card className="glass-effect border-accent/30 max-w-4xl mx-auto">
            <CardContent className="p-12 text-center">
              <Crown className="h-16 w-16 text-accent mx-auto mb-6 animate-float" />
              <h2 className="text-4xl font-bold mb-4">Ready to Dominate Your Market?</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Join elite businesses achieving 10-20X returns with Pro Plan
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-accent to-primary hover:opacity-90 shadow-medium text-lg px-8 py-6 animate-glow"
                  onClick={() => {
                    const message = encodeURIComponent(
                      `Hi! I want to book an Enterprise Consultation for the *Pro Plan* (₹59,999/month) 🚀\n\n` +
                      `My business needs:\n` +
                      `✓ Enterprise-grade custom solutions\n` +
                      `✓ Advanced automation (80% time savings)\n` +
                      `✓ Dedicated team with priority support\n` +
                      `✓ Expected 10-20X ROI\n\n` +
                      `Ready to scale aggressively. Let's discuss the strategy!`
                    );
                    window.open(`https://wa.me/918178199664?text=${message}`, '_blank');
                  }}
                >
                  Book Enterprise Consultation
                  <Crown className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="glass-effect border-accent/50 text-lg px-8 py-6"
                  onClick={() => window.open('https://wa.me/918178199664', '_blank')}
                >
                  Speak with CEO
                </Button>
              </div>
              <p className="text-sm text-muted-foreground mt-6">
                👑 VIP Onboarding • Custom contracts available • ROI guarantee
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default ProPlan;

