import { Tag, Mail, Phone } from "lucide-react";

const footerLinks = {
  products: [
    { label: "Garment Tags", href: "#products" },
    { label: "Product Labels", href: "#products" },
    { label: "Barcode Labels", href: "#products" },
    { label: "Custom Stickers", href: "#products" },
  ],
  company: [
    { label: "About Us", href: "#about" },
    { label: "Why Choose Us", href: "#features" },
    { label: "Contact", href: "#contact" },
    { label: "Careers", href: "#" },
  ],
  support: [
    { label: "FAQs", href: "#" },
    { label: "Shipping Info", href: "#" },
    { label: "Returns", href: "#" },
    { label: "Order Tracking", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-background flex items-center justify-center">
                <Tag className="w-5 h-5 text-foreground" />
              </div>
              <span className="font-display text-2xl font-bold">
                AS PRINTERS
              </span>
            </div>
            <p className="text-background/70 mb-6 max-w-sm">
              Premium branding solutions for the fashion industry. Elevate your
              brand with custom labels, tags, and stickers.
            </p>
            <div className="space-y-2">
              <a
                href="tel:+919873705056"
                className="flex items-center gap-2 text-background/70 hover:text-background transition-colors"
              >
                <Phone className="w-4 h-4" />
                +91 9873705056
              </a>
              <a
                href="mailto:chawla@chawlalabel.com"
                className="flex items-center gap-2 text-background/70 hover:text-background transition-colors"
              >
                <Mail className="w-4 h-4" />
                chawla@chawlalabel.com
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-semibold mb-4">Products</h4>
            <ul className="space-y-2">
              {footerLinks.products.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-background transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-background transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-background transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/50 text-sm">
            © {new Date().getFullYear()} AS PRINTERS. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-background/50 hover:text-background transition-colors text-sm"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-background/50 hover:text-background transition-colors text-sm"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
