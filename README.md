# Yoga Lab Website

A modern, responsive website for Yoga Lab built with React, Vite, and JavaScript.

## 🚀 Tech Stack

- **React 19.2** - Modern React with latest features
- **Vite 6** - Fast build tool and dev server
- **React Router 6** - Client-side routing
- **Tailwind CSS 4** - Utility-first CSS framework
- **Heroicons** - Beautiful hand-crafted SVG icons
- **Framer Motion** - Production-ready animation library
- **JavaScript (ES6+)** - No TypeScript, pure JavaScript

## 📦 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The development server will start at `http://localhost:3000`

## 🏗️ Project Structure

```
yogalab-website/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable React components
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── ServiceCard.jsx
│   │   └── ContactForm.jsx
│   ├── pages/          # Page components
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Yoga.jsx
│   │   ├── Coffee.jsx
│   │   ├── Contact.jsx
│   │   ├── FAQ.jsx
│   │   └── Book.jsx
│   ├── app/
│   │   └── globals.css # Global styles with Tailwind directives
│   ├── App.jsx         # Main app component with routing
│   └── main.jsx        # Application entry point
├── index.html          # HTML entry point
├── vite.config.js      # Vite configuration
├── package.json        # Dependencies and scripts
└── README.md          # This file
```

## 🎨 Features

- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Fast Development** - Hot Module Replacement (HMR) with Vite
- **Client-Side Routing** - Seamless navigation with React Router
- **Modern JavaScript** - ES6+ features, no build complexity
- **Component-Based** - Reusable, maintainable components
- **SEO Friendly** - Proper meta tags and semantic HTML

## 📄 Pages

- **Home** - Hero section, services overview, contact form
- **About** - Mission statement, philosophy, location
- **Yoga** - Class descriptions and benefits
- **Lab Coffee** - Menu and coffee shop details
- **Contact** - Contact information and form
- **FAQ** - Frequently asked questions
- **Book** - Class schedule and booking information

## 🛠️ Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build locally
npm run lint     # Run ESLint
```

## 🔧 Configuration

### Vite

The project uses Vite for fast builds and development. Configuration is in `vite.config.js`:

- React plugin for JSX support
- Path aliases (`@/` maps to `./src/`)
- Dev server on port 3000

### Tailwind CSS

Tailwind CSS v4 is configured via PostCSS. The configuration uses the new `@tailwindcss/postcss` plugin.

### ESLint

ESLint is configured for React with modern JavaScript. Configuration includes:
- React and React Hooks plugins
- React Refresh for HMR
- ES6+ support

## 📝 License

Copyright 2021 Community Wellness Lab, LLC; Yoga Lab, DBA

## 📧 Contact

For questions or support, contact us at [info@theyogalab.org](mailto:info@theyogalab.org)

Visit us at:  
207 S. Prospect Road, Suite 2  
Bloomington, IL 61704

Follow us on Instagram: [@yogalab.bn](http://www.instagram.com/yogalab.bn)
