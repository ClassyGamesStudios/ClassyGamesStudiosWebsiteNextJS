"use client";
import "@/styles/globals.css";
import "@/styles/home.css";
import Image from "next/image";
import Link from "next/link";
import {FaPaperPlane, FaSteam} from "react-icons/fa";
import React, {useEffect, useState} from "react";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import Marquee from "react-fast-marquee";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
    const [marqueePlay, setMarqueePlay] = useState(true);

    // Steam widget configuration
    const ORBITAL_STEAM_APP_ID = 3891880;
    const ORBITAL_STEAM_WIDGET_ENABLED = true;
    const SILLYSUSPECTS_STEAM_APP_ID = null;
    const SILLYSUSPECTS_STEAM_WIDGET_ENABLED = false;

    const logos = [
        "Exel_Logo.webp",
        "MerakCapital_Logo.webp",
        "Microsoft_For_Startups_Logo.webp",
        "Google_Cloud_Startup_Logo.webp",
        "Amazon_Startup_Logo.webp",
        "SillySuspects_Logo.webp",
        "Orbital_Logo.webp",
        "Steam_Logo.webp",
        "GameState_Logo.webp",
    ];

    useEffect(() => {
        const handleVisibilityChange = () => {
            if (document.visibilityState === "hidden") {
                setMarqueePlay(false);
            } else if (document.visibilityState === "visible") {
                setMarqueePlay(true);
            }
        };

        document.addEventListener("visibilitychange", handleVisibilityChange);

        return () => {
            document.removeEventListener("visibilitychange", handleVisibilityChange);
        };
    }, []);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.set(".fadein", {y: 40, opacity: 0});
            gsap.to(".fadein", {
                y: 0,
                opacity: 1,
                duration: 0.6,
                ease: "power2.out",
                stagger: 0.15,
            });

            gsap.from(".featured-games-section", {
                scrollTrigger: {
                    trigger: ".featured-games-section",
                    start: "top 80%",
                },
                y: 100,
                opacity: 0,
                duration: 0.5,
                ease: "power3.out",
            });
            requestAnimationFrame(() => {
                ScrollTrigger.refresh();
            });

            window.addEventListener("load", ScrollTrigger.refresh);
        });

        return () => {
            ctx.revert();
            window.removeEventListener("load", ScrollTrigger.refresh);
        };
    }, []);

    const Wave = ({color = "var(--classyBlack)"}) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            fill={color}
            viewBox="0 0 1000 35"
        >
            <path
                d="M1000 5S822.877 3.636 700 3.93c-18.088.043-36.002 10.945-51 11.07-21.081.175-37.54-10.382-49-10-20.98.7-33.333 17.5-50 15S516.667 0 500 0s-33.333 17.5-50 20-29.02-14.3-50-15c-11.645-.388-29.453 10.167-51 9.992-15.016-.122-30.925-11.022-49-11.064C176.964 3.644 0 5 0 5v30h1000V5z"/>
        </svg>
    );

    return (
        <div className="body">
            {/* ====================== HERO BANNER ====================== */}
            <main className="home-page">
                <div className="home-banner">
                    <div className="home-text-cnt fadein">
                        <div className="trailer-container">
                            <video
                                className="promo-featured"
                                autoPlay
                                playsInline
                                muted
                                loop
                            >
                                <source src="/assets/Videos/Orbital_Teaser_Trailer.mp4" type="video/mp4"/>
                                Your browser does not support the video tag.
                            </video>
                        </div>
                        <div className="cta-container-top">
                            <Link href="/games/orbital" className="cta-button primary">
                                <span>JOIN THE NEXT ORBITAL MISSION</span>
                                <FaPaperPlane/>
                            </Link>
                        </div>
                    </div>
                </div>
                <Wave color="white"/>
            </main>

            {/* Featured Games - Two Columns */}
            <section className="featured-games-section light-section">
                <div className="light-content">
                    <h2 className="light-title">FEATURED GAMES</h2>

                    <div className="featured-games-grid">
                        {/* Orbital - LEFT with Steam Widget */}
                        <div className="featured-game-card">
                            <Link href="/games/orbital" className="featured-game-logo-container">
                                <Image
                                    src="/assets/Logos/OrbitalLogo.webp"
                                    alt="Orbital Logo"
                                    width={500}
                                    height={180}
                                    className="featured-game-logo"
                                />
                            </Link>
                            <p className="featured-game-description">
                                Orbital is an infinite survival challenge where you pilot entire planets to delay
                                humanity&apos;s extinction. Outrun a supermassive black hole, master each world&apos;s unique
                                technologies, push your limits to earn Quanta, unlock new planets, and climb the global
                                leaderboard. One desperate second at a time.
                            </p>
                            {/* Steam Widget for Orbital */}
                            {ORBITAL_STEAM_WIDGET_ENABLED && ORBITAL_STEAM_APP_ID ? (
                                <div className="steam-widget-wrapper">
                                    <iframe
                                        src={`https://store.steampowered.com/widget/${ORBITAL_STEAM_APP_ID}/`}
                                        frameBorder="0"
                                        width="646"
                                        height="190"
                                        title="Orbital Steam Widget"
                                    ></iframe>
                                </div>
                            ) : (
                                <div className="steam-widget-wrapper">
                                    <div className="steam-widget-placeholder">
                                        <div className="placeholder-content">
                                            <FaSteam className="placeholder-icon"/>
                                            <h3>Coming to Steam</h3>
                                            <p>Orbital will be available on Steam soon. Stay tuned for updates!</p>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Orbital Video */}
                            <div className="featured-game-video">
                                <video autoPlay playsInline muted loop>
                                    <source src="/assets/Videos/Orbital_Teaser_Trailer.mp4" type="video/mp4"/>
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </div>

                        {/* SillySuspects - RIGHT with Coming Soon */}
                        <div className="featured-game-card">
                            <Link
                                href="https://store.steampowered.com/app/3073330/SillySuspects"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="featured-game-logo-container"
                            >
                                <Image
                                    src="/assets/Logos/SSLogo.png"
                                    alt="SillySuspects Logo"
                                    width={500}
                                    height={166}
                                    className="featured-game-logo"
                                />
                            </Link>
                            <p className="featured-game-description">
                                The perfect blend of mystery, comedy & chaos. SillySuspects is an
                                outrageously hilarious first-person detective game with a comedic
                                twist on the murder mystery genre.
                            </p>
                            {/* Coming Soon Placeholder for SillySuspects */}
                            {SILLYSUSPECTS_STEAM_WIDGET_ENABLED && SILLYSUSPECTS_STEAM_APP_ID ? (
                                <div className="steam-widget-wrapper">
                                    <iframe
                                        src={`https://store.steampowered.com/widget/${SILLYSUSPECTS_STEAM_APP_ID}/`}
                                        frameBorder="0"
                                        width="646"
                                        height="190"
                                        title="SillySuspects Steam Widget"
                                    ></iframe>
                                </div>
                            ) : (
                                <div className="steam-widget-wrapper">
                                    <div className="steam-widget-placeholder">
                                        <div className="placeholder-content">
                                            <FaSteam className="placeholder-icon"/>
                                            <h3>Coming to Steam</h3>
                                            <p>SillySuspects will be available on Steam soon. Stay tuned for
                                                updates!</p>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* SillySuspects Video */}
                            <div className="featured-game-video">
                                <video autoPlay playsInline muted loop>
                                    <source src="/assets/Videos/SillySuspects_Gameplay.mp4" type="video/mp4"/>
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </div>
                    </div>
                </div>
                <Wave/>
            </section>

            {/* About Us Section */}
            <section className="dark-section">
                <div className="dark-content">
                    <h2 className="dark-title">ABOUT CLASSY GAMES</h2>
                    <p className="dark-paragraph">
                        We&apos;re a remote team of developers, artists, and designers united by
                        a shared love for imaginative, player-first experiences. With a
                        focus on thoughtful design, clear collaboration, and creative
                        integrity, we&apos;re building games that stand out and a studio culture
                        we&apos;re proud of.
                    </p>
                    <Link href="/about-us" className="cta-button primary">
                        <span>Learn More</span>
                        <FaPaperPlane/>
                    </Link>
                </div>
            </section>

            {/* Bottom Marquee - Partners */}
            <div className="scroller2">
                <div className="scroller-track2">
                    <Marquee play={marqueePlay}>
                        {[...Array(2)].map((_, i) =>
                            logos.map((logo, index) => (
                                <Image
                                    key={`${i}-${index}`}
                                    src={`/assets/Logos/Partners/${logo}`}
                                    alt="Partner Logo"
                                    width={70}
                                    height={100}
                                    className="scroll-logo2"
                                />
                            ))
                        )}
                    </Marquee>
                </div>
            </div>
        </div>
    );
}