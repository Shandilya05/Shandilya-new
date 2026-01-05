import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { User, MapPin, Award, GraduationCap, Code } from 'lucide-react';
import { getCurrentExperience } from '../utils/experienceCalculator';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Dynamic experience calculation with TypeScript
  const [experience, setExperience] = useState<string>('');

  useEffect(() => {
    // Calculate experience immediately when component mounts
    try {
      const currentExp = getCurrentExperience();
      setExperience(currentExp);
    } catch (error) {
      console.warn('Failed to calculate experience:', error);
      setExperience('15+ Months'); // Fallback
    }
    
    // Update experience every hour to catch month changes
    const intervalId = setInterval(() => {
      try {
        const currentExp = getCurrentExperience();
        setExperience(currentExp);
      } catch (error) {
        console.warn('Failed to update experience:', error);
      }
    }, 3600000); // 1 hour in milliseconds
    
    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="about" className="py-20 relative bg-[#F5F1E8]">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-12 items-start">
            {/* Profile Photo */}
            <motion.div variants={itemVariants} className="lg:col-span-1 flex justify-center">
              <div className="relative">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative w-80 h-80 rounded-2xl overflow-hidden border-4 border-blue-500/30 shadow-2xl"
                >
                  <img
                    src="/Shandilya pic.jpg"
                    alt="Krishna Shandilya ML Enthusiast"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent"></div>
                </motion.div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center border-4 border-slate-900">
                  <Code className="w-8 h-8 text-white" />
                </div>
              </div>
            </motion.div>

            {/* About Content */}
            <motion.div variants={itemVariants} className="lg:col-span-2 space-y-6">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20">
                <div className="flex items-center space-x-3 mb-6">
                  <User className="w-6 h-6 text-blue-400" />
                  <h3 className="text-2xl font-semibold">Who I Am</h3>
                </div>
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>
                    Hi, this is <span className="text-blue-400 font-semibold">Krishna Shandilya</span>, 
                    an AI/ML enthusiast with a strong focus on Machine Learning, Deep Learning, 
                    and Generative AI. I am currently in my final year of B.Tech, majoring in 
                    Computer Science and Engineering at the Indian Institute of Information 
                    Technology and Management, Gwalior (IIITM).
                  </p>

                  <p>
                    I have hands-on experience working on real-world projects across Computer vision, NLP
                    generative models, and scalable AI systems. My work includes research-driven 
                    projects in Computer Vision, as well as 
                    applied industry projects involving agentic RAG pipelines .
                  </p>

                  <p>
                    I enjoy learning new 
                    technologies, solving complex problems, and translating research ideas into 
                    practical, production-ready systems. I am open to exciting opportunities worldwide 
                    where I can contribute in AI/Data Science while continuing to 
                    grow and learn in challenging environments.
                  </p>

                </div>
              </div>

              {/* Quick Info Cards */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="bg-[#ECE7DD] rounded-xl p-6 border border-[#D6CFC4] text-center transition-shadow hover:shadow-md"
                >
                  <MapPin className="w-6 h-6 text-[#4F7DF3] mx-auto mb-3" />
                  <p className="text-sm text-[#6B6B6B] mb-1">Location</p>
                  <p className="text-[#2E2E2E] font-medium">Gwalior</p>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="bg-[#ECE7DD] rounded-xl p-6 border border-[#D6CFC4] text-center transition-shadow hover:shadow-md"
                >
                  <Award className="w-6 h-6 text-[#4F7DF3] mx-auto mb-3" />
                  <p className="text-sm text-[#6B6B6B] mb-1">Experience</p>
                  <p
                    className="text-[#2E2E2E] font-medium"
                    title={`Calculated: ${experience}`}
                  >
                    {experience || 'Calculating...'}
                  </p>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="bg-[#ECE7DD] rounded-xl p-6 border border-[#D6CFC4] text-center transition-shadow hover:shadow-md"
                >
                  <GraduationCap className="w-6 h-6 text-[#4F7DF3] mx-auto mb-3" />
                  <p className="text-sm text-[#6B6B6B] mb-1">Education</p>
                  <p className="text-[#2E2E2E] font-medium">B.Tech CSE</p>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="bg-[#ECE7DD] rounded-xl p-6 border border-[#D6CFC4] text-center transition-shadow hover:shadow-md"
                >
                  <Code className="w-6 h-6 text-[#4F7DF3] mx-auto mb-3" />
                  <p className="text-sm text-[#6B6B6B] mb-1">Focus</p>
                  <p className="text-[#2E2E2E] font-medium">Data Science /    AI Research</p>
                </motion.div>
              </div>


              {/* Fun Stats */}
              <div className="bg-[#ECE7DD] rounded-2xl p-6 border border-[#D6CFC4]">
                <h4 className="text-xl font-semibold mb-6 text-center text-[#2E2E2E]">
                  Quick Stats
                </h4>

                <div className="grid grid-cols-2 gap-4">
                  <div className="flex justify-between items-center">
                    <span className="text-[#6B6B6B]">Technologies</span>
                    <span className="text-[#4F7DF3] font-medium">10+</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-[#6B6B6B]">Lines of Code</span>
                    <span className="text-[#4F7DF3] font-medium">5K+</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-[#6B6B6B]">Coffee Consumed</span>
                    <span className="text-[#4F7DF3] font-medium">∞</span>
                  </div>
                </div>
              </div>


              {/* Achievements Highlights */}
              {/* <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl p-6 backdrop-blur-sm border border-purple-500/20">
                <h4 className="text-xl font-semibold mb-4 text-center text-white">Recent Highlights</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-gray-300">Contributed to CloudBank platform</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span className="text-gray-300">Deloitte Job Simulation completed</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-gray-300">Research paper at NCIPETC-24</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                    <span className="text-gray-300">Multiple certifications earned</span>
                  </div>
                </div>
              </div> */}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
