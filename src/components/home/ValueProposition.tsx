// src/components/home/ValueProposition.tsx
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Globe, Users, Shield, Zap, LineChart, BookOpen } from "lucide-react";

const ValueProposition = () => {
    const sectionRef = useRef(null);

    // Scroll-based animations
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    // Introduction paragraph
    const introParagraph = "In a crowded wealth management landscape, differentiation is hard. Clients are looking for credibility, trust, and expertise — not aggressive sales tactics. That's where we come in.";

    // Value proposition data
    const propositions = [
        {
            icon: <Globe className="w-8 h-8" />,
            title: "Strengthen Digital Presence",
            description: "Establish a professional online footprint that reflects your expertise and values, attracting ideal clients through search optimization and strategic content."
        },
        {
            icon: <Users className="w-8 h-8" />,
            title: "Generate Qualified Leads",
            description: "Create targeted campaigns that connect with high-net-worth individuals and institutions seeking wealth management services."
        },
        {
            icon: <Shield className="w-8 h-8" />,
            title: "Build Trust with Prospects",
            description: "Develop compliance-aware content that demonstrates expertise while nurturing long-term relationships built on credibility and value."
        },
        {
            icon: <LineChart className="w-8 h-8" />,
            title: "Scale Your Outreach",
            description: "Implement systems that allow your firm to consistently engage with prospects and clients while maintaining a personal touch."
        },
        {
            icon: <BookOpen className="w-8 h-8" />,
            title: "Industry Knowledge",
            description: "Work with specialists who understand wealth management, compliance requirements, and how to effectively communicate complex financial concepts."
        },
        {
            icon: <Zap className="w-8 h-8" />,
            title: "Efficient Execution",
            description: "Get marketing initiatives implemented with our lean team approach, combining strategy expertise with efficient project management."
        }
    ];

    return (
        <section className="py-24 md:py-32 relative overflow-hidden" ref={sectionRef}>
            {/* Background design elements */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-b from-background to-gray-50 pointer-events-none"
                style={{ opacity }}
            />

            <motion.div
                className="absolute -left-36 -bottom-36 w-96 h-96 rounded-full bg-ph/5 blur-3xl"
                style={{ opacity }}
            />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    className="text-center mb-16 md:mb-20"
                    style={{ y, opacity }}
                >
                    <h2 className="text-3xl md:text-4xl font-display font-light tracking-tight text-foreground mb-6">
                        How We <span className="text-ph font-normal">Help You Grow</span>
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        {introParagraph}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {propositions.map((prop, index) => (
                        <motion.div
                            key={index}
                            className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: 0.1 * index, duration: 0.5 }}
                            whileHover={{ y: -5 }}
                        >
                            <div className="text-ph mb-4">{prop.icon}</div>
                            <h3 className="text-xl font-medium text-foreground mb-3">{prop.title}</h3>
                            <p className="text-muted-foreground">{prop.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ValueProposition;