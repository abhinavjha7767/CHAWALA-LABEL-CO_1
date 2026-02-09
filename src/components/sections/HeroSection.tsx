import React from "react";
import { ArrowRight, CheckCircle2, Package, Printer, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import FloatingLabel3D from "../FloatingLabel3D";

const HeroSection = () => {
  return (
    <div className="relative w-full bg-background overflow-hidden px-4 md:px-6">
      {/* Background Pattern - subtle grid to add texture */}
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231a1a2e' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* 3D Labels */}
      <FloatingLabel3D />

      {/* Gradient Blob for depth */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-3xl pointer-events-none" />

      {/* Navigation Placeholder (blends with hero) */}

      <main className="relative z-10 container mx-auto px-6 pt-28 pb-24 md:pt-20 md:pb-32 flex flex-col md:flex-row items-center gap-12 lg:gap-20">
        {/* Left Content */}
        <div className="flex-1 text-center md:text-left space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-serif font-semibold uppercase tracking-wider mx-auto md:mx-0">
            <Star className="w-3 h-3 fill-primary text-primary" />
            <span>Premium Quality Printing Since 1985</span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-[1.15] tracking-tight font-serif">
            Elevate Your Brand with <br className="hidden lg:block" />
            <span className="block min-h-[1.2em] font-serif text-primary">
              <TypeAnimation
                sequence={["Labels", 2000, "Stickers", 2000, "Tags", 2000]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </span>
          </h1>
          {/* Subtext */}
          <p className="text-lg text-muted-foreground max-w-xl mx-auto md:mx-0 leading-relaxed">
            From high-quality clothing tags to bespoke labels. We craft the
            professional finish your products deserve. Fast turnaround, premium
            materials.
          </p>
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#contact"
              className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-primary px-8 font-medium text-white transition-all duration-300 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25 font-serif"
            >
              <span className="mr-2">Get a Quote</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#tags"
              className="inline-flex h-12 items-center justify-center rounded-md border border-input bg-background px-8 font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground font-serif"
            >
              View Gallery
            </a>
          </div>
          {/* Trust Indicators */}
          <div className="pt-4 flex items-center justify-center md:justify-start gap-6 text-sm text-muted-foreground font-medium">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-primary" />
              <span>Bulk Orders</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-primary" />
              <span>Custom Designs</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-primary" />
              <span>Fast Shipping</span>
            </div>
          </div>
        </div>

        {/* Right Visuals - Spacer for 3D elements */}
        <div className="flex-1 w-full max-w-[600px] hidden md:block" />
      </main>
    </div>
  );
};

export default HeroSection;
