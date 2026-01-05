import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const education = [
    {
      degree: 'Bachelor of Technology in Computer Science and Engineering',
      institution: 'Indian Institute of Information Technology and Management Gwalior (ABVIIITM)',
      location: 'Madhya Pradesh, India',
      period: '2022 – 2026',
      description:
        'Comprehensive study of computer science fundamentals, including data structures, algorithms, software engineering, operating systems, databases, and modern computing technologies.',
      grade: 'CGPA: 8.5/10',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 0.7,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  const floatVariants = {
    initial: { y: 0 },
    animate: {
      y: [-5, 5, -5],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <section
      id="education"
      className="py-16 sm:py-20 lg:py-24 relative bg-[#F5F1E8]"
    >
      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          variants={floatVariants}
          initial="initial"
          animate="animate"
          className="absolute top-20 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"
        />
        <motion.div
          variants={floatVariants}
          initial="initial"
          animate="animate"
          transition={{ delay: 1 }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="max-w-5xl mx-auto"
        >
          {/* Section Header */}
          <motion.div
            variants={itemVariants}
            className="text-center mb-12 sm:mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={inView ? { scale: 1 } : { scale: 0 }}
              transition={{ duration: 0.5, type: 'spring' }}
              className="inline-block mb-4"
            >
              <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 p-3 rounded-2xl backdrop-blur-sm border border-blue-500/20">
                <GraduationCap className="w-8 h-8 text-blue-400" />
              </div>
            </motion.div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 via-purple-700 to-pink-700 bg-clip-text text-transparent">
                Education
              </span>
            </h2>

            <p className="text-blue-900 font-semibold max-w-2xl mx-auto">

              Academic background and formal training in computer science
            </p>

            <motion.div
              initial={{ width: 0 }}
              animate={inView ? { width: '5rem' } : { width: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full mt-4"
            />
          </motion.div>

          {/* Education Card */}
          {education.map((edu, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-300" />
              <div className="relative bg-slate-800/80 backdrop-blur-xl rounded-2xl p-6 sm:p-8 border border-slate-700/50 group-hover:border-blue-500/30 transition-all duration-300">
                <h4 className="text-xl sm:text-2xl font-bold text-white mb-2">
                  {edu.degree}
                </h4>
                <p className="text-blue-300 font-semibold mb-4">
                  {edu.institution}
                </p>

                <div className="flex flex-wrap gap-3 mb-4">
                  <div className="flex items-center gap-2 bg-slate-700/50 px-4 py-2 rounded-full text-gray-300">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{edu.period}</span>
                  </div>
                  <div className="flex items-center gap-2 bg-slate-700/50 px-4 py-2 rounded-full text-gray-300">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{edu.location}</span>
                  </div>
                </div>

                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  {edu.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
