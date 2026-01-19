import React from "react";
import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedTitle from "../animations/AnimatedTitle";
import { motion } from "framer-motion";

const About = () => {
    return (
        <section
            className="relative z-10 w-full overflow-hidden bg-black py-24 md:py-32 lg:py-48 "
            id="about"
        >
            {/* Minimal Ambient Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[800px] bg-blue-500/[0.015] rounded-full blur-[120px]" />
            </div>

            <div className="relative z-20 mx-auto max-w-[1200px] px-6">
                <header className="mb-20 flex flex-col items-center justify-center text-center">
                    <AnimatedTitle
                        text={"WHO I AM"}
                        className="text-[45px] font-bold leading-none tracking-tighter text-white sm:text-[60px] md:text-[70px] lg:text-[80px]"
                        wordSpace="mr-[0.3em]"
                        charSpace=""
                    />
                </header>

                <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-24">
                    {/* Left Side: Large Typographic Name */}
                    <div className="flex flex-1 flex-col gap-6">
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-xs font-bold tracking-[0.5em] text-[#5CE65C] uppercase"
                        >
                            The Persona
                        </motion.span>
                        <h3 className="text-4xl font-black leading-tight text-white md:text-5xl lg:text-6xl">
                            SAI RISHIK REDDY<br />
                            <span className="text-white/20">YADAVALLI.</span>
                        </h3>
                        <div className="h-1 w-20 bg-[#5CE65C]/30 rounded-full" />
                    </div>

                    {/* Right Side: Narrative */}
                    <div className="flex flex-[1.5] flex-col gap-8">
                        <div className="space-y-6 text-lg leading-relaxed text-gray-400 md:text-xl md:leading-relaxed text-justify">
                            <AnimatedBody text="I am a Computer Science Engineering student at CMR Institute of Technology with a strong interest in Full-Stack Development. I enjoy building websites and mobile applications and learning how complete systems work from front end to back end." />

                            <AnimatedBody
                                delay={0.1}
                                text="I have worked with technologies like React.js, Next.js, Flutter, Firebase, HTML, CSS, JavaScript, Java, and Python. I like creating clean, fast, and user-friendly interfaces, and I enjoy improving designs with small details and smooth interactions."
                            />

                            <AnimatedBody
                                delay={0.2}
                                text="I have built real-world projects such as a Lost & Found mobile app (TraceHub), an Organ Donation Information System, and my personal portfolio website. These projects helped me improve my problem-solving skills and understand how to design and develop practical applications."
                            />

                            <AnimatedBody
                                delay={0.3}
                                text="I am a quick learner, a team player, and someone who enjoys exploring new technologies. My goal is to become a skilled full-stack developer and work on meaningful software that helps people and creates a good user experience."
                            />
                        </div>

                        {/* Status Grid - No boxes, just layout */}
                        <div className=" grid grid-cols-2 gap-8 border-t border-white/5 pt-6">
                            <div className="flex flex-col gap-1">
                                <span className="text-[10px] font-bold tracking-widest text-gray-500 uppercase">Current Focus</span>
                                <span className="text-white font-medium">Full-Stack Development & DevOps Engineer</span>
                            </div>
                            <div className="flex flex-col gap-1">
                                <span className="text-[10px] font-bold tracking-widest text-gray-500 uppercase">Education</span>
                                <span className="text-white font-medium">B.Tech in Computer Science and Engineering</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
