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

const blogPosts = [
  {
    id: 1,
    title: "The Importance of Custom Branding for Apparel",
    excerpt:
      "Discover why high-quality labels and tags are crucial for establishing your clothing brand's identity in a competitive market.",
    date: "Feb 15, 2024",
    author: "Design Team",
    category: "Branding",
    image:
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=500&auto=format&fit=crop&q=60",
  },

  {
    id: 3,
    title: "Choosing the Right Label Material",
    excerpt:
      "A comprehensive guide to selecting the perfect material for your woven and printed labels based on fabric type and durability.",
    date: "Feb 5, 2024",
    author: "Production Manager",
    category: "Guide",
    image:
      "https://images.unsplash.com/photo-1557053503-0c252e5c8093?w=500&auto=format&fit=crop&q=60",
  },
  {
    id: 4,
    title: "The Art of Woven Labels",
    excerpt:
      "Dive into the intricate world of woven labels. Learn about the craftsmanship and detail that goes into creating premium brand identifiers.",
    date: "Jan 28, 2024",
    author: "Lead Weaver",
    category: "Craftsmanship",
    image: "/woven Labels.webp",
  },
];

export default function BlogSection() {
  return (
    <section
      id="blog"
      className="py-16 md:py-24 bg-background border-t border-border/40"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Latest <span className="text-primary">Insights</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Updates, trends, and guides from the world of premium branding.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col overflow-hidden hover:shadow-lg transition-shadow border-primary/10">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <Badge className="absolute top-4 right-4 bg-background/90 text-foreground backdrop-blur-sm shadow-sm hover:bg-background/100">
                    {post.category}
                  </Badge>
                </div>
                <CardHeader>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-2">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      {post.author}
                    </div>
                  </div>
                  <CardTitle className="line-clamp-2 text-xl hover:text-primary transition-colors cursor-pointer">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="line-clamp-3 text-base">
                    {post.excerpt}
                  </CardDescription>
                </CardContent>
                <CardFooter className="mt-auto">
                  <Button
                    variant="ghost"
                    className="p-0 h-auto font-semibold text-primary hover:text-primary/80 hover:bg-transparent group"
                  >
                    Read Article
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
