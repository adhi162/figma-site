"use client";

import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Landing from "./components/Landing";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [showMain, setShowMain] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50 && !showMain) {
        setShowMain(true);
        // Smooth scroll to main content after transition
        setTimeout(() => {
          document.getElementById('main-content')?.scrollIntoView({ 
            behavior: 'smooth' 
          });
        }, 300);
      }
    };

    const handleWheel = (e: WheelEvent) => {
      if (!showMain && e.deltaY > 0) {
        e.preventDefault();
        setShowMain(true);
        setTimeout(() => {
          document.getElementById('main-content')?.scrollIntoView({ 
            behavior: 'smooth' 
          });
        }, 300);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('wheel', handleWheel);
    };
  }, [showMain]);

  return (
    <div className="min-h-screen bg-archleve-deep-forest font-['Inter']">
      {/* Header */}
      <Header isScrolled={showMain} />

      {/* Landing Page - only show when main content is hidden */}
      {!showMain && (
        <div className="fixed inset-0 z-30 bg-archleve-deep-forest">
          <Landing />
        </div>
      )}

      {/* Main Content */}
      <div 
        id="main-content"
        className={`transition-opacity duration-300 ${showMain ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      >
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}