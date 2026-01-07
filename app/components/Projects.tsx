"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeader from "./ui/SectionHeader";
import { projectsData } from "../data/projects";
import ProjectCard from "./ui/ProjectCard";
import TiltCard from "./ui/TiltCard";

export default function Projects() {
  const [view, setView] = useState<"carousel" | "grid">("carousel");
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (view !== "carousel" || isHovered) return;

    const interval = setInterval(() => {
      nextProject();
    }, 3000);

    return () => clearInterval(interval);
  }, [view, isHovered, activeIndex]);

  // Handle mobile view resizing
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setView("grid");
      }
    };

    // Initial check
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextProject = () => {
    setActiveIndex((prev) => (prev + 1) % projectsData.length);
  };

  const prevProject = () => {
    setActiveIndex(
      (prev) => (prev - 1 + projectsData.length) % projectsData.length
    );
  };

  return (
    <section
      className="projects z-3 min-h-screen relative overflow-hidden pt-24 pb-20 px-5 bg-transparent"
      id="projects"
    >
      <SectionHeader
        title="Projects"
        quote="Crafting meaningful digital experiences starts with a single spark and the relentless drive to begin."
      />

      {/* View Toggle */}
      <div className="view-toggle-container hidden md:flex justify-center gap-4 mb-6">
        <button
          onClick={() => setView("carousel")}
          aria-label="Switch to carousel view"
          className={`view-toggle-btn flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 border border-[rgba(var(--primary-rgb),0.3)] backdrop-blur-[20px] cursor-pointer ${
            view === "carousel"
              ? "active bg-[rgba(var(--primary-rgb),0.4)] border-(--primary) shadow-[0_10px_35px_rgba(var(--primary-rgb),0.6)]"
              : "bg-[rgba(26,15,62,0.3)] hover:bg-[rgba(var(--primary-rgb),0.3)] hover:border-(--primary)"
          }`}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className={
              view === "carousel"
                ? "stroke-(--primary) drop-shadow-[0_0_5px_var(--primary)]"
                : "stroke-(--secondary)"
            }
          >
            <rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect>
            <polyline points="17 2 12 7 7 2"></polyline>
          </svg>
          <span>Carousel View</span>
        </button>
        <button
          onClick={() => setView("grid")}
          aria-label="Switch to grid view"
          className={`view-toggle-btn flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 border border-[rgba(var(--primary-rgb),0.3)] backdrop-blur-[20px] cursor-pointer ${
            view === "grid"
              ? "active bg-[rgba(var(--primary-rgb),0.4)] border-(--primary) shadow-[0_10px_35px_rgba(var(--primary-rgb),0.6)]"
              : "bg-[rgba(26,15,62,0.3)] hover:bg-[rgba(var(--primary-rgb),0.3)] hover:border-(--primary)"
          }`}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className={
              view === "grid"
                ? "stroke-(--primary) drop-shadow-[0_0_5px_var(--primary)]"
                : "stroke-(--secondary)"
            }
          >
            <rect x="3" y="3" width="7" height="7"></rect>
            <rect x="14" y="3" width="7" height="7"></rect>
            <rect x="14" y="14" width="7" height="7"></rect>
            <rect x="3" y="14" width="7" height="7"></rect>
          </svg>
          <span>Grid View</span>
        </button>
      </div>

      {view === "carousel" ? (
        <div
          className="carousel-container relative w-full max-w-[1400px] mx-auto px-5 py-5 pb-20 perspective-2000"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="project-count-container text-center mb-10">
            <span className="text-base text-white/80 font-semibold px-6 py-2.5 bg-[rgba(26,15,62,0.4)] backdrop-blur-[20px] border border-[rgba(var(--primary-rgb),0.3)] rounded-full shadow-[0_5px_20px_rgba(var(--primary-rgb),0.3)]">
              Showing project {activeIndex + 1} of {projectsData.length}
            </span>
          </div>

          <div className="carousel-wrapper relative w-full h-[500px] flex items-center justify-center perspective-1000">
            <div className="carousel-track relative w-full h-full flex items-center justify-center preserve-3d">
              <AnimatePresence initial={false} mode="popLayout">
                {projectsData.map((project, idx) => {
                  // Exact logic from Astro Portfolio's JS
                  const totalProjects = projectsData.length;
                  const angleStep = 360 / totalProjects;
                  const radius = 600; // Config from Astro

                  // Calculate relative angle distance
                  let offset = idx - activeIndex;
                  // Handle wrapping for shortest path
                  if (offset > totalProjects / 2) offset -= totalProjects;
                  if (offset < -totalProjects / 2) offset += totalProjects;

                  const angle = offset * angleStep * (Math.PI / 180);
                  const cosAngle = Math.cos(angle);
                  const sinAngle = Math.sin(angle);

                  // 3D Visual Calculations matching logic:
                  // x = sin(angle) * radius
                  // z = cos(angle) * radius - radius (to keep front at 0, others negative)
                  const x = sinAngle * radius;
                  const z = cosAngle * radius - radius;

                  // Scale & Opacity ranges: min 0.6->1.0, 0.3->1.0
                  const scale = 0.6 + cosAngle * (1.0 - 0.6);
                  const opacity = 0.3 + cosAngle * (1.0 - 0.3);

                  // Determine z-index based on scale (closest = highest)
                  const zIndex = Math.round(scale * 100);

                  const isActive = idx === activeIndex;

                  // Only render if it's somewhat visible (front-facing hemisphere) to save resources,
                  // OR render all if the math handles z-index well. Astro renders all "items".
                  // Let's render all to ensure exact smoothness of items entering from back.
                  // But opacity logic naturally hides back items.

                  return (
                    <motion.div
                      key={idx}
                      layout
                      animate={{
                        x: x, // TranslateX
                        z: z, // TranslateZ (requires perspective on parent)
                        scale: scale,
                        opacity: opacity,
                        zIndex: zIndex,
                        rotateY: 0, // Astro didn't rotate Y based on angle in the snippet, but let's keep it flat or follow exact snippet. Snippet only changed transform X/Z/Scale.
                      }}
                      transition={{
                        duration: 0.8, // Matched Astro's 0.8s transition
                        ease: [0.68, -0.55, 0.265, 1.55], // Matched Astro's cubic-bezier
                      }}
                      className={`carousel-item absolute w-[340px] sm:w-[380px] origin-center ${
                        isActive ? "pointer-events-auto" : "pointer-events-auto"
                      }`}
                      style={{
                        transformStyle: "preserve-3d", // Important for z translation
                      }}
                    >
                      <ProjectCard project={project} isActive={isActive} />
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          </div>

          {/* Controls */}
          <button
            onClick={prevProject}
            aria-label="Show previous project"
            className="absolute top-1/2 left-5 -translate-y-1/2 w-[60px] h-[60px] rounded-full bg-[rgba(26,15,62,0.8)] backdrop-blur-[25px] border-2 border-[rgba(var(--primary-rgb),0.5)] flex items-center justify-center text-white hover:scale-115 hover:bg-[rgba(var(--primary-rgb),0.4)] transition-all z-120 shadow-[0_10px_40px_rgba(var(--primary-rgb),0.4)] cursor-pointer focus-visible:outline-2 focus-visible:outline-(--primary)"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
          <button
            onClick={nextProject}
            aria-label="Show next project"
            className="absolute top-1/2 right-5 -translate-y-1/2 w-[60px] h-[60px] rounded-full bg-[rgba(26,15,62,0.8)] backdrop-blur-[25px] border-2 border-[rgba(var(--primary-rgb),0.5)] flex items-center justify-center text-white hover:scale-115 hover:bg-[rgba(var(--primary-rgb),0.4)] transition-all z-120 shadow-[0_10px_40px_rgba(var(--primary-rgb),0.4)] cursor-pointer focus-visible:outline-2 focus-visible:outline-(--primary)"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>

          {/* Indicators */}
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-3 z-20">
            {projectsData.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                aria-label={`Go to project ${idx + 1}`}
                className={`w-3 h-3 rounded-full border-2 border-white/50 transition-all duration-300 focus-visible:outline-2 focus-visible:outline-(--primary) ${
                  activeIndex === idx
                    ? "bg-(--gradient2) w-10 border-(--primary) shadow-[0_0_20px_rgba(var(--primary-rgb),0.8)] rounded-[10px]"
                    : "bg-white/30 hover:bg-[rgba(var(--primary-rgb),0.5)]"
                }`}
              />
            ))}
          </div>
        </div>
      ) : (
        <div className="grid-container w-full max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {projectsData.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <TiltCard>
                <ProjectCard project={project} isActive={true} />
              </TiltCard>
            </motion.div>
          ))}
        </div>
      )}
      <style jsx>{`
        /* Custom carousel animations or specific project styles can stay here if not globalized */
      `}</style>
    </section>
  );
}
