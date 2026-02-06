import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-24 bg-background relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              All About the <span className="gradient-text">Brand</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-card p-8 md:p-12"
          >
            <div className="space-y-6 text-center">
              <p className="text-lg md:text-xl leading-relaxed text-foreground">
                <span className="font-semibold text-primary">AS PRINTERS</span>{" "}
                is a leading name in the garment and textile industry,
                specializing in high-quality tags and labels. For years, we have
                served businesses across various sectors, providing custom
                solutions that meet their unique branding needs.
              </p>

              <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
                Our commitment to excellence, state-of-the-art technology, and a
                dedicated team of professionals ensures that every product we
                deliver is of the highest standard. We believe in building
                lasting partnerships with our clients by offering reliable,
                efficient, and creative printing services.
              </p>

              <div className="flex flex-wrap justify-center gap-8 pt-6 border-t border-border">
                <div className="text-center">
                  <div className="font-display text-3xl font-bold gradient-text">
                    0
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Years Experience
                  </div>
                </div>
                <div className="text-center">
                  <div className="font-display text-3xl font-bold gradient-text">
                    0
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Happy Clients
                  </div>
                </div>
                <div className="text-center">
                  <div className="font-display text-3xl font-bold gradient-text">
                    0
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Labels Delivered
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
