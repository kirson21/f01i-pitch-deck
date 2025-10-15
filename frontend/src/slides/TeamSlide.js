import React from 'react';
import { motion } from 'framer-motion';

const TeamSlide = ({ slideNumber, totalSlides }) => {
  return (
    <div id="slide-12" className="w-full min-h-screen flex items-center justify-center bg-dark p-8 md:p-16">
      <div className="max-w-7xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 gradient-text">The Team</h2>
          <p className="text-xl md:text-2xl text-gray-400">
            Combining expertise in technology, business, and finance
          </p>
        </motion.div>

        {/* Founder Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="bg-gradient-to-br from-primary/20 to-secondary/20 p-8 md:p-12 rounded-3xl border-2 border-primary/50 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 blur-3xl"></div>
            <div className="relative z-10 flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
              {/* Photo */}
              <div className="flex-shrink-0">
                <div className="w-48 h-48 rounded-2xl overflow-hidden border-4 border-primary glow">
                  <img 
                    src="/IMG_5395.jpg" 
                    alt="Kirill Popolitov" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Info */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-4xl font-bold text-white mb-2">Kirill Popolitov</h3>
                <p className="text-2xl text-primary mb-6">Founder, CEO & CTO</p>
                
                <div className="space-y-3 text-lg text-gray-300">
                  <div className="flex items-center space-x-3 justify-center md:justify-start">
                    <span className="text-primary">🏆</span>
                    <p>Ex CEO/Founder - Phuket Dolphins Football Academy</p>
                  </div>
                  <div className="flex items-center space-x-3 justify-center md:justify-start">
                    <span className="text-secondary">💼</span>
                    <p>Ex Digital Marketing Lead (5 years) - Monitask.com, ServiceInspector.ru</p>
                  </div>
                  <div className="flex items-center space-x-3 justify-center md:justify-start">
                    <span className="text-primary">🚀</span>
                    <p>Currently CEO/CTO - f01i.ai</p>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-700">
                  <p className="text-gray-400 italic">
                    "My vision is to democratize AI trading and make financial freedom accessible to everyone, not just Wall Street elites."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Team Expansion Plans */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Hiring Roadmap</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-dark-light p-6 rounded-2xl border border-gray-800 hover:border-primary transition-all">
              <div className="text-4xl mb-4">👨‍💻</div>
              <h4 className="text-xl font-bold text-white mb-2">Senior Backend Engineer</h4>
              <p className="text-gray-400 mb-3">Scaling infrastructure & AI integration</p>
              <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-xs font-bold">
                Q1 2025
              </span>
            </div>

            <div className="bg-dark-light p-6 rounded-2xl border border-gray-800 hover:border-primary transition-all">
              <div className="text-4xl mb-4">🛡️</div>
              <h4 className="text-xl font-bold text-white mb-2">Security Engineer</h4>
              <p className="text-gray-400 mb-3">Security audit implementation & monitoring</p>
              <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-xs font-bold">
                Q1 2025
              </span>
            </div>

            <div className="bg-dark-light p-6 rounded-2xl border border-gray-800 hover:border-primary transition-all">
              <div className="text-4xl mb-4">📈</div>
              <h4 className="text-xl font-bold text-white mb-2">Growth Marketer</h4>
              <p className="text-gray-400 mb-3">User acquisition & community building</p>
              <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-xs font-bold">
                Q2 2025
              </span>
            </div>
          </div>
        </motion.div>

        {/* Advisors Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-block px-8 py-6 bg-dark-light border border-gray-800 rounded-2xl">
            <h4 className="text-xl font-bold text-white mb-2">Seeking Advisors</h4>
            <p className="text-gray-400">
              Looking for experienced advisors in: FinTech, Crypto Trading, AI/ML, and Security
            </p>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 right-8 text-gray-500 text-sm">
        {slideNumber} / {totalSlides}
      </div>
    </div>
  );
};

export default TeamSlide;
