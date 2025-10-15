import React from 'react';
import { motion } from 'framer-motion';

const RoadmapSlide = ({ slideNumber, totalSlides }) => {
  const roadmapItems = [
    {
      quarter: 'Q1 2025',
      status: 'In Progress',
      items: [
        { title: 'Security Audit & Penetration Testing', completed: false, priority: 'HIGH' },
        { title: 'Vulnerability Assessment & Fixes', completed: false, priority: 'HIGH' },
        { title: 'Binance Integration', completed: false, priority: 'MEDIUM' },
        { title: 'Beta User Onboarding (500 users)', completed: false, priority: 'MEDIUM' }
      ]
    },
    {
      quarter: 'Q2 2025',
      status: 'Planned',
      items: [
        { title: 'Marketplace Launch with 50+ Verified Bots', completed: false },
        { title: 'OKX & Crypto.com Integration', completed: false },
        { title: 'Mobile App (iOS & Android)', completed: false },
        { title: 'Advanced Risk Management Tools', completed: false }
      ]
    },
    {
      quarter: 'Q3 2025',
      status: 'Planned',
      items: [
        { title: 'Institutional Features & API', completed: false },
        { title: 'Multi-language Support', completed: false },
        { title: 'Advanced Analytics Dashboard', completed: false },
        { title: 'Community Features & Social Trading', completed: false }
      ]
    },
    {
      quarter: 'Q4 2025',
      status: 'Planned',
      items: [
        { title: 'White-label Solution for Enterprises', completed: false },
        { title: 'Additional Asset Classes (Stocks, Forex)', completed: false },
        { title: 'AI Model Optimization & Custom Training', completed: false },
        { title: 'Series A Fundraising', completed: false }
      ]
    }
  ];

  return (
    <div id="slide-11" className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-dark to-dark-light p-8 md:p-16">
      <div className="max-w-7xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 gradient-text">Product Roadmap</h2>
          <p className="text-xl md:text-2xl text-gray-400">
            Strategic development plan for 2025
          </p>
        </motion.div>

        {/* Priority Focus Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 bg-gradient-to-r from-red-500/20 to-orange-500/20 p-6 rounded-2xl border-2 border-red-500/50"
        >
          <div className="flex items-center space-x-4">
            <div className="text-5xl">🛡️</div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Immediate Priority: Security Enhancement</h3>
              <p className="text-gray-300">
                Investment will primarily fund comprehensive security audit, penetration testing, and vulnerability fixes to ensure enterprise-grade platform security
              </p>
            </div>
          </div>
        </motion.div>

        {/* Roadmap Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {roadmapItems.map((quarter, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-dark-light p-6 rounded-2xl border border-gray-800 hover:border-primary transition-all"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-white">{quarter.quarter}</h3>
                <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                  quarter.status === 'In Progress' 
                    ? 'bg-yellow-500/20 text-yellow-400' 
                    : 'bg-primary/20 text-primary'
                }`}>
                  {quarter.status}
                </span>
              </div>
              <ul className="space-y-3">
                {quarter.items.map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <div className={`mt-1 w-2 h-2 rounded-full ${
                      item.completed ? 'bg-green-500' : 'bg-gray-600'
                    }`}></div>
                    <div className="flex-1">
                      <span className={`text-sm ${item.completed ? 'text-gray-500 line-through' : 'text-gray-300'}`}>
                        {item.title}
                      </span>
                      {item.priority && (
                        <span className={`ml-2 px-2 py-0.5 rounded text-xs font-bold ${
                          item.priority === 'HIGH' 
                            ? 'bg-red-500/20 text-red-400'
                            : 'bg-yellow-500/20 text-yellow-400'
                        }`}>
                          {item.priority}
                        </span>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Use of Funds */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 bg-dark-light p-8 rounded-2xl border border-gray-800"
        >
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Seed Round Investment Allocation</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">40%</div>
              <div className="text-gray-400 text-sm">Security & Infrastructure</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary mb-2">30%</div>
              <div className="text-gray-400 text-sm">Product Development</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">20%</div>
              <div className="text-gray-400 text-sm">Marketing & Growth</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary mb-2">10%</div>
              <div className="text-gray-400 text-sm">Operations & Legal</div>
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

export default RoadmapSlide;
