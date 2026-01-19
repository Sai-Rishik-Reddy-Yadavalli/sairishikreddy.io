import { ProjectProps } from "./projectDetails";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useEffect } from "react";
import { SiGithub } from "react-icons/si";
import { HiOutlineExternalLink } from "react-icons/hi";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

interface ExtendedProjectProps extends ProjectProps {
    index: number;
}

const ProjectCard = ({
    name,
    description,
    technologies,
    techNames,
    github,
    demo,
    images,
    available,
    index
}: ExtendedProjectProps) => {
    const isEven = index % 2 === 0;
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Auto-slideshow effect
    useEffect(() => {
        if (images.length <= 1) return;

        const timer = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % images.length);
        }, 5000);

        return () => clearInterval(timer);
    }, [images.length]);

    const nextImage = (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className={`flex flex-col gap-16 lg:flex-row lg:items-start ${isEven ? "" : "lg:flex-row-reverse"}`}
        >
            {/* Image Side (Natural Slideshow) */}
            <div className={`relative flex flex-[0.45] items-center ${isEven ? "justify-center lg:justify-start" : "justify-center lg:justify-end"}`}>
                <div className="relative group w-full max-w-[260px] sm:max-w-[200px] lg:max-w-[200px]">
                    {/* Slideshow Container - No "Box" Backgrounds */}
                    <div className="relative aspect-[9/19.5] w-full overflow-hidden rounded-[2.5rem] shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentImageIndex}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.5, ease: "anticipate" }}
                                className="absolute inset-0"
                            >
                                <Image
                                    src={images[currentImageIndex].startsWith('./') ? images[currentImageIndex].slice(1) : images[currentImageIndex]}
                                    alt={`${name} screenshot ${currentImageIndex + 1}`}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            </motion.div>
                        </AnimatePresence>

                        {/* Glassmorphic Nav Buttons - Only on Hover */}
                        {images.length > 1 && (
                            <div className="absolute inset-0 flex items-center justify-between px-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                <button
                                    onClick={prevImage}
                                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-xl transition-all hover:bg-white/20 active:scale-90"
                                >
                                    <IoIosArrowBack size={24} />
                                </button>
                                <button
                                    onClick={nextImage}
                                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-xl transition-all hover:bg-white/20 active:scale-90"
                                >
                                    <IoIosArrowForward size={24} />
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Indicators (Beads) on the side */}
                    {images.length > 1 && (
                        <div className={`absolute top-1/2 -translate-y-1/2 flex flex-col gap-4 ${isEven ? "-right-10" : "-left-10"}`}>
                            {images.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setCurrentImageIndex(i)}
                                    className="group relative h-4 w-4 flex items-center justify-center"
                                >
                                    <motion.span
                                        initial={false}
                                        animate={{
                                            scale: i === currentImageIndex ? 1 : 0.5,
                                            backgroundColor: i === currentImageIndex ? "#5CE65C" : "rgba(255,255,255,0.2)"
                                        }}
                                        className="h-2 w-2 rounded-full transition-colors group-hover:bg-white/50"
                                    />
                                    {i === currentImageIndex && (
                                        <motion.span
                                            layoutId="indicator-ring"
                                            className="absolute inset-0 rounded-full border border-[#5CE65C]/50"
                                        />
                                    )}
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                {/* Vertical Tech Stack on the side */}
                <div className={`absolute top-1/2 -translate-y-1/2 flex flex-col gap-6 ${isEven ? "-left-12" : "-right-12"}`}>
                    {technologies.map((Icon, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ scale: 1.2, x: isEven ? -5 : 5 }}
                            className="text-white/10 hover:text-[#5CE65C] transition-all cursor-help"
                            title={techNames[i]}
                        >
                            <Icon size={26} />
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Content Side */}
            <div className={`flex flex-1 flex-col pt-4 ${isEven ? "lg:pl-20" : "lg:pr-20"}`}>
                <div className="flex items-center gap-4 mb-4">
                    <span className="text-xs font-bold tracking-[0.4em] text-[#5CE65C] uppercase">
                        Featured Case Study
                    </span>
                    <div className="h-[1px] w-12 bg-[#5CE65C]/30" />
                </div>

                <h3 className="text-[40px] font-black leading-tight text-white md:text-[50px] lg:text-[72px] mb-8">
                    {name}
                </h3>

                <p className="text-lg leading-relaxed text-gray-400 mb-10 max-w-xl">
                    {description}
                </p>

                <div className="flex items-center gap-10">
                    {available && (
                        <>
                            <Link
                                href={github}
                                target="_blank"
                                className="group flex items-center gap-3 text-sm font-bold tracking-widest text-white/50 uppercase transition-colors hover:text-white"
                            >
                                <SiGithub size={22} />
                                <span className="relative">
                                    Source
                                    <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-white transition-all group-hover:w-full" />
                                </span>
                            </Link>

                            <Link
                                href={demo}
                                target="_blank"
                                className="group flex items-center gap-3 text-sm font-bold tracking-widest text-[#5CE65C]/80 uppercase transition-colors hover:text-[#5CE65C]"
                            >
                                <HiOutlineExternalLink size={24} />
                                <span className="relative">
                                    Play Store
                                    <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-[#5CE65C] transition-all group-hover:w-full" />
                                </span>
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
