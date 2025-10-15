import React from 'react';
import { motion } from 'framer-motion';

const TechnologySlide = ({ slideNumber, totalSlides }) => {
  return (
    <div id="slide-6" className="w-full min-h-screen flex items-center justify-center bg-dark p-8 md:p-16">
      <div className="max-w-7xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 gradient-text">Technology Stack</h2>
          <p className="text-xl md:text-2xl text-gray-400">
            Powered by cutting-edge AI and robust infrastructure
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* AI Technology */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-white mb-6">AI Core</h3>
            
            <div className="bg-gradient-to-br from-primary/20 to-primary/5 p-8 rounded-2xl border border-primary/50">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center text-3xl">
                  🧠
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-white">OpenAI GPT-5</h4>
                  <p className="text-primary">AI Smart Feed Generation</p>
                </div>
              </div>
              <p className="text-gray-300">
                Advanced market analysis and real-time insights generation using the latest GPT-5 technology
              </p>
            </div>

            <div className="bg-gradient-to-br from-secondary/20 to-secondary/5 p-8 rounded-2xl border border-secondary/50">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-16 h-16 bg-secondary rounded-xl flex items-center justify-center text-3xl">
                  💬
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-white">Anthropic Claude</h4>
                  <p className="text-secondary">Chat Constructor Core</p>
                </div>
              </div>
              <p className="text-gray-300">
                Conversational AI for intuitive bot building and strategy customization
              </p>
            </div>
          </motion.div>

          {/* Infrastructure */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-white mb-6">Infrastructure</h3>

            <div className="bg-dark-light p-6 rounded-2xl border border-gray-800">
              <div className="flex items-center space-x-3 mb-3">
                <span className="text-3xl">🔐</span>
                <h4 className="text-xl font-bold text-white">Security First</h4>
              </div>
              <ul className="space-y-2 text-gray-400">
                <li>• Military-grade encryption (AES-256)</li>
                <li>• Read-only API access</li>
                <li>• Zero withdrawal permissions</li>
                <li>• Regular security audits</li>
              </ul>
            </div>

            <div className="bg-dark-light p-6 rounded-2xl border border-gray-800">
              <div className="flex items-center space-x-3 mb-3">
                <span className="text-3xl">⚡</span>
                <h4 className="text-xl font-bold text-white">High Performance</h4>
              </div>
              <ul className="space-y-2 text-gray-400">
                <li>• Real-time data processing</li>
                <li>• Low-latency trading execution</li>
                <li>• 99.9% uptime SLA</li>
                <li>• Scalable cloud architecture</li>
              </ul>
            </div>

            <div className="bg-dark-light p-6 rounded-2xl border border-gray-800">
              <div className="flex items-center space-x-3 mb-3">
                <span className="text-3xl">🔄</span>
                <h4 className="text-xl font-bold text-white">Integration</h4>
              </div>
              <ul className="space-y-2 text-gray-400">
                <li>• RESTful & WebSocket APIs</li>
                <li>• Multi-exchange connectivity</li>
                <li>• Real-time market data feeds</li>
                <li>• Automated backtesting engine</li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Tech Stack Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-wrap justify-center gap-4"
        >
          {['React', 'FastAPI', 'MongoDB', 'Redis', 'Docker', 'AWS', 'WebSocket', 'TensorFlow'].map((tech, index) => (
            <div key={index} className="px-6 py-3 bg-dark-light border border-gray-800 rounded-full text-gray-300 hover:border-primary transition-all">
              {tech}
            </div>
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-8 right-8 text-gray-500 text-sm">
        {slideNumber} / {totalSlides}
      </div>
    </div>
  );
};

export default TechnologySlide;
