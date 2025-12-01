"use client";
import React, { useEffect } from "react";
import "@/styles/termsofservice.css";
import { gsap } from "gsap";

export default function TermsOfService() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(".fadein", { y: 40, opacity: 0 });
      gsap.to(".fadein", {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.15,
      });
    });

    return () => ctx.revert();
  }, []);

  const Wave = () => (
      <svg
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          fill="var(--classyBlack)"
          viewBox="0 0 1000 35"
      >
        <path d="M1000 5S822.877 3.636 700 3.93c-18.088.043-36.002 10.945-51 11.07-21.081.175-37.54-10.382-49-10-20.98.7-33.333 17.5-50 15S516.667 0 500 0s-33.333 17.5-50 20-29.02-14.3-50-15c-11.645-.388-29.453 10.167-51 9.992-15.016-.122-30.925-11.022-49-11.064C176.964 3.644 0 5 0 5v30h1000V5z" />
      </svg>
  );

  return (
      <div className="tos-body">

        {/* ------------------------------- BANNER ------------------------------- */}
        <main className="tos-page">
          <div className="tos-banner">
            <div className="tos-text-cnt fadein">
              <div className="upper-txt">Our Commitment</div>
              <div className="lower-txt">Terms of Service</div>
            </div>
          </div>
          <Wave />
        </main>

        {/* ------------------------------- SECTION 0: SUMMARY (DARK) ------------------------------- */}
        <main className="dark-section">
          <div className="dark-content fadein">
            <h1 className="dark-title">Summary of These Terms of Service</h1>
            <p className="dark-paragraph">
              This summary provides a simple and easy to understand overview of the Terms of Service.
              It is only a helpful guide. The full legal text below is the version that applies.
              <br /><br />
              • Fair and safe usage
              You agree not to break the law, harm players, cheat, exploit, or disrupt our services.
              <br /><br />
              • Respect for our games and content
              All content we create belongs to Classy Games. Do not copy, reverse engineer, or misuse it.
              <br /><br />
              • No modding or tampering
              Our games do not support modding and modifying game files is not allowed.
              <br /><br />
              • Early access may change
              Pre release versions may contain bugs, resets, missing features, or changes.
              <br /><br />
              • Be kind in our community
              Harassment, hate, impersonation, and abusive behaviour are not permitted.
              <br /><br />
              • Third party platforms apply
              Purchases, refunds, and accounts are handled by external platforms such as Steam.
              <br /><br />
              • Data and feedback
              If you send us feedback or user generated content, we may use it to improve our games.
              <br /><br />
              • Legal protections
              Our services are provided &quot;as is&quot; and we are not responsible for indirect damages.
              We always aim to offer a positive and safe experience.
              <br /><br />
              You can read the full Terms below for complete details.
            </p>
          </div>
          <Wave />
        </main>

        {/* ------------------------------- SECTION 1 (LIGHT) ------------------------------- */}
        <main className="light-section">
          <div className="light-content fadein">
            <h1 className="light-title">About This Agreement</h1>
            <p className="light-paragraph">
              This Terms of Service Agreement is a legally binding contract between you and
              Classy Games Studios Holdings Limited. Classy Games is established in the Abu Dhabi
              Global Market and follows regulations based on English common law.
              <br /><br />
              This Agreement governs all Classy Games Services including games, websites,
              community platforms, and related features.
              <br /><br />
              By using our services, you agree to this Agreement. If you do not agree, you must
              stop using the services. We may update this Agreement and changes take effect
              when posted.
            </p>
          </div>
          <Wave />
        </main>

        {/* ------------------------------- SECTION 2 (DARK) ------------------------------- */}
        <main className="dark-section">
          <div className="dark-content fadein">
            <h1 className="dark-title">Using the Classy Games Services</h1>
            <p className="dark-paragraph">
              You receive a limited, personal, non exclusive, revocable licence to use the
              Classy Games Services for personal enjoyment.
              <br /><br />
              You must be at least 13 years old. Purchases and refunds are controlled by
              third party platforms such as Steam.
              <br /><br />
              We may update or modify the services at any time and older versions may stop
              functioning. We are not responsible for issues related to external platforms
              or services we do not own or operate.
            </p>
          </div>
          <Wave />
        </main>

        {/* ------------------------------- SECTION 3 (LIGHT) ------------------------------- */}
        <main className="light-section">
          <div className="light-content fadein">
            <h1 className="light-title">Early Access, Playtests and Pre Release Versions</h1>
            <p className="light-paragraph">
              Classy Games may offer early builds, alpha or beta versions, test branches,
              or private playtests. These may be unstable and incomplete.
              <br /><br />
              Pre release versions may contain bugs, missing features, or content changes.
              Progress and data may be reset. Access may be removed at any time.
              <br /><br />
              You may not sell, transfer, or leak access to these versions.
            </p>
          </div>
          <Wave />
        </main>

        {/* ------------------------------- SECTION 4 (DARK) ------------------------------- */}
        <main className="dark-section">
          <div className="dark-content fadein">
            <h1 className="dark-title">Rules of Conduct</h1>
            <p className="dark-paragraph">
              You agree not to do the following:
              <br /><br />
              • Use the services for commercial purposes without permission
              • Copy or modify our content
              • Reverse engineer or attempt to extract source code
              • Use cheats, bots, hacks, or automation tools
              • Harass, threaten, impersonate, or abuse others
              • Upload malicious code or damage the service
              <br /><br />
              Violations may result in suspension or permanent removal
              from Classy Games Services and community platforms.
            </p>
          </div>
          <Wave />
        </main>

        {/* ------------------------------- SECTION 5 (LIGHT) ------------------------------- */}
        <main className="light-section">
          <div className="light-content fadein">
            <h1 className="light-title">Intellectual Property Rights</h1>
            <p className="light-paragraph">
              All content provided by Classy Games including visuals, artwork, text, audio,
              code, branding, and designs belongs to Classy Games Studios Holdings Limited
              or is licensed appropriately.
              <br /><br />
              You do not obtain ownership of any content through the use of our services.
            </p>
          </div>
          <Wave />
        </main>

        {/* ------------------------------- SECTION 6 (DARK) ------------------------------- */}
        <main className="dark-section">
          <div className="dark-content fadein">
            <h1 className="dark-title">User Generated Content</h1>
            <p className="dark-paragraph">
              You may create fan content such as artwork, videos, or commentary, provided you
              do not modify game files.
              <br /><br />
              If you submit content directly to Classy Games, you grant us a worldwide,
              royalty free licence to use, modify, and distribute it. If used in our services,
              Classy Games becomes the legal owner of that content.
            </p>
          </div>
          <Wave />
        </main>

        {/* ------------------------------- SECTION 7 (LIGHT) ------------------------------- */}
        <main className="light-section">
          <div className="light-content fadein">
            <h1 className="light-title">Feedback</h1>
            <p className="light-paragraph">
              Any ideas, suggestions, or feedback you provide may be used by Classy Games
              without compensation or obligation.
            </p>
          </div>
          <Wave />
        </main>

        {/* ------------------------------- SECTION 8 (DARK) ------------------------------- */}
        <main className="dark-section">
          <div className="dark-content fadein">
            <h1 className="dark-title">Warranties and Liability</h1>
            <p className="dark-paragraph">
              Classy Games Services are provided &quot;as is&quot; and &quot;as available&quot;.
              No warranties of any kind are provided.
              <br /><br />
              We are not liable for indirect, incidental, or consequential damages including
              loss of data or service interruption.
              <br /><br />
              If liability cannot be excluded, the total amount is limited to what you paid
              directly to Classy Games, which is typically zero because purchases are handled
              by third party platforms.
            </p>
          </div>
          <Wave />
        </main>

        {/* ------------------------------- SECTION 9 (LIGHT) ------------------------------- */}
        <main className="light-section">
          <div className="light-content fadein">
            <h1 className="light-title">Governing Law and Dispute Resolution</h1>
            <p className="light-paragraph">
              This Agreement is governed by the laws and regulations of the Abu Dhabi Global Market.
              English common law principles apply.
              <br /><br />
              Any disputes must be resolved exclusively in the ADGM courts.
            </p>
          </div>
          <Wave />
        </main>

        {/* ------------------------------- SECTION 10 (DARK) ------------------------------- */}
        <main className="dark-section">
          <div className="dark-content fadein">
            <h1 className="dark-title">Termination</h1>
            <p className="dark-paragraph">
              You may stop using our services at any time. Refunds and account management
              must be handled through external storefronts.
              <br /><br />
              We may suspend or terminate access if you violate the Agreement or if we
              discontinue any part of the service.
            </p>
          </div>
          <Wave />
        </main>

        {/* ------------------------------- SECTION 11 (LIGHT) ------------------------------- */}
        <main className="light-section">
          <div className="light-content fadein">
            <h1 className="light-title">Assignment</h1>
            <p className="light-paragraph">
              We may assign this Agreement for business or operational purposes.
              You may not assign your rights or obligations under this Agreement.
            </p>
          </div>
          <Wave />
        </main>

        {/* ------------------------------- SECTION 12 (DARK) ------------------------------- */}
        <main className="dark-section">
          <div className="dark-content fadein">
            <h1 className="dark-title">Miscellaneous</h1>
            <p className="dark-paragraph">
              If any part of this Agreement is invalid, the remainder stays valid.
              <br /><br />
              Not enforcing a term does not waive our rights.
              This Agreement does not create an agency, partnership, or employment relationship.
              <br /><br />
              We may comply with lawful requests from authorities.
            </p>
          </div>
          <Wave />
        </main>

        {/* ------------------------------- SECTION 13 (LIGHT) FINAL SECTION ------------------------------- */}
        <main className="light-section">
          <div className="light-content fadein">
            <h1 className="light-title">Changes And Contact</h1>
            <p className="light-paragraph">
              We may update this Terms of Service from time to time. Updates will be
              posted with a revised Last Updated date.
              <br /><br />
              For terms of service related questions or requests, contact us at:
              <strong> noreply@classygames.gg </strong>
            </p>
          </div>
        </main>

      </div>
  );
}