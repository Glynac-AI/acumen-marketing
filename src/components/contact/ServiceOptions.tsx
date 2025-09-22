// src/components/contact/ServiceOptions.tsx
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import RetainerPlans from "../pricing/RetainerPlans"; // reuse the exact pricing UI

const ServiceOptions: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  // Scroll-based animations
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);
  const y = useTransform(scrollYProgress, [0.1, 0.3], [50, 0]);

  return (
    <section
      ref={sectionRef}
      className="py-24 md:py-32 relative overflow-hidden"
      id="retainer-plans-contact"
    >
      {/* Background to match the pricing page (subtle grid + radial glow) */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_-10%,rgba(58,86,232,0.18),rgba(58,86,232,0)_60%)]" />
        <div
          className="absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent_90%)] opacity-40"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(0,0,0,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.06) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div className="max-w-6xl mx-auto" style={{ opacity, y }}>
          {/* Header */}
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-display font-light tracking-tight text-foreground">
              Retainer Plans
            </h2>
            <p className="mt-2 text-muted-foreground">
              Purpose-built programs for wealth management growth — compliance-aware, data-driven, and scalable.
            </p>
          </div>

          {/* The exact same plans UI as the Pricing page */}
          <RetainerPlans />
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceOptions;
