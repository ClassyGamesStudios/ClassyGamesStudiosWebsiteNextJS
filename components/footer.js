"use client";
import Link from "next/link";
import Image from "next/image";
import { FaMapMarkerAlt } from "react-icons/fa";
import "@/styles/footer.css";
import React from "react";

export default function Footer() {
    
    const links = [
        { url: "https://discord.com/invite/QTHShZJtGv", name: "discord" },
        { url: "https://www.reddit.com/r/classygames", name: "reddit" },
        { url: "https://www.youtube.com/@ClassyGamesGG", name: "youtube" },
        { url: "https://www.tiktok.com/@classygames.gg", name: "tiktok" },
        { url: "https://www.instagram.com/classygames.gg/", name: "instagram" },
        { url: "https://bsky.app/profile/classygames.gg", name: "bluesky" },
        { url: "https://x.com/ClassyGames_gg", name: "x" },
        { url: "https://www.linkedin.com/company/classy-games-gg", name: "linkedin" },
        { url: "https://store.steampowered.com/developer/classygames", name: "steam" },
        { url: "https://www.patreon.com/c/ClassyGames", name: "patreon" },
    ];

    return (
        <footer className="footer">
            <div className="upper-footer">
                <div className="first">
                    <Link href="/">
                        <Image
                            src="/assets/Logos/ClassyGamesLogo.webp"
                            alt="Logo"
                            width={125}
                            height={125}
                            className="footer-logo"
                        />
                    </Link>
                    <p className="first-text">
                        Rediscover The <br />
                        Joy Of Play <br />
                    </p>
                    <div className="socials">
                        {links.map((link, index) => (
                            <Link href={link.url} target="_blank" key={index}>
                                <Image
                                    src={`/assets/SocialIcons/${link.name}.png`}
                                    alt={link.name}
                                    width={25}
                                    height={25}
                                    className="social-icon"
                                />
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="second">
                    <h2>MENU</h2>
                    <Link href="/">Home</Link>
                    <Link href="/about/">About</Link>
                    <Link href="/careers/">Careers</Link>
                    <Link href="/contact/">Contact</Link>
                </div>
                <div className="second">
                    <h2>GAMES</h2>
                    <Link href="/games/sillysuspects/">SillySuspects</Link>
                    <a
                        href="https://www.canva.com/design/DAGUB8zpBog/Fkws_U-b2SYgafYY83WDtw/view?utm_content=DAGUB8zpBog&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h725febeff0"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        SillySuspects Media Kit
                    </a>
                    <Link href="/games/orbital">Orbital</Link>
                    <a
                        href="https://www.canva.com/design/DAGUB8zpBog/Fkws_U-b2SYgafYY83WDtw/view?utm_content=DAGUB8zpBog&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h725febeff0"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Orbital Media Kit
                    </a>
                </div>
                <div className="third">
                    <h2>STUDIO</h2>
                    <a
                        href="https://www.canva.com/design/DAGPexES0B4/1FuckhS-AlMfm6BloLGDXA/view?utm_content=DAGPexES0B4&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h71bdda4228"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Classy Games Media Kit
                    </a>
                    <Link href="/privacypolicy">Privacy Policy</Link>
                    <Link href="/termsofservice">Terms of Service</Link>
                </div>
                <div className="fourth">
                    <h2>LOCATIONS</h2>
                    <Link
                        href="https://www.classygamesstudios.com/about-us"
                        target="_blank"
                        className="location-container"
                    >
                        <FaMapMarkerAlt size={25} className="cnt-icon" />
                        <div className="cnt">
                            <div className="location">
                                Belfast, Northern Ireland<br></br> Riyadh, Saudi Arabia<br></br>{" "}
                                Dubai, United Arab Emirates
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
            <div className="lower-footer">
                <div className="l">
                    <span>© 2025 </span>Classy Games
                </div>
            </div>
        </footer>
    );
}