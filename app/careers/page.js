"use client";

import React, { useEffect } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "@/styles/careers.css";
import "@/styles/about-us.css";

gsap.registerPlugin(ScrollTrigger);

export default function CareersPage() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(".about-text-cnt, .first-cnt, .second-cnt", {
        y: 100,
        opacity: 0,
      });
      gsap.to(".about-text-cnt, .first-cnt, .second-cnt", {
        y: 0,
        opacity: 1,
        delay: 0.2,
        duration: 0.5,
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

  return (
    <div className="body">
      <Navbar />

      <section className="about-page">
        <div className="about-banner">
          <div className="about-text-cnt">
            <h1 className="upper-txt">Our Careers</h1>
            <h2 className="lower-txt">Join Us</h2>
          </div>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          fill="#ffffff"
          fillRule="evenodd"
          viewBox="0 0 1000 35"
        >
          <path d="M1000 5S822.877 3.636 700 3.93c-18.088.043-36.002 10.945-51 11.07-21.081.175-37.54-10.382-49-10-20.98.7-33.333 17.5-50 15S516.667 0 500 0s-33.333 17.5-50 20-29.02-14.3-50-15c-11.645-.388-29.453 10.167-51 9.992-15.016-.122-30.925-11.022-49-11.064C176.964 3.644 0 5 0 5v30h1000V5z" />
        </svg>
      </section>

      <section className="main-cnt">
        <div className="first-cnt">
          <h2>Join the Crew</h2>
          <div className="upper-cnt">
            <p>
              At Classy Games Studios, we are a community, team, and crew. Each
              member plays a vital role in our game development endeavors. We
              prioritize support and collaboration, ensuring everyone feel
              valued and heard. We offer flexible work arrangements and remote
              options across time zones.
            </p>
            <p>
              If your expertise isn&apos;t listed but you have valuable game
              development skills, please send your CV to{" "}
              <Link href="mailto:info@classygamesstudios.com">
                info@classygamesstudios.com
              </Link>
              .
            </p>
          </div>
        </div>

        <div className="second-cnt">
          <div className="lower-cnt">
            <h2>Interested in the Gaming Industry?</h2>
            <p>
              Our doors are always open. We welcome those seeking to enter the
              industry and offer internships and entry-level positions. We value
              reliability and passion over experience.
            </p>
          </div>
          <div className="img-career">
            <Image
              src="/Favicons/main-logo.png"
              alt="Classy Games Studios Logo"
              width={800}
              height={800}
              priority
              className="logo-big"
            />
          </div>
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
      </section>

      <Footer />
    </div>
  );
}
