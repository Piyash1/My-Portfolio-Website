"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeader from "./ui/SectionHeader";
import { skillsData } from "../data/skills";
import TiltCard from "./ui/TiltCard";
import TechMarquee from "./ui/TechMarquee";

const filters = [
  { id: "all", label: "All Skills", icon: "🌟", shortLabel: "All" },
  { id: "backend", label: "Backend", icon: "⚙️", shortLabel: "Backend" },
  { id: "frontend", label: "Frontend", icon: "☁️", shortLabel: "Frontend" },
  { id: "programming", label: "Programming", icon: "💻", shortLabel: "Code" },
  { id: "tools", label: "Tools", icon: "🛠️", shortLabel: "Tools" },
  { id: "soft-skills", label: "Soft Skills", icon: "🤝", shortLabel: "Soft" },
];

export default function Skills() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredSkills =
    activeFilter === "all"
      ? skillsData
      : skillsData.filter((skill) => skill.category === activeFilter);

  return (
    <section
      className="skills z-3 min-h-screen relative overflow-hidden py-24 px-5 bg-transparent"
      id="skills"
    >
      <SectionHeader
        title="Skills"
        quote="The most vital asset in a developer's toolkit is the perpetual habit of learning new skills."
      />

      {/* Skill Categories Filter */}
      <div className="skill-filter flex justify-center gap-2 sm:gap-3 lg:gap-4 flex-wrap my-6 md:my-8 lg:my-10 mx-auto px-3 sm:px-5 relative z-10">
        {filters.map((filter) => (
          <button
            key={filter.id}
            onClick={() => setActiveFilter(filter.id)}
            aria-pressed={activeFilter === filter.id}
            className={`filter-btn group flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-semibold relative overflow-hidden transition-all duration-400 border border-[rgba(var(--primary-rgb),0.5)] backdrop-blur-[20px] shadow-[0_5px_20px_rgba(59,130,246,0.2)] hover:-translate-y-[3px] hover:scale-105 cursor-pointer ${
              activeFilter === filter.id
                ? "active text-white border-(--primary)"
                : "text-white/80 hover:bg-white/10 hover:border-(--primary)"
            }`}
            style={{
              background:
                activeFilter === filter.id
                  ? "var(--gradient2)"
                  : "rgba(26,15,62,0.3)",
              boxShadow:
                activeFilter === filter.id ? "0 5px 20px var(--primary)" : "",
            }}
          >
            <span
              className={`absolute inset-0 transition-opacity duration-400 -z-10 opacity-0 ${
                activeFilter !== filter.id ? "group-hover:opacity-100" : ""
              }`}
              style={{ background: "var(--gradient2)" }}
            ></span>
            <span className="filter-icon text-base transition-transform duration-300 group-hover:scale-120 group-hover:rotate-12">
              {filter.icon}
            </span>
            <span className="hidden sm:inline">{filter.label}</span>
            <span className="sm:hidden">{filter.shortLabel}</span>
          </button>
        ))}
      </div>

      <motion.div
        key={activeFilter}
        layout
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: {
              staggerChildren: 0.08,
            },
          },
        }}
        initial="hidden"
        animate="show"
        className="skill-boxes flex flex-wrap mx-auto items-center justify-center gap-x-4 gap-y-6 sm:gap-x-6 sm:gap-y-8 lg:gap-x-8 lg:gap-y-10 relative z-10 px-4 lg:px-0 max-w-[1200px]"
      >
        <AnimatePresence mode="popLayout">
          {filteredSkills.map((skill) => (
            <motion.div
              key={skill.title}
              layout
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                show: { opacity: 1, scale: 1 },
                exit: { opacity: 0, scale: 0.8 },
              }}
              initial="hidden"
              animate="show"
              exit="exit"
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 15,
                mass: 0.8,
              }}
            >
              <TiltCard>
                <div className="box group flex flex-col items-center justify-center w-[120px] h-[120px] sm:w-[140px] sm:h-[140px] lg:w-[160px] lg:h-[160px] rounded-[20px] relative overflow-hidden bg-[rgba(26,15,62,0.25)] backdrop-blur-[25px] border border-white/15 shadow-[0_8px_32px_rgba(var(--primary-rgb),0.3)] hover:-translate-y-[10px] hover:scale-105 transition-all duration-500">
                  <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[conic-gradient(transparent,transparent,transparent,var(--primary))] opacity-0 group-hover:opacity-50 transition-opacity duration-400 animate-spin-slow pointer-events-none"></div>
                  <div className="absolute inset-[2px] bg-[rgba(26,15,62,0.9)] backdrop-blur-[25px] rounded-[18px] z-0"></div>

                  <div className="relative z-10 flex flex-col items-center gap-2">
                    <Image
                      src={`/${skill.image}`}
                      alt={skill.title}
                      width={64}
                      height={64}
                      className="w-12 h-12 sm:w-16 sm:h-16 object-contain drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] transition-all duration-400 group-hover:scale-110 group-hover:rotate-y-360 group-hover:drop-shadow-[0_0_20px_var(--primary)]"
                      draggable={false}
                    />
                    <div className="topic text-center font-bold text-(--secondary) text-[13px] sm:text-[15px] lg:text-[16px] transition-all duration-300 group-hover:scale-105 group-hover:text-(--primary)">
                      {skill.title}
                    </div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <div className="mt-20">
        <TechMarquee />
      </div>

      <style jsx>{`
        .animate-spin-slow {
          animation: spin 4s linear infinite;
        }
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </section>
  );
}
