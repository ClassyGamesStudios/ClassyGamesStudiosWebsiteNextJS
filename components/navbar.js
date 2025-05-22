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
  const links = [
    "https://www.linkedin.com/company/classy-games-studios",
    "https://store.steampowered.com/developer/classygamesstudios",
    "https://discord.com/invite/RnFAM8xV",
    "https://www.reddit.com/r/classygamesstudios/",
    "https://www.tiktok.com/@classygamesstudios",
    "https://bsky.app/profile/classygamesstudios.com",
    "https://www.youtube.com/@ClassyGamesStudios",
    "https://www.instagram.com/classy_games_studios/",
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
            src="/Favicons/main-logo.png"
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
              <main
                className="dropdown-m"
              >
                <Link
                  href="/games/sillysuspects"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setMenuOpen(false);
                  }}
                >
                  {/*<Image*/}
                  {/*  src="/assets/Logos/SSLogo.png"*/}
                  {/*  alt="Logo"*/}
                  {/*  width={50}*/}
                  {/*  height={50}*/}
                  {/*/>{" "}*/}
                  SillySuspects{" "}
                </Link>
                <Link
                  href="/games/orbital"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setMenuOpen(false);
                  }}
                >
                  {/*<Image*/}
                  {/*  src="/assets/webImages/Orbital Banner Image.webp"*/}
                  {/*  alt="Logo"*/}
                  {/*  width={50}*/}
                  {/*  height={50}*/}
                  {/*/>{" "}*/}
                  Orbital
                </Link>
              </main>
            )}
          </section>

          <Link
            href="/about-us"
            className="middle-link"
            onClick={() => setMobileMenuOpen(false)}
          >
            <div>
              <span className="original">ABOUT</span>
              <span className="hover">ABOUT</span>
            </div>
          </Link>
          <Link
            href="/careers"
            className="middle-link"
            onClick={() => setMobileMenuOpen(false)}
          >
            <div>
              <span className="original">CAREERS</span>
              <span className="hover">CAREERS</span>
            </div>
          </Link>
          <Link
            href="/contact"
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
          {[...Array(8)].map((_, index) => (
            <div className="icon" key={index}>
              <Link href={`${links[index]}`} target="_blank">
                <Image
                  src={`/assets/SocialIcons/icon${index + 1}.png`}
                  alt={`icon ${index + 1}`}
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
