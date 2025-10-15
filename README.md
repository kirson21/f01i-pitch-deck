# f01i.ai - Investor Pitch Deck

A stunning, interactive pitch deck presentation for f01i.ai - Your AI-Powered Shortcut to Financial Freedom.

## Features

- 🎨 **Beautiful Design**: Dark theme with neon accents matching f01i.ai brand
- 📱 **Fully Responsive**: Optimized for desktop and mobile devices
- 🎬 **Smooth Animations**: Framer Motion powered transitions
- 📊 **Interactive Charts**: Real-time data visualizations with Chart.js
- 📄 **PDF Export**: Download the entire presentation as PDF
- ⚡ **Lightning Fast**: 100 Speed Insights score
- 🎯 **13 Professional Slides**: Complete investor pitch deck

## Slide Structure

1. **Cover** - Company introduction and tagline
2. **Problem** - Market pain points
3. **Solution** - f01i.ai platform overview
4. **Market Opportunity** - TAM, growth projections
5. **Product** - Key features and screenshots
6. **Technology** - AI stack (OpenAI GPT-5, Anthropic Claude)
7. **Business Model** - Revenue streams and pricing
8. **Traction** - MVP status and metrics
9. **Go-to-Market** - Growth strategy
10. **Competition** - Competitive advantages
11. **Roadmap** - Product development plan
12. **Team** - Founder and hiring plans
13. **The Ask** - $200K SAFE round details

## Tech Stack

### Frontend
- React 18.2
- Tailwind CSS 3.3.5
- Framer Motion 10.16
- Chart.js 4.4
- html2canvas + jsPDF (PDF export)

### Backend
- FastAPI 0.104
- Python 3.11
- WeasyPrint (PDF generation)

## Getting Started

### Prerequisites
- Node.js 16+ and Yarn
- Python 3.11+
- Supervisor (for process management)

### Installation

1. **Install Frontend Dependencies**
```bash
cd /app/frontend
yarn install
```

2. **Install Backend Dependencies**
```bash
cd /app/backend
pip install -r requirements.txt
```

3. **Start Services**
```bash
sudo supervisorctl restart all
```

The application will be available at:
- Frontend: http://localhost:3000
- Backend API: http://localhost:8001

## Key Features

### PDF Export
Click the "Download PDF" button in the top-right corner to generate a high-quality PDF of the entire presentation.

### Navigation
- Scroll through slides naturally
- Use navigation dots on the right side
- Each slide is numbered for easy reference

### Responsive Design
- Desktop: Full-width slides with large text
- Mobile: Optimized layout with touch-friendly navigation

## Investment Details

- **Raising**: $200,000
- **Instrument**: SAFE Agreement
- **Pre-Money Valuation**: $800K
- **Post-Money Valuation**: $1M

## Deployment

### Quick Deploy to Vercel

See [QUICK_DEPLOY.md](./QUICK_DEPLOY.md) for step-by-step instructions.

**TL;DR:**
1. Push to GitHub
2. Connect to Vercel
3. Deploy! 🚀

Full deployment guide: [VERCEL_DEPLOY.md](./VERCEL_DEPLOY.md)

## Contact

**Kirill Popolitov**  
Founder, CEO & CTO  
📧 kirillpopolitov@gmail.com  
💬 Telegram: [@kirson21](https://t.me/kirson21)  
📱 WhatsApp: [+381665830305](https://wa.me/381665830305)  
🌐 [f01i.ai](https://f01i.ai)

## License

Proprietary - All rights reserved © 2025 f01i.ai
