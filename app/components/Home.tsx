"use client";

import Image from "next/image";
import Link from "next/link";
import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";
import { useMagnetic } from "../hooks/useMagnetic";

export default function Home() {
  const resumeBtn = useMagnetic(0.3);
  const contactBtn = useMagnetic(0.3);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, x: 20, rotateY: 15 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      rotateY: 0,
      transition: {
        duration: 1.2,
        ease: "easeOut" as const,
        delay: 0.8,
      },
    },
  };

  return (
    <div className="home-wrapper min-h-screen h-screen w-full relative bg-(--main1) overflow-hidden flex items-center justify-center">
      {/* Dynamic Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] bg-purple-500/20 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-[20%] right-[-10%] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] bg-blue-500/20 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-10%] left-[20%] w-[350px] h-[350px] lg:w-[600px] lg:h-[600px] bg-pink-500/20 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <section
        className="home w-full h-full flex items-center justify-center text-white relative z-10"
        id="home"
      >
        <div className="max-width w-full flex flex-col lg:flex-row text-center lg:text-left items-center justify-center lg:justify-between gap-10 lg:gap-0 px-4 sm:px-8 md:px-12 lg:px-20 py-20 md:pt-36 lg:py-0 h-full lg:h-auto">
          <motion.div
            className="home-text w-full lg:max-w-[650px] relative z-10 flex flex-col justify-center items-center lg:items-start"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              variants={itemVariants}
              className="font-bold mb-2 tracking-widest text-transparent bg-clip-text"
              style={{
                fontSize: "clamp(18px, 4vw, 30px)",
                textTransform: "uppercase",
                backgroundImage: "var(--gradient3)",
              }}
            >
              Hello, I&apos;m
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="font-extrabold mb-3 lg:mb-4 tracking-tighter text-white leading-tight"
              style={{ fontSize: "clamp(32px, 7vw, 72px)" }}
            >
              Moniruzzaman
              <br />
              <span
                className="text-transparent bg-clip-text"
                style={{ backgroundImage: "var(--gradient2)" }}
              >
                Piyash
              </span>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="font-medium tracking-wide mb-6 lg:mb-8 text-gray-300 h-[30px] lg:h-[40px]"
              style={{
                fontSize: "clamp(14px, 3.5vw, 22px)",
              }}
            >
              I build{" "}
              <span className="font-bold" style={{ color: "var(--primary)" }}>
                <ReactTyped
                  strings={[
                    "scalable web applications.",
                    "immersive user experiences.",
                    "modern digital solutions.",
                  ]}
                  typeSpeed={60}
                  backSpeed={40}
                  backDelay={2000}
                  loop
                  cursorChar="|"
                  showCursor
                />
              </span>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="home-buttons flex gap-3 sm:gap-5 flex-wrap justify-center lg:justify-start mt-5"
            >
              <div ref={resumeBtn.ref} style={resumeBtn.style}>
                <Link
                  href="/assets/Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="btn-cool px-6 sm:px-8 py-3 sm:py-3.5 text-sm sm:text-base font-bold text-white rounded-full flex items-center gap-2 sm:gap-3 cursor-pointer overflow-hidden">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-4 h-4 sm:w-5 sm:h-5"
                    >
                      <path d="M12 16L7 11H10.5V4H13.5V11H17L12 16ZM4 18H20V20H4V18Z" />
                    </svg>
                    <span>RESUME</span>
                  </button>
                </Link>
              </div>

              <div ref={contactBtn.ref} style={contactBtn.style}>
                <Link
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.getElementById("contact");
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  <button className="btn-cool px-6 sm:px-8 py-3 sm:py-3.5 text-sm sm:text-base font-bold text-white rounded-full flex items-center gap-2 sm:gap-3 cursor-pointer overflow-hidden">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-4 h-4 sm:w-5 sm:h-5"
                    >
                      <path d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" />
                    </svg>
                    <span>CONTACT ME</span>
                  </button>
                </Link>
              </div>
            </motion.div>
          </motion.div>

          {/* Hero Image Section */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="home-image relative w-full lg:w-1/2 flex justify-center lg:justify-end"
          >
            <div className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px]">
              {/* Background Glow */}
              <div className="absolute inset-0 bg-linear-to-tr from-purple-600/40 to-pink-600/40 rounded-full blur-[60px] lg:blur-[80px] animate-pulse"></div>

              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{
                  repeat: Infinity,
                  duration: 6,
                  ease: "easeInOut",
                }}
                className="relative z-10 w-full h-full"
              >
                <Image
                  src="/assets/images/home_hero_image.png"
                  alt="3D Developer Avatar"
                  fill
                  priority
                  draggable={false}
                  className="object-contain drop-shadow-2xl"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </motion.div>

              {/* Floating Elements - Refined */}
              <motion.div
                animate={{ y: [10, -10, 10], rotate: [0, 5, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 5,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
                className="absolute top-4 sm:top-10 right-4 sm:right-10 z-20 bg-white/10 backdrop-blur-md p-2 sm:p-3 rounded-2xl border border-white/20 shadow-xl"
              >
                <span className="text-xl sm:text-3xl">🚀</span>
              </motion.div>
              <motion.div
                animate={{ y: [-15, 5, -15], rotate: [0, -5, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 7,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute bottom-10 sm:bottom-20 left-4 sm:left-10 z-20 bg-white/10 backdrop-blur-md p-2 sm:p-3 rounded-2xl border border-white/20 shadow-xl"
              >
                <span className="text-xl sm:text-3xl">💻</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="hidden lg:flex absolute bottom-10 left-1/2 transform -translate-x-1/2 flex-col items-center gap-2 opacity-70 hover:opacity-100 transition-opacity duration-300">
          <div className="w-[30px] h-[50px] border-2 border-white rounded-full flex justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
                ease: "easeInOut",
              }}
              className="w-1.5 h-1.5 bg-white rounded-full"
            />
          </div>
          <span className="text-xs tracking-widest uppercase">Scroll</span>
        </div>
      </section>
      <style jsx>{`
        .btn-cool {
          background: rgba(var(--primary-rgb), 0.1);
          box-shadow: 0 10px 30px rgba(var(--primary-rgb), 0.2),
            inset 0 1px 0 rgba(255, 255, 255, 0.2);
          border: 1px solid rgba(var(--primary-rgb), 0.3);
          color: white;
          transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1);
          position: relative;
          z-index: 10;
          backdrop-filter: blur(10px);
        }

        .btn-cool::before {
          content: "";
          position: absolute;
          inset: 0;
          transform: scale(0);
          transition: transform 0.6s cubic-bezier(0.175, 0.885, 0.32, 1);
          z-index: -1;
          border-radius: inherit;
          background: var(--gradient2);
        }

        .btn-cool:hover::before {
          transform: scale(1);
        }

        .btn-cool::after {
          content: "";
          position: absolute;
          top: -100%;
          left: -100%;
          width: 50%;
          height: 300%;
          background: linear-gradient(
            to right,
            transparent,
            rgba(255, 255, 255, 0.4),
            transparent
          );
          transform: rotate(45deg);
          transition: all 0s;
          pointer-events: none;
          z-index: 1;
        }

        .btn-cool:hover::after {
          left: 150%;
          transition: all 1s ease;
        }

        .btn-cool:hover {
          border-color: rgba(255, 255, 255, 0.5);
          box-shadow: 0 15px 40px rgba(var(--primary-rgb), 0.5);
          transform: translateY(-2px);
        }

        .btn-cool:active {
          transform: scale(0.95);
        }
      `}</style>
    </div>
  );
}
