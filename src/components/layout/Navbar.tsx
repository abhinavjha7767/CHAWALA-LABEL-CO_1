import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  {
    href: "#tags",
    label: "Gallery",
  },
  { href: "#about", label: "About Us" },
  { href: "#blog", label: "Blog" },
  { href: "#faqs", label: "FAQS" },
  { href: "#contact", label: "Contact Us" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-md shadow-sm border-b border-border/50"
            : "bg-background border-b border-border/30"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-14">
            {/* Brand Logo - Left */}
            <div className="flex items-center">
              <a href="/" className="flex items-center">
                <img
                  src="/chawlaaa logo.png"
                  alt="AS PRINTERS Logo"
                  className="h-10 w-auto object-contain"
                />
              </a>
            </div>

            {/* Desktop Navigation - Center */}
            <div className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
              {navLinks.map((link) => (
                <div key={link.href} className="relative">
                  <a
                    href={link.href}
                    className="text-sm font-normal text-foreground/90 hover:text-primary transition-colors flex items-center gap-1 group py-4"
                  >
                    {link.label}
                  </a>
                </div>
              ))}
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center ml-auto gap-2 hover:cursor-pointer">
              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-foreground lg:hidden"
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
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-background lg:hidden pt-14"
          >
            <div className="container mx-auto px-4 py-8 overflow-y-auto max-h-[calc(100vh-56px)]">
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <div key={link.href}>
                    <button
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        window.location.href = link.href;
                      }}
                      className="w-full text-left text-lg font-normal text-foreground hover:text-primary transition-colors py-2 flex items-center justify-between"
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
}
