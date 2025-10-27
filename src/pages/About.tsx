// src/pages/About.tsx
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// Import section components
import AboutHero from "@/components/about/AboutHero";
import AboutStory from "@/components/about/AboutStory";
import TeamSection from "@/components/about/TeamSection";
import ExpertiseSection from "@/components/about/ExpertiseSection";
import ValuesSection from "@/components/about/ValuesSection";
import AwardsSection from "@/components/about/AwardsSection";
import CultureSection from "@/components/about/CultureSection";
import AcumenGroup from "@/components/about/AcumenGroup";
import AboutCTA from "@/components/about/AboutCTA";

const About = () => {
    const pageRef = useRef<HTMLDivElement>(null);

    // Create subtle parallax effect for background elements
    const { scrollYProgress } = useScroll({
        target: pageRef,
        offset: ["start start", "end end"]
    });

    const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 50]);

    return (
        <motion.div
            ref={pageRef}
            className="relative overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
            {/* Subtle background elements */}
            <div className="fixed inset-0 bg-[linear-gradient(rgba(79,107,255,0.015)_1px,transparent_1px),linear-gradient(to_right,rgba(79,107,255,0.015)_1px,transparent_1px)] bg-[length:50px_50px] pointer-events-none z-0"></div>

            <motion.div
                className="fixed top-0 left-0 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-ph/5 to-transparent blur-[80px] pointer-events-none opacity-50 z-0"
                style={{ y: backgroundY }}
            />

            {/* Page Sections */}
            <AboutHero />
            <SectionDivider />

            <AboutStory />
            <SectionDivider />

            <TeamSection />
            <SectionDivider />

            <ExpertiseSection />
            <SectionDivider />

            <ValuesSection />
            <SectionDivider />

            <AwardsSection />
            <SectionDivider />

            <CultureSection />
            <SectionDivider />

            <AcumenGroup />
            <SectionDivider />

            <AboutCTA />
        </motion.div>
    );
};

// Reusable section divider component
const SectionDivider = () => {
    return (
        <div className="relative">
            <motion.div
                className="absolute left-1/2 -translate-x-1/2 w-[50%] h-px bg-gradient-to-r from-transparent via-ph/20 to-transparent"
                initial={{ width: "0%" }}
                whileInView={{ width: "50%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            />
        </div>
    );
};

export default About;