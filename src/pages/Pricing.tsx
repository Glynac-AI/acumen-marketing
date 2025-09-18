// src/pages/Pricing.tsx
import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// Import pricing section components
import PricingHero from "@/components/pricing/PricingHero";
import PricingTabs from "@/components/pricing/PricingTabs";
import RetainerPlans from "@/components/pricing/RetainerPlans";
import ProjectPlans from "@/components/pricing/ProjectPlans";
import AdvisoryPlans from "@/components/pricing/AdvisoryPlans";
import PricingFAQ from "@/components/pricing/PricingFAQ";
import PricingCTA from "@/components/pricing/PricingCTA";

const Pricing = () => {
    const [activeTab, setActiveTab] = useState("retainers");
    const pageRef = useRef(null);

    // Create subtle parallax effect for background elements
    const { scrollYProgress } = useScroll({
        target: pageRef,
        offset: ["start start", "end end"]
    });

    const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 50]);

    // Display appropriate plans based on active tab
    const renderActivePlans = () => {
        switch (activeTab) {
            case "retainers":
                return <RetainerPlans />;
            case "projects":
                return <ProjectPlans />;
            case "advisory":
                return <AdvisoryPlans />;
            default:
                return <RetainerPlans />;
        }
    };

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
            <PricingHero />

            {/* Visual section divider - subtle animated line */}
            <SectionDivider />

            <PricingTabs activeTab={activeTab} setActiveTab={setActiveTab} />

            {/* Render the appropriate plans based on active tab */}
            {renderActivePlans()}

            <SectionDivider />

            <PricingFAQ />

            <SectionDivider />

            <PricingCTA />
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

export default Pricing;