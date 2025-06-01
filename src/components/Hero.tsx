import { motion } from "framer-motion";
import { ArrowRight, Code, Zap, Target, ChevronDown, BarChart2, Clock, ShieldCheck } from "lucide-react";

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

  const floatingVariants = {
    float: {
      y: [0, -15, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 bg-gradient-to-b from-gray-50 to-white">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-corepivot-200 opacity-20"
            style={{
              width: Math.random() * 10 + 5 + 'px',
              height: Math.random() * 10 + 5 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
            }}
            animate={{
              y: [0, (Math.random() - 0.5) * 100],
              x: [0, (Math.random() - 0.5) * 50],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              delay: Math.random() * 5
            }}
          />
        ))}

        {/* Gradient blobs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-corepivot-400 to-corepivot-600 rounded-full blur-[100px] opacity-20"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-corepivot-300 to-corepivot-500 rounded-full blur-[120px] opacity-15"
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.15, 0.25, 0.15]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:w-1/2 text-center lg:text-left"
          >
            {/* Animated Icons */}
            <motion.div
              variants={itemVariants}
              className="flex justify-center lg:justify-start space-x-8 mb-12"
            >
              {[
                { icon: Code, color: "bg-corepivot-100", text: "text-corepivot-600" },
                { icon: Zap, color: "bg-corepivot-100", text: "text-corepivot-600" },
                { icon: Target, color: "bg-corepivot-100", text: "text-corepivot-600" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={floatingVariants}
                  animate="float"
                  transition={{ delay: index * 0.3 }}
                  className={`p-4 ${item.color} rounded-xl shadow-md`}
                >
                  <item.icon className={`${item.text}`} size={28} />
                </motion.div>
              ))}
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight"
            >
              Transform Your{" "}
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-corepivot-500 to-corepivot-700 bg-clip-text text-transparent">
                  Legacy Systems
                </span>
                <span className="absolute -bottom-1 left-0 w-full h-2 bg-corepivot-200/70 rounded-full z-0"></span>
              </span>
              <br />
              Into <span className="text-gradient">Agile Powerhouses</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              Specializing in product strategy and digital transformation, 
              CorePivot helps enterprises modernize their technology stack 
              and accelerate innovation.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-12"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative overflow-hidden group bg-gradient-to-r from-corepivot-600 to-corepivot-700 text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-corepivot-500/20"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Start Your Transformation
                  <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-corepivot-700 to-corepivot-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative overflow-hidden group border-2 border-corepivot-600 text-corepivot-600 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:text-white"
              >
                <span className="relative z-10">View Case Studies</span>
                <span className="absolute inset-0 bg-corepivot-600 w-0 group-hover:w-full transition-all duration-300 -z-10"></span>
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0 bg-white/50 backdrop-blur-sm p-4 rounded-xl shadow-sm border border-gray-100"
            >
              {[
                { value: "150+", label: "Systems" },
                { value: "98%", label: "Satisfaction" },
                { value: "50%", label: "Faster" }
              ].map((stat, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ y: -3 }}
                  className="text-center p-3"
                >
                  <div className="text-2xl font-bold text-corepivot-600">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Image Section */}
          <motion.div 
            className="lg:w-1/2 relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative w-full h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              {/* Replace with your actual image */}
              <img
                src="/digital_transformation.png" // Update with your image path
                alt="Digital transformation illustration"
             
                className="object-cover fill"
                
              />
              {/* Floating card overlay */}
              <motion.div
                className="absolute bottom-6 left-6 bg-white p-6 rounded-2xl shadow-lg max-w-xs"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-corepivot-100 rounded-lg">
                    <Zap className="text-corepivot-600" size={18} />
                  </div>
                  <h3 className="font-bold text-gray-800">Success Metrics</h3>
                </div>
                <p className="text-sm text-gray-600">
                  Our clients see an average 2.5x improvement in operational efficiency after modernization.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
      >
        <ChevronDown className="text-corepivot-600" size={24} />
        <div className="text-sm text-corepivot-600 mt-1">Scroll Down</div>
      </motion.div>
    </section>
  );
};

export default Hero;