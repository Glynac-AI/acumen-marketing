// src/pages/Home.tsx
import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useAnimation } from "@/components/animations/AnimationProvider";


import ParallaxSection from "@/components/animations/ParallaxSection";
import { SectionReveal } from "@/components/animations/SectionReveal";

// Import your sections
import HeroSection from "@/components/home/HeroSection";
import ValueProposition from "@/components/home/ValueProposition";
import ServicesShowcase from "@/components/home/ServicesShowcase";
import ApproachSection from "@/components/home/ApproachSection";
import CTASection from "@/components/home/CTASection";

const Home = () => {
    const { isFirstLoad, scrollY } = useAnimation();
    const homeRef = useRef<HTMLDivElement>(null);

    // Create subtle parallax effect for background elements
    const { scrollYProgress } = useScroll({
        target: homeRef,
        offset: ["start start", "end end"]
    });

    const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 50]);

    // Initial page load animation sequence
    const initialLoadSequence = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2
            }
        }
    };

    // Subtle cursor follower effect (decorative element)
    const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const xPos = (e.clientX / window.innerWidth) - 0.5;
            const yPos = (e.clientY / window.innerHeight) - 0.5;

            // Apply smoothing
            setMousePosition(prev => ({
                x: prev.x + (xPos - prev.x) * 0.1,
                y: prev.y + (yPos - prev.y) * 0.1
            }));
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <motion.div
            ref={homeRef}
            className="relative overflow-hidden"
            initial="hidden"
            animate="visible"
            variants={initialLoadSequence}
        >
            {/* Subtle cursor follower effect - decorative element */}
            <motion.div
                className="fixed top-0 left-0 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-ph/5 to-transparent blur-[80px] pointer-events-none opacity-50 z-0"
                style={{
                    x: mousePosition.x * 50,
                    y: mousePosition.y * 50,
                }}
                transition={{ type: "spring", damping: 20 }}
            />

            {/* Subtle background grid */}
            <div className="fixed inset-0 bg-[linear-gradient(rgba(79,107,255,0.015)_1px,transparent_1px),linear-gradient(to_right,rgba(79,107,255,0.015)_1px,transparent_1px)] bg-[length:50px_50px] pointer-events-none z-0"></div>

            {/* Hero Section with enhanced animations */}
            <motion.div
                variants={{
                    hidden: { opacity: 0 },
                    visible: {
                        opacity: 1,
                        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
                    }
                }}
            >
                <HeroSection />
            </motion.div>

            {/* Visual section divider - subtle animated line */}
            <div className="relative">
                <motion.div
                    className="absolute left-1/2 -translate-x-1/2 w-[50%] h-px bg-gradient-to-r from-transparent via-ph/20 to-transparent"
                    initial={{ width: "0%" }}
                    whileInView={{ width: "50%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                />
            </div>

            {/* Value Proposition with parallax background */}
            <ParallaxSection>
                <SectionReveal>
                    <ValueProposition />
                </SectionReveal>
            </ParallaxSection>

            {/* Visual section divider - subtle animated line */}
            <div className="relative">
                <motion.div
                    className="absolute left-1/2 -translate-x-1/2 w-[50%] h-px bg-gradient-to-r from-transparent via-ph/20 to-transparent"
                    initial={{ width: "0%" }}
                    whileInView={{ width: "50%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                />
            </div>

            {/* Services Section with subtle reveal */}
            <SectionReveal>
                <ServicesShowcase />
            </SectionReveal>

            {/* Visual section divider - subtle animated line */}
            <div className="relative">
                <motion.div
                    className="absolute left-1/2 -translate-x-1/2 w-[50%] h-px bg-gradient-to-r from-transparent via-ph/20 to-transparent"
                    initial={{ width: "0%" }}
                    whileInView={{ width: "50%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                />
            </div>

            {/* Approach Section with enhanced animations */}
            <ParallaxSection speed={0.1}>
                <SectionReveal>
                    <ApproachSection />
                </SectionReveal>
            </ParallaxSection>

            {/* Visual section divider - subtle animated line */}
            <div className="relative">
                <motion.div
                    className="absolute left-1/2 -translate-x-1/2 w-[50%] h-px bg-gradient-to-r from-transparent via-ph/20 to-transparent"
                    initial={{ width: "0%" }}
                    whileInView={{ width: "50%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                />
            </div>

            {/* CTA Section with reveal animation */}
            <SectionReveal>
                <CTASection />
            </SectionReveal>

        </motion.div>
    );
};

export default Home;