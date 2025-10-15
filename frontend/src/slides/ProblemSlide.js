import React from 'react';
import { motion } from 'framer-motion';

const ProblemSlide = ({ slideNumber, totalSlides }) => {
  const problems = [
    {
      icon: '🚧',
      title: 'High Barriers to Entry',
      description: 'Complex trading strategies require years of experience and deep technical knowledge'
    },
    {
      icon: '💰',
      title: 'Limited Access to AI Tools',
      description: 'Professional AI trading tools are expensive and exclusive to institutions'
    },
    {
      icon: '⏰',
      title: '24/7 Market Monitoring',
      description: 'Crypto markets never sleep, but humans do - missing opportunities costs money'
    },
    {
      icon: '❌',
      title: 'Trust & Security Issues',
      description: 'Users fear giving full control to trading bots with their funds at risk'
    }
  ];

  return (
    <div id="slide-2" className="w-full min-h-screen flex items-center justify-center bg-dark p-8 md:p-16">
      <div className="max-w-7xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 gradient-text">The Problem</h2>
          <p className="text-xl md:text-2xl text-gray-400 mb-16 max-w-3xl">
            Retail investors are locked out of advanced AI trading opportunities
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-dark-light p-8 rounded-2xl border border-gray-800 hover:border-primary transition-all duration-300"
            >
              <div className="text-5xl mb-4">{problem.icon}</div>
              <h3 className="text-2xl font-bold mb-3 text-white">{problem.title}</h3>
              <p className="text-gray-400 text-lg leading-relaxed">{problem.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 p-8 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl border border-primary/30"
        >
          <p className="text-xl text-center text-gray-300">
            <span className="text-3xl font-bold text-primary">92%</span> of retail crypto traders lose money due to lack of automation and emotional trading
          </p>
        </motion.div>
      </div>

      <div className="absolute bottom-8 right-8 text-gray-500 text-sm">
        {slideNumber} / {totalSlides}
      </div>
    </div>
  );
};

export default ProblemSlide;
