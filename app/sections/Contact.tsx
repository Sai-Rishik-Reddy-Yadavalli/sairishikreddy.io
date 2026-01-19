import Link from "next/link";
import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedTitle from "../animations/AnimatedTitle";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { HiOutlineArrowLongRight } from "react-icons/hi2";

const Contact = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [isFocused, setIsFocused] = useState<string | null>(null);
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");

        try {
            const response = await fetch("https://formspree.io/f/mnqeobyo", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus("success");
                setFormData({ name: "", email: "", message: "" });
                setTimeout(() => setStatus("idle"), 5000);
            } else {
                setStatus("error");
            }
        } catch (error) {
            setStatus("error");
        }
    };

    return (
        <section
            className="relative z-10 w-full overflow-hidden bg-black py-24 md:py-32 lg:py-48 "
            id="contact"
        >
            {/* Minimal Ambient Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[800px] bg-[#5CE65C]/[0.02] rounded-full blur-[120px]" />
            </div>

            <div className="relative z-20 mx-auto max-w-[1200px] px-6">
                <header className="mb-20 flex flex-col items-center justify-center text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.3em] text-[#5CE65C]"
                    >
                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#5CE65C] shadow-[0_0_8px_#5CE65C]" />
                        Drop a line
                    </motion.div>

                    <AnimatedTitle
                        text={"LET'S CONNECT"}
                        className="text-[45px] font-black leading-none tracking-tighter text-white sm:text-[70px] md:text-[90px] lg:text-[110px]"
                        wordSpace="mr-[0.3em]"
                        charSpace=""
                    />
                </header>

                <div className="grid grid-cols-1 gap-20 lg:grid-cols-2">
                    {/* Left Side: Contact Info & Narrative */}
                    <div className="flex flex-col gap-12">
                        <div className="space-y-6">
                            <motion.span
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                className="text-xs font-bold tracking-[0.5em] text-[#5CE65C] uppercase"
                            >
                                Contact Details
                            </motion.span>
                            <AnimatedBody
                                text="Have a project in mind or just want to say hi? I'm always open to discussing new opportunities, creative ideas, or being part of your vision."
                                className="text-lg leading-relaxed text-gray-400 md:text-xl"
                            />
                        </div>

                        <div className="flex flex-col gap-8">
                            <a
                                href="mailto:sairishikreddyyadavalli@gmail.com"
                                className="group flex flex-col items-start gap-1 transition-all"
                            >
                                <span className="text-[10px] font-bold tracking-widest text-gray-500 uppercase">Email</span>
                                <span className="text-xl font-bold text-white transition-colors group-hover:text-[#5CE65C] md:text-2xl">
                                    sairishikreddyyadavalli@gmail.com
                                </span>
                            </a>

                            {/* Socials - Minimal Icons */}
                            <div className="flex items-center gap-8">
                                <Link
                                    href="https://github.com/22r01a0561"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group text-white/30 transition-all hover:text-white"
                                >
                                    <SiGithub size={28} className="group-hover:scale-110 transition-transform" />
                                </Link>
                                <Link
                                    href="https://www.linkedin.com/in/rishik08"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group text-white/30 transition-all hover:text-white"
                                >
                                    <SiLinkedin size={28} className="group-hover:scale-110 transition-transform" />
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Professional Message Box Form */}
                    <motion.form
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col gap-8"
                    >
                        <div className="flex flex-col gap-6 sm:flex-row">
                            <div className="relative flex-1">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="YOUR NAME"
                                    required
                                    onFocus={() => setIsFocused("name")}
                                    onBlur={() => setIsFocused(null)}
                                    onChange={handleChange}
                                    className="w-full bg-transparent border-b border-white/10 py-4 text-xs font-bold tracking-[0.2em] text-white outline-none transition-all placeholder:text-gray-700 focus:border-[#5CE65C]"
                                />
                                <motion.div
                                    className="absolute bottom-0 left-0 h-[2px] bg-[#5CE65C]"
                                    initial={{ width: 0 }}
                                    animate={{ width: isFocused === "name" ? "100%" : "0%" }}
                                />
                            </div>
                            <div className="relative flex-1">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="YOUR EMAIL"
                                    required
                                    onFocus={() => setIsFocused("email")}
                                    onBlur={() => setIsFocused(null)}
                                    onChange={handleChange}
                                    className="w-full bg-transparent border-b border-white/10 py-4 text-xs font-bold tracking-[0.2em] text-white outline-none transition-all placeholder:text-gray-700 focus:border-[#5CE65C]"
                                />
                                <motion.div
                                    className="absolute bottom-0 left-0 h-[2px] bg-[#5CE65C]"
                                    initial={{ width: 0 }}
                                    animate={{ width: isFocused === "email" ? "100%" : "0%" }}
                                />
                            </div>
                        </div>

                        <div className="relative">
                            <textarea
                                name="message"
                                placeholder="YOUR MESSAGE"
                                required
                                rows={4}
                                onFocus={() => setIsFocused("message")}
                                onBlur={() => setIsFocused(null)}
                                onChange={handleChange}
                                className="w-full bg-transparent border-b border-white/10 py-4 text-xs font-bold tracking-[0.2em] text-white outline-none transition-all placeholder:text-gray-700 focus:border-[#5CE65C] resize-none"
                            />
                            <motion.div
                                className="absolute bottom-0 left-0 h-[2px] bg-[#5CE65C]"
                                initial={{ width: 0 }}
                                animate={{ width: isFocused === "message" ? "100%" : "0%" }}
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={status === "loading"}
                            className={`group relative flex items-center justify-between overflow-hidden rounded-full px-8 py-5 text-xs font-black tracking-[0.3em] transition-all active:scale-95 sm:w-fit ${status === "success" ? "bg-[#5CE65C] text-white" : "bg-white text-white"
                                } ${status === "loading" ? "opacity-70 cursor-not-allowed" : ""}`}
                        >
                            <span className="relative z-10 uppercase">
                                {status === "idle" && "Send Message"}
                                {status === "loading" && "Sending..."}
                                {status === "success" && "Message Sent!"}
                                {status === "error" && "Error! Try Again"}
                            </span>
                            <div className="relative z-10 ml-4 flex h-6 w-6 items-center justify-center rounded-full bg-black text-white transition-transform group-hover:translate-x-2">
                                <HiOutlineArrowLongRight size={16} />
                            </div>

                            {/* Hover Shimmer */}
                            {status === "idle" && (
                                <motion.div
                                    className="absolute inset-0 z-0 bg-gradient-to-r from-transparent via-black/5 to-transparent"
                                    animate={{ x: ['-200%', '200%'] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                />
                            )}
                        </button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
