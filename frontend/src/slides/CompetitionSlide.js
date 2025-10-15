import React from 'react';
import { motion } from 'framer-motion';

const CompetitionSlide = ({ slideNumber, totalSlides }) => {
  const competitors = [
    { name: '3Commas', ai: '❌', gpt5: '❌', marketplace: '✓', multiExchange: '✓', price: 'High' },
    { name: 'Cryptohopper', ai: 'Limited', gpt5: '❌', marketplace: '✓', multiExchange: '✓', price: 'High' },
    { name: 'TradeSanta', ai: '❌', gpt5: '❌', marketplace: '❌', multiExchange: 'Limited', price: 'Medium' },
    { name: 'f01i.ai', ai: '✓✓✓', gpt5: '✓', marketplace: '✓', multiExchange: '✓', price: 'Affordable', highlight: true }
  ];

  const advantages = [
    {
      icon: '🧠',
      title: 'AI Powered',
      description: 'Only platform using AI chat builder for bot creation - significantly more intelligent than competitors'
    },
    {
      icon: '💡',
      title: 'Claude Integration',
      description: 'Conversational AI constructor makes bot building intuitive and accessible to everyone'
    },
    {
      icon: '📊',
      title: 'Smart Feed',
      description: 'Real-time AI market analysis with score ratings - unique to f01i.ai'
    },
    {
      icon: '💰',
      title: 'Affordable Pricing',
      description: 'Premium features at fraction of competitor costs - democratizing AI trading'
    }
  ];

  return (
    <div id="slide-10" className="w-full min-h-screen flex items-center justify-center bg-dark p-8 md:p-16">
      <div className="max-w-7xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 gradient-text">Competitive Advantage</h2>
          <p className="text-xl md:text-2xl text-gray-400">
            Leading with AI innovation and accessibility
          </p>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 overflow-x-auto"
        >
          <table className="w-full bg-dark-light rounded-2xl overflow-hidden">
            <thead>
              <tr className="border-b border-gray-800">
                <th className="text-left p-4 text-gray-400 font-semibold">Platform</th>
                <th className="text-center p-4 text-gray-400 font-semibold">AI Features</th>
                <th className="text-center p-4 text-gray-400 font-semibold">GPT-5</th>
                <th className="text-center p-4 text-gray-400 font-semibold">Marketplace</th>
                <th className="text-center p-4 text-gray-400 font-semibold">Multi-Exchange</th>
                <th className="text-center p-4 text-gray-400 font-semibold">Price</th>
              </tr>
            </thead>
            <tbody>
              {competitors.map((competitor, index) => (
                <tr 
                  key={index} 
                  className={`border-b border-gray-800 ${competitor.highlight ? 'bg-primary/10 border-primary/50' : ''}`}
                >
                  <td className="p-4">
                    <span className={`font-bold ${competitor.highlight ? 'text-primary text-lg' : 'text-white'}`}>
                      {competitor.name}
                    </span>
                  </td>
                  <td className="text-center p-4 text-white">{competitor.ai}</td>
                  <td className="text-center p-4 text-white">{competitor.gpt5}</td>
                  <td className="text-center p-4 text-white">{competitor.marketplace}</td>
                  <td className="text-center p-4 text-white">{competitor.multiExchange}</td>
                  <td className="text-center p-4">
                    <span className={competitor.highlight ? 'text-green-400 font-bold' : 'text-gray-400'}>
                      {competitor.price}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Key Advantages */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-dark-light p-6 rounded-2xl border border-gray-800 hover:border-primary transition-all"
            >
              <div className="flex items-start space-x-4">
                <div className="text-4xl">{advantage.icon}</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{advantage.title}</h3>
                  <p className="text-gray-400">{advantage.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Market Position */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-block px-8 py-6 bg-gradient-to-r from-primary/20 to-secondary/20 border-2 border-primary rounded-2xl backdrop-blur-sm">
            <p className="text-2xl font-bold text-white mb-2">
              First Mover Advantage in Trading Bots AI chat builder
            </p>
            <p className="text-gray-300">
              Positioning as the most advanced and accessible AI trading platform
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

export default CompetitionSlide;
