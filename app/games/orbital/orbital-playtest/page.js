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

  useEffect(() => {
    const ctx = gsap.context(() => {
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

  return (
      <div className="orbital-playtest-page">
        {/* Promo Image Section */}
        <section className="promo-section">
          <div className="section-container">
            <div className="promo-display">
              <Image
                  src="/assets/Heroes/OrbitalPromo.png"
                  alt="Orbital Playtest Promo"
                  width={1920}
                  height={1080}
                  className="promo-featured"
              />
            </div>
          </div>
          <svg
              className="promo-wave"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              viewBox="0 0 1000 35"
          >
            <path d="M1000 5S822.877 3.636 700 3.93c-18.088.043-36.002 10.945-51 11.07-21.081.175-37.54-10.382-49-10-20.98.7-33.333 17.5-50 15S516.667 0 500 0s-33.333 17.5-50 20-29.02-14.3-50-15c-11.645-.388-29.453 10.167-51 9.992-15.016-.122-30.925-11.022-49-11.064C176.964 3.644 0 5 0 5v30h1000V5z" />
          </svg>
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
                <p>Sign up with your email to secure your spot in the exclusive playtest</p>
              </div>
              <div className="process-step">
                <div className="step-number">02</div>
                <div className="step-icon">
                  <FaPaperPlane />
                </div>
                <h3>Contact</h3>
                <p>Receive your invite and instructions via email when the playtest begins</p>
              </div>
              <div className="process-step">
                <div className="step-number">03</div>
                <div className="step-icon">
                  <FaClipboardCheck />
                </div>
                <h3>Test</h3>
                <p>Play the game and provide valuable feedback to shape the final experience</p>
              </div>
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
          <svg
              className="how-it-works-wave"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              viewBox="0 0 1000 35"
          >
            <path d="M1000 5S822.877 3.636 700 3.93c-18.088.043-36.002 10.945-51 11.07-21.081.175-37.54-10.382-49-10-20.98.7-33.333 17.5-50 15S516.667 0 500 0s-33.333 17.5-50 20-29.02-14.3-50-15c-11.645-.388-29.453 10.167-51 9.992-15.016-.122-30.925-11.022-49-11.064C176.964 3.644 0 5 0 5v30h1000V5z" />
          </svg>
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
          <svg
              className="benefits-wave"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              viewBox="0 0 1000 35"
          >
            <path d="M1000 5S822.877 3.636 700 3.93c-18.088.043-36.002 10.945-51 11.07-21.081.175-37.54-10.382-49-10-20.98.7-33.333 17.5-50 15S516.667 0 500 0s-33.333 17.5-50 20-29.02-14.3-50-15c-11.645-.388-29.453 10.167-51 9.992-15.016-.122-30.925-11.022-49-11.064C176.964 3.644 0 5 0 5v30h1000V5z" />
          </svg>
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
          <svg
              className="faq-wave"
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