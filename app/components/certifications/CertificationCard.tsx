import React from "react";
import { motion } from "framer-motion";
import { HiOutlineExternalLink } from "react-icons/hi";
import Image from "next/image";

interface CertificationCardProps {
    id: number;
    name: string;
    image: string;
    link: string;
}

const CertificationCard: React.FC<CertificationCardProps> = ({ id, name, image, link }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="group relative flex flex-col items-start gap-4 p-4 transition-all"
        >
            {/* Soft Ambient Glow on Hover - No hard boxes */}
            <div className="absolute inset-0 -z-10 rounded-3xl bg-[#5CE65C]/[0.03] opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />

            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-2xl">
                <Image
                    src={`${process.env.NODE_ENV === "production" ? "/sairishikreddy.io" : ""}${image}`}
                    alt={name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* External Link Overlay */}
                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                >
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md">
                        <HiOutlineExternalLink size={24} />
                    </div>
                </a>
            </div>

            <div className="flex w-full flex-col gap-2">
                <div className="flex items-center gap-3">
                    <span className="text-[10px] font-bold tracking-[0.3em] text-[#5CE65C] uppercase">
                        ACHIEVEMENT {id + 1}
                    </span>
                    <div className="h-[1px] flex-1 bg-white/5 group-hover:bg-[#5CE65C]/20 transition-colors" />
                </div>

                <h3 className="text-lg font-bold leading-tight text-white group-hover:text-[#5CE65C] transition-colors">
                    {name}
                </h3>
            </div>
        </motion.div>
    );
};

export default CertificationCard;
