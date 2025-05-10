'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import '@/styles/games.css'

gsap.registerPlugin(ScrollTrigger)

export default function SillySuspectsPage() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.ss-logo, .ss-page iframe, .ss-page h1', {
        scrollTrigger: {
          trigger: '.ss-logo',
          start: 'top 90%',
        },
        y: 100,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      })

      requestAnimationFrame(() => {
        ScrollTrigger.refresh();
      });

      window.addEventListener('load', ScrollTrigger.refresh);

    });

    return () => {
      ctx.revert();
      window.removeEventListener('load', ScrollTrigger.refresh);
    };
  }, []);

  const upperImages = [...Array(5)].map((_, i) => (
    <Image
      key={`upper-${i}`}
      src={`/images/SillySuspects/upper${i + 1}.png`}
      alt={`Upper character ${i + 1}`}
      width={120}
      height={100}
      className="scroll-logo-ss"
      loading="lazy"
    />
  ))

  const lowerImages = [...Array(5)].map((_, i) => (
    <Image
      key={`lower-${i}`}
      src={`/images/SillySuspects/lower${i + 1}.png`}
      alt={`Lower character ${i + 1}`}
      width={120}
      height={100}
      className="scroll-logo-ss"
      loading="lazy"
    />
  ))

  return (
    <div className="body">
      <Navbar />

      <div className="ss-banner">
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
          width={170}
          height={100}
          className="ss-logo"
          priority
        />

        <h1>The perfect blend of mystery, comedy and chaos</h1>

        <div className="video-container-ss">
          <iframe
            src="https://www.youtube.com/embed/AimxxfwfE24?si=f2rmBc2qRQDRz-U1"
            allowFullScreen
            title="Silly Suspects Trailer"
          ></iframe>
        </div>

        <p>
          In a world overrun by the most ridiculous criminals imaginable – those who put pineapple
          on pizza, wear sunglasses inside, and never replace the toilet roll – chaos reigns
          supreme. In the midst of the mayhem, characters are 'exiting' the world in hilarious
          ways, leaving behind bizarre crime scenes and confused witnesses.
          <br />
          <br />
          Classy Games Studios is proud to present, <strong>SillySuspects</strong> — a hilarious
          first-person detective RPG. Dive headfirst into a dynamically generated world teeming with
          quirky characters, each with their own lives, secrets and motives. Crack the case by
          analysing crime scenes, questioning suspects, and navigating through the unpredictable
          twists and turns of the world.
          <br />
          <br />
          With its perfect blend of humour, intrigue, and endless possibilities, SillySuspects
          promises to turn the traditional murder mystery genre on its head and keep you laughing.
        </p>

        <div className="first-line"></div>

        <div className="downloads">
          <Link href="https://store.steampowered.com/app/3073330/Silly_Suspects/" target="_blank">
            <div className="steam">
              <Image
                src="/assets/webImages/steam.webp"
                alt="Download on Steam"
                width={170}
                height={100}
                className="download-logo"
                loading="lazy"
              />
            </div>
          </Link>

          <Link href="https://classygamesstudios.itch.io/sillysuspects" target="_blank">
            <div className="itch.io">
              <Image
                src="/assets/webImages/itch.webp"
                alt="Download on Itch.io"
                width={170}
                height={100}
                className="download-logo"
                loading="lazy"
              />
            </div>
          </Link>
        </div>

        <div className="second-line"></div>

        <div className="scroller-ss">
          <div className="scroller-track-ss">
            <div className="scroller-content-ss">{upperImages}</div>
            <div className="scroller-content-ss" aria-hidden="true">
              {upperImages}
            </div>
          </div>
        </div>

        <div className="scroller-ss">
          <div className="scroller-track-ss2">
            <div className="scroller-content-ss">{lowerImages}</div>
            <div className="scroller-content-ss" aria-hidden="true">
              {lowerImages}
            </div>
          </div>
        </div>

        <div className="second-line"></div>
      </main>

      <Footer />
    </div>
  )
}
