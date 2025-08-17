'use client'

import React from 'react'
import { ImageWithFallback } from './figma/ImageWithFallback'
import { useScrollAnimation } from './hooks/useScrollAnimation'

const About = () => {
  const textAnimation = useScrollAnimation('animate-fade-in-left')
  const imageAnimation = useScrollAnimation('animate-fade-in-right animate-delay-200')
  const statsAnimation = useScrollAnimation('animate-fade-in-up animate-delay-400')

  return (
    <section id="about" className="py-20 md:py-32 bg-sthavia-charcoal overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Text Content */}
          <div ref={textAnimation.ref} className={`space-y-8 ${textAnimation.className}`}>
            <div className="space-y-6">
              <div className="w-12 h-0.5 bg-sthavia-gold"></div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-sthavia-soft-white leading-tight">
                About
                <span className="block font-medium text-sthavia-gold">Sthavia</span>
              </h2>
            </div>

            <div className="space-y-6 text-sthavia-soft-white/80 leading-relaxed">
              <p className="text-lg">
                With over two decades of experience in architectural design and construction, Sthavia has established itself as a leader in creating exceptional spaces that seamlessly blend functionality with aesthetic excellence.
              </p>

              <p className="text-base">
                Our multidisciplinary team of architects, designers, and craftspeople collaborate to transform visions into reality, whether through residential innovations, commercial developments, or complete spatial transformations.
              </p>
            </div>

            <div ref={statsAnimation.ref} className={`grid grid-cols-2 gap-8 pt-8 ${statsAnimation.className}`}>
              <div className="text-center group cursor-default">
                <div className="text-4xl md:text-5xl font-light text-sthavia-gold mb-3 group-hover:scale-105 transition-transform duration-300">500+</div>
                <div className="text-sthavia-soft-white/70 font-medium text-sm tracking-wide uppercase">Projects Completed</div>
              </div>
              <div className="text-center group cursor-default">
                <div className="text-4xl md:text-5xl font-light text-sthavia-gold mb-3 group-hover:scale-105 transition-transform duration-300">20+</div>
                <div className="text-sthavia-soft-white/70 font-medium text-sm tracking-wide uppercase">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div ref={imageAnimation.ref} className={`relative ${imageAnimation.className}`}>
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl shadow-sthavia-deep-forest/20 group">
              <ImageWithFallback
                src="https://www.contemporist.com/wp-content/uploads/2020/08/modern-house-lighting-architecture-260820-1114-01.jpg"
                alt="Sthavia construction team at work"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-sthavia-gold/20 rounded-full backdrop-blur-sm"></div>
            <div className="absolute -top-6 -left-6 w-12 h-12 border border-sthavia-gold/30 rotate-45 backdrop-blur-sm bg-sthavia-primary-green/30"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
