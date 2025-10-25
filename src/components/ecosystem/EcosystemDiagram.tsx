// src/components/ecosystem/EcosystemDiagram.tsx
import React from "react";
import { motion } from "framer-motion";
import { Building2 } from "lucide-react";

const EcosystemDiagram = () => {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="max-w-6xl mx-auto">
                    {/* Diagram explanation */}
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <h2 className="text-3xl font-display font-light text-foreground mb-4">
                            An Integrated Approach to{" "}
                            <span className="text-ph font-normal">Firm Growth</span>
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Nine specialized companies working together to provide comprehensive
                            support for wealth management firms
                        </p>
                    </motion.div>

                    {/* Center Hub */}
                    <div className="relative">
                        {/* Connection Lines (decorative) */}
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <div className="w-[600px] h-[600px] rounded-full border-2 border-ph/10"></div>
                            <div className="absolute w-[400px] h-[400px] rounded-full border-2 border-ph/20"></div>
                        </div>

                        {/* Center Circle - Your Wealth Management Firm */}
                        <motion.div
                            className="relative z-10 max-w-xs mx-auto mb-20"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="bg-gradient-to-br from-ph to-ph-dark text-white p-10 rounded-2xl shadow-xl text-center">
                                <Building2 className="w-12 h-12 mx-auto mb-4" />
                                <h3 className="text-2xl font-medium mb-2">
                                    Your Wealth Management Firm
                                </h3>
                                <p className="text-white/80 text-sm">
                                    At the center of our ecosystem
                                </p>
                            </div>
                        </motion.div>

                        {/* Visual indicator */}
                        <motion.div
                            className="text-center mb-8"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.3 }}
                        >
                            <p className="text-sm text-muted-foreground uppercase tracking-wider">
                                Supported by 9 Specialized Brands ↓
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EcosystemDiagram;