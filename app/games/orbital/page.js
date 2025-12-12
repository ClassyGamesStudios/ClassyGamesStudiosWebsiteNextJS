"use client";

import {useEffect, useState} from "react";
import {gsap} from "gsap";
import Image from "next/image";
import Link from "next/link";
import "@/styles/orbital.css";
import {FaSteam} from "react-icons/fa";

export default function OrbitalPage() {
    const [activeScreenshot, setActiveScreenshot] = useState(0);

    const STEAM_APP_ID = 3891880;
    const STEAM_WIDGET_ENABLED = true;

    const screenshots = [
        {src: "/assets/GameScreenshots/Orbital/Earth_Menu.png", alt: "Orbital Earth menu"},
        {src: "/assets/GameScreenshots/Orbital/Earth_GameVerThree.png", alt: "Orbital Earth gameplay"},
        {src: "/assets/GameScreenshots/Orbital/Leaderboard_VerTwo.png", alt: "Orbital leaderboard view"},
        {src: "/assets/GameScreenshots/Orbital/Luna_GameVerFour.png", alt: "Orbital Luna gameplay"},
        {src: "/assets/GameScreenshots/Orbital/Store_VerOne.png", alt: "Orbital in-game store"},
        {src: "/assets/GameScreenshots/Orbital/Venus_Menu.png", alt: "Orbital Venus menu"},
    ];

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
        });

        return () => ctx.revert();
    }, []);

    const Wave = ({color = "var(--classyBlack)"}) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            fill={color}
            viewBox="0 0 1000 35"
        >
            <path d="M1000 5S822.877 3.636 700 3.93c-18.088.043-36.002 10.945-51 11.07-21.081.175-37.54-10.382-49-10-20.98.7-33.333 17.5-50 15S516.667 0 500 0s-33.333 17.5-50 20-29.02-14.3-50-15c-11.645-.388-29.453 10.167-51 9.992-15.016-.122-30.925-11.022-49-11.064C176.964 3.644 0 5 0 5v30h1000V5z"/>
        </svg>
    );

    return (
        <div className="orbital-body">
            {/* ====================== HERO BANNER ====================== */}
            <main className="orbital-page">
                <div className="orbital-banner">
                    <div className="orbital-text-cnt fadein">
                        <Image
                            src="/assets/Logos/OrbitalLogo.webp"
                            alt="Orbital Logo"
                            width={750}
                            height={270}
                            className="orbital-hero-logo"
                            priority
                        />
                        <p className="coming-soon">Coming 2026</p>
                        <div className="trailer-container">
                            <iframe
                                width="560"
                                height="315"
                                src="https://www.youtube.com/embed/-e4wyXCtN5w?si=Lkg8PSBTn-f8YLFZ&autoplay=1&mute=1&loop=1&playlist=-e4wyXCtN5w"
                                title="Orbital Trailer"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen>
                            </iframe>
                        </div>
                    </div>
                </div>
                <Wave color="white"/>
            </main>

            {/* ====================== STEAM WIDGET (LIGHT) ====================== */}
            <main className="light-section steam-widget-section">
                <div className="light-content fadein">
                    {STEAM_WIDGET_ENABLED && STEAM_APP_ID ? (
                        <div className="steam-widget-wrapper">
                            <iframe
                                src={`https://store.steampowered.com/widget/${STEAM_APP_ID}/`}
                                frameBorder="0"
                                width="646"
                                height="190"
                                title="Steam Widget"
                            ></iframe>
                        </div>
                    ) : (
                        <div className="steam-widget-placeholder">
                            <div className="placeholder-content">
                                <FaSteam className="placeholder-icon"/>
                                <h3>Coming to Steam</h3>
                                <p>Orbital will be available on Steam soon. Stay tuned for updates!</p>
                                <Link
                                    href="https://store.steampowered.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="cta-button primary"
                                >
                                    <FaSteam/>
                                    <span>Follow on Steam</span>
                                </Link>
                            </div>
                        </div>
                    )}
                </div>
                <Wave />
            </main>

            {/* ====================== GAME OVERVIEW (DARK) ====================== */}
            <main className="dark-section">
                <div className="dark-content fadein">
                    <h1 className="dark-title">Game Overview</h1>
                    <p className="dark-paragraph">
                        You are a Planetary Pilot, humanity&apos;s elite. Tasked with prolonging the inevitable grasp of
                        a supermassive blackhole. Dodge asteroids, navigate wormholes, and avoid shooting stars while
                        utilising specialized planetary technologies alongside other Galactic Defenders. Obtain Quanta
                        to unlock new planets. Ascend amid global leaderboards. Success or Achievement or Glory is
                        measured in seconds, not survival.
                    </p>
                    <div className="overview-grid">
                        <div className="game-overview-item">
                            <div className="overview-icon">🪐</div>
                            <h3>Master Planetary Technologies</h3>
                            <p>Each planet has three unique technologies. Learn the tech and combine them to survive longer.</p>
                        </div>

                        <div className="game-overview-item">
                            <div className="overview-icon">☄️</div>
                            <h3>Navigate the Cosmic Onslaught</h3>
                            <p>Dodge escalating asteroid fields, debris storms, and gravity distortions as the black hole closes in.</p>
                        </div>

                        <div className="game-overview-item">
                            <div className="overview-icon">⚡</div>
                            <h3>Awaken New Planets</h3>
                            <p>Earn Quanta each mission to unlock new planets with different technologies and playstyles.</p>
                        </div>

                        <div className="game-overview-item">
                            <div className="overview-icon">🏆</div>
                            <h3>Ascend the Global Leaderboards</h3>
                            <p>Your survival time is your Quanta score. Push longer runs to climb the worldwide rankings.</p>
                        </div>
                    </div>
                </div>
                <Wave color="white"/>
            </main>

            {/* ====================== SCREENSHOTS (LIGHT) ====================== */}
            <main className="light-section screenshots-light-section">
                <div className="light-content fadein">
                <div className="screenshots-gallery">
                        <div className="screenshot-display">
                            <Image
                                src={screenshots[activeScreenshot].src}
                                alt={screenshots[activeScreenshot].alt}
                                width={800}
                                height={450}
                                className="screenshot-featured"
                                priority
                            />
                        </div>
                        <div className="screenshot-carousel">
                            {screenshots.map((shot, index) => (
                                <button
                                    key={shot.src}
                                    className={`screenshot-thumb ${
                                        activeScreenshot === index ? "active" : ""
                                    }`}
                                    onClick={() => setActiveScreenshot(index)}
                                    type="button"
                                    aria-label={`View ${shot.alt}`}
                                >
                                    <Image
                                        src={shot.src}
                                        alt={shot.alt}
                                        width={160}
                                        height={90}
                                        className="screenshot-thumb-image"
                                    />
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
                <Wave />
            </main>
        </div>
    );
}