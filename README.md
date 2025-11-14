# Acumen Labs - Marketing Website

> Modern marketing website for Acumen Labs, a specialized wealth management marketing agency

## 📋 Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- [Environment Variables](#environment-variables)
- [Deployment](#deployment)
- [Key Features](#key-features)
- [Contributing](#contributing)

## 🎯 Overview

Acumen Labs is a sophisticated marketing website built for a wealth management marketing agency. The site showcases services, pricing packages, company approach, and integrates with a Strapi CMS for dynamic content (blogs, job postings, press releases).

**Live Site**: [Your Production URL]

## 🛠️ Tech Stack

### Core
- **React** 18.2.0 - UI library
- **TypeScript** 5.8.3 - Type safety
- **Vite** 7.1.2 - Build tool & dev server
- **React Router DOM** 7.8.2 - Client-side routing

### Styling
- **TailwindCSS** 3.4.1 - Utility-first CSS framework
- **Framer Motion** 12.23.12 - Animation library
- **Lenis** 1.0.42 - Smooth scrolling

### Forms & Validation
- **React Hook Form** 7.62.0 - Form management
- **Zod** 4.1.5 - Schema validation
- **@hookform/resolvers** 5.2.1 - Form validation integration

### UI Components & Icons
- **Lucide React** 0.543.0 - Icon library
- **Recharts** 3.2.0 - Chart components
- **Embla Carousel** 8.6.0 - Carousel component

### Utilities
- **clsx** & **tailwind-merge** - Conditional styling
- **date-fns** 4.1.0 - Date utilities
- **react-helmet-async** 2.0.5 - SEO meta tags

## 🚀 Getting Started

### Prerequisites

```bash
Node.js >= 18.0.0
npm >= 6.0.0
```

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd acumen-marketing
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**

Create a `.env` file in the root:

```env
# Strapi CMS API
VITE_STRAPI_URL=http://localhost:1337
VITE_STRAPI_TOKEN=your-api-token-here

# Other environment variables (if needed)
VITE_APP_URL=http://localhost:5173
```

4. **Start development server**
```bash
npm run dev
```

5. **Open your browser**
```
http://localhost:5173
```

## 📁 Project Structure

```
acumen-marketing/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── about/      # About page components
│   │   ├── animations/ # Animation providers & wrappers
│   │   ├── approach/   # Approach page components
│   │   ├── contact/    # Contact page components
│   │   ├── ecosystem/  # Ecosystem page components
│   │   ├── home/       # Home page components
│   │   ├── layout/     # Navbar, Footer
│   │   ├── pricing/    # Pricing page components
│   │   └── services/   # Services page components
│   ├── pages/          # Page components
│   │   ├── Home.tsx
│   │   ├── Services.tsx
│   │   ├── Pricing.tsx
│   │   ├── Approach.tsx
│   │   ├── Ecosystem.tsx
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Blog.tsx
│   │   ├── BlogPost.tsx
│   │   ├── Careers.tsx
│   │   ├── JobDetail.tsx
│   │   ├── Press.tsx
│   │   └── PressReleaseDetail.tsx
│   ├── services/       # API service functions
│   │   └── strapiService.js
│   ├── App.tsx         # Main app component
│   ├── main.tsx        # Entry point
│   └── index.css       # Global styles
├── .env                # Environment variables
├── .gitignore         
├── index.html          # HTML entry point
├── package.json        # Dependencies & scripts
├── postcss.config.js   # PostCSS configuration
├── tailwind.config.js  # Tailwind configuration
├── tsconfig.json       # TypeScript configuration
└── vite.config.ts      # Vite configuration
```

## 📜 Available Scripts

### Development
```bash
npm run dev          # Start development server (http://localhost:5173)
```

### Building
```bash
npm run build        # Build for production (outputs to /dist)
npm run preview      # Preview production build locally
```

### Code Quality
```bash
npm run lint         # Run ESLint
```

## 🔐 Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `VITE_STRAPI_URL` | Strapi CMS API URL | `http://localhost:1337` or `https://your-strapi.com` |
| `VITE_STRAPI_TOKEN` | Strapi API token (if authentication required) | `your-token-here` |
| `VITE_APP_URL` | Your application URL | `http://localhost:5173` |

**Note**: All Vite environment variables must be prefixed with `VITE_`

### Accessing Environment Variables

```typescript
const strapiUrl = import.meta.env.VITE_STRAPI_URL;
```

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `/dist` directory.

### Deploy to Render

1. **Connect Repository**
   - Link your GitHub repository to Render

2. **Configure Build Settings**
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm run preview` (or use a static site)
   - **Publish Directory**: `dist`

3. **Add Environment Variables**
   - Add all `VITE_*` environment variables in Render dashboard

4. **Deploy**
   - Push to main branch to trigger automatic deployment

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

Or connect via Vercel dashboard with these settings:
- **Framework Preset**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`

### Deploy to Netlify

```bash
npm install -g netlify-cli
netlify deploy --prod
```

Or use Netlify dashboard:
- **Build Command**: `npm run build`
- **Publish Directory**: `dist`

## ✨ Key Features

### 🎨 Design & UX
- Modern, professional design tailored for wealth management
- Smooth animations with Framer Motion
- Smooth scrolling with Lenis
- Fully responsive across all devices
- Optimized performance (Lighthouse score 90+)

### 📄 Pages
- **Home** - Hero section, services overview, social proof
- **Services** - Detailed service offerings with 14 marketing services
- **Pricing** - Three-tier pricing packages (Starter, Growth, Leadership)
- **Approach** - Marketing frameworks & methodologies
- **Ecosystem** - Multi-brand ecosystem showcase (5 brands)
- **About** - Company story, team, values
- **Contact** - Contact form with service options
- **Blog** - Dynamic blog posts from Strapi CMS
- **Careers** - Job listings from Strapi CMS
- **Press** - Press releases from Strapi CMS

### 🔌 CMS Integration
- Fetches blog posts, job postings, and press releases from Strapi
- Dynamic routing for individual content pages
- SEO-optimized meta tags for all pages
- Support for featured images, categories, and filtering

### 🎯 SEO & Performance
- React Helmet Async for dynamic meta tags
- Semantic HTML structure
- Image optimization
- Code splitting with Vite
- Fast page loads

### 📱 Responsive Design
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Touch-friendly interactions
- Optimized mobile navigation

## 🎨 Styling

### Tailwind Configuration

Custom colors defined in `tailwind.config.js`:
```javascript
colors: {
  ph: '#4F6BFF',           // Primary brand color
  'ph-dark': '#3A56E8',    // Darker variant
  'ph-light': '#7B8FFF',   // Lighter variant
  foreground: '#0A2540',   // Text color
  background: '#f8fafd',   // Background color
  'muted-foreground': '#505c6e',
  border: '#e2e8f0',
}
```

### Custom Fonts
- **Font Family**: Inter (loaded from Google Fonts)
- Used for both body and display text

## 🔧 Configuration Files

### vite.config.ts
```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
```

### tsconfig.json
TypeScript configured with path aliases:
```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

## 📊 Strapi CMS Integration

### Service Layer

Located in `src/services/strapiService.js`

**Available Functions:**
```javascript
// Blog Posts
getBlogPosts(filters)
getBlogPostBySlug(slug)

// Job Postings
getJobPostings(filters)
getJobPostingBySlug(slug)

// Press Releases
getPressReleases(filters)
getPressReleaseBySlug(slug)
getFeaturedPressReleases(limit)
```

### Example Usage

```typescript
import { getBlogPosts } from '@/services/strapiService';

const fetchBlogs = async () => {
  const blogs = await getBlogPosts({
    website: 'Acumen Labs',
    category: 'Lead Generation',
    limit: 10
  });
};
```

## 🧩 Component Patterns

### Animation Components

**AnimationProvider**
```tsx
<AnimationProvider>
  <YourComponents />
</AnimationProvider>
```

**LenisProvider** (Smooth Scrolling)
```tsx
<LenisProvider>
  <YourComponents />
</LenisProvider>
```

**PageTransition** (Route transitions)
```tsx
<PageTransition>
  <Routes>...</Routes>
</PageTransition>
```

### Common Component Structure

```tsx
import React from 'react';
import { motion } from 'framer-motion';

const MyComponent = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Content */}
        </motion.div>
      </div>
    </section>
  );
};

