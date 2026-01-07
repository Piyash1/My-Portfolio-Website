"use client";

import { useEffect, useState } from "react";
import SocialLinks from "./ui/SocialLinks";

export default function Footer() {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="footer-main relative pt-10 mt-0 z[3 text-(--secondary) bg-[#0f0c29]/60 backdrop-blur-[30px] border-t-2 border-[rgba(16,185,129,0.3)] shadow-[0_-10px_40px_rgba(16,185,129,0.2)]">
      <div className="footer-content max-w-[1200px] mx-auto px-[50px] pb-[25px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[30px]">
        <div className="footer-section text-center sm:text-left sm:col-span-2 lg:col-span-1">
          <h3 className="footer-title text-2xl font-black mb-2 gradient-text">
            Moniruzzaman Piyash
          </h3>
          <p className="footer-tagline text-white text-[13px] mb-[15px]">
            Crafting robust digital solutions and exploring the frontiers of
            open source.
          </p>
          <SocialLinks variant="footer" />
        </div>

        <div className="footer-section text-center sm:text-left">
          <h4 className="footer-section-title text-base font-bold text-white mb-[15px] relative pb-2 after:content-[''] after:absolute after:left-1/2 after:sm:left-0 after:bottom-0 after:w-[35px] after:h-[2px] after:bg-(--gradient2) after:rounded-[2px] after:-translate-x-1/2 after:sm:translate-x-0">
            Quick Links
          </h4>
          <ul className="footer-links list-none p-0 m-0">
            {["Home", "About", "Skills", "Projects"].map((item) => (
              <li key={item} className="mb-2.5">
                <a
                  href={`#${item.toLowerCase()}`}
                  className="text-white no-underline text-sm transition-all duration-300 hover:text-(--hover) hover:translate-x-[5px] relative group"
                >
                  <span className="absolute -left-5 opacity-0 transition-all duration-300 text-(--hover) group-hover:-left-[15px] group-hover:opacity-100 hidden sm:inline">
                    →
                  </span>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-section text-center sm:text-left">
          <h4 className="footer-section-title text-base font-bold text-white mb-[15px] relative pb-2 after:content-[''] after:absolute after:left-1/2 after:sm:left-0 after:bottom-0 after:w-[35px] after:h-[2px] after:bg-(--gradient2) after:rounded-[2px] after:-translate-x-1/2 after:sm:translate-x-0">
            More
          </h4>
          <ul className="footer-links list-none p-0 m-0">
            {["Education", "Contact"].map((item) => (
              <li key={item} className="mb-2.5">
                <a
                  href={`#${item.toLowerCase()}`}
                  className="text-white no-underline text-sm transition-all duration-300 hover:text-(--hover) hover:translate-x-[5px] relative group"
                >
                  <span className="absolute -left-5 opacity-0 transition-all duration-300 text-(--hover) group-hover:-left-[15px] group-hover:opacity-100 hidden sm:inline">
                    →
                  </span>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-section text-center sm:text-left">
          <h4 className="footer-section-title text-base font-bold text-white mb-[15px] relative pb-2 after:content-[''] after:absolute after:left-1/2 after:sm:left-0 after:bottom-0 after:w-[35px] after:h-[2px] after:bg-(--gradient2) after:rounded-[2px] after:-translate-x-1/2 after:sm:translate-x-0">
            Get In Touch
          </h4>
          <p className="footer-info text-white text-[13px] leading-relaxed mb-[15px]">
            Let's build, scale, and automate the future together. Reach out for
            collaborations or just a tech chat!
          </p>
          <a
            href="#contact"
            className="footer-cta inline-block px-[25px] py-[10px] rounded-[50px] font-bold text-[13px] no-underline transition-all duration-300 bg-[rgba(26,15,62,0.6)] backdrop-blur-[20px] border-2 border-(--hover) text-(--hover) shadow-[0_5px_20px_rgba(16,185,129,0.3)] hover:-translate-y-[3px] hover:bg-(--gradient2) hover:text-white hover:shadow-[0_10px_30px_rgba(16,185,129,0.6)]"
          >
            Contact Me
          </a>
        </div>
      </div>

      <div className="footer-bottom p-[18px] px-[50px] text-center border-t border-[rgba(16,185,129,0.2)] bg-black/30 backdrop-blur-[20px]">
        <p className="footer-copyright text-white text-[13px] my-[3px]">
          Created with ❤️ by{" "}
          <a
            href="https://github.com/Piyash1"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-author-link font-bold transition-all duration-300 text-(--hover) hover:text-(--primary) hover:underline"
          >
            Moniruzzaman Piyash
          </a>
        </p>
        <p className="footer-copyright text-white text-[13px] my-[3px]">
          © <span>{year}</span> All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
