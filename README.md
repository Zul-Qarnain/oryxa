# Agentic - AI Agents as a Service

A production-ready SPA landing page for Agentic, a cognitive automation system that uses AI agents for sales conversations, social media management, and customer support.

## Tech Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite 5
- **Styling**: TailwindCSS 3
- **Deployment**: Cloudflare Pages (fully static compatible)

## Project Structure

```
website/
├── public/
│   └── _redirects          # Cloudflare Pages SPA routing
├── src/
│   ├── components/         # Reusable React components
│   │   ├── Button.jsx
│   │   ├── Card.jsx
│   │   ├── Badge.jsx
│   │   ├── Input.jsx
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── HeroSection.jsx
│   │   ├── FeaturesSection.jsx
│   │   ├── HowItWorksSection.jsx
│   │   ├── CTASection.jsx
│   │   ├── TrustedBySection.jsx
│   │   └── index.js
│   ├── assets/             # Static assets (images, fonts)
│   ├── App.jsx             # Main app component
│   ├── main.jsx            # Entry point
│   └── index.css           # Global styles & Tailwind
├── index.html              # HTML entry point
├── vite.config.js          # Vite configuration
├── tailwind.config.js      # TailwindCSS configuration
├── postcss.config.js       # PostCSS configuration
├── package.json            # Dependencies
└── dist/                   # Built output (generated)
```

## Features

✨ **Component Library**
- Reusable Button component (multiple variants)
- Card component for content containers
- Badge/Chip components for status indicators
- Input component with focus states
- Responsive navigation header
- Footer with links and info

🎨 **Design System**
- Material 3 inspired color palette
- Comprehensive typography system
- Consistent spacing and sizing
- Soft shadows and elevation
- Smooth animations and transitions

📱 **Responsive Design**
- Mobile-first approach
- Tablet and desktop optimizations
- Touch-friendly interactions
- Flexible grid layouts

⚡ **Performance**
- Optimized bundle size (~163KB gzipped total)
- Code splitting with vendor bundle
- CSS optimization via TailwindCSS
- Fast development with Vite HMR

🌐 **Cloudflare Pages Compatible**
- Static asset architecture
- SPA routing via `_redirects`
- No backend dependencies required
- Direct deployment ready

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Starts dev server at `http://localhost:3000` with hot module reloading.

### Build

```bash
npm run build
```

Creates optimized production build in `dist/` folder.

### Preview

```bash
npm run preview
```

Preview production build locally.

## Design System

### Colors
- Primary: #542ae6 (Electric Indigo)
- Secondary: #6934dc
- Background: #fdf8ff
- Surface: #ffffff
- Text: #1c1a24

### Typography
- **Display**: 64px, 700 weight
- **Headlines**: 32-48px, 600-700 weight
- **Body**: 16-18px, 400 weight
- **Labels**: 12-14px, 500-600 weight

### Spacing
- Base unit: 8px
- Stack: 8px, 16px, 32px
- Section padding: 80px (desktop), 32px (mobile)
- Container max-width: 1280px

## Sections

1. **Header** - Sticky navigation with mobile menu
2. **Hero** - Main value proposition with CTA
3. **Trusted By** - Social proof with company logos
4. **Features** - 6 key feature cards
5. **How It Works** - 4-step process visualization
6. **CTA** - Final conversion section
7. **Footer** - Links and branding

## Deployment to Cloudflare Pages

1. Push code to GitHub repository
2. Connect repository to Cloudflare Pages
3. Set build command: `npm run build`
4. Set output folder: `dist`
5. Deploy!

The `_redirects` file ensures all routes fall back to `index.html` for SPA routing.

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari 14+, Chrome Android 90+)

## License

ISC

## Author

Built with Copilot
