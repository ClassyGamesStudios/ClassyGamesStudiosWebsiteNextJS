"use client";
import Link from "next/link";
import Image from "next/image";
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

import "@/styles/footer.css";
import React from "react";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="upper-footer">
        <div className="first">
          <Link href="/">
            <Image
                src="/assets/Logos/ClassyGamesStudios_Logo.webp"
                alt="Logo"
                width={125}
                height={125}
                className="footer-logo"
            />
          </Link>
          <p className="first-text">
            Creating engaging games that <br/>
            ignite your imagination and <br/>
            bring out your inner child.
          </p>
          <div className="socials">
            <Link
                href="https://www.linkedin.com/company/classy-games-studios"
                target="_blank"
                title="LinkedIn"
            >
              <Image
                  src={`/assets/SocialIcons/icon1.png`}
                  alt={`icon`}
                  width={25}
                  height={25}
                  className="social-icon"
              />
            </Link>
            <Link
                href="https://store.steampowered.com/developer/classygamesstudios"
                target="_blank"
                title="Steam"
            >
              <Image
                  src={`/assets/SocialIcons/icon2.png`}
                  alt={`icon`}
                  width={25}
                  height={25}
                  className="social-icon"
              />
            </Link>
            <Link
                href="https://discord.com/invite/RnFAM8xV"
                target="_blank"
                title="Discord"
            >
              <Image
                  src={`/assets/SocialIcons/icon3.png`}
                  alt={`icon`}
                  width={25}
                  height={25}
                  className="social-icon"
              />
            </Link>
            <Link
                href="https://www.reddit.com/r/classygamesstudios/"
                target="_blank"
                title="Reddit"
            >
              <Image
                  src={`/assets/SocialIcons/icon4.png`}
                  alt={`icon`}
                  width={25}
                  height={25}
                  className="social-icon"
              />
            </Link>
            <Link
                href="https://www.tiktok.com/@classygamesstudios"
                target="_blank"
                title="TikTok"
            >
              <Image
                  src={`/assets/SocialIcons/icon5.png`}
                  alt={`icon`}
                  width={25}
                  height={25}
                  className="social-icon"
              />
            </Link>
            <Link
                href="https://bsky.app/profile/classygamesstudios.com"
                target="_blank"
                title="Bluesky"
            >
              <Image
                  src={`/assets/SocialIcons/icon7.png`}
                  alt={`icon`}
                  width={25}
                  height={25}
                  className="social-icon"
              />
            </Link>
            <Link
                href="https://www.youtube.com/@ClassyGamesStudios"
                target="_blank"
                title="YouTube"
            >
              <Image
                  src={`/assets/SocialIcons/icon6.png`}
                  alt={`icon`}
                  width={25}
                  height={25}
                  className="social-icon"
              />
            </Link>

            <Link
                href="https://www.instagram.com/classy_games_studios/"
                target="_blank"
                title="Instagram"
            >
              <Image
                  src={`/assets/SocialIcons/icon8.png`}
                  alt={`icon`}
                  width={25}
                  height={25}
                  className="social-icon"
              />
            </Link>
          </div>
        </div>
        <div className="second">
          <h2>MENU</h2>
          <Link href="/">Home</Link>
          <Link href="/about-us">About</Link>
          <Link href="/careers">Careers</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div className="second">
          <h2>GAMES</h2>
          <Link href="/games/sillysuspects">SillySuspects</Link>
          <a
              href="https://www.canva.com/design/DAGUB8zpBog/Fkws_U-b2SYgafYY83WDtw/view?utm_content=DAGUB8zpBog&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h725febeff0"
              target="_blank"
              rel="noopener noreferrer"
          >
            SillySuspects Brand Kit
          </a>
          <Link href="/games/orbital">Orbital</Link>
        </div>
        <div className="third">
          <h2>COMPANY</h2>
          <a
              href="https://www.canva.com/design/DAGPexES0B4/1FuckhS-AlMfm6BloLGDXA/view?utm_content=DAGPexES0B4&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h71bdda4228"
              target="_blank"
              rel="noopener noreferrer"
          >
            Classy Games Studios Brand Kit
          </a>
          <Link href="/">Privacy Policy</Link>
          <Link href="/">Terms of Service</Link>
        </div>
        <div className="fourth">
          <h2>CONTACT</h2>
          <div className="btn-cnt">
            <Link href="/contact" className="email-container">
              <FaEnvelope size={25} className="cnt-icon" />
              <div className="cnt">
                <div className="title">Contact Us</div>
                <div className="email">info@classygamesstudios.com</div>
                <div className="email">jointhecrew@classygamesstudios.com</div>
              </div>
            </Link>

            <Link
                href="https://www.classygamesstudios.com/about-us"
                target="_blank"
                className="location-container"
            >
              <FaMapMarkerAlt size={25} className="cnt-icon"/>
              <div className="cnt">
                <div className="title">Location:</div>
                <div className="location">
                  Belfast, Northern Ireland<br></br> Riyadh, Saudi Arabia
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="lower-footer">
        <div className="l">
          <span>© 2025 </span>Classy Games Studios
        </div>
      </div>
    </footer>
  );
}
