import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink, Github, Zap, ArrowRight } from "lucide-react";

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  live: string;
  featured: boolean;
}

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.05,
  });

  const projects: Project[] = [
    {
      title: "Underwater Image Enhancement",
      description:
        "Designed a deep learning–based underwater image enhancement framework using GANs and attention mechanisms. Built a U-Net–inspired generator with spatial and channel attention to restore color balance, contrast, ",
      image:
        "underwater.jpg",
      technologies: [
        "Deep Learning",
        "GANs",
        "Attention",
        "Pytorch",
        "Tensorflow",
        // "Tailwind CSS",
      ],
      github: "https://github.com/Shandilya25/Underwater-Image-Enhancement",
      live: "#",
      featured: true,
    },
    {
      title: "Fitness Tracker",
      description:
        "Developed a machine learning pipeline to classify exercises using time-series sensor data from accelerometers and gyroscopes. Applied signal preprocessing with low-pass filtering, dimensionality reduction using PCA, followed by supervised classification and performance evaluation.",
      image:
        "/fitness.jpg",
      technologies: [
        "Python",
        "Scikit-Learn",
        "Pandas",
        "PCA",
        // "Nodemailer",
        // "Tailwind CSS",
      ],
      github: "https://github.com/Shandilya25/Fitness-Tracker-ML",
      live: "#",
      featured: true,
    },
    {
      title: "Super Resolution for Medical Imaging",
      description:
        "Implemented and evaluated single-image super-resolution models for medical imaging, including chest X-rays and brain MRI scans. Experimented with CNN-based architectures and lightweight models to improve image resolution.",
      image:
        "/lungs.jpg",
      technologies: [
        "Deep Learning",
        "Pytorch",
        "Tensorflow",
        "CNN",
        // "Convex",
        // "Gemini AI",
      ],
      github: "https://github.com/Shandilya25/Deep-Learning-Based-Super-Resolution-for-Medical-Imaging-",
      live: "#",
      featured: true,
    },
    {
      title: "Electricity Forecasting System",
      description:
          "Built a time-series forecasting system to predict electricity consumption at fixed 15-minute intervals. Performed data preprocessing, feature engineering, and model training using machine learning using temporal attention",
      image:
        "electricity.jpg",
      technologies: [
        "Machine Learning",
        "Sklearn",
        "Pandas",
        "Pytorch",
        "Time Series",
        // "JWT",
      ],
      github: "https://github.com/Shandilya25/Electricity-Forecasting-Using-Deep-Learning",
      live: "#",
      featured: true,
    },
    // {
    //   title: "Intrusion Detection system",
    //   description:
    //     "A secure document management system for organizations to handle employee records, with role-based access control, AWS S3 integration, and automated backup system.",
    //   image:
    //     "https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=600&q=80",
    //   technologies: [
    //     "Python",
    //     "Machine Learning",
    //     "Scikit-Learn",
    //     "Pandas",
    //     // "AWS S3",
    //     // "JWT",
    //   ],
    //   github: "https://github.com/sreenandh/Employee-docs_manage",
    //   live: "#",
    //   featured: false,
    // },
    // {
    //   title: "Attendance Management System",
    //   description:
    //     "Built a no-code AI workflow using Opal that automates job application personalization. Generates role-specific resume bullet points, personalized cover letters, and smart answers for application questions. Reduced application time from 10+ minutes to under 60 seconds with automated autofill sheet generation for LinkedIn and ATS forms.",
    //   image: "/job-apply-ai.png",
    //   technologies: [
    //     "OpenCV",
    //     "Deep Learning",
    //     "Scikit-Learn",
    //     "XML",
    //     // "LLM Integration",
    //   ],
    //   github: "#",
    //   live: "#",
    //   featured: false,
    // },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 80, rotateX: -15 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.8,
        type: "spring",
        stiffness: 80,
      },
    },
  };

  return (
    <section id="projects" className="py-20 relative bg-[#F5F1E8]">
      {/* Animated background elements */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, -90, 0],
        }}
        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={inView ? { scale: 1 } : { scale: 0 }}
              transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-full px-6 py-2 mb-6"
            >
              <Zap className="w-4 h-4 text-purple-400" />
              <span className="text-purple-300 text-sm font-medium">
                Portfolio Showcase
              </span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-6">
              Crafting innovative digital experiences that drive real-world
              impact
            </p>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="w-32 h-1.5 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mx-auto rounded-full"
            />
          </motion.div>

          {/* Projects Grid */}
          <div className="grid gap-8 md:grid-cols-2">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={projectVariants}
                whileHover={{
                  y: -12,
                  scale: 1.02,
                  transition: { duration: 0.3 },
                }}
                className="group relative bg-slate-800/60 backdrop-blur-xl rounded-3xl overflow-hidden border border-slate-700/50 hover:border-blue-500/50 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-blue-500/20"
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                {/* Featured Badge */}
                {project.featured && (
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={
                      inView
                        ? { scale: 1, rotate: 0 }
                        : { scale: 0, rotate: -180 }
                    }
                    transition={{
                      delay: index * 0.2 + 0.5,
                      type: "spring",
                      stiffness: 200,
                    }}
                    className="absolute top-6 right-6 z-20"
                  >
                    <div className="flex items-center gap-1.5 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-1.5 rounded-full text-sm font-bold shadow-lg">
                      <Zap size={16} className="fill-current" />
                      <span>Featured</span>
                    </div>
                  </motion.div>
                )}

                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/5 group-hover:via-purple-500/5 group-hover:to-pink-500/5 transition-all duration-500 pointer-events-none" />

                {/* Image Section with parallax */}
                <div className="relative overflow-hidden h-64 bg-slate-900">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="w-full h-full"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 mix-blend-overlay z-10"></div>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent z-20"></div>
                </div>

                {/* Content Section */}
                <div className="p-8 relative">
                  <motion.h3
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                    className="text-2xl font-bold mb-3 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300"
                  >
                    {project.title}
                  </motion.h3>

                  <p className="text-gray-400 mb-6 leading-relaxed line-clamp-3 group-hover:text-gray-300 transition-colors duration-300">
                    {project.description}
                  </p>

                  {/* Technologies with stagger animation */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={
                          inView
                            ? { opacity: 1, scale: 1 }
                            : { opacity: 0, scale: 0 }
                        }
                        transition={{
                          delay: index * 0.2 + techIndex * 0.05,
                          type: "spring",
                          stiffness: 200,
                        }}
                        whileHover={{
                          scale: 1.1,
                          rotate: [0, -2, 2, 0],
                          transition: { duration: 0.3 },
                        }}
                        className="px-3 py-1.5 bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-300 rounded-lg text-xs font-medium border border-blue-500/20 hover:border-blue-400/40 hover:from-blue-500/20 hover:to-purple-500/20 transition-all duration-300 cursor-default"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  {/* Action Buttons with enhanced hover */}
                  <div className="flex gap-4 pt-4 border-t border-slate-700/50">
                    {project.github !== "#" && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05, x: -3 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 group/btn relative overflow-hidden flex items-center justify-center gap-2 px-4 py-3 bg-slate-800 hover:bg-slate-700 text-gray-300 hover:text-white rounded-xl transition-all duration-300 border border-slate-700 hover:border-slate-600"
                      >
                        <motion.div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-purple-500/0 group-hover/btn:from-blue-500/10 group-hover/btn:to-purple-500/10 transition-all duration-300" />
                        <Github
                          size={18}
                          className="group-hover/btn:rotate-12 transition-transform relative z-10"
                        />
                        <span className="font-medium relative z-10">Code</span>
                      </motion.a>
                    )}
                    {project.live !== "#" && (
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05, x: 3 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 group/btn relative overflow-hidden flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white rounded-xl transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40"
                      >
                        <motion.div className="absolute inset-0 bg-white/0 group-hover/btn:bg-white/10 transition-all duration-300" />
                        <ExternalLink
                          size={18}
                          className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform relative z-10"
                        />
                        <span className="font-medium relative z-10">
                          Live Demo
                        </span>
                        <ArrowRight
                          size={16}
                          className="opacity-0 group-hover/btn:opacity-100 -ml-2 group-hover/btn:ml-0 transition-all duration-300 relative z-10"
                        />
                      </motion.a>
                    )}
                  </div>
                </div>

                {/* Decorative corner with animated shine */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-transparent rounded-bl-full"
                />
              </motion.div>
            ))}
          </div>

          {/* View More CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="text-center mt-16"
          >
            <motion.a
              href="https://github.com/Shandilya25"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="group inline-flex items-center space-x-3 bg-gradient-to-r from-slate-800 to-slate-700 hover:from-slate-700 hover:to-slate-600 px-8 py-4 rounded-xl border-2 border-slate-600 hover:border-blue-400/50 transition-all duration-300 shadow-xl hover:shadow-2xl"
            >
              <Github className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              <span className="font-semibold text-white">
                View All Projects on GitHub
              </span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
