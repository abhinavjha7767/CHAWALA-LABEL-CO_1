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
    <footer className="bg-muted/30 border-t border-border py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Tag className="w-5 h-5 text-primary" />
              </div>
              <span className="font-display text-2xl font-bold text-foreground">
                AS PRINTERS
              </span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-sm mx-auto md:mx-0">
              Premium branding solutions for the fashion industry. Elevate your
              brand with custom labels, tags, and stickers.
            </p>
            <div className="space-y-2">
              <a
                href="tel:+919873705056"
                className="flex items-center justify-center md:justify-start gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4" />
                +91 9873705056
              </a>
              <a
                href="mailto:chawla@chawlalabel.com"
                className="flex items-center justify-center md:justify-start gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                chawla@chawlalabel.com
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="text-center md:text-left">
            <h4 className="font-display font-semibold mb-4 text-foreground">
              Products
            </h4>
            <ul className="space-y-2">
              {footerLinks.products.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h4 className="font-display font-semibold mb-4 text-foreground">
              Company
            </h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h4 className="font-display font-semibold mb-4 text-foreground">
              Support
            </h4>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Certifications - Centered */}
        <div className="flex flex-col items-center mb-12">
          <h4 className="font-display font-semibold mb-6 text-foreground text-lg">
            Certifications
          </h4>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="/certificate1.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group block w-64 bg-white border border-border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all"
            >
              <div className="aspect-video relative bg-muted/20">
                <img
                  src="/certificate1.jpeg"
                  alt="Certificate 1"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors" />
              </div>
            </a>

            <a
              href="/certificate%202_pdf.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group block w-64 bg-white border border-border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all"
            >
              <div className="aspect-video relative bg-muted/20">
                <img
                  src="/certificate%202.jpeg"
                  alt="Certificate 2"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors" />
              </div>
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border flex flex-col justify-between items-center gap-4 ">
          <p className="text-muted-foreground text-sm text-center items-center justify-center">
            © {new Date().getFullYear()} AS PRINTERS. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
