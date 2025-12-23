"use client";

import React, {useEffect, useState, useRef} from "react";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import "@/styles/orbital-mission.css";
import {
    FaPaperPlane,
    FaGamepad,
    FaUserPlus,
    FaClipboardCheck,
    FaGift,
    FaRocket,
    FaShareAlt,
    FaComments
} from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

export default function OrbitalMission() {
    const [activeAccordion, setActiveAccordion] = useState(null);
    const howItWorksRef = useRef(null);
    const missionRef = useRef(null);

    //Use this website to compress videos - https://www.mp4compress.com/
    const missionVideos = [
        {
            month: "December 2025",
            videoSrc: "/assets/Videos/MissionThumbnails/FirstDefiance.mp4",
            poster: null,
            title: "First Defiance"
        },
        {
            month: "January 2026",
            videoSrc: "/assets/Videos/MissionThumbnails/Starlight.mp4",
            poster: null,
            title: "Starlight"
        },
        {month: "February 2026", videoSrc: null, poster: null, title: "Mission 3"},
        {month: "March 2026", videoSrc: null, poster: null, title: "Mission 4"},
        {month: "April 2026", videoSrc: null, poster: null, title: "Mission 5"},
        {month: "May 2026", videoSrc: null, poster: null, title: "Mission 6"},
        {month: "June 2026", videoSrc: null, poster: null, title: "Mission 7"},
        {month: "July 2026", videoSrc: null, poster: null, title: "Mission 8"},
        {month: "August 2026", videoSrc: null, poster: null, title: "Mission 9"},
        {month: "September 2026", videoSrc: null, poster: null, title: "Mission 10"},
        {month: "October 2026", videoSrc: null, poster: null, title: "Mission 11"},
        {month: "November 2026", videoSrc: null, poster: null, title: "Mission 12"},
    ];

    useEffect(() => {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());

        const ctx = gsap.context(() => {
            gsap.from(".hero-content", {
                y: 50,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
            });

            requestAnimationFrame(() => {
                ScrollTrigger.refresh();
            });
        }, ".hero-section"); // Scope GSAP to only the hero section

        return () => {
            ctx.revert();
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    const toggleAccordion = (index) => {
        setActiveAccordion(activeAccordion === index ? null : index);
    };

    const scrollToHowItWorks = () => {
        howItWorksRef.current?.scrollIntoView({behavior: 'smooth'});
    };

    const scrollToMission = () => {
        missionRef.current?.scrollIntoView({behavior: 'smooth'});
    };

    const faqs = [
        {
            question: "How do I participate?",
            answer: "Sign up above. You'll receive instructions via email before each mission begins."
        },
        {
            question: "When do missions run?",
            answer: "Missions run at the end of each month. Sign up to get notified when the next one starts."
        },
        {
            question: "Can I compete in multiple planetary categories?",
            answer: "Yes! You can submit runs on all planets, but you can only win one prize per mission. If you top multiple leaderboards, you'll receive the prize for your highest-ranking planet and the next pilot in line takes the other."
        },
        {
            question: "How are winners selected?",
            answer: "Planetary Pilot winners are determined by highest Quanta on each planet's leaderboard. Participation draw winners are randomly selected from all participants who submit at least one valid run."
        },
        {
            question: "What platforms are supported?",
            answer: "PC (Windows) only for now. Make sure you have Steam installed since that's how we verify participants."
        },
        {
            question: "How do I receive my prize if I win?",
            answer: "Winners will be contacted via the email they registered with."
        },
        {
            question: "How do I provide feedback?",
            answer: "You'll receive access to our Discord server and feedback forms where you can share your thoughts directly with the dev team."
        }
    ];

    // Reusable Wave component - color is the NEXT section's background color
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
        <div className="orbital-mission-page">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-content">
                    <Link
                        href="https://store.steampowered.com/app/3891880/Orbital"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image
                            src="/assets/Logos/OrbitalLogo.webp"
                            alt="Orbital Logo"
                            width={750}
                            height={270}
                            className="mission-hero-logo"
                            priority
                        />
                    </Link>
                    <div className="trailer-container">
                        <video
                            className="promo-featured"
                            autoPlay
                            playsInline
                            muted
                            loop
                            poster="/assets/Heroes/OrbitalPromo.png"
                        >
                            <source src="/assets/Videos/Orbital Mission Starlight - Horizontal.mp4" type="video/mp4"/>
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <button
                        onClick={scrollToHowItWorks}
                        className="cta-button primary"
                    >
                        <span>JOIN THE NEXT ORBITAL MISSION</span>
                    </button>
                </div>
                <Wave color="white"/>
            </section>

            {/* Mission Timeline Section - LIGHT */}
            <section className="mission-timeline-section light-section">
                <div className="section-container">
                    <h2 className="section-title">Mission Timeline</h2>
                    <div className="mission-videos-grid">
                        {missionVideos.map((mission, index) => (
                            <div
                                key={index}
                                className="mission-video-item"
                                onClick={scrollToMission}
                                role="button"
                                tabIndex={0}
                                onKeyDown={(e) => e.key === 'Enter' && scrollToMission()}
                            >
                                <span className="mission-name">{mission.title}</span>
                                <span className="mission-date">{mission.month}</span>
                                <div className="mission-video-container">
                                    {mission.videoSrc ? (
                                        <video
                                            className="mission-video"
                                            autoPlay
                                            playsInline
                                            muted
                                            loop
                                            poster={mission.poster}
                                        >
                                            <source src={mission.videoSrc} type="video/mp4"/>
                                            Your browser does not support the video tag.
                                        </video>
                                    ) : (
                                        <div className="mission-coming-soon">
                                            <Image
                                                src="/assets/Logos/OrbitalLogo.webp"
                                                alt="Orbital Logo"
                                                width={80}
                                                height={30}
                                                className="coming-soon-logo"
                                            />
                                            <span>Coming Soon</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <Wave color="var(--classyBlack)"/>
            </section>

            {/* How It Works Section - DARK */}
            <section className="how-it-works-section dark-section" ref={howItWorksRef} id="how-it-works">
                <div className="section-container">
                    <h2 className="section-title">How Do The Missions Work?</h2>
                    <div className="process-container">
                        <div className="process-step">
                            <div className="step-number">01</div>
                            <div className="step-icon">
                                <FaUserPlus/>
                            </div>
                            <h3>Enlist</h3>
                            <p>Enlist into the Interstellar Defence Network as a Planetary Pilot</p>
                            <Link
                                href="https://ojpazyzsqmrw.jp.larksuite.com/share/base/form/shrjpDy4NpOr9TtkQHM89dGNFch"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="process-step-button"
                            >
                                Enlist Now
                            </Link>
                        </div>

                        <div className="process-step">
                            <div className="step-number">02</div>
                            <div className="step-icon">
                                <FaGamepad/>
                            </div>
                            <h3>Wishlist Orbital</h3>
                            <p>Wishlist Orbital to support the IDN & Classy Games</p>
                            <Link
                                href="https://store.steampowered.com/app/3891880/Orbital"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="process-step-button"
                            >
                                Wishlist
                            </Link>
                        </div>

                        <div className="process-step">
                            <div className="step-number">03</div>
                            <div className="step-icon">
                                <FaClipboardCheck/>
                            </div>
                            <h3>Contact</h3>
                            <p>The Classy Games team will contact you via email regarding future missions</p>
                        </div>

                        <div className="process-step">
                            <div className="step-number">04</div>
                            <div className="step-icon">
                                <FaGift/>
                            </div>
                            <h3>Play & Earn</h3>
                            <p>Play Orbital, compete in missions and earn pilot rewards</p>
                        </div>

                        <div className="process-step">
                            <div className="step-number">05</div>
                            <div className="step-icon">
                                <FaShareAlt/>
                            </div>
                            <h3>Share on Socials</h3>
                            <p>Post Orbital content on socials using #ClassyGames #ClassyGamesOrbital #Orbital #OrbitalMission</p>
                        </div>

                        <div className="process-step">
                            <div className="step-number">06</div>
                            <div className="step-icon">
                                <FaComments/>
                            </div>
                            <h3>Feedback</h3>
                            <p>Join our Discord server and provide your feedback</p>
                            <Link
                                href="https://discord.com/invite/QTHShZJtGv"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="process-step-button"
                            >
                                Join Discord
                            </Link>

                        </div>

                    </div>
                </div>
                <Wave color="white"/>
            </section>

            {/* Benefits Section - LIGHT */}
            <section className="benefits-section light-section">
                <div className="section-container">
                    <h2 className="section-title">Why Join The Mission?</h2>
                    <div className="benefits-grid">
                        <div className="benefit-box">
                            <div className="benefit-icon">🎮</div>
                            <h3>Play Before Anyone Else</h3>
                            <p>Get exclusive early access to Orbital months before the official release</p>
                        </div>
                        <div className="benefit-box">
                            <div className="benefit-icon">🛠️</div>
                            <h3>Shape The Game</h3>
                            <p>Your feedback directly influences game mechanics, balance, and features</p>
                        </div>
                        <div className="benefit-box">
                            <div className="benefit-icon">🎁</div>
                            <h3>Exclusive Rewards</h3>
                            <p>Unlock special rewards, titles, and bonuses only available to mission participants</p>
                        </div>
                    </div>
                </div>
                <Wave color="var(--classyBlack)"/>
            </section>

            {/* Mission Header - DARK */}
            <section className="mission-header-section dark-section" ref={missionRef} id="mission">
                <div className="section-container">
                    <div className="mission-header">
                        <h2 className="section-title">Next Orbital Mission: &quot;Starlight&quot;</h2>
                        <p className="mission-subtitle">January 30 - February 1, 2026</p>
                        <p className="mission-intro">
                            The Interstellar Defense Network is calling all Planetary Pilots. Every second you survive
                            buys humanity time to escape.
                            <br/><br/>
                            Join this mission to compete for prizes and exclusive rewards, climb the leaderboards, and
                            help shape the development of Orbital. Victory isn&apos;t about winning, it&apos;s about lasting.
                        </p>
                    </div>
                    <div className="cta-container-top">
                        <button
                            onClick={scrollToHowItWorks}
                            className="cta-button primary"
                        >
                            <span>Join the Mission</span>
                        </button>
                    </div>
                </div>
                <Wave color="white"/>
            </section>

            {/* Competition & Mission Details - LIGHT */}
            <section className="competition-details-section light-section">
                <div className="section-container">
                    <div className="competition-categories">
                        <h3 className="subsection-title">Mission Rewards</h3>
                        <h3 className="subsection-title">To Be Announced</h3>
                        {/*<div className="categories-grid">*/}
                        {/*    <div className="category-card category-top-row">*/}
                        {/*        <div className="category-icon">🌍</div>*/}
                        {/*        <h4>Top Planetary Pilot - Earth</h4>*/}
                        {/*        <p className="category-prize">$15 Steam Gift Card</p>*/}
                        {/*        <p className="category-desc">Highest score on Earth</p>*/}
                        {/*    </div>*/}
                        {/*    <div className="category-card category-top-row">*/}
                        {/*        <div className="category-icon">🌙</div>*/}
                        {/*        <h4>Top Planetary Pilot - Luna</h4>*/}
                        {/*        <p className="category-prize">$15 Steam Gift Card</p>*/}
                        {/*        <p className="category-desc">Highest score on Luna</p>*/}
                        {/*    </div>*/}
                        {/*    <div className="category-card category-top-row">*/}
                        {/*        <div className="category-icon">☿️</div>*/}
                        {/*        <h4>Top Planetary Pilot - Mercury</h4>*/}
                        {/*        <p className="category-prize">$15 Steam Gift Card</p>*/}
                        {/*        <p className="category-desc">Highest score on Mercury</p>*/}
                        {/*    </div>*/}
                        {/*    <div className="category-card category-bottom-row category-stagger-left">*/}
                        {/*        <div className="category-icon">♀️</div>*/}
                        {/*        <h4>Top Planetary Pilot - Venus</h4>*/}
                        {/*        <p className="category-prize">$15 Steam Gift Card</p>*/}
                        {/*        <p className="category-desc">Highest score on Venus</p>*/}
                        {/*    </div>*/}
                        {/*    <div className="category-card category-bottom-row category-stagger-right participation">*/}
                        {/*        <div className="category-icon">🎲</div>*/}
                        {/*        <h4>Participation Draw</h4>*/}
                        {/*        <p className="category-prize">3 Winners × $5 Each</p>*/}
                        {/*        <p className="category-desc">Random draw from all participants</p>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        {/*<p className="prize-pool">Total Prize Pool: $75 in Steam Gift Cards</p>*/}
                    </div>

                    {/*<div className="mission-and-rewards">*/}
                    {/*    <div className="mission-rewards-grid">*/}
                    {/*        <div className="mission-column">*/}
                    {/*            <h3 className="subsection-title">Your Mission Parameters</h3>*/}
                    {/*            <div className="mission-items">*/}
                    {/*                <div className="mission-item">*/}
                    {/*                    <span className="mission-emoji">📅</span>*/}
                    {/*                    <div className="mission-text">*/}
                    {/*                        <h4>Operation Window</h4>*/}
                    {/*                        <p>December 10-14, 2025</p>*/}
                    {/*                    </div>*/}
                    {/*                </div>*/}
                    {/*                <div className="mission-item">*/}
                    {/*                    <span className="mission-emoji">👥</span>*/}
                    {/*                    <div className="mission-text">*/}
                    {/*                        <h4>Available Slots</h4>*/}
                    {/*                        <p>Limited to 100 Pilots</p>*/}
                    {/*                    </div>*/}
                    {/*                </div>*/}
                    {/*                <div className="mission-item">*/}
                    {/*                    <span className="mission-emoji">⏱️</span>*/}
                    {/*                    <div className="mission-text">*/}
                    {/*                        <h4>Mission Duration</h4>*/}
                    {/*                        <p>5-10 minute survival runs</p>*/}
                    {/*                    </div>*/}
                    {/*                </div>*/}
                    {/*                <div className="mission-item">*/}
                    {/*                    <span className="mission-emoji">🏆</span>*/}
                    {/*                    <div className="mission-text">*/}
                    {/*                        <h4>Competition Format</h4>*/}
                    {/*                        <p>Leaderboard-based scoring</p>*/}
                    {/*                    </div>*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*        <div className="rewards-column">*/}
                    {/*            <h3 className="subsection-title">All Participants Receive</h3>*/}
                    {/*            <div className="rewards-items">*/}
                    {/*                <div className="reward-item">*/}
                    {/*                    <span className="reward-emoji">💰</span>*/}
                    {/*                    <div className="reward-text">*/}
                    {/*                        <h4>Launch Discount</h4>*/}
                    {/*                        <p>Minimum 10% off on Steam release</p>*/}
                    {/*                    </div>*/}
                    {/*                </div>*/}
                    {/*                <div className="reward-item">*/}
                    {/*                    <span className="reward-emoji">🎯</span>*/}
                    {/*                    <div className="reward-text">*/}
                    {/*                        <h4>Priority Access</h4>*/}
                    {/*                        <p>First access to all future missions</p>*/}
                    {/*                    </div>*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
                <Wave color="var(--classyBlack)"/>
            </section>

            {/* Content Creator Rewards - DARK */}
            <section className="content-creator-section dark-section">
                <div className="section-container">
                    <div className="content-creator-rewards">
                        <h3 className="subsection-title">Content Creator Rewards</h3>
                        <p className="creator-intro">
                            Share your gameplay, epic moments, and reactions to Orbital to earn rewards,
                            recognition, and exclusive perks from Classy Games.
                        </p>

                        <div className="creator-tiers">
                            <div className="creator-tier">
                                <h4>Enlisted Pilot</h4>
                                <p className="tier-requirement">5 public social media posts across any platform
                                    featuring Orbital</p>
                                <ul>
                                    <li>Name listed in the game credits</li>
                                    <li>10% Discount to Orbital on release</li>
                                    <li>Unique Orbital Discord tag</li>
                                </ul>
                            </div>

                            <div className="creator-tier">
                                <h4>Experienced Pilot</h4>
                                <p className="tier-requirement">5,000+ views on a single post <em>or</em> 20,000 total
                                    views featuring Orbital</p>
                                <ul>
                                    <li>Name listed in the game credits</li>
                                    <li>20% Discount to Orbital on release</li>
                                    <li>Unique Orbital Discord tag</li>
                                    <li>Exclusive in-game title</li>
                                </ul>
                            </div>

                            <div className="creator-tier">
                                <h4>Specialised Pilot</h4>
                                <p className="tier-requirement">25,000+ views on a single post <em>or</em> 100,000 total
                                    views featuring Orbital</p>
                                <ul>
                                    <li>Name listed in the game credits</li>
                                    <li>Free copy to Orbital on release</li>
                                    <li>Unique Orbital Discord tag</li>
                                    <li>Exclusive in-game title</li>
                                    <li>Join a Classy Games team game night</li>
                                    <li>Your voice featured as an in-game easter egg</li>
                                    <li>Personalised shoutout in the main menu Galactic News feed</li>
                                </ul>
                            </div>

                            <div className="creator-tier">
                                <h4>Veteran Pilot</h4>
                                <p className="tier-requirement">100,000+ views on a single post <em>or</em> 500,000
                                    total views featuring Orbital</p>
                                <ul>
                                    <li>Name listed in the game credits</li>
                                    <li>Free copy to Orbital on release</li>
                                    <li>Unique Orbital Discord tag</li>
                                    <li>Exclusive in-game title</li>
                                    <li>Join a Classy Games team game night</li>
                                    <li>Your voice featured as an in-game easter egg</li>
                                    <li>Personalised shoutout in the main menu Galactic News feed</li>
                                    <li>Classy Games team hand signed physical Orbital poster</li>
                                    <li>Suggest a name for an upcoming Orbital Mission</li>
                                    <li>Get turned into a character in our next title, SillySuspects</li>
                                </ul>
                            </div>
                        </div>

                        <p className="creator-submit">
                            Claim rewards by sharing public posts with visible metrics via Discord
                            or by tagging Classy Games on social media.
                        </p>
                        <br/>
                        <p className="creator-submit">
                            Use #ClassyGames #ClassyGamesOrbital #Orbital #OrbitalMission
                        </p>
                    </div>
                </div>
                <Wave color="white"/>
            </section>


            {/* FAQ Section - LIGHT */}
            <section className="faq-section light-section">
                <div className="section-container">
                    <h2 className="section-title">Frequently Asked Questions</h2>
                    <div className="faq-container">
                        {faqs.map((faq, index) => (
                            <div key={index} className="faq-item">
                                <button
                                    className={`faq-question ${activeAccordion === index ? 'active' : ''}`}
                                    onClick={() => toggleAccordion(index)}
                                >
                                    {faq.question}
                                    <span className="faq-icon">{activeAccordion === index ? '−' : '+'}</span>
                                </button>
                                <div className={`faq-answer ${activeAccordion === index ? 'active' : ''}`}>
                                    <p>{faq.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <Wave color="var(--classyBlack)"/>
            </section>
        </div>
    );
}