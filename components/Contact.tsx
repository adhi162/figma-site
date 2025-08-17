'use client'

import React from 'react'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { Button } from './ui/button'
import { Card, CardContent } from './ui/card'
import { useScrollAnimation, useStaggeredAnimation } from './hooks/useScrollAnimation'

const Contact = () => {
  const headerAnimation = useScrollAnimation('animate-fade-in-up')
  const leftContentAnimation = useScrollAnimation('animate-fade-in-left')
  const rightContentAnimation = useScrollAnimation('animate-fade-in-right animate-delay-200')
  const { containerRef, getItemClassName } = useStaggeredAnimation('animate-scale-in', 4)

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: '+1 (555) 123-4567',
      link: 'tel:+15551234567'
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'hello@sthavia.com',
      link: 'mailto:hello@sthavia.com'
    },
    {
      icon: MapPin,
      title: 'Location',
      details: '123 Design Street, City, State 12345',
      link: 'https://maps.google.com'
    },
    {
      icon: Clock,
      title: 'Hours',
      details: 'Mon-Fri 9AM-6PM, Sat 10AM-4PM',
      link: null
    }
  ]

  return (
    <section id="contact" className="py-20 md:py-32 bg-sthavia-deep-forest overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div ref={headerAnimation.ref} className={`text-center mb-20 ${headerAnimation.className}`}>
          <div className="w-12 h-0.5 bg-sthavia-gold mx-auto mb-6"></div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-sthavia-soft-white mb-6 leading-tight">
            Let's Build
            <span className="block font-medium text-sthavia-gold">Together</span>
          </h2>
          <p className="text-lg text-sthavia-soft-white/80 max-w-2xl mx-auto leading-relaxed">
            Ready to transform your space? Connect with our team to discuss your vision and receive personalized architectural consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
          {/* Contact Information */}
          <div ref={leftContentAnimation.ref} className={`space-y-12 ${leftContentAnimation.className}`}>
            <div>
              <h3 className="text-2xl font-medium text-sthavia-soft-white mb-6">
                Get In Touch
              </h3>
              <p className="text-sthavia-soft-white/70 mb-8 leading-relaxed">
                We're here to answer your questions and help bring your architectural vision to life. Reach out through any of the channels below.
              </p>
            </div>

            <div ref={containerRef} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className={`bg-sthavia-primary-green/50 backdrop-blur-sm border-0 hover:bg-sthavia-primary-green/70 transition-all duration-500 hover:transform hover:scale-105 group ${getItemClassName(index)}`}>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 bg-sthavia-gold rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <info.icon className="w-5 h-5 text-sthavia-soft-white" />
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-sthavia-soft-white mb-2 text-sm uppercase tracking-wide">
                          {info.title}
                        </h4>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-sthavia-soft-white/80 hover:text-sthavia-gold transition-colors duration-300 text-sm"
                          >
                            {info.details}
                          </a>
                        ) : (
                          <p className="text-sthavia-soft-white/80 group-hover:text-sthavia-soft-white transition-colors duration-300 text-sm">
                            {info.details}
                          </p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Call-to-Action */}
          <div ref={rightContentAnimation.ref} className={`bg-sthavia-warm-beige rounded-2xl p-10 md:p-12 hover:shadow-2xl transition-all duration-500 ${rightContentAnimation.className}`}>
            <div className="text-center space-y-8">
              <div>
                <h3 className="text-2xl md:text-3xl font-medium text-sthavia-deep-forest mb-4">
                  Ready to Start Your Project?
                </h3>
                <p className="text-sthavia-charcoal/80 leading-relaxed">
                  Schedule a complimentary consultation with our architectural team. We'll discuss your vision, provide insights, and create a tailored approach for your space.
                </p>
              </div>

              <div className="space-y-4">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-sthavia-deep-forest hover:bg-sthavia-charcoal text-sthavia-soft-white px-8 py-4 text-base font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg rounded-lg"
                >
                  Schedule Consultation
                </Button>
                <div className="text-xs text-sthavia-charcoal/60 uppercase tracking-wide">
                  Complimentary • Expert Guidance • No Obligation
                </div>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-sthavia-charcoal/20">
                <div className="text-center group cursor-default">
                  <div className="text-2xl font-light text-sthavia-gold mb-2 group-hover:scale-110 transition-transform duration-300">24h</div>
                  <div className="text-xs text-sthavia-charcoal/70 uppercase tracking-wide">Response Time</div>
                </div>
                <div className="text-center group cursor-default">
                  <div className="text-2xl font-light text-sthavia-gold mb-2 group-hover:scale-110 transition-transform duration-300">Free</div>
                  <div className="text-xs text-sthavia-charcoal/70 uppercase tracking-wide">Consultation</div>
                </div>
                <div className="text-center group cursor-default">
                  <div className="text-2xl font-light text-sthavia-gold mb-2 group-hover:scale-110 transition-transform duration-300">100%</div>
                  <div className="text-xs text-sthavia-charcoal/70 uppercase tracking-wide">Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
