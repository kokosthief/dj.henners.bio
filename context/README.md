# DJ Henners Bio - Project Context

## 🎵 Project Overview

**DJ Henners Bio** is a professional landing page website for Henners, an Ecstatic Dance DJ based in Amsterdam, Netherlands. The site serves as a digital portfolio and booking platform, showcasing his musical journey, upcoming performances, and past gigs.

### Live Site
- **Production URL**: https://dj.henners.bio
- **GitHub Repository**: https://github.com/kokosthief/dj.henners.bio

## 🎯 Purpose & Goals

### Primary Objectives
1. **Professional Presence**: Establish a professional online presence for DJ Henners
2. **Booking Platform**: Facilitate event bookings and contact inquiries
3. **Portfolio Showcase**: Display musical journey, past performances, and achievements
4. **Community Connection**: Connect with the ecstatic dance community and potential clients
5. **Music Promotion**: Feature SoundCloud tracks and musical content

### Target Audience
- **Event Organizers**: Looking for ecstatic dance DJs
- **Dance Communities**: Ecstatic dance practitioners and enthusiasts
- **Festival Organizers**: Seeking DJ talent for wellness and dance events
- **Potential Clients**: Individuals and organizations hosting dance events

## 🏗️ Technical Architecture

### Technology Stack
- **Framework**: Next.js 14 (React-based)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel
- **Package Manager**: npm/yarn (dual support)

### Key Features
- **Responsive Design**: Mobile-first approach with dark/light mode toggle
- **Dynamic Gig Management**: Automated upcoming/past gig filtering
- **Interactive Music Discovery**: Multi-track SoundCloud player with track selection
- **Professional Media Package**: Complete media kit for event organizers with downloadable assets
- **Contact/Booking System**: Dedicated contact page with professional booking form
- **Dynamic Image Slideshow**: Randomized photo gallery with navigation controls
- **Technical Rider**: Downloadable professional technical requirements PDF
- **Interactive Elements**: Animated counters, hover effects, scroll animations
- **SEO Optimized**: Meta tags, Open Graph, sitemap, structured data, web manifest
- **Performance Optimized**: Image optimization, lazy loading, Google Analytics integration
- **Professional Downloads**: High-resolution photos, promotional videos, and press documents

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── components/         # Page-specific components
│   │   ├── ContactForm.tsx   # Professional booking form
│   │   ├── Gig.tsx          # Individual gig display
│   │   ├── ImageSlideshow.tsx # Dynamic photo gallery
│   │   ├── PastGigs.tsx     # Past gigs with venue grouping
│   │   ├── SoundCloudWidget.tsx # Interactive music player
│   │   ├── TechnicalRider.tsx # Professional technical requirements
│   │   └── UpcomingGigs.tsx # Upcoming events
│   ├── contact/            # Dedicated contact/booking page
│   │   ├── layout.tsx      # Contact page layout
│   │   └── page.tsx        # Contact form page
│   ├── media-package/      # Professional media kit
│   │   ├── layout.tsx      # Media package layout
│   │   └── page.tsx        # Media package page
│   ├── gigsData.tsx        # Centralized gig data
│   ├── google-analytics.tsx # Analytics integration
│   ├── layout.tsx          # Root layout with metadata
│   ├── manifest.ts         # Web app manifest
│   ├── page.tsx            # Main homepage
│   ├── sitemap.ts          # SEO sitemap generation
│   ├── structured-data.tsx # SEO structured data
│   └── web-vitals.tsx      # Performance monitoring
├── components/             # Reusable UI components
│   ├── buttons/            # Button variants
│   └── links/              # Link components
├── constant/               # Configuration constants
├── lib/                    # Utility functions
└── styles/                 # Global styles and Tailwind config

