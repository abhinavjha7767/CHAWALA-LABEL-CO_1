import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative min-h-[50vh] bg-background overflow-hidden pt-20">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(0deg, hsl(var(--foreground)) 0px, hsl(var(--foreground)) 1px, transparent 1px, transparent 40px),
                           repeating-linear-gradient(90deg, hsl(var(--foreground)) 0px, hsl(var(--foreground)) 1px, transparent 1px, transparent 40px)`,
          }}
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 py-16 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-5xl mx-auto text-center"
        >
          <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-normal leading-tight mb-6 text-foreground">
            Custom Design High Quality Clothing Tags | Labels and Packaging
          </h1>

          <p className="text-base md:text-lg text-foreground/70 font-light max-w-3xl mx-auto">
            to add a perfect professional look for your brands.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
