import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

interface EducationCardProps {
    institution: string;
    location: string;
    degree: string;
    duration: string;
    score: string;
}

const EducationCard: React.FC<EducationCardProps> = ({ institution, location, degree, duration, score }) => {
    return (
        <motion.div
            className="group relative flex flex-col gap-4 p-4 transition-all"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
        >
            {/* Subtle Hover Glow - No Box, just light */}
            <div className="absolute inset-0 -z-10 rounded-3xl bg-[#5CE65C]/[0.03] opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />

            <div className="flex flex-col gap-1">
                <div className="flex items-center gap-3">
                    <span className="text-[10px] font-bold tracking-[0.3em] text-[#5CE65C] uppercase">
                        {duration}
                    </span>
                    <div className="h-[1px] flex-1 bg-white/5 group-hover:bg-[#5CE65C]/20 transition-colors" />
                </div>

                <h3 className="text-xl font-bold text-white sm:text-2xl mt-2 group-hover:text-[#5CE65C] transition-colors">
                    {institution}
                </h3>

                <p className="text-gray-400 font-medium">
                    {degree}
                </p>
            </div>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-semibold tracking-wider text-gray-500 uppercase">
                <span className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
                    {location}
                </span>
                <span className="flex items-center gap-2 text-[#5CE65C]">
                    <FaGraduationCap className="text-sm" />
                    {score}
                </span>
            </div>
        </motion.div>
    );
};

export default EducationCard;
