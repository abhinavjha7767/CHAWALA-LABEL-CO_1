import { motion } from "framer-motion";
import { Mail, DollarSign, Zap, Award, Shield, Sparkles } from "lucide-react";

const features = [
  {
    icon: Mail,
    title: "Best Service",
    description:
      "We provide one-on-one professional service and inform via Email or WhatsApp. also we have professional presales and aftersales services.",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: DollarSign,
    title: "Competitive Price",
    description:
      "We are a manufacturer and supplier from China, so we are able to give the advantage.",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Zap,
    title: "High Efficiency",
    description:
      "With ten years experience, we can quickly provide you best customized solutions, saving your time. Production time of the most products is 10-15 business days.",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Award,
    title: "Quality Guarantee",
    description:
      "No matter material or process, we can produce based on your requirements. We will manually check each order to ensure products quality.",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Shield,
    title: "Low MOQ",
    description:
      "A few? Or tens of thousands? We at the same time meet the customization needs of large and small businesses.",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Sparkles,
    title: "Free Design",
    description:
      "Need a new design? Our professional designers have rich experience in tags, packagings, logo design, etc., and can provide free design and 3D draft.",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function FeaturesSection() {
  return (
    <section
      id="features"
      className="py-16 md:py-20 bg-background border-t border-border/30"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-foreground/60 text-sm md:text-base max-w-3xl mx-auto">
            More clothing accessories: plastic hooks, pins, ropes, eyelets, etc.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="text-center group"
            >
              <div
                className={`w-20 h-20 md:w-24 md:h-24 rounded-full ${feature.bgColor} flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform`}
              >
                <feature.icon
                  className={`w-10 h-10 md:w-12 md:h-12 ${feature.color} opacity-60`}
                  strokeWidth={1.5}
                />
              </div>
              <h3 className="font-display text-base md:text-lg font-normal mb-3 text-foreground">
                {feature.title}
              </h3>
              <p className="text-foreground/70 text-xs md:text-sm leading-relaxed max-w-xs mx-auto">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
