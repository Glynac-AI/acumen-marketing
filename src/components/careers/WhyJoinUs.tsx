// src/components/careers/WhyJoinUs.tsx
import React from "react";
import { motion } from "framer-motion";
import { Target, Users, TrendingUp, Award } from "lucide-react";

const WhyJoinUs = () => {
    const values = [
        {
            icon: <Target className="w-6 h-6" />,
            title: "Exclusive Focus",
            description: "We only work with wealth management firms, developing unmatched depth of expertise in this specialized industry."
        },
        {
            icon: <Users className="w-6 h-6" />,
            title: "Collaborative Culture",
            description: "Work with a team of specialists who are passionate about wealth management marketing and dedicated to client success."
        },
        {
            icon: <TrendingUp className="w-6 h-6" />,
            title: "Professional Growth",
            description: "Continuous learning opportunities, professional development budget, and exposure to cutting-edge marketing strategies."
        },
        {
            icon: <Award className="w-6 h-6" />,
            title: "Meaningful Impact",
            description: "See the direct results of your work as clients achieve measurable AUM growth and business success."
        }
    ];

    return (
        <section className="py-24 bg-white">
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
                            Culture & Benefits
                        </span>
                        <h2 className="text-3xl md:text-4xl font-display font-light tracking-tight text-foreground mb-6">
                            Why Join <span className="text-ph font-normal">Acumen Labs</span>
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                            Build your career with a team that's redefining marketing for the wealth management industry
                        </p>
                    </motion.div>

                    {/* Values Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {values.map((value, index) => (
                            <motion.div
                                key={index}
                                className="bg-[#F8FAFF] p-8 rounded-lg border border-gray-100"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                            >
                                <div className="w-12 h-12 rounded-full bg-ph/10 flex items-center justify-center text-ph mb-4">
                                    {value.icon}
                                </div>
                                <h3 className="text-xl font-medium text-foreground mb-3">
                                    {value.title}
                                </h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    {value.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyJoinUs;