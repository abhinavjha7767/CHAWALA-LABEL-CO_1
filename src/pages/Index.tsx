import { Suspense, lazy } from "react";
import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import { SectionLoader } from "@/components/ui/SectionLoader";

// Lazy load non-critical sections
const ProductsSection = lazy(
  () => import("@/components/sections/ProductsSection"),
);
const FeaturesSection = lazy(
  () => import("@/components/sections/FeaturesSection"),
);
const AboutSection = lazy(() => import("@/components/sections/AboutSection"));
const ContactSection = lazy(
  () => import("@/components/sections/ContactSection"),
);
const BlogSection = lazy(() => import("@/components/sections/BlogSection"));
const FAQSection = lazy(() => import("@/components/sections/FAQSection"));
const Footer = lazy(() => import("@/components/layout/Footer"));

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <Suspense fallback={<SectionLoader />}>
          <ProductsSection />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <FeaturesSection />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <AboutSection />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <BlogSection />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <FAQSection />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <ContactSection />
        </Suspense>
      </main>
      <Suspense fallback={<SectionLoader />}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;
