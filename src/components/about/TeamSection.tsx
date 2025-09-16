// src/components/about/TeamSection.tsx
import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
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

// Team data with industry-specific experience
const teamMembers: TeamMemberProps[] = [
    {
        name: "Sarah Reynolds",
        role: "Managing Partner & Chief Strategist",
        image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=500&auto=format&fit=crop",
        bio: "Sarah brings over 20 years of experience in wealth management marketing, having previously served as CMO at one of the nation's largest RIAs. She specializes in developing marketing strategies that align with wealth management business goals and regulatory requirements. Sarah has been instrumental in helping dozens of firms attract high-net-worth clients and grow their AUM significantly.",
        shortBio: "Former CMO of a national RIA with expertise in wealth management marketing strategy and compliance.",
        expertise: [
            "Wealth Management Marketing Strategy",
            "Compliance-Approved Content Development",
            "HNW Client Acquisition",
            "RIA Growth Strategies"
        ],
        education: [
            "MBA, Wharton School of Business",
            "BA Economics, University of Michigan"
        ],
        linkedin: "https://linkedin.com",
        email: "sarah@acumen-strategy.com"
    },
    {
        name: "Michael Chen",
        role: "Partner & Digital Marketing Director",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=500&auto=format&fit=crop",
        bio: "Michael specializes in digital marketing strategies for wealth management firms, with particular expertise in SEO, paid media, and marketing automation. With 15 years of experience in financial services marketing, he has helped wealth management firms establish strong digital presences that generate qualified leads while meeting compliance requirements. Michael is known for his data-driven approach to campaign optimization.",
        shortBio: "Digital marketing expert with 15 years of experience in financial services.",
        expertise: [
            "SEO for Wealth Management",
            "Compliant Paid Media Campaigns",
            "Marketing Automation",
            "Digital Analytics & Optimization"
        ],
        education: [
            "MS Marketing, Northwestern University",
            "BS Computer Science, University of California, Berkeley"
        ],
        linkedin: "https://linkedin.com",
        email: "michael@acumen-strategy.com"
    },
    {
        name: "Emily Thornton",
        role: "Content Strategy Director",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=500&auto=format&fit=crop",
        bio: "Emily leads Acumen's content strategy team, specializing in developing thought leadership content that positions wealth management firms as trusted experts. With a background in financial journalism and wealth management communications, she has a deep understanding of the topics that resonate with high-net-worth individuals. Emily ensures all content meets compliance requirements while still being engaging and effective.",
        shortBio: "Former financial journalist specializing in wealth management thought leadership.",
        expertise: [
            "Thought Leadership Development",
            "Financial Content Strategy",
            "Editorial Planning",
            "Compliance-Approved Messaging"
        ],
        education: [
            "MA Journalism, Columbia University",
            "BA Finance, Boston College"
        ],
        linkedin: "https://linkedin.com",
        email: "emily@acumen-strategy.com"
    },
    {
        name: "David Patel",
        role: "Client Services Director",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=500&auto=format&fit=crop",
        bio: "David oversees client relationships and project execution at Acumen Marketing. With over 12 years of experience working with wealth management firms, he understands the unique challenges and opportunities in marketing for RIAs, family offices, and financial advisors. David excels at translating business objectives into effective marketing strategies that drive measurable results.",
        shortBio: "Client relationship expert with deep understanding of wealth management marketing needs.",
        expertise: [
            "Marketing Project Management",
            "Client Relations",
            "Strategy Implementation",
            "Marketing ROI Measurement"
        ],
        education: [
            "MBA, University of Chicago Booth School of Business",
            "BA Business Administration, University of Texas"
        ],
        linkedin: "https://linkedin.com",
        email: "david@acumen-strategy.com"
    },
    {
        name: "Lauren Walker",
        role: "Compliance & Regulatory Specialist",
        image: "https://images.unsplash.com/photo-1619221882052-687bc707aaf7?q=80&w=500&auto=format&fit=crop",
        bio: "Lauren specializes in navigating the complex regulatory landscape of wealth management marketing. With a background in securities law and marketing compliance, she ensures that all Acumen's strategies and deliverables meet SEC, FINRA, and other regulatory requirements. Lauren works closely with clients' compliance teams to develop processes that allow for effective marketing while maintaining regulatory alignment.",
        shortBio: "Former compliance officer specializing in SEC and FINRA marketing regulations.",
        expertise: [
            "SEC & FINRA Marketing Regulations",
            "Compliance Review Processes",
            "Compliant Content Development",
            "Risk Mitigation"
        ],
        education: [
            "JD, Georgetown University Law Center",
            "BS Business, Fordham University"
        ],
        linkedin: "https://linkedin.com",
        email: "lauren@acumen-strategy.com"
    },
    {
        name: "Jason Rodriguez",
        role: "Design & Brand Director",
        image: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?q=80&w=500&auto=format&fit=crop",
        bio: "Jason leads Acumen's design and branding initiatives, creating sophisticated visual identities and marketing materials for wealth management firms. With 18 years of experience in financial services design, he specializes in developing premium brand experiences that resonate with high-net-worth audiences while meeting industry standards. Jason's work helps wealth management firms establish visual credibility and differentiation.",
        shortBio: "Brand design expert specializing in premium visual identities for wealth management.",
        expertise: [
            "Wealth Management Branding",
            "Client-Ready Marketing Materials",
            "Digital Experience Design",
            "Visual Storytelling"
        ],
        education: [
            "MFA Design, Rhode Island School of Design",
            "BFA Visual Communication, Parsons School of Design"
        ],
        linkedin: "https://linkedin.com",
        email: "jason@acumen-strategy.com"
    }
];

