
import { motion } from "framer-motion";
import { ArrowUp, Linkedin, Twitter, Github } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    Services: [
      "Legacy Modernization",
      "Cloud Migration",
      "Data Analytics",
      "Security & Compliance"
    ],
    Company: [
      "About Us",
      "Our Team",
      "Careers",
      "Blog"
    ],
    Resources: [
      "Case Studies",
      "White Papers",
      "Documentation",
      "Support"
    ],
    Legal: [
      "Privacy Policy",
      "Terms of Service",
      "Cookie Policy",
      "GDPR"
    ]
  };

  return (
    <footer className="bg-dark-900 text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-4 text-gradient">CorePivot</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Transforming legacy systems into agile powerhouses. 
                We specialize in product strategy and digital transformation 
                to help enterprises thrive in the digital age.
              </p>
              <div className="flex space-x-4">
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-corepivot-600 rounded-full flex items-center justify-center hover:bg-corepivot-500 transition-colors duration-200"
                >
                  <Linkedin size={18} />
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-corepivot-600 rounded-full flex items-center justify-center hover:bg-corepivot-500 transition-colors duration-200"
                >
                  <Twitter size={18} />
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-corepivot-600 rounded-full flex items-center justify-center hover:bg-corepivot-500 transition-colors duration-200"
                >
                  <Github size={18} />
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold mb-4 text-white">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-corepivot-400 transition-colors duration-200 text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <div className="text-gray-300 text-sm mb-4 md:mb-0">
            © 2024 CorePivot. All rights reserved.
          </div>
          
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="flex items-center space-x-2 text-corepivot-400 hover:text-corepivot-300 transition-colors duration-200"
          >
            <span className="text-sm">Back to top</span>
            <ArrowUp size={16} />
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
