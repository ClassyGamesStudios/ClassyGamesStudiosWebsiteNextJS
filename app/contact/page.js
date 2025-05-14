"use client";
import React from "react";
import { FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import Link from "next/link";
import "@/styles/careers.css";
import "@/styles/contact.css";
import "@/styles/about-us.css";
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
      <main className="about-page contact-svg">
        <div className="about-banner">
          <div className="about-text-cnt">
            <div className="upper-txt">GET IN TOUCH</div>
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
        <div className=" contact-first-cnt">
          <div className="contact-upper-cnt ">
            <h1>CONTACT US</h1>
            <p>
              Whether you&apos;re a publisher, agency, development studio, Gabe
              Newell, or simply someone who fancies a smashing cup of tea, our
              doors are always open. The Classy Games Studios team would love to
              connect and share a laugh.
            </p>
          </div>
          <div className=" contact-lower-cnt">
            <div className="contact-cnt">
              <div className="logo-cnt">
                <FaEnvelope size={25} className="cn-icon" />
              </div>
              <div className="contact-info-cnt">
                <h2>Email Us</h2>
                <Link href="mailto:info@classygamesstudios.com">
                  info@classygamesstudios.com
                </Link>
              </div>
            </div>
            <div className="contact-cnt">
              <div className="logo-cnt">
                <FaMapMarkerAlt size={25} className="cn-icon" />
              </div>
              <div className="contact-info-cnt">
                <h2>Our Locations</h2>
                <Link
                  href="https://www.google.com/maps?q=Northern+Ireland+and+United+Arab+Emirates"
                  target="_blank"
                >
                  Northern Ireland & UAE
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-second-cnt ">
          <form
            action="https://formsubmit.co/info@classygamesstudios.com"
            method="POST"
            className="contact-form"
          >
            <input
              type="hidden"
              name="_subject"
              value="New Contact Form Submission!"
            />
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  name="First Name"
                  id="firstName"
                  placeholder="ex. Mike"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  name="Last Name"
                  id="lastName"
                  placeholder="ex. Scott"
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="Email"
                id="email"
                placeholder="ex. email@example.com"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                name="Message"
                id="message"
                placeholder="Example Text"
                required
              ></textarea>
            </div>

            <input
              type="hidden"
              name="_next"
              value="https://classygamesstudios.com/contact"
            />

            <button type="submit" className="submit-btn">
              Submit
            </button>
          </form>
        </div>
      </main>

      <main className="map-cnt">
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d151986.698977561!2d-5.864149942257194!3d54.671144565130604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1733502787462!5m2!1sen!2s"
            width="100%"
            height="400"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d86533.15445741397!2d55.266033788578866!3d25.21596606905573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1733502574639!5m2!1sen!2s"
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
