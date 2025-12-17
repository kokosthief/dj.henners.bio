'use client';

import clsx from 'clsx';
import Head from 'next/head';
import Link from 'next/link';
import React, { useEffect,useState } from 'react';
import { FaDownload, FaFilePdf, FaFileZipper, FaImage,FaVideo } from 'react-icons/fa6';
import { IoMdArrowBack, IoMdMoon, IoMdSunny } from 'react-icons/io';

import { getFromLocalStorage } from '@/lib/helper';

import Button from '@/components/buttons/Button';
import IconButton from '@/components/buttons/IconButton';

import ImageSlideshow from '@/app/components/ImageSlideshow';
import TechnicalRider from '@/app/components/TechnicalRider';

// Media file interface
interface MediaFile {
  name: string;
  format: string;
  size: string;
  downloadUrl: string;
  description: string;
}

// Sample data - you'll replace these with your actual content
const artistInfo = {
  shortDescription: "Henners takes dancers on an electrifying journey, merging global beats to create an immersive experience where music stirs the soul, evoking both elation and introspection.",

  mediumDescription: "Henners, a seasoned facilitator from Amsterdam's vibrant ecstatic dance scene with over four years of guiding dancers through soul-stirring journeys, weaves global rhythms to create spaces where joy, introspection, and connection flourish. Drawing inspiration from African rhythms and earthy beats from across the globe, his music invites you to bounce freely or introspect deeply. Rooted in his time aboard the 'Odessa' ship, Henners invites you to move freely, awaken your spirit, and dance the full spectrum of emotions that one encounters on life's journey.",

  longDescription: "In the vibrant heart of Amsterdam's Ecstatic Dance community, DJ Henners has carved out a unique niche in the world of conscious dance, creating transformative experiences that transport dancers on euphoric journeys through sound. Known for seamlessly blending diverse genres to craft immersive soundscapes, Henners draws inspiration from African rhythms, earthy beats, and global music traditions to invite dancers on profound journeys of self-discovery and expression.\n\nWith over four years as a seasoned facilitator in Amsterdam's thriving ecstatic dance scene, Henners has guided countless dancers through soul-stirring experiences. Rooted in his time aboard the iconic 'Odessa' venue in Amsterdam, he has mastered the art of creating spaces where joy, introspection, and connection flourish naturally. Whether you find yourself rooted in the earth or soaring through the cosmos, Henners' music invites you to move freely and awaken your spirit.\n\nBeyond the decks, Henners is a passionate advocate for the power of dance as a tool for community building and personal healing. His commitment to conscious dance extends beyond the dance floor, often collaborating with local artists and wellness practitioners to promote holistic well-being. Each set is carefully crafted to support dancers in experiencing the full spectrum of emotions that one encounters on life's journey - from ecstatic celebration to deep introspection.\n\nWith each musical journey, Henners inspires a deeper connection to the self, others, and the universal pulse of life, making every dance a sacred celebration of existence. His global reach extends from Amsterdam's premier venues to international retreats and festivals, bringing his unique approach to conscious dance communities worldwide."
};

