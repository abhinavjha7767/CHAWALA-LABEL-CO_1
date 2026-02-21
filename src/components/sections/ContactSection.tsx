import { memo } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useLanguage } from "@/context/LanguageContext";

// Stable animation configs outside component
const slideLeft = {
  initial: { opacity: 0, x: -30 },
  animate: { opacity: 1, x: 0 },
} as const;
const slideRight = {
  initial: { opacity: 0, x: 30 },
  animate: { opacity: 1, x: 0 },
} as const;
const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
} as const;
const transition = { duration: 0.6 } as const;
const viewportOpts = { once: true } as const;

const ContactSection = memo(() => {
  const { t } = useLanguage();

  const contactItems = [
    { icon: Phone, title: t.contact.phone, details: ["+91 9873705056"] },
    { icon: Mail, title: t.contact.email, details: ["arvinder22@gmail.com"] },
    {
      icon: MapPin,
      title: t.contact.address,
      details: t.contact.addressLines,
    },
  ];

  return (
    <section id="contact" className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          {...fadeUp}
          whileInView={fadeUp.animate}
          viewport={viewportOpts}
          transition={transition}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            {t.contact.heading}{" "}
            <span className="gradient-text">{t.contact.highlight}</span>
          </h2>
          <p className="text-muted-foreground text-base max-w-2xl mx-auto">
            {t.contact.subtext}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            {...slideLeft}
            whileInView={slideLeft.animate}
            viewport={viewportOpts}
            transition={transition}
            className="glass-card p-6 md:p-8"
          >
            <h3 className="font-display text-2xl font-semibold mb-6">
              {t.contact.sendMessage}
            </h3>
            <form className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    {t.contact.name}
                  </label>
                  <Input
                    placeholder={t.contact.namePlaceholder}
                    className="bg-background/50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    {t.contact.email}
                  </label>
                  <Input
                    type="email"
                    placeholder={t.contact.emailPlaceholder}
                    className="bg-background/50"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  {t.contact.company}
                </label>
                <Input
                  placeholder={t.contact.companyPlaceholder}
                  className="bg-background/50"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  {t.contact.message}
                </label>
                <Textarea
                  placeholder={t.contact.messagePlaceholder}
                  rows={4}
                  className="bg-background/50 resize-none"
                />
              </div>
              <Button className="w-full gradient-bg text-primary-foreground hover:opacity-90 group">
                {t.contact.sendButton}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            {...slideRight}
            whileInView={slideRight.animate}
            viewport={viewportOpts}
            transition={transition}
            className="space-y-6"
          >
            <div className="glass-card p-6 md:p-8">
              <h3 className="font-display text-2xl font-semibold mb-6">
                {t.contact.contactInfo}
              </h3>
              <div className="space-y-6">
                {contactItems.map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{item.title}</h4>
                      {item.details.map((detail, idx) => (
                        <p key={idx} className="text-muted-foreground text-sm">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Business Hours */}
            <div className="glass-card p-6 md:p-8">
              <h3 className="font-display text-xl font-semibold mb-4">
                {t.contact.businessHours}
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">
                    {t.contact.monFri}
                  </span>
                  <span className="font-medium">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">
                    {t.contact.saturday}
                  </span>
                  <span className="font-medium">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">
                    {t.contact.sunday}
                  </span>
                  <span className="font-medium">{t.contact.closed}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
});

ContactSection.displayName = "ContactSection";

export default ContactSection;
