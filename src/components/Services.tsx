
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Cpu, 
  Database, 
  Cloud, 
  Shield, 
  Smartphone, 
  BarChart3,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const services = [
    {
      icon: Cpu,
      title: "Legacy System Modernization",
      description: "Transform outdated systems into modern, scalable architectures that drive innovation.",
      features: ["Microservices Architecture", "API-First Development", "Cloud Migration"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Database,
      title: "Data Architecture & Analytics",
      description: "Build robust data pipelines and analytics platforms for data-driven decision making.",
      features: ["Real-time Analytics", "Data Warehousing", "ML/AI Integration"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Cloud,
      title: "Cloud-Native Solutions",
      description: "Design and implement scalable cloud infrastructure for maximum performance.",
      features: ["Multi-Cloud Strategy", "DevOps Automation", "Container Orchestration"],
      color: "from-green-500 to-teal-500"
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Implement enterprise-grade security measures and ensure regulatory compliance.",
      features: ["Zero Trust Architecture", "Compliance Automation", "Threat Detection"],
      color: "from-red-500 to-orange-500"
    },
    {
      icon: Smartphone,
      title: "Digital Experience Platforms",
      description: "Create engaging digital experiences across all customer touchpoints.",
      features: ["Omnichannel Design", "Progressive Web Apps", "Mobile-First Approach"],
      color: "from-indigo-500 to-blue-500"
    },
    {
      icon: BarChart3,
      title: "Product Strategy & Roadmapping",
      description: "Develop comprehensive product strategies aligned with business objectives.",
      features: ["Market Analysis", "Feature Prioritization", "Agile Methodology"],
      color: "from-yellow-500 to-orange-500"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive digital transformation services to help your organization 
            thrive in the modern digital landscape.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 group"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="text-white" size={32} />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6">
                {service.description}
              </p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="text-corepivot-500 mr-2" size={16} />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <motion.button
                whileHover={{ x: 5 }}
                className="flex items-center text-corepivot-600 font-semibold hover:text-corepivot-700 transition-colors duration-200"
              >
                Learn More
                <ArrowRight className="ml-2" size={16} />
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
