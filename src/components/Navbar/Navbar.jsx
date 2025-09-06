import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll and change navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll function
  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    // { id: "experience", label: "Experience" },
    { id: "work", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ];

  // Enhanced animation variants
  const navbarVariants = {
    hidden: { 
      y: -100,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const logoVariants = {
    hidden: { 
      opacity: 0, 
      x: -50,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 25,
        delay: 0.3,
        duration: 1.2,
      },
    },
  };

  const menuItemVariants = {
    hidden: { 
      opacity: 0, 
      y: -20,
      scale: 0.9,
    },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        delay: 0.7 + index * 0.1,
      },
    }),
  };

  const socialIconVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0,
      rotate: -180,
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        delay: 1.3,
        duration: 0.6,
        ease: "backOut",
      },
    },
  };

  const mobileMenuVariants = {
    hidden: {
      opacity: 0,
      y: -20,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      scale: 0.95,
      transition: {
        duration: 0.2,
        ease: "easeIn",
      },
    },
  };

  const mobileItemVariants = {
    hidden: { 
      opacity: 0, 
      x: -20,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 transition duration-300 px-[7vw] md:px-[7vw] lg:px-[20vw] ${
        isScrolled ? "bg-[#050414] bg-opacity-50 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
      initial="hidden"
      animate="visible"
      variants={navbarVariants}
    >
      <div className="text-white py-5 flex justify-between items-center">
        {/* Logo */}
        <motion.div 
          className="text-lg font-semibold cursor-pointer"
          variants={logoVariants}
          whileHover={{ 
            scale: 1.05,
            transition: { duration: 0.2 }
          }}
          whileTap={{ scale: 0.98 }}
        >
          <motion.span 
            className="text-[#8245ec]"
            whileHover={{ 
              color: "#a855f7",
              textShadow: "0 0 10px #8245ec",
              transition: { duration: 0.2 }
            }}
          >
            &lt;
          </motion.span>
          <motion.span 
            className="text-white"
            whileHover={{ 
              color: "#e5e7eb",
              transition: { duration: 0.2 }
            }}
          >
            Moniruzzaman
          </motion.span>
          <motion.span 
            className="text-[#8245ec]"
            whileHover={{ 
              color: "#a855f7",
              textShadow: "0 0 10px #8245ec",
              transition: { duration: 0.2 }
            }}
          >
            /
          </motion.span>
          <motion.span 
            className="text-white"
            whileHover={{ 
              color: "#e5e7eb",
              transition: { duration: 0.2 }
            }}
          >
            Piyash
          </motion.span>
          <motion.span 
            className="text-[#8245ec]"
            whileHover={{ 
              color: "#a855f7",
              textShadow: "0 0 10px #8245ec",
              transition: { duration: 0.2 }
            }}
          >
            &gt;
          </motion.span>
        </motion.div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-300">
          {menuItems.map((item, index) => (
            <motion.li
              key={item.id}
              className={`cursor-pointer ${
                activeSection === item.id ? "text-[#8245ec]" : ""
              }`}
              variants={menuItemVariants}
              custom={index}
              whileHover={{ 
                scale: 1.1,
                y: -2,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.button
                onClick={() => handleMenuItemClick(item.id)}
                className="relative group px-1"
                whileHover={{ color: "#8245ec" }}
              >
                {item.label}
                <motion.span 
                  className="absolute bottom-0 left-0 h-0.5 bg-[#8245ec]"
                  initial={{ width: 0 }}
                  whileHover={{ 
                    width: "100%",
                    boxShadow: "0 0 5px #8245ec",
                    transition: { duration: 0.3 }
                  }}
                />
                {/* Floating dot indicator for active section */}
                {activeSection === item.id && (
                  <motion.div
                    className="absolute -top-2 left-1/2 w-1 h-1 bg-[#8245ec] rounded-full"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ 
                      opacity: 1, 
                      scale: 1,
                      y: [0, -3, 0],
                    }}
                    transition={{
                      y: {
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }
                    }}
                    style={{ x: "-50%" }}
                  />
                )}
              </motion.button>
            </motion.li>
          ))}
        </ul>

        {/* Social Icons */}
        <div className="hidden md:flex space-x-4">
          <motion.a
            href="https://github.com/piyash1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300"
            variants={socialIconVariants}
            whileHover={{ 
              scale: 1.2,
              color: "#8245ec",
              rotate: 5,
              y: -2,
              transition: { duration: 0.2 }
            }}
            whileTap={{ 
              scale: 0.9,
              rotate: -5,
              transition: { duration: 0.1 }
            }}
          >
            <FaGithub size={24} />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/moniruzzaman-piyash-b12a951b5/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300"
            variants={socialIconVariants}
            whileHover={{ 
              scale: 1.2,
              color: "#8245ec",
              rotate: -5,
              y: -2,
              transition: { duration: 0.2 }
            }}
            whileTap={{ 
              scale: 0.9,
              rotate: 5,
              transition: { duration: 0.1 }
            }}
          >
            <FaLinkedin size={24} />
          </motion.a>
        </div>

        {/* Mobile Menu Icon */}
        <motion.div 
          className="md:hidden"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <FiX
                  className="text-3xl text-[#8245ec] cursor-pointer"
                  onClick={() => setIsOpen(false)}
                />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <FiMenu
                  className="text-3xl text-[#8245ec] cursor-pointer"
                  onClick={() => setIsOpen(true)}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Mobile Menu Items */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="absolute top-16 left-1/2 transform -translate-x-1/2 w-4/5 bg-[#050414] bg-opacity-90 backdrop-filter backdrop-blur-lg z-50 rounded-lg shadow-lg md:hidden border border-purple-500/20"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <ul className="flex flex-col items-center space-y-4 py-6 text-gray-300">
              {menuItems.map((item, index) => (
                <motion.li
                  key={item.id}
                  className={`cursor-pointer ${
                    activeSection === item.id ? "text-[#8245ec]" : ""
                  }`}
                  variants={mobileItemVariants}
                  whileHover={{ 
                    scale: 1.05,
                    color: "#8245ec",
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <button 
                    onClick={() => handleMenuItemClick(item.id)}
                    className="py-2 px-4 rounded-lg hover:bg-purple-500/10 transition-colors duration-200"
                  >
                    {item.label}
                  </button>
                </motion.li>
              ))}
              <motion.div 
                className="flex space-x-6 mt-4"
                variants={mobileItemVariants}
              >
                <motion.a
                  href="https://github.com/piyash1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300"
                  whileHover={{ 
                    scale: 1.2,
                    color: "#8245ec",
                    rotate: 10,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaGithub size={24} />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/moniruzzaman-piyash-b12a951b5/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300"
                  whileHover={{ 
                    scale: 1.2,
                    color: "#8245ec",
                    rotate: -10,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaLinkedin size={24} />
                </motion.a>
              </motion.div>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;