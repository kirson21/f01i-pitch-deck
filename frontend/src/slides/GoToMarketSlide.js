import React from 'react';
import { motion } from 'framer-motion';

const GoToMarketSlide = ({ slideNumber, totalSlides }) => {
  const phases = [
    {
      phase: 'Phase 1',
      title: 'Community Building',
      timeframe: 'Q1 2025',
      strategies: [
        'Launch in crypto & trading communities',
        'Partner with crypto influencers',
        'Content marketing (YouTube, TikTok, Twitter)',
        'Free tier to drive adoption'
      ],
      color: 'primary'
    },
    {
      phase: 'Phase 2',
      title: 'Growth & Scale',
      timeframe: 'Q2-Q3 2025',
      strategies: [
        'Referral program with incentives',
        'Marketplace launch with top traders',
        'SEO & paid acquisition campaigns',
        'Strategic partnerships with exchanges'
      ],
      color: 'secondary'
    },
    {
      phase: 'Phase 3',
      title: 'Market Leadership',
      timeframe: 'Q4 2025+',
      strategies: [
        'International expansion',
        'Enterprise & white-label solutions',
        'Additional asset classes (stocks, forex)',
        'Brand ambassadors & events'
      ],
      color: 'primary'
    }
  ];

  return (
    <div id="slide-9" className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-dark via-dark-light to-dark p-8 md:p-16">
      <div className="max-w-7xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 gradient-text">Go-to-Market Strategy</h2>
          <p className="text-xl md:text-2xl text-gray-400">
            Phased approach to capture market share
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {phases.map((phase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-br from-${phase.color}/20 to-${phase.color}/5 rounded-2xl blur opacity-60`}></div>
              <div className="relative bg-dark-light p-8 rounded-2xl border border-gray-800 hover:border-primary transition-all h-full">
                <div className="mb-4">
                  <div className={`inline-block px-4 py-2 bg-${phase.color}/20 text-${phase.color} rounded-full text-sm font-bold mb-3`}>
                    {phase.phase}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{phase.title}</h3>
                  <p className="text-gray-400 text-sm">{phase.timeframe}</p>
                </div>
                <ul className="space-y-3">
                  {phase.strategies.map((strategy, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-gray-300 text-sm">{strategy}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Acquisition Channels */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Key Acquisition Channels</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-dark-light p-6 rounded-2xl border border-gray-800 text-center hover:border-primary transition-all">
              <div className="text-4xl mb-3">📱</div>
              <h4 className="text-lg font-bold text-white mb-2">Social Media</h4>
              <p className="text-sm text-gray-400">Twitter, TikTok, YouTube</p>
            </div>
            <div className="bg-dark-light p-6 rounded-2xl border border-gray-800 text-center hover:border-primary transition-all">
              <div className="text-4xl mb-3">👥</div>
              <h4 className="text-lg font-bold text-white mb-2">Communities</h4>
              <p className="text-sm text-gray-400">Discord, Telegram, Reddit</p>
            </div>
            <div className="bg-dark-light p-6 rounded-2xl border border-gray-800 text-center hover:border-primary transition-all">
              <div className="text-4xl mb-3">🎯</div>
              <h4 className="text-lg font-bold text-white mb-2">Paid Ads</h4>
              <p className="text-sm text-gray-400">Google, Facebook, Crypto sites</p>
            </div>
            <div className="bg-dark-light p-6 rounded-2xl border border-gray-800 text-center hover:border-primary transition-all">
              <div className="text-4xl mb-3">🤝</div>
              <h4 className="text-lg font-bold text-white mb-2">Partnerships</h4>
              <p className="text-sm text-gray-400">Exchanges, Influencers</p>
            </div>
          </div>
        </motion.div>

        {/* Growth Projections */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 bg-gradient-to-r from-primary/10 to-secondary/10 p-8 rounded-2xl border border-primary/30"
        >
          <h3 className="text-2xl font-bold text-center text-white mb-6">12-Month Growth Targets</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold gradient-text mb-2">10K+</div>
              <div className="text-gray-400">Active Users</div>
            </div>
            <div>
              <div className="text-4xl font-bold gradient-text mb-2">$600K</div>
              <div className="text-gray-400">Annual Recurring Revenue</div>
            </div>
            <div>
              <div className="text-4xl font-bold gradient-text mb-2">$50M+</div>
              <div className="text-gray-400">Trading Volume</div>
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

export default GoToMarketSlide;
