"use client";

import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import "@/styles/games.css";
import Marquee from "react-fast-marquee";

gsap.registerPlugin(ScrollTrigger);

export default function OrbitalPage() {
  const [marqueePlay, setMarqueePlay] = useState(true);

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
      gsap.from(".orbital-logo, .ss-page h1, .ss-page iframe", {
        scrollTrigger: {
          trigger: ".orbital-logo",
          start: "top 90%",
        },
        y: 100,
        opacity: 0,
        duration: 1,
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

  const upperImages = Array.from(
    { length: 5 },
    (_, i) => `/images/Orbital/upper${i + 1}.webp`
  );
  const lowerImages = Array.from(
    { length: 5 },
    (_, i) => `/images/Orbital/lower${i + 1}.webp`
  );

  return (
    <div className="body">
      <div className="o-banner">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          fill="#81badf"
          fillRule="evenodd"
          viewBox="0 0 1000 35"
        >
          <path d="M1000 5S822.877 3.636 700 3.93c-18.088.043-36.002 10.945-51 11.07-21.081.175-37.54-10.382-49-10-20.98.7-33.333 17.5-50 15S516.667 0 500 0s-33.333 17.5-50 20-29.02-14.3-50-15c-11.645-.388-29.453 10.167-51 9.992-15.016-.122-30.925-11.022-49-11.064C176.964 3.644 0 5 0 5v30h1000V5z" />
        </svg>
      </div>

      <main className="ss-page">
        <Image
          src="/assets/Logos/SSLogo.png"
          alt="Silly Suspects Logo"
          width={600}
          height={220}
          className="ss-logo"
          priority
        />

        <h1>Become the ultimate planetary pilot</h1>

        <div className="video-container-ss">
          <iframe
            src="https://www.youtube.com/embed/xHljIZBbMU0?si=wJ7VtyfWzVxXzq0x"
            allowFullScreen
            loading="lazy"
            title="Orbital Gameplay Trailer"
          ></iframe>
        </div>

        <p>
          Step into the role of planetary pilot and save the planet from being
          swallowed into the abyss of a black hole. Prolong the existence of the
          planet by utilising your planetary technologies to avoid asteroids,
          supernovas, neutron stars and wormholes.
          <br />
          <br />
          Earn points to unlock new planets such as Mars, Jupiter, and Uranus
          and compete with players around the world in the attempt to become the
          top planetary pilot on the leaderboard.
          <br />
          <br />
          Well, what are you waiting for, pilot? You&apos;ve got a planet to
          save!
        </p>

        <div className="first-line"></div>

        <div className="downloads">
          <Link
            href="https://play.google.com/store/apps/details?id=com.ClassyGamesStudios.OrbitalV2"
            target="_blank"
          >
            <div className="google-play">
              <Image
                src="/assets/webImages/googlePlay.webp"
                alt="Download Orbital on Google Play"
                width={170}
                height={100}
                className="download-logo"
                loading="lazy"
              />
            </div>
          </Link>

          <Link href="https://jamiemcclenaghan.itch.io/orbital" target="_blank">
            <div className="itch.io">
              <Image
                src="/assets/webImages/itch.webp"
                alt="Play Orbital on Itch.io"
                width={170}
                height={100}
                className="download-logo"
                loading="lazy"
              />
            </div>
          </Link>
        </div>

        <div className="second-line"></div>

        <div className="scroller-ss second-scroller">
          <Marquee play={marqueePlay} speed={30}>
            <div className="scroller-track-ss">
              {[...Array(2)].map((_, i) => (
                <div className="scroller-content-ss" key={`upper-track-${i}`}>
                  {upperImages.map((src, idx) => (
                    <Image
                      key={`upper-${i}-${idx}`}
                      src={src}
                      alt={`Upper orbital image ${idx + 1}`}
                      width={450}
                      height={100}
                      className="scroll-logo-ss2"
                      loading="lazy"
                    />
                  ))}
                </div>
              ))}
            </div>
          </Marquee>
        </div>

        <div className="scroller-ss">
          <Marquee play={marqueePlay} speed={30} direction="right">
            <div className="scroller-track-ss2">
              {[...Array(2)].map((_, i) => (
                <div className="scroller-content-ss" key={`lower-track-${i}`}>
                  {lowerImages.map((src, idx) => (
                    <Image
                      key={`lower-${i}-${idx}`}
                      src={src}
                      alt={`Lower orbital image ${idx + 1}`}
                      width={450}
                      height={100}
                      className="scroll-logo-ss2"
                      loading="lazy"
                    />
                  ))}
                </div>
              ))}
            </div>
          </Marquee>
        </div>

        <div className="second-line"></div>
      </main>
    </div>
  );
}
