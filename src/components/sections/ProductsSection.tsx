import { useState, useEffect, useCallback, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

// Static data outside component — never recreated on re-render
const tagsAndLabels = [
  { id: 2, image: "/Products_2.png" },
  { id: 3, image: "/Products_3.png" },
  { id: 4, image: "/Products_4.png" },
  { id: 5, image: "/Products_5.png" },
  { id: 6, image: "/Products_6.png" },
  { id: 7, image: "/Products_7.png" },
  { id: 8, image: "/Products_8.png" },
  { id: 9, image: "/Products_9.png" },
  { id: 10, image: "/Products_10.png" },
  { id: 11, image: "/Products_11.png" },
  { id: 12, image: "/Products_12.png" },
  { id: 13, image: "/Products_13.png" },
  { id: 14, image: "/Products_14.png" },
  { id: 15, image: "/Products_15.png" },
  { id: 16, image: "/Products_16.png" },
] as const;

const TOTAL = tagsAndLabels.length;

// Stable Framer Motion variants outside component
const lightboxVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.2 },
} as const;

const imageVariants = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.9 },
  transition: { duration: 0.25 },
} as const;

const ProductsSection = memo(() => {
  const { t } = useLanguage();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openLightbox = useCallback(
    (index: number) => setSelectedIndex(index),
    [],
  );
  const closeLightbox = useCallback(() => setSelectedIndex(null), []);

  const goNext = useCallback(() => {
    setSelectedIndex((prev) => (prev === null ? 0 : (prev + 1) % TOTAL));
  }, []);

  const goPrev = useCallback(() => {
    setSelectedIndex((prev) =>
      prev === null ? 0 : (prev - 1 + TOTAL) % TOTAL,
    );
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [closeLightbox, goNext, goPrev]);

  return (
    <>
      <section id="tags" className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-normal mb-4 text-primary">
              {t.products.heading}
            </h2>
            <p className="text-foreground/70 text-sm md:text-base max-w-4xl mx-auto leading-relaxed">
              {t.products.subtext}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
            {tagsAndLabels.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.04 }}
                className="group cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                <div className="bg-muted/30 rounded-lg overflow-hidden mb-3 aspect-[3/4] flex items-center justify-center hover:bg-muted/50 transition-colors relative">
                  <img
                    src={item.image}
                    alt={`Product ${item.id}`}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-sm font-medium bg-black/50 px-3 py-1 rounded-full">
                      {t.products.clickPreview}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={lightboxVariants.initial}
            animate={lightboxVariants.animate}
            exit={lightboxVariants.exit}
            transition={lightboxVariants.transition}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors"
              aria-label="Close preview"
            >
              <X className="w-6 h-6" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                goPrev();
              }}
              className="absolute left-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            <motion.img
              key={selectedIndex}
              initial={imageVariants.initial}
              animate={imageVariants.animate}
              exit={imageVariants.exit}
              transition={imageVariants.transition}
              src={tagsAndLabels[selectedIndex].image}
              alt={`Product preview ${tagsAndLabels[selectedIndex].id}`}
              className="max-h-[90vh] max-w-[90vw] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />

            <button
              onClick={(e) => {
                e.stopPropagation();
                goNext();
              }}
              className="absolute right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors"
              aria-label="Next image"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/70 text-sm bg-black/40 px-3 py-1 rounded-full">
              {selectedIndex + 1} / {TOTAL}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
});

ProductsSection.displayName = "ProductsSection";

export default ProductsSection;
