import React from "react";
import { education } from "../../constants"; // Import the education data
import { motion } from "framer-motion";

const Education = () => {
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
      y: -60,
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

  const timelineLineVariants = {
    hidden: { 
      height: 0,
      opacity: 0,
    },
    visible: {
      height: "100%",
      opacity: 1,
      transition: {
        duration: 2,
        delay: 0.8,
        ease: "easeInOut",
      },
    },
  };

  const educationItemVariants = {
    hidden: (index) => ({
      opacity: 0,
      x: index % 2 === 0 ? -100 : 100,
      y: 50,
      scale: 0.8,
      rotateY: index % 2 === 0 ? -30 : 30,
    }),
    visible: (index) => ({
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 0.8,
        delay: 0.2 * index,
        ease: "easeOut",
      },
    }),
  };

  const circleVariants = {
    hidden: {
      scale: 0,
      rotate: -180,
      opacity: 0,
    },
    visible: (index) => ({
      scale: 1,
      rotate: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        delay: 0.3 + 0.2 * index,
        ease: "backOut",
      },
    }),
  };

  const contentVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: 0.3,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: {
      scale: 0,
      rotate: 90,
      opacity: 0,
    },
    visible: {
      scale: 1,
      rotate: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 0.4,
        ease: "backOut",
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        delay: 0.5,
        ease: "easeOut",
      },
    },
  };

  const gradeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        delay: 0.6,
        ease: "easeOut",
      },
    },
  };

  const descVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.7,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section
      id="education"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-3"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      {/* Section Title */}
      <motion.div 
        className="text-center mb-16"
        variants={titleVariants}
      >
        <motion.h2 
          className="text-4xl font-bold text-white"
          variants={{
            hidden: { opacity: 0, y: -30, rotateX: -90 },
            visible: { 
              opacity: 1, 
              y: 0,
              rotateX: 0,
              transition: { duration: 0.8, ease: "easeOut" }
            }
          }}
        >
          EDUCATION
        </motion.h2>
        <motion.div 
          className="w-32 h-1 bg-purple-500 mx-auto mt-4"
          variants={{
            hidden: { width: 0, opacity: 0 },
            visible: { 
              width: 128, 
              opacity: 1,
              transition: { duration: 1, delay: 0.3, ease: "easeOut" }
            }
          }}
        />
        <motion.p 
          className="text-gray-400 mt-4 text-lg font-semibold"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { 
              opacity: 1, 
              y: 0,
              transition: { duration: 0.6, delay: 0.5, ease: "easeOut" }
            }
          }}
        >
          My education has been a journey of learning and development. Here are the details of my academic background
        </motion.p>
      </motion.div>

      {/* Education Timeline */}
      <motion.div 
        className="relative"
        variants={{
          hidden: { opacity: 0 },
          visible: { 
            opacity: 1,
            transition: { delay: 0.6, duration: 0.5 }
          }
        }}
      >
        {/* Vertical line with animation */}
        <motion.div 
          className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 sm:-translate-x-0 w-1 bg-white"
          variants={timelineLineVariants}
          style={{ top: 0 }}
        />

        {/* Education Entries */}
        {education.map((edu, index) => (
          <motion.div
            key={edu.id}
            className={`flex flex-col sm:flex-row items-center mb-16 ${
              index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
            }`}
            custom={index}
            variants={educationItemVariants}
          >
            {/* Timeline Circle */}
            <motion.div 
              className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 bg-gray-400 border-4 border-[#8245ec] w-12 h-12 sm:w-16 sm:h-16 rounded-full flex justify-center items-center z-10"
              custom={index}
              variants={circleVariants}
              whileHover={{ 
                scale: 1.2,
                borderColor: "#a855f7",
                boxShadow: "0 0 25px rgba(130, 69, 236, 0.6)",
                transition: { duration: 0.3 }
              }}
            >
              <motion.img
                src={edu.img}
                alt={edu.school}
                className="w-full h-full object-cover rounded-full"
                variants={{
                  hidden: { scale: 0, rotate: 180 },
                  visible: { 
                    scale: 1, 
                    rotate: 0,
                    transition: { duration: 0.5, delay: 0.4 + 0.2 * index }
                  }
                }}
              />
            </motion.div>

            {/* Content Section */}
            <motion.div
              className={`w-full sm:max-w-md p-4 sm:p-8 rounded-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] ${
                index % 2 === 0 ? "sm:ml-0" : "sm:mr-0"
              } sm:ml-44 sm:mr-44 ml-8`}
              variants={contentVariants}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 30px 2px rgba(130, 69, 236, 0.5)",
                y: -5,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
            >
              {/* Flex container for image and text */}
              <motion.div 
                className="flex items-center space-x-6"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.1,
                      delayChildren: 0.2,
                    },
                  },
                }}
              >
                {/* School Logo/Image */}
                <motion.div 
                  className="w-24 h-16 bg-white rounded-md overflow-hidden"
                  variants={imageVariants}
                  whileHover={{ 
                    scale: 1.1,
                    rotate: 5,
                    transition: { duration: 0.3 }
                  }}
                >
                  <img
                    src={edu.img}
                    alt={edu.school}
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                {/* Degree, School Name, and Date */}
                <motion.div 
                  className="flex flex-col justify-between"
                  variants={textVariants}
                >
                  <motion.div
                    variants={{
                      hidden: { opacity: 0, y: -10 },
                      visible: { 
                        opacity: 1, 
                        y: 0,
                        transition: { duration: 0.4, delay: 0.1 }
                      }
                    }}
                  >
                    <motion.h3 
                      className="text-xl sm:text-xl font-semibold text-white"
                      variants={{
                        hidden: { opacity: 0, x: -20 },
                        visible: { 
                          opacity: 1, 
                          x: 0,
                          transition: { duration: 0.5, delay: 0.2 }
                        }
                      }}
                    >
                      {edu.degree}
                    </motion.h3>
                    <motion.h4 
                      className="text-md sm:text-sm text-gray-300"
                      variants={{
                        hidden: { opacity: 0, x: -15 },
                        visible: { 
                          opacity: 1, 
                          x: 0,
                          transition: { duration: 0.5, delay: 0.3 }
                        }
                      }}
                    >
                      {edu.school}
                    </motion.h4>
                  </motion.div>
                  {/* Date at the bottom */}
                  <motion.p 
                    className="text-sm text-gray-500 mt-2"
                    variants={{
                      hidden: { opacity: 0, scale: 0.8 },
                      visible: { 
                        opacity: 1, 
                        scale: 1,
                        transition: { duration: 0.4, delay: 0.4 }
                      }
                    }}
                  >
                    {edu.date}
                  </motion.p>
                </motion.div>
              </motion.div>

              <motion.p 
                className="mt-4 text-gray-400 font-bold"
                variants={gradeVariants}
                whileHover={{ 
                  color: "#8b5cf6",
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
              >
                Grade: {edu.grade}
              </motion.p>
              
              <motion.p 
                className="mt-4 text-gray-400"
                variants={descVariants}
              >
                {edu.desc}
              </motion.p>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Education;