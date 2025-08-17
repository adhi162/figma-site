'use client'

import React from 'react'
import { ImageWithFallback } from './figma/ImageWithFallback'
import { Card, CardContent } from './ui/card'
import { Button } from './ui/button'
import { useScrollAnimation, useStaggeredAnimation } from './hooks/useScrollAnimation'

const Portfolio = () => {
  const headerAnimation = useScrollAnimation('animate-fade-in-up')
  const buttonAnimation = useScrollAnimation('animate-fade-in-up')
  const { containerRef, getItemClassName } = useStaggeredAnimation('animate-slide-in-up', 6)

  const projects = [
    {
      id: 1,
      title: 'Modern Family Home',
      category: 'Residential',
      image: 'https://www.contemporist.com/wp-content/uploads/2020/08/modern-house-lighting-architecture-260820-1114-01.jpg',
      description: 'Contemporary design with sustainable materials and smart home integration.'
    },
    {
      id: 2,
      title: 'Corporate Office Space',
      category: 'Commercial',
      image: 'https://www.contemporist.com/wp-content/uploads/2020/08/modern-house-lighting-architecture-260820-1114-01.jpg',
      description: 'Innovative workspace design promoting collaboration and productivity.'
    },
    {
      id: 3,
      title: 'Luxury Apartment',
      category: 'Interior Design',
      image: 'https://www.contemporist.com/wp-content/uploads/2020/08/modern-house-lighting-architecture-260820-1114-01.jpg',
      description: 'Elegant interior design with premium finishes and custom furniture.'
    },
    {
      id: 4,
      title: 'Restaurant Renovation',
      category: 'Commercial',
      image: 'https://www.contemporist.com/wp-content/uploads/2020/08/modern-house-lighting-architecture-260820-1114-01.jpg',
      description: 'Complete renovation creating an inviting dining atmosphere.'
    },
    {
      id: 5,
      title: 'Elegant Villa',
      category: 'Residential',
      image: 'https://www.contemporist.com/wp-content/uploads/2020/08/modern-house-lighting-architecture-260820-1114-01.jpg',
      description: 'Traditional architecture with modern amenities and landscaping.'
    },
    {
      id: 6,
      title: 'Boutique Hotel',
      category: 'Commercial',
      image: 'https://www.contemporist.com/wp-content/uploads/2020/08/modern-house-lighting-architecture-260820-1114-01.jpg',
      description: 'Luxurious hospitality design with local cultural elements.'
    }
  ]

  return (
    <section id="portfolio" className="py-16 md:py-24 bg-archleve-charcoal overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div ref={headerAnimation.ref} className={`text-center mb-16 ${headerAnimation.className}`}>
          <div className="w-12 h-0.5 bg-archleve-gold mx-auto mb-6"></div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-archleve-soft-white mb-6 leading-tight">
            Featured
            <span className="block font-medium text-archleve-gold">Projects</span>
          </h2>
          <p className="text-lg text-archleve-soft-white/80 max-w-3xl mx-auto leading-relaxed">
            Explore our portfolio of successful projects that showcase our commitment to excellence and innovation.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className={`group overflow-hidden hover:shadow-xl transition-all duration-500 hover:transform hover:-translate-y-1 border-0 shadow-md bg-archleve-primary-green/50 backdrop-blur-sm hover:bg-archleve-primary-green/70 ${getItemClassName(index)}`}
            >
              <div className="relative overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-archleve-deep-forest/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-archleve-soft-white font-medium px-6 py-3 border-2 border-archleve-gold rounded-full hover:bg-archleve-gold hover:text-archleve-deep-forest transition-all duration-300 cursor-pointer transform translate-y-4 group-hover:translate-y-0">
                      View Project
                    </span>
                  </div>
                </div>
                <div className="absolute top-4 left-4 transform -translate-x-8 group-hover:translate-x-0 transition-transform duration-500">
                  <span className="bg-archleve-gold text-archleve-deep-forest px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-archleve-soft-white mb-2 group-hover:text-archleve-gold transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-archleve-soft-white/70 group-hover:text-archleve-soft-white/90 transition-colors duration-300">
                  {project.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View More Button */}
        <div ref={buttonAnimation.ref} className={`text-center ${buttonAnimation.className}`}>
          <Button
            size="lg"
            className="bg-archleve-gold hover:bg-archleve-gold/90 text-archleve-deep-forest px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Portfolio
