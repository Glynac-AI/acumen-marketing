// src/components/careers/Benefits.tsx
import React from "react";
import { motion } from "framer-motion";
import { Heart, DollarSign, Laptop, BookOpen, Home, TrendingUp } from "lucide-react";

const Benefits = () => {
    const benefits = [
        {
            icon: <DollarSign className="w-6 h-6" />,
            title: "Competitive Compensation",
            description: "Market-rate salaries with performance bonuses and 401(k) matching"
        },
        {
            icon: <Heart className="w-6 h-6" />,
            title: "Comprehensive Health Coverage",
            description: "Health, dental, and vision insurance for you and your family"
        },
        {
            icon: <Home className="w-6 h-6" />,
            title: "Unlimited PTO",
            description: "Take the time you need to recharge and maintain work-life balance"
        },
        {
            icon: <Laptop className="w-6 h-6" />,
            title: "Remote Flexibility",
            description: "Work from anywhere in the US with latest equipment provided"
        },
        {
            icon: <BookOpen className="w-6 h-6" />,
            title: "Professional Development",
            description: "$2,000 annual budget for courses, conferences, and certifications"
        },
        {
            icon: <TrendingUp className="w-6 h-6" />,
            title: "Growth Opportunities",
            description: "Clear career progression paths and mentorship programs"
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
                        <h2 className="text-3xl md:text-4xl font-display font-light tracking-tight text-foreground mb-6">
                            Benefits & <span className="text-ph font-normal">Perks</span>
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                            We invest in our team members' success, health, and happiness
                        </p>
                    </motion.div>

                    {/* Benefits Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={index}
                                className="text-center p-6"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                            >
                                <div className="w-16 h-16 rounded-full bg-ph/10 flex items-center justify-center text-ph mx-auto mb-4">
                                    {benefit.icon}
                                </div>
                                <h3 className="text-lg font-medium text-foreground mb-2">
                                    {benefit.title}
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                    {benefit.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Benefits;