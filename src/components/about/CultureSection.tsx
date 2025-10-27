// src/components/about/CultureSection.tsx
import React from "react";
import { motion } from "framer-motion";
import { Compass, BookOpen, Heart, Users } from "lucide-react";

const CultureSection = () => {
    const cultureValues = [
        {
            icon: <Compass className="w-6 h-6" />,
            title: "Remote-First Team",
            description: "We've built a distributed team that attracts top talent from across the country, enabling us to work with the best specialists in wealth management marketing regardless of location."
        },
        {
            icon: <BookOpen className="w-6 h-6" />,
            title: "Continuous Learning Focus",
            description: "The wealth management industry evolves rapidly. We invest heavily in ongoing education, training, and professional development to ensure our team stays at the forefront of marketing innovation and regulatory changes."
        },
        {
            icon: <Heart className="w-6 h-6" />,
            title: "Client-Centric Values",
            description: "Every decision we make is guided by one question: 'What's best for our clients?' This client-first mentality permeates our culture and drives our commitment to delivering exceptional results."
        },
        {
            icon: <Users className="w-6 h-6" />,
            title: "Collaborative Spirit",
            description: "We believe the best marketing strategies emerge from collaboration between our specialists and our clients' teams. Our culture emphasizes open communication, knowledge sharing, and partnership."
        }
    ];

    return (
        <section className="py-24 bg-[#F8FAFF] relative">
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
                            Our Culture
                        </span>
                        <h2 className="text-3xl md:text-4xl font-display font-light tracking-tight text-foreground mb-6">
                            How We <span className="text-ph font-normal">Work</span>
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                            The values and practices that shape our approach to serving wealth management firms
                        </p>
                    </motion.div>

                    {/* Culture Values Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                        {cultureValues.map((value, index) => (
                            <motion.div
                                key={index}
                                className="bg-white p-8 rounded-lg border border-gray-100 hover:shadow-lg transition-all duration-300"
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

                    {/* Image Gallery - Placeholder for culture photos */}
                    <motion.div
                        className="grid grid-cols-2 md:grid-cols-4 gap-4"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        {[
                            "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=500&auto=format&fit=crop",
                            "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=500&auto=format&fit=crop",
                            "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=500&auto=format&fit=crop",
                            "https://images.unsplash.com/photo-1553028826-f4804a6dba3b?q=80&w=500&auto=format&fit=crop"
                        ].map((image, index) => (
                            <div key={index} className="aspect-square overflow-hidden rounded-lg">
                                <img
                                    src={image}
                                    alt={`Team culture ${index + 1}`}
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                        ))}
                    </motion.div>

                    {/* Bottom CTA */}
                    <motion.div
                        className="mt-16 text-center bg-white p-8 rounded-lg border border-gray-100"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <p className="text-lg text-foreground mb-2">
                            Interested in joining our team?
                        </p>
                        <p className="text-muted-foreground">
                            We're always looking for talented specialists who share our passion for wealth management marketing.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default CultureSection;