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
      answer: "The Orbital playtest begins November 2025. Exact dates will be communicated to registered participants via email."
    },
    {
      question: "What platforms will the playtest be available on?",
      answer: "The playtest will be available on PC (Windows) initially, with potential mobile testing phases to follow."
    },
    {
      question: "How long will the playtest last?",
      answer: "The initial playtest phase will run for approximately 1 week, with monthly playtests to follow."
    },
    {
      question: "Will my progress carry over to the full game?",
      answer: "Playtest progress will not carry over to the full release, but exclusive rewards will be granted to participants."
    },
    {
      question: "How do I provide feedback?",
      answer: "You&apos;ll receive access to our dedicated Discord server and feedback forms where you can share your thoughts directly with the development team."
    }
  ];

  const screenshots = [
    { src: "/assets/GameScreenshots/Orbital/Earth_Menu.png", alt: "Orbital Earth menu" },
    { src: "/assets/GameScreenshots/Orbital/Earth_GameVerThree.png", alt: "Orbital Earth gameplay" },
    { src: "/assets/GameScreenshots/Orbital/Leaderboard_VerTwo.png", alt: "Orbital leaderboard view" },
    { src: "/assets/GameScreenshots/Orbital/Luna_GameVerFour.png", alt: "Orbital Luna gameplay" },
    { src: "/assets/GameScreenshots/Orbital/Store_VerOne.png", alt: "Orbital in-game store" },
    { src: "/assets/GameScreenshots/Orbital/Venus_Menu.png", alt: "Orbital Venus menu" },
  ];

  return (
    <div className="orbital-playtest-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="trailer-container">
            <video
              className="promo-featured"
              autoPlay
              playsInline
              muted
              loop
              poster="/assets/Heroes/OrbitalPromo.png"
            >
              <source src="/assets/Videos/orbital_video_placeholder.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <Link 
            href="https://ojpazyzsqmrw.jp.larksuite.com/share/base/form/shrjpDy4NpOr9TtkQHM89dGNFch" 
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button primary"
          >
            <span>Join the Playtest</span>
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
            You are a Planetary Pilot, humanity&apos;s elite. Tasked with prolonging the inevitable grasp of a supermassive blackhole. 
            Dodge asteroids, navigate wormholes, and avoid shooting stars while utilising specialized planetary technologies alongside other Galactic Defenders. 
            Obtain Quanta to unlock new planets. Ascend amid global leaderboards. Success or Achievement or Glory is measured in seconds, not survival.
          </p>
          <div className="overview-grid">
            <div className="game-overview-item">
              <div className="overview-icon">🌍</div>
              <h3>Dynamic Planetary Technologies</h3>
              <p>Master unique planetary technologies to navigate through space-time anomalies</p>
            </div>
            <div className="game-overview-item">
              <div className="overview-icon">⚡</div>
              <h3>Intense Survival Challenges</h3>
              <p>Perfectly paced cosmic threats keep you engaged. Asteroids, supernovas, and wormholes escalate at just the right tempo.</p>
            </div>
            <div className="game-overview-item">
              <div className="overview-icon">🏆</div>
              <h3>Global Leaderboards</h3>
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
              <div className="step-number">01</div>
              <div className="step-icon">
                <FaUserPlus />
              </div>
              <h3>Register</h3>
              <p>Sign up with using our form to secure your spot in the exclusive playtest</p>
            </div>
            <div className="process-connector"></div>
            <div className="process-step">
              <div className="step-number">02</div>
              <div className="step-icon">
                <FaPaperPlane />
              </div>
              <h3>Contact</h3>
              <p>Receive your invite and instructions</p>
            </div>
            <div className="process-connector"></div>
            <div className="process-step">
              <div className="step-number">03</div>
              <div className="step-icon">
                <FaClipboardCheck />
              </div>
              <h3>Test</h3>
              <p>Play the game and provide valuable feedback to shape the final experience</p>
            </div>
            <div className="process-connector"></div>
            <div className="process-step">
              <div className="step-number">04</div>
              <div className="step-icon">
                <FaGift />
              </div>
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
              <p>Unlock special rewards, titles, and bonuses only available to playtesters</p>
            </div>
          </div>
        </div>
      </section>

      {/* First Defiance Section */}
      <section className="first-defiance-section">
        <div className="section-container">
          <div className="defiance-header">
            <h2 className="section-title">Next Playtest: &quot;First Defiance&quot;</h2>
            <p className="defiance-subtitle">December 3-7, 2025 | Limited to 100 Planetary Pilots</p>
            <p className="defiance-intro">
              For three millennia, humanity knew this moment would come. Now, the Interstellar Defense Network needs you.
              <br /><br />
              First Defiance isn&apos;t just a playtest, it&apos;s a competition. Help us shape the development of Orbital while competing with your fellow Planetary Pilots for prizes, exclusive rewards, and eternal glory on our leaderboards.
            </p>
          </div>

          <div className="competition-categories">
            <div className="cta-container-top">
              <Link 
                href="https://ojpazyzsqmrw.jp.larksuite.com/share/base/form/shrjpDy4NpOr9TtkQHM89dGNFch" 
                target="_blank"
                rel="noopener noreferrer"
                className="cta-button primary"
              >
                <span>Join the Playtest</span>
                <FaGamepad />
              </Link>
            </div>
            <h3 className="subsection-title">Competition Categories</h3>
            <div className="categories-grid">
              <div className="category-card category-top-row">
                <div className="category-icon">🌍</div>
                <h4>Top Planetary Pilot - Earth</h4>
                <p className="category-prize">$15 Steam Gift Card</p>
                <p className="category-desc">Highest score on Earth</p>
              </div>
              <div className="category-card category-top-row">
                <div className="category-icon">🌙</div>
                <h4>Top Planetary Pilot - Luna</h4>
                <p className="category-prize">$15 Steam Gift Card</p>
                <p className="category-desc">Highest score on Luna</p>
              </div>
              <div className="category-card category-top-row">
                <div className="category-icon">☿️</div>
                <h4>Top Planetary Pilot - Mercury</h4>
                <p className="category-prize">$15 Steam Gift Card</p>
                <p className="category-desc">Highest score on Mercury</p>
              </div>
              <div className="category-card category-bottom-row category-stagger-left">
                <div className="category-icon">♀️</div>
                <h4>Top Planetary Pilot - Venus</h4>
                <p className="category-prize">$15 Steam Gift Card</p>
                <p className="category-desc">Highest score on Venus</p>
              </div>
              <div className="category-card category-bottom-row category-stagger-right participation">
                <div className="category-icon">🎲</div>
                <h4>Participation Draw</h4>
                <p className="category-prize">3 Winners × $5 Each</p>
                <p className="category-desc">Random draw from all participants</p>
              </div>
            </div>
            <p className="prize-pool">Total Prize Pool: $75 in Steam Gift Cards</p>
          </div>

          <div className="mission-and-rewards">
            <div className="mission-rewards-grid">
              <div className="mission-column">
                <h3 className="subsection-title">Your Mission Parameters</h3>
                <div className="mission-items">
                  <div className="mission-item">
                    <span className="mission-emoji">📅</span>
                    <div className="mission-text">
                      <h4>Operation Window</h4>
                      <p>December 3-7, 2025</p>
                    </div>
                  </div>
                  <div className="mission-item">
                    <span className="mission-emoji">👥</span>
                    <div className="mission-text">
                      <h4>Available Slots</h4>
                      <p>Limited to 100 Pilots</p>
                    </div>
                  </div>
                  <div className="mission-item">
                    <span className="mission-emoji">⏱️</span>
                    <div className="mission-text">
                      <h4>Mission Duration</h4>
                      <p>5-10 minute survival runs</p>
                    </div>
                  </div>
                  <div className="mission-item">
                    <span className="mission-emoji">🏆</span>
                    <div className="mission-text">
                      <h4>Competition Format</h4>
                      <p>Leaderboard-based scoring</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rewards-column">
                <h3 className="subsection-title">All Participants Receive</h3>
                <div className="rewards-items">
                  <div className="reward-item">
                    <span className="reward-emoji">🎖️</span>
                    <div className="reward-text">
                      <h4>&quot;Day One Defender&quot; Role</h4>
                      <p>Exclusive Discord role and recognition</p>
                    </div>
                  </div>
                  <div className="reward-item">
                    <span className="reward-emoji">📜</span>
                    <div className="reward-text">
                      <h4>Digital Certificate</h4>
                      <p>Gold-bordered &quot;First Defiance&quot; certificate</p>
                    </div>
                  </div>
                  <div className="reward-item">
                    <span className="reward-emoji">💰</span>
                    <div className="reward-text">
                      <h4>Launch Discount</h4>
                      <p>Minimum 10% off on Steam release</p>
                    </div>
                  </div>
                  <div className="reward-item">
                    <span className="reward-emoji">🎯</span>
                    <div className="reward-text">
                      <h4>Priority Access</h4>
                      <p>First access to all future playtests</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="content-creator-rewards">
            <h3 className="subsection-title">Content Creator Rewards</h3>
            <p className="creator-intro">Share your gameplay, epic moments, and reactions to earn additional rewards and recognition!</p>
            <div className="creator-tiers">
              <div className="creator-tier">
                <h4>Contributor</h4>
                <ul>
                  <li>1 clip or post = Name in credits</li>
                  <li>5 clips or posts = +5% discount / Top Supporter credit</li>
                </ul>
              </div>
              <div className="creator-tier">
                <h4>Influencer</h4>
                <ul>
                  <li>1,000+ views/engagement = Silly Suspects discount</li>
                  <li>10,000+ views/engagement = Free Orbital game copy</li>
                </ul>
              </div>
              <div className="creator-tier">
                <h4>Viral Creator</h4>
                <ul>
                  <li>50,000+ views/engagement = $20 Steam Gift Card</li>
                </ul>
              </div>
            </div>
            <p className="creator-submit">Submit content via Discord or tag Classy Games on social media</p>
          </div>

          <div className="competition-timeline">
            <h3 className="subsection-title">Competition Timeline</h3>
            <div className="timeline-container">
              <div className="timeline-item">
                <div className="timeline-day">Day 1 (Wed)</div>
                <h4>Launch</h4>
                <p>Playtest opens, rules posted, competition begins</p>
              </div>
              <div className="timeline-item">
                <div className="timeline-day">Days 2-4</div>
                <h4>Active Competition</h4>
                <p>Daily leaderboard updates and community highlights</p>
              </div>
              <div className="timeline-item">
                <div className="timeline-day">Day 5 (Sun)</div>
                <h4>Final Day</h4>
                <p>Last chance to climb the leaderboards (midnight deadline)</p>
              </div>
              <div className="timeline-item">
                <div className="timeline-day">Day 7 (Tue)</div>
                <h4>Winners Announced</h4>
                <p>Prize winners revealed and rewards distributed</p>
              </div>
            </div>
          </div>

          <div className="defiance-footer">
            <p>Registration required. Limited to 100 Planetary Pilots. First come, first served.</p>
            <div className="cta-container-bottom">
              <Link 
                href="https://ojpazyzsqmrw.jp.larksuite.com/share/base/form/shrjpDy4NpOr9TtkQHM89dGNFch" 
                target="_blank"
                rel="noopener noreferrer"
                className="cta-button primary"
              >
                <span>Join the Playtest</span>
                <FaGamepad />
              </Link>
            </div>
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
    </div>
  );
}
