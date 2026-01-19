"use client";
import React, { useState, useEffect } from "react";
import { useEventListener } from 'usehooks-ts';
import useBlobity from "../../components/blobity/useBlobity";
import Blur from "../../components/overlay/Blur";
import Color from "../../components/overlay/Color";
import NavBar from "../../sections/NavBar";
import Hero from "../../sections/Hero";
import About from "../../sections/About";
import Education from "../../sections/education";
import Work from "../../sections/Work";
import Contact from "../../sections/Contact";
import Footer from "../../sections/Footer";
import { ScrollArea } from "../../components/ui/ScrollArea";
import Certifications from "../../sections/certificates";

export default function Home() {
    /* eslint-disable @typescript-eslint/no-unused-vars */
    const [_isMobile, setIsMobile] = useState(false);
    const [_isDesktop, setIsDesktop] = useState(false);
    /* eslint-enable @typescript-eslint/no-unused-vars */

    useEffect(() => {
        try {
            // Initial scroll to top
            window.scrollTo(0, 0);

            // Handle initial screen size
            setIsMobile(window.innerWidth < 768);
            setIsDesktop(window.innerWidth >= 768);

            // Enable smooth scrolling after initial load
            document.documentElement.style.scrollBehavior = 'smooth';
        } catch (error) {
            console.error("Error in useEffect:", error);
        }

        return () => {
            document.documentElement.style.scrollBehavior = 'auto';
        };
    }, []);

    useEventListener('resize', () => {
        setIsMobile(window.innerWidth < 768);
        setIsDesktop(window.innerWidth >= 768);
    });

    useBlobity({
        licenseKey: "opensource",
        focusableElementsOffsetX: 4,
        focusableElementsOffsetY: 4,
        color: "#ffffff",
        dotColor: "#ffffff",
        invert: true,
        focusableElements:
            "[data-blobity], a:not([data-no-blobity]), h4:not([data-no-blobity]), li:not([data-no-blobity]), button:not([data-no-blobity]), [data-blobity-tooltip]",
        font: "'Inter', sans-serif",
        fontSize: 16,
        fontWeight: 900,
        opacity: 1.0,
        fontColor: "#ffffff",
        zIndex: 35,
        size: 50,
        radius: 5,
        magnetic: false,
    });

    return (
        <>
            <ScrollArea style={{ height: '100vh', overflowY: 'auto' }}>
                <Blur />
                <Color />
                <NavBar />
                <main className="flex flex-col items-center justify-center bg-black">
                    <Hero />
                    <About />
                    <Education />
                    <Work />
                    <Certifications />
                    <Contact />
                    <Footer />
                </main>
            </ScrollArea>
        </>
    );
}
