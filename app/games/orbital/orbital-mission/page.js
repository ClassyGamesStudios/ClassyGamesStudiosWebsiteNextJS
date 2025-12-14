"use client";

import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import "@/styles/orbital-mission.css";
import { FaPaperPlane, FaGamepad, FaUserPlus, FaClipboardCheck, FaGift, FaRocket } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

export default function OrbitalMission() {
  const [activeAccordion, setActiveAccordion] = useState(null);
  const howItWorksRef = useRef(null);
  const firstDefianceRef = useRef(null);

  //Use this website to compress videos - https://www.mp4compress.com/
  const missionVideos = [
    { month: "December 2025", videoSrc: "/assets/Videos/MissionThumbnails/FirstDefiance.mp4", poster: null, title: "First Defiance" },
    { month: "January 2026", videoSrc: "/assets/Videos/MissionThumbnails/Starlight.mp4", poster: null, title: "Starlight" },
    { month: "February 2026", videoSrc: null, poster: null, title: "Mission 3" },
    { month: "March 2026", videoSrc: null, poster: null, title: "Mission 4" },
    { month: "April 2026", videoSrc: null, poster: null, title: "Mission 5" },
    { month: "May 2026", videoSrc: null, poster: null, title: "Mission 6" },
    { month: "June 2026", videoSrc: null, poster: null, title: "Mission 7" },
    { month: "July 2026", videoSrc: null, poster: null, title: "Mission 8" },
    { month: "August 2026", videoSrc: null, poster: null, title: "Mission 9" },
    { month: "September 2026", videoSrc: null, poster: null, title: "Mission 10" },
    { month: "October 2026", videoSrc: null, poster: null, title: "Mission 11" },
    { month: "November 2026", videoSrc: null, poster: null, title: "Mission 12" },
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

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const scrollToHowItWorks = () => {
    howItWorksRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToFirstDefiance = () => {
    firstDefianceRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const faqs = [
    {
      question: "When does the mission begin?",
      answer: "The Orbital mission begins November 2025. Exact dates will be communicated to registered participants via email."
    },
    {
      question: "What platforms will the mission be available on?",
      answer: "The mission will be available on PC (Windows) initially, with potential mobile testing phases to follow."
    },
    {
      question: "How long will the mission last?",
      answer: "The initial mission phase will run for approximately 1 week, with monthly missions to follow."
    },
    {
      question: "Will my progress carry over to the full game?",
      answer: "Mission progress will not carry over to the full release, but exclusive rewards will be granted to participants."
    },
    {
      question: "How do I provide feedback?",
      answer: "You'll receive access to our dedicated Discord server and feedback forms where you can share your thoughts directly with the development team."
    }
  ];

  // Reusable Wave component - color is the NEXT section's background color
  const Wave = ({ color = "var(--classyBlack)" }) => (
      <svg
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          fill={color}
          viewBox="0 0 1000 35"
      >
        <path d="M1000 5S822.877 3.636 700 3.93c-18.088.043-36.002 10.945-51 11.07-21.081.175-37.54-10.382-49-10-20.98.7-33.333 17.5-50 15S516.667 0 500 0s-33.333 17.5-50 20-29.02-14.3-50-15c-11.645-.388-29.453 10.167-51 9.992-15.016-.122-30.925-11.022-49-11.064C176.964 3.644 0 5 0 5v30h1000V5z" />
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
              <span>JOIN ORBITAL MISSIONS</span>
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
                      onClick={scrollToFirstDefiance}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => e.key === 'Enter' && scrollToFirstDefiance()}
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
                  <FaPaperPlane/>
                </div>
                <h3>Mission Signup</h3>
                <p>Signup for future missions via Steam Playtest</p>
                <Link
                    href="https://discord.gg/classygames"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="process-step-button"
                >
                  Sign Up
                </Link>
              </div>

              <div className="process-step">
                <div className="step-number">03</div>
                <div className="step-icon">
                  <FaGamepad/>
                </div>
                <h3>Wishlist Orbital</h3>
                <p>Wishlist Orbital to support the IDN & Classy Games</p>
                <Link
                    href="https://discord.gg/classygames"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="process-step-button"
                >
                  Wishlist
                </Link>
              </div>

              <div className="process-step">
                <div className="step-number">04</div>
                <div className="step-icon">
                  <FaClipboardCheck/>
                </div>
                <h3>Contact</h3>
                <p>The Classy Games team will contact you via email regarding future missions</p>
              </div>

              <div className="process-step">
                <div className="step-number">05</div>
                <div className="step-icon">
                  <FaGift/>
                </div>
                <h3>Play & Earn</h3>
                <p>Play Orbital, complete in missions and earn rewards</p>
              </div>

              <div className="process-step">
                <div className="step-number">06</div>
                <div className="step-icon">
                  <FaRocket/>
                </div>
                <h3>Feedback</h3>
                <p>Join our Discord server and provide your feedback</p>
                <button
                    onClick={scrollToFirstDefiance}
                    className="process-step-button"
                >
                  Join Discord
                </button>
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

        {/* First Defiance Header - DARK */}
        <section className="first-defiance-header dark-section" ref={firstDefianceRef} id="first-defiance">
          <div className="section-container">
            <div className="defiance-header">
              <h2 className="section-title">Next Mission: &quot;First Defiance&quot;</h2>
              <p className="defiance-subtitle">December 10-14, 2025 | Limited to 100 Planetary Pilots</p>
              <p className="defiance-intro">
                For three millennia, humanity knew this moment would come. Now, the Interstellar Defense Network needs
                you.
                <br/><br/>
                First Defiance isn&apos;t just a mission, it&apos;s a competition. Help us shape the development of
                Orbital while competing with your fellow Planetary Pilots for prizes, exclusive rewards, and eternal
                glory on our leaderboards.
              </p>
            </div>
            <div className="cta-container-top">
              <button
                  onClick={scrollToHowItWorks}
                  className="cta-button primary"
              >
                <span>Join the Mission</span>
                <FaGamepad/>
              </button>
            </div>
          </div>
          <Wave color="white"/>
        </section>

        {/* Competition & Mission Details - LIGHT */}
        <section className="competition-details-section light-section">
          <div className="section-container">
            <div className="competition-categories">
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
                        <p>December 10-14, 2025</p>
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
                        <p>First access to all future missions</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Wave color="var(--classyBlack)"/>
        </section>

        {/* Content Creator Rewards - DARK */}
        <section className="content-creator-section dark-section">
          <div className="section-container">
            <div className="content-creator-rewards">
              <h3 className="subsection-title">Content Creator Rewards</h3>
              <p className="creator-intro">Share your gameplay, epic moments, and reactions to earn additional rewards
                and recognition!</p>
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