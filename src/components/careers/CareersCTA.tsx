// src/components/careers/CareersCTA.tsx
import React from "react";
import { motion } from "framer-motion";
import { Mail, ArrowRight } from "lucide-react";

const CareersCTA = () => {
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
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-display font-light mb-6">
                            Don't See the Right Role?
                        </h2>
                        <p className="text-xl text-white/90 mb-10 leading-relaxed">
                            We're always looking for talented individuals who are passionate about wealth management marketing. Send us your resume and let us know how you could contribute to our team.
                        </p>
                        <a
                            href="mailto:careers@acumen-labs.com"
                            className="inline-flex items-center px-8 py-4 bg-white text-ph font-medium rounded-lg hover:bg-gray-50 transition-all shadow-lg"
                        >
                        <Mail className="w-5 h-5 mr-2" />
                        Email Your Resume
                        <ArrowRight className="w-5 h-5 ml-2" />
                    </a>
                </motion.div>
            </div>
        </div>
        </section >
    );
};

export default CareersCTA;