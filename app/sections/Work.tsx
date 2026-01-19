import ProjectGrid from "../components/work/ProjectGrid";
import React from "react";
import AnimatedTitle from "../animations/AnimatedTitle";
import { motion } from "framer-motion";

const Work = () => {
    return (
        <section
            className="relative z-10 flex w-full flex-col items-center justify-center bg-black pt-12 md:pt-10 pb-20 md:pb-32"
            id="work"
        >
            {/* Minimal Ambient Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[800px] bg-blue-500/[0.02] rounded-full blur-[120px]" />
            </div>

            <div className="relative z-20 mx-auto max-w-[1200px] px-6 w-full">
                <header className="mb-20 flex flex-col items-center justify-center text-center">
                    <AnimatedTitle
                        text={"FEATURED WORK"}
                        className="text-[40px] font-black leading-none tracking-tighter text-white sm:text-[60px] md:text-[80px] lg:text-[100px]"
                        wordSpace="mr-[0.3em]"
                        charSpace=""
                    />
                    <div className="mt-6 h-1 w-24 bg-[#5CE65C]/20 rounded-full" />
                </header>

                <ProjectGrid />
            </div>
        </section>
    );
};

export default Work;
