import React from "react";

export default function Hero() {
  return (
    <main className="h-screen w-full relative flex items-center justify-center px-6 overflow-hidden">
      {/* Header Navigation */}
      <header className="absolute top-0 left-0 w-full z-50 px-6 py-8 md:px-12 flex items-center justify-between">
        {/* Left: Bold Typography Logo */}
        <div className="font-serif text-2xl md:text-3xl leading-none tracking-tighter uppercase font-black italic">
          <div>SHINN</div>
          <div className="ml-4">GEE</div>
        </div>

        {/* Center: Monogram */}
        <div className="hidden md:flex items-center justify-center border-2 border-black w-12 h-12 rotate-45 group hover:bg-black transition-colors duration-300">
          <span className="font-serif text-xl -rotate-45 group-hover:text-white transition-colors">SG</span>
        </div>

        {/* Right: Resume & Menu */}
        <div className="flex items-center space-x-4">
          <button className="flex items-center space-x-2 bg-[#d4ff00] text-black px-5 py-2.5 rounded-lg font-bold text-sm tracking-tight hover:scale-105 transition-transform shadow-lg">
            <span>RESUME</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
              <polyline points="14 2 14 8 20 8" />
            </svg>
          </button>
          <button className="w-12 h-12 border border-black/10 bg-white flex flex-col items-center justify-center space-y-1.5 rounded-lg hover:bg-gray-50 transition-colors">
            <span className="w-6 h-0.5 bg-black"></span>
            <span className="w-6 h-0.5 bg-black"></span>
          </button>
        </div>
      </header>

      {/* Centerpiece Content */}
      <div className="relative w-full max-w-lg lg:max-w-2xl">
        {/* Portrait Container */}
        <div className="relative aspect-[3/4] md:aspect-square bg-gray-100 overflow-hidden shadow-2xl rounded-sm border border-gray-200">
          {/* Portrait Image */}
          <img
            src="https://raw.githubusercontent.com/choo12204/my-portfolio/main/IMG_4185.JPG"
            alt="Shinn Gee Portrait"
            className="w-full h-full object-cover grayscale contrast-125"
          />

          {/* Overlay Effect: Translucent Technical Wireframe */}
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
            <div className="w-3/4 h-3/4 opacity-40 animate-pulse-soft">
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                    <path d="M 20 0 L 0 0 0 20" fill="none" stroke="black" stroke-width="0.5" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
                <circle cx="100" cy="100" r="40" stroke="black" stroke-width="1" fill="none" stroke-dasharray="4" />
                <path d="M20,100 L180,100 M100,20 L100,180" stroke="black" stroke-width="0.5" />
                <rect x="70" y="70" width="60" height="60" stroke="black" stroke-width="2" fill="none" />
              </svg>
            </div>
          </div>
        </div>

        {/* Background Decorative Text */}
        <div className="absolute -z-10 -bottom-12 -right-12 opacity-5 hidden lg:block">
          <span className="text-[12rem] font-serif font-black italic select-none">2026</span>
        </div>
      </div>

      {/* Bottom Left Floating Card: Current Status */}
      <div className="absolute bottom-8 left-6 md:bottom-12 md:left-12 max-w-xs w-full bg-white/80 backdrop-blur-md border border-gray-200 p-6 cut-corner shadow-xl">
        <div className="flex flex-col space-y-4">
          <header className="flex justify-between items-start">
            <div>
              <span className="text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase">Current Status</span>
              <div className="flex items-center space-x-2 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
                <span className="text-sm font-bold tracking-tight">AVAILABLE SUMMER 2026</span>
              </div>
            </div>
          </header>

          <div className="h-px w-full bg-gradient-to-r from-gray-200 to-transparent"></div>

          <div className="flex items-center space-x-4">
            {/* Education Emblem */}
            <div className="bg-gray-50 p-3 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                <path d="M6 12v5c3 3 9 3 12 0v-5" />
              </svg>
            </div>
            <div>
              <p className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider">Education</p>
              <p className="text-xs font-bold leading-tight uppercase">
                MEng Robotics Engineering<br />CLASS OF 2026
              </p>
            </div>
          </div>

          <div className="flex justify-between items-center pt-2">
            <span className="text-[9px] font-medium text-gray-400 uppercase tracking-widest">UK / GLOBAL RELOCATION</span>
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator (Right) */}
      <aside className="fixed right-6 top-1/2 -translate-y-1/2 hidden md:flex flex-col items-center space-y-8">
        <span className="rotate-90 text-[10px] font-bold tracking-[0.3em] uppercase text-gray-400 origin-center translate-y-8">Scroll</span>
        <div className="w-px h-24 bg-gray-200 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-black"></div>
        </div>
      </aside>
    </main>
  );
}