public/
├── downloads/              # Professional media downloads
│   ├── documents/          # PDFs (technical rider, press kit)
│   ├── high-res/           # High-resolution photos
│   └── videos/             # Promotional videos
└── images/                 # Website display images
```

## 🎨 Design & UX

### Visual Identity
- **Color Scheme**: Blue gradient primary colors with dark/light mode support
- **Typography**: Overpass (primary) and Rowdies (secondary) fonts
- **Imagery**: Professional DJ photos with jungle/nature themes
- **Animations**: Subtle fade-ins, hover effects, and scroll-based animations

### User Experience
- **Multi-Page Architecture**: Main homepage with dedicated contact and media package pages
- **Progressive Disclosure**: Expandable past gigs by venue
- **Clear Call-to-Actions**: Prominent booking and contact buttons
- **Mobile Optimized**: Touch-friendly interface for mobile devices
- **Professional Media Access**: Downloadable high-resolution assets for press and events

## 📊 Content Management

### Gig Data Structure
```typescript
interface Gig {
  date: string;        // YYYY-MM-DD format
  event: string;        // Event name
  location: string;     // City/region
  venue: string;        // Venue name
  country: string;      // Country code
}
```

### Data Management
- **Centralized Storage**: All gig data in `gigsData.tsx`
- **Automatic Filtering**: Upcoming vs past gigs based on current date
- **Venue Grouping**: Past gigs grouped by venue with performance counts
- **Easy Updates**: Simple array manipulation for adding new gigs

## 🚀 Deployment & Hosting

### Vercel Configuration
- **Automatic Deployments**: Connected to GitHub repository
- **Custom Domain**: dj.henners.bio
- **Performance**: Edge functions and CDN optimization
- **Analytics**: Built-in Vercel analytics

### Environment Setup
- **Development**: Local development server on port 3000
- **Production**: Automatic builds and deployments
- **Environment Variables**: Minimal configuration needed

## 🔧 Development Workflow

### Available Scripts
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run lint:fix     # Fix linting issues
npm run format       # Format code with Prettier
npm run test         # Run Jest tests
```

### Code Quality
- **ESLint**: Code linting with Next.js configuration
- **Prettier**: Code formatting
- **Husky**: Git hooks for pre-commit checks
- **TypeScript**: Type safety and better development experience

## 📈 Performance & SEO

### Performance Features
- **Image Optimization**: Next.js Image component with lazy loading
- **Font Optimization**: Google Fonts with display=swap
- **Bundle Optimization**: Tree shaking and code splitting
- **Caching**: Static asset caching via Vercel
- **Web Vitals**: Performance monitoring and analytics

### SEO Features
- **Meta Tags**: Comprehensive meta tag setup
- **Open Graph**: Social media sharing optimization
- **Twitter Cards**: Twitter-specific meta tags
- **Sitemap**: Automatic sitemap generation (`sitemap.ts`)
- **Structured Data**: JSON-LD structured data for search engines
- **Web Manifest**: Progressive Web App capabilities (`manifest.ts`)

## 🎵 Music Integration

### SoundCloud Integration
- **Interactive Music Player**: Multi-track selection interface
- **Track Selection**: Three featured tracks:
  - Ecstatic Journey (original track)
  - Ambrosia 7 - Richie Lee & Henners collaboration
  - WeDance Sundari - Hawaii ecstatic dance experience
- **Custom Styling**: Branded player appearance with selection interface
- **Responsive Design**: Adapts to different screen sizes
- **Direct Links**: Links to original SoundCloud tracks

## 📱 Mobile Experience

### Responsive Features
- **Mobile-First Design**: Optimized for mobile devices
- **Touch Interactions**: Touch-friendly buttons and links
- **Adaptive Layout**: Content reflows for different screen sizes
- **Performance**: Optimized for mobile networks

## 🔮 Future Enhancements

### Potential Improvements
- **Content Management**: Admin panel for gig updates
- **Newsletter Signup**: Email list building
- **Social Media Integration**: Instagram feed or social links
- **Multi-language Support**: International audience reach
- **Enhanced Booking System**: Calendar integration and automated confirmations
- **Testimonials**: Client reviews and feedback
- **Live Chat**: Real-time customer support
- **Event Calendar**: Interactive calendar view of upcoming gigs

## 🛠️ Maintenance

### Regular Updates
- **Gig Data**: Add new performances to gigsData.tsx
- **Media Assets**: Update high-resolution photos and videos in `/public/downloads/`
- **Content Updates**: Refresh bio text, artist descriptions, and contact information
- **Dependencies**: Keep packages updated for security and performance
- **Performance Monitoring**: Track site performance metrics and web vitals
- **SEO Optimization**: Monitor and update meta tags, structured data as needed

### Backup & Version Control
- **Git Repository**: Full version control via GitHub
- **Automatic Backups**: Vercel deployment backups
- **Rollback Capability**: Easy rollback to previous versions

---

*This context folder provides comprehensive information about the DJ Henners Bio project for developers, stakeholders, and anyone working with or maintaining the website.*

