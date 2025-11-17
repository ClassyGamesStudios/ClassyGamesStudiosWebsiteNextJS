"use client";

import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import "@/styles/sillysuspects.css";
import { FaSteam } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

export default function SillySuspectsPage() {
  const [activeScreenshot, setActiveScreenshot] = useState(0);

  const STEAM_APP_ID = 3073330;
  const STEAM_WIDGET_ENABLED = true;

  const screenshots = [
    { src: "/assets/GameScreenshots/SillySuspects/SillySuspectsScreenshot_001.png", alt: "Silly Suspects Gameplay Screenshot 1" },
    { src: "/assets/GameScreenshots/SillySuspects/SillySuspectsScreenshot_002.png", alt: "Silly Suspects Gameplay Screenshot 2" },
    { src: "/assets/GameScreenshots/SillySuspects/SillySuspectsScreenshot_003.png", alt: "Silly Suspects Gameplay Screenshot 3" },
    { src: "/assets/GameScreenshots/SillySuspects/SillySuspectsScreenshot_004.png", alt: "Silly Suspects Gameplay Screenshot 4" },
    { src: "/assets/GameScreenshots/SillySuspects/SillySuspectsScreenshot_005.png", alt: "Silly Suspects Gameplay Screenshot 5" },
    { src: "/assets/GameScreenshots/SillySuspects/SillySuspectsScreenshot_006.png", alt: "Silly Suspects Gameplay Screenshot 6" },
    { src: "/assets/GameScreenshots/SillySuspects/SillySuspectsScreenshot_007.png", alt: "Silly Suspects Gameplay Screenshot 7" },
    { src: "/assets/GameScreenshots/SillySuspects/SillySuspectsScreenshot_008.png", alt: "Silly Suspects Gameplay Screenshot 8" },
  ];

  useEffect(() => {
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
    });

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveScreenshot((prev) => (prev + 1) % screenshots.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [screenshots.length]);

  return (
      <div className="sillysuspects-page">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-bg">
            <div className="hero-overlay"></div>
          </div>
          <div className="hero-content">
            <Image
                src="/assets/Logos/SSLogo.png"
                alt="Silly Suspects Logo"
                width={750}
                height={280}
                className="sillysuspects-hero-logo"
                priority
            />
            <h1 className="hero-tagline">
              The Perfect Blend of<br/>
              Mystery, Comedy & Chaos
            </h1>
            <p className="coming-soon">Coming Soon</p>
            <div className="trailer-container">
              <iframe
                  src="https://www.youtube.com/embed/AimxxfwfE24?si=f2rmBc2qRQDRz-U1"
                  allowFullScreen
                  title="Silly Suspects Gameplay Trailer"
                  loading="lazy"
              ></iframe>
            </div>
          </div>
          <svg
              className="hero-wave"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              viewBox="0 0 1000 35"
          >
            <path d="M1000 5S822.877 3.636 700 3.93c-18.088.043-36.002 10.945-51 11.07-21.081.175-37.54-10.382-49-10-20.98.7-33.333 17.5-50 15S516.667 0 500 0s-33.333 17.5-50 20-29.02-14.3-50-15c-11.645-.388-29.453 10.167-51 9.992-15.016-.122-30.925-11.022-49-11.064C176.964 3.644 0 5 0 5v30h1000V5z" />
          </svg>
        </section>

        {/* Steam Widget Hero Section */}
        <section className="steam-widget-hero">
          <div className="steam-widget-bg">
            <div className="steam-widget-overlay"></div>
          </div>
          <div className="steam-widget-content">
            {STEAM_WIDGET_ENABLED && STEAM_APP_ID ? (
                <iframe
                    src={`https://store.steampowered.com/widget/${STEAM_APP_ID}/`}
                    frameBorder="0"
                    width="646"
                    height="190"
                    title="Steam Widget"
                ></iframe>
            ) : (
                <div className="steam-widget-placeholder">
                  <div className="placeholder-content">
                    <FaSteam className="placeholder-icon" />
                    <h3>Coming to Steam</h3>
                    <p>Silly Suspects will be available on Steam soon. Stay tuned for updates!</p>
                    <Link
                        href="https://store.steampowered.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cta-button primary"
                    >
                      <FaSteam />
                      <span>Follow on Steam</span>
                    </Link>
                  </div>
                </div>
            )}
          </div>
          <svg
              className="steam-widget-wave"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              viewBox="0 0 1000 35"
          >
            <path d="M1000 5S822.877 3.636 700 3.93c-18.088.043-36.002 10.945-51 11.07-21.081.175-37.54-10.382-49-10-20.98.7-33.333 17.5-50 15S516.667 0 500 0s-33.333 17.5-50 20-29.02-14.3-50-15c-11.645-.388-29.453 10.167-51 9.992-15.016-.122-30.925-11.022-49-11.064C176.964 3.644 0 5 0 5v30h1000V5z" />
          </svg>
        </section>

        {/* Game Overview Section */}
        <section className="game-overview-section">
          <div className="section-container">
            <h2 className="section-title">Game Overview</h2>
            <p className="overview-description">
              In a world overrun by the most ridiculous criminals imaginable – those who put pineapple
              on pizza, wear sunglasses inside, and never replace the toilet roll – chaos reigns supreme.
              In the midst of the mayhem, characters are exiting the world in hilarious ways, leaving
              behind bizarre crime scenes and confused witnesses.
            </p>
            <div className="overview-grid">
              <div className="game-overview-item">
                <div className="overview-icon">🔍</div>
                <h3>Dynamic Mystery</h3>
                <p>Dive into a dynamically generated world where every case is unique and unpredictable</p>
              </div>
              <div className="game-overview-item">
                <div className="overview-icon">😂</div>
                <h3>Comedy Chaos</h3>
                <p>Experience absurd criminals, ridiculous motives, and laugh-out-loud scenarios</p>
              </div>
              <div className="game-overview-item">
                <div className="overview-icon">🎭</div>
                <h3>Living World</h3>
                <p>Interact with unique characters, each with their own lives, secrets, and motives</p>
              </div>
            </div>
          </div>
          <svg
              className="game-overview-wave"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              viewBox="0 0 1000 35"
          >
            <path d="M1000 5S822.877 3.636 700 3.93c-18.088.043-36.002 10.945-51 11.07-21.081.175-37.54-10.382-49-10-20.98.7-33.333 17.5-50 15S516.667 0 500 0s-33.333 17.5-50 20-29.02-14.3-50-15c-11.645-.388-29.453 10.167-51 9.992-15.016-.122-30.925-11.022-49-11.064C176.964 3.644 0 5 0 5v30h1000V5z" />
          </svg>
        </section>

        {/* Screenshots Section */}
        <section className="screenshots-section">
          <div className="section-container">
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
                          width={200}
                          height={130}
                          className="screenshot-thumb-image"
                      />
                    </button>
                ))}
              </div>
            </div>
          </div>
          <svg
              className="screenshots-wave"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              viewBox="0 0 1000 35"
          >
            <path d="M1000 5S822.877 3.636 700 3.93c-18.088.043-36.002 10.945-51 11.07-21.081.175-37.54-10.382-49-10-20.98.7-33.333 17.5-50 15S516.667 0 500 0s-33.333 17.5-50 20-29.02-14.3-50-15c-11.645-.388-29.453 10.167-51 9.992-15.016-.122-30.925-11.022-49-11.064C176.964 3.644 0 5 0 5v30h1000V5z" />
          </svg>
        </section>
      </div>
  );
}