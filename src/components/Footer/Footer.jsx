import React from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Animation variants
  const containerVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const listVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.4 }
    })
  };

  return (
    <motion.footer
      className="text-white py-8 px-[12vw] md:px-[7vw] lg:px-[20vw]"
      variants={containerVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="container mx-auto text-center">
        {/* Name / Logo */}
        <motion.h2
          className="text-xl font-semibold text-purple-500"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          Moniruzzaman Piyash
        </motion.h2>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center space-x-4 sm:space-x-6 mt-4">
          {[
            { name: "About", id: "about" },
            { name: "Skills", id: "skills" },
            { name: "Projects", id: "work" },
            { name: "Education", id: "education" },
          ].map((item, index) => (
            <motion.button
              key={index}
              onClick={() => handleScroll(item.id)}
              className="hover:text-purple-500 text-sm sm:text-base my-1"
              variants={listVariant}
              initial="hidden"
              whileInView="visible"
              custom={index}
              whileHover={{ scale: 1.1 }}
            >
              {item.name}
            </motion.button>
          ))}
        </div>

        {/* Social Media Icons */}
        <div className="flex flex-wrap justify-center space-x-4 mt-6">
          {[
            { icon: <FaFacebook />, link: "https://www.facebook.com/moniruzzaman.piyash" },
            { icon: <FaTwitter />, link: "https://x.com/MoniruzzamanPi3" },
            { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/moniruzzamanpiyash/" },
            { icon: <FaInstagram />, link: "https://www.instagram.com/bigsecret_6_9/" },
          ].map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.4 }}
              whileHover={{
                scale: 1.2,
                color: "#a855f7",
                rotate: [0, 10, -10, 0],
                transition: { duration: 0.4 }
              }}
            >
              {item.icon}
            </motion.a>
          ))}
        </div>

        {/* Copyright */}
        <motion.p
          className="text-sm text-gray-400 mt-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          © 2025 Moniruzzaman Piyash. All rights reserved.
        </motion.p>
      </div>
    </motion.footer>
  );
};

export default Footer;
