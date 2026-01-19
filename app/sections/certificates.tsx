import CertificationCard from "../components/certifications/CertificationCard";
import { certifications } from "../components/certifications/certificationDetails";
import React from "react";
import AnimatedTitle from "../animations/AnimatedTitle";
import { motion } from "framer-motion";

const Certifications: React.FC = () => {
    return (
        <section
            className="relative z-10 w-full bg-black py-24 md:py-32 "
            id="certifications"
        >
            {/* Minimal Ambient Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[800px] bg-[#5CE65C]/[0.02] rounded-full blur-[120px]" />
            </div>

            <div className="relative z-20 mx-auto max-w-[1200px] px-6 w-full">
                <header className="mb-20 flex flex-col items-center justify-center text-center">
                    <AnimatedTitle
                        text={"CERTIFICATIONS"}
                        className="text-[35px] font-black leading-none tracking-tighter text-white sm:text-[55px] md:text-[75px] lg:text-[90px]"
                        wordSpace="mr-[0.3em]"
                        charSpace=""
                    />
                    <div className="mt-6 h-1 w-24 bg-[#5CE65C]/20 rounded-full" />
                </header>

                <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
                    {certifications.map((cert) => (
                        <CertificationCard
                            key={cert.id}
                            id={cert.id}
                            name={cert.name}
                            image={cert.image}
                            link={cert.link}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;
