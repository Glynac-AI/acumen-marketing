// src/components/contact/ContactHero.tsx
import React from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const ContactHero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-40 pb-32 overflow-visible">
            {/* Premium gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#F8FAFF] via-[#F4F8FF] to-[#EDF3FF] z-0"></div>

            {/* Sophisticated background elements inspired by Acumen Recruiting */}
            <div className="absolute inset-0 pointer-events-none z-0">
                {/* Elegant abstract shapes */}
                <div className="absolute right-0 top-0 w-1/3 h-1/3 bg-ph/[0.02] rounded-bl-[100px]"></div>
                <div className="absolute left-0 bottom-0 w-1/2 h-1/2 bg-ph/[0.02] rounded-tr-[200px]"></div>

                {/* Subtle circles that add depth without distraction */}
                <motion.div
                    className="absolute top-[20%] left-[10%] w-32 h-32 rounded-full border border-ph/[0.05]"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                ></motion.div>

                <motion.div
                    className="absolute bottom-[30%] right-[15%] w-24 h-24 rounded-full border border-ph/[0.05]"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                ></motion.div>

                <motion.div
                    className="absolute top-[60%] left-[30%] w-16 h-16 rounded-full border border-ph/[0.05]"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.4 }}
                ></motion.div>
            </div>

            <div className="container mx-auto px-6 z-10 relative">
                <div className="max-w-5xl mx-auto text-center">
                    {/* Pre-title with elegant fade up animation */}
                    <motion.div
                        className="flex items-center justify-center mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <div className="h-px w-8 bg-ph/40 mr-3"></div>
                        <span className="text-sm text-ph font-medium uppercase tracking-wider">Get in Touch</span>
                        <div className="h-px w-8 bg-ph/40 ml-3"></div>
                    </motion.div>

                    {/* Main title with sophisticated text highlight animations */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 1.4,
                            ease: [0.22, 1, 0.36, 1],
                            delay: 0.2
                        }}
                        className="mb-8"
                    >
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-light leading-[1.3] tracking-tight text-[#0A2540] mb-3">
                            Let's <span className="relative inline-block">
                                Discuss
                                <motion.span
                                    className="absolute bottom-2 left-0 w-full h-3 bg-ph/10 -z-10 rounded-sm"
                                    initial={{ scaleX: 0, originX: 0 }}
                                    animate={{ scaleX: 1 }}
                                    transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
                                />
                            </span> Your
                        </h1>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-light leading-[1.3] tracking-tight">
                            <span className="text-ph font-normal">Marketing Needs</span>
                        </h1>
                    </motion.div>

                    {/* Subtitle with fade up animation */}
                    <motion.p
                        className="text-xl text-muted-foreground max-w-3xl mx-auto text-center mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 1.4,
                            ease: [0.22, 1, 0.36, 1],
                            delay: 0.4
                        }}
                    >
                        We'd love to learn about your wealth management firm and explore how
                        Acumen Marketing can support your growth goals. Reach out today to
                        start the conversation.
                    </motion.p>

                    {/* Contact options with premium card styling */}
                    <motion.div
                        className="flex flex-wrap justify-center gap-12 mb-20"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 1.4,
                            ease: [0.22, 1, 0.36, 1],
                            delay: 0.6
                        }}
                    >
                        {[
                            { value: "info@acumen-strategy.com", label: "Email Us" },
                            { value: "(773) 430-3534", label: "Call Us" },
                            { value: "4753 N. Broadway, Chicago IL", label: "Visit Us" }
                        ].map((contact, index) => (
                            <motion.div
                                key={index}
                                className="flex flex-col items-center bg-white/50 backdrop-blur-sm px-8 py-5 rounded-sm border border-gray-100 shadow-sm"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.8 + (index * 0.1) }}
                                whileHover={{
                                    y: -5,
                                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)"
                                }}
                            >
                                <div className="text-lg text-foreground font-medium mb-1">
                                    {contact.value}
                                </div>
                                <div className="text-sm text-muted-foreground">
                                    {contact.label}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Refined scroll indicator */}
                    <motion.div
                        className="flex justify-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.7 }}
                        transition={{
                            duration: 1.2,
                            delay: 1
                        }}
                    >
                        <motion.div
                            className="flex flex-col items-center text-muted-foreground hover:text-ph transition-colors duration-300 cursor-pointer"
                            animate={{
                                y: [0, 8, 0],
                            }}
                            transition={{
                                duration: 2.5,
                                repeat: Infinity,
                                repeatType: "loop",
                                ease: "easeInOut",
                                repeatDelay: 0.5
                            }}
                            onClick={() => {
                                document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                        >
                            <span className="text-sm mb-2">Fill Out Our Form</span>
                            <ArrowDown className="w-5 h-5" />
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ContactHero;