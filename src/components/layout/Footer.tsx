import { memo } from "react";
import { Tag, Mail, Phone } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const footerHrefs = {
  products: ["#tags", "#tags", "#tags"],
  company: ["#about", "#features", "#blog"],
  support: ["#faqs", "#contact"],
} as const;

const Footer = memo(() => {
  const { t } = useLanguage();

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
                {t.footer.companyName}
              </span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-sm mx-auto md:mx-0">
              {t.footer.tagline}
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
                href="mailto:arvinder22@gmail.com"
                className="flex items-center justify-center md:justify-start gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                arvinder22@gmail.com
              </a>
            </div>
          </div>

          {/* Products */}
          <div className="text-center md:text-left">
            <h4 className="font-display font-semibold mb-4 text-foreground">
              {t.footer.products}
            </h4>
            <ul className="space-y-2">
              {t.footer.links.products.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={footerHrefs.products[idx]}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="text-center md:text-left">
            <h4 className="font-display font-semibold mb-4 text-foreground">
              {t.footer.company}
            </h4>
            <ul className="space-y-2">
              {t.footer.links.company.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={footerHrefs.company[idx]}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="text-center md:text-left">
            <h4 className="font-display font-semibold mb-4 text-foreground">
              {t.footer.support}
            </h4>
            <ul className="space-y-2">
              {t.footer.links.support.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={footerHrefs.support[idx]}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Certifications */}
        <div className="flex flex-col items-center mb-12">
          <h4 className="font-display font-semibold mb-6 text-foreground text-lg">
            {t.footer.certifiedBy}
          </h4>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="/certificate1.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group block w-fit rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all"
            >
              <div className="relative p-4">
                <img
                  src="/certificate1.png"
                  alt="Certificate 1"
                  className="h-32 w-auto object-contain"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors" />
              </div>
            </a>

            <a
              href="/certificate%202_pdf.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group block w-fit rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all"
            >
              <div className="relative p-4">
                <img
                  src="/certificate2.png"
                  alt="Certificate 2"
                  className="h-32 w-auto object-contain"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors" />
              </div>
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border flex flex-col justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm text-center">
            © {new Date().getFullYear()} {t.footer.copyright}
            <span className="text-lime-600">
              <a
                href="https://www.wegrowconsultancyandsolution.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                {t.footer.by}
              </a>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = "Footer";

export default Footer;
