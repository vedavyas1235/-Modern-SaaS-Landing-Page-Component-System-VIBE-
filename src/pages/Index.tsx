import { Header } from "@/components/sections/Header"
import { HeroSection } from "@/components/sections/HeroSection"
import { FeaturesSection } from "@/components/sections/FeaturesSection"
import { DemoVideoSection } from "@/components/sections/DemoVideoSection"
import { PricingSection } from "@/components/sections/PricingSection"
import { BlogSection } from "@/components/sections/BlogSection"
import { TestimonialsSection } from "@/components/sections/TestimonialsSection"
import { FAQSection } from "@/components/sections/FAQSection"
import { Footer } from "@/components/sections/Footer"

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <DemoVideoSection />
      <PricingSection />
      <BlogSection />
      <TestimonialsSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
