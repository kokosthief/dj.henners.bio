# Development & Maintenance Guide

## 🚀 Getting Started

### Prerequisites
- **Node.js**: Version 18+ (check `.nvmrc` for specific version)
- **npm**: Package manager (yarn also supported)
- **Git**: Version control

### Initial Setup
```bash
# Clone repository
git clone https://github.com/kokosthief/dj.henners.bio.git
cd dj.henners.bio

# Install dependencies
npm install

# Copy environment file
cp .env.example .env.local

# Start development server
npm run dev
```

### Development Server
- **URL**: http://localhost:3000
- **Hot Reload**: Automatic page refresh on changes
- **TypeScript**: Real-time type checking

## 🛠️ Available Scripts

### Development
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
```

### Code Quality
```bash
npm run lint         # Run ESLint
npm run lint:fix     # Fix linting issues automatically
npm run lint:strict  # Run with zero warnings allowed
npm run format       # Format code with Prettier
npm run format:check # Check formatting without fixing
```

### Testing
```bash
npm run test         # Run Jest tests
npm run test:watch   # Run tests in watch mode
```

### Type Checking
```bash
npm run typecheck    # Run TypeScript compiler check
```

## 📁 File Structure Guide

### Key Directories
```
src/
├── app/                    # Next.js App Router
│   ├── components/         # Page-specific components
│   ├── gigsData.tsx        # Central gig database
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Homepage
├── components/             # Reusable components
│   ├── buttons/            # Button components
│   └── links/              # Link components
├── constant/               # Configuration constants
├── lib/                    # Utility functions
└── styles/                 # Global styles
```

### Important Files
- **`src/app/page.tsx`**: Main homepage component
- **`src/app/contact/page.tsx`**: Contact and booking page
- **`src/app/media-package/page.tsx`**: Professional media package page
- **`src/app/gigsData.tsx`**: Gig database (update this for new events)
- **`src/constant/config.ts`**: Site configuration
- **`tailwind.config.ts`**: Tailwind CSS configuration
- **`next.config.js`**: Next.js configuration
- **`.eslintrc.js`**: ESLint configuration (simplified for Next.js compatibility)

## 🔧 Common Development Tasks

### Adding a New Gig
1. **Open**: `src/app/gigsData.tsx`
2. **Add Entry**: 
   ```typescript
   {
     date: '2025-12-25',
     event: 'Christmas ED',
     location: 'NL',
     venue: 'Odessa Amsterdam',
     country: 'NL',
   }
   ```
3. **Save**: Changes automatically appear on site

### Updating Contact Information
1. **Phone Number**: Edit `phoneLink` state in `page.tsx`
2. **Email**: Update `mailto:` links
3. **Social Links**: Update SoundCloud URL

### Adding New Images
1. **Display Images**: Add to `public/images/` for website display
2. **High-res Downloads**: Add to `public/downloads/high-res/` for press materials
3. **Import**: Add import statement in component
4. **Use**: Reference in Image component
5. **Update Media Package**: Add to `mediaFiles.images` array in `media-package/page.tsx`

### Styling Changes
1. **Tailwind Classes**: Use utility classes directly
2. **Custom Styles**: Add to `src/styles/globals.css`
3. **Component Styles**: Use CSS modules or styled-components

### Adding Media Content
1. **Videos**: Place in `public/downloads/videos/`
2. **Documents**: Place PDFs in `public/downloads/documents/`
3. **Update Arrays**: Add entries to respective arrays in `media-package/page.tsx`
4. **File Formats**: MP4 for videos, PDF for documents, JPG/PNG for images

## 🎨 Design System Usage

### Color Classes
```css
/* Primary colors */
bg-primary-500    /* Main blue */
text-primary-600 /* Darker blue text */
border-primary-300 /* Light blue border */

/* Dark mode */
dark:bg-gray-900  /* Dark background */
dark:text-white   /* White text */
```

### Typography
```css
/* Headings */
h1, .h1          /* Large headings */
h2, .h2          /* Medium headings */

/* Font families */
font-primary     /* Overpass font */
font-secondary   /* Rowdies font */
```

### Spacing
```css
/* Margins */
mb-3, mb-5       /* Bottom margin */
mt-4, mt-6       /* Top margin */

