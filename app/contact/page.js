"use client";
import React from "react";
import { FaDiscord, FaDove, FaFire, FaEnvelope } from "react-icons/fa";
import Link from "next/link";
import "@/styles/careers.css";
import "@/styles/contact.css";
import "@/styles/about.css";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function AboutUs() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(".about-text-cnt, .contact-first-cnt, .contact-second-cnt", {
        y: 100,
        opacity: 0,
      });
      gsap.to(".about-text-cnt, .contact-first-cnt, .contact-second-cnt", {
        y: 0,
        opacity: 1,
        delay: 0.2,
        duration: 0.5,
        ease: "power1.out",
      });
      requestAnimationFrame(() => ScrollTrigger.refresh);
      window.addEventListener("load", ScrollTrigger.refresh);
    });

    return () => {
      ctx.revert();
      window.removeEventListener("load", ScrollTrigger.refresh);
    };
  }, []);
  return (
      <div className="body">
        <main className="about-page contact-svg">
          <div className="about-banner">
            <div className="about-text-cnt">
              <div className="upper-txt">Let&apos;s talk</div>
              <div className="lower-txt">Contact Us</div>
            </div>
          </div>
          <svg
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              fill="#000000"
              fillRule="evenodd"
              viewBox="0 0 1000 35"
          >
            <path d="M1000 5S822.877 3.636 700 3.93c-18.088.043-36.002 10.945-51 11.07-21.081.175-37.54-10.382-49-10-20.98.7-33.333 17.5-50 15S516.667 0 500 0s-33.333 17.5-50 20-29.02-14.3-50-15c-11.645-.388-29.453 10.167-51 9.992-15.016-.122-30.925-11.022-49-11.064C176.964 3.644 0 5 0 5v30h1000V5z" />
          </svg>
        </main>
        <main className="contact-page">
          <div className="contact-first-cnt">
            <div className="contact-upper-cnt">
              <h1 className="contact-heading">GET IN TOUCH</h1>
              <p>
                Whether you&apos;re a publisher, agency, development studio, Gabe
                Newell, or simply someone who fancies a smashing cup of tea, our
                doors are always open. The Classy Games Studios team would love to
                connect and share a laugh.
              </p>
            </div>
            <div className="contact-lower-cnt">
              <div className="communication-intro">
                <p>
                  At Classy Games, we believe communication is the cornerstone of every great relationship.
                  That&apos;s why we&apos;ve invested heavily in providing you with a diverse, cutting edge
                  portfolio of contact methods, each carefully curated to suit your unique preferences and
                  technological capabilities. Whether you&apos;re a digital native or prefer something more...
                  <em>artisanal</em>, we&apos;ve got you covered.
                </p>
              </div>
              <div className="contact-methods-grid">
                <div className="contact-method-card recommended">
                  <div className="method-badge">Recommended</div>
                  <div className="logo-cnt">
                    <FaDiscord size={25} className="cn-icon" />
                  </div>
                  <div className="contact-info-cnt">
                    <h2>Join Our Discord</h2>
                    <p>Instant replies, unless the team are on a tea and biscuit break, which we usually are. Do you fancy a biscuit too?</p>
                    <Link href="https://discord.com/invite/QTHShZJtGv" target="_blank" className="contact-method-link">
                      Join Server →
                    </Link>
                  </div>
                </div>

                <div className="contact-method-card">
                  <div className="method-badge slow">~3-5 Business Days</div>
                  <div className="logo-cnt pigeon">
                    <FaDove size={25} className="cn-icon" />
                  </div>
                  <div className="contact-info-cnt">
                    <h2>Carrier Pigeon</h2>
                    <p>
                      We accept deliveries at our Belfast, Riyadh, and Dubai offices. Please ensure your pigeon
                      is well-rested, has a valid visa for your destination country, and carries the appropriate
                      travel documentation. We are not responsible for messages lost to seagulls or customs delays.
                    </p>
                  </div>
                </div>

                <div className="contact-method-card">
                  <div className="method-badge slow">Weather Permitting</div>
                  <div className="logo-cnt smoke">
                    <FaFire size={25} className="cn-icon" />
                  </div>
                  <div className="contact-info-cnt">
                    <h2>Smoke Signals</h2>
                    <p>
                      We monitor the skies daily between 2-3pm GMT, clouds permitting. Pro tip: &quot;puff puff
                      long puff&quot; means &quot;hello.&quot; Please avoid during fire bans and windy days.
                      We&apos;ve yet to receive a single message this way, but we remain optimistic.
                    </p>
                  </div>
                </div>

                <div className="contact-method-card last-resort">
                  <div className="method-badge hopeless">Last Resort</div>
                  <div className="logo-cnt email">
                    <FaEnvelope size={25} className="cn-icon" />
                  </div>
                  <div className="contact-info-cnt">
                    <h2>Email</h2>
                    <p>For the truly desperate or those who enjoy communication methods from the turn of the century.</p>
                    <Link href="mailto:noreply@classygames.gg" className="contact-method-link dead">
                      noreply@classygames.gg
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        <main className="map-cnt">
          <div className="map">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d73968.42202860153!2d-6.009032787574015!3d54.59495147611762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4860fffdd7d08a3b%3A0x2e57162cefc7c531!2sBelfast%2C%20UK!5e0!3m2!1sen!2ssa!4v1747250614782!5m2!1sen!2ssa"
                width="100%"
                height="400"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="map">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d927758.036147982!2d46.16304900873988!3d24.72499786895202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03890d489399%3A0xba974d1c98e79fd5!2sRiyadh!5e0!3m2!1sen!2ssa!4v1747250544019!5m2!1sen!2ssa"
                width="100%"
                height="400"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="map">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462560.68281887844!2d54.89782418606137!3d25.076280448702796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2seg!4v1761512436372!5m2!1sen!2seg"
                width="100%"
                height="400"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </main>
      </div>
  );
}