import React from 'react';
import { motion } from 'framer-motion';

const TractionSlide = ({ slideNumber, totalSlides }) => {
  return (
    <div id="slide-8" className="w-full min-h-screen flex items-center justify-center bg-dark p-8 md:p-16">
      <div className="max-w-7xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 gradient-text">Traction & Milestones</h2>
          <p className="text-xl md:text-2xl text-gray-400">
            Building momentum with a functional MVP
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Left: Current Status */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-white mb-6">Current Status</h3>

            <div className="bg-gradient-to-br from-primary/20 to-primary/5 p-8 rounded-2xl border border-primary/50">
              <div className="text-4xl mb-4">✅</div>
              <h4 className="text-2xl font-bold text-white mb-3">MVP Launched</h4>
              <p className="text-gray-300 mb-4">
                Core platform with AI bot constructor, Smart Feed, and Bybit integration is live and operational
              </p>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-green-400 font-semibold">Live & Running</span>
              </div>
            </div>

            <div className="bg-dark-light p-6 rounded-2xl border border-gray-800">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-xl font-bold text-white">Platform Performance</h4>
                <span className="text-green-500 font-bold">Excellent</span>
              </div>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-dark p-4 rounded-lg">
                  <div className="text-3xl font-bold text-primary mb-1">100</div>
                  <div className="text-sm text-gray-400">RES Score</div>
                </div>
                <div className="bg-dark p-4 rounded-lg">
                  <div className="text-3xl font-bold text-secondary mb-1">0.51s</div>
                  <div className="text-sm text-gray-400">Load Time</div>
                </div>
              </div>
            </div>

            <div className="bg-dark-light p-6 rounded-2xl border border-gray-800">
              <h4 className="text-xl font-bold text-white mb-4">Key Milestones Achieved</h4>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <span className="text-primary text-xl">✓</span>
                  <span className="text-gray-300">GPT-5 integration for bot creation</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-primary text-xl">✓</span>
                  <span className="text-gray-300">Claude-powered chat constructor</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-primary text-xl">✓</span>
                  <span className="text-gray-300">Bybit exchange integration</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-primary text-xl">✓</span>
                  <span className="text-gray-300">Secure API key management</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-primary text-xl">✓</span>
                  <span className="text-gray-300">Real-time Smart Feed analytics</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Right: Speed Insights & Next Steps */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-white mb-6">Technical Excellence</h3>

            <div className="bg-dark-light p-4 rounded-2xl border border-gray-800">
              <img 
                src="/Снимок экрана 2025-10-15 в 14.48.41.png" 
                alt="Speed Insights 100 Score" 
                className="w-full rounded-lg mb-3"
              />
              <p className="text-sm text-gray-400 text-center">Perfect Speed Insights Score - Optimized Performance</p>
            </div>

            <div className="bg-gradient-to-br from-secondary/20 to-secondary/5 p-8 rounded-2xl border border-secondary/50">
              <div className="text-4xl mb-4">🎯</div>
              <h4 className="text-2xl font-bold text-white mb-3">Next Phase Focus</h4>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <span className="text-secondary">→</span>
                  <span className="text-gray-300">Security audit & penetration testing</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-secondary">→</span>
                  <span className="text-gray-300">Additional exchange integrations (Binance, OKX)</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-secondary">→</span>
                  <span className="text-gray-300">Marketplace beta launch</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-secondary">→</span>
                  <span className="text-gray-300">User acquisition campaign</span>
                </div>
              </div>
            </div>

            <div className="bg-dark-light p-6 rounded-2xl border border-gray-800">
              <h4 className="text-xl font-bold text-white mb-4">Product Development Stage</h4>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-400">MVP Development</span>
                    <span className="text-green-400 font-semibold">100%</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '100%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-400">Security Enhancements</span>
                    <span className="text-yellow-400 font-semibold">40%</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2">
                    <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '40%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-400">Additional Exchanges</span>
                    <span className="text-primary font-semibold">20%</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '20%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-8 right-8 text-gray-500 text-sm">
        {slideNumber} / {totalSlides}
      </div>
    </div>
  );
};

export default TractionSlide;
