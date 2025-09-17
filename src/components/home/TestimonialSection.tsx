// src/components/home/TestimonialSection.tsx
import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

// Define testimonial data structure
interface TestimonialProps {
    quote: string;
    name: string;
    title: string;
    company: string;
    companyType: string;
    aum: string;
    rating: number;
}

// Testimonial data
const testimonials: TestimonialProps[] = [
    {
        quote: "Acumen Marketing transformed our digital presence and lead generation. Their understanding of wealth management compliance requirements was invaluable in creating effective marketing that didn't create regulatory issues. In the first year, we saw a 28% increase in qualified leads and added over $150M in new AUM.",
        name: "Michael Thompson",
        title: "Managing Partner",
        company: "Everest Wealth Advisors",
        companyType: "Independent RIA",
        aum: "$750M AUM",
        rating: 5
    },
    {
        quote: "What sets Acumen apart is their deep understanding of the wealth management business model and client acquisition process. They developed a thought leadership strategy that positioned our advisors as true experts in their niches, which has been instrumental in attracting UHNW clients. Their approach to compliance-aware marketing is exactly what our firm needed.",
        name: "Jennifer Reynolds",
        title: "Chief Marketing Officer",
        company: "Summit Wealth Management",
        companyType: "Wealth Management Firm",
        aum: "$1.8B AUM",
        rating: 5
    },
    {
        quote: "Working with Acumen has transformed how we approach marketing for our family office. Their content strategy and digital presence enhancements have helped us articulate our unique value proposition to prospective clients. Most importantly, they understand the discretion required in marketing to UHNW individuals and families.",
        name: "David Chen",
        title: "Executive Director",
        company: "Meridian Family Office",
        companyType: "Multi-Family Office",
        aum: "$3.2B AUM",
        rating: 5
    },
    {
        quote: "As an independent advisor, I was struggling to differentiate my practice and attract the right clients. Acumen helped me develop a clear niche focus and marketing strategy that has completely transformed my business. Their approach to advisor marketing is both strategic and practical, with every activity tied to business development goals.",
        name: "Sarah Williams",
        title: "Founder & Wealth Advisor",
        company: "Clarity Financial Planning",
        companyType: "Independent Financial Advisor",
        aum: "$320M AUM",
        rating: 5
    }
];

