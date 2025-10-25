// src/components/approach/ApproachCTA.tsx
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar } from "lucide-react";

const ApproachCTA = () => {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-ph/5 to-transparent rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-light tracking-tight text-foreground mb-6">
                            Ready to Accelerate Your{" "}
                            <span className="text-ph font-normal">AUM Growth?</span>
                        </h2>

                        <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
                            Let's discuss how our proven approach can help your firm generate more
                            qualified leads and drive measurable AUM growth.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Link
                                    to="/contact"
                                    className="inline-flex items-center px-8 py-4 bg-ph text-white font-medium rounded-lg hover:bg-ph-dark transition-all shadow-lg shadow-ph/20"
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
                                    className="inline-flex items-center px-8 py-4 bg-white text-foreground font-medium rounded-lg border-2 border-gray-200 hover:border-ph transition-all"
                                >
                                    View Packages & Pricing
                                    <ArrowRight className="w-5 h-5 ml-2" />
                                </Link>
                            </motion.div>
                        </div>

                        <p className="text-sm text-muted-foreground mt-8">
                            No obligation. Get a custom proposal based on your firm's specific needs.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ApproachCTA;