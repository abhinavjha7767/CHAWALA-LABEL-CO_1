import { Suspense, lazy, memo } from "react";
import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import { SectionLoader } from "@/components/ui/SectionLoader";
import { LazySection } from "@/components/LazySection";

// Lazy-load all below-the-fold sections — each gets its own chunk
const ProductsSection = lazy(
  () => import("@/components/sections/ProductsSection"),
);
const FeaturesSection = lazy(
  () => import("@/components/sections/FeaturesSection"),
);
const AboutSection = lazy(() => import("@/components/sections/AboutSection"));
const BlogSection = lazy(() => import("@/components/sections/BlogSection"));
const FAQSection = lazy(() => import("@/components/sections/FAQSection"));
const ContactSection = lazy(
  () => import("@/components/sections/ContactSection"),
);
const Footer = lazy(() => import("@/components/layout/Footer"));

// Single shared loader to avoid creating a new element per Suspense boundary
const Loader = <SectionLoader />;

const Index = memo(() => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navbar is small and always visible — not lazy */}
      <Navbar />

      <main>
        {/* HeroSection is above the fold — eagerly loaded */}
        <HeroSection />

        <LazySection fallback={Loader}>
          <ProductsSection />
        </LazySection>

        <LazySection fallback={Loader}>
          <FeaturesSection />
        </LazySection>

        <LazySection fallback={Loader}>
          <AboutSection />
        </LazySection>

        <LazySection fallback={Loader}>
          <BlogSection />
        </LazySection>

        <LazySection fallback={Loader}>
          <FAQSection />
        </LazySection>

        <LazySection fallback={Loader}>
          <ContactSection />
        </LazySection>
      </main>

      <LazySection minHeight="200px">
        <Footer />
      </LazySection>
    </div>
  );
});

Index.displayName = "Index";

export default Index;
