import { memo } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, User } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useLanguage } from "@/context/LanguageContext";

// Static data outside component
const BLOG_IMAGES = [
  "/printed labels.webp",
  "/garment tags.webp",
  "/woven Labels.webp",
] as const;

// Stable viewport options
const viewportOpts = { once: true } as const;

const BlogSection = memo(() => {
  const { t } = useLanguage();

  return (
    <section
      id="blog"
      className="py-16 md:py-24 bg-background border-t border-border/40"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOpts}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-foreground">
            {t.blog.heading}{" "}
            <span className="text-primary">{t.blog.highlight}</span>
          </h2>
          <p className="text-muted-foreground text-base max-w-2xl mx-auto">
            {t.blog.subtext}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.blog.posts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOpts}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <Card className="h-full flex flex-col overflow-hidden hover:shadow-lg transition-shadow border-primary/10">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={BLOG_IMAGES[index]}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                  <Badge className="absolute top-4 right-4 bg-background/90 text-foreground backdrop-blur-sm shadow-sm hover:bg-background/100">
                    {post.category}
                  </Badge>
                </div>
                <CardHeader>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {t.blog.dates[index]}
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      {t.blog.authors[index]}
                    </div>
                  </div>
                  <CardTitle className="line-clamp-2 text-xl hover:text-primary transition-colors cursor-pointer">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="line-clamp-3 text-sm">
                    {post.excerpt}
                  </CardDescription>
                </CardContent>
                <CardFooter className="mt-auto" />
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
});

BlogSection.displayName = "BlogSection";

export default BlogSection;
