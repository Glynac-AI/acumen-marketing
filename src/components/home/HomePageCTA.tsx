// src/components/home/HomePageCTA.tsx
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar } from "lucide-react";

const HomePageCTA = () => {
    return (
        <section className="py-24 bg-gradient-to-br from-ph to-ph-dark text-white relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 left-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        {/* UPDATED TEXT - From Draft */}
                        <h2 className="text-4xl md:text-5xl font-display font-light tracking-tight mb-6">
                            Ready to Start{" "}
                            <span className="font-normal">Growing?</span>
                        </h2>

                        <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
                            Schedule a 30-minute strategy call to discuss how we can help your firm
                            generate more qualified leads and accelerate AUM growth.
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

export default HomePageCTA;