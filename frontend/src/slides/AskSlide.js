import React from 'react';
import { motion } from 'framer-motion';

const AskSlide = ({ slideNumber, totalSlides }) => {
  return (
    <div id="slide-13" className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 via-dark to-secondary/10 p-8 md:p-16 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-6xl w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Main Ask */}
          <h2 className="text-6xl md:text-7xl font-bold mb-6 gradient-text glow-text">The Ask</h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="inline-block bg-gradient-to-r from-primary to-secondary p-1 rounded-3xl mb-4">
              <div className="bg-dark px-12 py-8 rounded-3xl">
                <p className="text-2xl text-gray-400 mb-3">Raising</p>
                <p className="text-7xl md:text-8xl font-bold gradient-text mb-3">$200,000</p>
                <p className="text-xl text-gray-400">via SAFE Agreement</p>
              </div>
            </div>
          </motion.div>

          {/* Valuation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-3xl mx-auto"
          >
            <div className="bg-dark-light p-8 rounded-2xl border border-primary/50">
              <p className="text-gray-400 mb-2">Pre-Money Valuation</p>
              <p className="text-4xl font-bold text-white">$800K</p>
            </div>
            <div className="bg-dark-light p-8 rounded-2xl border border-secondary/50">
              <p className="text-gray-400 mb-2">Post-Money Valuation</p>
              <p className="text-4xl font-bold text-white">$1M</p>
            </div>
          </motion.div>

          {/* Use of Funds */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="bg-dark-light p-8 rounded-2xl border border-gray-800 mb-12"
          >
            <h3 className="text-3xl font-bold text-white mb-8">Use of Funds</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-primary to-primary/50 rounded-full flex items-center justify-center">
                  <span className="text-3xl font-bold text-white">40%</span>
                </div>
                <p className="text-gray-400 font-semibold">Security & Infrastructure</p>
              </div>
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-secondary to-secondary/50 rounded-full flex items-center justify-center">
                  <span className="text-3xl font-bold text-white">30%</span>
                </div>
                <p className="text-gray-400 font-semibold">Product Development</p>
              </div>
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-primary to-primary/50 rounded-full flex items-center justify-center">
                  <span className="text-3xl font-bold text-white">20%</span>
                </div>
                <p className="text-gray-400 font-semibold">Marketing & Growth</p>
              </div>
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-secondary to-secondary/50 rounded-full flex items-center justify-center">
                  <span className="text-3xl font-bold text-white">10%</span>
                </div>
                <p className="text-gray-400 font-semibold">Operations & Legal</p>
              </div>
            </div>
          </motion.div>

          {/* Key Milestones */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-primary/20 to-secondary/20 p-8 rounded-2xl border border-primary/50 mb-12"
          >
            <h3 className="text-2xl font-bold text-white mb-6">12-Month Milestones</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <p className="text-4xl font-bold gradient-text mb-2">10K+</p>
                <p className="text-gray-400">Active Users</p>
              </div>
              <div>
                <p className="text-4xl font-bold gradient-text mb-2">$600K</p>
                <p className="text-gray-400">ARR</p>
              </div>
              <div>
                <p className="text-4xl font-bold gradient-text mb-2">$50M+</p>
                <p className="text-gray-400">Trading Volume</p>
              </div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Join us in democratizing AI trading
            </h3>
            <div className="space-y-4">
              <p className="text-xl text-gray-300">Kirill Popolitov - Founder, CEO & CTO</p>
              <p className="text-lg text-gray-400">📧 Email: kirson21@gmail.com</p>
              <p className="text-lg text-gray-400">🌐 Website: f01i.ai</p>
              <div className="mt-8 inline-block px-8 py-4 bg-primary hover:bg-secondary text-white rounded-2xl font-bold text-xl transition-all glow cursor-pointer">
                Let's Build the Future Together
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 right-8 text-gray-500 text-sm z-10">
        {slideNumber} / {totalSlides}
      </div>
    </div>
  );
};

export default AskSlide;
