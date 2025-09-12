// Demo: Framer Motion variants usage
const boxVariants = {
    active: {
        backgroundColor: "#f00"
    },
    inactive: {
        backgroundColor: "#fff",
        transition: { duration: 2 }
    }
};

// src/components/home/ClientPerspectives.tsx
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform, easeIn, easeOut } from "framer-motion";
import { Quote, Star, ChevronLeft, ChevronRight, User, Target, Clock } from "lucide-react";

const ClientPerspectives = () => {
    // Demo state for variants
    const [isActive, setIsActive] = useState(false);

    const [activeIndex, setActiveIndex] = useState(0);
    const [direction, setDirection] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const containerRef = useRef(null);
    const sectionRef = useRef(null);

    // Scroll-based animations
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    // Parallax and opacity transforms
    const headerY = useTransform(scrollYProgress, [0, 0.2], [50, 0]);
    const headerOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
    const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 100]);
    const backgroundScale = useTransform(scrollYProgress, [0, 1], [1.05, 1]);

    // Testimonial data
    const testimonials = [
        {
            quote: "Acumen Marketing's understanding of compliance requirements in wealth management is exceptional. Their content strategy has positioned us as thought leaders in our niche while maintaining regulatory compliance.",
            author: "Sarah Johnson",
            title: "Managing Director, Heritage Wealth Advisors",
            rating: 5,
            highlight: "...understanding of compliance requirements in wealth management is exceptional.",
            color: "#4F6BFF"
        },
        {
            quote: "The lead generation campaigns Acumen developed have transformed our client acquisition process. We're now connecting with qualified high-net-worth prospects at a fraction of our previous marketing costs.",
            author: "Michael Chen",
            title: "CEO, Pacific Financial Group",
            rating: 5,
            highlight: "...transformed our client acquisition process.",
            color: "#6366F1"
        },
        {
            quote: "What truly sets Acumen apart is their deep knowledge of the wealth management industry. They understand our clients' needs and how to communicate complex concepts in a way that builds trust.",
            author: "Jennifer Taylor",
            title: "Head of Marketing, Taylor Financial Solutions",
            rating: 5,
            highlight: "...their deep knowledge of the wealth management industry.",
            color: "#8B5CF6"
        },
        {
            quote: "As a boutique RIA, we struggled to compete with larger firms. Acumen Marketing helped us develop a distinctive brand voice and digital presence that has attracted substantial new AUM.",
            author: "David Wilson",
            title: "Founder, Cornerstone Wealth Advisors",
            rating: 5,
            highlight: "...develop a distinctive brand voice and digital presence.",
            color: "#EC4899"
        }
    ];

    // Auto-advance timer
    useEffect(() => {
        if (isPaused) return;

        const interval = setInterval(() => {
            setDirection(1);
            setActiveIndex((current) => (current === testimonials.length - 1 ? 0 : current + 1));
        }, 6000);

        return () => clearInterval(interval);
    }, [isPaused, testimonials.length]);

    // Handle navigation
    const handlePrev = () => {
        setDirection(-1);
        setActiveIndex((current) => (current === 0 ? testimonials.length - 1 : current - 1));
    };

    const handleNext = () => {
        setDirection(1);
        setActiveIndex((current) => (current === testimonials.length - 1 ? 0 : current + 1));
    };

    // Stats for social proof
    const stats = [
        { icon: <Target className="w-5 h-5" />, value: "40+", label: "Wealth Management Clients" },
        { icon: <User className="w-5 h-5" />, value: "150%", label: "Average Lead Growth" },
        { icon: <Clock className="w-5 h-5" />, value: "100%", label: "Compliance Success Rate" }
    ];

    // Animation variants
    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 500 : -500,
            opacity: 0,
            scale: 0.9
        }),
        center: {
            x: 0,
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.5,
                ease: easeOut
            }
        },
        exit: (direction: number) => ({
            x: direction > 0 ? -500 : 500,
            opacity: 0,
            scale: 0.9,
            transition: {
                duration: 0.5,
                ease: easeIn
            }
        })
    };

    return (
        <>
            <div style={{ display: "flex", justifyContent: "center", marginBottom: 32 }}>
                <motion.div
                    variants={boxVariants}
                    animate={isActive ? "active" : "inactive"}
                    initial="inactive"
                    style={{ width: 80, height: 80, borderRadius: 16, cursor: "pointer", border: "1px solid #eee" }}
                    onClick={() => setIsActive((v) => !v)}
                    whileHover="active"
                    whileTap="inactive"
                />
            </div>
            {/* ...existing section code... */}
        <section
            ref={sectionRef}
            className="py-24 md:py-32 relative overflow-hidden"
        >
            {/* Background design elements */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white"
                style={{ y: backgroundY, scale: backgroundScale }}
            />

            <div className="absolute right-0 bottom-0 w-2/3 h-2/3 bg-ph/5 rounded-tl-[200px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    className="text-center mb-16"
                    style={{ y: headerY, opacity: headerOpacity }}
                >
                    <h2 className="text-3xl md:text-4xl font-display font-light tracking-tight text-foreground mb-6">
                        Client <span className="text-ph font-normal">Perspectives</span>
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Hear from wealth management firms that have transformed their marketing impact with our specialized approach.
                    </p>
                </motion.div>

                {/* Testimonial Carousel */}
                <div
                    className="max-w-5xl mx-auto mb-20 relative"
                    ref={containerRef}
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    {/* Navigation Buttons */}
                    <div className="absolute -left-4 md:-left-12 top-1/2 -translate-y-1/2 z-10">
                        <motion.button
                            className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-gray-700 hover:bg-gray-50 transition-colors"
                            onClick={handlePrev}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </motion.button>
                    </div>

                    <div className="absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2 z-10">
                        <motion.button
                            className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-gray-700 hover:bg-gray-50 transition-colors"
                            onClick={handleNext}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <ChevronRight className="w-5 h-5" />
                        </motion.button>
                    </div>

                    {/* Testimonial Slides */}
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                        <AnimatePresence initial={false} custom={direction} mode="wait">
                            <motion.div
                                key={activeIndex}
                                custom={direction}
                                variants={slideVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                className="p-8 md:p-12"
                            >
                                <div className="flex flex-col items-center text-center">
                                    <Quote className="w-10 h-10 text-ph/30 mb-6" />

                                    <h3 className="text-2xl md:text-3xl font-display text-foreground leading-relaxed mb-8 max-w-3xl">
                                        {testimonials[activeIndex].quote}
                                    </h3>

                                    <div className="flex items-center justify-center space-x-1 mb-3">
                                        {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                                            <Star key={i} className="w-5 h-5 fill-current text-yellow-400" />
                                        ))}
                                    </div>

                                    <div className="text-foreground font-medium">
                                        {testimonials[activeIndex].author}
                                    </div>

                                    <div className="text-muted-foreground text-sm mt-1">
                                        {testimonials[activeIndex].title}
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Navigation Dots */}
                    <div className="flex justify-center mt-8 space-x-2">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    setDirection(index > activeIndex ? 1 : -1);
                                    setActiveIndex(index);
                                }}
                                className={`w-2.5 h-2.5 rounded-full transition-colors ${activeIndex === index
                                        ? "bg-ph"
                                        : "bg-gray-300 hover:bg-gray-400"
                                    }`}
                            />
                        ))}
                    </div>
                </div>

                {/* Stats Section */}
                <div className="max-w-4xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 * index, duration: 0.5 }}
                            >
                                <div className="flex justify-center mb-4">
                                    <div className="w-12 h-12 bg-ph/10 rounded-full flex items-center justify-center text-ph">
                                        {stat.icon}
                                    </div>
                                </div>
                                <div className="text-3xl font-display font-medium text-foreground mb-1">
                                    {stat.value}
                                </div>
                                <div className="text-muted-foreground">
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    </>
    );
};

export default ClientPerspectives;