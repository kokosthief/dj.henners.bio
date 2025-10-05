# Content & Data Management Guide

## 📊 Gig Data Management

### Current Gig Database
The project contains **130+ gigs** spanning from 2021 to 2025, showcasing Henners' extensive performance history.

### Data Structure
```typescript
interface Gig {
  date: string;        // Format: "YYYY-MM-DD"
  event: string;       // Event name/description
  location: string;     // City or region
  venue: string;        // Specific venue name
  country: string;      // Country code (NL, USA, TH)
}
```

### Venue Distribution
**Top Venues by Performance Count:**
- **Odessa Amsterdam**: 98 performances (primary venue)
- **ED Festival Holland**: 4 performances
- **Island of Hawaiʻi**: 4 performances
- **ReMo Studio**: 3 performances
- **Ambrosia**: 3 performances

### Geographic Reach
- **Netherlands (NL)**: 120+ performances
- **United States (USA)**: 4 performances (Hawaii)
- **Thailand (TH)**: 1 performance (Koh Phangan)

## 🎵 Music Content

### SoundCloud Integration
- **Current Track**: Track ID 1818443574
- **Player Features**: 
  - Custom orange color scheme (#ff5500)
  - Comments and user info enabled
  - Visual waveform display
  - Responsive sizing (166px mobile, 200px desktop)

### Audio Strategy
- **Primary Platform**: SoundCloud for music sharing
- **Embedded Player**: Direct integration for immediate listening
- **Brand Consistency**: Custom styling matching site theme

## 📝 Content Sections

### Hero Section
**Main Headlines:**
- "As an Ecstatic Dance DJ I am in flow with the dancers."
- "When joy is evoked, I support that. When tears come, I nurture them."
- "Let's move together on one of upcoming dates 👇🏼"

### Mission Statement
"I yearn to move your soul through music, to take you on a journey that awakens the spirit and connects the tribe."

### Contact Information
- **Email**: dj@henners.bio
- **Phone**: +31683421604
- **WhatsApp**: Automatic redirect for mobile users
- **SoundCloud**: https://soundcloud.com/henners_music

## 🎯 Upcoming Events (Current)

### 2025 Schedule
- **October 17**: ED Leiden (NL)
- **November 14**: Friday ED | Veemkade, Odessa Amsterdam (NL)

### Event Types
- **Regular Events**: Weekly/bi-weekly ecstatic dance sessions
- **Festivals**: Annual ED Festival Holland participation
- **International**: Hawaii and Thailand performances
- **Special Events**: Cacao ceremonies, NYE celebrations

## 📈 Performance Analytics

### Gig Statistics
- **Total Performances**: 130+ (and counting)
- **Active Years**: 2021-2025 (4+ years)
- **Primary Market**: Amsterdam, Netherlands
- **International Reach**: USA, Thailand

### Venue Relationships
- **Long-term Partnerships**: Odessa Amsterdam (98 gigs)
- **Festival Circuit**: ED Festival Holland (annual)
- **International Expansion**: Hawaii retreats, Thailand events

## 🖼️ Visual Assets

### Photography
- **Primary Image**: `henners-dj.jpg` (800x600)
- **Secondary Image**: `henners-jungle.jpg` (2448x3264)
- **Favicon Set**: Complete favicon package for all devices

### Image Strategy
- **Professional Headshots**: Clean, modern DJ imagery
- **Nature Integration**: Jungle/natural settings
- **Brand Consistency**: Consistent visual style across assets

## 📱 Responsive Content

### Mobile Optimization
- **Touch-friendly**: Large buttons and touch targets
- **Readable Text**: Optimized font sizes for mobile
- **Fast Loading**: Optimized images and assets
- **WhatsApp Integration**: Automatic phone link conversion

### Desktop Experience
- **Hover Effects**: Interactive button animations
- **Scroll Animations**: Dynamic background gradients
- **Dark/Light Mode**: User preference-based theming

## 🔄 Content Update Workflow

### Adding New Gigs
1. **Edit**: `src/app/gigsData.tsx`
2. **Add Entry**: New gig object with all required fields
3. **Format Date**: Use "YYYY-MM-DD" format
4. **Test**: Verify automatic filtering works correctly

### Updating Contact Info
1. **Phone Numbers**: Update in `page.tsx` component
2. **Email Links**: Update mailto links
3. **Social Links**: Update SoundCloud and other social URLs

### Image Updates
1. **Replace Files**: Update images in `public/images/`
2. **Optimize**: Ensure proper sizing and compression
3. **Update References**: Update image imports in components

## 📊 SEO Content Strategy

### Meta Information
- **Title**: "HENNERS | Ecstatic Dance DJ"
- **Description**: "Ecstatic Dance DJ based in Amsterdam, Netherlands."
- **Keywords**: Ecstatic Dance, DJ, Amsterdam, Netherlands, Music

### Social Media Integration
- **Open Graph**: Optimized for Facebook/LinkedIn sharing
- **Twitter Cards**: Enhanced Twitter sharing experience
- **Image Assets**: Dedicated OG image for social sharing

## 🎨 Brand Voice & Messaging

### Tone of Voice
- **Spiritual**: Focus on soul-moving, spirit-awakening experiences
- **Community-oriented**: Emphasis on tribe connection
- **Professional**: Maintains credibility while being approachable
- **Emotional**: Acknowledges both joy and tears in dance

### Key Messages
1. **Flow State**: "In flow with the dancers"
2. **Emotional Support**: Supporting both joy and tears
3. **Journey Focus**: Music as a spiritual journey
4. **Community Building**: Connecting the tribe

## 📅 Content Calendar Considerations

### Regular Updates
- **Gig Schedule**: Monthly updates for upcoming events
- **Past Gigs**: Add completed performances promptly
- **Seasonal Content**: Update for festivals and special events

### Long-term Planning
- **International Expansion**: Track international performance growth
- **Venue Relationships**: Maintain and expand venue partnerships
- **Content Evolution**: Adapt messaging based on community feedback

---

*This content guide provides comprehensive information about managing and updating the DJ Henners Bio website content, including gig data, music integration, and brand messaging.*

