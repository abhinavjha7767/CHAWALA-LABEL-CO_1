import { memo } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

// Stable animation configs — defined once, never recreated
const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
} as const;
const cardAnim = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
} as const;
const viewportOpts = { once: true } as const;

const AboutSection = memo(() => {
  const { t } = useLanguage();

  return (
    <section
      id="about"
      className="py-16 md:py-24 bg-background relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            {...fadeUp}
            whileInView={fadeUp.animate}
            viewport={viewportOpts}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              {t.about.heading}{" "}
              {t.about.brand && (
                <span className="gradient-text">{t.about.brand}</span>
              )}
            </h2>
          </motion.div>

          <motion.div
            {...cardAnim}
            whileInView={cardAnim.animate}
            viewport={viewportOpts}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-card p-6 md:p-12"
          >
            <div className="space-y-6 text-center">
              <p className="text-base leading-relaxed text-foreground">
                <span className="font-semibold text-primary">AS PRINTERS</span>{" "}
                {t.about.desc1}
              </p>

              <p className="text-base leading-relaxed text-muted-foreground">
                {t.about.desc2}
              </p>

              <div className="flex flex-wrap justify-center gap-8 pt-6 border-t border-border">
                <div className="text-center">
                  <div className="font-display text-3xl font-bold gradient-text">
                    0
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {t.about.yearsExperience}
                  </div>
                </div>
                <div className="text-center">
                  <div className="font-display text-3xl font-bold gradient-text">
                    0
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {t.about.happyClients}
                  </div>
                </div>
                <div className="text-center">
                  <div className="font-display text-3xl font-bold gradient-text">
                    0
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {t.about.labelsDelivered}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
});

AboutSection.displayName = "AboutSection";

export default AboutSection;
