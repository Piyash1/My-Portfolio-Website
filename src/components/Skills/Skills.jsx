// src/components/Skills/Skills.jsx
import React from "react";
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

const Skills = () => {
  // Animation variants
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

  const titleVariants = {
    hidden: { 
      opacity: 0, 
      y: -50,
      scale: 0.8,
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

  const categoryVariants = {
    hidden: {
      opacity: 0,
      y: 100,
      rotateX: -15,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const skillItemVariants = {
    hidden: {
      opacity: 0,
      scale: 0,
      rotateY: 180,
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 0.5,
        ease: "backOut",
      },
    },
  };

  const skillsContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  return (
    <motion.section
      id="skills"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans bg-skills-gradient clip-path-custom"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      {/* Section Title */}
      <motion.div 
        className="text-center mb-8"
        variants={titleVariants}
      >
        <motion.h2 
          className="text-3xl sm:text-4xl font-bold text-white"
          variants={{
            hidden: { opacity: 0, y: -30 },
            visible: { 
              opacity: 1, 
              y: 0,
              transition: { duration: 0.6, ease: "easeOut" }
            }
          }}
        >
          SKILLS
        </motion.h2>
        <motion.div 
          className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"
          variants={{
            hidden: { width: 0, opacity: 0 },
            visible: { 
              width: 96, 
              opacity: 1,
              transition: { duration: 0.8, delay: 0.3, ease: "easeOut" }
            }
          }}
        />
        <motion.p 
          className="text-gray-400 mt-4 text-lg font-semibold"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { 
              opacity: 1, 
              y: 0,
              transition: { duration: 0.6, delay: 0.4, ease: "easeOut" }
            }
          }}
        >
          A collection of my technical skills and expertise honed through various projects and experiences
        </motion.p>
      </motion.div>

      {/* Skill Categories */}
      <motion.div 
        className="flex flex-wrap gap-1 lg:gap-5 py-10 justify-between"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.2,
              delayChildren: 0.6,
            },
          },
        }}
      >
        {SkillsInfo.map((category, categoryIndex) => (
          <motion.div
            key={category.title}
            className="bg-gray-900 backdrop-blur-md px-6 sm:px-10 py-8 sm:py-6 mb-10 w-full sm:w-[48%] rounded-2xl border border-white 
            shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]"
            variants={categoryVariants}
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 0 30px 2px rgba(130,69,236,0.5)",
              transition: { duration: 0.3 }
            }}
          >
            <motion.h3 
              className="text-2xl sm:text-3xl font-semibold text-gray-400 mb-4 text-center"
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { 
                  opacity: 1, 
                  x: 0,
                  transition: { duration: 0.5, delay: 0.2 }
                }
              }}
            >
              {category.title}
            </motion.h3>

            {/* Skill Items - 3 per row on larger screens */}
            <Tilt
              tiltMaxAngleX={20}
              tiltMaxAngleY={20}
              perspective={1000}
              scale={1.05}
              transitionSpeed={1000}
              gyroscope={true}
            >
              <motion.div 
                className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full"
                variants={skillsContainerVariants}
              >
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className="flex items-center justify-center space-x-2 bg-transparent border-2 border-gray-700 rounded-3xl py-2 px-2 sm:py-2 sm:px-2 text-center"
                    variants={skillItemVariants}
                    whileHover={{ 
                      scale: 1.1,
                      borderColor: "#8245ec",
                      backgroundColor: "rgba(130, 69, 236, 0.1)",
                      transition: { duration: 0.2 }
                    }}
                    whileTap={{ scale: 0.95 }}
                    custom={skillIndex}
                  >
                    <motion.img
                      src={skill.logo}
                      alt={`${skill.name} logo`}
                      className="w-6 h-6 sm:w-8 sm:h-8"
                      variants={{
                        hidden: { rotate: -180, opacity: 0 },
                        visible: { 
                          rotate: 0, 
                          opacity: 1,
                          transition: { duration: 0.6, delay: skillIndex * 0.1 }
                        }
                      }}
                    />
                    <motion.span 
                      className="text-xs sm:text-sm text-gray-300"
                      variants={{
                        hidden: { opacity: 0, x: 10 },
                        visible: { 
                          opacity: 1, 
                          x: 0,
                          transition: { duration: 0.4, delay: skillIndex * 0.1 + 0.2 }
                        }
                      }}
                    >
                      {skill.name}
                    </motion.span>
                  </motion.div>
                ))}
              </motion.div>
            </Tilt>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Skills;