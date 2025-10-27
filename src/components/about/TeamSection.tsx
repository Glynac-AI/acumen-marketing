// src/components/about/TeamSection.tsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Linkedin, Mail, X } from "lucide-react";

// Define team member data structure
interface TeamMemberProps {
    name: string;
    role: string;
    image: string;
    bio: string;
    shortBio: string;
    expertise: string[];
    education: string[];
    linkedin?: string;
    email?: string;
}

// Leadership team data - EXACTLY 5 roles from draft
const teamMembers: TeamMemberProps[] = [
    {
        name: "Sarah Reynolds",
        role: "CEO & Founder",
        image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=500&auto=format&fit=crop",
        bio: "Sarah founded Acumen Labs with a vision to bring specialized marketing expertise exclusively to the wealth management industry. With over 20 years of experience in wealth management marketing, she previously served as CMO at a national RIA where she led the firm's growth from $2B to $8B in AUM. Sarah specializes in developing marketing strategies that align with wealth management business goals while maintaining strict regulatory compliance. Her deep understanding of the wealth management landscape and proven track record of driving AUM growth make her a trusted advisor to RIA leaders and family office principals.",
        shortBio: "Former RIA CMO with 20+ years driving AUM growth through strategic marketing",
        expertise: [
            "Wealth Management Marketing Strategy",
            "AUM Growth & Client Acquisition",
            "Strategic Business Development",
            "Executive Leadership"
        ],
        education: [
            "MBA, Wharton School of Business",
            "BA Economics, University of Michigan"
        ],
        linkedin: "https://linkedin.com",
        email: "sarah@acumen-labs.com"
    },
    {
        name: "Jennifer Martinez",
        role: "Chief Compliance Officer",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=500&auto=format&fit=crop",
        bio: "Jennifer is a former FINRA compliance specialist who brings over 15 years of regulatory expertise to Acumen Labs. Before joining the team, she served as a compliance examiner at FINRA and later as Chief Compliance Officer at a registered broker-dealer. Jennifer oversees all marketing strategies to ensure they meet SEC, FINRA, and state regulatory requirements. She has developed comprehensive compliance frameworks that allow wealth management firms to execute aggressive marketing strategies while maintaining full regulatory alignment. Her proactive approach to compliance review has saved clients from costly regulatory issues while enabling effective marketing campaigns.",
        shortBio: "Former FINRA compliance specialist ensuring marketing meets all regulatory requirements",
        expertise: [
            "SEC & FINRA Marketing Regulations",
            "Compliance Review Processes",
            "Regulatory Risk Management",
            "Marketing Rule 206(4)-1 & Rule 17a-3"
        ],
        education: [
            "JD, Georgetown University Law Center",
            "BA Political Science, Yale University",
            "Series 7, 24, 99 Licenses"
        ],
        linkedin: "https://linkedin.com",
        email: "jennifer@acumen-labs.com"
    },
    {
        name: "Michael Chen",
        role: "Head of Paid Media",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=500&auto=format&fit=crop",
        bio: "Michael leads Acumen Labs' paid media team with over 10 years of RIA marketing experience. He specializes in developing and executing multi-platform advertising campaigns that generate qualified leads for wealth management firms. Michael's data-driven approach combines sophisticated targeting with compliance-approved messaging to reach high-net-worth prospects across LinkedIn, Google, and other platforms. He has managed over $15M in advertising spend for RIAs and family offices, consistently delivering cost-per-lead metrics 30-40% below industry averages. His expertise in financial services advertising ensures campaigns resonate with affluent audiences while meeting all regulatory requirements.",
        shortBio: "Digital advertising expert with 10+ years specializing in RIA lead generation",
        expertise: [
            "Multi-Platform Paid Advertising",
            "LinkedIn & Google Ads for RIAs",
            "Performance Marketing & Attribution",
            "Lead Generation Optimization"
        ],
        education: [
            "MS Marketing, Northwestern University",
            "BS Computer Science, University of California, Berkeley",
            "Google Ads & Analytics Certified"
        ],
        linkedin: "https://linkedin.com",
        email: "michael@acumen-labs.com"
    },
    {
        name: "Emily Thornton",
        role: "Head of Content",
        image: "https://images.unsplash.com/photo-1619221882052-687bc707aaf7?q=80&w=500&auto=format&fit=crop",
        bio: "Emily is a financial services content strategist with over 12 years of experience creating thought leadership content for wealth management firms. Before joining Acumen Labs, she was a financial journalist covering the wealth management industry for leading publications. Emily specializes in developing content strategies that position wealth management firms as trusted experts while building credibility with high-net-worth prospects. She leads our team of writers and ensures all content is not only engaging and informative but also fully compliant with SEC and FINRA regulations. Her work has helped numerous RIAs establish strong thought leadership positions in their markets.",
        shortBio: "Financial services content strategist and former financial journalist",
        expertise: [
            "Thought Leadership Development",
            "Financial Content Strategy",
            "SEO for Wealth Management",
            "Compliance-Approved Messaging"
        ],
        education: [
            "MA Journalism, Columbia University",
            "BA Finance, Boston College"
        ],
        linkedin: "https://linkedin.com",
        email: "emily@acumen-labs.com"
    },
    {
        name: "David Patel",
        role: "Head of Analytics",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=500&auto=format&fit=crop",
        bio: "David is a data scientist specialized in financial services marketing analytics. With a background in quantitative analysis and over 8 years focused exclusively on wealth management firms, he has developed sophisticated attribution models and analytics frameworks that connect marketing activities to AUM growth. David leads our analytics team in implementing comprehensive tracking systems, building real-time dashboards, and providing actionable insights that drive marketing ROI. His expertise in GA4, marketing automation platforms, and CRM integration enables wealth management firms to make data-driven decisions. David's work has helped clients optimize their marketing spend and improve lead quality by 40-60%.",
        shortBio: "Data scientist specialized in wealth management marketing analytics and attribution",
        expertise: [
            "Marketing Analytics & Attribution",
            "GA4 Implementation & Optimization",
            "CRM Integration & Lead Scoring",
            "ROI Measurement & Reporting"
        ],
        education: [
            "MS Data Science, MIT",
            "BS Statistics, University of Texas",
            "Google Analytics & Tag Manager Certified"
        ],
        linkedin: "https://linkedin.com",
        email: "david@acumen-labs.com"
    }
];

