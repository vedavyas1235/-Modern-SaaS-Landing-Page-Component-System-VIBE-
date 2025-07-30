import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const glassCardVariants = cva(
  "glass-card rounded-xl transition-all duration-300",
  {
    variants: {
      variant: {
        default: "p-6",
        compact: "p-4",
        feature: "p-8 hover:scale-105 hover:shadow-xl",
        pricing: "p-8 border-2 hover:border-primary/50 hover:scale-105",
        testimonial: "p-6 hover:scale-102",
      },
      size: {
        default: "w-full",
        sm: "max-w-sm",
        md: "max-w-md",
        lg: "max-w-lg",
        xl: "max-w-xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface GlassCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof glassCardVariants> {}

const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(glassCardVariants({ variant, size, className }))}
        {...props}
      />
    )
  }
)
GlassCard.displayName = "GlassCard"

export { GlassCard, glassCardVariants }