import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-parallax-tilt';
import profileImage from '../../assets/profile2.jpg';
import { motion } from 'framer-motion';

const About = () => {
  // Enhanced animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const leftSideVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const rightSideVariants = {
    hidden: { 
      opacity: 0, 
      x: 100,
      scale: 0.8,
      rotateY: 45,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
        delay: 0.5,
      },
    },
  };

  const greetingVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const nameVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      rotateX: -15,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.2,
      },
    },
  };

  const skillsVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.4,
      },
    },
  };

  const paragraphVariants = {
    hidden: { 
      opacity: 0, 
      y: 40,
      blur: 10,
    },
    visible: {
      opacity: 1,
      y: 0,
      blur: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.6,
      },
    },
  };

  const buttonVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.8,
      rotateX: -15,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: "backOut",
        delay: 0.8,
      },
    },
  };

  const imageVariants = {
    hidden: {
      opacity: 0,
      scale: 0.5,
      rotate: -180,
      filter: "blur(10px)",
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      filter: "blur(0px)",
      transition: {
        duration: 1.2,
        ease: "easeOut",
        delay: 0.7,
      },
    },
  };

  // Floating animation for the profile image
  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  // Particle-like background elements
  const particleVariants = {
    animate: {
      y: [-20, 20, -20],
      x: [-10, 10, -10],
      opacity: [0.3, 0.7, 0.3],
      scale: [1, 1.1, 1],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32 relative overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Floating background elements */}
      <motion.div
        className="absolute top-10 left-10 w-20 h-20 bg-purple-500 rounded-full opacity-10"
        variants={particleVariants}
        animate="animate"
      />
      <motion.div
        className="absolute bottom-20 right-20 w-16 h-16 bg-blue-500 rounded-full opacity-10"
        variants={particleVariants}
        animate="animate"
        style={{ animationDelay: "1s" }}
      />
      <motion.div
        className="absolute top-1/2 right-10 w-12 h-12 bg-pink-500 rounded-full opacity-10"
        variants={particleVariants}
        animate="animate"
        style={{ animationDelay: "2s" }}
      />

      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        {/* Left Side */}
        <motion.div 
          className="md:w-1/2 text-center md:text-left mt-8 md:mt-0"
          variants={leftSideVariants}
        >
          {/* Greeting */}
          <motion.div variants={greetingVariants}>
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight"
              whileHover={{ 
                scale: 1.02,
                color: "#a855f7",
                transition: { duration: 0.3 }
              }}
            >
              Hi, I am
            </motion.h1>
          </motion.div>

          {/* Name */}
          <motion.div variants={nameVariants}>
            <motion.h2 
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight"
              whileHover={{ 
                scale: 1.02,
                textShadow: "0 0 20px rgba(130, 69, 236, 0.8)",
                transition: { duration: 0.3 }
              }}
            >
              Moniruzzaman Piyash
            </motion.h2>
          </motion.div>

          {/* Skills Heading with Typing Effect */}
          <motion.div variants={skillsVariants}>
            <motion.h3 
              className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight"
              whileHover={{ scale: 1.02 }}
            >
              <span className="text-white">I am a </span>
              <ReactTypingEffect
                text={[
                  'Fullstack Developer',
                  'App Developer',
                  'AI/ML Enthusiast',
                  'Coder',
                ]}
                speed={100}
                eraseSpeed={50}
                typingDelay={500}
                eraseDelay={2000}
                cursorRenderer={(cursor) => (
                  <span className="text-[#8245ec]">{cursor}</span>
                )}
              />
            </motion.h3>
          </motion.div>

          {/* About Me Paragraph */}
          <motion.p 
            className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed"
            variants={paragraphVariants}
            whileHover={{ 
              color: "#d1d5db",
              transition: { duration: 0.3 }
            }}
          >
            I'm a recent B.Tech CSE graduate passionate about building full-stack applications using modern technologies like React, Tailwind CSS, Django, and PostgreSQL. I thrive on creating innovative, user-friendly solutions and am eager to contribute my skills to impactful projects.
          </motion.p>

          {/* Resume Button */}
          <motion.div variants={buttonVariants}>
            <motion.a
              href="https://drive.google.com/file/d/1wphCSTpBhSWr0uc9QFFBGY0tzW9476iz/view"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 relative overflow-hidden group"
              style={{
                background: 'linear-gradient(90deg, #8245ec, #a855f7)',
                boxShadow: '0 0 1px #8245ec, 0 0 2px #8245ec, 0 0 20px #8245ec', // softer initial
              }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 2px #8245ec, 0 0 5px #8245ec, 0 0 30px #8245ec", // softer glow
                y: -3,
                rotateX: -5,
                transition: { duration: 0.3 }
              }}
              whileTap={{ 
                scale: 0.98,
                y: 0,
                transition: { duration: 0.1 }
              }}
              animate={{
                boxShadow: [
                  "0 0 1px #8245ec, 0 0 2px #8245ec, 0 0 20px #8245ec",
                  "0 0 2px #8245ec, 0 0 5px #8245ec, 0 0 30px #8245ec",
                  "0 0 1px #8245ec, 0 0 2px #8245ec, 0 0 20px #8245ec"
                ],
              }}
              transition={{
                boxShadow: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
            >
              {/* Animated background overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-20"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              />
              
              {/* Shimmer effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30 -skew-x-12"
                initial={{ x: "-100%" }}
                whileHover={{ x: "200%" }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              />
              
              <span className="relative z-10">DOWNLOAD CV</span>
            </motion.a>
          </motion.div>

        </motion.div>

        {/* Right Side */}
        <motion.div 
          className="md:w-1/2 flex justify-center md:justify-end relative"
          variants={rightSideVariants}
        >
          {/* Animated rings around profile */}
          <motion.div
            className="absolute inset-0 border-2 border-purple-300 rounded-full opacity-20"
            animate={{
              rotate: 360,
              scale: [1, 1.1, 1],
            }}
            transition={{
              rotate: { duration: 20, repeat: Infinity, ease: "linear" },
              scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
            }}
          />
          <motion.div
            className="absolute inset-4 border border-blue-300 rounded-full opacity-20"
            animate={{
              rotate: -360,
              scale: [1.1, 1, 1.1],
            }}
            transition={{
              rotate: { duration: 15, repeat: Infinity, ease: "linear" },
              scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
            }}
          />

          <motion.div
            variants={floatingVariants}
            animate="animate"
          >
            <Tilt
              className="w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-4 border-purple-700 rounded-full relative z-10"
              tiltMaxAngleX={20}
              tiltMaxAngleY={20}
              perspective={1000}
              scale={1.05}
              transitionSpeed={1000}
              gyroscope={true}
            >
              <motion.img
                src={profileImage}
                alt="Moniruzzaman Piyash"
                className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
                variants={imageVariants}
                whileHover={{
                  scale: 1.05,
                  filter: "brightness(1.1) contrast(1.1)",
                  transition: { duration: 0.3 }
                }}
              />
            </Tilt>
          </motion.div>

          {/* Glowing orbs */}
          <motion.div
            className="absolute top-10 right-10 w-4 h-4 bg-purple-400 rounded-full opacity-60"
            animate={{
              y: [-5, 5, -5],
              opacity: [0.6, 1, 0.6],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-20 left-10 w-3 h-3 bg-blue-400 rounded-full opacity-60"
            animate={{
              y: [5, -5, 5],
              opacity: [0.6, 1, 0.6],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;