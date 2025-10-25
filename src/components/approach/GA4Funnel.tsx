// src/components/approach/GA4Funnel.tsx
import React from "react";
import { motion } from "framer-motion";
import { Users, MousePointer, FileText, Video, Mail, Target } from "lucide-react";

const GA4Funnel = () => {
    const funnelStages = [
        {
            icon: <Users className="w-6 h-6" />,
            stage: "Traffic Sources",
            volume: "10,000 visitors/month",
            description: "Multi-channel traffic from organic search, LinkedIn Ads, and referrals",
            sources: ["Organic SEO", "LinkedIn Ads", "Referrals"]
        },
        {
            icon: <MousePointer className="w-6 h-6" />,
            stage: "Landing Page Views",
            volume: "3,000 views",
            conversion: "30% CTR",
            description: "Optimized landing pages designed for wealth management audience"
        },
        {
            icon: <FileText className="w-6 h-6" />,
            stage: "Form Submissions",
            volume: "450 registrations",
            conversion: "15% conversion",
            description: "Educational webinar registrations and content downloads"
        },
        {
            icon: <Video className="w-6 h-6" />,
            stage: "Webinar Attendance",
            volume: "270 attendees",
            conversion: "60% show rate",
            description: "Live educational webinars that build trust and demonstrate expertise"
        },
        {
            icon: <Mail className="w-6 h-6" />,
            stage: "Follow-up Engagement",
            volume: "162 engaged",
            conversion: "60% open rate",
            description: "Personalized nurture sequences with compliance-approved content"
        },
        {
            icon: <Target className="w-6 h-6" />,
            stage: "Qualified Leads",
            volume: "15-120 MQLs",
            conversion: "Based on package",
            description: "Sales-ready prospects with demonstrated interest",
            highlight: true
        }
    ];

    return (
        <section className="py-24 bg-white relative">
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
                            Strategic Framework
                        </span>
                        <h2 className="text-3xl md:text-4xl font-display font-light tracking-tight text-foreground mb-6">
                            The Optimized{" "}
                            <span className="text-ph font-normal">GA4 Conversion Funnel</span>
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                            Our data-driven approach transforms traffic into qualified leads through a
                            carefully optimized funnel
                        </p>
                    </motion.div>

                    {/* Funnel Visualization */}
                    <div className="relative">
                        {/* Connecting Line */}
                        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-ph via-ph/50 to-ph/20 transform -translate-x-1/2 hidden lg:block"></div>

                        {/* Funnel Stages */}
                        <div className="space-y-8">
                            {funnelStages.map((stage, index) => (
                                <motion.div
                                    key={index}
                                    className="relative"
                                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.7, delay: index * 0.1 }}
                                >
                                    <div className={`flex flex-col lg:flex-row items-center gap-8 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                                        }`}>
                                        {/* Content Card */}
                                        <div className="flex-1 w-full">
                                            <div className={`bg-white border-2 ${stage.highlight ? 'border-ph bg-ph/5' : 'border-gray-100'
                                                } p-6 rounded-lg shadow-sm`}>
                                                <div className="flex items-start gap-4">
                                                    <div className={`w-12 h-12 rounded-full ${stage.highlight ? 'bg-ph text-white' : 'bg-ph/10 text-ph'
                                                        } flex items-center justify-center flex-shrink-0`}>
                                                        {stage.icon}
                                                    </div>

                                                    <div className="flex-1">
                                                        <h3 className="text-xl font-medium text-foreground mb-2">
                                                            {stage.stage}
                                                        </h3>

                                                        <div className="flex items-center gap-4 mb-3">
                                                            <div className="text-2xl font-light text-ph">
                                                                {stage.volume}
                                                            </div>
                                                            {stage.conversion && (
                                                                <div className="text-sm text-muted-foreground">
                                                                    ({stage.conversion})
                                                                </div>
                                                            )}
                                                        </div>

                                                        <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                                                            {stage.description}
                                                        </p>

                                                        {stage.sources && (
                                                            <div className="flex flex-wrap gap-2">
                                                                {stage.sources.map((source, idx) => (
                                                                    <span
                                                                        key={idx}
                                                                        className="text-xs px-3 py-1 bg-ph/10 text-ph rounded-full"
                                                                    >
                                                                        {source}
                                                                    </span>
                                                                ))}
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Stage Number */}
                                        <div className="hidden lg:block flex-shrink-0">
                                            <div className="w-16 h-16 rounded-full bg-white border-2 border-ph flex items-center justify-center text-ph font-medium text-xl shadow-md z-10 relative">
                                                {index + 1}
                                            </div>
                                        </div>

                                        {/* Spacer for alternating layout */}
                                        <div className="flex-1 hidden lg:block"></div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GA4Funnel;