const TestimonialSection = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [autoplay, setAutoplay] = useState(true);

    // Scroll-based animations
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 50]);

    // Handle testimonial navigation
    const nextTestimonial = () => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
        setAutoplay(false);
    };

    const prevTestimonial = () => {
        setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
        setAutoplay(false);
    };

    // Autoplay functionality
    useEffect(() => {
        let interval: NodeJS.Timeout;

        if (autoplay) {
            interval = setInterval(() => {
                setActiveIndex((prev) => (prev + 1) % testimonials.length);
            }, 8000);
        }

        return () => clearInterval(interval);
    }, [autoplay]);

    return (
        <section
            ref={sectionRef}
            className="py-24 md:py-32 relative bg-[#F8FAFF] overflow-hidden"
            id="testimonials"
        >
            {/* Subtle background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#F8FAFF] to-white -z-10"></div>

            {/* Subtle pattern */}
            <div className="absolute inset-0 opacity-[0.02]" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%234F6BFF' fill-opacity='0.8'%3E%3Ccircle cx='10' cy='10' r='1'/%3E%3C/g%3E%3C/svg%3E")`,
                backgroundSize: '20px'
            }}></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <motion.span
                            className="inline-block py-1 px-3 bg-ph/10 text-ph font-medium rounded-full text-sm mb-6"
                            initial={{ opacity: 0, y: -10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1, duration: 0.5 }}
                        >
                            Client Success
                        </motion.span>

                        <motion.h2
                            className="text-4xl md:text-5xl font-display font-light tracking-tight text-foreground mb-6"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                        >
                            What Our <span className="text-ph">Clients Say</span>
                        </motion.h2>
                    </motion.div>

                    {/* Testimonial carousel with elegant animations */}
                    <div className="relative">
                        {/* Main testimonial content with transitions */}
                        <div className="relative overflow-hidden bg-white border border-gray-200 shadow-sm">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={`testimonial-${activeIndex}`}
                                    className="p-10 md:p-16"
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -50 }}
                                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                                >
                                    <div className="relative">
                                        {/* Large quote mark */}
                                        <div className="absolute -top-6 -left-6 text-8xl text-ph/10 font-serif">"</div>

                                        <div className="relative z-10">
                                            {/* Rating stars */}
                                            <div className="flex mb-6">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star
                                                        key={i}
                                                        className={`w-5 h-5 ${i < testimonials[activeIndex].rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                                                    />
                                                ))}
                                            </div>

                                            {/* Quote */}
                                            <blockquote className="text-xl text-foreground mb-10 max-w-4xl">
                                                {testimonials[activeIndex].quote}
                                            </blockquote>

                                            {/* Attribution */}
                                            <div className="flex flex-col md:flex-row md:items-center justify-between">
                                                <div>
                                                    <div className="font-medium text-foreground text-lg">
                                                        {testimonials[activeIndex].name}
                                                    </div>
                                                    <div className="text-muted-foreground">
                                                        {testimonials[activeIndex].title}, {testimonials[activeIndex].company}
                                                    </div>
                                                </div>
                                                <div className="mt-4 md:mt-0 flex flex-col md:items-end">
                                                    <div className="text-sm text-ph font-medium">
                                                        {testimonials[activeIndex].companyType}
                                                    </div>
                                                    <div className="text-sm text-muted-foreground">
                                                        {testimonials[activeIndex].aum}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>

                            {/* Progress indicator */}
                            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-100">
                                <motion.div
                                    className="h-full bg-ph"
                                    initial={{ width: `${(activeIndex / testimonials.length) * 100}%` }}
                                    animate={{
                                        width: `${((activeIndex + 1) / testimonials.length) * 100}%`
                                    }}
                                    transition={{
                                        duration: autoplay ? 8 : 0.5,
                                        ease: autoplay ? "linear" : [0.22, 1, 0.36, 1]
                                    }}
                                />
                            </div>
                        </div>

                        {/* Navigation buttons */}
                        <div className="flex justify-between mt-8">
                            <motion.button
                                className="flex items-center text-ph hover:text-ph-dark"
                                onClick={prevTestimonial}
                                whileHover={{ x: -3 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <ChevronLeft className="w-5 h-5 mr-2" />
                                <span>Previous</span>
                            </motion.button>

                            <div className="flex space-x-2">
                                {testimonials.map((_, index) => (
                                    <button
                                        key={index}
                                        className={`w-2.5 h-2.5 rounded-full transition-colors ${activeIndex === index ? 'bg-ph' : 'bg-gray-300 hover:bg-gray-400'
                                            }`}
                                        onClick={() => {
                                            setActiveIndex(index);
                                            setAutoplay(false);
                                        }}
                                        aria-label={`Go to testimonial ${index + 1}`}
                                    />
                                ))}
                            </div>

                            <motion.button
                                className="flex items-center text-ph hover:text-ph-dark"
                                onClick={nextTestimonial}
                                whileHover={{ x: 3 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <span>Next</span>
                                <ChevronRight className="w-5 h-5 ml-2" />
                            </motion.button>
                        </div>
                    </div>

                    {/* Client logos */}
                    <motion.div
                        className="mt-24 p-8 bg-white border border-gray-200"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <div className="text-center mb-8">
                            <p className="text-muted-foreground">
                                Trusted by wealth management firms across the industry
                            </p>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
                            {[
                                { name: "Everest Wealth Advisors" },
                                { name: "Summit Wealth Management" },
                                { name: "Meridian Family Office" },
                                { name: "Clarity Financial Planning" }
                            ].map((client, index) => (
                                <motion.div
                                    key={index}
                                    className="flex justify-center"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.1 * index }}
                                >
                                    {/* Using text as logos for privacy */}
                                    <div className="text-lg font-medium text-foreground/50 uppercase tracking-wider">
                                        {client.name.split(' ').map(word => word[0]).join('')}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialSection;