'use client'

// import React from 'react'
import { ChevronDown } from 'lucide-react'
import { ImageWithFallback } from './figma/ImageWithFallback'

const Landing = () => {
  const scrollToContent = () => {
    const contentElement = document.getElementById('main-content')
    if (contentElement) {
      contentElement.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative w-screen h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image - Full viewport coverage */}
      <div className="absolute inset-0 w-full h-full">
        <ImageWithFallback
          src="https://www.contemporist.com/wp-content/uploads/2020/08/modern-house-lighting-architecture-260820-1114-01.jpg"
          alt="Architectural masterpiece - modern building design"
          className="w-full h-full object-cover scale-105"
        />
        {/* Refined overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-sthavia-deep-forest/60 via-sthavia-charcoal/40 to-sthavia-primary-green/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center">
        {/* Company Name */}
        <div className="mb-12">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-sthavia-soft-white tracking-tight">
            <span className="block font-light">STHAVIA</span>
            {/* <span className="block text-sthavia-gold font-medium">LEVE</span> */}
          </h1>
          <div className="w-24 h-0.5 bg-sthavia-gold mx-auto mt-8"></div>
          <p className="text-sthavia-sage font-light tracking-[0.3em] uppercase text-sm mt-4">
            ARQUITETURA
          </p>
        </div>

        {/* Refined Subtitle */}
        <p className="text-lg md:text-xl text-sthavia-soft-white/90 font-light tracking-wide mb-20 max-w-lg mx-auto">
          Crafting spaces where architecture meets artistry
        </p>
      </div>

      {/* Scroll Indicator - Enhanced for magnetic scroll */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
        <button
          onClick={scrollToContent}
          className="flex flex-col items-center group cursor-pointer hover:scale-110 transition-transform duration-300"
          aria-label="Scroll to content"
        >
          <span className="text-sthavia-soft-white/80 text-xs font-medium mb-6 opacity-80 group-hover:opacity-100 transition-opacity duration-500 uppercase tracking-widest">
            Explore
          </span>
          <div className="w-6 h-10 border border-sthavia-soft-white/40 rounded-full flex justify-center items-start p-2 group-hover:border-sthavia-gold transition-colors duration-500 group-hover:shadow-lg group-hover:shadow-sthavia-gold/20">
            <ChevronDown className="w-3 h-3 text-sthavia-soft-white/60 group-hover:text-sthavia-gold animate-bounce transition-colors duration-500" />
          </div>
        </button>
      </div>

      {/* Minimalist Decorative Elements */}
      <div className="absolute top-1/4 left-16 w-1 h-1 bg-sthavia-gold rounded-full opacity-60 animate-pulse hidden lg:block"></div>
      <div className="absolute top-1/3 right-20 w-1 h-1 bg-sthavia-sage rounded-full opacity-40 animate-pulse hidden lg:block" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-1/4 left-24 w-1 h-1 bg-sthavia-gold rounded-full opacity-50 animate-pulse hidden lg:block" style={{ animationDelay: '4s' }}></div>

      {/* Brand mark corner */}
      <div className="absolute top-8 right-8 hidden md:block">
        <div className="w-8 h-8 border border-sthavia-gold/30 rotate-45"></div>
      </div>
    </section>
  )
}

export default Landing
