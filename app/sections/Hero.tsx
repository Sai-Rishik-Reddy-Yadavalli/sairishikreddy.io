import { inter } from "../fonts/inter";
import { motion } from "framer-motion";
import React from "react";
import AnimatedTitle from "../animations/AnimatedTitle";
import HackerBackground from "../components/background/hackerbg";
import { SiCodechef, SiCodeforces, SiGeeksforgeeks, SiHackerrank, SiLeetcode } from "react-icons/si";

const Hero = () => {
    return (
        <motion.section
            className="relative z-10 flex min-h-screen w-full items-center justify-center px-4 text-center sm:px-6 md:px-8"
            id="home"
            initial="initial"
            animate="animate"
        >
            {/* Background */}
            <div className="absolute inset-0 z-0 opacity-50">
                <HackerBackground />
            </div>

            {/* Content */}
            <div className="relative z-20 flex flex-col items-center space-y-4 sm:space-y-6 md:space-y-8">
                <div className={`relative flex flex-col items-center ${inter.className}`}>
                    {/* Name */}
                    <AnimatedTitle
                        text={"HI I'M YADAVALLI SAI RISHIK REDDY."}
                        className="mb-2 text-[32px] font-bold leading-tight text-[#e4ded7] sm:text-[40px] md:text-[50px] lg:text-[65px]"
                        wordSpace="mr-[8px]"
                        charSpace="mr-[0.001em]"
                    />

                    {/* Role */}
                    <AnimatedTitle
                        text={"Frontend Developer & UI UX Designer"}
                        className="text-[18px] font-medium leading-tight text-[#e4ded7] sm:text-[22px] md:text-[28px] lg:text-[35px]"
                        wordSpace="mr-[6px]"
                        charSpace="mr-[0.001em]"
                    />

                    {/* Resume Button */}
                    <a
                        href="https://drive.google.com/file/d/1AtIJi28OoF8Zupqi9P2PV6r1P4VjOXGB/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-5 rounded-lg border-2 border-white px-6 py-3 text-white transition duration-300 hover:bg-white hover:text-black sm:px-8 sm:py-3 md:text-lg"
                    >
                        My Resume
                    </a>
                    
                    {/* Coding Platform Links
                    <div className="mt-6 flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-5">
                        <a
                            href="https://www.codechef.com/users/r22r01a0561"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 rounded-lg border-2 border-[#5A2A27] bg-[#5A2A27] px-4 py-2 text-white transition hover:bg-opacity-80"
                        >
                            <SiCodechef /> <span>CodeChef</span>
                        </a>

                        <a
                            href="https://codeforces.com/profile/22r01a0561"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 rounded-lg border-2 border-[#1F8ACB] bg-[#1F8ACB] px-4 py-2 text-white transition hover:bg-opacity-80"
                        >
                            <SiCodeforces /> <span>Codeforces</span>
                        </a>

                        <a
                            href="https://www.geeksforgeeks.org/user/22r01a0561/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 rounded-lg border-2 border-[#2F8D46] bg-[#2F8D46] px-4 py-2 text-white transition hover:bg-opacity-80"
                        >
                            <SiGeeksforgeeks /> <span>GFG</span>
                        </a>

                        <a
                            href="https://www.hackerrank.com/profile/22r01a0561"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 rounded-lg border-2 border-[#00EA64] bg-[#00EA64] px-4 py-2 text-black transition hover:bg-opacity-80"
                        >
                            <SiHackerrank /> <span>HackerRank</span>
                        </a>

                        <a
                            href="https://leetcode.com/u/22r01a0561/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 rounded-lg border-2 border-[#FFA116] bg-[#FFA116] px-4 py-2 text-black transition hover:bg-opacity-80"
                        >
                            <SiLeetcode /> <span>LeetCode</span>
                        </a>
                    </div> */}
                </div>
            </div>
        </motion.section>
    );
};

export default Hero;
