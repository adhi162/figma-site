'use client'

import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from './ui/button'

interface HeaderProps {
  isScrolled?: boolean
}

const Header = ({ isScrolled = false }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigationItems = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Themes', href: '#themes' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Feedback', href: '#feedback' },
    { name: 'Contact', href: '#contact' },
  ]

  useEffect(() => {
    if (!isScrolled) {
      setIsMenuOpen(false)
    }
  }, [isScrolled])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-archleve-soft-white/95 backdrop-blur-sm border-b border-archleve-sage/20 shadow-sm transition-all duration-300 ease-out ${
      isScrolled 
        ? 'transform translate-y-0 opacity-100' 
        : 'transform -translate-y-full opacity-0'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#landing" className="flex items-center space-x-2 group">
              <div className="w-6 h-6 border border-archleve-primary-green rotate-45 group-hover:rotate-90 transition-transform duration-500"></div>
              <span className="text-xl font-semibold text-archleve-deep-forest hover:text-archleve-primary-green transition-colors duration-300 tracking-tight">
                ARCHLEVE
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-archleve-charcoal hover:text-archleve-primary-green transition-colors duration-300 font-medium text-sm tracking-wide"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="flex items-center space-x-3 ml-6 pl-6 border-l border-archleve-sage/30">
              <Button 
                variant="outline" 
                size="sm"
                className="border-archleve-primary-green text-archleve-primary-green hover:bg-archleve-primary-green hover:text-archleve-soft-white transition-all duration-300"
              >
                Login
              </Button>
              <Button 
                size="sm"
                className="bg-archleve-gold hover:bg-archleve-gold/90 text-archleve-soft-white transition-all duration-300 shadow-sm"
              >
                Register
              </Button>
            </div>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-archleve-charcoal hover:text-archleve-primary-green transition-colors duration-300 p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen 
            ? 'max-h-96 opacity-100 pb-6' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <nav className="flex flex-col space-y-4 pt-4 border-t border-archleve-sage/20">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-archleve-charcoal hover:text-archleve-primary-green transition-colors duration-300 font-medium py-2 text-sm tracking-wide"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="flex flex-col space-y-3 pt-4 border-t border-archleve-sage/20">
              <Button 
                variant="outline" 
                size="sm"
                className="border-archleve-primary-green text-archleve-primary-green hover:bg-archleve-primary-green hover:text-archleve-soft-white transition-all duration-300"
              >
                Login
              </Button>
              <Button 
                size="sm"
                className="bg-archleve-gold hover:bg-archleve-gold/90 text-archleve-soft-white transition-all duration-300"
              >
                Register
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header