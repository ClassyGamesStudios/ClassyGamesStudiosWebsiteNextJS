"use client";
import React, { useEffect } from "react";
import "@/styles/privacypolicy.css"; // Make sure this points to your privacy CSS
import { gsap } from "gsap";

export default function PrivacyPolicy() {
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
      <div className="privacy-body">

        {/* ====================== BANNER ====================== */}
        <main className="privacy-page">
          <div className="privacy-banner">
            <div className="privacy-text-cnt fadein">
              <div className="upper-txt">Our Commitment</div>
              <div className="lower-txt">Privacy Policy</div>
            </div>
          </div>
          <Wave />
        </main>

        {/* ====================== SUMMARY (DARK) ====================== */}
        <main className="dark-section">
          <div className="dark-content fadein">
            <h1 className="dark-title">Summary of This Privacy Policy</h1>
            <p className="dark-paragraph">
              This summary provides a simple explanation of our Privacy Policy.
              The full legal text below this summary is the version that applies.
              <br /><br />
              • What we collect: Technical data, gameplay activity, device information,
              and voluntary information such as feedback or messages you choose to send.
              <br /><br />
              • How we use your information: To operate, maintain, and improve the
              Classy Games Services.
              <br /><br />
              • Analytics: Our games may use Unity Analytics to understand performance
              and usage.
              <br /><br />
              • Payments: All purchases are processed by third‑party platforms.
              We never receive or store payment information.
              <br /><br />
              • User content: You may choose to share voluntary feedback, surveys,
              playtest input, or general submissions.
              <br /><br />
              • Your rights: Depending on your region, you may request access to or
              deletion of your personal information.
              <br /><br />
              • Data protection: We store your data securely where possible and only
              for as long as necessary.
            </p>
          </div>
          <Wave />
        </main>

        {/* ====================== SECTION 1 (LIGHT) ====================== */}
        <main className="light-section">
          <div className="light-content fadein">
            <h1 className="light-title">Who We Are And What This Policy Covers</h1>
            <p className="light-paragraph">
              This Privacy Policy explains how Classy Games Studios Holdings Limited
              collects, stores, and protects personal information when you use the
              Classy Games Services. We follow applicable privacy laws such as GDPR
              and ADGM regulations.
              <br /><br />
              We do not knowingly collect personal information from users under the
              age of 13 without parental involvement.
            </p>
          </div>
          <Wave />
        </main>

        {/* ====================== SECTION 2 (DARK) ====================== */}
        <main className="dark-section">
          <div className="dark-content fadein">
            <h1 className="dark-title">What Information We Collect</h1>
            <p className="dark-paragraph">
              We may collect technical data such as device details, network connection,
              gameplay activity, crash logs, and performance metrics.
              <br /><br />
              If you contact us or submit voluntary forms, we may collect your
              communication details and any information you choose to provide.
              Unity Analytics may also collect performance and usage data.
              <br /><br />
              We do not store or process payment details. All purchases are handled
              entirely by third‑party storefronts.
            </p>
          </div>
          <Wave />
        </main>

        {/* ====================== SECTION 3 (LIGHT) ====================== */}
        <main className="light-section">
          <div className="light-content fadein">
            <h1 className="light-title">How Your Information Is Used</h1>
            <p className="light-paragraph">
              We use your information to operate, maintain, and improve the Classy
              Games Services, ensure gameplay functionality, and provide support.
              <br /><br />
              Information may also be used to comply with legal obligations or to
              communicate with you when you provide consent.
              <br /><br />
              Trusted service partners may help us operate our services, and they are
              required to protect your information.
            </p>
          </div>
          <Wave />
        </main>

        {/* ====================== SECTION 4 (DARK) ====================== */}
        <main className="dark-section">
          <div className="dark-content fadein">
            <h1 className="dark-title">User Content And External Sharing</h1>
            <p className="dark-paragraph">
              You may choose to share voluntary content such as feedback, surveys,
              or playtest submissions. We may store and use such content according to
              this Privacy Policy.
              <br /><br />
              If you share information publicly or on external platforms, it may become
              visible to others. We are not responsible for data you choose to make public
              or for how external platforms handle your information.
            </p>
          </div>
          <Wave />
        </main>

        {/* ====================== SECTION 5 (LIGHT) ====================== */}
        <main className="light-section">
          <div className="light-content fadein">
            <h1 className="light-title">Data Retention</h1>
            <p className="light-paragraph">
              We retain your information only as long as necessary for the purposes
              for which it was collected, or as required by law.
              <br /><br />
              If you withdraw your consent or request deletion, some features or
              services may no longer operate correctly.
            </p>
          </div>
          <Wave />
        </main>

        {/* ====================== SECTION 6 (DARK) ====================== */}
        <main className="dark-section">
          <div className="dark-content fadein">
            <h1 className="dark-title">Your Rights</h1>
            <p className="dark-paragraph">
              Depending on your region, you may have rights to access, correct, or
              request deletion of your personal information. You may also request
              limitations on certain processing.
              <br /><br />
              We will make reasonable efforts to respond to such requests where
              legally permitted.
            </p>
          </div>
          <Wave />
        </main>

        {/* ====================== SECTION 7 (LIGHT) ====================== */}
        <main className="light-section">
          <div className="light-content fadein">
            <h1 className="light-title">Changes And Contact</h1>
            <p className="light-paragraph">
              We may update this Privacy Policy from time to time. Updates will be
              posted with a revised Last Updated date.
              <br /><br />
              For privacy related questions or requests, contact us at:
              <strong> noreply@classygames.gg </strong>
            </p>
          </div>
        </main>
        <Wave />
      </div>
  );
}