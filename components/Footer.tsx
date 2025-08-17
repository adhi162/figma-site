import React from 'react'
import { Facebook, Instagram, Linkedin, Twitter, Phone, Mail, MapPin } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' }
  ]

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' }
  ]

  const services = [
    { name: 'Construction', href: '#services' },
    { name: 'Interior Design', href: '#services' },
    { name: 'Renovation', href: '#services' },
    { name: 'Consultation', href: '#services' }
  ]

  return (
    <footer className="bg-archleve-charcoal text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Archleve</h3>
              <p className="text-white/80 leading-relaxed">
                Crafting exceptional spaces through innovative construction and interior design solutions.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-white/80">
                <Phone className="w-4 h-4 text-archleve-gold" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-white/80">
                <Mail className="w-4 h-4 text-archleve-gold" />
                <span>hello@archleve.com</span>
              </div>
              <div className="flex items-center space-x-3 text-white/80">
                <MapPin className="w-4 h-4 text-archleve-gold" />
                <span>123 Design Street, City, State</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-archleve-olive rounded-full flex items-center justify-center hover:bg-archleve-gold transition-colors duration-300"
                >
                  <social.icon className="w-5 h-5 text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-white/80 hover:text-archleve-gold transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href={service.href}
                    className="text-white/80 hover:text-archleve-gold transition-colors duration-300"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Stay Updated</h4>
            <p className="text-white/80 mb-4">
              Subscribe to our newsletter for the latest design trends and project updates.
            </p>
            <div className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded bg-archleve-olive/50 border border-archleve-olive text-white placeholder-white/60 focus:outline-none focus:border-archleve-gold transition-colors duration-300"
              />
              <button className="w-full bg-archleve-gold hover:bg-archleve-gold/90 text-white py-2 px-4 rounded transition-colors duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-archleve-olive py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-white/80 text-sm">
              © {currentYear} Archleve. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-white/80 hover:text-archleve-gold transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-white/80 hover:text-archleve-gold transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-white/80 hover:text-archleve-gold transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
