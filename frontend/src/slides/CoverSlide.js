import React from 'react';
import { motion } from 'framer-motion';

const CoverSlide = ({ slideNumber, totalSlides }) => {
  return (
    <div id="slide-1" className="w-full h-screen flex flex-col items-center justify-center bg-gradient-to-br from-dark via-dark-light to-dark relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center px-4"
      >
        {/* Logo/Brand */}
        <motion.h1
          className="text-8xl md:text-9xl font-bold mb-6 gradient-text glow-text"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          f01i.ai
        </motion.h1>

        {/* Tagline */}
        <motion.h2
          className="text-3xl md:text-4xl font-light text-gray-300 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Your AI-Powered Shortcut to Financial Freedom
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Democratizing AI trading through intelligent automation
        </motion.p>

        {/* Investment Round Badge */}
        <motion.div
          className="mt-16 inline-block"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          <div className="px-8 py-4 bg-primary/20 border border-primary rounded-full backdrop-blur-sm">
            <span className="text-lg font-semibold text-primary">Seed Round • $200K SAFE</span>
          </div>
        </motion.div>
      </motion.div>

      {/* Slide number */}
      <div className="absolute bottom-8 right-8 text-gray-500 text-sm">
        {slideNumber} / {totalSlides}
      </div>
    </div>
  );
};

export default CoverSlide;
