# NamoNexus Sovereign AI Hub v5.0.0

A professional, enterprise-grade portfolio showcasing sovereign AI systems built with precision, transparency, and human-centered design.

## Overview

NamoNexus is a command-center aesthetic portfolio designed to communicate authority, technical excellence, and architectural sophistication. The site features a minimalist design with massive whitespace, ultra-clean bento grids, and the Navy/Cyan color scheme.

## Tech Stack

- **Frontend Framework**: React 19 with TypeScript
- **Build Tool**: Vite 7.1.9
- **Styling**: Tailwind CSS 4 with custom design tokens
- **Data Visualization**: Recharts 2.15
- **Routing**: Wouter 3.3
- **Icons**: Lucide React
- **UI Components**: shadcn/ui
- **Typography**: Space Grotesk (headings), DM Sans (body), JetBrains Mono (technical)

## Project Structure

```
namonexus-portfolio/
├── client/
│   ├── public/              # Static assets (favicon, robots.txt)
│   ├── src/
│   │   ├── pages/           # Page components (Home, NamoCare)
│   │   ├── components/      # Reusable UI components
│   │   ├── contexts/        # React contexts (ThemeProvider)
│   │   ├── hooks/           # Custom React hooks
│   │   ├── lib/             # Utility functions
│   │   ├── App.tsx          # Main app component with routing
│   │   ├── main.tsx         # React entry point
│   │   └── index.css        # Global styles and design tokens
│   └── index.html           # HTML template
├── server/                  # Backend placeholder (static-only)
├── shared/                  # Shared types and constants
├── package.json             # Dependencies and scripts
├── tsconfig.json            # TypeScript configuration
├── vite.config.ts           # Vite configuration
└── README.md                # This file
```

## Key Pages

### Home Page (`/`)

The landing hub featuring:

- **Hero Section**: Minimalist tagline and value proposition
- **Core Initiatives**: Three high-impact projects (NaMo Care, Smart Classroom, R&D Lab)
- **Research & Engineering**: Technical deep-dives and architectural insights
- **System Design Principles**: Brahma-vihara philosophy (Metta, Karuna, Mudita, Upekkha)
- **Footer**: Professional contact and social links

### NaMo Care Case Study (`/projects/namo-care`)

A detailed technical showcase featuring:

- **Problem Statement**: Context and motivation
- **System Architecture**: Custom React diagram component showing data flow
- **Evidence**: Recharts visualizations (accuracy over time, latency comparison)
- **Technology Stack**: AI/ML, Backend, and Frontend technologies
- **Key Metrics**: Objective performance indicators
- **Production Disclaimer**: Clear labeling of demo environment

## Design Philosophy

### Minimalist Authority

- Massive whitespace as a design element
- Ultra-clean bento grids with intentional breathing room
- No decorative flourishes; only functional elegance

### Color Palette

- **Navy (#0A0F2C)**: Background, commanding void
- **Neon Cyan (#00E0FF)**: Accents, highlights, CTAs
- **Light Gray (#E8E8E8)**: Primary text
- **Muted Gray (#8A8AA0)**: Secondary text

### Typography

- **Space Grotesk**: Bold, geometric headings
- **DM Sans**: Clean, readable body text
- **JetBrains Mono**: Technical pills and tags

## Local Development

### Prerequisites

- Node.js 22.13.0+
- pnpm 10.4.1+

### Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/icezingza/namonexus-portfolio.git
   cd namonexus-portfolio
   ```

2. **Install dependencies**:
   ```bash
   pnpm install
   ```

3. **Start the development server**:
   ```bash
   pnpm run dev
   ```

   The site will be available at `http://localhost:3000`

4. **Build for production**:
   ```bash
   pnpm run build
   ```

5. **Preview production build**:
   ```bash
   pnpm run preview
   ```

### TypeScript Checking

Verify type safety:

```bash
pnpm run check
```

## Features

### Responsive Design

- Mobile-first approach
- Optimized for desktop, tablet, and mobile viewports
- Consistent spacing and typography across all breakpoints

### Performance

- Optimized asset loading (video preload="metadata")
- Efficient recharts visualizations
- Fast page transitions with Wouter routing

### Accessibility

- Semantic HTML structure
- Keyboard navigation support
- Focus rings for interactive elements
- Proper color contrast ratios

### SEO

- Meta tags and title configuration
- Semantic HTML
- Structured content hierarchy

## Deployment

The project is deployed on Manus WebDev platform with auto-publish enabled. Every checkpoint is automatically published to production.

**Live URL**: https://namonexus-fpqnzdg3.manus.space

## Assets

- **Logo**: `/manus-storage/namonexus-logo_66b46ffc.png`
- **Hero Background**: `/manus-storage/hero-background_c286c088.png`
- **About Accent**: `/manus-storage/about-accent_4be1bd5f.png`
- **Video Asset**: `/manus-storage/vdoLogo_ec454df2.mp4`

## Component Highlights

### ArchitectureDiagram Component

Custom React component showcasing system architecture with styled blocks and connectors. Located at `client/src/components/ArchitectureDiagram.tsx`.

### Recharts Integration

Professional data visualizations using Recharts:

- **LineChart**: Model accuracy over time
- **BarChart**: Model latency comparison

Both charts use the Navy/Cyan color scheme for consistency.

## Future Enhancements

1. **Blog/Research Section**: Dedicated pages for technical deep-dives
2. **Contact Form**: Functional email integration for inquiries
3. **Case Study Comparison**: Interactive matrix comparing solutions
4. **RSS Feed**: Subscribe to new technical publications
5. **Dark/Light Theme Toggle**: User preference support

## Code Quality

- **TypeScript**: Strict type checking enabled
- **Linting**: Prettier code formatting
- **No Debug Logs**: Clean production code
- **Unused Imports**: Removed for optimal bundle size

## License

Proprietary — NamoNexus © 2026

## Contact

- **Email**: contact@namonexus.com
- **LinkedIn**: [NamoNexus](https://linkedin.com)
- **GitHub**: [icezingza/namonexus-portfolio](https://github.com/icezingza/namonexus-portfolio)

---

**Built with precision and care. Sovereign AI ecosystems, engineered for the future.**
