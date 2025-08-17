/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./App.tsx",
    "./main.tsx",
  ],
  safelist: [
    // Ensure all Sthavia color utilities are always generated
    'bg-sthavia-primary-green',
    'bg-sthavia-sage',
    'bg-sthavia-warm-beige',
    'bg-sthavia-cream',
    'bg-sthavia-deep-forest',
    'bg-sthavia-olive',
    'bg-sthavia-gold',
    'bg-sthavia-stone',
    'bg-sthavia-charcoal',
    'bg-sthavia-soft-white',
    'bg-sthavia-neutral',
    // Text colors
    'text-sthavia-primary-green',
    'text-sthavia-sage',
    'text-sthavia-warm-beige',
    'text-sthavia-cream',
    'text-sthavia-deep-forest',
    'text-sthavia-olive',
    'text-sthavia-gold',
    'text-sthavia-stone',
    'text-sthavia-charcoal',
    'text-sthavia-soft-white',
    'text-sthavia-neutral',
    // Border colors
    'border-sthavia-primary-green',
    'border-sthavia-sage',
    'border-sthavia-warm-beige',
    'border-sthavia-cream',
    'border-sthavia-deep-forest',
    'border-sthavia-olive',
    'border-sthavia-gold',
    'border-sthavia-stone',
    'border-sthavia-charcoal',
    'border-sthavia-soft-white',
    'border-sthavia-neutral',
    // Opacity variants that are used in components
    'bg-sthavia-deep-forest/60',
    'bg-sthavia-deep-forest/70',
    'bg-sthavia-charcoal/40',
    'bg-sthavia-primary-green/70',
    'text-sthavia-soft-white/90',
    'text-sthavia-soft-white/80',
    'border-sthavia-sage/20',
    'border-sthavia-sage/30',
    'border-sthavia-soft-white/40',
    'text-sthavia-soft-white/60',
    'border-sthavia-gold/30',
    // Hover variants
    'hover:bg-sthavia-gold',
    'hover:bg-sthavia-gold/90',
    'hover:text-sthavia-primary-green',
    'hover:text-sthavia-soft-white',
    'hover:border-sthavia-gold',
    'hover:bg-sthavia-primary-green',
    'hover:bg-sthavia-soft-white',
    'hover:text-sthavia-deep-forest',
    // Group hover variants
    'group-hover:opacity-100',
    'group-hover:border-sthavia-gold',
    'group-hover:text-sthavia-gold',
    'group-hover:shadow-lg',
    'group-hover:shadow-sthavia-gold/20',
    'group-hover:rotate-90',
    'group-hover:scale-110',
  ],
  theme: {
    extend: {
      colors: {
        // Sthavia Brand Colors with both CSS variables and fallbacks
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

        // Standard colors using CSS variables
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
