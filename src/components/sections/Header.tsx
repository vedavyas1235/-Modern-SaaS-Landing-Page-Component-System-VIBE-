import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { useScrollSpy } from "@/hooks/useScrollSpy"

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const activeSection = useScrollSpy(['features', 'demo', 'pricing', 'blog', 'testimonials', 'faq'])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-white/5">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div 
            className="flex items-center space-x-2 cursor-pointer hover:opacity-80 transition-opacity"
            onClick={scrollToTop}
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center">
            </div>
            <span className="text-xl lg:text-2xl font-display font-bold text-foreground">
              ADmyBRAND
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <button 
              onClick={() => scrollToSection('features')}
              className={`transition-colors ${
                activeSection === 'features' 
                  ? 'text-primary font-medium' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('demo')}
              className={`transition-colors ${
                activeSection === 'demo' 
                  ? 'text-primary font-medium' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Demo
            </button>
            <button 
              onClick={() => scrollToSection('pricing')}
              className={`transition-colors ${
                activeSection === 'pricing' 
                  ? 'text-primary font-medium' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Pricing
            </button>
            <button 
              onClick={() => scrollToSection('blog')}
              className={`transition-colors ${
                activeSection === 'blog' 
                  ? 'text-primary font-medium' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Blog
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className={`transition-colors ${
                activeSection === 'testimonials' 
                  ? 'text-primary font-medium' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Testimonials
            </button>
            <button 
              onClick={() => scrollToSection('faq')}
              className={`transition-colors ${
                activeSection === 'faq' 
                  ? 'text-primary font-medium' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              FAQ
            </button>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              Sign In
            </Button>
            <Button variant="hero" size="sm">
              Start Free Trial
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-white/10">
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('features')}
                className={`text-left transition-colors ${
                  activeSection === 'features' 
                    ? 'text-primary font-medium' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Features
              </button>
              <button 
                onClick={() => scrollToSection('demo')}
                className={`text-left transition-colors ${
                  activeSection === 'demo' 
                    ? 'text-primary font-medium' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Demo
              </button>
              <button 
                onClick={() => scrollToSection('pricing')}
                className={`text-left transition-colors ${
                  activeSection === 'pricing' 
                    ? 'text-primary font-medium' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Pricing
              </button>
              <button 
                onClick={() => scrollToSection('blog')}
                className={`text-left transition-colors ${
                  activeSection === 'blog' 
                    ? 'text-primary font-medium' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Blog
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className={`text-left transition-colors ${
                  activeSection === 'testimonials' 
                    ? 'text-primary font-medium' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Testimonials
              </button>
              <button 
                onClick={() => scrollToSection('faq')}
                className={`text-left transition-colors ${
                  activeSection === 'faq' 
                    ? 'text-primary font-medium' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                FAQ
              </button>
            </nav>
            
            {/* Mobile CTA */}
            <div className="flex flex-col space-y-3 pt-4 border-t border-white/10">
              <Button variant="ghost" size="sm" className="justify-start">
                Sign In
              </Button>
              <Button variant="hero" size="sm" className="justify-start">
                Start Free Trial
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}