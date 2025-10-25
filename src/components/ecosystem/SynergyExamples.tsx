// src/components/ecosystem/SynergyExamples.tsx
import React from "react";
import { motion } from "framer-motion";
import { Zap, ArrowDownRight } from "lucide-react";

const SynergyExamples = () => {
    const synergies = [
        {
            title: "Data-Driven Marketing Targeting",
            brands: ["Acumen Strategy", "Acumen Labs"],
            description: "Sales pipeline data from Strategy informs Labs' marketing campaign targeting, ensuring ads reach the most qualified prospects based on real sales intelligence.",
            impact: "Higher conversion rates and lower cost per lead"
        },
        {
            title: "Technology-Enabled Recruiting",
            brands: ["Acumen Talent", "Glynac.AI"],
            description: "New advisors recruited by Talent are immediately onboarded with Glynac.AI productivity tools, allowing them to hit the ground running with cutting-edge technology.",
            impact: "Faster advisor ramp-up and improved retention"
        },
        {
            title: "Performance-Informed Talent Acquisition",
            brands: ["Acumen Labs", "Acumen Talent"],
            description: "Marketing performance data from Labs identifies which advisor skills and backgrounds drive the best results, guiding Talent's recruitment targeting.",
            impact: "Better hiring decisions based on proven success factors"
        },
        {
            title: "Cross-Sell Pipeline Development",
            brands: ["Prairie Hill", "Acumen Strategy"],
            description: "Real estate investors working with Prairie Hill become warm prospects for comprehensive wealth management services, creating natural cross-sell opportunities.",
            impact: "Higher-quality leads with existing trust relationships"
        }
    ];

    return (
        <section className="py-24 bg-white relative">
            <div className="container mx-auto px-6">
                <div className="max-w-6xl mx-auto">
                    {/* Section Header */}
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-ph/10 text-ph mb-6">
                            <Zap className="w-8 h-8" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-display font-light tracking-tight text-foreground mb-6">
                            <span className="text-ph font-normal">Synergy</span> in Action
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                            Our brands don't just coexist—they actively collaborate to create results
                            that exceed the sum of individual services
                        </p>
                    </motion.div>

                    {/* Synergy Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {synergies.map((synergy, index) => (
                            <motion.div
                                key={index}
                                className="bg-[#F8FAFF] p-8 rounded-lg border border-gray-100 relative overflow-hidden group"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7, delay: index * 0.1 }}
                                whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(79, 107, 255, 0.1)" }}
                            >
                                {/* Decorative element */}
                                <div className="absolute top-0 right-0 w-24 h-24 bg-ph/5 rounded-bl-full"></div>

                                {/* Title */}
                                <h3 className="text-xl font-medium text-foreground mb-4 relative z-10">
                                    {synergy.title}
                                </h3>

                                {/* Brands Involved */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {synergy.brands.map((brand, idx) => (
                                        <span
                                            key={idx}
                                            className="text-xs px-3 py-1 bg-ph/10 text-ph rounded-full font-medium"
                                        >
                                            {brand}
                                        </span>
                                    ))}
                                </div>

                                {/* Description */}
                                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                                    {synergy.description}
                                </p>

                                {/* Impact */}
                                <div className="flex items-start pt-4 border-t border-gray-200">
                                    <ArrowDownRight className="w-5 h-5 text-ph mr-2 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <div className="text-xs font-medium text-foreground uppercase tracking-wide mb-1">
                                            Impact
                                        </div>
                                        <div className="text-sm text-muted-foreground">
                                            {synergy.impact}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Bottom Context */}
                    <motion.div
                        className="mt-12 text-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <p className="text-muted-foreground max-w-3xl mx-auto">
                            These integrations happen automatically behind the scenes, creating compounding
                            value for your firm without requiring any additional coordination on your part.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default SynergyExamples;