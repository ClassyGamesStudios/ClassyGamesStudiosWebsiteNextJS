"use client";

import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import "@/styles/orbital-playtest.css";
import { FaPaperPlane, FaGamepad, FaUserPlus, FaClipboardCheck, FaGift } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

export default function OrbitalPlaytest() {
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [activeScreenshot, setActiveScreenshot] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-content", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(".process-step", {
        scrollTrigger: {
          trigger: ".how-it-works-section",
          start: "top 80%",
        },
        scale: 0.8,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: "back.out(1.7)",
      });

      requestAnimationFrame(() => {
        ScrollTrigger.refresh();
      });
    });

    return () => ctx.revert();
  }, []);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const faqs = [
    {
      question: "When does the playtest begin?",
      answer: "The Orbital playtest begins February 2025. Exact dates will be communicated to registered participants via email."
    },
    {
      question: "What platforms will the playtest be available on?",
      answer: "The playtest will be available on PC (Windows) initially, with potential mobile testing phases to follow."
    },
    {
      question: "How long will the playtest last?",
      answer: "The initial playtest phase will run for 2-3 weeks, with potential extensions based on feedback and testing needs."
    },
    {
      question: "Will my progress carry over to the full game?",
      answer: "Playtest progress will not carry over to the full release, but exclusive rewards will be granted to participants."
    },
    {
      question: "How do I provide feedback?",
      answer: "You'll receive access to our dedicated Discord server and feedback forms where you can share your thoughts directly with the development team."
    }
  ];

  const screenshots = [
    { src: "/images/Orbital/upper1.webp", alt: "Orbital Screenshot 1" },
    { src: "/images/Orbital/upper2.webp", alt: "Orbital Screenshot 2" },
    { src: "/images/Orbital/upper3.webp", alt: "Orbital Screenshot 3" },
    { src: "/images/Orbital/upper4.webp", alt: "Orbital Screenshot 4" },
    { src: "/images/Orbital/upper5.webp", alt: "Orbital Screenshot 5" },
    { src: "/images/Orbital/lower1.webp", alt: "Orbital Screenshot 6" },
  ];

  return (
    <div className="orbital-playtest-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-bg">
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content">
          <Image
            src="/assets/Logos/Orbital_Logo.png"
            alt="Orbital Logo"
            width={750}
            height={270}
            className="orbital-hero-logo"
            priority
          />
          <h1 className="hero-tagline">No Escape. No Salvation. Only Time.</h1>
          <p className="coming-soon">JOIN THE NEXT PLAYTEST</p>
          <div className="trailer-container">
            <iframe
              src="https://www.youtube.com/embed/xHljIZBbMU0?si=wJ7VtyfWzVxXzq0x"
              allowFullScreen
              title="Orbital Gameplay Trailer"
              loading="lazy"
            ></iframe>
          </div>
          <Link href="#register" className="cta-button primary">
            <span>Join Playtest</span>
            <FaGamepad />
          </Link>
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

      {/* Game Overview Section */}
      <section className="game-overview-section">
        <div className="section-container">
          <h2 className="section-title">Game Overview</h2>
          <p className="overview-description">
            Step into the role of planetary pilot in this groundbreaking survival game where time is your only enemy. 
            Navigate your planet through the cosmos, avoiding celestial hazards while the inevitable pull of a black hole 
            grows stronger. How long can you keep your world alive?
          </p>
          <div className="overview-grid">
            <div className="game-overview-item">
              <div className="overview-icon">🌍</div>
              <h3>Dynamic Planetary Control</h3>
              <p>Master unique planetary technologies to navigate through space-time anomalies</p>
            </div>
            <div className="game-overview-item">
              <div className="overview-icon">⚡</div>
              <h3>Intense Survival Gameplay</h3>
              <p>Face escalating challenges as asteroids, supernovas, and wormholes threaten your planet</p>
            </div>
            <div className="game-overview-item">
              <div className="overview-icon">🏆</div>
              <h3>Global Competition</h3>
              <p>Compete for the top spots on worldwide leaderboards and unlock new planets</p>
            </div>
          </div>
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
      </section>

      {/* How It Works Section */}
      <section className="how-it-works-section">
        <div className="section-container">
          <h2 className="section-title">How Does The Playtest Work?</h2>
          <div className="process-container">
            <div className="process-step">
              <div className="step-icon">
                <FaUserPlus />
              </div>
              <div className="step-number">01</div>
              <h3>Register</h3>
              <p>Sign up with your email to secure your spot in the exclusive playtest</p>
            </div>
            <div className="process-connector"></div>
            <div className="process-step">
              <div className="step-icon">
                <FaPaperPlane />
              </div>
              <div className="step-number">02</div>
              <h3>Contact</h3>
              <p>Receive your invite and instructions via email when the playtest begins</p>
            </div>
            <div className="process-connector"></div>
            <div className="process-step">
              <div className="step-icon">
                <FaClipboardCheck />
              </div>
              <div className="step-number">03</div>
              <h3>Test</h3>
              <p>Play the game and provide valuable feedback to shape the final experience</p>
            </div>
            <div className="process-connector"></div>
            <div className="process-step">
              <div className="step-icon">
                <FaGift />
              </div>
              <div className="step-number">04</div>
              <h3>Rewards</h3>
              <p>Earn exclusive in-game rewards and recognition as a founding pilot</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section">
        <div className="section-container">
          <h2 className="section-title">Why Join The Playtest?</h2>
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
              <p>Unlock special cosmetics, titles, and bonuses only available to playtesters</p>
            </div>
          </div>
          <div className="cta-container">
            <Link href="#register" className="cta-button benefits-card-style">
              <span>Register for Playtest</span>
              <FaGamepad />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
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
                  <span className="faq-icon">{activeAccordion === index ? '-' : '+'}</span>
                </button>
                <div className={`faq-answer ${activeAccordion === index ? 'active' : ''}`}>
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Studio Section */}
      <section className="studio-section">
        <div className="section-container">
          <h2 className="section-title">About Classy Games</h2>
          <div className="studio-content">
            <div className="studio-text">
              <p>
                We're an independent game studio passionate about creating experiences that 
                bring out your inner child. With a focus on fun, innovation, and player satisfaction, 
                we craft games that are both nostalgic and fresh.
              </p>
              <p>
                Orbital represents our commitment to pushing boundaries while maintaining the 
                playful spirit that defines Classy Games. Join us on this cosmic journey!
              </p>
              <Link href="/about-us" className="learn-more-link">
                Learn More About Us <FaPaperPlane />
              </Link>
            </div>
            <div className="studio-logo-container">
              <Image
                src="/assets/Logos/ClassyGamesStudiosTransparent_Logo.webp"
                alt="Classy Games Logo"
                width={200}
                height={200}
                className="studio-logo"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Other Games Section */}
      <section className="other-games-section">
        <div className="section-container">
          <h2 className="section-title">Also From Classy Games</h2>
          <div className="game-showcase">
            <div className="showcase-content">
              <Image
                src="/assets/Logos/SSLogo.png"
                alt="Silly Suspects Logo"
                width={400}
                height={150}
                className="showcase-logo"
              />
              <p className="showcase-description">
                The perfect blend of mystery, comedy & chaos. Dive into a dynamically 
                generated world of quirky characters and hilarious investigations.
              </p>
              <Link 
                href="https://store.steampowered.com/app/3073330/SillySuspects" 
                target="_blank"
                rel="noopener noreferrer"
                className="cta-button tertiary"
              >
                <span>View on Steam</span>
                <FaPaperPlane />
              </Link>
            </div>
            <div className="showcase-image">
              <Image
                src="/assets/Banners/homeBottom.png"
                alt="Silly Suspects Characters"
                width={500}
                height={300}
                className="showcase-screenshot"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
