import * as React from "react"
import { Check } from "lucide-react"
import { Button } from "./button"
import { GlassCard } from "./glass-card"
import { Badge } from "./badge"
import { cn } from "@/lib/utils"

interface PricingCardProps {
  title: string
  price: string
  period?: string
  description: string
  features: string[]
  buttonText: string
  popular?: boolean
  className?: string
}

export const PricingCard = React.forwardRef<HTMLDivElement, PricingCardProps>(
  ({ 
    title, 
    price, 
    period = "/month", 
    description, 
    features, 
    buttonText, 
    popular = false,
    className,
    ...props 
  }, ref) => {
    return (
      <GlassCard
        ref={ref}
        variant="pricing"
        className={cn(
          "relative flex flex-col h-full",
          popular && "border-primary/50 shadow-xl",
          className
        )}
        {...props}
      >
        {popular && (
          <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-white px-4 py-1">
            Most Popular
          </Badge>
        )}
        
        <div className="flex flex-col h-full space-y-6">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-foreground">{title}</h3>
            <p className="text-muted-foreground mt-2">{description}</p>
          </div>
          
          <div className="text-center">
            <div className="flex items-baseline justify-center">
              <span className="text-5xl font-bold text-foreground">${price}</span>
              <span className="text-muted-foreground ml-2">{period}</span>
            </div>
          </div>
          
          <ul className="space-y-3 flex-grow">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-foreground">{feature}</span>
              </li>
            ))}
          </ul>
          
          <Button 
            variant={popular ? "hero" : "outline"} 
            size="lg" 
            className="w-full mt-auto"
          >
            {buttonText}
          </Button>
        </div>
      </GlassCard>
    )
  }
)
PricingCard.displayName = "PricingCard"