const mediaFiles = {
  images: [
    {
      name: "Black Abyss",
      format: "JPG",
      size: "4.5 MB",
      downloadUrl: "/downloads/high-res/black abyss.jpg",
      description: "Mystical black abyss portrait"
    },
    {
      name: "Cacao Ceremony",
      format: "JPG",
      size: "104 KB",
      downloadUrl: "/downloads/high-res/cacao.jpg",
      description: "Sacred cacao ceremony moment"
    },
    {
      name: "Ceremony Space",
      format: "JPG",
      size: "756 KB",
      downloadUrl: "/downloads/high-res/ceremony.jpg",
      description: "Holding ceremony space"
    },
    {
      name: "Groove Session",
      format: "JPG",
      size: "4.4 MB",
      downloadUrl: "/downloads/high-res/groove.jpg",
      description: "Deep in the groove"
    },
    {
      name: "Lava Stoic",
      format: "JPG",
      size: "3.9 MB",
      downloadUrl: "/downloads/high-res/lava stoic.jpg",
      description: "Stoic presence with lava backdrop"
    },
    {
      name: "Ocean Split Mist",
      format: "JPG",
      size: "4.0 MB",
      downloadUrl: "/downloads/high-res/ocean split mist.jpg",
      description: "Mystical ocean mist portrait"
    },
    {
      name: "Road Sit",
      format: "JPG",
      size: "5.0 MB",
      downloadUrl: "/downloads/high-res/road sit.jpg",
      description: "Contemplative road sitting"
    },
    {
      name: "Rose Wall",
      format: "JPG",
      size: "4.6 MB",
      downloadUrl: "/downloads/high-res/rose wall.jpg",
      description: "Portrait against rose wall"
    },
    {
      name: "Smelling",
      format: "JPG",
      size: "2.8 MB",
      downloadUrl: "/downloads/high-res/smelling.jpg",
      description: "Sensory exploration moment"
    },
    {
      name: "Where",
      format: "JPG",
      size: "7.7 MB",
      downloadUrl: "/downloads/high-res/where.jpg",
      description: "Contemplative 'where' moment"
    },
    {
      name: "Wonder",
      format: "JPG",
      size: "5.5 MB",
      downloadUrl: "/downloads/high-res/wonder.jpg",
      description: "Sense of wonder captured"
    }
  ],
  videos: [
    {
      name: "EDFH Basement Session",
      format: "MP4",
      size: "2.2 MB",
      duration: "~1 min",
      downloadUrl: "/downloads/videos/edfh basement.mp4",
      description: "Ecstatic Dance in basement setting"
    },
    {
      name: "Movement Journey",
      format: "MOV",
      size: "17 MB",
      duration: "~3 min",
      downloadUrl: "/downloads/videos/movement journey.mov",
      description: "Full movement journey experience"
    },
    {
      name: "New Years Eve",
      format: "MP4",
      size: "2.0 MB",
      duration: "~1 min",
      downloadUrl: "/downloads/videos/new years eve.mp4",
      description: "New Year's Eve celebration"
    },
    {
      name: "New Years Eve Extended",
      format: "MP4",
      size: "7.7 MB",
      duration: "~2 min",
      downloadUrl: "/downloads/videos/new years evee.mp4",
      description: "Extended New Year's Eve footage"
    },
    {
      name: "This Is What We Do",
      format: "MP4",
      size: "23 MB",
      duration: "~5 min",
      downloadUrl: "/downloads/videos/this is what we do.mp4",
      description: "Showcase of ecstatic dance experience"
    }
  ],
  documents: [
    { 
      name: "Technical Rider - DJ Henners", 
      format: "PDF", 
      size: "108 KB",
      downloadUrl: "/downloads/documents/technical-rider.pdf",
      description: "Complete technical requirements and equipment specifications"
    },
    { 
      name: "Artist Biography (All Lengths)", 
      format: "PDF", 
      size: "120 KB",
      downloadUrl: "/downloads/documents/artist-biography.pdf",
      description: "Complete artist biography in short, medium, and extended formats"
    },
    { 
      name: "Complete Press Kit", 
      format: "PDF", 
      size: "160 KB",
      downloadUrl: "/downloads/documents/complete-press-kit.pdf",
      description: "Comprehensive press kit with bio, tech specs, booking info, and media assets"
    }
  ]
};

