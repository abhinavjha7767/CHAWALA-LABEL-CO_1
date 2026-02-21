import { memo } from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

// Stable animation configs outside component
const slideLeft = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
} as const;
const slideRight = {
  initial: { opacity: 0, x: 20 },
  animate: { opacity: 1, x: 0 },
} as const;
const transition = { duration: 0.6 } as const;
const transitionDelay = { duration: 0.6, delay: 0.2 } as const;
const viewportOpts = { once: true } as const;

const FAQSection = memo(() => {
  const { t } = useLanguage();

  return (
    <section id="faqs" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          <motion.div
            {...slideLeft}
            viewport={viewportOpts}
            transition={transition}
            whileInView={slideLeft.animate}
            className="lg:sticky lg:top-24"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium uppercase tracking-wider mb-6">
              <HelpCircle className="w-4 h-4" />
              <span>{t.faq.support}</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-foreground">
              {t.faq.heading}{" "}
              <span className="text-primary">{t.faq.highlight}</span>
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed mb-8">
              {t.faq.subtext}
            </p>
          </motion.div>

          <motion.div
            {...slideRight}
            whileInView={slideRight.animate}
            viewport={viewportOpts}
            transition={transitionDelay}
          >
            <Accordion type="single" collapsible className="w-full space-y-4">
              {t.faq.items.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-background border border-border/50 rounded-lg px-6 data-[state=open]:border-primary/50 data-[state=open]:shadow-md transition-all duration-200"
                >
                  <AccordionTrigger className="text-left font-medium text-base py-6 hover:text-primary transition-colors">
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
});

FAQSection.displayName = "FAQSection";

export default FAQSection;
