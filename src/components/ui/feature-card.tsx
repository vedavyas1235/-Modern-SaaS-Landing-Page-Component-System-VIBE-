import * as React from "react"
import { LucideIcon } from "lucide-react"
import { GlassCard } from "./glass-card"
import { cn } from "@/lib/utils"

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
  className?: string
}

export const FeatureCard = React.forwardRef<HTMLDivElement, FeatureCardProps>(
  ({ icon: Icon, title, description, className, ...props }, ref) => {
    return (
      <GlassCard
        ref={ref}
        variant="feature"
        className={cn("group h-full flex flex-col", className)}
        {...props}
      >
        <div className="flex flex-col items-center text-center space-y-4 flex-1">
          <div className="p-3 rounded-full bg-primary/20 group-hover:bg-primary/30 transition-colors">
            <Icon className="w-8 h-8 text-primary" />
          </div>
          <h3 className="text-xl font-semibold text-foreground">{title}</h3>
          <p className="text-muted-foreground leading-relaxed flex-1">{description}</p>
        </div>
      </GlassCard>
    )
  }
)
FeatureCard.displayName = "FeatureCard"