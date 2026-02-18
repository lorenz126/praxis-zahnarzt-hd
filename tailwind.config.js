/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
      colors: {
        // Professional medical palette for dental practice
        primary: {
          DEFAULT: '#2563EB', // Professional blue
          light: '#60A5FA',
          dark: '#1E40AF',
        },
        secondary: {
          DEFAULT: '#10B981', // Fresh green (dental health)
          light: '#34D399',
          dark: '#059669',
        },
        // Existing neutral colors (professional and clean)
        cream: {
          DEFAULT: '#FFFFFF',
          dark: '#F5F5F3',
        },
        dark: {
          DEFAULT: '#0A0A0A',
          light: '#141414',
          muted: '#1A1A1A',
        },
        charcoal: {
          DEFAULT: '#1A1A1A',
          light: '#4A4A4A',
        },
        stone: '#8C8C8C',
        sand: '#E0E0DC',
      },
      fontSize: {
        'display': ['clamp(3rem, 8vw, 7rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'heading': ['clamp(2rem, 5vw, 4rem)', { lineHeight: '1.1', letterSpacing: '-0.01em' }],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.6s ease-out forwards',
        'slide-in-right': 'slideInRight 0.6s ease-out forwards',
        'scale-in': 'scaleIn 0.5s ease-out forwards',
        'sidebar-in': 'sidebarIn 0.3s ease-out forwards',
        'blob-1': 'blob1 8s ease-in-out infinite',
        'blob-2': 'blob2 10s ease-in-out infinite',
        'blob-3': 'blob3 12s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        sidebarIn: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        blob1: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(20%, -15%) scale(1.1)' },
          '66%': { transform: 'translate(-10%, 20%) scale(0.95)' },
        },
        blob2: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(-20%, 15%) scale(1.05)' },
          '66%': { transform: 'translate(15%, -10%) scale(1.1)' },
        },
        blob3: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(10%, 20%) scale(1.1)' },
          '66%': { transform: 'translate(-15%, -15%) scale(0.95)' },
        },
      },
    },
  },
  plugins: [],
}
