import React from "react";
import "../animations/animate.css";
import AnimatedTitle from "../animations/AnimatedTitle";
import EducationCard from "../components/ui/EducationCard";
import { motion } from "framer-motion";

const educationDetails = [
    {
        institute: "CMR INSTITUTE OF TECHNOLOGY",
        location: "Hyderabad, India",
        degree: "B.Tech in Computer Science and Engineering",
        duration: "2022 — 2026",
        score: "CGPA: 7.03/10",
    },
    {
        institute: "SRI CHAITANYA JUNIOR KALASALA",
        location: "Uppal, Hyderabad",
        degree: "Intermediate - MPC",
        duration: "2020 — 2022",
        score: "68.5%",
    },
    {
        institute: "SRI CHAITANYA TECHNICAL SCHOOL",
        location: "Nallakunta, Hyderabad",
        degree: "Secondary School Certificate (SSC)",
        duration: "2019 — 2020",
        score: "GPA: 9.8/10",
    },
];

const Education = () => {
    return (
        <section
            className="relative z-10 w-full bg-black py-24 md:py-32"
            id="education"
        >
            {/* Minimal Ambient Background - No hard lines */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[800px] bg-[#5CE65C]/[0.02] rounded-full blur-[120px]" />
            </div>

            <div className="relative z-20 mx-auto max-w-[1200px] px-6">
                <header className="mb-20 flex flex-col items-center justify-center text-center">
                    <AnimatedTitle
                        text={"EDUCATION"}
                        className="text-[35px] font-black leading-none tracking-tighter text-white sm:text-[55px] md:text-[75px] lg:text-[90px]"
                        wordSpace="mr-[0.3em]"
                        charSpace=""
                    />
                </header>

                <div className="grid grid-cols-1 gap-16 md:gap-24 lg:grid-cols-2">
                    {educationDetails.map((edu, index) => (
                        <div
                            key={index}
                            className={`${index === 1 ? 'lg:mt-32' : ''} ${index === 2 ? 'lg:-mt-32' : ''}`}
                        >
                            <EducationCard
                                institution={edu.institute}
                                location={edu.location}
                                degree={edu.degree}
                                duration={edu.duration}
                                score={edu.score}
                            />
                        </div>
                    ))}

                    {/* Unique layout filler to break the "grid box" feel */}
                    <div className="hidden lg:flex items-center justify-center p-12">
                        <motion.div
                            animate={{
                                scale: [1, 1.1, 1],
                                opacity: [0.1, 0.2, 0.1]
                            }}
                            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                            className="text-[150px] font-black text-white/[0.03] select-none"
                        >
                            GRAD
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;