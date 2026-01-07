"use client";

import Image from "next/image";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import SectionHeader from "./ui/SectionHeader";
import { educationData } from "../data/education";

export default function Education() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const pathLength = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section
      className="education z-3 min-h-screen relative overflow-hidden py-24 px-5 bg-transparent"
      id="education"
      ref={containerRef}
    >
      <SectionHeader
        title="Education"
        quote="The beautiful thing about learning is that no one can take it away from you."
      />

      <div className="max-width max-w-[1000px] mx-auto relative px-5">
        {/* Circuit Path Background */}
        <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[4px] bg-white/10 rounded md:-translate-x-1/2 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
          <motion.div
            className="absolute top-0 left-0 w-full bg-(--gradient1) origin-top shadow-[0_0_30px_var(--primary),0_0_60px_var(--primary)]"
            style={{
              height: useTransform(pathLength, [0, 1], ["0%", "100%"]),
              filter: "blur(0.5px)",
            }}
          />
        </div>

        {educationData.map((edu, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className={`timeline-item relative mb-20 w-full md:w-[50%] ${
              idx % 2 === 0
                ? "md:left-0 md:pr-16 md:text-right"
                : "md:left-1/2 md:pl-16 md:text-left"
            } pl-[60px] md:pl-0`}
          >
            {/* Circuit Branch */}
            <div
              className={`absolute top-[25px] h-[2px] bg-white/10 hidden md:block ${
                idx % 2 === 0 ? "right-[-24px] w-12" : "left-[-24px] w-12"
              }`}
            >
              <motion.div
                className="h-full bg-(--primary) shadow-[0_0_20px_var(--primary),0_0_40px_var(--primary)] origin-left"
                style={{
                  scaleX: useTransform(
                    pathLength,
                    [
                      idx / educationData.length,
                      (idx + 0.5) / educationData.length,
                    ],
                    [0, 1]
                  ),
                }}
              />
            </div>

            <div
              className={`timeline-dot absolute top-[10px] w-14 h-14 rounded-xl border-2 border-[rgba(var(--primary-rgb),0.5)] shadow-[0_0_25px_rgba(var(--primary-rgb),0.3)] z-20 overflow-hidden bg-white/95 flex items-center justify-center transition-all duration-500 backdrop-blur-md group-hover:border-(--primary) group-hover:shadow-[0_0_30px_var(--primary)] ${
                idx % 2 === 0
                  ? "left-[-7px] md:right-[-28px] md:left-auto"
                  : "left-[-7px] md:left-[-28px]"
              }`}
            >
              <Image
                src={edu.logo}
                alt={edu.institution}
                fill
                sizes="56px"
                className="object-contain p-2 drop-shadow-[0_2px_10px_rgba(0,0,0,0.1)]"
              />
            </div>

            <div
              className={`timeline-content p-8 rounded-[24px] bg-[rgba(26,15,62,0.3)] backdrop-blur-[20px] border border-white/5 shadow-[0_15px_35px_rgba(0,0,0,0.2)] transition-all duration-500 hover:bg-[rgba(26,15,62,0.5)] hover:border-(--primary)/30 hover:shadow-[0_20px_50px_rgba(0,242,255,0.15)] group relative overflow-hidden`}
            >
              {/* Animated Background Pulse */}
              <div className="absolute inset-0 bg-(--gradient1) opacity-0 group-hover:opacity-5 transition-opacity duration-500" />

              <div className="date inline-flex items-center gap-2 px-4 py-1.5 rounded-lg bg-white/5 border border-white/10 text-(--primary) text-xs font-black mb-4 tracking-tighter">
                <span className="w-1.5 h-1.5 rounded-full bg-(--primary) animate-pulse" />
                {edu.year}
              </div>
              <h3 className="text-2xl font-black mb-2 text-white group-hover:text-(--primary) transition-all duration-300">
                {edu.title}
              </h3>
              <div className="institution text-base font-bold text-white/50 mb-3 tracking-tight">
                {edu.institution}
              </div>
              <div className="score text-sm font-black text-(--ternary) bg-(--ternary)/10 px-3 py-1 rounded-md inline-block">
                {edu.score}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <style jsx>{`
        .timeline-item:hover .timeline-dot {
          transform: scale(1.1) rotate(5deg);
          border-color: var(--primary);
          box-shadow: 0 0 30px var(--primary);
        }
      `}</style>
    </section>
  );
}