const TeamSection = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const [selectedMember, setSelectedMember] = useState<TeamMemberProps | null>(null);

    // Scroll-based animations
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 50]);
    const titleOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
    const titleY = useTransform(scrollYProgress, [0, 0.2], [50, 0]);

    // Open team member modal
    const openModal = (member: TeamMemberProps) => {
        setSelectedMember(member);
        document.body.style.overflow = 'hidden';
    };

    // Close team member modal
    const closeModal = () => {
        setSelectedMember(null);
        document.body.style.overflow = 'auto';
    };

    return (
        <section
            ref={sectionRef}
            className="py-24 md:py-32 relative bg-[#F8FAFF] overflow-hidden"
            id="team"
        >
            {/* Subtle background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#F8FAFF] to-white -z-10"></div>

            {/* Subtle pattern */}
            <div className="absolute inset-0 opacity-[0.02]" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%234F6BFF' fill-opacity='0.8'%3E%3Ccircle cx='10' cy='10' r='1'/%3E%3C/g%3E%3C/svg%3E")`,
                backgroundSize: '20px'
            }}></div>

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
                        Our Team
                    </motion.span>

                    <motion.h2
                        className="text-4xl md:text-5xl font-display font-light tracking-tight text-foreground mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        Wealth Management <span className="text-ph">Marketing Experts</span>
                    </motion.h2>

                    <motion.p
                        className="text-xl text-muted-foreground max-w-3xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                    >
                        Our team combines deep wealth management industry knowledge with
                        marketing expertise to deliver results-driven strategies
                    </motion.p>
                </motion.div>

                <div className="max-w-6xl mx-auto">
                    {/* Team grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {teamMembers.map((member, index) => (
                            <motion.div
                                key={index}
                                className="bg-white border border-gray-200 cursor-pointer group"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.1 * index }}
                                whileHover={{ y: -8, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
                                onClick={() => openModal(member)}
                            >
                                {/* Image */}
                                <div className="relative overflow-hidden h-64">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                    {/* View profile overlay */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <span className="px-4 py-2 bg-white text-ph font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                                            View Profile
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <h3 className="text-xl font-medium text-foreground mb-1">{member.name}</h3>
                                    <div className="text-ph text-sm mb-3">{member.role}</div>
                                    <p className="text-muted-foreground text-sm">{member.shortBio}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Team cta */}
                    <motion.div
                        className="mt-16 text-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.5 }}
                    >
                        <p className="text-muted-foreground mb-3">
                            Our team is backed by experienced specialists in content, design, digital marketing, and compliance.
                        </p>
                        <p className="text-ph font-medium">
                            Together, we're committed to helping wealth management firms grow through strategic marketing.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Team member modal */}
            <AnimatePresence>
                {selectedMember && (
                    <motion.div
                        className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeModal}
                    >
                        <motion.div
                            className="bg-white max-w-4xl max-h-[90vh] overflow-y-auto"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 50 }}
                            transition={{ duration: 0.3 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close button */}
                            <button
                                className="absolute top-4 right-4 p-1 bg-white rounded-full shadow-md z-10"
                                onClick={closeModal}
                            >
                                <X className="w-6 h-6 text-foreground" />
                            </button>

                            <div className="grid grid-cols-1 md:grid-cols-3">
                                {/* Image column */}
                                <div className="md:col-span-1 h-64 md:h-full min-h-[300px] relative">
                                    <img
                                        src={selectedMember.image}
                                        alt={selectedMember.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Content column */}
                                <div className="md:col-span-2 p-8">
                                    <h3 className="text-2xl font-medium text-foreground mb-1">{selectedMember.name}</h3>
                                    <div className="text-ph text-lg mb-4">{selectedMember.role}</div>

                                    <div className="mb-6">
                                        <p className="text-foreground leading-relaxed mb-4">{selectedMember.bio}</p>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                        {/* Expertise */}
                                        <div>
                                            <h4 className="text-lg font-medium text-foreground mb-3">Areas of Expertise</h4>
                                            <ul className="space-y-1">
                                                {selectedMember.expertise.map((item, idx) => (
                                                    <li key={idx} className="text-muted-foreground flex items-center">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-ph mr-2"></div>
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Education */}
                                        <div>
                                            <h4 className="text-lg font-medium text-foreground mb-3">Education</h4>
                                            <ul className="space-y-1">
                                                {selectedMember.education.map((item, idx) => (
                                                    <li key={idx} className="text-muted-foreground flex items-center">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-ph mr-2"></div>
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Contact links */}
                                    <div className="flex space-x-4 pt-4 border-t border-gray-100">
                                        {selectedMember.linkedin && (
                                            <a
                                                href={selectedMember.linkedin}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-2 rounded-full bg-[#F8FAFF] text-ph hover:bg-ph hover:text-white transition-colors"
                                            >
                                                <Linkedin className="w-5 h-5" />
                                            </a>
                                        )}

                                        {selectedMember.email && (
                                            <a
                                                href={`mailto:${selectedMember.email}`}
                                                className="p-2 rounded-full bg-[#F8FAFF] text-ph hover:bg-ph hover:text-white transition-colors"
                                            >
                                                <Mail className="w-5 h-5" />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default TeamSection;