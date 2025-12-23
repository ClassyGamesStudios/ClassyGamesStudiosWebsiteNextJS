"use client";
import React from "react";
import Link from "next/link";
import "@/styles/careers.css";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Careers() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(".careers-text-cnt, .section-content", {
        y: 100,
        opacity: 0,
      });
      gsap.to(".careers-text-cnt, .section-content", {
        y: 0,
        opacity: 1,
        delay: 0.2,
        duration: 0.5,
        ease: "power1.out",
      });

      gsap.from(".jobs-section .section-title, .jobs-grid", {
        scrollTrigger: {
          trigger: ".jobs-section",
          start: "top 90%",
        },
        y: 100,
        opacity: 0,
        duration: 0.5,
        delay: 0.2,
        ease: "power1.out",
      });

      gsap.from(".support-section .section-title, .support-content, .support-logos-row", {
        scrollTrigger: {
          trigger: ".support-section",
          start: "top 90%",
        },
        y: 100,
        opacity: 0,
        duration: 0.5,
        delay: 0.2,
        ease: "power1.out",
      });

      requestAnimationFrame(() => ScrollTrigger.refresh());
      window.addEventListener("load", ScrollTrigger.refresh);
    });

    return () => {
      ctx.revert();
      window.removeEventListener("load", ScrollTrigger.refresh);
    };
  }, []);

  // Reusable Wave component
  const Wave = () => (
      <svg
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1000 35"
      >
        <path d="M1000 5S822.877 3.636 700 3.93c-18.088.043-36.002 10.945-51 11.07-21.081.175-37.54-10.382-49-10-20.98.7-33.333 17.5-50 15S516.667 0 500 0s-33.333 17.5-50 20-29.02-14.3-50-15c-11.645-.388-29.453 10.167-51 9.992-15.016-.122-30.925-11.022-49-11.064C176.964 3.644 0 5 0 5v30h1000V5z" />
      </svg>
  );

  const jobs = [
    {
      title: "COMING SOON",
      image: "/assets/Logos/ClassyGamesLogo.webp",
      descriptionUrl: "#",
      applicationUrl: "#",
    },
    {
      title: "COMING SOON",
      image: "/assets/Logos/ClassyGamesLogo.webp",
      descriptionUrl: "#",
      applicationUrl: "#",
    },
    {
      title: "COMING SOON",
      image: "/assets/Logos/ClassyGamesLogo.webp",
      descriptionUrl: "#",
      applicationUrl: "#",
    },
    {
      title: "COMING SOON",
      image: "/assets/Logos/ClassyGamesLogo.webp",
      descriptionUrl: "#",
      applicationUrl: "#",
    },
  ];

  const universityLogos = [
    {
      src: "/assets/Logos/Partners/Universities/CEA.webp",
      alt: "Center for Entertainment Arts",
    },
    {
      src: "/assets/Logos/Partners/Universities/SAE.webp",
      alt: "SAE University College",
    },
    {
      src: "/assets/Logos/Partners/Universities/Southampton.webp",
      alt: "University of Southampton",
    },
    {
      src: "/assets/Logos/Partners/Universities/AlBaha.webp",
      alt: "Al Baha University",
    },
    {
      src: "/assets/Logos/Partners/Universities/GEMS.webp",
      alt: "GEMS Education",
    },
  ];

  return (
      <div className="body">
        {/* Hero Banner */}
        <main className="careers-page">
          <div className="careers-banner">
            <div className="careers-text-cnt">
              <div className="upper-txt">Grow With Us</div>
              <div className="lower-txt">Careers</div>
            </div>
          </div>
          {/* Banner wave - fills white for next light section */}
          <svg
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              viewBox="0 0 1000 35"
          >
            <path d="M1000 5S822.877 3.636 700 3.93c-18.088.043-36.002 10.945-51 11.07-21.081.175-37.54-10.382-49-10-20.98.7-33.333 17.5-50 15S516.667 0 500 0s-33.333 17.5-50 20-29.02-14.3-50-15c-11.645-.388-29.453 10.167-51 9.992-15.016-.122-30.925-11.022-49-11.064C176.964 3.644 0 5 0 5v30h1000V5z" />
          </svg>
        </main>

        {/* Section 1 - Join the Crew - LIGHT */}
        <section className="join-section light-section">
          <div className="section-container">
            <div className="section-content">
              <h2 className="section-title">Join The Crew</h2>
              <p className="section-paragraph">
                At Classy Games, creative joy sits at the heart of everything we do. We approach our work with a sense of play and craftsmanship, and we want everyone on the team to feel that too.
                <br />
                <br />
                We&apos;re a globally distributed team built on trust, autonomy, and collaboration. Every voice matters. Every team member is trusted to take initiative and contribute meaningfully. We foster a culture of ownership, honesty, and openness, because we believe the best work happens when people feel supported and empowered.
                <br />
                <br />
                If you&apos;re looking for a place where you can grow, create, and be part of something you&apos;re genuinely proud of, we&apos;d love to hear from you. We manage all our open roles through Discord, so join the server, say hi, and keep an eye out for new opportunities.
              </p>
            </div>
          </div>
          <Wave />
        </section>

        {/* Section 2 - Open Roles - DARK */}
        <section className="jobs-section dark-section">
          <div className="section-container">
            <h2 className="section-title">Open Roles</h2>
            <div className="jobs-grid">
              {jobs.map((job, index) => (
                  <div key={index} className="job-card">
                    <div className="job-image-container">
                      <img src={job.image} alt={job.title} className="job-image" />
                    </div>
                    <h3 className="job-title">{job.title}</h3>
                    <div className="job-buttons">
                      <Link
                          href={job.descriptionUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="job-button job-button-secondary"
                      >
                        Job Description
                      </Link>
                      <Link
                          href={job.applicationUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="job-button job-button-primary"
                      >
                        Apply Now
                      </Link>
                    </div>
                  </div>
              ))}
            </div>
          </div>
          <Wave />
        </section>

        {/* Section 3 - Our Support - LIGHT */}
        <section className="support-section light-section">
          <div className="section-container">
            <h2 className="section-title">Our Support</h2>
            <p className="support-content">
              At Classy Games, we&apos;re passionate about nurturing the next generation of game developers.
              <br />
              <br />
              We&apos;ve partnered with universities and colleges around the world to offer internship opportunities that give students real, hands-on experience in the industry. Each year, we receive over 100 applications from both partner institutions and beyond, a testament to the reputation we&apos;ve built for delivering meaningful, skill-building internships.
              <br />
              <br />
              Our Founder &amp; CEO, Jamie McClenaghan, brings years of experience in education and knows how to mentor interns so they leave with genuinely valuable skills. He currently works alongside the United Arab Emirates, Saudi Arabian, and Canadian government education departments to help develop game development curricula at the university level.
              <br />
              <br />
              We believe in giving people a chance, but we&apos;re looking for interns who are hungry, driven, and ready to put in the work. If you&apos;re serious about breaking into the industry and willing to go the extra mile, reach out and we will support you to the best of our abilities.
            </p>
            <div className="support-logos-row">
              {universityLogos.map((logo, index) => (
                  <a
                      key={index}
                      href={logo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="support-logo"
                  >
                    <img src={logo.src} alt={logo.alt} />
                  </a>
              ))}
            </div>
          </div>
          <Wave />
        </section>
      </div>
  );
}