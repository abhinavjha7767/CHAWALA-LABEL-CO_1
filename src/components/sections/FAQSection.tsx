import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "What is your minimum order quantity (MOQ)?",
    answer:
      "Our MOQ typically starts at 100 pieces for most labels and tags. However, for specialized items or complex custom packaging, the MOQ might vary. Please contact us with your specific requirements for a precise quote.",
  },
  {
    question: "What is your standard turnaround time?",
    answer:
      "Standard production time is generally 7-10 business days after artwork approval. Shipping times vary based on your location. We also offer expedited options if you have a tight deadline.",
  },
  {
    question: "Can I get a sample before placing a full order?",
    answer:
      "Yes! We can provide digital proofs for approval before production begins. Physical samples of your specific design can also be produced for a nominal sampling fee, which is often credited towards the bulk order.",
  },
  {
    question: "Do you offer design services?",
    answer:
      "Absolutely. Our in-house design team can help bring your vision to life. Whether you need minor adjustments to an existing logo or a complete brand identity design from scratch, we're here to help.",
  },
  {
    question: "What file formats do you accept for artwork?",
    answer:
      "We prefer vector files (AI, EPS, PDF, or SVG) to ensure the highest print quality. High-resolution raster images (PNG, JPG) at 300 DPI or higher are also acceptable for certain products.",
  },
  {
    question: "Do you ship internationally?",
    answer:
      "Yes, we ship worldwide! We work with reliable logistics partners to ensure your products reach you safely and on time, no matter where you are located.",
  },
];

export default function FAQSection() {
  return (
    <section id="faqs" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="sticky top-24 z-10"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium uppercase tracking-wider mb-6">
              <HelpCircle className="w-4 h-4" />
              <span>Support</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Everything you need to know about our products, production
              process, and shipping. Can't find the answer you're looking for?
              Feel free to contact our support team.
            </p>
            <div className="hidden lg:block relative h-64 w-64 bg-primary/5 rounded-full blur-3xl -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-background border border-border/50 rounded-lg px-6 data-[state=open]:border-primary/50 data-[state=open]:shadow-md transition-all duration-200"
                >
                  <AccordionTrigger className="text-left font-medium text-lg py-6 hover:text-primary transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
