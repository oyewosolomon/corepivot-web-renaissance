
import { motion } from "framer-motion";
import { ArrowRight, Code, Zap, Target } from "lucide-react";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-corepivot-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-corepivot-300 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-5xl mx-auto"
        >
          <motion.div
            variants={itemVariants}
            className="flex justify-center space-x-8 mb-8"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0 }}
              className="p-3 bg-corepivot-100 rounded-lg"
            >
              <Code className="text-corepivot-600" size={24} />
            </motion.div>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.7 }}
              className="p-3 bg-corepivot-100 rounded-lg"
            >
              <Zap className="text-corepivot-600" size={24} />
            </motion.div>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1.4 }}
              className="p-3 bg-corepivot-100 rounded-lg"
            >
              <Target className="text-corepivot-600" size={24} />
            </motion.div>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight"
          >
            Transform Your{" "}
            <span className="text-gradient">Legacy Systems</span>
            <br />
            Into Agile Powerhouses
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Specializing in product strategy and digital transformation, 
            CorePivot helps enterprises modernize their technology stack 
            and accelerate innovation.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-corepivot-600 text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-2 hover:bg-corepivot-700 transition-colors duration-200 shadow-lg"
            >
              Start Your Transformation
              <ArrowRight size={20} />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-corepivot-600 text-corepivot-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-corepivot-600 hover:text-white transition-all duration-200"
            >
              View Case Studies
            </motion.button>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-corepivot-600 mb-2">150+</div>
              <div className="text-gray-600">Legacy Systems Transformed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-corepivot-600 mb-2">98%</div>
              <div className="text-gray-600">Client Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-corepivot-600 mb-2">50%</div>
              <div className="text-gray-600">Average Time-to-Market Improvement</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-corepivot-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-corepivot-600 rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
