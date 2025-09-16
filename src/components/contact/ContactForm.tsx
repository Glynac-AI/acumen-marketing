// src/components/contact/ContactForm.tsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";

const ContactForm = () => {
    const [formState, setFormState] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        companyName: "",
        companyType: "",
        aum: "",
        message: "",
        services: {
            content: false,
            seo: false,
            paid: false,
            abm: false,
            design: false,
            events: false
        },
        marketing: {
            challenges: false,
            growth: false,
            compliance: false,
            brand: false,
            leads: false,
            strategy: false
        }
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    // Handle input changes
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormState(prev => ({
            ...prev,
            [name]: value
        }));
    };

    // Handle checkbox changes
    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, checked } = e.target;
        const [category, item] = name.split('.');

        setFormState(prev => ({
            ...prev,
            [category]: {
                ...prev[category as keyof typeof prev] as Record<string, boolean>,
                [item]: checked
            }
        }));
    };

    // Handle form submission
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);

            // Reset form after a delay
            setTimeout(() => {
                setIsSubmitted(false);
                setFormState({
                    firstName: "",
                    lastName: "",
                    email: "",
                    phone: "",
                    companyName: "",
                    companyType: "",
                    aum: "",
                    message: "",
                    services: {
                        content: false,
                        seo: false,
                        paid: false,
                        abm: false,
                        design: false,
                        events: false
                    },
                    marketing: {
                        challenges: false,
                        growth: false,
                        compliance: false,
                        brand: false,
                        leads: false,
                        strategy: false
                    }
                });
            }, 5000);
        }, 1500);
    };

    return (
        <motion.div
            className="bg-white p-8 border border-gray-200 shadow-sm"
            id="contact-form"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
        >
            <div className="mb-8">
                <h2 className="text-2xl font-display font-light text-foreground mb-3">
                    Contact <span className="text-ph">Acumen Marketing</span>
                </h2>
                <p className="text-muted-foreground">
                    Fill out the form below and our team will get back to you within 24 hours.
                </p>
            </div>

            {/* Success message */}
            {isSubmitted && (
                <motion.div
                    className="bg-green-50 border border-green-200 p-6 mb-8 flex items-start"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.3 }}
                >
                    <CheckCircle className="w-6 h-6 text-green-500 mr-4 flex-shrink-0 mt-0.5" />
                    <div>
                        <h3 className="text-lg font-medium text-green-800 mb-1">Message Received</h3>
                        <p className="text-green-700">
                            Thank you for contacting Acumen Marketing. We've received your message and will reach out to you shortly.
                        </p>
                    </div>
                </motion.div>
            )}

            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    {/* Personal Information */}
                    <div>
                        <h3 className="text-lg font-medium text-foreground mb-4">Your Information</h3>

                        <div className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-1">
                                        First Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        name="firstName"
                                        value={formState.firstName}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-ph focus:border-ph"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-1">
                                        Last Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        name="lastName"
                                        value={formState.lastName}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-ph focus:border-ph"
                                        required
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">
                                    Email Address *
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formState.email}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-ph focus:border-ph"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1">
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formState.phone}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-ph focus:border-ph"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Company Information */}
                    <div>
                        <h3 className="text-lg font-medium text-foreground mb-4">Company Information</h3>

                        <div className="space-y-4">
                            <div>
                                <label htmlFor="companyName" className="block text-sm font-medium text-foreground mb-1">
                                    Company Name *
                                </label>
                                <input
                                    type="text"
                                    id="companyName"
                                    name="companyName"
                                    value={formState.companyName}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-ph focus:border-ph"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="companyType" className="block text-sm font-medium text-foreground mb-1">
                                    Company Type *
                                </label>
                                <select
                                    id="companyType"
                                    name="companyType"
                                    value={formState.companyType}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-ph focus:border-ph"
                                    required
                                >
                                    <option value="">Select...</option>
                                    <option value="RIA">RIA</option>
                                    <option value="Family Office">Family Office</option>
                                    <option value="Wealth Management Firm">Wealth Management Firm</option>
                                    <option value="Financial Advisor">Financial Advisor</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="aum" className="block text-sm font-medium text-foreground mb-1">
                                    Assets Under Management
                                </label>
                                <select
                                    id="aum"
                                    name="aum"
                                    value={formState.aum}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-ph focus:border-ph"
                                >
                                    <option value="">Select...</option>
                                    <option value="Under $100M">Under $100M</option>
                                    <option value="$100M-$500M">$100M-$500M</option>
                                    <option value="$500M-$1B">$500M-$1B</option>
                                    <option value="$1B-$5B">$1B-$5B</option>
                                    <option value="$5B+">$5B+</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Services of Interest */}
                <div className="mb-8">
                    <h3 className="text-lg font-medium text-foreground mb-4">Services of Interest</h3>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="flex items-start">
                            <input
                                type="checkbox"
                                id="services.content"
                                name="services.content"
                                checked={formState.services.content}
                                onChange={handleCheckboxChange}
                                className="mt-1 mr-3"
                            />
                            <label htmlFor="services.content" className="text-muted-foreground">
                                Content & Thought Leadership
                            </label>
                        </div>

                        <div className="flex items-start">
                            <input
                                type="checkbox"
                                id="services.seo"
                                name="services.seo"
                                checked={formState.services.seo}
                                onChange={handleCheckboxChange}
                                className="mt-1 mr-3"
                            />
                            <label htmlFor="services.seo" className="text-muted-foreground">
                                SEO & Website Optimization
                            </label>
                        </div>

                        <div className="flex items-start">
                            <input
                                type="checkbox"
                                id="services.paid"
                                name="services.paid"
                                checked={formState.services.paid}
                                onChange={handleCheckboxChange}
                                className="mt-1 mr-3"
                            />
                            <label htmlFor="services.paid" className="text-muted-foreground">
                                Paid Media Campaigns
                            </label>
                        </div>

                        <div className="flex items-start">
                            <input
                                type="checkbox"
                                id="services.abm"
                                name="services.abm"
                                checked={formState.services.abm}
                                onChange={handleCheckboxChange}
                                className="mt-1 mr-3"
                            />
                            <label htmlFor="services.abm" className="text-muted-foreground">
                                Account-Based Marketing
                            </label>
                        </div>

                        <div className="flex items-start">
                            <input
                                type="checkbox"
                                id="services.design"
                                name="services.design"
                                checked={formState.services.design}
                                onChange={handleCheckboxChange}
                                className="mt-1 mr-3"
                            />
                            <label htmlFor="services.design" className="text-muted-foreground">
                                Design & Branding
                            </label>
                        </div>

                        <div className="flex items-start">
                            <input
                                type="checkbox"
                                id="services.events"
                                name="services.events"
                                checked={formState.services.events}
                                onChange={handleCheckboxChange}
                                className="mt-1 mr-3"
                            />
                            <label htmlFor="services.events" className="text-muted-foreground">
                                Webinars & Events
                            </label>
                        </div>
                    </div>
                </div>

                {/* Marketing Objectives */}
                <div className="mb-8">
                    <h3 className="text-lg font-medium text-foreground mb-4">Marketing Objectives</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex items-start">
                            <input
                                type="checkbox"
                                id="marketing.challenges"
                                name="marketing.challenges"
                                checked={formState.marketing.challenges}
                                onChange={handleCheckboxChange}
                                className="mt-1 mr-3"
                            />
                            <label htmlFor="marketing.challenges" className="text-muted-foreground">
                                Addressing current marketing challenges
                            </label>
                        </div>

                        <div className="flex items-start">
                            <input
                                type="checkbox"
                                id="marketing.growth"
                                name="marketing.growth"
                                checked={formState.marketing.growth}
                                onChange={handleCheckboxChange}
                                className="mt-1 mr-3"
                            />
                            <label htmlFor="marketing.growth" className="text-muted-foreground">
                                Growing AUM through marketing
                            </label>
                        </div>

                        <div className="flex items-start">
                            <input
                                type="checkbox"
                                id="marketing.compliance"
                                name="marketing.compliance"
                                checked={formState.marketing.compliance}
                                onChange={handleCheckboxChange}
                                className="mt-1 mr-3"
                            />
                            <label htmlFor="marketing.compliance" className="text-muted-foreground">
                                Ensuring marketing compliance
                            </label>
                        </div>

                        <div className="flex items-start">
                            <input
                                type="checkbox"
                                id="marketing.brand"
                                name="marketing.brand"
                                checked={formState.marketing.brand}
                                onChange={handleCheckboxChange}
                                className="mt-1 mr-3"
                            />
                            <label htmlFor="marketing.brand" className="text-muted-foreground">
                                Enhancing brand visibility
                            </label>
                        </div>

                        <div className="flex items-start">
                            <input
                                type="checkbox"
                                id="marketing.leads"
                                name="marketing.leads"
                                checked={formState.marketing.leads}
                                onChange={handleCheckboxChange}
                                className="mt-1 mr-3"
                            />
                            <label htmlFor="marketing.leads" className="text-muted-foreground">
                                Generating qualified leads
                            </label>
                        </div>

                        <div className="flex items-start">
                            <input
                                type="checkbox"
                                id="marketing.strategy"
                                name="marketing.strategy"
                                checked={formState.marketing.strategy}
                                onChange={handleCheckboxChange}
                                className="mt-1 mr-3"
                            />
                            <label htmlFor="marketing.strategy" className="text-muted-foreground">
                                Developing a marketing strategy
                            </label>
                        </div>
                    </div>
                </div>

                {/* Message */}
                <div className="mb-8">
                    <label htmlFor="message" className="block text-lg font-medium text-foreground mb-4">
                        Tell Us About Your Needs
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleInputChange}
                        rows={5}
                        className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-ph focus:border-ph"
                        placeholder="Please share any specific details about your marketing needs, challenges, or goals..."
                    ></textarea>
                </div>

                {/* Submit Button */}
                <div className="text-right">
                    <motion.button
                        type="submit"
                        className="inline-flex items-center px-6 py-3 bg-ph text-white font-medium transition-all"
                        whileHover={{ y: -3 }}
                        whileTap={{ scale: 0.98 }}
                        disabled={isSubmitting || isSubmitted}
                    >
                        {isSubmitting ? (
                            <>
                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Sending...
                            </>
                        ) : isSubmitted ? (
                            <>
                                <CheckCircle className="w-5 h-5 mr-2" />
                                Sent!
                            </>
                        ) : (
                            <>
                                <Send className="w-5 h-5 mr-2" />
                                Send Message
                            </>
                        )}
                    </motion.button>
                </div>
            </form>

            <div className="mt-8 pt-6 border-t border-gray-100 text-sm text-muted-foreground">
                <p>By submitting this form, you agree to our <a href="/privacy" className="text-ph hover:underline">Privacy Policy</a>. We'll use the information you provide to respond to your inquiry and may contact you about our services.</p>
            </div>
        </motion.div>
    );
};

export default ContactForm;