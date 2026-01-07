"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

const CURSOR_COUNT = 12;

export default function UtilityElements() {
  const [showScroll, setShowScroll] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);

  // Mouse coordinates using MotionValues for smooth performance
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    setIsDesktop(window.innerWidth > 768);

    const handleResize = () => setIsDesktop(window.innerWidth > 768);
    window.addEventListener("resize", handleResize);

    // Scroll To Top Logic
    const calcScrollValue = () => {
      const pos = document.documentElement.scrollTop;
      const calcHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrollValue = Math.round((pos * 100) / calcHeight);

      setShowScroll(pos > 100);
      setScrollProgress(scrollValue);
    };

    const onMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("scroll", calcScrollValue);
    window.addEventListener("load", calcScrollValue);
    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", calcScrollValue);
      window.removeEventListener("load", calcScrollValue);
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, [mouseX, mouseY]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const circumference = 163.36;
  const offset = circumference - (scrollProgress / 100) * circumference;

  return (
    <>
      <div
        id="progress"
        className={`scroll-to-top fixed right-[25px] bottom-[25px] w-[60px] h-[60px] cursor-pointer z-9998 transition-all duration-500 ${
          showScroll ? "show" : "opacity-0 hidden"
        }`}
        onClick={scrollToTop}
      >
        <svg
          className="progress-ring absolute top-0 left-0 -rotate-90 drop-shadow-[0_0_10px_rgba(217,70,239,0.6)]"
          width="60"
          height="60"
        >
          <defs>
            <linearGradient
              id="progressGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#d946ef" stopOpacity="1" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="1" />
            </linearGradient>
          </defs>
          <circle
            className="progress-ring-circle transition-all duration-300"
            stroke="url(#progressGradient)"
            strokeWidth="3"
            fill="transparent"
            r="26"
            cx="30"
            cy="30"
            style={{
              strokeDasharray: circumference,
              strokeDashoffset: offset,
              strokeLinecap: "round",
            }}
          />
        </svg>
        <div
          id="progress-value"
          className="progress-content absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50px] h-[50px] rounded-full flex flex-col items-center justify-center gap-[2px] transition-all duration-300 bg-[rgba(26,15,62,0.4)] backdrop-blur-[25px] border-2 border-[rgba(217,70,239,0.3)] shadow-[0_8px_32px_rgba(217,70,239,0.5),inset_0_1px_0_rgba(255,255,255,0.1)] group-hover:bg-[rgba(217,70,239,0.3)]"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            className="drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] transition-all duration-300 stroke-(--secondary)"
          >
            <polyline points="18 15 12 9 6 15"></polyline>
          </svg>
          <span
            className="progress-percentage text-[9px] font-bold leading-none text-(--secondary)"
            style={{ textShadow: "0 1px 2px rgba(0, 0, 0, 0.5)" }}
          >
            {scrollProgress}%
          </span>
        </div>
      </div>

      {isDesktop &&
        Array.from({ length: CURSOR_COUNT }).map((_, i) => (
          <CursorDot key={i} index={i} mouseX={mouseX} mouseY={mouseY} />
        ))}

      <style jsx global>{`
        .scroll-to-top {
          transform: scale(0) rotate(-180deg);
          will-change: transform;
        }
        .scroll-to-top.show {
          display: block !important;
          opacity: 1 !important;
          transform: scale(1) rotate(0deg);
        }
        .scroll-to-top:hover {
          transform: scale(1.15) translateY(-8px) rotate(360deg) !important;
          filter: drop-shadow(0 15px 40px rgba(217, 70, 239, 0.8));
        }
        .scroll-to-top:active {
          transform: scale(0.95) translateY(-5px);
        }
        .scroll-to-top:hover .progress-content {
          background: rgba(217, 70, 239, 0.3);
          border: 2px solid rgba(217, 70, 239, 0.6);
          box-shadow: 0 12px 48px rgba(217, 70, 239, 0.8),
            inset 0 1px 0 rgba(255, 255, 255, 0.2);
        }
        .scroll-to-top:hover .progress-content svg {
          transform: translateY(-3px);
          animation: bounceUpArrow 0.8s ease-in-out infinite;
        }
        @keyframes bounceUpArrow {
          0%,
          100% {
            transform: translateY(-3px);
          }
          50% {
            transform: translateY(-8px);
          }
        }
      `}</style>
    </>
  );
}

function CursorDot({
  index,
  mouseX,
  mouseY,
}: {
  index: number;
  mouseX: any;
  mouseY: any;
}) {
  // Each dot follows the mouse with a slightly higher delay (stiffness/damping)
  const springConfig = {
    stiffness: 150 - index * 10,
    damping: 20 + index * 2,
    mass: 0.1 + index * 0.05,
  };

  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  const colors = [
    "radial-gradient(circle, #ffffff, var(--primary))",
    "var(--primary)",
    "var(--ternary)",
    "var(--hover)",
  ];

  const bgColor =
    index === 0
      ? colors[0]
      : index === 1
      ? colors[1]
      : index === 2
      ? colors[2]
      : colors[3];
  const opacity = index === 0 ? 1 : index === 1 ? 0.6 : index === 2 ? 0.6 : 0.4;
  const scale = (CURSOR_COUNT - index) / CURSOR_COUNT;

  return (
    <motion.div
      style={{
        position: "fixed",
        top: -12,
        left: -12,
        width: 24,
        height: 24,
        borderRadius: "50%",
        pointerEvents: "none",
        zIndex: 99999999 - index,
        x,
        y,
        scale,
        background: bgColor,
        opacity,
      }}
    />
  );
}
