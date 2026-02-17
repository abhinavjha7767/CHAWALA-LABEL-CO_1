import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";

const tagsDropdownItems = [
  { label: "Hang Tag", href: "#tags" },
  { label: "Hang Tag String", href: "#tags" },
  { label: "Woven Labels", href: "#tags" },
  { label: "Printed Fabric Labels", href: "#tags" },
  { label: "Heat Transfer Labels", href: "#tags" },
  { label: "Metal Tags", href: "#tags" },
  { label: "Leather Label", href: "#tags" },
  { label: "Rubber Labels", href: "#tags" },
  { label: "Clothing Buttons", href: "#tags" },
  { label: "Clear Clothing Labels", href: "#tags" },
  { label: "Elastic Band", href: "#tags" },
  { label: "Ribbon Tape", href: "#tags" },
  { label: "Zipper Pulls", href: "#tags" },
  { label: "Woven Patch", href: "#tags" },
  { label: "Embroidery Patch", href: "#tags" },
  { label: "Stickers", href: "#tags" },
];

const navLinks = [
  {
    href: "#tags",
    label: "Gallery",
    hasDropdown: true,
    dropdownItems: tagsDropdownItems,
  },
  { href: "#about", label: "About Us" },
  { href: "#blog", label: "Blog" },
  { href: "#faqs", label: "FAQS" },
  { href: "#contact", label: "Contact Us" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

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
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={() =>
                    link.hasDropdown && setActiveDropdown(link.label)
                  }
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <a
                    href={link.href}
                    className="text-sm font-normal text-foreground/90 hover:text-primary transition-colors flex items-center gap-1 group py-4"
                  >
                    {link.label}
                    {link.hasDropdown && (
                      <ChevronDown className="w-3 h-3 opacity-60 group-hover:opacity-100 transition-opacity" />
                    )}
                  </a>

                  {/* Dropdown Menu */}
                  {link.hasDropdown &&
                    link.dropdownItems &&
                    activeDropdown === link.label && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2">
                        <div className="bg-background border border-border/50 rounded-lg shadow-lg p-6 min-w-[400px]">
                          <div className="grid grid-cols-2 gap-x-8 gap-y-2">
                            {link.dropdownItems.map((item) => (
                              <a
                                key={item.label}
                                href={item.href}
                                className="text-sm text-foreground/80 hover:text-primary transition-colors py-1.5 flex items-center justify-between group"
                              >
                                {item.label}
                                <ChevronDown className="w-3 h-3 opacity-0 group-hover:opacity-60 -rotate-90" />
                              </a>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                </div>
              ))}
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center ml-auto gap-2 hover:cursor-pointer">
              <ThemeToggle />

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
                        if (link.hasDropdown) {
                          setActiveDropdown(
                            activeDropdown === link.label ? null : link.label,
                          );
                        } else {
                          setIsMobileMenuOpen(false);
                          window.location.href = link.href;
                        }
                      }}
                      className="w-full text-left text-lg font-normal text-foreground hover:text-primary transition-colors py-2 flex items-center justify-between"
                    >
                      {link.label}
                      {link.hasDropdown && (
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${
                            activeDropdown === link.label ? "rotate-180" : ""
                          }`}
                        />
                      )}
                    </button>
                    <AnimatePresence>
                      {link.hasDropdown &&
                        link.dropdownItems &&
                        activeDropdown === link.label && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="ml-4 mt-2 space-y-2 border-l-2 border-primary/20 pl-4 py-1">
                              {link.dropdownItems.map((item) => (
                                <a
                                  key={item.label}
                                  href={item.href}
                                  onClick={() => setIsMobileMenuOpen(false)}
                                  className="text-sm text-foreground/70 hover:text-primary transition-colors py-1 block"
                                >
                                  {item.label}
                                </a>
                              ))}
                            </div>
                          </motion.div>
                        )}
                    </AnimatePresence>
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
