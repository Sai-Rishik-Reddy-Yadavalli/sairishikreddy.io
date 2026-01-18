import { inter } from "../fonts/inter";
import { motion } from "framer-motion";
import React from "react";
import AnimatedTitle from "../animations/AnimatedTitle";
import HackerBackground from "../components/background/hackerbg";
import Image from "next/image";
// import { SiReact, SiNextdotjs, SiFigma } from "react-icons/si";

const FloatingElement = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{
            opacity: 1,
            scale: 1,
            y: [0, -15, 0],
        }}
        transition={{
            opacity: { duration: 0.5, delay },
            scale: { duration: 0.5, delay },
            y: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: delay * 2
            }
        }}
        className={`absolute z-30 ${className}`}
    >
        {children}
    </motion.div>
);

const Hero = () => {
    return (
        <motion.section
            className="relative z-10 flex min-h-[80vh] w-full items-start justify-center overflow-hidden px-6 pt-0 sm:px-10 md:px-16"
            id="home"
            initial="initial"
            animate="animate"
        >
            {/* Background Layer */}
            <div className="absolute inset-0 z-0 opacity-40">
                <HackerBackground />
            </div>

            {/* Creative Background Glows */}
            <div className="absolute top-1/4 -left-20 h-96 w-96 rounded-full bg-emerald-500/10 blur-[120px]" />
            <div className="absolute bottom-1/4 -right-20 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]" />

            {/* Main Content Container */}
            <div className="relative z-20 flex w-full max-w-[1400px] flex-col items-center justify-between gap-16 lg:flex-row">

                {/* Left Column: Text Content */}
                <div className="flex flex-1 flex-col items-center text-center lg:items-start lg:text-left">
                    <div className={`${inter.className} relative`}>
                        {/* Name with Absolute Clean Styling */}
                        <div className="flex flex-col">
                            <AnimatedTitle
                                text={"YADAVALLI SAI RISHIK REDDY"}
                                className="text-[45px] font-black leading-[1] tracking-tighter text-white sm:text-[65px] md:text-[85px] lg:text-[100px]"
                                wordSpace="mr-[0.2em]"
                                charSpace=""
                            />
                        </div>

                        {/* <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="mt-8 max-w-[600px] text-lg leading-relaxed text-gray-400 sm:text-2xl"
                        >
                            Frontend Developer & UI/UX Designer crafting <span className="text-white">high-performance</span> digital experiences.
                        </motion.p> */}
                    </div>

                    {/* Action Buttons - Clean Text Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="mt-12 flex flex-wrap justify-center gap-10 lg:justify-start"
                    >
                        <a
                            href="https://drive.google.com/file/d/1AtIJi28OoF8Zupqi9P2PV6r1P4VjOXGB/view?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative flex items-center gap-2 text-sm font-bold tracking-widest text-white uppercase transition-all"
                        >
                            <span className="relative">
                                View Resume
                                <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-emerald-500 transition-all group-hover:w-full" />
                            </span>
                            <span className="transition-transform group-hover:translate-x-1">→</span>
                        </a>

                        <a
                            href="#contact"
                            className="group flex items-center gap-3 text-sm font-bold tracking-widest text-white uppercase transition-all"
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-300 opacity-75"></span>
                                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400"></span>
                            </span>
                            <span className="relative">
                                Start a project
                                <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-green-400 transition-all group-hover:w-full" />
                            </span>
                        </a>
                    </motion.div>
                </div>

                {/* Right Column: Visual Element */}
                <div className="relative flex flex-1 items-center justify-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 1,
                            ease: [0.16, 1, 0.3, 1],
                            delay: 0.1
                        }}
                        className="relative h-[400px] w-[400px] sm:h-[500px] sm:w-[500px] lg:h-[650px] lg:w-[650px]"
                    >
                        {/* Orbit Circles */}
                        <div className="absolute inset-0 border border-white/5 rounded-full animate-[spin_20s_linear_infinite]" />
                        <div className="absolute inset-10 border border-white/5 rounded-full animate-[spin_15s_linear_infinite_reverse]" />

                        {/* Decorative Radial Glows */}
                        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.2),transparent_100%)]" />

                        <Image
                            src="/assets/creative-avatar.png"
                            alt="Sai Rishik Reddy"
                            fill
                            className="object-contain drop-shadow-[0_0_50px_rgba(16,185,129,0.2)]"
                            priority
                        />
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <div className="h-10 w-6 rounded-full border-2 border-white/20 flex justify-center p-1">
                    <motion.div
                        animate={{ y: [0, 15, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="h-2 w-1.5 rounded-full bg-emerald-500"
                    />
                </div>
            </motion.div>
        </motion.section>
    );
};

export default Hero;
