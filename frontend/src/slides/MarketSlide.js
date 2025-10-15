import React from 'react';
import { motion } from 'framer-motion';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const MarketSlide = ({ slideNumber, totalSlides }) => {
  const marketData = {
    labels: ['2024', '2025', '2026', '2027', '2028'],
    datasets: [
      {
        label: 'AI Trading Market Size ($B)',
        data: [18.2, 24.5, 32.8, 43.6, 58.2],
        backgroundColor: 'rgba(99, 102, 241, 0.8)',
        borderColor: 'rgba(99, 102, 241, 1)',
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          color: '#9ca3af',
          callback: function(value) {
            return '$' + value + 'B';
          }
        },
        grid: {
          color: 'rgba(75, 85, 99, 0.2)',
        },
      },
      x: {
        ticks: {
          color: '#9ca3af',
        },
        grid: {
          display: false,
        },
      },
    },
  };

  const distributionData = {
    labels: ['Institutional', 'Retail', 'Corporate'],
    datasets: [
      {
        data: [45, 35, 20],
        backgroundColor: [
          'rgba(99, 102, 241, 0.8)',
          'rgba(139, 92, 246, 0.8)',
          'rgba(168, 85, 247, 0.8)',
        ],
        borderColor: [
          'rgba(99, 102, 241, 1)',
          'rgba(139, 92, 246, 1)',
          'rgba(168, 85, 247, 1)',
        ],
        borderWidth: 2,
      },
    ],
  };

  return (
    <div id="slide-4" className="w-full min-h-screen flex items-center justify-center bg-dark p-8 md:p-16">
      <div className="max-w-7xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 gradient-text">Market Opportunity</h2>
          <p className="text-xl md:text-2xl text-gray-400 mb-12">
            Explosive growth in AI-driven trading and crypto markets
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Market Growth Chart */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-dark-light p-6 rounded-2xl border border-gray-800"
          >
            <h3 className="text-2xl font-bold mb-6 text-white">AI Trading Market Growth</h3>
            <Bar data={marketData} options={options} />
            <p className="text-sm text-gray-400 mt-4 text-center">
              CAGR: 26.2% (2024-2028)
            </p>
          </motion.div>

          {/* Market Stats */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-dark-light p-6 rounded-2xl border border-gray-800">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-400">Global Crypto Market Cap</span>
                <span className="text-2xl font-bold text-primary">$2.5T</span>
              </div>
              <div className="w-full bg-gray-800 rounded-full h-2">
                <div className="bg-primary h-2 rounded-full" style={{ width: '85%' }}></div>
              </div>
            </div>

            <div className="bg-dark-light p-6 rounded-2xl border border-gray-800">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-400">Trading Bot Market Size</span>
                <span className="text-2xl font-bold text-secondary">$4.2B</span>
              </div>
              <div className="w-full bg-gray-800 rounded-full h-2">
                <div className="bg-secondary h-2 rounded-full" style={{ width: '70%' }}></div>
              </div>
            </div>

            <div className="bg-dark-light p-6 rounded-2xl border border-gray-800">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-400">Active Crypto Traders</span>
                <span className="text-2xl font-bold text-primary">320M+</span>
              </div>
              <div className="w-full bg-gray-800 rounded-full h-2">
                <div className="bg-primary h-2 rounded-full" style={{ width: '95%' }}></div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Key Insight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary/20 to-secondary/20 p-8 rounded-2xl border border-primary/30"
        >
          <p className="text-xl text-center text-gray-300">
            <span className="text-3xl font-bold gradient-text">$58.2B</span> AI trading market by 2028 • 
            <span className="text-3xl font-bold gradient-text"> 320M+</span> potential users worldwide
          </p>
        </motion.div>
      </div>

      <div className="absolute bottom-8 right-8 text-gray-500 text-sm">
        {slideNumber} / {totalSlides}
      </div>
    </div>
  );
};

export default MarketSlide;
