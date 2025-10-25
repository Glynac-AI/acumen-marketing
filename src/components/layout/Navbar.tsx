// src/components/layout/Navbar.tsx
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [showCompanyDropdown, setShowCompanyDropdown] = useState(false);
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
        setShowCompanyDropdown(false);
    };

    const isActive = (path: string) => {
        return location.pathname === path;
    };

    // Simplified main navigation (5 items max)
    const mainNavLinks = [
        { name: "Services", path: "/services" },
        { name: "Pricing", path: "/pricing" },
        { name: "Our Approach", path: "/approach" },
        { name: "Company", path: "#", hasDropdown: true }
    ];

    // Company dropdown items
    const companyDropdownLinks = [
        { name: "About Us", path: "/about" },
        { name: "The Acumen Ecosystem", path: "/ecosystem" },
        { name: "Contact", path: "/contact" }
    ];

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-4 bg-white/95 backdrop-blur-md shadow-sm' : 'py-6 bg-white/80 backdrop-blur-sm'
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
                            className="text-2xl font-display font-light tracking-tight text-foreground"
                            whileHover={{ scale: 1.02 }}
                        >
                            <span className="text-ph font-medium">Acumen</span>{" "}
                            <span className="font-light">Labs</span>
                        </motion.span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center space-x-8">
                        {mainNavLinks.map((link) => (
                            <div key={link.path} className="relative">
                                {link.hasDropdown ? (
                                    <div
                                        className="relative"
                                        onMouseEnter={() => setShowCompanyDropdown(true)}
                                        onMouseLeave={() => setShowCompanyDropdown(false)}
                                    >
                                        <button
                                            className={`flex items-center navbar-link ${['/about', '/ecosystem', '/contact'].includes(location.pathname)
                                                    ? 'active-link'
                                                    : ''
                                                }`}
                                        >
                                            {link.name}
                                            <ChevronDown className="w-4 h-4 ml-1" />
                                        </button>

                                        {/* Dropdown Menu */}
                                        <AnimatePresence>
                                            {showCompanyDropdown && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: 10 }}
                                                    transition={{ duration: 0.2 }}
                                                    className="absolute top-full left-0 mt-2 w-56 bg-white border border-gray-200 shadow-lg rounded-lg overflow-hidden"
                                                >
                                                    {companyDropdownLinks.map((item) => (
                                                        <Link
                                                            key={item.path}
                                                            to={item.path}
                                                            className={`block px-4 py-3 text-sm transition-colors ${isActive(item.path)
                                                                    ? 'bg-ph/5 text-ph'
                                                                    : 'text-foreground hover:bg-gray-50'
                                                                }`}
                                                            onClick={() => setShowCompanyDropdown(false)}
                                                        >
                                                            {item.name}
                                                        </Link>
                                                    ))}
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                ) : (
                                    <Link
                                        to={link.path}
                                        className={`navbar-link ${isActive(link.path) ? 'active-link' : ''}`}
                                    >
                                        {link.name}
                                    </Link>
                                )}
                            </div>
                        ))}

                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Link
                                to="/contact"
                                className="button-primary"
                            >
                                Book Strategy Call
                            </Link>
                        </motion.div>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={toggleMenu}
                        className="lg:hidden relative z-10 p-2 text-foreground"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </header>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="fixed inset-0 z-40 lg:hidden bg-white"
                    >
                        <div className="flex flex-col items-start justify-center h-full space-y-6 px-8 pt-20">
                            {/* Mobile main links */}
                            {mainNavLinks.map((link, index) => (
                                <motion.div
                                    key={link.path}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="w-full"
                                >
                                    {link.hasDropdown ? (
                                        <div className="space-y-3">
                                            <div className="text-xl font-light text-muted-foreground">
                                                {link.name}
                                            </div>
                                            <div className="pl-4 space-y-3 border-l-2 border-ph/20">
                                                {companyDropdownLinks.map((item) => (
                                                    <Link
                                                        key={item.path}
                                                        to={item.path}
                                                        onClick={closeMenu}
                                                        className={`block text-lg ${isActive(item.path) ? 'text-ph' : 'text-foreground'
                                                            }`}
                                                    >
                                                        {item.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    ) : (
                                        <Link
                                            to={link.path}
                                            onClick={closeMenu}
                                            className={`block text-2xl font-light ${isActive(link.path) ? 'text-ph' : 'text-foreground'
                                                }`}
                                        >
                                            {link.name}
                                        </Link>
                                    )}
                                </motion.div>
                            ))}

                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: mainNavLinks.length * 0.1 }}
                                className="pt-4"
                            >
                                <Link
                                    to="/contact"
                                    onClick={closeMenu}
                                    className="button-primary text-lg px-8 py-3"
                                >
                                    Book Strategy Call
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;