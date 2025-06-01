
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Search, Lightbulb, Cog, Rocket, CheckCircle } from "lucide-react";

const Process = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const steps = [
    {
      icon: Search,
      title: "Discovery & Assessment",
      description: "We analyze your current systems, identify pain points, and understand your business objectives.",
      details: [
        "Current state analysis",
        "Technical debt assessment",
        "Business requirement gathering",
        "Risk evaluation"
      ]
    },
    {
      icon: Lightbulb,
      title: "Strategy & Planning",
      description: "Develop a comprehensive transformation roadmap aligned with your business goals.",
      details: [
        "Architecture design",
        "Technology selection",
        "Implementation timeline",
        "Resource allocation"
      ]
    },
    {
      icon: Cog,
      title: "Implementation",
      description: "Execute the transformation using agile methodologies and best practices.",
      details: [
        "Incremental delivery",
        "Quality assurance",
        "Performance optimization",
        "Security implementation"
      ]
    },
    {
      icon: Rocket,
      title: "Launch & Optimization",
      description: "Deploy your new systems and continuously optimize for peak performance.",
      details: [
        "Production deployment",
        "Performance monitoring",
        "User training",
        "Ongoing support"
      ]
    }
  ];

  return (
    <section id="process" className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-gradient">Transformation Process</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We follow a proven methodology that ensures successful digital transformation 
            with minimal disruption to your business operations.
          </p>
        </motion.div>

        <div className="relative">
          {/* Progress Line */}
          <div className="hidden lg:block absolute top-24 left-1/2 transform -translate-x-1/2 w-full max-w-4xl">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 2, delay: 0.5 }}
              className="h-1 bg-gradient-to-r from-corepivot-400 to-corepivot-600 origin-left"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                {/* Step Number */}
                <div className="flex justify-center mb-6">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                    className="w-20 h-20 bg-gradient-to-r from-corepivot-400 to-corepivot-600 rounded-full flex items-center justify-center shadow-lg relative z-10"
                  >
                    <step.icon className="text-white" size={32} />
                  </motion.div>
                </div>

                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {step.description}
                  </p>
                  
                  <div className="bg-corepivot-50 rounded-lg p-4">
                    <ul className="space-y-2">
                      {step.details.map((detail) => (
                        <li key={detail} className="flex items-center text-sm text-gray-700">
                          <CheckCircle className="text-corepivot-500 mr-2 flex-shrink-0" size={14} />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-corepivot-600 to-corepivot-700 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Start Your Transformation?
            </h3>
            <p className="text-corepivot-100 mb-6 max-w-2xl mx-auto">
              Let's discuss how we can help transform your legacy systems into modern, 
              agile solutions that drive business growth.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-corepivot-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Schedule a Consultation
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Process;
