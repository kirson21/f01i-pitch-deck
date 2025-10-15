import React from 'react';
import { motion } from 'framer-motion';

const BusinessModelSlide = ({ slideNumber, totalSlides }) => {
  const revenueStreams = [
    {
      icon: '💎',
      title: 'Premium Subscriptions',
      description: 'Tiered plans with advanced features',
      revenue: '$9.99 - $99.99/mo',
      color: 'primary'
    },
    {
      icon: '🏪',
      title: 'Marketplace Commission',
      description: 'Revenue share from bot sales',
      revenue: '10-15% commission',
      color: 'secondary'
    },
    {
      icon: '🎯',
      title: 'Trading Commission',
      description: 'Performance fees from bot trading',
      revenue: '10-15% of profits',
      color: 'primary'
    },
    {
      icon: '🤝',
      title: 'API Broker Commissions',
      description: 'Revenue from exchange trading volumes',
      revenue: 'Volume-based',
      color: 'secondary'
    }
  ];

  return (
    <div id="slide-7" className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-dark to-dark-light p-8 md:p-16">
      <div className="max-w-7xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 gradient-text">Business Model</h2>
          <p className="text-xl md:text-2xl text-gray-400">
            Multiple revenue streams for sustainable growth
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {revenueStreams.map((stream, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className={`absolute inset-0 bg-gradient-to-r from-${stream.color} to-${stream.color === 'primary' ? 'secondary' : 'primary'} rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity`}></div>
              <div className="relative bg-dark-light p-8 rounded-2xl border border-gray-800 hover:border-primary transition-all h-full">
                <div className="text-5xl mb-4">{stream.icon}</div>
                <h3 className="text-2xl font-bold mb-3 text-white">{stream.title}</h3>
                <p className="text-gray-400 mb-4">{stream.description}</p>
                <div className="mt-4 pt-4 border-t border-gray-800">
                  <span className="text-lg font-bold text-primary">{stream.revenue}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pricing Tiers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="bg-dark-light p-6 rounded-2xl border border-gray-800 text-center">
            <h4 className="text-xl font-bold text-white mb-2">Starter (Free)</h4>
            <div className="text-3xl font-bold text-primary mb-4">$0<span className="text-sm text-gray-400">/mo</span></div>
            <ul className="space-y-2 text-sm text-gray-400 text-left">
              <li>✓ 1 Active Bot</li>
              <li>✓ Basic Smart Feed</li>
              <li>✓ 1 Marketplace Access</li>
              <li>✓ Ready-made bots from f01i.ai</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-primary/20 to-secondary/20 p-6 rounded-2xl border-2 border-primary text-center relative">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary px-4 py-1 rounded-full text-xs font-bold">
              POPULAR
            </div>
            <h4 className="text-xl font-bold text-white mb-2">Basic</h4>
            <div className="text-3xl font-bold text-primary mb-4">$9.99<span className="text-sm text-gray-400">/mo</span></div>
            <ul className="space-y-2 text-sm text-gray-300 text-left">
              <li>✓ 3 Bots management</li>
              <li>✓ Advanced AI Analysis</li>
              <li>✓ API access for copytrading integration</li>
              <li>✓ up to 10 product slots in Marketplace</li>
            </ul>
          </div>

          <div className="bg-dark-light p-6 rounded-2xl border border-gray-800 text-center">
            <h4 className="text-xl font-bold text-white mb-2">Pro</h4>
            <div className="text-3xl font-bold text-secondary mb-4">$49</div>
            <ul className="space-y-2 text-sm text-gray-400 text-left">
              <li>✓ Unlimited bots creation</li>
              <li>✓ Unlimited marketplace slots</li>
              <li>✓ Lower comissions - 10%</li>
              <li>✓ Advanced trading tools: TradingView,Coinglass</li>
            </ul>
          </div>
        </motion.div>

        {/* Unit Economics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 bg-gradient-to-r from-primary/10 to-secondary/10 p-8 rounded-2xl border border-primary/30"
        >
          <h3 className="text-2xl font-bold text-center text-white mb-6">Unit Economics</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">$35</div>
              <div className="text-gray-400">Avg. Revenue per User (ARPU)</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-secondary mb-2">$8</div>
              <div className="text-gray-400">Customer Acquisition Cost (CAC)</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">4.4x</div>
              <div className="text-gray-400">LTV/CAC Ratio</div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 right-8 text-gray-500 text-sm">
        {slideNumber} / {totalSlides}
      </div>
    </div>
  );
};

export default BusinessModelSlide;
