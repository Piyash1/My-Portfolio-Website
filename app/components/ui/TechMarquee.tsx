"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { skillsData } from "../../data/skills";

export default function TechMarquee() {
  // Duplicate skills to ensure seamless looping
  const duplicatedSkills = [...skillsData, ...skillsData];

  return (
    <div className="tech-marquee-container relative w-full overflow-hidden py-10 opacity-70 hover:opacity-100 transition-opacity duration-500">
      <div className="absolute inset-y-0 left-0 w-20 bg-linear-to-r from-(--main1) to-transparent z-10"></div>
      <div className="absolute inset-y-0 right-0 w-20 bg-linear-to-l from-(--main1) to-transparent z-10"></div>

      <motion.div
        className="flex items-center gap-12 whitespace-nowrap"
        animate={{
          x: [0, -2000], // Adjust based on content width
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 40,
            ease: "linear",
          },
        }}
      >
        {duplicatedSkills.map((skill, index) => (
          <div
            key={`${skill.title}-${index}`}
            className="flex items-center gap-3 grayscale hover:grayscale-0 transition-all duration-300"
          >
            <Image
              src={`/${skill.image}`}
              alt={skill.title}
              width={32}
              height={32}
              className="w-8 h-8 object-contain"
            />
            <span className="text-white/50 text-sm font-bold tracking-wider uppercase">
              {skill.title}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
