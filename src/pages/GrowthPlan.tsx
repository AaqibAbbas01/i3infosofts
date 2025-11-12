import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Check, TrendingUp, Users, Clock, DollarSign, Sparkles, Target, BarChart, Rocket, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const GrowthPlan = () => {
  const features = [
    {
      title: "Website (Up to 5 Pages)",
      description: "Complete professional website to establish your online authority",
      benefits: [
        "Custom 5-page website with modern design",
        "About, Services, Portfolio, Blog, Contact pages",
        "SEO optimized for all pages",
        "Fast, mobile-responsive, conversion-focused"
      ],
      roi: "Professional website increases credibility by 75%, leading to 40% higher conversion rates"
    },
    {
      title: "SEO + Google + Meta Ads",
      description: "Multi-channel marketing to dominate your local market",
      benefits: [
        "Complete SEO optimization for top rankings",
        "Google Search & Display Ads campaigns",
        "Facebook & Instagram ad campaigns",
        "Retargeting campaigns to recover lost visitors"
      ],
      roi: "Multi-channel approach can generate 5-10X ROI with 200+ qualified leads per month"
    },
    {
      title: "AI WhatsApp Chatbot",
      description: "24/7 automated customer service that never sleeps",
      benefits: [
        "Handle 1000+ customer queries automatically",
        "Instant responses in multiple languages",
        "Lead qualification and appointment booking",
        "Integration with your CRM"
      ],
      roi: "Save 30+ hours per week while improving customer satisfaction by 60%"
    },
    {
      title: "Email + Workflow Automation",
      description: "Nurture leads automatically and close more sales",
      benefits: [
        "Automated email drip campaigns",
        "Lead nurturing sequences",
        "Order confirmation & follow-ups",
        "Abandoned cart recovery"
      ],
      roi: "Recover 25-30% of abandoned carts, increase repeat purchases by 35%"
    },
    {
      title: "Dedicated Account Manager",
      description: "Your personal growth partner who understands your business",
      benefits: [
        "Single point of contact for all needs",
        "Proactive strategy recommendations",
        "Monthly performance reviews",
        "Priority support and quick responses"
      ],
      roi: "Personalized attention leads to 50% faster problem resolution and better results"
    },
    {
      title: "Weekly Strategy Calls",
      description: "Regular check-ins to optimize and scale your growth",
      benefits: [
        "Weekly performance analysis",
        "Strategy adjustments based on data",
        "New opportunity identification",
        "Competitive insights and trends"
      ],
      roi: "Data-driven optimization improves campaign performance by 40-60% month over month"
    }
  ];

  const useCases = [
    {
      business: "E-commerce Store",
      challenge: "Low traffic, high cart abandonment, manual customer support",
      result: "300% traffic increase, recovered 28% of abandoned carts, automated 80% of support queries",
      revenue: "Revenue jumped from ₹2L to ₹8L per month"
    },
    {
      business: "Dental Clinic",
      challenge: "Inconsistent appointments, local competition, no online booking",
      result: "Ranked #1 for local searches, 40% increase in appointments, 24/7 WhatsApp booking",
      revenue: "Monthly revenue increased by ₹5L"
    },
    {
      business: "Digital Marketing Agency",
      challenge: "Lead generation costs too high, poor conversion rates",
      result: "Reduced cost per lead by 65%, improved conversion rate from 2% to 8%",
      revenue: "Acquired 45 new clients in 3 months"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero py-20 lg:py-32">
        <div className="absolute inset-0 cyber-grid opacity-20" />
        <div className="absolute top-20 left-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}} />
        
        <div className="container mx-auto px-6 relative z-10">
          <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-secondary transition-colors mb-8">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect border border-secondary/30 text-sm mb-6 animate-glow">
              <Rocket className="h-4 w-4 text-secondary" />
              <span className="text-secondary font-semibold">Most Popular Plan</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              Growth Plan
              <span className="text-gradient block mt-2">Scale Your Business Fast</span>
            </h1>

            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Perfect for growing businesses ready to dominate their market with AI-powered automation 
              and multi-channel marketing. Get everything you need to scale rapidly.
            </p>

            <div className="flex items-baseline gap-3 mb-8">
              <span className="text-6xl font-bold text-gradient">₹29,999</span>
              <span className="text-2xl text-muted-foreground">/ month</span>
            </div>

            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2 glass-effect px-4 py-2 rounded-full border border-secondary/30">
                <Clock className="h-4 w-4 text-secondary" />
                <span className="text-sm">Setup in 3 weeks</span>
              </div>
              <div className="flex items-center gap-2 glass-effect px-4 py-2 rounded-full border border-secondary/30">
                <Users className="h-4 w-4 text-accent" />
                <span className="text-sm">Dedicated manager</span>
              </div>
              <div className="flex items-center gap-2 glass-effect px-4 py-2 rounded-full border border-secondary/30">
                <Zap className="h-4 w-4 text-primary" />
                <span className="text-sm">Weekly strategy calls</span>
              </div>
            </div>

            <Button 
              size="lg" 
              className="bg-gradient-to-r from-secondary via-primary to-accent hover:opacity-90 shadow-medium text-lg px-8 py-6 animate-glow"
              onClick={() => {
                const message = encodeURIComponent(
                  `Hi! I'm interested in the *Growth Plan* (₹29,999/month) - Your Most Popular Plan! 🚀\n\n` +
                  `I'd like to learn more about:\n` +
                  `• Website (Up to 5 Pages)\n` +
                  `• SEO + Google + Meta Ads\n` +
                  `• AI WhatsApp Chatbot\n` +
                  `• Email + Workflow Automation\n` +
                  `• Dedicated Account Manager\n` +
                  `• Weekly Strategy Calls\n\n` +
                  `I'm ready to scale my business. Please schedule a strategy call with me.`
                );
                window.open(`https://wa.me/918178199664?text=${message}`, '_blank');
              }}
            >
              Get Started with Growth Plan
              <Rocket className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* ROI Overview */}
      <section className="py-20 bg-background relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Expected ROI & Business Impact</h2>
            <p className="text-xl text-muted-foreground">Real numbers from businesses using the Growth Plan</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="glass-effect border-secondary/20 hover:scale-105 transition-all">
              <CardContent className="pt-6 text-center">
                <TrendingUp className="h-12 w-12 text-secondary mx-auto mb-4" />
                <div className="text-4xl font-bold text-gradient mb-2">5-10X</div>
                <div className="text-sm text-muted-foreground">Average ROI on investment</div>
              </CardContent>
            </Card>

            <Card className="glass-effect border-primary/20 hover:scale-105 transition-all">
              <CardContent className="pt-6 text-center">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <div className="text-4xl font-bold text-gradient mb-2">200+</div>
                <div className="text-sm text-muted-foreground">Qualified leads/month</div>
              </CardContent>
            </Card>

            <Card className="glass-effect border-accent/20 hover:scale-105 transition-all">
              <CardContent className="pt-6 text-center">
                <Clock className="h-12 w-12 text-accent mx-auto mb-4" />
                <div className="text-4xl font-bold text-gradient mb-2">30hrs</div>
                <div className="text-sm text-muted-foreground">Saved per week</div>
              </CardContent>
            </Card>

            <Card className="glass-effect border-secondary/20 hover:scale-105 transition-all">
              <CardContent className="pt-6 text-center">
                <Target className="h-12 w-12 text-secondary mx-auto mb-4" />
                <div className="text-4xl font-bold text-gradient mb-2">75%</div>
                <div className="text-sm text-muted-foreground">Revenue increase avg.</div>
              </CardContent>
            </Card>
          </div>

          {/* Value Comparison */}
          <div className="mt-16 max-w-4xl mx-auto">
            <Card className="glass-effect border-primary/30">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-center mb-8">Investment vs Value Comparison</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-primary mb-4">Your Investment:</h4>
                    <div className="space-y-2 text-muted-foreground">
                      <p>• Monthly: ₹29,999</p>
                      <p>• Annual: ₹3,59,988</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary mb-4">Expected Returns (Conservative):</h4>
                    <div className="space-y-2">
                      <p>• 200 leads × 10% conversion = 20 customers/month</p>
                      <p>• Average order value: ₹5,000</p>
                      <p className="font-bold text-gradient text-xl">= ₹1,00,000+ revenue/month</p>
                      <p className="text-accent font-semibold">ROI: 233% or 3.3X return</p>
                    </div>
                  </div>
                </div>
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
            <p className="text-xl text-muted-foreground">What's not included in the Growth Plan (available in Pro tier)</p>
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
                      Not Included in Growth
                    </h3>
                    <ul className="space-y-3 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-destructive">✗</span>
                        <span>Custom mobile app development</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-destructive">✗</span>
                        <span>Advanced CRO (Conversion Rate Optimization)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-destructive">✗</span>
                        <span>Custom API & system integrations</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-destructive">✗</span>
                        <span>Priority 24/7 support (&lt;15min response)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-destructive">✗</span>
                        <span>Quarterly business review with leadership</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-destructive">✗</span>
                        <span>Unlimited pages/features (limited to 5 pages)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-destructive">✗</span>
                        <span>White-label solutions</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                      <svg className="w-5 h-5 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                      What You Get
                    </h3>
                    <ul className="space-y-3 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-secondary">✓</span>
                        <span className="font-semibold">Complete 5-page website (vs landing page in Starter)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-secondary">✓</span>
                        <span className="font-semibold">AI WhatsApp chatbot (not in Starter)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-secondary">✓</span>
                        <span className="font-semibold">Multi-channel marketing (Starter has 1)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-secondary">✓</span>
                        <span className="font-semibold">Dedicated account manager (not in Starter)</span>
                      </li>
                    </ul>
                    <div className="mt-6 p-4 bg-secondary/10 rounded-lg border border-secondary/30">
                      <p className="text-sm text-foreground mb-2">
                        <span className="font-semibold">Perfect for:</span> Growing businesses ready to scale with automation and multi-channel marketing.
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Need more? <span className="text-secondary font-semibold">Pro Plan</span> adds custom development, advanced automation, and enterprise support.
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
            <h2 className="text-4xl font-bold mb-4">Complete Feature Breakdown</h2>
            <p className="text-xl text-muted-foreground">How each service drives your business growth</p>
          </div>

          <div className="max-w-5xl mx-auto space-y-8">
            {features.map((feature, index) => (
              <Card key={index} className="glass-effect border-secondary/20 hover:border-secondary/40 transition-all">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary/20 to-primary/10 border border-secondary/30 flex items-center justify-center flex-shrink-0 animate-pulse">
                      <Check className="h-6 w-6 text-secondary" />
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
                      <h4 className="font-semibold text-secondary mb-3">What You Get:</h4>
                      <ul className="space-y-2">
                        {feature.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-secondary mt-1 flex-shrink-0" />
                            <span className="text-muted-foreground">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-secondary/10 border border-secondary/20 rounded-lg p-4">
                      <div className="flex items-start gap-2">
                        <BarChart className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                        <div>
                          <span className="font-semibold text-secondary">Business Impact: </span>
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
            <h2 className="text-4xl font-bold mb-4">Real Success Stories with Growth Plan</h2>
            <p className="text-xl text-muted-foreground">See the actual results our clients achieved</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {useCases.map((useCase, index) => (
              <Card key={index} className="glass-effect border-secondary/20 hover:scale-105 transition-all">
                <CardHeader>
                  <CardTitle className="text-xl">{useCase.business}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <span className="text-sm font-semibold text-muted-foreground">Challenge:</span>
                    <p className="text-sm mt-1">{useCase.challenge}</p>
                  </div>
                  <div className="pt-4 border-t border-border/30">
                    <span className="text-sm font-semibold text-secondary">Results:</span>
                    <p className="text-sm mt-1 font-semibold">{useCase.result}</p>
                  </div>
                  <div className="pt-2">
                    <div className="bg-gradient-to-r from-secondary/20 to-primary/20 rounded-lg p-3 text-center">
                      <p className="text-lg font-bold text-gradient">{useCase.revenue}</p>
                    </div>
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
        <div className="absolute top-20 right-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" />
        
        <div className="container mx-auto px-6 relative z-10">
          <Card className="glass-effect border-secondary/30 max-w-4xl mx-auto">
            <CardContent className="p-12 text-center">
              <Rocket className="h-16 w-16 text-secondary mx-auto mb-6 animate-float" />
              <h2 className="text-4xl font-bold mb-4">Ready to Scale Your Business?</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Join 50+ businesses growing 5-10X with our Growth Plan
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-secondary to-accent hover:opacity-90 shadow-medium text-lg px-8 py-6 animate-glow"
                  onClick={() => {
                    const message = encodeURIComponent(
                      `Hi! I want to schedule a FREE Strategy Call for the *Growth Plan* (₹29,999/month) 📊\n\n` +
                      `I'm interested in scaling my business with:\n` +
                      `✓ Complete website + Multi-channel marketing\n` +
                      `✓ AI automation to save 30+ hours/week\n` +
                      `✓ Dedicated account manager support\n\n` +
                      `Please contact me to discuss the expected 5-10X ROI for my business.`
                    );
                    window.open(`https://wa.me/918178199664?text=${message}`, '_blank');
                  }}
                >
                  Schedule Free Strategy Call
                  <Rocket className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="glass-effect border-secondary/50 text-lg px-8 py-6"
                  onClick={() => window.open('https://wa.me/918178199664', '_blank')}
                >
                  Talk to Growth Expert
                </Button>
              </div>
              <p className="text-sm text-muted-foreground mt-6">
                🎁 Limited Time: Get first month setup FREE • 100% ROI guarantee
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default GrowthPlan;

