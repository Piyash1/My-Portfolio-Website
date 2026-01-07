"use client";

import { useRef, useState, useEffect } from "react";

export function useMagnetic(strength: number = 0.5) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const element = ref.current;
      if (!element) return;

      const { clientX, clientY } = e;
      const { left, top, width, height } = element.getBoundingClientRect();

      const centerX = left + width / 2;
      const centerY = top + height / 2;

      const distanceX = clientX - centerX;
      const distanceY = clientY - centerY;

      // Only apply effect if within range (e.g., 100px)
      const range = 100;
      if (Math.abs(distanceX) < range && Math.abs(distanceY) < range) {
        setPosition({
          x: distanceX * strength,
          y: distanceY * strength,
        });
      } else {
        setPosition({ x: 0, y: 0 });
      }
    };

    const handleMouseLeave = () => {
      setPosition({ x: 0, y: 0 });
    };

    window.addEventListener("mousemove", handleMouseMove);
    ref.current?.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      ref.current?.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [strength]);

  const style = {
    transform: `translate(${position.x}px, ${position.y}px)`,
    transition:
      position.x === 0 && position.y === 0
        ? "transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)"
        : "transform 0.2s cubic-bezier(0.23, 1, 0.32, 1)",
  };

  return { ref, style };
}
