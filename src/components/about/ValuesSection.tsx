// src/components/about/ValuesSection.tsx
import React from "react";
import { motion } from "framer-motion";
import { Target, Award, TrendingUp, Eye } from "lucide-react";

const ValuesSection = () => {
    const differentiators = [
        {
            icon: <Target className="w-6 h-6" />,
            title: "Exclusive Focus",
            description: "Only serve wealth management ecosystem",
            detail: "We don't work with generic financial services companies. Our entire organization is dedicated exclusively to RIAs, IARs, Family Offices, and Custodians, giving us unmatched depth of expertise in this niche."
        },
        {
            icon: <Award className="w-6 h-6" />,
            title: "Deep Expertise",
            description: "Team of former RIA marketers, compliance specialists, fintech operators",
            detail: "Our leadership team includes former RIA CMOs, FINRA compliance specialists, and wealth management operators who have lived the challenges our clients face. This insider perspective enables us to deliver solutions that actually work in practice."
        },
        {
            icon: <TrendingUp className="w-6 h-6" />,
            title: "Proven Results",
            description: "92% client satisfaction, 32% average AUM growth",
            detail: "We measure success by the metrics that matter to wealth management firms: AUM growth, qualified lead generation, and client satisfaction. Our track record demonstrates consistent, measurable results across diverse firm types and sizes."
        },
        {
            icon: <Eye className="w-6 h-6" />,
            title: "Transparent Operations",
            description: "Published pricing, clear deliverables, real-time reporting",
            detail: "Unlike agencies that hide pricing and obfuscate deliverables, we operate with complete transparency. You'll always know exactly what you're getting, what it costs, and how it's performing through real-time dashboards and regular reporting."
        }
    ];

    return (
        <section className="py-24 bg-gradient-to-br from-ph via-ph-dark to-[#3d5ad4] relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-6xl mx-auto">
                    {/* Section Header */}
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <span className="text-sm font-medium text-white/80 tracking-wider uppercase mb-4 block">
                            What Sets Us Apart
                        </span>
                        <h2 className="text-3xl md:text-4xl font-display font-light tracking-tight text-white mb-6">
                            Why We're <span className="font-normal">Different</span>
                        </h2>
                        <p className="text-lg text-white/90 max-w-3xl mx-auto">
                            Four core principles that distinguish Acumen Labs from generic marketing agencies
                        </p>
                    </motion.div>

                    {/* Differentiators Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {differentiators.map((item, index) => (
                            <motion.div
                                key={index}
                                className="bg-white/10 backdrop-blur-md p-8 rounded-lg border border-white/20 hover:bg-white/15 transition-all duration-300"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                            >
                                {/* Icon */}
                                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white mb-4">
                                    {item.icon}
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-medium text-white mb-2">
                                    {item.title}
                                </h3>

                                {/* Description */}
                                <p className="text-white/80 text-sm mb-4 font-medium">
                                    {item.description}
                                </p>

                                {/* Detail */}
                                <p className="text-white/70 leading-relaxed text-sm">
                                    {item.detail}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ValuesSection;