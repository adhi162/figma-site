'use client'

import React from 'react'
import { Button } from './ui/button'
import { ImageWithFallback } from './figma/ImageWithFallback'
import { useScrollAnimation, useParallax } from './hooks/useScrollAnimation'

const Hero = () => {
  const titleAnimation = useScrollAnimation('animate-fade-in-up')
  const subtitleAnimation = useScrollAnimation('animate-fade-in-up animate-delay-200')
  const buttonAnimation = useScrollAnimation('animate-fade-in-up animate-delay-400')
  const parallaxRef = useParallax(0.3)

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-sthavia-deep-forest">
      {/* Background Image with Parallax */}
      <div ref={parallaxRef} className="absolute inset-0">
        <ImageWithFallback
          src="https://www.contemporist.com/wp-content/uploads/2020/08/modern-house-lighting-architecture-260820-1114-01.jpg"
          alt="Modern architecture and interior design"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-sthavia-deep-forest/70"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={titleAnimation.ref} className={titleAnimation.className}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-sthavia-soft-white mb-6 leading-tight">
            Crafting Spaces that
            <span className="text-sthavia-gold block">Inspire Living</span>
          </h1>
        </div>

        <div ref={subtitleAnimation.ref} className={subtitleAnimation.className}>
          <p className="text-lg md:text-xl lg:text-2xl text-sthavia-soft-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            At Sthavia, we transform your vision into reality through innovative construction and exquisite interior design solutions.
          </p>
        </div>

        <div ref={buttonAnimation.ref} className={buttonAnimation.className}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-sthavia-gold hover:bg-sthavia-gold/90 text-sthavia-soft-white px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Explore Our Work
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-sthavia-soft-white text-sthavia-soft-white hover:bg-sthavia-soft-white hover:text-sthavia-deep-forest px-8 py-4 text-lg font-semibold transition-all duration-300"
            >
              Get Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
