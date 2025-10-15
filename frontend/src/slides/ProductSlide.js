import React from 'react';
import { motion } from 'framer-motion';

const ProductSlide = ({ slideNumber, totalSlides }) => {
  return (
    <div id="slide-5" className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-dark via-dark-light to-dark p-8 md:p-16">
      <div className="max-w-7xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 gradient-text">Product Features</h2>
          <p className="text-xl md:text-2xl text-gray-400">
            Everything you need for successful AI trading
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left: Features List */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-dark-light p-6 rounded-2xl border border-gray-800 hover:border-primary transition-all">
              <div className="flex items-start space-x-4">
                <div className="text-4xl">🤖</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">AI Chat Constructor (Claude)</h3>
                  <p className="text-gray-400">Create sophisticated trading bots in minutes using natural language. No coding required.</p>
                </div>
              </div>
            </div>

            <div className="bg-dark-light p-6 rounded-2xl border border-gray-800 hover:border-primary transition-all">
              <div className="flex items-start space-x-4">
                <div className="text-4xl">📊</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">AI Smart Feed</h3>
                  <p className="text-gray-400">Real-time market analysis with AI-powered score ratings for informed decision making.</p>
                </div>
              </div>
            </div>

            <div className="bg-dark-light p-6 rounded-2xl border border-gray-800 hover:border-primary transition-all">
              <div className="flex items-start space-x-4">
                <div className="text-4xl">🏪</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Verified Marketplace</h3>
                  <p className="text-gray-400">Browse and copy strategies from top traders. All bots are rated and reviewed.</p>
                </div>
              </div>
            </div>

            <div className="bg-dark-light p-6 rounded-2xl border border-gray-800 hover:border-primary transition-all">
              <div className="flex items-start space-x-4">
                <div className="text-4xl">🔧</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Manual Settings for Pros</h3>
                  <p className="text-gray-400">Advanced users can fine-tune every parameter for complete control.</p>
                </div>
              </div>
            </div>

            <div className="bg-dark-light p-6 rounded-2xl border border-gray-800 hover:border-primary transition-all">
              <div className="flex items-start space-x-4">
                <div className="text-4xl">🔐</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Secure API Management</h3>
                  <p className="text-gray-400">Bank-level encryption. We never have withdrawal access to your funds.</p>
                </div>
              </div>
            </div>

            <div className="bg-dark-light p-6 rounded-2xl border border-gray-800 hover:border-primary transition-all">
              <div className="flex items-start space-x-4">
                <div className="text-4xl">🌐</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Multi-Exchange Support</h3>
                  <p className="text-gray-400">Bybit live, Binance, OKX, and Crypto.com coming soon.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Screenshots */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-dark-light p-4 rounded-2xl border border-gray-800">
              <img 
                src="/Снимок экрана 2025-10-15 в 14.22.36.png" 
                alt="f01i.ai Dashboard" 
                className="w-full rounded-lg"
              />
              <p className="text-sm text-gray-400 mt-2 text-center">Trading Bot Dashboard</p>
            </div>

            <div className="bg-dark-light p-4 rounded-2xl border border-gray-800">
              <img 
                src="/Снимок экрана 2025-10-15 в 14.23.13.png" 
                alt="AI Smart Feed" 
                className="w-full rounded-lg"
              />
              <p className="text-sm text-gray-400 mt-2 text-center">AI Smart Feed with Market Analysis</p>
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

export default ProductSlide;
