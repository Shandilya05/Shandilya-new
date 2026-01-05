import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Calendar, MapPin, ExternalLink } from 'lucide-react';

interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  technologies: string[];
  isCurrentRole?: boolean;
  mentor?: string;
}

const Experience: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences: ExperienceItem[] = [
    {
      title: 'R&D Intern',
      company: 'DRDO – Research Centre Imarat (RCI)',
      location: 'Hyderabad, Telangana',
      period: 'May 2025 – July 2025',
      description: [
        'Developed a real-time UAV detection and tracking system using deep learning for low-altitude aerial surveillance scenarios',
        'Fine-tuned lightweight CNN-based object detectors with custom data augmentation strategies to handle occlusion-heavy environments',
        // 'Integrated Deep SORT with Kalman filtering and cosine-similarity based re-identification for multi-object tracking',
        // 'Improved tracking performance, achieving higher IDF1 and AUC compared to baseline tracking pipelines'
      ],
      technologies: ['Deep Learning', 'Object Detection', 'OpenCV', 'PyTorch', 'Deep SORT', 'Kalman Filter']
    }
    ,
    {
      title: 'AI Intern',
      company: 'Pravahamn DigiTOT',
      location: 'Remote',
      period: 'January 2025 – March 2025',
      description: [
        'Designed and implemented an Agentic RAG pipeline enabling AI agents to perform dynamic task execution across business domains',
        'Built multi-level indexing and hybrid retrieval pipelines combining dense vector search and structured querying',
        'Improved retrieval precision using latent query generation and adaptive reranking techniques',
        'Reduced retrieval latency while enhancing contextual relevance using production-grade LLM tooling'
      ],
      technologies: ['RAG', 'Agentic AI', 'Hugging Face', 'Pinecone', 'LangChain', 'Ollama', 'LLM Integration']
    },
    {
      title: 'Undergraduate Researcher',
      company: 'ABV-IIITM',
      mentor: 'Dr. Deepak Kumar Dewangan',
      location: 'Gwalior, Madhya Pradesh',
      period: 'February 2025 – Present',
      isCurrentRole: true,
      description: [
        'Conducting research on underwater image enhancement using Deep learning-based generative models',
        'Designed U-Net inspired generator architectures integrated with Dual attention blocks',
        'Explored GANs, diffusion models, and dual-attention strategies to improve color restoration and structural fidelity',
        // 'Evaluated models using standard image quality metrics such as PSNR and SSIM across multiple benchmark datasets'
      ],
      technologies: ['Deep Learning', 'GANs', 'Diffusion Models', 'Attention Mechanisms', 'PyTorch']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="experience" className="py-20 bg-[#F5F1E8]">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                Experience
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 to-purple-400 hidden md:block"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={`${exp.company}-${index}`}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  className="relative group"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 w-4 h-4 bg-blue-400 rounded-full border-4 border-slate-900 hidden md:block group-hover:bg-purple-400 transition-colors duration-300">
                    {exp.isCurrentRole && (
                      <div className="absolute inset-0 bg-blue-400 rounded-full animate-ping opacity-75"></div>
                    )}
                  </div>
                  
                  <div className="md:ml-20 bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20 hover:border-blue-400/40 hover:bg-slate-800/70 transition-all duration-300">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <Briefcase className="w-5 h-5 text-blue-400" />
                          <h3 className="text-xl font-semibold text-white">
                            {exp.title}
                          </h3>
                          {exp.isCurrentRole && (
                            <span className="px-2 py-1 bg-blue-200/20 text-white -500 text-s font-medium rounded-full border border-blue-1000/30">
                              Current
                            </span>
                          )}
                        </div>
                        <p className="text-blue-400 font-medium text-lg mb-3">
                          {exp.company}
                        </p>
                      </div>
                      
                      <div className="flex flex-col md:items-end space-y-2">
                        <div className="flex items-center space-x-2 text-gray-300 text-sm">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-gray-300 text-sm">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Job Description */}
                    <div className="mb-6">
                      <ul className="space-y-3">
                        {exp.description.map((item, i) => (
                          <li key={i} className="text-gray-300 flex items-start leading-relaxed">
                            <span className="text-blue-400 mr-3 mt-2 flex-shrink-0">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-3">
                        Technologies & Skills
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <motion.span
                            key={tech}
                            whileHover={{ scale: 1.05 }}
                            className="px-3 py-1 bg-grey-300/20 text-blue-400 rounded-full text-sm border border-blue-500/30 hover:bg-blue-500/30 hover:border-blue-400/50 transition-all duration-200 cursor-default"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-12"
          >
            <motion.div
              whileHover={{
                y: -6,
                boxShadow: '0 20px 40px rgba(79,125,243,0.25)',
              }}
              transition={{ type: 'spring', stiffness: 120 }}
              className="bg-[#ECE7DD] rounded-2xl p-8 border border-[#D6CFC4]"
            >
              {/* Heading */}
              <motion.h3
                whileHover={{ scale: 1.03 }}
                transition={{ type: 'spring', stiffness: 200 }}
                className="text-xl font-semibold text-[#4F7DF3] mb-3"
              >
                Ready to Work Together?
              </motion.h3>

              {/* Description */}
              <p className="text-[#6B6B6B] mb-6 leading-relaxed">
                I'm always interested in new opportunities and exciting projects.
                Let’s discuss how we can create something amazing together.
              </p>

              {/* CTA Button */}
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.08, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center space-x-2 px-6 py-3
                          bg-gradient-to-r from-[#4F7DF3] to-[#6B8DF5]
                          text-white font-medium rounded-xl
                          transition-all duration-200
                          shadow-md hover:shadow-xl"
              >
                <span>Get in Touch</span>
                <ExternalLink className="w-4 h-4" />
              </motion.a>
            </motion.div>
          </motion.div>


        </motion.div>
      </div>
    </section>
  );
};

export default Experience;



