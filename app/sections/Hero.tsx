import { inter } from "../fonts/inter";
import { motion } from "framer-motion";
import React from "react";
import AnimatedTitle from "../animations/AnimatedTitle";
import Image from "next/image";
import { HiOutlineArrowRight } from "react-icons/hi2";

const Hero = () => {
    return (
        <section
            className="relative z-10 flex min-h-screen w-full items-center justify-center overflow-hidden px-6 pt-0 sm:px-10 md:px-16"
            id="home"
        >
            {/* Minimal Ambient Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 -left-1/4 h-[600px] w-[600px] bg-[#5CE65C]/[0.05] rounded-full blur-[120px]" />
                <div className="absolute bottom-1/4 -right-1/4 h-[600px] w-[600px] bg-blue-500/[0.05] rounded-full blur-[120px]" />
            </div>

            {/* Main Content Container */}
            <div className="relative z-20 flex w-full max-w-[1400px] flex-col items-center justify-between gap-20 lg:flex-row">

                {/* Left Column: Text Content */}
                <div className="flex flex-1 flex-col items-center text-center lg:items-start lg:text-left">
                    <div className={`${inter.className} relative`}>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.3em] text-[#5CE65C]"
                        >
                            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#5CE65C] shadow-[0_0_8px_#5CE65C]" />
                            FRONTEND DEVELOPER
                        </motion.div>

                        <div className="flex flex-col">
                            <AnimatedTitle
                                text={"SAI RISHIK REDDY YADAVALLI"}
                                className="text-[42px] font-black leading-[0.95] tracking-tighter text-white sm:text-[65px] md:text-[85px] lg:text-[105px]"
                                wordSpace="mr-[0.2em]"
                                charSpace=""
                            />
                        </div>

                        {/* <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                            className="mt-10 max-w-[550px] text-lg leading-relaxed text-gray-400 md:text-xl md:leading-relaxed"
                        >
                            Crafting high-performance digital experiences with a focus on <span className="text-white">creative engineering</span> and minimalist design.
                            I’m a frontend developer who loves building beautiful, fast, and user-friendly websites. I’m passionate about creating seamless digital experiences and always eager to learn new technologies.
                        </motion.p> */}
                    </div>

                    {/* Action Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1 }}
                        className="mt-14 flex flex-wrap justify-center gap-12 lg:justify-start"
                    >
                        <a
                            href="https://drive.google.com/file/d/1AtIJi28OoF8Zupqi9P2PV6r1P4VjOXGB/view?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative flex items-center gap-3 text-sm font-bold tracking-widest text-white uppercase"
                        >
                            <span className="relative">
                                View Resume
                                <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-[#5CE65C] transition-all duration-300 group-hover:w-full" />
                            </span>
                            <HiOutlineArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                        </a>

                        <a
                            href="#contact"
                            className="group flex items-center gap-4 text-sm font-bold tracking-widest text-white uppercase"
                        >
                            <span className="relative flex h-2.5 w-2.5 items-center justify-center">
                                <span className="absolute h-full w-full animate-ping rounded-full bg-[#5CE65C] opacity-40"></span>
                                <span className="relative h-2 w-2 rounded-full bg-[#5CE65C] shadow-[0_0_10px_#5CE65C]"></span>
                            </span>
                            <span className="relative">
                                Start a project
                                <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-white/20 transition-all duration-300 group-hover:w-full group-hover:bg-[#5CE65C]" />
                            </span>
                        </a>
                    </motion.div>
                </div>

                {/* Right Column: Visual Element */}
                <div className="relative flex flex-1 items-center justify-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{
                            duration: 1.2,
                            ease: [0.16, 1, 0.3, 1],
                            delay: 0.2
                        }}
                        className="relative h-[350px] w-[350px] sm:h-[450px] sm:w-[450px] lg:h-[600px] lg:w-[600px]"
                    >
                        {/* Elegant Orbit RIngs */}
                        <div className="absolute inset-0 border border-white/[0.03] rounded-full animate-[spin_30s_linear_infinite]" />
                        <div className="absolute inset-16 border border-white/[0.03] rounded-full animate-[spin_20s_linear_infinite_reverse]" />

                        <Image
                            src="/assets/creative-avatar.png"
                            alt="Sai Rishik Reddy"
                            fill
                            className="relative z-10 object-contain drop-shadow-[0_0_80px_rgba(92,230,92,0.15)]"
                            priority
                        />

                        {/* Ambient Glow behind avatar */}
                        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_50%,rgba(92,230,92,0.1),transparent_70%)]" />
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
            >
                <span className="text-[10px] font-bold tracking-[0.4em] text-gray-500 uppercase">Scroll</span>
                <div className="h-12 w-[1px] bg-gradient-to-b from-[#5CE65C] to-transparent" />
            </motion.div>
        </section>
    );
};

export default Hero;
