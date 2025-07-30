import * as React from "react"
import { Star } from "lucide-react"
import { GlassCard } from "./glass-card"
import { Avatar, AvatarFallback, AvatarImage } from "./avatar"
import { OptimizedImage } from "./optimized-image"
import { cn } from "@/lib/utils"

interface TestimonialCardProps {
  name: string
  role: string
  company: string
  content: string
  avatar?: string
  rating?: number
  className?: string
}

export const TestimonialCard = React.forwardRef<HTMLDivElement, TestimonialCardProps>(
  ({ 
    name, 
    role, 
    company, 
    content, 
    avatar, 
    rating = 5,
    className,
    ...props 
  }, ref) => {
    return (
      <GlassCard
        ref={ref}
        variant="testimonial"
        className={cn("h-full", className)}
        {...props}
      >
        <div className="space-y-4">
          <div className="flex space-x-1">
            {[...Array(rating)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          
          <blockquote className="text-foreground leading-relaxed">
            "{content}"
          </blockquote>
          
          <div className="flex items-center space-x-3 mt-6">
            <Avatar>
              <AvatarImage src={avatar} alt={name} />
              <AvatarFallback className="bg-primary/20 text-primary">
                {name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            <div>
              <div className="font-semibold text-foreground">{name}</div>
              <div className="text-sm text-muted-foreground">{role} at {company}</div>
            </div>
          </div>
        </div>
      </GlassCard>
    )
  }
)
TestimonialCard.displayName = "TestimonialCard"