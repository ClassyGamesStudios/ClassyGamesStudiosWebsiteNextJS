"use client";
import "@/styles/navbar.css";
import Image from "next/image";
import Link from "next/link";
import {ChevronDown, ChevronUp} from "lucide-react";
import {useState, useRef, useEffect} from "react";
import classNames from "classnames";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const navRef = useRef(null);

    const links = [
        {url: "https://discord.com/invite/QTHShZJtGv", name: "discord"},
        {url: "https://www.reddit.com/r/classygames", name: "reddit"},
        {url: "https://www.youtube.com/@ClassyGamesGG", name: "youtube"},
        {url: "https://www.tiktok.com/@classygames.gg", name: "tiktok"},
        {url: "https://www.instagram.com/classygames.gg/", name: "instagram"},
        {url: "https://bsky.app/profile/classygames.gg", name: "bluesky"},
        {url: "https://x.com/ClassyGames_gg", name: "x"},
        {url: "https://www.linkedin.com/company/classy-games-gg", name: "linkedin"},
        {url: "https://store.steampowered.com/developer/classygames", name: "steam"},
        {url: "https://www.patreon.com/c/ClassyGames", name: "patreon"},
    ];

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (navRef.current && !navRef.current.contains(event.target)) {
                setMobileMenuOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <nav ref={navRef}>
            <div className="nav-bg"></div>
            <div className="logo">
                <Link href="/">
                    <Image
                        src="/assets/Logos/ClassyGamesLogoTransparent.webp"
                        alt="Logo"
                        width={110}
                        height={110}
                        className="nav-logo"
                    />
                </Link>
            </div>
            <div className="nav-tagline">
                <span>Rediscover The</span>
                <span>Joy Of Play</span>
            </div>
            <button
                className={`mobile-menu-button ${mobileMenuOpen ? "open" : ""}`}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
                <div className="hamburger">
                    <span></span>
                    <span>
                        <span></span>
                        <span></span>
                    </span>
                    <span></span>
                </div>
            </button>
            <div className={`link-container ${mobileMenuOpen ? "mobile-open" : ""}`}>
                <div className="middle">
                    <Link
                        href="/"
                        className="middle-link"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        <div>
                            <span className="original">HOME</span>
                            <span className="hover">HOME</span>
                        </div>
                    </Link>

                    <section
                        className={classNames("middle-link", "middle-link-dropdown")}
                        onMouseEnter={() => {
                            if (window.innerWidth >= 1030) setMenuOpen(true);
                        }}
                        onMouseLeave={() => {
                            if (window.innerWidth >= 1030) setMenuOpen(false);
                        }}
                    >
                        <Link href="">
                            <div onClick={() => setMenuOpen((prev) => !prev)}>
                                <span className="original">
                                    GAMES{" "}
                                    {menuOpen ? (
                                        <ChevronUp size={20}/>
                                    ) : (
                                        <ChevronDown size={20}/>
                                    )}
                                </span>
                                <span className="hover">
                                    GAMES{" "}
                                    {menuOpen ? (
                                        <ChevronUp size={20}/>
                                    ) : (
                                        <ChevronDown size={20}/>
                                    )}
                                </span>
                            </div>
                        </Link>

                        {menuOpen && (
                            <main className="dropdown-m">
                                <Link
                                    href="/games/sillysuspects/"
                                    onClick={() => {
                                        setMobileMenuOpen(false);
                                        setMenuOpen(false);
                                    }}
                                >
                                    <Image
                                        src="/assets/Logos/GameIcons/SillySuspects_Icon.webp"
                                        alt="SillySuspects"
                                        width={32}
                                        height={32}
                                        className="dropdown-icon"
                                    />
                                    SillySuspects
                                </Link>
                                <Link
                                    href="/games/orbital/"
                                    onClick={() => {
                                        setMobileMenuOpen(false);
                                        setMenuOpen(false);
                                    }}
                                >
                                    <Image
                                        src="/assets/Logos/GameIcons/Orbital_Icon.webp"
                                        alt="Orbital"
                                        width={32}
                                        height={32}
                                        className="dropdown-icon"
                                    />
                                    Orbital
                                </Link>
                            </main>
                        )}
                    </section>

                    <Link
                        href="/about/"
                        className="middle-link"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        <div>
                            <span className="original">ABOUT</span>
                            <span className="hover">ABOUT</span>
                        </div>
                    </Link>
                    <Link
                        href="/careers/"
                        className="middle-link"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        <div>
                            <span className="original">CAREERS</span>
                            <span className="hover">CAREERS</span>
                        </div>
                    </Link>
                    <Link
                        href="/contact/"
                        className="middle-link"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        <div>
                            <span className="original">CONTACT</span>
                            <span className="hover">CONTACT</span>
                        </div>
                    </Link>
                </div>

                <div className="right">
                    {links.map((link, index) => (
                        <div className="icon" key={index}>
                            <Link href={link.url} target="_blank">
                                <Image
                                    src={`/assets/SocialIcons/${link.name}.png`}
                                    alt={link.name}
                                    width={25}
                                    height={25}
                                    className="social-icon"
                                />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </nav>
    );
}