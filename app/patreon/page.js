// app/patreon/page.js
"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { getPatreonAuthUrl } from "@/lib/patreon-config";
import { FaChevronRight } from "react-icons/fa";
import "@/styles/patreon.css"; // Using the new CSS file

export default function PatreonAuthPage() {
  const authUrl = getPatreonAuthUrl();

  useEffect(() => {
    // GSAP Entrance Animation
    const ctx = gsap.context(() => {
      gsap.to(".auth-card", {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.2,
      });
      
      gsap.from(".patreon-bg-blob", {
        opacity: 0,
        duration: 1.5,
        stagger: 0.3,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="patreon-page">
      {/* Background Blobs */}
      <div className="patreon-bg-blob blob-blue"></div>
      <div className="patreon-bg-blob blob-purple"></div>

      {/* Main Card */}
      <div className="auth-card">
        <div className="auth-icon-container">
          <Image 
            src="/assets/SocialIcons/patreon.png" 
            alt="Patreon Logo" 
            width={40} 
            height={40} 
            className="auth-icon-img"
          />
        </div>

        <h1 className="auth-title">
          Classy Game<br />Authentication
        </h1>
        
        <div className="auth-divider"></div>

        <p className="auth-description">
          OAuth with <span className="highlight">Classy Games Patreon</span> to gain early access to our games and verify your supporter status.
        </p>
        
        <Link href={authUrl} className="patreon-button">
          Log in with Patreon
          <FaChevronRight size={14} />
        </Link>

        <p className="auth-footer">
          By authenticating, you verify your membership level for in-game rewards and access.
        </p>
      </div>
    </div>
  );
}