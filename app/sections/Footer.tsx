import Link from "next/link";
// import { motion } from "framer-motion";
import AnimatedBody from "../animations/AnimatedBody";
import React from "react";

const Footer = () => {
    return (
        <footer className="relative z-10 w-full bg-black py-12">
            <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-6 px-6 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 sm:flex-row md:text-xs">
                <div className="flex flex-col items-center gap-2 sm:items-start">
                    <AnimatedBody
                        text={`© ${new Date().getFullYear()} SAI RISHIK REDDY YADAVALLI`}
                        className="m-0 p-0 text-white/40"
                    />
                </div>

                <div className="flex items-center gap-2">
                    <span className="text-white/20">Archived 26.01</span>
                    <div className="h-1 w-1 rounded-full bg-[#5CE65C]/40" />
                    <Link
                        href="https://github.com/22r01a0561"
                        target="_blank"
                        className="text-white/40 transition-colors hover:text-[#5CE65C]"
                    >
                        Source Code
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;