import React from 'react';
import { motion } from 'framer-motion';

const SolutionSlide = ({ slideNumber, totalSlides }) => {
  const features = [
    {
      icon: '🤖',
      title: 'AI Chat Constructor',
      description: 'Build trading bots in minutes with Claude AI or customize every detail manually'
    },
    {
      icon: '📊',
      title: 'Smart Feed',
      description: 'Real-time AI market analysis with actionable score ratings'
    },
    {
      icon: '🛡️',
      title: 'Secure by Design',
      description: 'Your keys, your funds, your control - we never have withdrawal access'
    },
    {
      icon: '🏪',
      title: 'Verified Marketplace',
      description: 'Copy proven strategies from successful traders with transparent ratings'
    }
  ];

  return (
    <div id="slide-3" className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-dark to-dark-light p-8 md:p-16">
      <div className="max-w-7xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 gradient-text">Our Solution</h2>
          <p className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto">
            f01i.ai makes AI trading accessible to everyone through an all-in-one platform
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity"></div>
              <div className="relative bg-dark-light p-8 rounded-2xl border border-gray-800 hover:border-primary transition-all duration-300 h-full">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold mb-3 text-white">{feature.title}</h3>
                <p className="text-gray-400 text-lg leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Value Proposition */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-block px-8 py-6 bg-primary/20 border-2 border-primary rounded-2xl backdrop-blur-sm">
            <p className="text-2xl md:text-3xl font-bold text-white">
              Create • Test • Deploy • Earn
            </p>
            <p className="text-lg text-gray-300 mt-2">
              Your personal AI trading assistant, working 24/7
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

export default SolutionSlide;
