"use client";
import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { Outfit } from 'next/font/google';

const outfit = Outfit({ subsets: ['latin'] });

export default function LandingPage() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!containerRef.current) return;
            const x = (window.innerWidth / 2 - e.pageX) / 40;
            const y = (window.innerHeight / 2 - e.pageY) / 40;
            containerRef.current.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const handleCardClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const ripple = document.createElement('span');
        ripple.className = 'ripple';
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;
        e.currentTarget.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 600);
    };

    return (
        <div className={`landing-body ${outfit.className}`}>
            {/* eslint-disable-next-line react/no-unknown-property */}
            <style jsx global>{`
                .landing-body {
                    background-color: #030712;
                    height: 100vh;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    overflow: hidden;
                    color: #f8fafc;
                    position: relative;
                    perspective: 1000px;
                }

                .bg-gradient {
                    position: absolute;
                    inset: 0;
                    background: 
                        radial-gradient(circle at 10% 20%, rgba(99, 102, 241, 0.15) 0%, transparent 40%),
                        radial-gradient(circle at 90% 80%, rgba(236, 72, 153, 0.15) 0%, transparent 40%),
                        radial-gradient(circle at 50% 50%, rgba(168, 85, 247, 0.1) 0%, transparent 60%);
                    z-index: -1;
                }

                .container {
                    width: 95%;
                    max-width: 1000px;
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    grid-template-rows: auto auto auto;
                    gap: 1.25rem;
                    padding: 2rem;
                    transition: transform 0.1s ease-out;
                }

                .card {
                    background: rgba(17, 24, 39, 0.7);
                    backdrop-filter: blur(24px);
                    -webkit-backdrop-filter: blur(24px);
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    border-radius: 28px;
                    padding: 1.5rem;
                    text-decoration: none;
                    color: white;
                    transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    position: relative;
                    overflow: hidden;
                }

                .card:hover {
                    transform: translateY(-8px);
                    border-color: rgba(255, 255, 255, 0.2);
                    box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.5);
                    background: rgba(31, 41, 55, 0.8);
                }

                .card-profile {
                    grid-column: span 2;
                    grid-row: span 2;
                    padding: 2.5rem;
                    background: linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(168, 85, 247, 0.1));
                }

                .profile-img {
                    width: 80px;
                    height: 80px;
                    background: linear-gradient(135deg, #6366f1, #a855f7);
                    border-radius: 20px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 2rem;
                    font-weight: 800;
                    color: white;
                    box-shadow: 0 10px 30px rgba(99, 102, 241, 0.4);
                }

                .card-profile h1 {
                    font-size: 2.8rem;
                    font-weight: 800;
                    line-height: 1.1;
                    letter-spacing: -2px;
                    margin-top: 1rem;
                }

                .card-profile p {
                    color: #94a3b8;
                    font-size: 1.1rem;
                    max-width: 90%;
                    margin-top: 1rem;
                }

                .launch-tag {
                    background: white;
                    color: black;
                    padding: 0.5rem 1.25rem;
                    border-radius: 100px;
                    font-weight: 800;
                    font-size: 0.8rem;
                    display: inline-flex;
                    align-items: center;
                    gap: 0.5rem;
                    width: fit-content;
                    margin-top: 2rem;
                    transition: 0.3s;
                }

                .card:hover .launch-tag {
                    background: #6366f1;
                    color: white;
                    transform: scale(1.05);
                }

                .card-projects {
                    grid-column: span 2;
                    background: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=600');
                    background-size: cover;
                    background-position: center;
                }

                .card-small {
                    grid-column: span 1;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 2rem;
                }

                .card-small i {
                    font-size: 2.5rem;
                    transition: 0.4s;
                    color: #6366f1;
                }

                .card-small:hover i {
                    transform: scale(1.2) rotate(-10deg);
                }

                .label-tag {
                    font-size: 0.7rem;
                    font-weight: 800;
                    text-transform: uppercase;
                    letter-spacing: 1.5px;
                    color: #6366f1;
                    margin-bottom: 0.5rem;
                }

                .card h3 {
                    font-size: 1.25rem;
                    font-weight: 700;
                    letter-spacing: -0.5px;
                }

                .ripple {
                    position: absolute;
                    border-radius: 50%;
                    background: rgba(255, 255, 255, 0.4);
                    transform: scale(0);
                    animation: ripple-effect 0.6s linear;
                    pointer-events: none;
                }

                @keyframes ripple-effect {
                    to { transform: scale(4); opacity: 0; }
                }

                @media (max-width: 850px) {
                    .container {
                        grid-template-columns: repeat(2, 1fr);
                        padding: 1rem;
                        overflow-y: auto;
                        height: auto;
                    }
                    .landing-body { height: auto; min-height: 100vh; overflow: auto; }
                }
            `}</style>

            <div className="bg-gradient"></div>

            <main className="container" ref={containerRef}>
                {/* Main Portfolio Intro */}
                <Link href="/main" className="card card-profile" onClick={handleCardClick as any}>
                    <div className="profile-header">
                        <div className="profile-img">SR</div>
                        <div className="label-tag">Full Stack Developer</div>
                        <h1>Sairishik<br />Reddy</h1>
                        <p>Crafting digital experiences with Next.js, Three.js, and high-performance backend systems.</p>
                        <div className="launch-tag">
                            ENTER PORTFOLIO <i className="fas fa-arrow-right"></i>
                        </div>
                    </div>
                </Link>

                {/* Projects Portal */}
                <Link href="/main#work" className="card card-projects" onClick={handleCardClick as any}>
                    <div>
                        <div className="label-tag" style={{ color: 'white', opacity: 0.8 }}>Latest Work</div>
                        <h3>Featured Projects</h3>
                    </div>
                    <p style={{ fontSize: '0.85rem', opacity: 0.8 }}>Explore my recent builds and technical contributions.</p>
                </Link>

                {/* Education */}
                <Link href="/main#education" className="card card-small education" onClick={handleCardClick as any} style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <div className="label-tag">Academic</div>
                    <i className="fas fa-graduation-cap" style={{ color: '#fbbf24' }}></i>
                    <h3>Education</h3>
                </Link>

                {/* Contact */}
                <Link href="/main#contact" className="card card-small contact" onClick={handleCardClick as any} style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <div className="label-tag">Connect</div>
                    <i className="fas fa-paper-plane" style={{ color: '#10b981' }}></i>
                    <h3>Contact</h3>
                </Link>

                {/* LinkedIn */}
                <a href="https://www.linkedin.com/in/sai-rishik-reddy-yadavalli-648b782b1/" className="card card-small linkedin" target="_blank" rel="noopener noreferrer" onClick={handleCardClick as any} style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <div className="label-tag">Professional</div>
                    <i className="fab fa-linkedin" style={{ color: '#0a66c2' }}></i>
                    <h3>LinkedIn</h3>
                </a>

                {/* GitHub */}
                <a href="https://github.com/Sai-Rishik-Reddy-Yadavalli" className="card card-small github" target="_blank" rel="noopener noreferrer" onClick={handleCardClick as any} style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <div className="label-tag">Source</div>
                    <i className="fab fa-github" style={{ color: '#f0f6fc' }}></i>
                    <h3>GitHub</h3>
                </a>
            </main>

            {/* Font Awesome */}
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        </div>
    );
}