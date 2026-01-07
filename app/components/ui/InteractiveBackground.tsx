"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export default function InteractiveBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const springScroll = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 40,
        y: (e.clientY / window.innerHeight - 0.5) * 40,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Parallax values based on scroll
  const y1 = useTransform(springScroll, [0, 1], [0, -200]);
  const y2 = useTransform(springScroll, [0, 1], [0, -400]);
  const y3 = useTransform(springScroll, [0, 1], [0, -100]);

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="fixed inset-0 -z-10 overflow-hidden pointer-events-none bg-[#0a0a1e]"
    >
      {/* Dynamic Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
          transform: `translate(${mousePos.x * 0.2}px, ${mousePos.y * 0.2}px)`,
        }}
      />

      {/* Parallax Orbs */}
      <motion.div
        style={{
          y: y1,
          x: mousePos.x * 0.5,
          top: "10%",
          left: "20%",
        }}
        className="absolute w-[400px] h-[400px] rounded-full bg-radial-[circle] from-[rgba(16,185,129,0.15)] to-transparent blur-3xl"
      />

      <motion.div
        style={{
          y: y2,
          x: mousePos.x * -0.8,
          bottom: "20%",
          right: "10%",
        }}
        className="absolute w-[600px] h-[600px] rounded-full bg-radial-[circle] from-[rgba(217,70,239,0.15)] to-transparent blur-3xl"
      />

      <motion.div
        style={{
          y: y3,
          x: mousePos.x * 0.3,
          top: "50%",
          left: "-10%",
        }}
        className="absolute w-[500px] h-[500px] rounded-full bg-radial-[circle] from-[rgba(59,130,246,0.12)] to-transparent blur-3xl opacity-60"
      />

      {/* Subtle vignettes */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(10,10,30,0.4)_100%)]" />

      {/* Cyberpunk Scanline Effect */}
      <div className="absolute inset-0 pointer-events-none z-50 opacity-[0.03] overflow-hidden">
        <div
          className="absolute inset-0 w-full h-full animate-scanline"
          style={{
            background:
              "linear-gradient(to bottom, transparent 0%, var(--primary) 50%, transparent 100%)",
            height: "100px",
          }}
        />
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06))",
            backgroundSize: "100% 4px, 3px 100%",
          }}
        />
      </div>

      <style jsx>{`
        @keyframes scanline {
          0% {
            top: -100px;
          }
          100% {
            top: 100%;
          }
        }
        .animate-scanline {
          animation: scanline 8s linear infinite;
        }
      `}</style>
    </motion.div>
  );
}
