'use client'

import React from 'react'
import { Home, Hammer, Palette, Building, Lightbulb, Users } from 'lucide-react'
import { Card, CardContent } from './ui/card'
import { useScrollAnimation, useStaggeredAnimation } from './hooks/useScrollAnimation'

const Services = () => {
  const headerAnimation = useScrollAnimation('animate-fade-in-up')
  const { containerRef, getItemClassName } = useStaggeredAnimation('animate-scale-in', 6)

  const services = [
    {
      icon: Building,
      title: 'Construction',
      description: 'Complete construction services from foundation to finish, ensuring quality and timely delivery.'
    },
    {
      icon: Palette,
      title: 'Interior Design',
      description: 'Creative interior solutions that reflect your style and enhance your living experience.'
    },
    {
      icon: Home,
      title: 'Residential Projects',
      description: 'Custom homes and renovations designed to meet your family\'s unique needs.'
    },
    {
      icon: Hammer,
      title: 'Renovation',
      description: 'Transform existing spaces with modern upgrades and thoughtful redesigns.'
    },
    {
      icon: Lightbulb,
      title: 'Design Consultation',
      description: 'Expert advice and planning to bring your vision to life within budget.'
    },
    {
      icon: Users,
      title: 'Project Management',
      description: 'End-to-end project coordination ensuring smooth execution and quality results.'
    }
  ]

  return (
    <section id="services" className="py-16 md:py-24 bg-archleve-primary-green overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div ref={headerAnimation.ref} className={`text-center mb-16 ${headerAnimation.className}`}>
          <div className="w-12 h-0.5 bg-archleve-gold mx-auto mb-6"></div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-archleve-soft-white mb-6 leading-tight">
            Our
            <span className="block font-medium text-archleve-gold">Services</span>
          </h2>
          <p className="text-lg text-archleve-soft-white/80 max-w-3xl mx-auto leading-relaxed">
            From concept to completion, we offer comprehensive solutions for all your construction and design needs.
          </p>
        </div>

        {/* Services Grid */}
        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className={`group hover:shadow-xl transition-all duration-500 hover:transform hover:-translate-y-2 border-0 shadow-md bg-archleve-warm-beige hover:bg-archleve-gold ${getItemClassName(index)}`}
            >
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-archleve-deep-forest rounded-full group-hover:bg-archleve-deep-forest/90 transition-all duration-500 group-hover:rotate-12">
                    <service.icon className="w-8 h-8 text-archleve-gold group-hover:text-archleve-soft-white transition-colors duration-300" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-archleve-deep-forest mb-4 group-hover:text-archleve-soft-white transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-archleve-charcoal/80 leading-relaxed group-hover:text-archleve-soft-white/90 transition-colors duration-300">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services