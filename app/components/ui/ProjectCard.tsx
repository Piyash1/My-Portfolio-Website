import { useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface Project {
  title: string;
  description: string;
  image: string;
  techs: string[];
  sourceCode: string;
  liveProject?: string;
}

interface ProjectCardProps {
  project: Project;
  isActive?: boolean;
}

export default function ProjectCard({
  project,
  isActive = false,
}: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className={`box w-full max-w-[380px] bg-[rgba(26,15,62,0.4)] backdrop-blur-[30px] rounded-[20px] overflow-hidden border transition-all duration-500 flex flex-col relative ${
        isActive ? "group" : ""
      } ${
        isActive
          ? "border-[rgba(var(--primary-rgb),0.8)] shadow-[0_30px_80px_rgba(var(--primary-rgb),0.7)] scale-105 hover:-translate-y-[15px] hover:scale-105 hover:border-[rgba(var(--primary-rgb),0.6)] hover:bg-[rgba(var(--primary-rgb),0.15)] hover:shadow-[0_25px_80px_var(--primary)]"
          : "border-[rgba(var(--primary-rgb),0.2)] shadow-[0_10px_40px_rgba(var(--primary-rgb),0.4)] opacity-50 grayscale-[0.5] pointer-events-none"
      }`}
    >
      <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[conic-gradient(transparent,transparent,transparent,var(--primary))] opacity-0 group-hover:opacity-30 animate-spin-slow transition-opacity duration-400 pointer-events-none"></div>

      {/* Spotlight Effect */}
      <div
        className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(var(--primary-rgb), 0.15), transparent 80%)`,
        }}
      ></div>

      <div className="project-image-container relative w-full h-[220px] overflow-hidden rounded-t-[18px] bg-black/30">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
          draggable={false}
        />
        <div className="project-links absolute top-2.5 right-2.5 flex gap-2.5 z-10">
          <a
            href={project.sourceCode}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View source code for ${project.title} on GitHub`}
            className="w-10 h-10 rounded-full bg-[rgba(26,15,62,0.8)] backdrop-blur-md border-2 border-white/20 flex items-center justify-center transition-all duration-300 hover:bg-[rgba(59,130,246,0.8)] hover:border-[rgba(59,130,246,0.8)] hover:scale-110 hover:rotate-360 hover:shadow-[0_5px_20px_rgba(59,130,246,0.6)] focus-visible:outline-2 focus-visible:outline-(--primary)"
          >
            <Image
              src="/assets/images/projects/github.png"
              alt="GitHub"
              width={20}
              height={20}
              className="filter invert brightness-200"
            />
          </a>
          {project.liveProject && (
            <a
              href={project.liveProject}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View live project for ${project.title}`}
              className="w-10 h-10 rounded-full bg-[rgba(26,15,62,0.8)] backdrop-blur-md border-2 border-white/20 flex items-center justify-center transition-all duration-300 hover:bg-[rgba(59,130,246,0.8)] hover:border-[rgba(59,130,246,0.8)] hover:scale-110 hover:rotate-360 hover:shadow-[0_5px_20px_rgba(59,130,246,0.6)] focus-visible:outline-2 focus-visible:outline-(--primary)"
            >
              <Image
                src="/assets/images/projects/link.png"
                alt="Live"
                width={20}
                height={20}
                className="filter invert brightness-200"
              />
            </a>
          )}
        </div>
      </div>

      <div className="project-content-area p-5 flex flex-col flex-1 text-center relative z-10">
        <div className="topic text-[22px] font-black mb-3.5 text-(--secondary) transition-all duration-300 group-hover:text-(--primary) relative">
          <span className="relative z-10">{project.title}</span>
          <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:animate-glitch-1 text-(--primary) z-0">
            {project.title}
          </span>
          <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:animate-glitch-2 text-(--ternary) z-0">
            {project.title}
          </span>
        </div>
        <p className="text-white/80 mb-3.5 text-[14px] leading-relaxed font-medium flex-1 group-hover:text-(--secondary) group-hover:font-semibold">
          {project.description}
        </p>
        <div className="tech-stack flex flex-wrap gap-2 justify-center mt-auto">
          {project.techs.map((tech: string, i: number) => (
            <span
              key={i}
              className="techs px-3 py-1.5 rounded-[20px] text-[12px] font-semibold text-(--secondary) bg-[rgba(59,130,246,0.2)] border border-[rgba(59,130,246,0.3)] backdrop-blur-md transition-all duration-300 group-hover:bg-[rgba(59,130,246,0.4)] group-hover:border-[rgba(59,130,246,0.6)] group-hover:-translate-y-[2px] group-hover:shadow-[0_5px_15px_rgba(59,130,246,0.4)]"
            >
              {tech}
            </span>
          ))}
        </div>
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
        @keyframes glitch-1 {
          0% {
            transform: translate(0);
            opacity: 0.5;
          }
          20% {
            transform: translate(-3px, 2px);
          }
          40% {
            transform: translate(-3px, -2px);
          }
          60% {
            transform: translate(3px, 2px);
          }
          80% {
            transform: translate(3px, -2px);
          }
          100% {
            transform: translate(0);
            opacity: 0;
          }
        }
        @keyframes glitch-2 {
          0% {
            transform: translate(0);
            opacity: 0.5;
          }
          20% {
            transform: translate(3px, -2px);
          }
          40% {
            transform: translate(3px, 2px);
          }
          60% {
            transform: translate(-3px, -2px);
          }
          80% {
            transform: translate(-3px, 2px);
          }
          100% {
            transform: translate(0);
            opacity: 0;
          }
        }
        .animate-glitch-1 {
          animation: glitch-1 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both
            infinite;
        }
        .animate-glitch-2 {
          animation: glitch-2 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) reverse
            both infinite;
        }
      `}</style>
    </div>
  );
}
