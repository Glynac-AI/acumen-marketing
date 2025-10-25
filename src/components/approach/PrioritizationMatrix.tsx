// src/components/approach/PrioritizationMatrix.tsx
import React from "react";
import { motion } from "framer-motion";
import { Zap, Trophy, Clock, AlertCircle } from "lucide-react";

const PrioritizationMatrix = () => {
    const quadrants = [
        {
            icon: <Zap className="w-8 h-8" />,
            title: "Quick Wins",
            subtitle: "High AUM Impact, Low Effort",
            description: "Initiatives that can be implemented quickly and deliver immediate results in AUM growth.",
            examples: [
                "LinkedIn profile optimization",
                "Email signature campaigns",
                "Referral program launch",
                "Content repurposing"
            ],
            color: "bg-green-500",
            bgColor: "bg-green-50",
            borderColor: "border-green-200"
        },
        {
            icon: <Trophy className="w-8 h-8" />,
            title: "Major Projects",
            subtitle: "High AUM Impact, High Effort",
            description: "Strategic initiatives requiring significant investment but delivering substantial long-term AUM growth.",
            examples: [
                "Comprehensive rebrand",
                "Marketing automation platform",
                "Educational webinar series",
                "Thought leadership campaign"
            ],
            color: "bg-ph",
            bgColor: "bg-ph/5",
            borderColor: "border-ph/20"
        },
        {
            icon: <Clock className="w-8 h-8" />,
            title: "Fill-ins",
            subtitle: "Low AUM Impact, Low Effort",
            description: "Maintenance activities that keep your marketing running but don't drive significant growth.",
            examples: [
                "Social media posts",
                "Newsletter maintenance",
                "Website updates",
                "Blog post publishing"
            ],
            color: "bg-yellow-500",
            bgColor: "bg-yellow-50",
            borderColor: "border-yellow-200"
        },
        {
            icon: <AlertCircle className="w-8 h-8" />,
            title: "Avoid",
            subtitle: "Low AUM Impact, High Effort",
            description: "Activities that consume resources without delivering meaningful results in AUM growth.",
            examples: [
                "Vanity metric reporting",
                "Non-targeted advertising",
                "Complex tech implementations",
                "Generic content creation"
            ],
            color: "bg-red-500",
            bgColor: "bg-red-50",
            borderColor: "border-red-200"
        }
    ];

    return (
        <section className="py-24 bg-[#F8FAFF] relative overflow-hidden">
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
                        <span className="text-sm font-medium text-ph tracking-wider uppercase mb-4 block">
                            Competitive Positioning
                        </span>
                        <h2 className="text-3xl md:text-4xl font-display font-light tracking-tight text-foreground mb-6">
                            Strategic{" "}
                            <span className="text-ph font-normal">Prioritization Matrix</span>
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                            We prioritize marketing initiatives based on their impact on AUM growth versus implementation effort
                        </p>
                    </motion.div>

                    {/* Matrix Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                        {quadrants.map((quadrant, index) => (
                            <motion.div
                                key={index}
                                className={`${quadrant.bgColor} ${quadrant.borderColor} border-2 p-8 rounded-lg`}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                whileHover={{ scale: 1.02 }}
                            >
                                <div className={`w-16 h-16 rounded-full ${quadrant.color} text-white flex items-center justify-center mb-5`}>
                                    {quadrant.icon}
                                </div>

                                <h3 className="text-2xl font-medium text-foreground mb-2">
                                    {quadrant.title}
                                </h3>

                                <p className="text-sm font-medium text-muted-foreground mb-4 uppercase tracking-wide">
                                    {quadrant.subtitle}
                                </p>

                                <p className="text-muted-foreground leading-relaxed mb-6">
                                    {quadrant.description}
                                </p>

                                <div className="space-y-2">
                                    <h4 className="text-sm font-medium text-foreground uppercase tracking-wide">
                                        Examples:
                                    </h4>
                                    {quadrant.examples.map((example, idx) => (
                                        <div key={idx} className="flex items-start">
                                            <div className="w-1.5 h-1.5 rounded-full bg-foreground/40 mr-2 mt-2 flex-shrink-0"></div>
                                            <span className="text-sm text-muted-foreground">{example}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Matrix Axes Labels */}
                    <motion.div
                        className="relative bg-white p-8 rounded-lg border border-gray-200"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <div className="text-center">
                            <h3 className="text-xl font-medium text-foreground mb-4">
                                Our Strategic Approach
                            </h3>
                            <p className="text-muted-foreground leading-relaxed mb-6">
                                We focus your marketing budget on Quick Wins for immediate results and Major Projects for
                                long-term growth, while minimizing time spent on Fill-ins and completely avoiding low-impact,
                                high-effort activities.
                            </p>
                            <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground">
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 bg-gradient-to-r from-red-500 to-green-500 rounded"></div>
                                    <span>AUM Impact</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 bg-gradient-to-r from-ph to-red-500 rounded"></div>
                                    <span>Implementation Effort</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default PrioritizationMatrix;