export default function MediaPackagePage() {
  const [mode, setMode] = React.useState<'dark' | 'light'>('light');
  const [activeDescription, setActiveDescription] = useState<'short' | 'medium' | 'long'>('medium');

  function toggleMode() {
    const newMode = mode === 'dark' ? 'light' : 'dark';
    setMode(newMode);
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme-mode', newMode);
    }
  }

  // Load saved theme preference on component mount
  useEffect(() => {
    const savedTheme = getFromLocalStorage('theme-mode');
    if (savedTheme === 'dark' || savedTheme === 'light') {
      setMode(savedTheme);
    }
  }, []);

  const handleDownload = (file: MediaFile, _type: string) => {
    // Create a temporary link and trigger download
    const link = document.createElement('a');
    link.href = file.downloadUrl || file.name;
    link.download = file.name;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePackageDownload = (_packageType: string) => {
    // For now, we'll create a simple package with links to all available files
    const packageContent = `DJ HENNERS - COMPLETE PRESS KIT

This package contains links to all available professional materials:

HIGH-RESOLUTION PHOTOS:
${mediaFiles.images.map(img => `• ${img.name} (${img.size}) - https://dj.henners.bio${img.downloadUrl}`).join('\n')}

PROMOTIONAL VIDEOS:
${mediaFiles.videos.map(video => `• ${video.name} (${video.size}) - https://dj.henners.bio${video.downloadUrl}`).join('\n')}

PROFESSIONAL DOCUMENTS:
${mediaFiles.documents.map(doc => `• ${doc.name} (${doc.size}) - https://dj.henners.bio${doc.downloadUrl}`).join('\n')}

CONTACT INFORMATION:
Email: dj@henners.bio
Website: https://dj.henners.bio
Location: Amsterdam, Netherlands

© ${new Date().getFullYear()} DJ Henners - Professional Press Kit
All materials cleared for promotional use by event organizers and press.
`;

    const blob = new Blob([packageContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'DJ-Henners-Complete-Media-Package.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  return (
    <main>
      <Head>
        <title>Press Kit - HENNERS | Ecstatic Dance DJ</title>
        <meta name="description" content="Professional press kit for DJ Henners - High-resolution photos, videos, technical rider, and promotional materials for event organizers and press." />
      </Head>

      <main className={clsx(
        mode === 'dark'
          ? 'bg-gradient-dark'
          : 'bg-gradient-to-br from-blue-50 via-white to-cyan-50'
      )}>
        <div className={clsx('layout', mode === 'dark' ? 'text-white' : 'text-gray-900')}>

          {/* Header Navigation */}
          <div className="py-6 px-4 md:px-0">
            <Link href="/" className={clsx(
              "inline-flex items-center space-x-2 px-4 py-2 rounded-xl transition-all duration-300",
              "border shadow-sm hover:shadow-md transform hover:-translate-y-0.5",
              mode === 'dark' 
                ? "bg-gray-800 border-gray-700 text-gray-200 hover:bg-gray-700 hover:text-white" 
                : "bg-white border-gray-200 text-gray-700 hover:bg-gray-50 hover:text-gray-900"
            )}>
              <IoMdArrowBack className="h-4 w-4" />
              <span className="font-medium">Back to Home</span>
            </Link>
          </div>

          {/* Dark/Light Mode Toggle - Fixed Position like Homepage */}
          <div className='fixed right-10 top-6 hidden md:block z-10'>
            <IconButton
              onClick={toggleMode}
              variant={mode === 'dark' ? 'light' : 'dark'}
              className='animate-gentle-pulse focus:ring focus:ring-blue-300 focus:ring-opacity-50'
              icon={mode === 'dark' ? IoMdSunny : IoMdMoon}
              aria-label={mode === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            />
          </div>

          {/* Enhanced Hero Section */}
          <div className="text-center mb-16">
            <div className="relative">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-400 via-cyan-500 to-blue-600 bg-clip-text text-transparent">
                  PRESS KIT
                </span>
              </h1>
              {/* Decorative elements */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-blue-300 to-cyan-300 rounded-full"></div>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-48 h-0.5 bg-gradient-to-r from-cyan-400 to-yellow-300 rounded-full"></div>
            </div>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Professional materials for event organizers & press
            </p>

            {/* Enhanced Download Packages */}
            <div className="flex justify-center mb-12">
              <div className="group">
                <Button
                  variant={mode === 'dark' ? 'light' : 'dark'}
                  leftIcon={FaFileZipper}
                  onClick={() => handlePackageDownload('complete')}
                  className="px-8 py-4 text-lg shadow-lg hover:shadow-2xl transform transition-all duration-300 hover:scale-105"
                >
                  Complete Press Kit
                </Button>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 opacity-0 group-hover:opacity-100 transition-opacity text-center">Everything you need in one download</p>
              </div>
            </div>
          </div>

          {/* Enhanced Artist Image Gallery */}
          <div className="mb-20">
            <div className="max-w-md mx-auto relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-3xl blur-2xl"></div>
              <div className="relative">
                <ImageSlideshow
                  autoPlay={false}
                  showControls={true}
                  className="mb-6 w-full"
                />
              </div>
            </div>
            <div className="text-center">
              <div className="flex justify-center items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                <span className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  High Resolution
                </span>
                <span className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                  Print Ready
                </span>
              </div>
            </div>
          </div>

          {/* Enhanced Artist Descriptions */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Artist Information
                </span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mx-auto"></div>
            </div>

            {/* Description Type Selector */}
            <div className="flex justify-center mb-8">
              <div className="inline-flex rounded-xl bg-gray-100 dark:bg-gray-800 p-1">
                {(['short', 'medium', 'long'] as const).map((type) => (
                  <button
                    key={type}
                    onClick={() => setActiveDescription(type)}
                    className={clsx(
                      'px-4 py-2 rounded-lg text-sm font-medium transition-all',
                      activeDescription === type
                        ? 'bg-blue-500 text-white shadow-sm'
                        : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                    )}
                  >
                    {type.charAt(0).toUpperCase() + type.slice(1)} Bio
                  </button>
                ))}
              </div>
            </div>

            {/* Enhanced Description Content */}
            <div className="max-w-5xl mx-auto">
              <div className="relative">
                <div className={clsx(
                  "absolute -inset-1 rounded-2xl blur-lg",
                  mode === 'dark'
                    ? "bg-gradient-to-r from-purple-500/20 to-pink-500/20"
                    : "bg-gradient-to-r from-blue-200/40 to-purple-200/40"
                )}></div>
                <div className={clsx(
                  "relative rounded-xl p-8 md:p-12 shadow-2xl border",
                  mode === 'dark'
                    ? "bg-gray-800 border-gray-700"
                    : "bg-white/90 backdrop-blur-sm border-gray-200 shadow-blue-100/50"
                )}>
                  <div className="prose prose-lg dark:prose-invert max-w-none">
                    {activeDescription === 'short' && (
                      <p className="text-lg leading-relaxed">{artistInfo.shortDescription}</p>
                    )}
                    {activeDescription === 'medium' && (
                      <p className="text-lg leading-relaxed">{artistInfo.mediumDescription}</p>
                    )}
                    {activeDescription === 'long' && (
                      <div className="space-y-4 text-lg leading-relaxed">
                        {artistInfo.longDescription.split('\n\n').map((paragraph, index) => (
                          <p key={index}>{paragraph}</p>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Copy to Clipboard Button */}
                  <div className="mt-6 text-center">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        const text = activeDescription === 'short' ? artistInfo.shortDescription :
                          activeDescription === 'medium' ? artistInfo.mediumDescription :
                            artistInfo.longDescription;
                        navigator.clipboard.writeText(text);
                      }}
                    >
                      Copy Text
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Enhanced Media Downloads */}
          <section className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">
                  Media Downloads
                </span>
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-green-400 to-blue-400 rounded-full mx-auto mb-4"></div>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Professional media assets ready for immediate use in your promotions and press materials
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

              {/* Images */}
              <div className="group bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-xl p-6 border border-blue-200 dark:border-blue-700/30 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg mr-3">
                    <FaImage className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold">Photos</h3>
                </div>
                <div className="space-y-3">
                  {mediaFiles.images.map((file, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-sm">{file.name}</p>
                        <p className="text-xs text-gray-500">{file.format} • {file.size}</p>
                      </div>
                      <button
                        onClick={() => handleDownload(file, 'image')}
                        className="p-2 hover:bg-blue-100 dark:hover:bg-blue-900/30 rounded-xl transition-colors duration-200"
                        title={`Download ${file.name}`}
                      >
                        <FaDownload className="h-4 w-4 text-blue-600" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Videos */}
              <div className="group bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-xl p-6 border border-purple-200 dark:border-purple-700/30 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg mr-3">
                    <FaVideo className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold">Videos</h3>
                </div>
                <div className="space-y-3">
                  {mediaFiles.videos.map((file, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-sm">{file.name}</p>
                        <p className="text-xs text-gray-500">{file.format} • {file.size} • {file.duration}</p>
                      </div>
                      <button
                        onClick={() => handleDownload(file, 'video')}
                        className="p-2 hover:bg-purple-100 dark:hover:bg-purple-900/30 rounded-xl transition-colors duration-200"
                        title={`Download ${file.name}`}
                      >
                        <FaDownload className="h-4 w-4 text-purple-600" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Documents */}
              <div className="group bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 rounded-xl p-6 border border-orange-200 dark:border-orange-700/30 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-orange-100 dark:bg-orange-900/30 rounded-lg mr-3">
                    <FaFilePdf className="h-6 w-6 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-semibold">Documents</h3>
                </div>
                <div className="space-y-3">
                  {mediaFiles.documents.map((file, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-sm">{file.name}</p>
                        <p className="text-xs text-gray-500">{file.format} • {file.size}</p>
                      </div>
                      <button
                        onClick={() => handleDownload(file, 'document')}
                        className="p-2 hover:bg-orange-100 dark:hover:bg-orange-900/30 rounded-xl transition-colors duration-200"
                        title={`Download ${file.name}`}
                      >
                        <FaDownload className="h-4 w-4 text-orange-600" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Full Technical Rider */}
          <section className="mb-20">
            <div className="max-w-6xl mx-auto">
              <TechnicalRider mode={mode} showDownloadButton={true} />
            </div>
          </section>

          {/* Enhanced Contact Section */}
          <section className="text-center mb-20">
            <div className="relative">
              <div className={clsx(
                "absolute inset-0 rounded-3xl",
                mode === 'dark'
                  ? "bg-gradient-to-r from-blue-500/5 to-purple-500/5"
                  : "bg-gradient-to-r from-blue-100/60 to-purple-100/60 border border-blue-200/50"
              )}></div>
              <div className="relative p-12 md:p-16">
                <h2 className="text-4xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                    Need Something Specific?
                  </span>
                </h2>
                <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mx-auto mb-8"></div>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
                  Don't see what you're looking for? Get in touch and we'll provide exactly what you need for your event or publication.
                </p>
                <Link href="mailto:dj@henners.bio?subject=Press Kit Inquiry">
                  <Button
                    variant={mode === 'dark' ? 'light' : 'dark'}
                    size="base"
                    className="px-10 py-5 text-lg shadow-lg hover:shadow-2xl transform transition-all duration-300 hover:scale-105"
                  >
                    Contact for Custom Materials
                  </Button>
                </Link>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className='mt-12 pb-8 pt-8'>
            <div className='text-center text-sm text-gray-500 dark:text-gray-400'>
              <div className='mb-4 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent dark:via-gray-600'></div>
              <p>
                © {new Date().getFullYear()} DJ Henners • Professional Press Kit
              </p>
            </div>
          </footer>

        </div>
      </main>
    </main>
  );
}