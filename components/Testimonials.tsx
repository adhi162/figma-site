'use client'

import React from 'react'
import { Star, Quote } from 'lucide-react'
import { Card, CardContent } from './ui/card'
import { ImageWithFallback } from './figma/ImageWithFallback'
import { useScrollAnimation, useStaggeredAnimation } from './hooks/useScrollAnimation'

const Testimonials = () => {
  const headerAnimation = useScrollAnimation('animate-fade-in-up')
  const { containerRef: testimonialsRef, getItemClassName: getTestimonialClassName } = useStaggeredAnimation('animate-rotate-in', 3)
  const { containerRef: logosRef, getItemClassName: getLogoClassName } = useStaggeredAnimation('animate-fade-in-up', 5)

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Homeowner',
      content: 'Archleve transformed our outdated home into a modern masterpiece. Their attention to detail and professional approach exceeded our expectations.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b647?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    },
    {
      name: 'Michael Chen',
      role: 'Business Owner',
      content: 'The office renovation project was completed on time and within budget. The team\'s creativity and expertise created an inspiring workspace.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    },
    {
      name: 'Emma Rodriguez',
      role: 'Interior Designer',
      content: 'Working with Archleve was a pleasure. Their construction team brought our design vision to life with exceptional craftsmanship.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    }
  ]

  const clientLogos = [
    { name: 'Urban Development Corp', logo: 'https://via.placeholder.com/150x60/777f6d/ffffff?text=Urban+Dev' },
    { name: 'Luxury Homes Ltd', logo: 'https://via.placeholder.com/150x60/968672/ffffff?text=Luxury+Homes' },
    { name: 'Modern Spaces Inc', logo: 'https://via.placeholder.com/150x60/bc8c62/ffffff?text=Modern+Spaces' },
    { name: 'Elite Properties', logo: 'https://via.placeholder.com/150x60/6b6755/ffffff?text=Elite+Properties' },
    { name: 'Green Building Co', logo: 'https://via.placeholder.com/150x60/596057/ffffff?text=Green+Building' }
  ]

  return (
    <section id="feedback" className="py-16 md:py-24 bg-archleve-warm-beige overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div ref={headerAnimation.ref} className={`text-center mb-16 ${headerAnimation.className}`}>
          <div className="w-12 h-0.5 bg-archleve-deep-forest mx-auto mb-6"></div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-archleve-deep-forest mb-6 leading-tight">
            What Our
            <span className="block font-medium text-archleve-charcoal">Clients Say</span>
          </h2>
          <p className="text-lg text-archleve-charcoal/80 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our satisfied clients have to say about working with Archleve.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div ref={testimonialsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className={`relative hover:shadow-xl transition-all duration-500 border-0 shadow-md group bg-archleve-soft-white hover:bg-archleve-cream ${getTestimonialClassName(index)}`}
            >
              <CardContent className="p-8">
                <div className="absolute top-4 right-4 text-archleve-gold opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                  <Quote size={32} />
                </div>

                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-archleve-gold text-archleve-gold transform group-hover:scale-110 transition-transform duration-300"
                      style={{ transitionDelay: `${i * 50}ms` }}
                    />
                  ))}
                </div>

                <p className="text-archleve-charcoal/80 mb-6 leading-relaxed italic group-hover:text-archleve-deep-forest transition-colors duration-300">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center">
                  <ImageWithFallback
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4 group-hover:scale-110 transition-transform duration-300"
                  />
                  <div>
                    <h4 className="font-semibold text-archleve-deep-forest group-hover:text-archleve-gold transition-colors duration-300">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-archleve-charcoal/70">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Client Logos */}
        <div className="border-t border-archleve-charcoal/20 pt-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold text-archleve-deep-forest">
              Trusted by Industry Leaders
            </h3>
          </div>
          <div ref={logosRef} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
            {clientLogos.map((client, index) => (
              <div
                key={index}
                className={`flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-500 opacity-70 hover:opacity-100 transform hover:scale-110 ${getLogoClassName(index)}`}
              >
                <ImageWithFallback
                  src={client.logo}
                  alt={client.name}
                  className="max-w-full h-12 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