/* Padding */
p-2, p-4         /* All-around padding */
px-3, py-2       /* Horizontal/vertical padding */
```

## 🐛 Debugging Guide

### Common Issues

#### Build Errors
```bash
# Clear Next.js cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

#### TypeScript Errors
```bash
# Check types
npm run typecheck

# Common fixes:
# - Add missing imports
# - Fix type annotations
# - Update interface definitions
```

#### Styling Issues
```bash
# Check Tailwind compilation
npm run build

# Verify class names
# - Use Tailwind IntelliSense extension
# - Check Tailwind docs for correct classes
```

### Development Tools
- **VS Code Extensions**: 
  - Tailwind CSS IntelliSense
  - TypeScript Importer
  - ESLint
  - Prettier
- **Browser DevTools**: React Developer Tools
- **Network Tab**: Check for failed requests

## 📦 Dependency Management

### Adding Dependencies
```bash
# Production dependency
npm install package-name

# Development dependency
npm install -D package-name

# Update dependencies
npm update
```

### Common Dependencies
- **UI Components**: Already includes React Icons, Lucide React
- **Styling**: Tailwind CSS with forms plugin
- **Utilities**: clsx, tailwind-merge
- **Development**: ESLint, Prettier, Husky

## 🚀 Deployment Process

### Automatic Deployment
- **Trigger**: Push to main branch
- **Platform**: Vercel
- **URL**: https://dj.henners.bio

### Manual Deployment
```bash
# Build locally
npm run build

# Test production build
npm run start

# Deploy to Vercel
vercel --prod
```

### Environment Variables
- **Development**: `.env.local`
- **Production**: Set in Vercel dashboard
- **Required**: `NEXT_PUBLIC_SHOW_LOGGER` (optional)

## 🔄 Git Workflow

### Branch Strategy
- **main**: Production branch
- **feature/**: Feature development
- **hotfix/**: Emergency fixes

### Commit Guidelines
```bash
# Use conventional commits
feat: add new gig filtering
fix: resolve mobile layout issue
docs: update README
style: format code with prettier
```

### Pre-commit Hooks
- **Husky**: Runs linting and formatting
- **lint-staged**: Only processes staged files
- **Automatic**: Runs on every commit

## 📊 Performance Monitoring

### Core Web Vitals
- **LCP**: Largest Contentful Paint
- **FID**: First Input Delay
- **CLS**: Cumulative Layout Shift

### Optimization Checklist
- [ ] Image optimization (Next.js Image)
- [ ] Font loading (display=swap)
- [ ] Bundle size monitoring
- [ ] Lazy loading implementation

## 🧪 Testing Strategy

### Test Files
- **Location**: `src/lib/__tests__/`
- **Naming**: `*.test.ts` or `*.test.tsx`
- **Setup**: `jest.setup.js`

### Running Tests
```bash
# All tests
npm test

# Watch mode
npm run test:watch

# Coverage report
npm test -- --coverage
```

## 🔧 Configuration Files

### ESLint (`.eslintrc.js`)
- **Next.js**: Built-in Next.js rules and core web vitals
- **Simplified**: Reduced configuration for compatibility
- **Basic Rules**: Console warnings, unused variables, React-specific rules

### Prettier (`.prettierrc.js`)
- **Tailwind**: Tailwind class sorting
- **Semi-colons**: Required
- **Quotes**: Single quotes
- **Trailing commas**: ES5 compatible

### TypeScript (`tsconfig.json`)
- **Strict mode**: Enabled
- **Path mapping**: @/ alias
- **Next.js**: Optimized for Next.js

## 📝 Documentation Maintenance

### Keeping Docs Updated
1. **Code Changes**: Update relevant documentation
2. **New Features**: Document in appropriate context files
3. **API Changes**: Update technical architecture docs
4. **Content Updates**: Update content management guide

### Documentation Structure
- **README.md**: Project overview and setup
- **TECHNICAL_ARCHITECTURE.md**: Technical details and architecture
- **DEVELOPMENT_GUIDE.md**: This file - development workflows
- **QUICK_REFERENCE.md**: Quick reference guide for developers

---

*This development guide provides comprehensive instructions for working with the DJ Henners Bio project, from initial setup to deployment and maintenance.*

