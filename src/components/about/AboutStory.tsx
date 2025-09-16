// src/components/about/AboutStory.tsx
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { CalendarDays, TrendingUp, Target, Lightbulb } from "lucide-react";

const AboutStory = () => {
    const sectionRef = useRef<HTMLElement>(null);

    // Scroll-based animations
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 50]);
    const titleOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
    const titleY = useTransform(scrollYProgress, [0, 0.2], [50, 0]);

    return (
        <section
            ref={sectionRef}
            className="py-24 md:py-32 relative bg-white overflow-hidden"
            id="our-story"
        >
            {/* Subtle pattern background */}
            <motion.div
                className="absolute inset-0 opacity-[0.03]"
                style={{ y: backgroundY }}
            >
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234F6BFF' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    backgroundSize: '60px'
                }}></div>
            </motion.div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    className="text-center mb-20"
                    style={{ opacity: titleOpacity, y: titleY }}
                >
                    <motion.span
                        className="inline-block py-1 px-3 bg-ph/10 text-ph font-medium rounded-full text-sm mb-6"
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1, duration: 0.5 }}
                    >
                        Our Story
                    </motion.span>

                    <motion.h2
                        className="text-4xl md:text-5xl font-display font-light tracking-tight text-foreground mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        Building <span className="text-ph">Trust-Based Marketing</span>
                    </motion.h2>

                    <motion.p
                        className="text-xl text-muted-foreground max-w-3xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                    >
                        Founded by industry veterans who recognized the unique marketing
                        challenges faced by wealth management firms
                    </motion.p>
                </motion.div>

                <div className="max-w-6xl mx-auto">
                    {/* Main content with two columns */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
                        {/* Left column - Story timeline */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <h3 className="text-2xl font-display font-light text-foreground mb-8">
                                The Acumen Story
                            </h3>

                            {/* Timeline events */}
                            <div className="space-y-12">
                                {[
                                    {
                                        year: "2010",
                                        title: "The Beginning",
                                        description: "Acumen was founded by Sarah Reynolds and Michael Chen, former marketing executives at a leading wealth management firm, who saw the need for specialized marketing services in the industry."
                                    },
                                    {
                                        year: "2014",
                                        title: "Focus on Wealth Management",
                                        description: "After working with clients across financial services, we made the strategic decision to focus exclusively on wealth management firms, RIAs, and financial advisors."
                                    },
                                    {
                                        year: "2018",
                                        title: "Expansion of Services",
                                        description: "In response to client needs, we expanded our service offerings to include comprehensive digital marketing, content development, and compliance-aware strategies."
                                    },
                                    {
                                        year: "2021",
                                        title: "Joining Acumen Group",
                                        description: "Acumen Marketing became part of the Acumen Group, joining other specialized professional services firms serving the wealth management industry."
                                    },
                                    {
                                        year: "Today",
                                        title: "Industry Leadership",
                                        description: "Today, Acumen Marketing is recognized as a leading specialized marketing firm for wealth management, having helped over 100 firms grow their AUM through strategic marketing."
                                    }
                                ].map((event, index) => (
                                    <motion.div
                                        key={index}
                                        className="relative pl-12"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: 0.1 * index }}
                                    >
                                        {/* Timeline line */}
                                        {index < 4 && (
                                            <div className="absolute left-4 top-8 w-px h-16 bg-gradient-to-b from-ph/30 to-transparent"></div>
                                        )}

                                        {/* Year icon */}
                                        <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-ph/10 flex items-center justify-center text-ph">
                                            <CalendarDays className="w-4 h-4" />
                                        </div>

                                        {/* Content */}
                                        <div>
                                            <div className="text-sm text-ph font-medium mb-1">{event.year}</div>
                                            <h4 className="text-lg font-medium text-foreground mb-2">{event.title}</h4>
                                            <p className="text-muted-foreground">{event.description}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Right column - Mission and principles */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        >
                            {/* Mission statement */}
                            <div className="mb-12">
                                <h3 className="text-2xl font-display font-light text-foreground mb-6">
                                    Our Mission
                                </h3>

                                <div className="bg-[#F8FAFF] p-8 border-l-4 border-ph">
                                    <p className="text-lg text-foreground italic">
                                        "To help wealth management firms grow through strategy-led, compliance-aware marketing that builds trust, generates qualified leads, and drives AUM growth."
                                    </p>
                                </div>
                            </div>

                            {/* Core principles */}
                            <div>
                                <h3 className="text-2xl font-display font-light text-foreground mb-6">
                                    Core Principles
                                </h3>

                                <div className="space-y-8">
                                    {[
                                        {
                                            icon: <Target className="w-5 h-5" />,
                                            title: "Industry Specialization",
                                            description: "We focus exclusively on wealth management, giving us deep understanding of your clients, challenges, and regulatory environment."
                                        },
                                        {
                                            icon: <Lightbulb className="w-5 h-5" />,
                                            title: "Strategic Approach",
                                            description: "Our marketing strategies are built on business objectives, not tactics, ensuring every activity drives toward AUM growth."
                                        },
                                        {
                                            icon: <TrendingUp className="w-5 h-5" />,
                                            title: "Results Orientation",
                                            description: "We measure success by your business outcomes—leads generated, meetings booked, and assets gained."
                                        }
                                    ].map((principle, index) => (
                                        <motion.div
                                            key={index}
                                            className="flex"
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.5, delay: 0.6 + (0.1 * index) }}
                                        >
                                            <div className="w-10 h-10 rounded-full bg-ph/10 flex items-center justify-center text-ph mr-4 flex-shrink-0">
                                                {principle.icon}
                                            </div>
                                            <div>
                                                <h4 className="text-lg font-medium text-foreground mb-2">{principle.title}</h4>
                                                <p className="text-muted-foreground">{principle.description}</p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Client types */}
                    <motion.div
                        className="text-center p-10 bg-[#F8FAFF] border border-gray-100"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <h3 className="text-xl font-medium text-foreground mb-6">Who We Serve</h3>

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                            {[
                                { title: "RIAs", description: "Independent registered investment advisors looking to grow their practice" },
                                { title: "Family Offices", description: "Single and multi-family offices seeking to attract UHNW clients" },
                                { title: "Wealth Managers", description: "Wealth management firms building their brand and client base" },
                                { title: "Financial Advisors", description: "Individual advisors looking to differentiate and attract HNW clients" }
                            ].map((client, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.1 * index }}
                                >
                                    <div className="text-lg font-medium text-foreground mb-2">{client.title}</div>
                                    <p className="text-sm text-muted-foreground">{client.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutStory;