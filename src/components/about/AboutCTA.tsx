// src/components/about/AboutCTA.tsx
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar } from "lucide-react";

const AboutCTA = () => {
    return (
        <section className="py-24 bg-gradient-to-br from-ph via-ph-dark to-[#3d5ad4] relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-display font-light tracking-tight text-white mb-6">
                            Ready to <span className="font-normal">Accelerate Your AUM Growth?</span>
                        </h2>
                        <p className="text-xl text-white/90 mb-10 leading-relaxed">
                            Your 90-day growth sprint starts with a simple 30-minute strategy call
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Link
                                    to="/contact"
                                    className="inline-flex items-center px-8 py-4 bg-white text-ph font-medium rounded-lg hover:bg-gray-50 transition-all shadow-lg"
                                >
                                    <Calendar className="w-5 h-5 mr-2" />
                                    Schedule Strategy Call
                                </Link>
                            </motion.div>

                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Link
                                    to="/pricing"
                                    className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-medium rounded-lg border-2 border-white/30 hover:bg-white/20 transition-all"
                                >
                                    View Packages & Pricing
                                    <ArrowRight className="w-5 h-5 ml-2" />
                                </Link>
                            </motion.div>
                        </div>

                        <p className="text-sm text-white/70 mt-8">
                            No obligation. Get a custom proposal based on your firm's specific needs.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutCTA;