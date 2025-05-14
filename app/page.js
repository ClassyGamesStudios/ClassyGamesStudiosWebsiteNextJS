"use client";
import "@/styles/globals.css";
import Image from "next/image";
import Link from "next/link";
import { FaPaperPlane } from "react-icons/fa";
import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Marquee from "react-fast-marquee";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const [marqueePlay, setMarqueePlay] = useState(true);

  const logos = [
    "Exel_Logo.webp",
    "MerakCapital_Logo.webp",
    "GJD_Logo.webp",
    "MakersForge_Logo.webp",
    "SillySuspects_Logo.webp",
    "Steam_Logo.webp",
  ];

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === "hidden") {
        setMarqueePlay(false);
      } else if (document.visibilityState === "visible") {
        setMarqueePlay(true);
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(".indie-text", { x: -100, opacity: 0 });
      gsap.to(".indie-text", {
        x: 0,
        delay: 0.5,
        opacity: 1,
        duration: 0.5,
        ease: "power1.out",
      });
      gsap.from(".about-us-cnt", {
        scrollTrigger: {
          trigger: ".about-us-cnt",
          start: "top 80%",
        },
        y: 100,
        opacity: 0,
        duration: 0.5,
        ease: "power3.out",
      });
      requestAnimationFrame(() => {
        ScrollTrigger.refresh();
      });

      window.addEventListener("load", ScrollTrigger.refresh);
    });

    return () => {
      ctx.revert();
      window.removeEventListener("load", ScrollTrigger.refresh);
    };
  }, []);

  return (
    <div className="body">
      <main className="upper-body">
        <div className="indie-text">
          INDIE GAME
          <br />
          DEVELOPMENT
          <br />
          STUDIO
        </div>
        <div className="home-banner">
          <div className="marqueeContainer">
            <div className="scroll">
              <svg
                className="scrollerSvg"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                fill="#81badf"
                fillRule="evenodd"
                viewBox="0 0 1000 35"
              >
                <path d="M1000 5S822.877 3.636 700 3.93c-18.088.043-36.002 10.945-51 11.07-21.081.175-37.54-10.382-49-10-20.98.7-33.333 17.5-50 15S516.667 0 500 0s-33.333 17.5-50 20-29.02-14.3-50-15c-11.645-.388-29.453 10.167-51 9.992-15.016-.122-30.925-11.022-49-11.064C176.964 3.644 0 5 0 5v30h1000V5z" />
              </svg>
              <Marquee play={marqueePlay}>
                <div className="scroller-track ">
                  {[...Array(2)].map((_, i) => (
                    <div className="scroller-content" key={i}>
                      <div className="scroller-text">
                        Keepin&apos; it classy
                      </div>
                      <Image
                        src="/assets/Logos/ClassyGamesStudiosTransparent_Logo.webp"
                        alt="Logo"
                        width={70}
                        height={100}
                        className="scroll-logo"
                      />
                      <div className="scroller-text">
                        Keepin&apos; it classy
                      </div>
                      <Image
                        src="/assets/Logos/ClassyGamesStudiosTransparent_Logo.webp"
                        alt="Logo"
                        width={70}
                        height={100}
                        className="scroll-logo"
                      />
                      <div className="scroller-text">
                        Keepin&apos; it classy
                      </div>
                      <Image
                        src="/assets/Logos/ClassyGamesStudiosTransparent_Logo.webp"
                        alt="Logo"
                        width={70}
                        height={100}
                        className="scroll-logo"
                      />
                      <div className="scroller-text">
                        Keepin&apos; it classy
                      </div>
                      <Image
                        src="/assets/Logos/ClassyGamesStudiosTransparent_Logo.webp"
                        alt="Logo"
                        width={70}
                        height={100}
                        className="scroll-logo"
                      />
                      <div className="scroller-text">
                        Keepin&apos; it classy
                      </div>
                      <Image
                        src="/assets/Logos/ClassyGamesStudiosTransparent_Logo.webp"
                        alt="Logo"
                        width={70}
                        height={100}
                        className="scroll-logo"
                      />
                      <div className="scroller-text">
                        Keepin&apos; it classy
                      </div>
                      <Image
                        src="/assets/Logos/ClassyGamesStudiosTransparent_Logo.webp"
                        alt="Logo"
                        width={70}
                        height={100}
                        className="scroll-logo"
                      />
                      <div className="scroller-text">
                        Keepin&apos; it classy
                      </div>
                      <Image
                        src="/assets/Logos/ClassyGamesStudiosTransparent_Logo.webp"
                        alt="Logo"
                        width={70}
                        height={100}
                        className="scroll-logo"
                      />
                    </div>
                  ))}
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </main>
      <main className="lower-body">
        <div className="hook">WHAT WE ARE CURRENTLY COOKING UP</div>

        <Image
          src="/assets/Logos/SSLogo.png"
          alt="Logo"
          width={600}
          height={200}
          objectFit="contain"
          className="hook-logo"
        />
        <p className="hook-text">
          The perfect blend of mystery, comedy & chaos
          <br />
          <br />
          SillySuspects is an outrageously hilarious first-person detective game
          with a comedic twist on the murder mystery genre.
          <br />
          <br />
          Step into the role of the detective to catch crafty criminals by
          exploring vibrant cities, analysing bizarre crime scenes, and
          investigating quirky characters to unravel a wild and wacky mystery.
          <br />
          <br />
          Are you ready to bring justice to this hilariously chaotic world?
        </p>
        <main className="characters-area"></main>
      </main>

      <main className="about-us-body">
        <div className="about-us-cnt">
          <div className="about-us-hook">
            Meet Our <br />
            Classy Crew
          </div>
          <div className="info-container">
            <p className="about-us-paragraph">
              Dive into our world and get to know our passionate crew of indie
              game enthusiasts. From imaginative developers to artistic
              creators, each of us brings our own vibe and skills to the mix.
              Together, we&apos;re all about breaking new ground in gaming and
              having a blast while doing it!
            </p>
            <Link href="/about-us" className="btn-container">
              <div className="about-us-button">
                <span className="hover">
                  About us <FaPaperPlane size={14} />
                </span>
                <span className="original">
                  About us <FaPaperPlane size={14} />
                </span>
              </div>
            </Link>
          </div>
        </div>
        <div className="scroller2">
          <div className="scroller-track2">
            <div className="scroller-track2">
              <Marquee play={marqueePlay}>
                {[...Array(2)].map((_, i) =>
                  logos.map((logo, index) => (
                    <Image
                      key={`${i}-${index}`}
                      src={`/assets/Logos/Partners/${logo}`}
                      alt="Logo"
                      width={70}
                      height={100}
                      className="scroll-logo2"
                    />
                  ))
                )}
              </Marquee>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
