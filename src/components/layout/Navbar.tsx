import { useState, useEffect, useCallback, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

// Stable nav variant objects outside component — never recreated
const navVariants = {
  initial: { y: -100 },
  animate: { y: 0 },
  transition: { duration: 0.5 },
} as const;

const mobileMenuVariants = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.2 },
} as const;

const Navbar = memo(() => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const navLinks = [
    { href: "#tags", label: t.nav.gallery },
    { href: "#about", label: t.nav.about },
    { href: "#blog", label: t.nav.blog },
    { href: "#faqs", label: t.nav.faqs },
    { href: "#contact", label: t.nav.contact },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleLanguage = useCallback(() => {
    setLanguage(language === "en" ? "ja" : "en");
  }, [language, setLanguage]);

  const toggleMobile = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev);
  }, []);

  const closeMobile = useCallback(() => setIsMobileMenuOpen(false), []);

  return (
    <>
      <motion.nav
        initial={navVariants.initial}
        animate={navVariants.animate}
        transition={navVariants.transition}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-md shadow-sm border-b border-border/50"
            : "bg-background border-b border-border/30"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-28">
            {/* Brand Logo */}
            <div className="flex flex-col items-center">
              <a href="/" className="flex items-center">
                <img
                  src="/chawlaaa logo.png"
                  alt="AS PRINTERS Logo"
                  className="h-24 w-auto object-contain"
                  width={96}
                  height={96}
                  fetchPriority="high"
                />
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8 ml-auto text-sm">
              {navLinks.map((link) => (
                <div key={link.href} className="relative">
                  <a
                    href={link.href}
                    className="text-2xl font-bold text-foreground/90 hover:text-primary transition-colors flex items-center gap-1 group py-4"
                  >
                    {link.label}
                  </a>
                </div>
              ))}

              {/* Language Toggle */}
              <motion.button
                onClick={toggleLanguage}
                whileTap={{ scale: 0.92 }}
                whileHover={{ scale: 1.05 }}
                title={
                  language === "en" ? "Switch to Japanese" : "英語に切り替え"
                }
                className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-border/50 bg-muted/30 hover:bg-muted/60 transition-all duration-200 text-sm font-semibold text-foreground/80 hover:text-foreground select-none"
              >
                <span className="text-lg leading-none">
                  {language === "en" ? "🇯🇵" : "🇬🇧"}
                </span>
                <span className="text-xs font-bold tracking-wide">
                  {language === "en" ? "日本語" : "EN"}
                </span>
              </motion.button>
            </div>

            {/* Mobile Actions */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={toggleLanguage}
                className="p-1.5 rounded-full border border-border/40 bg-muted/30 text-sm font-bold"
                title="Toggle Language"
              >
                {language === "en" ? "🇯🇵" : "🇬🇧"}
              </button>
              <button
                onClick={toggleMobile}
                className="p-2 text-foreground text-xl"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={mobileMenuVariants.initial}
            animate={mobileMenuVariants.animate}
            exit={mobileMenuVariants.exit}
            transition={mobileMenuVariants.transition}
            className="fixed top-28 bottom-0 left-0 right-0 z-40 bg-background lg:hidden overflow-y-auto"
          >
            <div className="container mx-auto px-6 py-6">
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <div key={link.href}>
                    <button
                      onClick={() => {
                        closeMobile();
                        window.location.href = link.href;
                      }}
                      className="w-full text-left text-xl font-semibold text-foreground hover:text-primary transition-colors py-3 border-b border-border/30 flex items-center justify-between"
                    >
                      {link.label}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
});

Navbar.displayName = "Navbar";

export default Navbar;