const TeamSection = () => {
    const [selectedMember, setSelectedMember] = useState<TeamMemberProps | null>(null);

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
                            Leadership Team
                        </span>
                        <h2 className="text-3xl md:text-4xl font-display font-light tracking-tight text-foreground mb-6">
                            Meet the <span className="text-ph font-normal">Experts</span>
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                            Former RIA marketers, compliance specialists, and fintech operators dedicated exclusively to your growth
                        </p>
                    </motion.div>

                    {/* Team Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                        {teamMembers.map((member, index) => (
                            <motion.div
                                key={index}
                                className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 cursor-pointer group transition-all hover:shadow-lg"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                onClick={() => setSelectedMember(member)}
                            >
                                {/* Image */}
                                <div className="relative h-64 overflow-hidden">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    {/* Overlay on hover */}
                                    <div className="absolute inset-0 bg-ph/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                    {/* View profile overlay */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <span className="px-4 py-2 bg-white text-ph font-medium rounded opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                                            View Profile
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <h3 className="text-xl font-medium text-foreground mb-1">{member.name}</h3>
                                    <div className="text-ph text-sm mb-3">{member.role}</div>
                                    <p className="text-muted-foreground text-sm line-clamp-2">{member.shortBio}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Team CTA */}
                    <motion.div
                        className="mt-16 text-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.5 }}
                    >
                        <p className="text-muted-foreground mb-3">
                            Our leadership team is backed by experienced specialists in content, design, paid media, and analytics
                        </p>
                        <p className="text-ph font-medium">
                            Together, we're committed to helping wealth management firms grow through strategic, compliance-first marketing
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Team Member Modal */}
            <AnimatePresence>
                {selectedMember && (
                    <motion.div
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedMember(null)}
                    >
                        <motion.div
                            className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Modal Header */}
                            <div className="relative">
                                <img
                                    src={selectedMember.image}
                                    alt={selectedMember.name}
                                    className="w-full h-64 object-cover"
                                />
                                <button
                                    onClick={() => setSelectedMember(null)}
                                    className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur flex items-center justify-center hover:bg-white transition-colors"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>

                            {/* Modal Content */}
                            <div className="p-8">
                                <div className="mb-6">
                                    <h3 className="text-3xl font-display font-light text-foreground mb-2">
                                        {selectedMember.name}
                                    </h3>
                                    <p className="text-ph text-lg">{selectedMember.role}</p>
                                </div>

                                <div className="prose prose-gray max-w-none mb-8">
                                    <p className="text-muted-foreground leading-relaxed">
                                        {selectedMember.bio}
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                                    {/* Expertise */}
                                    <div>
                                        <h4 className="text-lg font-medium text-foreground mb-4">Expertise</h4>
                                        <ul className="space-y-2">
                                            {selectedMember.expertise.map((item, idx) => (
                                                <li key={idx} className="flex items-start text-sm text-muted-foreground">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-ph mt-2 mr-3 flex-shrink-0"></div>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Education */}
                                    <div>
                                        <h4 className="text-lg font-medium text-foreground mb-4">Education & Certifications</h4>
                                        <ul className="space-y-2">
                                            {selectedMember.education.map((item, idx) => (
                                                <li key={idx} className="flex items-start text-sm text-muted-foreground">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-ph mt-2 mr-3 flex-shrink-0"></div>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* Contact Links */}
                                <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                                    {selectedMember.linkedin && (

                                        <a
                                            href={selectedMember.linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-ph hover:text-ph-dark transition-colors"
                                        >
                                            <Linkedin className="w-5 h-5" />
                                            <span className="text-sm font-medium">LinkedIn</span>
                                        </a>
                                    )}
                                    {selectedMember.email && (

                                        <a href={`mailto:${selectedMember.email}`}
                                            className="flex items-center gap-2 text-ph hover:text-ph-dark transition-colors"
                                        >
                                            <Mail className="w-5 h-5" />
                                            <span className="text-sm font-medium">Email</span>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )
                }
            </AnimatePresence >
        </section >
    );
};

export default TeamSection;