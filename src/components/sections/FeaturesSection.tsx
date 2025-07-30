import { FeatureCard } from "@/components/ui/feature-card"
import { 
  Brain, 
  Target, 
  BarChart3, 
  Zap, 
  Users, 
  Globe,
  Palette,
  MessageSquare
} from "lucide-react"

export const FeaturesSection = () => {
  const features = [
    {
      icon: Brain,
      title: "AI Content Generation",
      description: "Create compelling copy, visuals, and campaigns in seconds with our advanced AI engine trained on marketing best practices."
    },
    {
      icon: Target,
      title: "Smart Audience Targeting", 
      description: "Identify and reach your ideal customers with precision using AI-powered audience analysis and segmentation."
    },
    {
      icon: BarChart3,
      title: "Real-time Analytics",
      description: "Track campaign performance, ROI, and engagement metrics with beautiful, actionable dashboards and insights."
    },
    {
      icon: Zap,
      title: "Automated Campaigns",
      description: "Set up multi-channel marketing campaigns that run and optimize themselves based on performance data."
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Work seamlessly with your team using shared workspaces, approval workflows, and real-time collaboration tools."
    },
    {
      icon: Globe,
      title: "Multi-platform Integration",
      description: "Connect with 50+ platforms including social media, email, CRM, and advertising networks in one unified dashboard."
    },
    {
      icon: Palette,
      title: "Brand Consistency",
      description: "Maintain perfect brand consistency across all channels with AI-powered brand guidelines and asset management."
    },
    {
      icon: MessageSquare,
      title: "Customer Insights",
      description: "Understand your customers better with sentiment analysis, feedback processing, and behavioral pattern recognition."
    }
  ]

  return (
    <section id="features" className="py-24 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/3 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-display font-bold">
            Powerful Features for{" "}
            <span className="text-gradient-elegant">Modern Marketers</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Everything you need to create, manage, and optimize your marketing campaigns 
            with the power of artificial intelligence.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="animate-fadeIn"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}