"use client";
import "@/styles/navbar.css";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import classNames from "classnames";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navRef = useRef(null);
  
  // const links = [
  //   "https://www.linkedin.com/company/classy-games-gg",
  //   "https://store.steampowered.com/developer/classygames",
  //   "https://discord.com/invite/QTHShZJtGv",
  //   "https://www.reddit.com/r/classygames",
  //   "https://www.tiktok.com/@classygames.gg",
  //   "https://bsky.app/profile/classygames.gg",
  //   "https://www.youtube.com/@ClassyGamesGG",
  //   "https://www.instagram.com/classygames.gg/",
  //   "https://www.patreon.com/c/ClassyGames"
  // ];

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
                src="assets/Logos/ClassyGamesLogoTransparent.webp"
                alt="Logo"
                width={110}
                height={110}
                className="nav-logo"
            />
          </Link>
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
                onMouseOver={() => {
                  window.innerWidth >= 1030 ? setMenuOpen(true) : null;
                }}
            >
              <Link href="">
                <div onClick={() => setMenuOpen((prev) => !prev)}>
                <span className="original">
                  GAMES{" "}
                  {menuOpen ? (
                      <ChevronUp size={20} />
                  ) : (
                      <ChevronDown size={20} />
                  )}
                </span>
                  <span className="hover">
                  GAMES{" "}
                    {menuOpen ? (
                        <ChevronUp size={20} />
                    ) : (
                        <ChevronDown size={20} />
                    )}
                </span>
                </div>
              </Link>

              {menuOpen && (
                  <section
                      className="dropdown-s"
                      onMouseOut={() => setMenuOpen(false)}
                  ></section>
              )}

              {menuOpen && (
                  <main className="dropdown-m">
                    <Link
                        href="/games/sillysuspects/"
                        onClick={() => {
                          setMobileMenuOpen(false);
                          setMenuOpen(false);
                        }}
                    >
                      SillySuspects
                    </Link>
                    <Link
                        href="/games/orbital/"
                        onClick={() => {
                          setMobileMenuOpen(false);
                          setMenuOpen(false);
                        }}
                    >
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