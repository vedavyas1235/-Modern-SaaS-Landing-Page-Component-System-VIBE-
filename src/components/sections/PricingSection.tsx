import { PricingCard } from "@/components/ui/pricing-card"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"
import { Check, Users, Zap, Crown, Calculator, DollarSign, Calendar } from "lucide-react"

export const PricingSection = () => {
  const [showCalculator, setShowCalculator] = useState(false)
  const [teamSize, setTeamSize] = useState([5])
  const [monthlySpend, setMonthlySpend] = useState([1000])
  const [selectedPlan, setSelectedPlan] = useState("Professional")

  const plans = [
    {
      title: "Starter",
      price: "20",
      description: "Perfect for small businesses and startups",
      features: [
        "AI Content Generation (50 credits/month)",
        "Basic Analytics Dashboard",
        "Email Campaign Tools",
        "2 Team Members",
        "Standard Support",
        "Basic Templates Library"
      ],
      buttonText: "Start Free Trial"
    },
    {
      title: "Professional", 
      price: "35",
      description: "Ideal for growing marketing teams",
      features: [
        "AI Content Generation (200 credits/month)",
        "Advanced Analytics & Reports",
        "Multi-channel Campaigns",
        "10 Team Members",
        "Priority Support",
        "Premium Templates Library",
        "A/B Testing Tools",
        "Custom Integrations"
      ],
      buttonText: "Get Started",
      popular: true
    },
    {
      title: "Enterprise",
      price: "25",
      period: "/person",
      description: "For large organizations and agencies",
      features: [
        "Unlimited AI Content Generation",
        "Custom Analytics & White-label",
        "Advanced Automation Workflows",
        "Unlimited Team Members",
        "Dedicated Account Manager",
        "Custom Templates & Branding",
        "Advanced A/B Testing",
        "API Access & Custom Integrations",
        "SSO & Advanced Security"
      ],
      buttonText: "Contact Sales"
    }
  ]

  // Calculate pricing based on selections
  const calculatePrice = () => {
    const team = teamSize[0]
    const spend = monthlySpend[0]
    
    // Base price for each plan
    let basePrice = 0
    if (selectedPlan === "Starter") {
      basePrice = 20
    } else if (selectedPlan === "Professional") {
      basePrice = 35
    } else if (selectedPlan === "Enterprise") {
      basePrice = team * 25
    }
    
    // Add marketing spend factor: $1 for every $100 of marketing spend
    const marketingSpendFactor = Math.floor(spend / 100)
    
    return basePrice + marketingSpendFactor
  }

  const totalPrice = calculatePrice()
  const basePrice = selectedPlan === "Enterprise" ? teamSize[0] * 25 : selectedPlan === "Professional" ? 35 : 20
  const marketingSpendFactor = Math.floor(monthlySpend[0] / 100)
  const savings = selectedPlan === "Enterprise" ? teamSize[0] * 10 : 0

  return (
    <section id="pricing" className="py-24 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-display font-bold">
            Simple, Transparent{" "}
            <span className="text-gradient-elegant">Pricing</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Choose the perfect plan for your business. Start with our free trial and upgrade 
            as you grow. No hidden fees, cancel anytime.
          </p>
          
          {/* Calculator Toggle Button */}
          <div className="mt-8">
            <Button
              onClick={() => setShowCalculator(!showCalculator)}
              variant="outline"
              size="lg"
              className="group hover:bg-primary hover:text-white transition-all duration-300"
            >
              <Calculator className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              {showCalculator ? "Hide" : "Show"} Pricing Calculator
            </Button>
          </div>
        </div>

        {/* Interactive Pricing Calculator */}
        {showCalculator && (
          <Card className="mb-12 max-w-4xl mx-auto border-2 border-primary/20 bg-gradient-to-br from-background to-primary/5">
            <CardHeader className="text-center">
              <CardTitle className="flex items-center justify-center gap-2 text-2xl">
                <Calculator className="w-6 h-6 text-primary" />
                Pricing Calculator
              </CardTitle>
              <p className="text-muted-foreground">
                Customize your plan and see real-time pricing
              </p>
            </CardHeader>
            <CardContent className="space-y-8">
              {/* Plan Selection */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {plans.map((plan) => (
                  <Card
                    key={plan.title}
                    className={`cursor-pointer transition-all duration-300 hover:scale-105 ${
                      selectedPlan === plan.title
                        ? "border-primary bg-primary/10 ring-2 ring-primary/20"
                        : "border-border hover:border-primary/50"
                    }`}
                    onClick={() => setSelectedPlan(plan.title)}
                  >
                    <CardContent className="p-4 text-center">
                      <h3 className="font-semibold text-lg mb-2">{plan.title}</h3>
                      <div className="text-2xl font-bold text-primary">
                        ${plan.price}
                        {plan.period && <span className="text-sm text-muted-foreground">{plan.period}</span>}
                      </div>
                      {selectedPlan === plan.title && (
                        <Check className="w-5 h-5 text-primary mx-auto mt-2" />
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Team Size Slider - Only for Enterprise */}
              {selectedPlan === "Enterprise" && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <label className="text-lg font-semibold flex items-center gap-2">
                      <Users className="w-5 h-5 text-primary" />
                      Team Size: {teamSize[0]} members
                    </label>
                    <Badge variant="secondary" className="text-sm">
                      {teamSize[0] <= 5 ? "Small Team" : teamSize[0] <= 20 ? "Medium Team" : "Large Team"}
                    </Badge>
                  </div>
                  <Slider
                    value={teamSize}
                    onValueChange={setTeamSize}
                    max={50}
                    min={1}
                    step={1}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Min</span>
                    <span>Max</span>
                  </div>
                </div>
              )}

              {/* Monthly Spend Slider */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <label className="text-lg font-semibold flex items-center gap-2">
                    <DollarSign className="w-5 h-5 text-primary" />
                    Monthly Marketing Spend: ${monthlySpend[0].toLocaleString()}
                  </label>
                  <Badge variant="secondary" className="text-sm">
                    {monthlySpend[0] <= 1000 ? "Startup" : monthlySpend[0] <= 10000 ? "Growing" : "Enterprise"}
                  </Badge>
                </div>
                <Slider
                  value={monthlySpend}
                  onValueChange={setMonthlySpend}
                  max={50000}
                  min={100}
                  step={100}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>Min</span>
                  <span>Max</span>
                </div>
              </div>

              {/* Price Summary */}
              <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/30">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold">Your Custom Plan</h3>
                    <Badge className="bg-primary text-primary-foreground">
                      {selectedPlan}
                    </Badge>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Base Price:</span>
                      <span className="font-semibold">${basePrice}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Marketing Spend Factor:</span>
                      <span className="font-semibold">${marketingSpendFactor}</span>
                    </div>
                    {savings > 0 && (
                      <div className="flex justify-between items-center text-green-600">
                        <span>Volume Discount:</span>
                        <span>-${savings}</span>
                      </div>
                    )}
                    <div className="border-t pt-2 flex justify-between items-center text-lg font-bold">
                      <span>Total Monthly:</span>
                      <span className="text-2xl text-primary">${totalPrice}</span>
                    </div>
                  </div>
                  <Button className="w-full mt-4" size="lg">
                    Get Started - ${totalPrice}/month
                  </Button>
                </CardContent>
              </Card>
            </CardContent>
          </Card>
        )}
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className="animate-fadeIn"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <PricingCard
                title={plan.title}
                price={plan.price}
                period={plan.period}
                description={plan.description}
                features={plan.features}
                buttonText={plan.buttonText}
                popular={plan.popular}
              />
            </div>
          ))}
        </div>
        
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0 max-w-3xl mx-auto mb-8 mt-16 border-2 border-primary/20 rounded-lg p-4 bg-gradient-to-r from-primary/5 to-accent/5">
          <div className="text-center">
            <div className="text-lg font-bold text-primary">500+</div>
            <div className="text-xs text-muted-foreground">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold text-primary">10M+</div>
            <div className="text-xs text-muted-foreground">Content Pieces</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold text-primary">98%</div>
            <div className="text-xs text-muted-foreground">Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold text-primary">24/7</div>
            <div className="text-xs text-muted-foreground">Support</div>
          </div>
        </div>
        
        <div className="text-center mt-8">
          <p className="text-muted-foreground">
            All plans include a 14-day free trial. No credit card required. 
            <span className="text-primary font-medium"> Questions? Contact our sales team.</span>
          </p>
        </div>
      </div>
    </section>
  )
}