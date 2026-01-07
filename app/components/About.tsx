"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import SectionHeader from "./ui/SectionHeader";
import SocialLinks from "./ui/SocialLinks";

export default function About() {
  const profileCardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Custom tilt effect
    const element = profileCardRef.current;
    if (!element) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -10;
      const rotateY = ((x - centerX) / centerX) * 10;

      element.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
      element.style.transition = "none";
    };

    const handleMouseLeave = () => {
      element.style.transform =
        "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
      element.style.transition = "transform 0.3s ease-out";
    };

    element.addEventListener("mousemove", handleMouseMove);
    element.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      element.removeEventListener("mousemove", handleMouseMove);
      element.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section
      className="about z-3 min-h-screen relative py-24 px-5 overflow-hidden bg-transparent"
      id="about"
    >
      <SectionHeader
        title="About Me"
        quote="Architecting digital worlds where code meets creativity, driven by a commitment to continuous learning."
      />

      <div className="max-width max-w-full px-4 sm:px-6 md:px-10 lg:px-20 mx-auto">
        <div className="about-content flex flex-col lg:flex-row flex-wrap items-center lg:items-start justify-between gap-8 lg:gap-0">
          {/* Left Column - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="column left w-full sm:w-[70%] md:w-[50%] lg:w-[25%]"
          >
            <div
              ref={profileCardRef}
              className="profile-card relative rounded-[20px] overflow-hidden p-[5px] transition-all duration-500"
              style={{
                background: "rgba(26, 15, 62, 0.3)",
                backdropFilter: "blur(25px)",
              }}
            >
              <div
                className="profile-border absolute inset-[5px] rounded-[16px] z-1"
                style={{
                  background: "rgba(26, 15, 62, 0.8)",
                  backdropFilter: "blur(20px)",
                }}
              ></div>
              <Image
                src="/assets/images/profile.jpg"
                alt="Moniruzzaman Piyash - Portfolio Profile Photo"
                width={334}
                height={334}
                draggable={false}
                className="h-auto w-full object-cover relative z-2 block transition-all duration-400 rounded-[16px] pointer-events-none drop-shadow-[0_0_20px_rgba(var(--primary-rgb),0.6)]"
                style={
                  {
                    // Removed rgb animation
                  }
                }
              />
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <div className="column right w-full lg:w-[55%] text-white">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="topic mb-2"
            >
              <b>
                <span className="text-[20px] sm:text-[22px] md:text-[24px] lg:text-[25px] font-bold gradient-text">
                  Hello there! 👋 Welcome to My Portfolio.
                </span>
              </b>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="topic mb-4 md:mb-6"
            >
              <b>
                <span className="text-[20px] sm:text-[22px] md:text-[24px] lg:text-[25px] font-bold gradient-text">
                  My name is Moniruzzaman Piyash.
                </span>
              </b>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-justify text-sm sm:text-base font-medium leading-relaxed mt-4 md:mt-5 text-white/90 font-lato"
            >
              I&apos;m a recent{" "}
              <span className="highlight font-bold px-1">B.Tech CSE</span>{" "}
              graduate passionate about building{" "}
              <span className="highlight font-bold px-1">
                full-stack applications
              </span>{" "}
              using modern technologies like{" "}
              <span className="highlight font-bold px-1">Next JS</span>,{" "}
              <span className="highlight font-bold px-1">Tailwind CSS</span>,{" "}
              <span className="highlight font-bold px-1">Node JS</span>,{" "}
              <span className="highlight font-bold px-1">Django</span> and{" "}
              <span className="highlight font-bold px-1">PostgreSQL</span>. I
              thrive on creating innovative, user-friendly solutions and am
              eager to contribute my skills to impactful projects.
            </motion.p>

            <div className="social-connect mt-6 md:mt-8 lg:mt-10">
              <motion.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
                className="text-[18px] sm:text-[20px] lg:text-[22px] font-bold mb-4 md:mb-5 inline-block gradient-text"
              >
                Let&apos;s Connect
              </motion.h3>
              <SocialLinks variant="about" />
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .profile-card::before {
          content: "";
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: conic-gradient(
            transparent,
            transparent,
            transparent,
            var(--primary)
          );
          opacity: 0;
          transition: opacity 0.4s ease;
          z-index: 0;
          pointer-events: none;
          animation: rotateBorder 4s linear infinite;
        }
        .profile-card:hover::before {
          opacity: 1;
        }
        @keyframes rotateBorder {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        .highlight {
          background: var(--gradient3);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .gradient-text {
          background: var(--gradient2);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          filter: drop-shadow(0 0 10px rgba(240, 147, 251, 0.3));
        }
      `}</style>
    </section>
  );
}
