import { motion } from "framer-motion";

const tagsAndLabels = [
  { id: 1, image: "/Products_1.png" },
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
];

export default function ProductsSection() {
  return (
    <>
      {/* Tags and Labels Section */}
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
              Our Gallery
            </h2>
            <p className="text-foreground/70 text-sm md:text-base max-w-4xl mx-auto leading-relaxed">
              High quality tags and labels include hang tags, hang tag strings,
              buttons, woven labels, printed labels, metal tags, leather labels,
              stickers, embroidered patches, woven patches, TPU labels, PVC
              labels, zipper puller, webbing, etc.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
            {tagsAndLabels.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group cursor-pointer"
              >
                <div className="bg-muted/30 rounded-lg overflow-hidden mb-3 aspect-[3/4] flex items-center justify-center hover:bg-muted/50 transition-colors">
                  <img
                    src={item.image}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      
    </>
  );
}
