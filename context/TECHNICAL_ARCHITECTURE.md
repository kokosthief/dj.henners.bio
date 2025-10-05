# Technical Architecture Details

## 🏗️ System Architecture

### Frontend Stack
- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe JavaScript development
- **Tailwind CSS**: Utility-first CSS framework
- **React Icons**: Icon library (FaPhoneFlip, IoMdMoon, PiSoundcloudLogoFill, TbMailFilled)

### Build & Development Tools
- **ESLint**: Code linting and quality assurance
- **Prettier**: Code formatting
- **Husky**: Git hooks for pre-commit checks
- **Jest**: Testing framework
- **PostCSS**: CSS processing
- **SVGR**: SVG to React component conversion

## 📦 Dependencies Analysis

### Core Dependencies
```json
{
  "next": "^15.5.4",           // React framework (updated)
  "react": "^18.3.1",          // UI library (updated)
  "react-dom": "^18.3.1",      // DOM rendering (updated)
  "typescript": "^5.9.3"       // Type system (updated)
}
```

### UI & Styling
```json
{
  "tailwindcss": "^3.4.18",     // CSS framework (updated)
  "clsx": "^2.1.1",             // Conditional CSS classes (updated)
  "tailwind-merge": "^3.3.1",   // Tailwind class merging (updated)
  "@tailwindcss/forms": "^0.5.10" // Form styling (updated)
}
```

### Icons & Assets
```json
{
  "lucide-react": "^0.544.0",  // Icon library (updated)
  "react-icons": "^5.5.0",     // Additional icons (updated)
  "sharp": "^0.34.4"           // Image optimization (updated)
}
```

### Development Tools
```json
{
  "eslint": "^9.37.0",         // Linting (updated)
  "prettier": "^3.6.2",        // Formatting (updated)
  "husky": "^9.1.7",           // Git hooks (updated)
  "lint-staged": "^16.2.3",    // Staged file linting (updated)
  "jest": "^30.2.0"            // Testing (updated)
}
```

## 🎨 Design System

### Color Palette
```css
:root {
  --tw-color-primary-50: 240 249 255;   /* Light blue */
  --tw-color-primary-500: 14 165 233;   /* Main blue */
  --tw-color-primary-900: 12 74 110;    /* Dark blue */
  --color-dark: #222222;                 /* Dark background */
}
```

### Typography Scale
- **Primary Font**: Overpass (Google Fonts)
- **Secondary Font**: Rowdies (Google Fonts)
- **Font Weights**: 100-900 (Overpass), 300/400/700 (Rowdies)

### Animation System
```css
/* Custom animations */
@keyframes flicker {
  /* Flickering effect for special elements */
}

@keyframes shimmer {
  /* Shimmer loading effect */
}

/* Tailwind animations */
.fade-up { /* Fade in from bottom */ }
.animate-gentle-pulse { /* Subtle pulsing */ }
```

## 🔧 Configuration Files

### Next.js Configuration (`next.config.js`)
- **SVG Handling**: Custom webpack configuration for SVG imports
- **Image Optimization**: Built-in Next.js image optimization
- **ESLint Integration**: Source directory linting
- **React Strict Mode**: Development mode warnings

### Tailwind Configuration (`tailwind.config.ts`)
- **Dark Mode**: Class-based dark mode support
- **Custom Colors**: Primary color palette with CSS variables
- **Custom Fonts**: Overpass and Rowdies font families
- **Custom Animations**: Flicker and shimmer keyframes
- **Forms Plugin**: Enhanced form styling

### TypeScript Configuration (`tsconfig.json`)
- **Strict Mode**: Strict type checking enabled
- **Path Mapping**: @/ alias for src directory
- **Next.js Integration**: Optimized for Next.js development

## 📱 Component Architecture

### Page Structure
```
HomePage (page.tsx)
├── Header Section
│   ├── Dark/Light Mode Toggle
│   └── DJ Henners Image
├── Contact Section
│   ├── Email Button
│   ├── Phone/WhatsApp Button
│   └── SoundCloud Button
├── SoundCloud Widget
├── Upcoming Gigs
├── Past Gigs (with venue grouping)
└── Footer
```

### Component Hierarchy
```
App Layout
├── Root Layout (metadata, fonts)
└── Home Page
    ├── IconButton (reusable)
    ├── Button (reusable)
    ├── SoundCloudWidget
    ├── UpcomingGigs
    │   └── Gig (individual gig display)
    └── PastGigs
        └── Venue Grouping Logic
```

## 🎵 Data Management

### Gig Data Structure
```typescript
interface Gig {
  date: string;        // ISO date string
  event: string;        // Event name
  location: string;     // City/region
  venue: string;        // Venue name
  country: string;      // Country code (NL, USA, TH)
}
```

### Data Processing
- **Filtering**: Automatic upcoming vs past gig filtering
- **Grouping**: Past gigs grouped by venue with counts
- **Sorting**: Chronological order for upcoming, count-based for past
- **Animation**: Intersection Observer for counter animations

## 🚀 Performance Optimizations

### Image Optimization
- **Next.js Image**: Automatic WebP conversion, lazy loading
- **Responsive Images**: Multiple sizes for different devices
- **Blur Placeholders**: Low-quality placeholders during loading

### Code Splitting
- **Dynamic Imports**: Automatic code splitting by Next.js
- **Bundle Analysis**: Optimized bundle sizes
- **Tree Shaking**: Unused code elimination

### Caching Strategy
- **Static Assets**: Long-term caching for fonts and images
- **API Routes**: Appropriate cache headers
- **CDN**: Vercel's global CDN distribution

## 🔒 Security Considerations

### Content Security
- **HTTPS**: Enforced SSL/TLS encryption
- **CSP Headers**: Content Security Policy implementation
- **XSS Protection**: React's built-in XSS prevention

### Data Protection
- **No Sensitive Data**: No API keys or secrets in client code
- **Environment Variables**: Secure handling of configuration
- **Input Validation**: TypeScript type checking

## 📊 Analytics & Monitoring

### Performance Monitoring
- **Core Web Vitals**: LCP, FID, CLS tracking
- **Bundle Analysis**: Webpack bundle analyzer
- **Lighthouse Scores**: Performance auditing

### Error Tracking
- **Error Boundaries**: React error boundary implementation
- **Console Logging**: Development error logging
- **Production Monitoring**: Vercel error tracking

## 🧪 Testing Strategy

### Test Configuration
- **Jest**: Unit and integration testing
- **Testing Library**: React component testing
- **Mock Setup**: SVG and module mocking

### Test Coverage
- **Component Tests**: Individual component testing
- **Integration Tests**: Component interaction testing
- **Utility Tests**: Helper function testing

## 🔄 Deployment Pipeline

### Vercel Integration
- **Automatic Deployments**: GitHub push triggers deployment
- **Preview Deployments**: Branch-based preview URLs
- **Environment Management**: Production and preview environments

### Build Process
1. **Dependency Installation**: npm install
2. **Type Checking**: TypeScript compilation
3. **Linting**: ESLint validation
4. **Building**: Next.js production build
5. **Deployment**: Vercel deployment

---

*This technical documentation provides detailed insights into the system architecture, dependencies, and implementation details of the DJ Henners Bio project.*

