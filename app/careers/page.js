"use client";
import React from "react";
import "@/styles/careers.css";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import classyLogo from "../../public/assets/Logos/ClassyGamesStudios_Logo.webp";

gsap.registerPlugin(ScrollTrigger);

export default function Careers() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(
          ".photo-paragraph, .careers-text-cnt, .photo-paragraph, .team-photo, .under-text",
          { y: 100, opacity: 0 }
      );
      gsap.to(
          ".photo-paragraph, .careers-text-cnt, .photo-paragraph, .team-photo, .under-text",
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
  
  return (
      <div className="body">
        <main className="careers-page">
          <div className="careers-banner">
            <div className="careers-text-cnt">
              <div className="upper-txt">Grow With Us</div>
              <div className="lower-txt">Careers</div>
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
          {/*<p className="photo-paragraph">*/}
          {/*  Classy Games Studios is an independent video game development studio*/}
          {/*  specializing in creating engaging games that ignite your imagination*/}
          {/*  and bring out your inner child. <br /> <br />*/}
          {/*  Based in Northern Ireland (UK) and the United Arab Emirates, we are*/}
          {/*  proud to operate internationally, bridging the European and Middle*/}
          {/*  Eastern markets with a unique blend of creativity and cultural*/}
          {/*  experience.*/}
          {/*  <br /> <br />*/}
          {/*  From forward-thinking developers to creative artists, our team brings*/}
          {/*  a diverse set of skills and a shared passion for crafting*/}
          {/*  unforgettable experiences. Our games offer players a space to unwind*/}
          {/*  and escape from reality, blending excellence and creativity to push*/}
          {/*  the boundaries of gaming and leave a lasting impact on players*/}
          {/*  worldwide.*/}
          {/*</p>*/}
          <div className="under-text">
            <h1 className="under-title">
              JOIN THE CREW
            </h1>
            <p className="under-paragraph">
              At Classy Games Studios, we create games that ignite your imagination and bring out your inner child — and
              we have a lot of fun doing it.
              <br/>
              <br/>
              We’re a agile, focused team that values initiative, clear communication, and creative joy.
              Whether you're animating a goofy character, refining a game loop, or sharing player feedback, your voice
              matters here.
              We're building games with our players, not just for them, and that same spirit of collaboration runs
              through our team.
              <br/>
              <br/>
              We work remotely and flexibly across time zones, but we’re not distant.
              Regular check-ins, shared rituals, and open communication keep us aligned and energised.
              We invest in tools and clarity so people can do their best work without wasting time or burning out.
              <br/>
              <br/>
              We manage all our open roles through Discord. Join the server, say hi, and keep an eye out for new
              opportunities.
            </p>
          </div>
          {/*<Image*/}
          {/*    src={classyLogo}*/}
          {/*    alt="Logo"*/}
          {/*    width={1000}*/}
          {/*    height={300}*/}
          {/*    className="team-photo"*/}
          {/*/>*/}
          {/*<div className="under-text">*/}
          {/*  <h1 className="under-title">*/}
          {/*    OUR OPEN ROLES*/}
          {/*  </h1>*/}
          {/*  <p className="under-paragraph">*/}
          {/*    ?????????????????????*/}
          {/*    <br /><br />*/}
          {/*    ?????????????????????*/}
          {/*  </p>*/}
          {/*</div>*/}
          <svg
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              fill="#81badf"
              fillRule="evenodd"
              viewBox="0 0 1000 35"
          >
            <path
                d="M1000 5S822.877 3.636 700 3.93c-18.088.043-36.002 10.945-51 11.07-21.081.175-37.54-10.382-49-10-20.98.7-33.333 17.5-50 15S516.667 0 500 0s-33.333 17.5-50 20-29.02-14.3-50-15c-11.645-.388-29.453 10.167-51 9.992-15.016-.122-30.925-11.022-49-11.064C176.964 3.644 0 5 0 5v30h1000V5z"/>
          </svg>
        </main>

        <main className="team-page">
          <h1 className="our-team">Our Support</h1>
          <p className="members-paragraph">
            Our doors are always open to those looking to break into the industry.
            <br/><br/>
            We offer internships and entry-level positions designed to help you gain real-world experience and grow your
            skills.
            <br/><br/>
            At Classy Games Studios, we believe reliability and passion matter more than years of experience.
            If you’re motivated, eager to learn, and ready to contribute, we want to hear from you.


            <br/><br/>
          </p>

          <svg
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              fill="#81badf"
              fillRule="evenodd"
              viewBox="0 0 1000 35"
          >
            <path
                d="M1000 5S822.877 3.636 700 3.93c-18.088.043-36.002 10.945-51 11.07-21.081.175-37.54-10.382-49-10-20.98.7-33.333 17.5-50 15S516.667 0 500 0s-33.333 17.5-50 20-29.02-14.3-50-15c-11.645-.388-29.453 10.167-51 9.992-15.016-.122-30.925-11.022-49-11.064C176.964 3.644 0 5 0 5v30h1000V5z"/>
          </svg>
        </main>
      </div>
  );
}