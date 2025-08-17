/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Sthavia Brand Colors
        'sthavia-primary-green': '#485954',
        'sthavia-sage': '#8b9d83',
        'sthavia-warm-beige': '#d4c4a8',
        'sthavia-cream': '#f7f3eb',
        'sthavia-deep-forest': '#2c3530',
        'sthavia-olive': '#6b7565',
        'sthavia-gold': '#b8a082',
        'sthavia-stone': '#9ca394',
        'sthavia-charcoal': '#3a3f3b',
        'sthavia-soft-white': '#fefefe',
        'sthavia-neutral': '#8e9089',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in-down': 'fadeInDown 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in-left': 'fadeInLeft 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in-right': 'fadeInRight 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'scale-in': 'scaleIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-in-up': 'slideInUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'rotate-in': 'rotateIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        fadeInUp: {
          'from': {
            opacity: '0',
            transform: 'translateY(40px)'
          },
          'to': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        fadeInDown: {
          'from': {
            opacity: '0',
            transform: 'translateY(-40px)'
          },
          'to': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        fadeInLeft: {
          'from': {
            opacity: '0',
            transform: 'translateX(-40px)'
          },
          'to': {
            opacity: '1',
            transform: 'translateX(0)'
          }
        },
        fadeInRight: {
          'from': {
            opacity: '0',
            transform: 'translateX(40px)'
          },
          'to': {
            opacity: '1',
            transform: 'translateX(0)'
          }
        },
        scaleIn: {
          'from': {
            opacity: '0',
            transform: 'scale(0.95)'
          },
          'to': {
            opacity: '1',
            transform: 'scale(1)'
          }
        },
        slideInUp: {
          'from': {
            opacity: '0',
            transform: 'translateY(60px)'
          },
          'to': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        rotateIn: {
          'from': {
            opacity: '0',
            transform: 'rotate(-5deg) scale(0.95)'
          },
          'to': {
            opacity: '1',
            transform: 'rotate(0deg) scale(1)'
          }
        }
      }
    },
  },
  plugins: [],
}
