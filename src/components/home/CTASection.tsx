// src/components/home/CTASection.tsx
import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle,
  Mail,
  Calendar,
  PhoneCall
} from "lucide-react";

const CTASection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [hoverState, setHoverState] = useState<string | null>(null);
  
  // Scroll-based animations
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);
  const y = useTransform(scrollYProgress, [0.1, 0.3], [50, 0]);
  
  // Contact options with icons
  const contactOptions = [
    {
      id: "schedule",
      icon: <Calendar className="w-5 h-5" />,
      title: "Schedule a Call",
      description: "Book a 30-minute consultation to discuss your needs"
    },
    {
      id: "email",
      icon: <Mail className="w-5 h-5" />,
      title: "Email Us",
      description: "Send us a message and we'll respond within 24 hours"
    },
    {
      id: "phone",
      icon: <PhoneCall className="w-5 h-5" />,
      title: "Call Directly",
      description: "Speak with our team during business hours"
    }
  ];

  // Key benefits/features for the right column
  const keyBenefits = [
    "Strategy-led marketing plans",
    "Compliance-aware execution",
    "Industry-specific expertise",
    "Measurable ROI focus",
    "Content that builds trust",
    "Digital-first approach"
  ];

  return (
    <section
      ref={sectionRef}
      className="py-24 md:py-32 relative overflow-hidden"
      id="cta"
    >
      {/* Rich gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-ph to-[#3A56E8] pointer-events-none"></div>
      
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-pattern opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFFFFF' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        backgroundSize: '60px'
      }}></div>
      
      {/* Abstract shape elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-white/5 rounded-bl-[100px]"></div>
      <div className="absolute left-0 bottom-0 w-1/2 h-1/2 bg-white/5 rounded-tr-[200px]"></div>
      
      {/* Abstract circles */}
      <div className="absolute top-1/4 left-1/6 w-32 h-32 rounded-full border border-white/15"></div>
      <div className="absolute bottom-1/3 right-1/6 w-24 h-24 rounded-full border border-white/15"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="max-w-6xl mx-auto"
          style={{ opacity, y }}
        >
          {/* Two-column layout for enhanced CTA */}
          <div className="flex flex-col lg:flex-row bg-white/10 backdrop-blur-md rounded-sm overflow-hidden">
            {/* Left column - main CTA */}
            <div className="lg:w-3/5 p-10 md:p-16">
              <motion.h2 
                className="text-3xl md:text-4xl lg:text-5xl font-display font-light tracking-tight text-white mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                Grow Your Wealth Management Practice
              </motion.h2>
              
              <motion.p 
                className="text-xl text-white/90 mb-12 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 }}
              >
                Partner with Acumen Marketing to strengthen your digital presence, generate qualified leads, and build trust with prospects and clients.
              </motion.p>
              
              {/* Contact option cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
                {contactOptions.map((option, index) => (
                  <motion.div
                    key={option.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                    className={`p-5 rounded-sm border transition-all duration-300 cursor-pointer ${
                      hoverState === option.id 
                        ? 'bg-white/20 border-white/40' 
                        : 'bg-white/10 border-white/20 hover:bg-white/15'
                    }`}
                    onMouseEnter={() => setHoverState(option.id)}
                    onMouseLeave={() => setHoverState(null)}
                  >
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white mr-4">
                        {option.icon}
                      </div>
                      <div>
                        <h3 className="text-white text-lg font-medium mb-1">{option.title}</h3>
                        <p className="text-white/70 text-sm">{option.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* Primary CTA button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.5 }}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-white text-ph font-medium shadow-lg hover:shadow-xl transition-all"
                >
                  <span>Discover How We Can Help You Grow</span>
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </motion.div>
            </div>
            
            {/* Right column - benefits and testimonial */}
            <div className="lg:w-2/5 bg-white/5 p-10 md:p-16 flex flex-col justify-between">
              {/* Benefits list */}
              <div className="mb-12">
                <h3 className="text-xl font-medium text-white mb-6">Why Choose Acumen Marketing</h3>
                
                <ul className="space-y-3">
                  {keyBenefits.map((benefit, index) => (
                    <motion.li 
                      key={index}
                      className="flex items-center"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                    >
                      <CheckCircle className="w-5 h-5 text-white/80 mr-3 flex-shrink-0" />
                      <span className="text-white">{benefit}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
              
              {/* Testimonial quote */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.6 }}
              >
                <div className="relative">
                  {/* Quote mark */}
                  <div className="absolute -top-3 -left-3 text-6xl text-white/20 font-serif">"</div>
                  
                  <blockquote className="pl-6 relative">
                    <p className="text-white/90 italic mb-4">
                      Acumen's deep understanding of the wealth management industry made them an ideal partner for our firm's marketing needs.
                    </p>
                    <footer className="text-white/70 text-sm">
                      — Managing Director, RIA with $1.2B AUM
                    </footer>
                  </blockquote>
                </div>
              </motion.div>
            </div>
          </div>
          
          {/* Client types - simplified display */}
          <div className="mt-12 flex justify-center">
            <div className="flex flex-wrap justify-center gap-3 text-sm text-white/80">
              <span className="px-4 py-1.5 rounded-full bg-white/10 border border-white/20">RIAs</span>
              <span className="px-4 py-1.5 rounded-full bg-white/10 border border-white/20">Family Offices</span>
              <span className="px-4 py-1.5 rounded-full bg-white/10 border border-white/20">Financial Advisors</span>
              <span className="px-4 py-1.5 rounded-full bg-white/10 border border-white/20">Wealth Managers</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;