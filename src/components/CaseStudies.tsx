
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, TrendingUp, Clock, Users } from "lucide-react";

const CaseStudies = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const caseStudies = [
    {
      title: "Global Banking Platform Modernization",
      client: "Fortune 500 Financial Institution",
      challenge: "Legacy mainframe systems causing bottlenecks and limiting innovation",
      solution: "Microservices architecture with cloud-native deployment",
      results: [
        { icon: TrendingUp, metric: "300%", label: "Performance Improvement" },
        { icon: Clock, metric: "75%", label: "Faster Time-to-Market" },
        { icon: Users, metric: "50M+", label: "Users Supported" }
      ],
      image: "photo-1461749280684-dccba630e2f6",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "E-commerce Platform Transformation",
      client: "Leading Retail Chain",
      challenge: "Outdated e-commerce platform struggling with peak traffic",
      solution: "Cloud-native architecture with auto-scaling capabilities",
      results: [
        { icon: TrendingUp, metric: "500%", label: "Traffic Handling" },
        { icon: Clock, metric: "40%", label: "Faster Page Load" },
        { icon: Users, metric: "99.9%", label: "Uptime Achieved" }
      ],
      image: "photo-1498050108023-c5249f4df085",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Healthcare Data Platform",
      client: "Multi-Hospital Network",
      challenge: "Siloed systems preventing data sharing and insights",
      solution: "Unified data platform with real-time analytics",
      results: [
        { icon: TrendingUp, metric: "60%", label: "Operational Efficiency" },
        { icon: Clock, metric: "80%", label: "Faster Diagnoses" },
        { icon: Users, metric: "1M+", label: "Patient Records" }
      ],
      image: "photo-1487058792275-0ad4aaf24ca7",
      gradient: "from-green-500 to-teal-500"
    }
  ];

  return (
    <section id="case-studies" className="py-20 bg-gradient-to-br from-gray-50 to-corepivot-50" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Success <span className="text-gradient">Stories</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how we've helped organizations across industries transform their 
            digital infrastructure and achieve remarkable results.
          </p>
        </motion.div>

        <div className="space-y-16">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <div className={`inline-block px-4 py-2 bg-gradient-to-r ${study.gradient} text-white rounded-full text-sm font-semibold mb-6`}>
                    {study.client}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {study.title}
                  </h3>
                  
                  <div className="space-y-4 mb-8">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Challenge</h4>
                      <p className="text-gray-600">{study.challenge}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Solution</h4>
                      <p className="text-gray-600">{study.solution}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {study.results.map((result, resultIndex) => (
                      <div key={resultIndex} className="text-center">
                        <div className={`w-12 h-12 bg-gradient-to-r ${study.gradient} rounded-lg flex items-center justify-center mx-auto mb-2`}>
                          <result.icon className="text-white" size={20} />
                        </div>
                        <div className="text-2xl font-bold text-gray-900">
                          {result.metric}
                        </div>
                        <div className="text-sm text-gray-600">
                          {result.label}
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <motion.button
                    whileHover={{ x: 5 }}
                    className="flex items-center text-corepivot-600 font-semibold hover:text-corepivot-700 transition-colors duration-200"
                  >
                    Read Full Case Study
                    <ArrowRight className="ml-2" size={16} />
                  </motion.button>
                </div>
              </div>
              
              <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative rounded-2xl overflow-hidden shadow-lg"
                >
                  <img
                    src={`https://images.unsplash.com/${study.image}?auto=format&fit=crop&w=800&q=80`}
                    alt={study.title}
                    className="w-full h-80 object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-r ${study.gradient} opacity-20`}></div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
