import { TestimonialCard } from "@/components/ui/testimonial-card"
import { OptimizedImage } from "@/components/ui/optimized-image"

export const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Marketing Director", 
      company: "TechFlow Inc",
      content: "ADmyBRAND AI Suite completely transformed our marketing strategy. We've seen a 300% increase in lead generation and our content creation time has been cut in half.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Founder & CEO",
      company: "StartupForge",
      content: "The AI-powered insights have been game-changing for our startup. We went from struggling with marketing to having a clear, data-driven strategy that actually works.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Digital Marketing Manager",
      company: "GrowthLabs",
      content: "The automation features alone have saved us 20+ hours per week. The quality of AI-generated content is incredible - our engagement rates have doubled.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      rating: 5
    },
    {
      name: "David Kim",
      role: "CMO",
      company: "ScaleUp Solutions",
      content: "Best investment we've made in our marketing stack. The ROI tracking and campaign optimization features have helped us achieve our goals faster than ever.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      rating: 5
    },
    {
      name: "Lisa Thompson",
      role: "Marketing Consultant",
      company: "ThompsonMarketing",
      content: "I recommend ADmyBRAND to all my clients. The platform is intuitive, powerful, and the results speak for themselves. It's like having a marketing team in your pocket.",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face",
      rating: 5
    },
    {
      name: "James Wilson",
      role: "E-commerce Director",
      company: "RetailForward",
      content: "Our conversion rates improved by 150% within the first month. The personalized campaign suggestions and A/B testing tools are absolutely brilliant.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
      rating: 5
    }
  ]

  return (
    <section id="testimonials" className="py-24 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-display font-bold">
            Loved by Marketing{" "}
            <span className="text-gradient-elegant">Professionals</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Join thousands of successful marketers who have transformed their campaigns 
            with ADmyBRAND AI Suite.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="animate-fadeIn"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <TestimonialCard
                name={testimonial.name}
                role={testimonial.role}
                company={testimonial.company}
                content={testimonial.content}
                avatar={testimonial.avatar}
                rating={testimonial.rating}
              />
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
                      <div className="inline-flex items-center space-x-4 bg-primary/10 px-6 py-3 rounded-full border border-primary/20">
              <div className="flex -space-x-2">
                {testimonials.slice(0, 4).map((testimonial, index) => (
                  <img
                    key={index}
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-8 h-8 rounded-full border-2 border-background"
                  />
                ))}
              </div>
            <span className="text-primary font-medium">
              Join 10,000+ happy customers
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}