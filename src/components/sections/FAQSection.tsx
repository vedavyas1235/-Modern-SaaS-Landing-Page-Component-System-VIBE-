import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export const FAQSection = () => {
  const faqs = [
    {
      question: "How does the AI content generation work?",
      answer: "Our AI is trained on millions of high-performing marketing campaigns and content pieces. It analyzes your brand, target audience, and campaign goals to generate personalized content including copy, subject lines, ad creatives, and more. The AI learns from your feedback and performance data to continuously improve."
    },
    {
      question: "Can I integrate with my existing marketing tools?",
      answer: "Absolutely! ADmyBRAND AI Suite integrates with 50+ popular marketing platforms including HubSpot, Salesforce, Mailchimp, Google Ads, Facebook Ads, Shopify, and many more. Our API also allows for custom integrations to fit your specific workflow."
    },
    {
      question: "What kind of support do you provide?",
      answer: "We offer comprehensive support including 24/7 chat support for Professional and Enterprise plans, detailed documentation, video tutorials, webinar training sessions, and a dedicated account manager for Enterprise customers. Our team is committed to your success."
    },
    {
      question: "Is there a free trial available?",
      answer: "Yes! We offer a 14-day free trial for all plans with no credit card required. You'll get full access to all features during the trial period, and our team will help you get set up and see results quickly."
    },
    {
      question: "How secure is my data?",
      answer: "Security is our top priority. We use enterprise-grade encryption, SOC 2 compliance, GDPR compliance, and regular security audits. Your data is stored in secure, geographically distributed data centers with 99.9% uptime guarantee."
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer: "Yes, you can cancel your subscription at any time with no cancellation fees. Your account will remain active until the end of your billing period, and you can export all your data before canceling."
    },
    {
      question: "Do you offer custom solutions for large enterprises?",
      answer: "Yes, we offer custom Enterprise solutions with advanced features like white-labeling, custom integrations, dedicated infrastructure, advanced security features, and personalized training. Contact our sales team to discuss your specific requirements."
    },
    {
      question: "How accurate is the AI analytics and reporting?",
      answer: "Our AI analytics platform provides highly accurate insights by processing data from multiple sources in real-time. We use advanced machine learning algorithms to identify patterns, predict trends, and provide actionable recommendations with 95%+ accuracy in our performance predictions."
    }
  ]

  return (
    <section id="faq" className="py-24 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto relative z-10 max-w-4xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-6xl font-display font-bold">
            Frequently Asked{" "}
            <span className="text-gradient-elegant">Questions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Everything you need to know about ADmyBRAND AI Suite. 
            Can't find what you're looking for? Contact our support team.
          </p>
        </div>
        
        <div className="glass-card p-8">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border-border/50"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}