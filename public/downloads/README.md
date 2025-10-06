# Professional Media Downloads

This folder contains high-resolution images and videos for professional use and press materials.

## Current Structure

```
downloads/
├── high-res/                     # High-resolution images
│   ├── henners-dj-hires.jpg
│   ├── henners-pfp-hires.jpg  
│   ├── henners-ceremony-hires.jpg
│   └── henners-spaceholding-hires.jpg
└── videos/                       # Social media & promotional videos
    └── (add your video files here)
```

## Adding New Content

### High-Resolution Images
1. **Place high-res images** in the `high-res/` folder
2. **Use descriptive filenames** ending with `-hires.jpg`
3. **Update the media package** in `src/app/media-package/page.tsx`:
   - Add new entries to the `mediaFiles.images` array
   - Include name, format, size, downloadUrl, and description

### Videos
1. **Place video files** in the `videos/` folder
2. **Use descriptive filenames** (e.g., `henners-ecstatic-dance-set.mp4`)
3. **Update the media package** in `src/app/media-package/page.tsx`:
   - Add new entries to the `mediaFiles.videos` array
   - Include name, format, size, duration, downloadUrl, and description

## Recommended Specifications

### Images
- **Format**: JPG (for photos) or PNG (for graphics with transparency)
- **Resolution**: Minimum 2000px on longest side for print use
- **Quality**: High quality (90-95% JPEG compression)
- **File size**: 2-8MB per image (acceptable for professional downloads)

### Videos
- **Format**: MP4 (recommended), MOV, AVI
- **Quality**: HD (1080p preferred)
- **File size**: Under 100MB for easy downloading
- **Usage**: Social media, promotional content, press materials

## Notes

- These files are only downloaded when users click the download buttons
- They do NOT affect your website's loading speed
- The website continues to use optimized images from `/images/` for display
- These high-res versions are specifically for press, marketing, and professional use