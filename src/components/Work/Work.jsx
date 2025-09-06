import React, { useState, useEffect } from "react";
import { projects } from "../../constants";
import { motion, AnimatePresence } from "framer-motion";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

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

  const projectsGridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.6,
      },
    },
  };

  const projectCardVariants = {
    hidden: {
      opacity: 0,
      y: 100,
      rotateX: -15,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: {
      opacity: 0,
      scale: 1.2,
      filter: "blur(10px)",
    },
    visible: {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.6,
        delay: 0.2,
        ease: "easeOut",
      },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.4,
        ease: "easeOut",
      },
    },
  };

  const tagVariants = {
    hidden: { opacity: 0, scale: 0, rotate: 45 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.4,
        ease: "backOut",
      },
    },
  };

  const modalVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      rotateY: -15,
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      rotateY: 15,
      transition: {
        duration: 0.3,
        ease: "easeIn",
      },
    },
  };

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.3 }
    },
    exit: { 
      opacity: 0,
      transition: { duration: 0.3, delay: 0.2 }
    },
  };

  return (
    <motion.section
      id="work"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans relative"
      initial={isMobile ? "visible" : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount: 0.1, margin: "-50px" }}
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
          PROJECTS
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
          A showcase of the projects I have worked on, highlighting my skills
          and experience in various technologies
        </motion.p>
      </motion.div>

      {/* Projects Grid */}
      <motion.div 
        className="grid gap-8 sm:gap-12 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        initial={isMobile ? "visible" : "hidden"}
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={projectsGridVariants}
      >
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            onClick={() => handleOpenModal(project)}
            className="border border-white bg-gray-900 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden cursor-pointer w-full max-w-sm mx-auto sm:max-w-none"
            initial={isMobile ? "visible" : "hidden"}
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={projectCardVariants}
            whileHover={{ 
              y: -10,
              scale: 1.02,
              boxShadow: "0 25px 50px -12px rgba(147, 51, 234, 0.5)",
              transition: { duration: 0.3, ease: "easeOut" }
            }}
            whileTap={{ scale: 0.98 }}
            layout
          >
            <motion.div 
              className="p-3 sm:p-4"
              variants={{
                hidden: { opacity: 0 },
                visible: { 
                  opacity: 1,
                  transition: { duration: 0.4, delay: 0.2 }
                }
              }}
            >
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full h-40 sm:h-48 object-cover rounded-xl"
                variants={imageVariants}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
              />
            </motion.div>
            
            <motion.div 
              className="p-4 sm:p-6"
              variants={contentVariants}
            >
              <motion.h3 
                className="text-xl sm:text-2xl font-bold text-white mb-2"
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { 
                    opacity: 1, 
                    x: 0,
                    transition: { duration: 0.5, delay: 0.1 }
                  }
                }}
              >
                {project.title}
              </motion.h3>
              
              <motion.p 
                className="text-gray-500 mb-3 sm:mb-4 pt-2 sm:pt-4 line-clamp-3 text-sm sm:text-base"
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: { duration: 0.5, delay: 0.2 }
                  }
                }}
              >
                {project.description}
              </motion.p>
              
              <motion.div 
                className="mb-3 sm:mb-4"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.1,
                      delayChildren: 0.3,
                    },
                  },
                }}
              >
                {project.tags.map((tag, tagIndex) => (
                  <motion.span
                    key={tagIndex}
                    className="inline-block bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-2 py-1 mr-1 sm:mr-2 mb-1 sm:mb-2"
                    variants={tagVariants}
                    whileHover={{ 
                      scale: 1.1,
                      backgroundColor: "#8b5cf6",
                      color: "#ffffff",
                      transition: { duration: 0.2 }
                    }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      {/* Modal Container */}
      <AnimatePresence mode="wait">
        {selectedProject && (
          <motion.div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <motion.div 
              className="bg-gray-900 rounded-xl shadow-2xl lg:w-full w-[90%] max-w-3xl overflow-hidden relative"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              layoutId={`project-${selectedProject.id}`}
            >
              <motion.div 
                className="flex justify-end p-4"
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ 
                  opacity: 1, 
                  rotate: 0,
                  transition: { delay: 0.3, duration: 0.3 }
                }}
              >
                <motion.button
                  onClick={handleCloseModal}
                  className="text-white text-3xl font-bold hover:text-purple-500"
                  whileHover={{ 
                    scale: 1.2, 
                    rotate: 90,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  &times;
                </motion.button>
              </motion.div>

              <motion.div 
                className="flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                  transition: { delay: 0.2, duration: 0.5 }
                }}
              >
                <motion.div 
                  className="w-full flex justify-center bg-gray-900 px-4"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ 
                    scale: 1, 
                    opacity: 1,
                    transition: { delay: 0.3, duration: 0.5 }
                  }}
                >
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="lg:w-full w-[95%] object-contain rounded-xl shadow-2xl"
                  />
                </motion.div>
                
                <motion.div 
                  className="lg:p-8 p-6"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0,
                    transition: { delay: 0.4, duration: 0.5 }
                  }}
                >
                  <motion.h3 
                    className="lg:text-3xl font-bold text-white mb-4 text-md"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ 
                      opacity: 1, 
                      x: 0,
                      transition: { delay: 0.5, duration: 0.5 }
                    }}
                  >
                    {selectedProject.title}
                  </motion.h3>
                  
                  <motion.p 
                    className="text-gray-400 mb-6 lg:text-base text-xs"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ 
                      opacity: 1, 
                      y: 0,
                      transition: { delay: 0.6, duration: 0.5 }
                    }}
                  >
                    {selectedProject.description}
                  </motion.p>
                  
                  <motion.div 
                    className="flex flex-wrap gap-2 mb-6"
                    initial={{ opacity: 0 }}
                    animate={{ 
                      opacity: 1,
                      transition: { 
                        delay: 0.7, 
                        staggerChildren: 0.1,
                        delayChildren: 0.1
                      }
                    }}
                  >
                    {selectedProject.tags.map((tag, index) => (
                      <motion.span
                        key={index}
                        className="bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-2 py-1"
                        initial={{ scale: 0, rotate: 180 }}
                        animate={{ 
                          scale: 1, 
                          rotate: 0,
                          transition: { 
                            delay: index * 0.1,
                            duration: 0.4,
                            ease: "backOut"
                          }
                        }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </motion.div>
                  
                  <motion.div 
                    className="flex gap-4"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ 
                      opacity: 1, 
                      y: 0,
                      transition: { delay: 0.8, duration: 0.5 }
                    }}
                  >
                    <motion.a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-1/2 bg-gray-800 hover:bg-purple-800 text-gray-400 lg:px-6 lg:py-2 px-2 py-1 rounded-xl lg:text-xl text-sm font-semibold text-center"
                      whileHover={{ 
                        scale: 1.05,
                        backgroundColor: "#7c3aed",
                        color: "#ffffff",
                        transition: { duration: 0.2 }
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      View Code
                    </motion.a>
                    
                    <motion.a
                      href={selectedProject.webapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-1/2 bg-purple-600 hover:bg-purple-800 text-white lg:px-6 lg:py-2 px-2 py-1 rounded-xl lg:text-xl text-sm font-semibold text-center"
                      whileHover={{ 
                        scale: 1.05,
                        backgroundColor: "#5b21b6",
                        boxShadow: "0 10px 25px rgba(139, 92, 246, 0.5)",
                        transition: { duration: 0.2 }
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      View Live
                    </motion.a>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default Work;