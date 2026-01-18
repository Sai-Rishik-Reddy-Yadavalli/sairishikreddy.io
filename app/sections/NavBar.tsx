"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import { PiCertificateFill } from "react-icons/pi";
import { MdWork, MdHomeFilled } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";
import { FaUserGraduate } from "react-icons/fa6";
import { RiUser6Fill } from "react-icons/ri";
import { FaTools } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const href = e.currentTarget.getAttribute("href");
        if (!href) return;
        const targetId = href.slice(1);
        const element = document.getElementById(targetId);

        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
        setIsMenuOpen(false);
    };

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const navLinks = [
        { label: "Home", href: "#home", icon: <MdHomeFilled /> },
        { label: "About", href: "#about", icon: <RiUser6Fill /> },
        { label: "Education", href: "#education", icon: <FaUserGraduate /> },
        { label: "Work", href: "#work", icon: <MdWork /> },
        { label: "Certificates", href: "#certifications", icon: <PiCertificateFill /> },
        { label: "Tools", href: "#tools", icon: <FaTools /> },
        { label: "Contact", href: "#contact", icon: <RiContactsFill /> },
    ];

    const menuVariants = {
        closed: {
            opacity: 0,
            x: "100%",
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 30,
            },
        },
        open: {
            opacity: 1,
            x: 0,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 30,
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    };

    const linkVariants = {
        closed: { opacity: 0, x: 20 },
        open: { opacity: 1, x: 0 },
    };

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                ? "bg-black/80 backdrop-blur-xl border-b border-white/5 py-3"
                : "bg-transparent py-5"
                } text-white px-5 flex flex-row justify-between items-center md:px-10`}
        >
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="order-2 md:order-1 text-right md:text-left"
            >
                <h1 className="text-sm font-medium tracking-wide text-white md:text-xl md:font-bold md:tracking-tighter">
                    SAI RISHIK REDDY YADAVALLI
                </h1>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 md:order-2">
                {navLinks.map(({ label, href, icon }) => (
                    <Link
                        key={href}
                        href={href}
                        className="flex items-center space-x-2 text-sm font-medium text-white/80 hover:text-white transition-colors duration-200"
                        onClick={handleScroll}
                    >
                        <span className="text-lg opacity-70 group-hover:opacity-100">{icon}</span>
                        <span>{label}</span>
                    </Link>
                ))}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
                whileTap={{ scale: 0.9 }}
                className="md:hidden z-[60] text-3xl p-2 focus:outline-none order-1"
                onClick={toggleMenu}
                aria-label="Toggle Menu"
            >
                {isMenuOpen ? <IoClose className="text-white" /> : <IoMenu className="text-white" />}
            </motion.button>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={menuVariants}
                        className="fixed inset-0 bg-black/98 backdrop-blur-2xl z-50 md:hidden flex flex-col items-start justify-center px-12 space-y-8"
                    >
                        {navLinks.map(({ label, href, icon }) => (
                            <motion.div key={href} variants={linkVariants}>
                                <Link
                                    href={href}
                                    className="flex items-center space-x-4 text-2xl font-semibold text-white/80 hover:text-white transition-colors"
                                    onClick={handleScroll}
                                >
                                    <span className="text-3xl text-white">{icon}</span>
                                    <span>{label}</span>
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default NavBar;
