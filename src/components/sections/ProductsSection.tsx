import { motion } from "framer-motion";

const tagsAndLabels = [
  { id: 1, title: "Hang Tags", image: "/hang tags.jpg" },
  { id: 2, title: "Hang Tag String", image: "/HangTag String.jpg" },
  { id: 3, title: "Woven Labels", image: "/Woven labels.jpg" },
  { id: 4, title: "Metal Tags", image: "/Metal Tags.jpg" },
  { id: 5, title: "Leather Labels", image: "/Leather Labels.jpg" },
  {
    id: 6,
    title: "Clothing Buttons",
    image: "/Clothing Buttons.jpg",
  },
  {
    id: 7,
    title: "Printed Fabric Labels",
    image: "/Printed fabric.jpg",
  },
  {
    id: 8,
    title: "Rubber Labels",
    image: "/Rubber Labels.jpg",
  },
  {
    id: 9,
    title: "Zipper Pulls",
    image: "/Zipper Pulls.jpg",
  },
  {
    id: 10,
    title: "Heat Transfer Labels",
    image: "/Heat Transfer Labels.jpg",
  },
  {
    id: 11,
    title: "Woven Patches",
    image: "/Woven Patches.jpg",
  },
  {
    id: 12,
    title: "Embroidered Patches",
    image: "/Emboidered Patches.jpg",
  },
  {
    id: 13,
    title: "Chenille Patches",
    image: "/Chenille Patches.jpg",
  },
  {
    id: 14,
    title: "Stickers",
    image:
      "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=400&auto=format&fit=crop&q=80",
  },
  {
    id: 15,
    title: "Clear Clothing Labels",
    image: "/Clear CLothing Labels.jpg",
  },
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
              Tags and Labels
            </h2>
            <p className="text-foreground/70 text-sm md:text-base max-w-4xl mx-auto leading-relaxed">
              High quality tags and labels include hang tags, hang tag strings,
              buttons, woven labels, printed labels, metal tags, leather labels,
              stickers, embroidered patches, woven patches, TPU labels, PVC
              labels, zipper puller, webbing, etc.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-8">
            {tagsAndLabels.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group cursor-pointer"
              >
                <div className="bg-muted/30 rounded-lg overflow-hidden mb-3 aspect-square flex items-center justify-center hover:bg-muted/50 transition-colors">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-xs md:text-sm text-center text-primary hover:underline font-normal">
                  {item.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Packagings Section */}
    </>
  );
}
