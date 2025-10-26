"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import "@/styles/about-us.css";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import teamImage from "../../public/images/Banner.png";

gsap.registerPlugin(ScrollTrigger);

export default function AboutUs() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(
        ".photo-paragraph, .about-text-cnt, .photo-paragraph, .team-photo, .under-text",
        { y: 100, opacity: 0 }
      );
      gsap.to(
        ".photo-paragraph, .about-text-cnt, .photo-paragraph, .team-photo, .under-text",
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

  const teamMembers = [
    {
      name: "Jamie McClenaghan",
      position: "Founder & CEO",
      linkedin: "https://www.linkedin.com/in/jamiemcclenaghan/",
      photo: "/assets/TeamPhotos/teamMemberPhoto1.webp",
      video: "/assets/TeamVideos/teamMemberVideo1.mp4",
    },
    // {
    //   name: "Mayara Bastos",
    //   position: "Marketing & Community ",
    //   linkedin: "https://www.linkedin.com/in/mayara-bastos/",
    //   photo: "/assets/TeamPhotos/teamMemberPhoto2.webp",
    //   video: "/assets/TeamVideos/teamMemberVideo2.mp4",
    // },
    {
      name: "Moazer Ibrahim",
      position: "3D Artist",
      linkedin: "https://www.linkedin.com/in/moazer-ibrahim/",
      photo: "/assets/TeamPhotos/teamMemberPhoto3.webp",
      video: "/assets/TeamVideos/teamMemberVideo3.mp4",
    },
    {
      name: "Leonardo Estigarribia",
      position: "Junior Game Developer",
      linkedin: "https://www.linkedin.com/in/leonardo-estigarribia/",
      photo: "/assets/TeamPhotos/teamMemberPhoto4.webp",
      video: "/assets/TeamVideos/teamMemberVideo4.mp4",
    },
    {
      name: "Dana Taha",
      position: "Junior Game Developer",
      linkedin: "https://www.linkedin.com/in/dana-taha-5a577b24b/",
      photo: "/assets/TeamPhotos/teamMemberPhoto5.webp",
      video: "/assets/TeamVideos/teamMemberVideo5.mp4",
    },
    {
      name: "Timothy Bowers",
      position: "Game Design Intern",
      linkedin: "https://www.linkedin.com/in/timothy-bowers-a146461bb/",
      photo: "/assets/TeamPhotos/teamMemberPhoto6.webp",
      video: "/assets/TeamVideos/teamMemberVideo6.mp4",
    },
    {
      name: "Dewi Occa",
      position: "Business Operations Asst",
      linkedin: "https://www.linkedin.com/in/dewi-occa-4b2764336/",
      photo: "/assets/TeamPhotos/teamMemberPhoto7.webp",
      video: "/assets/TeamVideos/teamMemberVideo7.mp4",
    },
    {
      name: "Mayyar Alsheikh",
      position: "Cloud & Network Engineer",
      linkedin: "https://www.linkedin.com/in/mayyar-alsheikh-a1961724b/",
      photo: "/assets/TeamPhotos/teamMemberPhoto8.webp",
      video: "/assets/TeamVideos/teamMemberVideo8.mp4",
    },
    {
      name: "Fraser Harris",
      position: "Audio Engineer",
      linkedin: "https://www.linkedin.com/in/fraser-harris-fth/",
      photo: "/assets/TeamPhotos/teamMemberPhoto9.webp",
      video: "/assets/TeamVideos/teamMemberVideo9.mp4",
    },
    {
      name: "Cameron Green",
      position: "2D Artist",
      linkedin: "https://www.linkedin.com/in/cameron-green23/",
      photo: "/assets/TeamPhotos/teamMemberPhoto10.webp",
      video: "/assets/TeamVideos/teamMemberVideo10.mp4",
    },
    {
      name: "Emile Beaver",
      position: "Audio Engineer",
      linkedin: "https://www.linkedin.com/in/emile-beaver-339b21294/",
      photo: "/assets/TeamPhotos/teamMemberPhoto11.webp",
      video: "/assets/TeamVideos/teamMemberVideo11.mp4",
    },
  ];

  return (
    <div className="body">
      <main className="about-page">
        <div className="about-banner">
          <div className="about-text-cnt">
            <div className="upper-txt">Who we are</div>
            <div className="lower-txt">About Us</div>
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
          <h1 className="under-title">OUR STORY</h1>
          <p className="under-paragraph">
            Classy Games Studios was born during the early days of COVID-19,
            when people were isolated and looking for ways to connect. We
            started by making small, free games to help friends and strangers
            play together, share moments, and feel a little less alone.
            <br />
            <br />
            That spirit stayed with us.
            <br />
            <br />
            Our founder, Jamie McClenaghan, started Classy Games Studios with a
            simple belief: games should bring back that feeling of being a kid —
            curious, playful, and fully in the moment. Even as busy adults, we
            still need space for imagination and joy.
            <br />
            <br />
            At Classy Games Studios, we build games that do just that. No bloat.
            No noise. Just thoughtful, polished experiences designed to spark
            joy.
          </p>
        </div>
        {/*<Image*/}
        {/*    src={teamImage}*/}
        {/*    alt="Logo"*/}
        {/*    width={1000}*/}
        {/*    height={300}*/}
        {/*    className="team-photo"*/}
        {/*/>*/}
        <div className="under-text">
          <h1 className="under-title">OUR VISION & VALUES</h1>
          <p className="under-paragraph">
            At Classy Games Studios, our vision is to create engaging games that
            ignite your imagination and bring out your inner child.
            <br />
            <br />
            We believe great games go beyond fun. They spark curiosity, invite
            creativity, and leave lasting impressions.
            <br />
            <br />
            We&apos;re united by clear communication, creative freedom, and a
            deep respect for the player experience. We foster a culture of
            ownership where every team member is trusted to take initiative and
            contribute meaningfully. We value honesty and openness in how we
            work, ensuring that every voice is heard.
            <br />
            <br />
            Creative joy sits at the heart of everything we do. Whether
            we&apos;re designing a mechanic, writing dialogue, or play-testing a
            level, we approach it with a sense of play and craftsmanship. Our
            games are made to delight through polished design, unexpected
            moments, and a player-first mindset that treats players as
            co-creators in the experience.
            <br />
            <br />
            Above all, we&apos;re building a studio culture that is thoughtful,
            distinct, and deeply human. It&apos;s a culture that supports our
            team, empowers our ideas, and delivers games that are just as fun to
            make as they are to play.
          </p>
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
      </main>

      <main className="team-page">
        <h1 className="our-team">Our Team</h1>
        <p className="members-paragraph">
          We&apos;re a globally distributed team with a shared love for crafting
          games that stand out.
          <br />
          <br />
          From design to development, we each bring our own skills, quirks, and
          creative perspective—but it&apos;s the way we work together that makes
          it work.
          <br />
          <br />
          We value trust, autonomy, and collaboration, and we&apos;re always
          learning, experimenting, and finding new ways to build something
          special.
        </p>

        <div className="team-photo-cnt">
          {teamMembers.map((member, i) => (
            <div className="card-wrapper" key={i}>
              <div className="card">
                <div className="card-front">
                  <div className="card-img-container">
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="card-img"
                    />
                  </div>
                  <div className="card-info">
                    <Link
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="icon">
                        <Image
                          src="/assets/SocialIcons/linkedin.png"
                          alt="LinkedIn"
                          width={25}
                          height={25}
                          className="social-icon"
                        />
                      </div>
                    </Link>
                    <h3 className="card-name">{member.name}</h3>
                    <p className="card-title">{member.position}</p>
                  </div>
                </div>

                <div className="card-back">
                  <div className="video-container">
                    <div className="card-video">
                      <video
                        src={member.video}
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="auto"
                        className="card-video"
                      />
                    </div>
                  </div>
                  <div className="card-info">
                    <Link
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="icon">
                        <Image
                          src="/assets/SocialIcons/linkedin.png"
                          alt="LinkedIn"
                          width={25}
                          height={25}
                          className="social-icon"
                        />
                      </div>
                    </Link>
                    <h3 className="card-name">{member.name}</h3>
                    <p className="card-title">{member.position}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
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
        <div className="under-text">
          <h1 className="under-title">OUR AWARDS</h1>
          <p className="under-paragraph">
            We make games because we love them, and it&apos;s nice when others
            notice.
            <br />
            <br />
            These awards are a nod to the work our team puts in every day to
            build fun, imaginative experiences.
          </p>
          <div className="awards-row">
            <a
              href="https://www.menagamesawards.com/the-winners-of-2025/"
              target="_blank"
              rel="noopener noreferrer"
              className="award-img"
            >
              <img
                src="/assets/Awards/MENAGameAwardFinalist_Award.webp"
                alt="MENAGameAwardFinalist2025Award"
              />
            </a>
            <a
              href="https://meamarkets.digital/winners/classy-games-studios/"
              target="_blank"
              rel="noopener noreferrer"
              className="award-img"
            >
              <img
                src="/assets/Awards/UAEBusinessAwards_Award.webp"
                alt="UAEBusinessAward2025"
              />
            </a>
            <a
              href="https://corporatelivewireglobalawards.com/global-awards/"
              target="_blank"
              rel="noopener noreferrer"
              className="award-img"
            >
              <img
                src="/assets/Awards/CorporateLiveWire_Award.webp"
                alt="CorporateLiveWire2025Award"
              />
            </a>
            <a
              href="https://gamedevheroes.co"
              target="_blank"
              rel="noopener noreferrer"
              className="award-img"
            >
              <img
                src="/assets/Awards/GameDevHeroesAwards_Award.webp"
                alt="GameDevHeroes2025Award"
              />
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
