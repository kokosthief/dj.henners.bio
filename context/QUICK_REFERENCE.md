# Project Summary & Quick Reference

## 🎵 Project Overview
**DJ Henners Bio** is a professional landing page for Henners, an Ecstatic Dance DJ based in Amsterdam. The site showcases his musical journey, upcoming performances, and facilitates bookings.

- **Live Site**: https://dj.henners.bio
- **Repository**: https://github.com/kokosthief/dj.henners.bio
- **Tech Stack**: Next.js 14, TypeScript, Tailwind CSS, Vercel

## 📊 Key Statistics
- **130+ Performances**: Spanning 2021-2025
- **Primary Venue**: Odessa Amsterdam (98 gigs)
- **Geographic Reach**: Netherlands, USA (Hawaii), Thailand
- **Performance Types**: Ecstatic Dance, Festivals, International Events

## 🎯 Main Features
- **Responsive Design**: Mobile-first with dark/light mode
- **Dynamic Gig Management**: Automatic upcoming/past filtering
- **SoundCloud Integration**: Embedded music player
- **Interactive Elements**: Animated counters, hover effects
- **SEO Optimized**: Meta tags, Open Graph, performance optimized

## 🛠️ Quick Start
```bash
# Setup
git clone https://github.com/kokosthief/dj.henners.bio.git
cd dj.henners.bio
npm install
cp .env.example .env.local
npm run dev

# Access: http://localhost:3000
```

## 📁 Key Files
- **`src/app/page.tsx`**: Main homepage component
- **`src/app/gigsData.tsx`**: Central gig database (130+ entries)
- **`src/constant/config.ts`**: Site configuration
- **`tailwind.config.ts`**: Styling configuration

## 🔄 Common Tasks

### Add New Gig
Edit `src/app/gigsData.tsx`:
```typescript
{
  date: '2025-12-25',
  event: 'Christmas ED',
  location: 'NL',
  venue: 'Odessa Amsterdam',
  country: 'NL',
}
```

### Update Contact Info
- **Phone**: Edit `phoneLink` in `page.tsx`
- **Email**: Update `mailto:` links
- **SoundCloud**: Update URL in SoundCloudWidget

### Deploy Changes
- **Automatic**: Push to main branch (Vercel auto-deploy)
- **Manual**: `vercel --prod`

## 📱 Content Sections
1. **Hero**: DJ image, tagline, contact buttons
2. **SoundCloud**: Embedded music player
3. **Upcoming Gigs**: Future performances
4. **Past Gigs**: Venue-grouped performance history
5. **Mission**: Spiritual journey messaging
6. **Booking**: Contact form/email link

## 🎨 Design System
- **Colors**: Blue gradient primary palette
- **Fonts**: Overpass (primary), Rowdies (secondary)
- **Animations**: Fade-ins, hover effects, scroll animations
- **Responsive**: Mobile-first, touch-friendly

## 📊 Data Structure
```typescript
interface Gig {
  date: string;        // "YYYY-MM-DD"
  event: string;       // Event name
  location: string;     // City/region
  venue: string;        // Venue name
  country: string;      // Country code
}
```

## 🚀 Performance Features
- **Image Optimization**: Next.js Image component
- **Font Optimization**: Google Fonts with display=swap
- **Code Splitting**: Automatic bundle optimization
- **Caching**: Static asset caching via Vercel CDN

## 🔧 Development Commands
```bash
npm run dev          # Development server
npm run build        # Production build
npm run lint         # Code linting
npm run format       # Code formatting
npm run test         # Run tests
```

## 📈 SEO & Analytics
- **Meta Tags**: Comprehensive SEO setup
- **Open Graph**: Social media optimization
- **Performance**: Core Web Vitals monitoring
- **Analytics**: Vercel built-in analytics

## 🎵 Music Integration
- **Platform**: SoundCloud
- **Track ID**: 1818443574 (current featured track)
- **Styling**: Custom orange theme (#ff5500)
- **Features**: Comments, user info, visual waveform

## 📱 Mobile Experience
- **Responsive**: Mobile-first design
- **Touch-friendly**: Large buttons and targets
- **WhatsApp**: Automatic phone link conversion
- **Performance**: Optimized for mobile networks

## 🔮 Future Enhancements
- **CMS**: Admin panel for content management
- **Analytics**: Google Analytics integration
- **Newsletter**: Email list building
- **Booking**: Integrated booking system
- **Multi-language**: International audience support

## 📞 Contact Information
- **Email**: dj@henners.bio
- **Phone**: +31683421604
- **SoundCloud**: https://soundcloud.com/henners_music
- **Location**: Amsterdam, Netherlands

## 🏗️ Architecture Highlights
- **Next.js 14**: App Router, TypeScript, React 18
- **Tailwind CSS**: Utility-first styling
- **Vercel**: Automatic deployments, CDN, analytics
- **Performance**: Optimized images, fonts, bundles
- **Accessibility**: Semantic HTML, ARIA labels

---

*This quick reference provides essential information for developers, content managers, and stakeholders working with the DJ Henners Bio project.*

