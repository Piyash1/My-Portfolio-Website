"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useMagnetic } from "../../hooks/useMagnetic";

interface SocialLink {
  href: string;
  img?: string;
  icon?: string;
  strokeIcon?: React.ReactNode;
  pathExtra?: React.ReactNode;
  alt: string;
}

const socialLinks: SocialLink[] = [
  {
    href: "https://www.linkedin.com/in/moniruzzaman-piyash/",
    img: "linkedin.svg",
    alt: "LinkedIn",
    icon: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z",
  },
  {
    href: "https://github.com/Piyash1",
    img: "github.svg",
    alt: "GitHub",
    icon: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z",
  },
  {
    href: "mailto:moniruzzamanpiyash@gmail.com",
    img: "gmail.svg",
    alt: "Gmail",
    strokeIcon: (
      <>
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
        <polyline points="22,6 12,13 2,6"></polyline>
      </>
    ),
  },
  {
    href: "https://www.facebook.com/moniruzzamanpiyash/",
    img: "facebook.svg",
    alt: "Facebook",
    icon: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",
  },
  {
    href: "https://www.instagram.com/bigsecret_6_9/",
    img: "instagram.svg",
    alt: "Instagram",
    strokeIcon: (
      <>
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
      </>
    ),
  },
  {
    href: "https://x.com/MoniruzzamanPi3",
    alt: "Twitter",
    icon: "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z",
  },
];

interface SocialLinksProps {
  variant?: "about" | "footer";
}

export default function SocialLinks({ variant = "about" }: SocialLinksProps) {
  const items =
    variant === "about"
      ? socialLinks.filter((l) => l.img)
      : socialLinks.filter((l) => l.icon || l.strokeIcon);

  return (
    <div
      className={`media-icons flex flex-wrap justify-center ${
        variant === "about"
          ? "lg:justify-start gap-3 sm:gap-4 lg:gap-5"
          : "sm:justify-start gap-3 mt-[15px]"
      }`}
    >
      {items.map((social, i) => (
        <SocialIcon key={i} social={social} variant={variant} index={i} />
      ))}
    </div>
  );
}

function SocialIcon({
  social,
  variant,
  index,
}: {
  social: SocialLink;
  variant: "about" | "footer";
  index: number;
}) {
  const { ref, style } = useMagnetic(0.2);

  return (
    <div ref={ref} style={style}>
      <motion.a
        href={social.href}
        target={social.href.startsWith("mailto") ? undefined : "_blank"}
        rel={
          social.href.startsWith("mailto") ? undefined : "noopener noreferrer"
        }
        aria-label={social.alt}
        className={
          variant === "about"
            ? "social-icon-wrapper w-[45px] h-[45px] rounded-full flex items-center justify-center relative overflow-hidden bg-[rgba(26,15,62,0.6)] backdrop-blur-[25px] border-[3px] border-[rgba(var(--primary-rgb),0.6)] shadow-[0_8px_32px_rgba(var(--primary-rgb),0.5)] hover:scale-110 transition-all duration-400 focus-visible:outline-2 focus-visible:outline-(--primary) focus-visible:outline-offset-4"
            : "social-link w-[42px] h-[42px] flex items-center justify-center rounded-full relative overflow-hidden transition-all duration-300 bg-[rgba(26,15,62,0.5)] backdrop-blur-[25px] border-2 border-[rgba(16,185,129,0.3)] text-(--hover) shadow-[0_5px_20px_rgba(16,185,129,0.2)] hover:scale-120 hover:border-(--hover) hover:text-white hover:shadow-[0_10px_30px_rgba(16,185,129,0.5)] group focus-visible:outline-2 focus-visible:outline-(--primary) focus-visible:outline-offset-4"
        }
        initial={
          variant === "about" ? { opacity: 0, y: 20, scale: 0.8 } : undefined
        }
        whileInView={
          variant === "about" ? { opacity: 1, y: 0, scale: 1 } : undefined
        }
        transition={
          variant === "about"
            ? { duration: 0.6, delay: 0.8 + index * 0.1 }
            : undefined
        }
        viewport={{ once: true }}
        draggable={false}
      >
        {variant === "footer" && (
          <div className="absolute inset-0 bg-(--gradient2) opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
        )}

        {variant === "about" ? (
          <Image
            src={`/assets/images/about/${social.img}`}
            alt={social.alt}
            width={50}
            height={50}
            draggable={false}
            className="transition-all"
            style={{ width: "auto", height: "auto" }}
          />
        ) : social.icon ? (
          <svg
            className="relative z-1"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill={social.strokeIcon ? "none" : "currentColor"}
            stroke={social.strokeIcon ? "currentColor" : "none"}
            strokeWidth={social.strokeIcon ? "2" : "0"}
          >
            <path d={social.icon} />
            {social.pathExtra}
          </svg>
        ) : (
          <svg
            className="relative z-1"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            {social.strokeIcon}
          </svg>
        )}
      </motion.a>
    </div>
  );
}
