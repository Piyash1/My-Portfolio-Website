"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const navItems = [
  { href: "#home", label: "HOME" },
  { href: "#about", label: "ABOUT" },
  { href: "#skills", label: "SKILLS" },
  { href: "#projects", label: "PROJECTS" },
  { href: "#education", label: "EDUCATION" },
  { href: "#contact", label: "CONTACT" },
];

const themes = [
  { id: "cyberpunk", label: "Cyberpunk", class: "from-[#ff00ff] to-[#00f2ff]" },
  { id: "ocean", label: "Ocean", class: "from-[#2E3192] to-[#1BFFFF]" },
  { id: "forest", label: "Forest", class: "from-[#134E5E] to-[#71B280]" },
  { id: "sunset", label: "Sunset", class: "from-[#FF512F] to-[#F09819]" },
];

export default function Navbar() {
  const [activeTheme, setActiveTheme] = useState("ocean");
  const [isThemeOpen, setIsThemeOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const activeLinkRef = useRef("");
  const isScrollingRef = useRef(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const visibleSections = useRef<Map<string, IntersectionObserverEntry>>(
    new Map()
  );

  // Synchronize state with ref
  const updateActiveLink = (newHash: string, shouldReplaceState = true) => {
    if (activeLinkRef.current !== newHash) {
      activeLinkRef.current = newHash;
      setActiveLink(newHash);
      if (shouldReplaceState) {
        window.history.replaceState(null, "", newHash);
      }
    }
  };

  useEffect(() => {
    // Correctly initialize theme from DOM (set by layout script) or localStorage
    // This prevents override by default state if the script has already run
    const currentTheme =
      document.documentElement.getAttribute("data-theme") ||
      localStorage.getItem("theme") ||
      "ocean";
    setActiveTheme(currentTheme);

    // Initialize active link from URL on mount
    const hash = window.location.hash || "#home";
    updateActiveLink(hash, false);

    // Lock observer updates for the first 2 seconds to allow browser scroll restoration and layout stabilization
    isScrollingRef.current = true;
    if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    scrollTimeoutRef.current = setTimeout(() => {
      isScrollingRef.current = false;
    }, 2000);

    // Manual restoration fallback: If there's a hash, ensure we scroll to it after the loader finishes
    if (hash && hash !== "#home") {
      setTimeout(() => {
        const targetId = hash.replace("#", "");
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: "instant" });
        }
      }, 300); // Shorter duration to ensure scroll happens BEFORE GlobalLoader starts fading out (at 800ms)
    }

    // Intersection Observer for highlighting active section
    const observer = new IntersectionObserver(
      (entries) => {
        // Update valid entries in the map
        entries.forEach((entry) => {
          if (entry.target.id) {
            visibleSections.current.set(entry.target.id, entry);
          }
        });

        // Determine the "winner" section (highest visibility ratio)
        let maxRatio = 0;
        let winnerId = "";

        visibleSections.current.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
            maxRatio = entry.intersectionRatio;
            winnerId = entry.target.id;
          }
        });

        // Skip observer updates if we are in a programmatic smooth scroll
        if (isScrollingRef.current) return;

        if (winnerId) {
          const newHash = `#${winnerId}`;
          updateActiveLink(newHash);
        }
      },
      {
        rootMargin: "-100px 0px -40% 0px", // Biased towards top: ignores top 100px (navbar) and bottom 40%
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1], // Granular updates
      }
    );

    const sectionIds = [
      "home",
      "about",
      "skills",
      "projects",
      "education",
      "contact",
    ];
    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    // Handle scroll for the very top case (fallback for observer)
    const handleScroll = () => {
      if (isScrollingRef.current) return;
      // Removed aggresive scrollY < 50 check that was breaking scroll restoration on refresh
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    };
  }, []);

  const changeTheme = (themeId: string) => {
    setActiveTheme(themeId);
    localStorage.setItem("theme", themeId);
    document.documentElement.setAttribute("data-theme", themeId);
    setIsThemeOpen(false);
  };

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav className="fixed w-full z-999 transition-all duration-300 px-4 sm:px-6 md:px-8 py-2">
      <div
        className="max-width max-w-full mx-auto flex items-center justify-between px-3 sm:px-4 py-1.5 rounded-[20px] sm:rounded-[25px] relative"
        style={{
          background: "rgba(10, 10, 30, 0.8)",
          backdropFilter: "blur(15px)",
          border: "1px solid rgba(255,255,255,0.1)",
          boxShadow:
            "0 10px 40px rgba(var(--primary-rgb), 0.25), 0 5px 20px rgba(var(--primary-rgb), 0.15)",
        }}
      >
        {/* Animated Border */}
        <div
          className="absolute inset-0 rounded-[20px] sm:rounded-[25px] p-[2px] pointer-events-none -z-1 animate-border-rotate hidden lg:block"
          style={{
            background:
              "linear-gradient(135deg, var(--primary), var(--ternary), var(--hover))",
            mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            maskComposite: "exclude",
          }}
        ></div>

        {/* Logo */}
        <Link
          href="#home"
          className="logo-link flex items-center justify-center h-[45px] hover:-translate-y-px transition-transform duration-400"
        >
          <Image
            src="/assets/images/logo.png"
            alt="Logo"
            width={40}
            height={40}
            priority
            className="w-full h-full object-contain max-h-[50px] brightness-100 invert"
            draggable={false}
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex list-none items-center gap-0.5">
          {navItems.map((item) => (
            <li key={item.href} className="inline-flex items-center">
              <Link
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  const targetId = item.href.replace("#", "");
                  const element = document.getElementById(targetId);
                  if (element) {
                    updateActiveLink(item.href);
                    isScrollingRef.current = true;
                    if (scrollTimeoutRef.current)
                      clearTimeout(scrollTimeoutRef.current);
                    scrollTimeoutRef.current = setTimeout(() => {
                      isScrollingRef.current = false;
                    }, 1000);
                    element.scrollIntoView({ behavior: "smooth" });
                    setIsMobileMenuOpen(false); // Close mobile menu if open
                  }
                }}
                className={`relative inline-flex items-center justify-center font-bold px-2 lg:px-3 xl:px-4 py-2.5 rounded-[15px] overflow-hidden transition-all duration-300 hover:-translate-y-1 border border-transparent ${
                  activeLink === item.href
                    ? "active-link text-white shadow-[0_5px_20px_rgba(16,185,129,0.2)]"
                    : "text-white/90 hover:text-(--primary)"
                }`}
                style={{
                  fontSize: "clamp(10px, 1.2vw, 16px)",
                  lineHeight: 1,
                  background:
                    activeLink === item.href
                      ? "var(--gradient2)"
                      : "transparent",
                  zIndex: activeLink === item.href ? 10 : 1,
                }}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right Section */}
        <div className="flex items-center gap-3 sm:gap-4 md:gap-5">
          {/* Resume Button */}
          <Link
            href="/assets/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="resume-btn flex items-center gap-2 px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 rounded-full text-white font-bold text-xs sm:text-sm transition-all duration-400 relative overflow-hidden hover:-translate-y-1"
            style={{
              background:
                "linear-gradient(135deg, rgba(var(--primary-rgb), 0.3), rgba(var(--primary-rgb), 0.1))",
              backdropFilter: "blur(20px)",
              border: "2px solid var(--primary)",
              boxShadow: "0 5px 20px rgba(var(--primary-rgb), 0.3)",
            }}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="relative z-1"
            >
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <line x1="16" y1="13" x2="8" y2="13"></line>
              <line x1="16" y1="17" x2="8" y2="17"></line>
              <polyline points="10 9 9 9 8 9"></polyline>
            </svg>
            <span className="relative z-1">Resume</span>
          </Link>

          {/* Theme Switcher */}
          <div className="relative z-9999">
            <button
              onClick={() => setIsThemeOpen(!isThemeOpen)}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full cursor-pointer flex items-center justify-center transition-all duration-300 text-white hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-(--primary)"
              aria-label={`Switch theme to ${
                themes.find((t) => t.id === activeTheme)?.label || "current"
              } theme`}
              style={{
                background: "rgba(var(--primary-rgb), 0.2)",
                backdropFilter: "blur(25px)",
                border: "1px solid var(--primary)",
                boxShadow:
                  "0 8px 32px rgba(var(--primary-rgb), 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
                transform: isThemeOpen
                  ? "scale(1.1) rotate(180deg)"
                  : "scale(1) rotate(0deg)",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                width="20"
                height="20"
                fill="currentColor"
              >
                <path d="M512 256c0 .9 0 1.8 0 2.7c-.4 36.5-33.6 61.3-70.1 61.3H344c-26.5 0-48 21.5-48 48c0 3.4 .4 6.7 1 9.9c2.1 10.2 6.5 20 10.8 29.9c6.1 13.8 12.1 27.5 12.1 42c0 31.8-21.6 60.7-53.4 62c-3.5 .1-7 .2-10.6 .2C114.6 512 0 397.4 0 256S114.6 0 256 0S512 114.6 512 256zM128 288a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm0-96a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM288 96a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm96 96a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
              </svg>
            </button>
            <div
              className={`absolute top-[55px] right-0 rounded-[15px] px-4 py-4 min-w-[180px] transition-all duration-300 ${
                isThemeOpen
                  ? "opacity-100 visible translate-y-0"
                  : "opacity-0 invisible -translate-y-2.5"
              }`}
              style={{
                background: "rgba(26, 15, 62, 0.8)",
                backdropFilter: "blur(30px)",
                boxShadow:
                  "0 12px 60px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
              }}
            >
              <div className="absolute top-[-8px] right-[15px] w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-b-8 border-b-[rgba(26,15,62,0.8)]"></div>
              {themes.map((theme) => (
                <button
                  key={theme.id}
                  onClick={() => changeTheme(theme.id)}
                  className={`w-full flex items-center gap-3 px-4 py-2.5 mb-2 rounded-[10px] cursor-pointer transition-all duration-300 text-white text-sm font-semibold hover:bg-white/10 ${
                    activeTheme === theme.id
                      ? "bg-[rgba(217,70,239,0.25)] border border-[rgba(217,70,239,0.7)]"
                      : "bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.15)]"
                  }`}
                >
                  <span
                    className={`w-[30px] h-[30px] rounded-full block bg-linear-to-br ${theme.class}`}
                  ></span>
                  <span className="flex-1 text-left">{theme.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden text-white text-2xl cursor-pointer focus-visible:outline-2 focus-visible:outline-(--primary)"
            aria-label={
              isMobileMenuOpen ? "Close Mobile Menu" : "Open Mobile Menu"
            }
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 384 512"
              >
                <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 448 512"
              >
                <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed top-[70px] left-0 right-0 transition-all duration-300 z-998 px-4 ${
          isMobileMenuOpen
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-5"
        }`}
      >
        <div
          className="rounded-[20px] overflow-hidden"
          style={{
            background: "rgba(5, 5, 15, 0.98)",
            backdropFilter: "blur(35px)",
            border: "2px solid rgba(16, 185, 129, 0.3)",
            boxShadow:
              "0 10px 40px rgba(16, 185, 129, 0.25), 0 5px 20px rgba(59, 130, 246, 0.25)",
          }}
        >
          <ul className="list-none p-4">
            {navItems.map((item) => (
              <li key={item.href} className="mb-2">
                <Link
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    const targetId = item.href.replace("#", "");
                    const element = document.getElementById(targetId);
                    if (element) {
                      updateActiveLink(item.href);
                      isScrollingRef.current = true;
                      if (scrollTimeoutRef.current)
                        clearTimeout(scrollTimeoutRef.current);
                      scrollTimeoutRef.current = setTimeout(() => {
                        isScrollingRef.current = false;
                      }, 1000);
                      element.scrollIntoView({ behavior: "smooth" });
                      closeMobileMenu();
                    }
                  }}
                  className={`block text-center font-bold px-4 py-3 rounded-[12px] transition-all duration-300 hover:text-white ${
                    activeLink === item.href
                      ? "bg-(--gradient2) text-white border border-(--primary) shadow-[0_5px_20px_var(--primary)]"
                      : "bg-white/10 text-white hover:bg-white/20 hover:text-(--primary)"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <style jsx>{`
        .active-link {
          background: var(--gradient2) !important;
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          color: #ffffff !important;
          border-radius: 15px;
          border-color: var(--primary) !important;
          box-shadow: 0 5px 20px rgba(16, 185, 129, 0.2),
            0 0 20px var(--primary), inset 0 2px 0 rgba(255, 255, 255, 0.2) !important;
          position: relative;
          z-index: 10;
        }
        .active-link::after {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          border-radius: 15px;
          z-index: -1;
          background: linear-gradient(
            45deg,
            transparent 30%,
            rgba(255, 255, 255, 0.3) 50%,
            transparent 70%
          );
          background-size: 200% 200%;
          animation: activeGlow 3s linear infinite;
        }
        @keyframes activeGlow {
          0% {
            background-position: 200% 0;
          }
          100% {
            background-position: -200% 0;
          }
        }
      `}</style>
    </nav>
  );
}
