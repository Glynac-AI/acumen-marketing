// src/components/layout/Navbar.tsx
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Mail, Phone } from "lucide-react";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    // Track scroll position
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    const isActive = (path: string) => {
        return location.pathname === path;
    };

    // Navigation links for both desktop and mobile
    const navLinks = [
        { name: "Home", path: "/" },
        { name: "Services", path: "/services" },
        { name: "Pricing", path: "/pricing" },
        { name: "About", path: "/about" },
        { name: "Contact", path: "/contact" }
    ];

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-4 bg-white/90 backdrop-blur-md shadow-sm' : 'py-6 bg-transparent'
                    }`}
            >
                <div className="container mx-auto px-6 flex justify-between items-center">
                    {/* Logo */}
                    <Link
                        to="/"
                        className="relative z-10 flex items-center"
                        onClick={closeMenu}
                    >
                        <motion.span
                            className={`text-2xl font-display font-light tracking-tight transition-colors duration-300 ${isScrolled ? 'text-[#0A2540]' : 'text-[#0A2540]'
                                }`}
                            whileHover={{ x: -3 }}
                            transition={{ duration: 0.2 }}
                        >
                            <span className="font-normal text-[#4F6BFF]">Acumen</span> Marketing
                        </motion.span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center space-x-1">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.path}
                                href={link.path}
                                active={isActive(link.path)}
                                isScrolled={isScrolled}
                            >
                                {link.name}
                            </NavLink>
                        ))}

                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <Link
                                to="/contact"
                                className="ml-3 inline-flex items-center justify-center px-6 py-2 bg-[#4F6BFF] text-white text-sm font-medium rounded-full shadow-sm hover:shadow-md transition-all"
                            >
                                Get Started
                            </Link>
                        </motion.div>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden relative z-10"
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                    >
                        <AnimatePresence mode="wait">
                            {isOpen ? (
                                <motion.div
                                    key="close"
                                    initial={{ opacity: 0, rotate: -90 }}
                                    animate={{ opacity: 1, rotate: 0 }}
                                    exit={{ opacity: 0, rotate: 90 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <X className={`w-6 h-6 ${isScrolled ? 'text-[#0A2540]' : 'text-[#0A2540]'}`} />
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="menu"
                                    initial={{ opacity: 0, rotate: 90 }}
                                    animate={{ opacity: 1, rotate: 0 }}
                                    exit={{ opacity: 0, rotate: -90 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <Menu className={`w-6 h-6 ${isScrolled ? 'text-[#0A2540]' : 'text-[#0A2540]'}`} />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </button>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="lg:hidden fixed inset-0 z-40 bg-white flex flex-col overflow-y-auto pt-20 pb-6 px-6"
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ duration: 0.3, ease: [0.4, 0.0, 0.2, 1] }}
                    >
                        <div className="flex flex-col h-full">
                            {/* Mobile Nav Links */}
                            <div className="space-y-1 py-6">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.path}
                                        to={link.path}
                                        className={`block py-3 text-lg ${isActive(link.path) ? 'text-[#4F6BFF]' : 'text-[#0A2540]'
                                            }`}
                                        onClick={closeMenu}
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                            </div>

                            {/* Mobile Contact Info */}
                            <div className="py-6 border-t border-gray-100">
                                <h3 className="text-sm font-medium text-[#6B7280] uppercase tracking-wider mb-4">
                                    Contact Us
                                </h3>
                                <div className="space-y-3 mb-6">
                                    <div className="flex items-center text-[#505c6e]">
                                        <Phone className="w-5 h-5 text-[#4F6BFF]/70 mr-3 shrink-0" />
                                        <span>(773) 430-3534</span>
                                    </div>
                                    <div className="flex items-center text-[#505c6e]">
                                        <Mail className="w-5 h-5 text-[#4F6BFF]/70 mr-3 shrink-0" />
                                        <span>info@acumen-strategy.com</span>
                                    </div>
                                </div>
                            </div>

                            {/* Mobile CTA Button */}
                            <div className="mt-auto pt-6 border-t border-gray-100">
                                <Link
                                    to="/contact"
                                    className="flex items-center justify-center w-full py-4 bg-[#4F6BFF] text-white text-base font-medium rounded-lg shadow-sm"
                                    onClick={closeMenu}
                                >
                                    Get Started
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

// NavLink component for consistent styling
interface NavLinkProps {
    href: string;
    active: boolean;
    isScrolled: boolean;
    children: React.ReactNode;
}

const NavLink = ({ href, active, isScrolled, children }: NavLinkProps) => {
    return (
        <Link
            to={href}
            className={`px-5 py-2 transition-colors duration-300 rounded-full ${active
                    ? `${isScrolled ? 'text-[#4F6BFF]' : 'text-[#4F6BFF]'}`
                    : `${isScrolled ? 'text-[#0A2540]' : 'text-[#0A2540]'} hover:text-[#4F6BFF]`
                }`}
        >
            {children}
        </Link>
    );
};

export default Navbar;