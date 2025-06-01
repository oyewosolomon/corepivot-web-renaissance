
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Users, Globe, TrendingUp } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const stats = [
    {
      icon: Award,
      number: "10+",
      label: "Years of Excellence",
      description: "Delivering cutting-edge solutions"
    },
    {
      icon: Users,
      number: "50+",
      label: "Expert Team Members",
      description: "Across multiple disciplines"
    },
    {
      icon: Globe,
      number: "25+",
      label: "Countries Served",
      description: "Global reach and impact"
    },
    {
      icon: TrendingUp,
      number: "200%",
      label: "Average ROI Increase",
      description: "For our client transformations"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-corepivot-50 to-white" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose <span className="text-gradient">CorePivot</span>?
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              At CorePivot, we understand that digital transformation is more than just 
              technology—it's about reimagining how your business operates in the digital age. 
              Our team of experts combines deep technical knowledge with strategic business 
              insight to deliver solutions that drive real results.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-corepivot-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                  <TrendingUp className="text-corepivot-600" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Proven Methodology
                  </h3>
                  <p className="text-gray-600">
                    Our battle-tested approach ensures successful transformation with minimal risk and maximum impact.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-corepivot-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                  <Users className="text-corepivot-600" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Expert Team
                  </h3>
                  <p className="text-gray-600">
                    Work with industry veterans who have transformed hundreds of legacy systems across various industries.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-corepivot-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                  <Globe className="text-corepivot-600" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Global Perspective
                  </h3>
                  <p className="text-gray-600">
                    Benefit from our global experience and best practices learned from enterprises worldwide.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-2xl p-6 shadow-lg text-center hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-corepivot-400 to-corepivot-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="text-white" size={24} />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">
                  {stat.number}
                </div>
                <div className="text-sm font-semibold text-corepivot-600 mb-2">
                  {stat.label}
                </div>
                <div className="text-xs text-gray-600">
                  {stat.description}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
