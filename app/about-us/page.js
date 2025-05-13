"use client";
import React from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Image from "next/image";
import { FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";
import "@/styles/about-us.css";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import teamImage from "../../public/images/Banner.png";
gsap.registerPlugin(ScrollTrigger);

export default function AboutUs() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(
        ".photo-paragraph, .about-text-cnt, .photo-paragraph, .team-photo, .under-text",
        { y: 100, opacity: 0 }
      );
      gsap.to(
        ".photo-paragraph, .about-text-cnt, .photo-paragraph, .team-photo, .under-text",
        {
          y: 0,
          opacity: 1,
          delay: 0.2,
          duration: 0.5,
          ease: "power1.out",
        }
      );

      gsap.from(".our-team, .members-paragraph", {
        scrollTrigger: {
          trigger: ".our-team",
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
  const names = [
    "Jamie McClenaghan",
    "Fraser Harris",
    "Cameron Green",
    "Emile Beaver",
  ];

  const positions = [
    "Founder & CEO",
    "Head of Design & Creative",
    "Developer",
    "3D Artist",
  ];

  const links = [
    "https://www.linkedin.com/in/jamiemcclenaghan/",
    "https://www.linkedin.com/in/fraser-harris-fth/",
    "https://www.linkedin.com/in/cameron-green23/",
    "https://www.linkedin.com/in/emile-beaver-339b21294/",
  ];

  return (
    <div className="body">
      <Navbar />
      <main className="about-page">
        <div className="about-banner">
          <div className="about-text-cnt">
            <div className="upper-txt">Learn more</div>
            <div className="lower-txt">About Us</div>
          </div>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          fill="#191919"
          fillRule="evenodd"
          viewBox="0 0 1000 35"
        >
          <path d="M1000 5S822.877 3.636 700 3.93c-18.088.043-36.002 10.945-51 11.07-21.081.175-37.54-10.382-49-10-20.98.7-33.333 17.5-50 15S516.667 0 500 0s-33.333 17.5-50 20-29.02-14.3-50-15c-11.645-.388-29.453 10.167-51 9.992-15.016-.122-30.925-11.022-49-11.064C176.964 3.644 0 5 0 5v30h1000V5z" />
        </svg>
      </main>
      <main className="photo-page">
        <p className="photo-paragraph">
          Classy Games Studios is an independent video game development studio
          specializing in creating engaging games that ignite your imagination
          and bring out your inner child. <br /> <br />
          Based in Northern Ireland (UK) and the United Arab Emirates, we are
          proud to operate internationally, bridging the European and Middle
          Eastern markets with a unique blend of creativity and cultural
          experience.
          <br /> <br />
          From forward-thinking developers to creative artists, our team brings
          a diverse set of skills and a shared passion for crafting
          unforgettable experiences. Our games offer players a space to unwind
          and escape from reality, blending excellence and creativity to push
          the boundaries of gaming and leave a lasting impact on players
          worldwide.
        </p>
        <Image
          src={teamImage}
          alt="Logo"
          width={1000}
          height={300}
          className="team-photo"
        />
        <div className="under-text">
          <h1 className="under-title">
            We Build Not Just Games, <br />
            But Tomorrow&apos;s Game Changers.
          </h1>
          <p className="under-paragraph">
            Our team is united by our shared passion for creating exceptional
            gaming experiences. <br />
            <br />
            We foster a culture of collaboration, support, and enthusiasm.
            Valuing each member’s voice to leverage unique perspectives and
            talents to create adventures that captivate players worldwide.
            Together, we strive to push the boundaries of gaming, delivering
            unforgettable experiences that inspire and delight.
            <br />
            <br />
            We are committed to continuous personal and professional
            development, providing our team with opportunities to learn, grow,
            and excel in their careers. Investing in each other ensures that our
            collective expertise evolves so we can continue to make games that
            keep it classy.
          </p>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          fill="#81badf"
          fillRule="evenodd"
          viewBox="0 0 1000 35"
        >
          <path d="M1000 5S822.877 3.636 700 3.93c-18.088.043-36.002 10.945-51 11.07-21.081.175-37.54-10.382-49-10-20.98.7-33.333 17.5-50 15S516.667 0 500 0s-33.333 17.5-50 20-29.02-14.3-50-15c-11.645-.388-29.453 10.167-51 9.992-15.016-.122-30.925-11.022-49-11.064C176.964 3.644 0 5 0 5v30h1000V5z" />
        </svg>
      </main>

      <main className="team-page">
        <h1 className="our-team">Our Team</h1>
        <p className="members-paragraph">
          Meet our passionate team of innovators. From forward-thinking
          developers to creative artists, each member brings their distinctive
          style and skills to the mix. Together, we&apos;re committed to
          challenging the limits of gaming and providing players across the
          globe with unforgettable experiences.
        </p>
        <div className="team-photo-cnt">
          {names.map((name, i) => (
            <div className="card-wrapper" key={i}>
              <div className="card">
                <div className="card-front">
                  <div className="card-img-container">
                    <img
                      src={`/assets/TeamPhotos/teamMemberPhoto${i + 1}.webp`}
                      alt={`${name}`}
                      className="card-img"
                    />
                  </div>
                  <div className="card-info">
                    <div className="linkedin-circle">
                      <Link
                        href={links[i]}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaLinkedinIn className="linkedin-icon" />
                      </Link>
                    </div>
                    <h3 className="card-name">{name}</h3>
                    <p className="card-title">{positions[i]}</p>
                  </div>
                </div>
                <div className="card-back">
                  <div className="video-container">
                    <video
                      src={`/assets/TeamVideos/teamMemberVideo${i + 1}.mp4`}
                      autoPlay
                      loop
                      muted
                      className="card-video"
                    />
                  </div>
                  <div className="card-info">
                    <div className="linkedin-circle">
                      <Link
                        href={links[i]}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaLinkedinIn
                          size={14}
                          color="#000000"
                          className="linkedin-icon"
                        />
                      </Link>
                    </div>
                    <h3 className="card-name">{name}</h3>
                    <p className="card-title">{positions[i]}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          fill="#81badf"
          fillRule="evenodd"
          viewBox="0 0 1000 35"
        >
          <path d="M1000 5S822.877 3.636 700 3.93c-18.088.043-36.002 10.945-51 11.07-21.081.175-37.54-10.382-49-10-20.98.7-33.333 17.5-50 15S516.667 0 500 0s-33.333 17.5-50 20-29.02-14.3-50-15c-11.645-.388-29.453 10.167-51 9.992-15.016-.122-30.925-11.022-49-11.064C176.964 3.644 0 5 0 5v30h1000V5z" />
        </svg>
      </main>
      <Footer />
    </div>
  );
}
