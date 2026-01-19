"use client";
import { useEffect } from "react";

export default function HandleScroll() {
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            document.documentElement.style.setProperty('--scroll', `${scrollPosition}`);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return null;
} 
