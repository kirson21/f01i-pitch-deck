import React, { useState } from 'react';
import { motion } from 'framer-motion';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import './App.css';
import CoverSlide from './slides/CoverSlide';
import ProblemSlide from './slides/ProblemSlide';
import SolutionSlide from './slides/SolutionSlide';
import MarketSlide from './slides/MarketSlide';
import ProductSlide from './slides/ProductSlide';
import TechnologySlide from './slides/TechnologySlide';
import BusinessModelSlide from './slides/BusinessModelSlide';
import TractionSlide from './slides/TractionSlide';
import GoToMarketSlide from './slides/GoToMarketSlide';
import CompetitionSlide from './slides/CompetitionSlide';
import RoadmapSlide from './slides/RoadmapSlide';
import TeamSlide from './slides/TeamSlide';
import AskSlide from './slides/AskSlide';

function App() {
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);

  const slides = [
    { id: 1, component: CoverSlide },
    { id: 2, component: ProblemSlide },
    { id: 3, component: SolutionSlide },
    { id: 4, component: MarketSlide },
    { id: 5, component: ProductSlide },
    { id: 6, component: TechnologySlide },
    { id: 7, component: BusinessModelSlide },
    { id: 8, component: TractionSlide },
    { id: 9, component: GoToMarketSlide },
    { id: 10, component: CompetitionSlide },
    { id: 11, component: RoadmapSlide },
    { id: 12, component: TeamSlide },
    { id: 13, component: AskSlide },
  ];

  const generatePDF = async () => {
    setIsGeneratingPDF(true);
    const pdf = new jsPDF('landscape', 'mm', 'a4');
    const slideElements = document.querySelectorAll('.slide');

    for (let i = 0; i < slideElements.length; i++) {
      const slideElement = slideElements[i];
      const canvas = await html2canvas(slideElement, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: '#0a0a0a',
      });

      const imgData = canvas.toDataURL('image/jpeg', 0.95);
      const imgWidth = 297;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      if (i > 0) {
        pdf.addPage();
      }
      pdf.addImage(imgData, 'JPEG', 0, 0, imgWidth, imgHeight);
    }

    pdf.save('f01i-ai-pitch-deck.pdf');
    setIsGeneratingPDF(false);
  };

  return (
    <div className="App">
      {/* Download PDF Button */}
      <motion.button
        onClick={generatePDF}
        disabled={isGeneratingPDF}
        className="fixed top-6 right-6 z-50 bg-primary hover:bg-secondary text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl glow"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        data-testid="download-pdf-button"
      >
        {isGeneratingPDF ? 'Generating PDF...' : 'Download PDF'}
      </motion.button>

      {/* Slides Container */}
      <div className="slides-container">
        {slides.map((slide, index) => {
          const SlideComponent = slide.component;
          return (
            <motion.div
              key={slide.id}
              className="slide"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <SlideComponent slideNumber={index + 1} totalSlides={slides.length} />
            </motion.div>
          );
        })}
      </div>

      {/* Navigation Dots */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-40 space-y-3">
        {slides.map((slide, index) => (
          <a
            key={slide.id}
            href={`#slide-${slide.id}`}
            className="block w-3 h-3 rounded-full bg-gray-600 hover:bg-primary transition-colors"
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