export default MyComponent;
```

## 🤝 Contributing

### Development Workflow

1. Create a feature branch
```bash
git checkout -b feature/your-feature-name
```

2. Make your changes and commit
```bash
git add .
git commit -m "feat: add new feature"
```

3. Push and create a pull request
```bash
git push origin feature/your-feature-name
```

### Commit Message Convention

Follow [Conventional Commits](https://www.conventionalcommits.org/):
- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation changes
- `style:` Code style changes (formatting, etc.)
- `refactor:` Code refactoring
- `test:` Adding tests
- `chore:` Maintenance tasks

## 📝 Code Style

### TypeScript
- Use functional components with TypeScript
- Define prop types with interfaces
- Use type inference where possible

### React
- Use hooks (useState, useEffect, etc.)
- Prefer function components over class components
- Keep components small and focused

### Tailwind
- Use utility classes
- Follow mobile-first approach
- Use custom colors from config

## 🐛 Troubleshooting

### Common Issues

**1. Build fails with TypeScript errors**
```bash
# Clear TypeScript cache
rm -rf tsconfig.tsbuildinfo tsconfig.app.tsbuildinfo
npm run build
```

**2. Vite dev server not starting**
```bash
# Clear node_modules and reinstall
rm -rf node_modules
npm install
```

**3. Environment variables not working**
```bash
# Make sure they're prefixed with VITE_
# Restart dev server after adding new env vars
```

**4. Strapi connection issues**
- Verify `VITE_STRAPI_URL` is correct
- Check if Strapi CMS is running
- Verify API permissions in Strapi admin

## 📚 Additional Resources

- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [React Router Documentation](https://reactrouter.com/)
