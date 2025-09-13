// src/components/home/HeroSection.tsx
import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    // Marketing pillars with consistent brand color
    const primaryColor = "#4F6BFF";
    const marketingPillars = [
        {
            id: "strategy",
            title: "Strategy",
            description: "Data-driven marketing strategy built for wealth management"
        },
        {
            id: "content",
            title: "Content",
            description: "Thought leadership that builds credibility and trust"
        },
        {
            id: "compliance",
            title: "Compliance",
            description: "SEC and FINRA compliant marketing execution"
        },
        {
            id: "results",
            title: "Results",
            description: "Measurable growth in AUM and qualified leads"
        }
    ];

    // Enhanced smooth mouse tracking for subtle interactions
    useEffect(() => {
        let animationFrameId: number;
        let targetX = 0;
        let targetY = 0;
        let currentX = 0;
        let currentY = 0;

        const handleMouseMove = (e: MouseEvent) => {
            // Set target values based on mouse position
            targetX = (e.clientX / window.innerWidth) - 0.5;
            targetY = (e.clientY / window.innerHeight) - 0.5;
        };

        const smoothMouseAnimation = () => {
            // Smooth interpolation for mouse movement
            const smoothFactor = 0.1;
            currentX += (targetX - currentX) * smoothFactor;
            currentY += (targetY - currentY) * smoothFactor;

            setMousePosition({ x: currentX, y: currentY });
            animationFrameId = requestAnimationFrame(smoothMouseAnimation);
        };

        window.addEventListener("mousemove", handleMouseMove);
        animationFrameId = requestAnimationFrame(smoothMouseAnimation);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    // Smooth rotation through marketing pillars with crossfade
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex(prev => (prev + 1) % marketingPillars.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    // Enhanced animation variants for smoother transitions
    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.9
            }
        }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.12,
                delayChildren: 0.1
            }
        }
    };

    const cardTransition = {
        type: "spring" as const,
        stiffness: 200,
        damping: 20,
        mass: 1
    };

    return (
        <section
            ref={sectionRef}
            className="bg-white relative overflow-hidden"
        >
            {/* Elegant background with subtle design elements */}
            <div className="absolute inset-0 z-0">
                {/* Sophisticated subtle background */}
                <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50/30 to-white"></div>

                {/* Subtle asset growth curve - an elegant representation of wealth management growth */}
                <svg
                    className="absolute bottom-0 left-0 w-full h-1/3 opacity-[0.03]"
                    viewBox="0 0 1440 400"
                    fill="none"
                    preserveAspectRatio="none"
                >
                    <motion.path
                        d="M0,400 C240,380 480,200 720,160 C960,120 1200,300 1440,280 L1440,400 L0,400 Z"
                        fill={primaryColor}
                        animate={{
                            d: [
                                "M0,400 C240,380 480,200 720,160 C960,120 1200,300 1440,280 L1440,400 L0,400 Z",
                                "M0,400 C240,350 480,230 720,190 C960,150 1200,250 1440,200 L1440,400 L0,400 Z",
                                "M0,400 C240,380 480,200 720,160 C960,120 1200,300 1440,280 L1440,400 L0,400 Z"
                            ],
                        }}
                        transition={{
                            duration: 20,
                            ease: "easeInOut",
                            repeat: Infinity,
                            repeatType: "reverse"
                        }}
                    />
                </svg>

                {/* Extremely subtle grid for structure without distraction */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(79,107,255,0.01)_1px,transparent_1px),linear-gradient(to_right,rgba(79,107,255,0.01)_1px,transparent_1px)] bg-[length:100px_100px]"></div>
            </div>

            {/* Main content */}
            <div className="relative z-10 container mx-auto">
                <div className="min-h-screen flex flex-col items-center justify-center py-20 px-6">
                    <motion.div
                        className="max-w-7xl w-full mx-auto"
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                    >
                        {/* Original layout with asymmetrical design */}
                        <div className="grid grid-cols-12 gap-6">
                            {/* Left column - Main headline and interaction area */}
                            <div className="col-span-12 lg:col-span-7 flex flex-col justify-center">
                                

                                {/* Elegant headline structure with fixed "credibility" text */}
                                <motion.div
                                    variants={fadeInUp}
                                    className="mb-8"
                                >
                                    <h1 className="text-[#0A2540] font-display text-5xl md:text-6xl lg:text-7xl font-light leading-[1.1] tracking-tight">
                                        <span className="block mb-3">Marketing that</span>
                                        <span className="block mb-3">
                                            <span className="font-normal">builds </span>
                                            <span className="font-normal text-ph">
                                                credibility
                                            </span>
                                        </span>
                                        <span className="block">for Wealth Management Industry.</span>
                                    </h1>
                                </motion.div>

                                {/* Interactive marketing pillar tabs - with enhanced animations */}
                                <motion.div
                                    className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
                                    variants={fadeInUp}
                                >
                                    {marketingPillars.map((pillar, index) => (
                                        <motion.div
                                            key={pillar.id}
                                            className={`relative cursor-pointer overflow-hidden group ${activeIndex === index ? 'ring-1 ring-ph' : ''}`}
                                            onClick={() => setActiveIndex(index)}
                                            whileHover={{
                                                y: -4,
                                                transition: {
                                                    type: "spring",
                                                    stiffness: 300,
                                                    damping: 20
                                                }
                                            }}
                                            whileTap={{
                                                scale: 0.98,
                                                transition: {
                                                    type: "spring",
                                                    stiffness: 400,
                                                    damping: 17
                                                }
                                            }}
                                        >
                                            <div className="px-4 py-3 border border-gray-100 bg-white group-hover:bg-gray-50 transition-all duration-300">
                                                <div className="flex flex-col h-full">
                                                    <h3
                                                        className={`font-medium mb-1 transition-colors duration-300 ${activeIndex === index ? 'text-ph' : 'text-gray-800'}`}
                                                    >
                                                        {pillar.title}
                                                    </h3>
                                                    <p className="text-xs text-gray-500 leading-snug">
                                                        {pillar.description}
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Distinctive active indicator with enhanced animation */}
                                            {activeIndex === index && (
                                                <motion.div
                                                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-ph"
                                                    layoutId="activeIndicator"
                                                    transition={{
                                                        type: "spring",
                                                        stiffness: 300,
                                                        damping: 30
                                                    }}
                                                />
                                            )}
                                        </motion.div>
                                    ))}
                                </motion.div>

                                {/* Call-to-action with enhanced hover effects */}
                                <motion.div
                                    className="flex flex-col sm:flex-row gap-4"
                                    variants={fadeInUp}
                                >
                                    <motion.div
                                        whileHover={{
                                            y: -4,
                                            transition: cardTransition
                                        }}
                                        whileTap={{
                                            scale: 0.98,
                                            transition: {
                                                type: "spring",
                                                stiffness: 400,
                                                damping: 17
                                            }
                                        }}
                                    >
                                        <Link
                                            to="/contact"
                                            className="group relative inline-flex items-center justify-center px-6 py-3 overflow-hidden bg-ph text-white rounded-sm font-medium"
                                        >
                                            <span className="relative z-10">Start a Conversation</span>
                                            <ArrowRight className="ml-2 w-4 h-4 relative z-10 transition-all duration-300 ease-out group-hover:translate-x-1" />
                                            <motion.div
                                                className="absolute inset-0 bg-ph-dark"
                                                initial={{ x: "100%" }}
                                                whileHover={{
                                                    x: 0,
                                                    transition: {
                                                        duration: 0.4,
                                                        ease: [0.22, 1, 0.36, 1]
                                                    }
                                                }}
                                            />
                                        </Link>
                                    </motion.div>

                                    <motion.div
                                        whileHover={{
                                            y: -4,
                                            transition: cardTransition
                                        }}
                                        whileTap={{
                                            scale: 0.98,
                                            transition: {
                                                type: "spring",
                                                stiffness: 400,
                                                damping: 17
                                            }
                                        }}
                                    >
                                        <Link
                                            to="/services"
                                            className="group inline-flex items-center justify-center px-6 py-3 border border-gray-200 text-gray-700 rounded-sm font-medium hover:bg-gray-50 transition-all duration-300"
                                        >
                                            <span>Explore Our Approach</span>
                                        </Link>
                                    </motion.div>
                                </motion.div>
                            </div>

                            {/* Right column - Visual element and stats */}
                            <div className="col-span-12 lg:col-span-5 flex flex-col justify-center">
                                {/* Enhanced visual component with smoother animations */}
                                <motion.div
                                    className="relative aspect-[4/3] w-full max-w-md mx-auto lg:ml-auto mb-10"
                                    variants={fadeInUp}
                                    style={{
                                        transform: `perspective(1000px) rotateY(${mousePosition.x * 2}deg) rotateX(${-mousePosition.y * 2}deg)`,
                                        transition: "transform 0.1s ease-out"
                                    }}
                                >
                                    {/* Base layer */}
                                    <div className="absolute inset-0 border border-gray-100 bg-white shadow-sm"></div>

                                    {/* Marketing pillar content with crossfade transitions */}
                                    <div className="absolute inset-4 border border-gray-100 bg-white p-5 flex flex-col justify-between shadow-sm">
                                        {/* Visual header */}
                                        <div className="mb-3">
                                            <div className="w-full h-1 mb-4 bg-ph/20"></div>
                                            <h3 className="text-xl font-medium text-ph">
                                                {marketingPillars[activeIndex].title}
                                            </h3>
                                        </div>

                                        {/* Visual content specific to active pillar with smooth transitions */}
                                        <div className="flex-1 text-gray-600 text-sm">
                                            <AnimatePresence mode="wait">
                                                <motion.div
                                                    key={activeIndex}
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: -10 }}
                                                    transition={{
                                                        duration: 0.5,
                                                        ease: [0.22, 1, 0.36, 1]
                                                    }}
                                                >
                                                    {activeIndex === 0 && (
                                                        <div className="space-y-2">
                                                            <div className="flex justify-between items-center">
                                                                <span>Strategic Planning</span>
                                                                <div className="w-24 h-2 bg-gray-100 rounded-sm overflow-hidden">
                                                                    <motion.div
                                                                        className="h-full origin-left"
                                                                        style={{ backgroundColor: primaryColor, width: "85%" }}
                                                                        initial={{ scaleX: 0 }}
                                                                        animate={{
                                                                            scaleX: 1,
                                                                            transition: {
                                                                                duration: 1.2,
                                                                                ease: [0.22, 1, 0.36, 1],
                                                                                delay: 0.2
                                                                            }
                                                                        }}
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="flex justify-between items-center">
                                                                <span>Market Analysis</span>
                                                                <div className="w-24 h-2 bg-gray-100 rounded-sm overflow-hidden">
                                                                    <motion.div
                                                                        className="h-full origin-left"
                                                                        style={{ backgroundColor: primaryColor, width: "92%" }}
                                                                        initial={{ scaleX: 0 }}
                                                                        animate={{
                                                                            scaleX: 1,
                                                                            transition: {
                                                                                duration: 1.2,
                                                                                ease: [0.22, 1, 0.36, 1],
                                                                                delay: 0.4
                                                                            }
                                                                        }}
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="flex justify-between items-center">
                                                                <span>Competitor Analysis</span>
                                                                <div className="w-24 h-2 bg-gray-100 rounded-sm overflow-hidden">
                                                                    <motion.div
                                                                        className="h-full origin-left"
                                                                        style={{ backgroundColor: primaryColor, width: "78%" }}
                                                                        initial={{ scaleX: 0 }}
                                                                        animate={{
                                                                            scaleX: 1,
                                                                            transition: {
                                                                                duration: 1.2,
                                                                                ease: [0.22, 1, 0.36, 1],
                                                                                delay: 0.6
                                                                            }
                                                                        }}
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )}

                                                    {activeIndex === 1 && (
                                                        <div className="space-y-3">
                                                            {[
                                                                { title: "White Papers", desc: "Position your firm as an authority" },
                                                                { title: "Newsletters", desc: "Regular client communication" },
                                                                { title: "LinkedIn Campaigns", desc: "Professional network engagement" }
                                                            ].map((item, idx) => (
                                                                <motion.div
                                                                    key={idx}
                                                                    className="border-l-2 border-ph pl-3"
                                                                    initial={{ opacity: 0, x: -10 }}
                                                                    animate={{
                                                                        opacity: 1,
                                                                        x: 0,
                                                                        transition: {
                                                                            duration: 0.5,
                                                                            delay: idx * 0.15,
                                                                            ease: [0.22, 1, 0.36, 1]
                                                                        }
                                                                    }}
                                                                >
                                                                    <span className="block text-xs uppercase tracking-wider text-gray-400">{item.title}</span>
                                                                    <span className="block">{item.desc}</span>
                                                                </motion.div>
                                                            ))}
                                                        </div>
                                                    )}

                                                    {activeIndex === 2 && (
                                                        <div>
                                                            <div className="mb-4 text-xs uppercase tracking-wider text-gray-400">Regulatory Oversight</div>
                                                            <motion.div
                                                                className="flex items-center gap-4 mb-2"
                                                                initial={{ opacity: 0, y: 10 }}
                                                                animate={{
                                                                    opacity: 1,
                                                                    y: 0,
                                                                    transition: {
                                                                        duration: 0.5,
                                                                        delay: 0.2,
                                                                        ease: [0.22, 1, 0.36, 1]
                                                                    }
                                                                }}
                                                            >
                                                                <div className="w-8 h-8 rounded-full flex items-center justify-center bg-gray-50">
                                                                    <span className="text-[#0A2540] font-medium">SEC</span>
                                                                </div>
                                                                <div className="text-xs text-gray-500">
                                                                    Securities and Exchange Commission
                                                                </div>
                                                            </motion.div>
                                                            <motion.div
                                                                className="flex items-center gap-4"
                                                                initial={{ opacity: 0, y: 10 }}
                                                                animate={{
                                                                    opacity: 1,
                                                                    y: 0,
                                                                    transition: {
                                                                        duration: 0.5,
                                                                        delay: 0.4,
                                                                        ease: [0.22, 1, 0.36, 1]
                                                                    }
                                                                }}
                                                            >
                                                                <div className="w-8 h-8 rounded-full flex items-center justify-center bg-gray-50">
                                                                    <span className="text-[#0A2540] font-medium">FR</span>
                                                                </div>
                                                                <div className="text-xs text-gray-500">
                                                                    FINRA Regulations
                                                                </div>
                                                            </motion.div>
                                                        </div>
                                                    )}

                                                    {activeIndex === 3 && (
                                                        <div className="grid grid-cols-2 gap-2">
                                                            {[
                                                                { stat: "3.2×", label: "Average ROI" },
                                                                { stat: "42%", label: "Lead Conversion" },
                                                                { stat: "40+", label: "Clients Served" },
                                                                { stat: "100%", label: "Compliance Rate" }
                                                            ].map((item, idx) => (
                                                                <motion.div
                                                                    key={idx}
                                                                    className="text-center p-2 bg-gray-50"
                                                                    initial={{ opacity: 0, scale: 0.9 }}
                                                                    animate={{
                                                                        opacity: 1,
                                                                        scale: 1,
                                                                        transition: {
                                                                            duration: 0.5,
                                                                            delay: idx * 0.1,
                                                                            ease: [0.22, 1, 0.36, 1]
                                                                        }
                                                                    }}
                                                                >
                                                                    <motion.div
                                                                        className="text-3xl font-light text-[#0A2540]"
                                                                        initial={{ opacity: 0, y: 10 }}
                                                                        animate={{
                                                                            opacity: 1,
                                                                            y: 0,
                                                                            transition: {
                                                                                duration: 0.5,
                                                                                delay: 0.3 + (idx * 0.1),
                                                                                ease: [0.22, 1, 0.36, 1]
                                                                            }
                                                                        }}
                                                                    >
                                                                        {item.stat}
                                                                    </motion.div>
                                                                    <div className="text-xs text-gray-500 mt-1">{item.label}</div>
                                                                </motion.div>
                                                            ))}
                                                        </div>
                                                    )}
                                                </motion.div>
                                            </AnimatePresence>
                                        </div>

                                        {/* Visual footer */}
                                        <div className="pt-4 border-t border-gray-100 mt-4 flex justify-between items-center">
                                            <div className="text-xs text-gray-400">Acumen Marketing</div>
                                            <div className="text-xs text-gray-400">{new Date().getFullYear()}</div>
                                        </div>
                                    </div>

                                    {/* Visual accent layers with smoother animations */}
                                    <motion.div
                                        className="absolute -bottom-3 -right-3 w-full h-full border border-gray-200 bg-transparent z-[-1]"
                                        animate={{
                                            x: [0, 2, 0],
                                            y: [0, 2, 0]
                                        }}
                                        transition={{
                                            duration: 5,
                                            ease: [0.43, 0.13, 0.23, 0.96],
                                            repeat: Infinity,
                                            repeatType: "reverse"
                                        }}
                                    ></motion.div>

                                    <motion.div
                                        className="absolute -bottom-6 -right-6 w-full h-full border border-gray-100 bg-transparent z-[-2]"
                                        animate={{
                                            x: [0, 4, 0],
                                            y: [0, 4, 0]
                                        }}
                                        transition={{
                                            duration: 6,
                                            ease: [0.43, 0.13, 0.23, 0.96],
                                            repeat: Infinity,
                                            repeatType: "reverse",
                                            delay: 0.5
                                        }}
                                    ></motion.div>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;