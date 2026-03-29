/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c3d66',
          950: '#082f49',
        },
        accent: {
          light: '#e0f2fe',
          DEFAULT: '#0ea5e9',
          dark: '#075985',
        },
        surface: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Sora', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 3s infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'spin-slow': 'spin 8s linear infinite',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'slide-up-delayed': 'slideUp 0.6s ease-out 0.15s forwards',
        'gradient-shift': 'gradientShift 6s ease infinite',
        'diamond-shine': 'diamondShine 3s ease-in-out infinite',
        'pressure-wash': 'pressureWash 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '1' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        gradientShift: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        diamondShine: {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
        pressureWash: {
          '0%': { transform: 'translateX(-100%) translateY(-100%)' },
          '100%': { transform: 'translateX(100%) translateY(100%)' },
        },
      },
      backdropBlur: {
        xs: '2px',
        '2xl': '40px',
        '3xl': '64px',
      },
      boxShadow: {
        'glow-sm': '0 0 10px rgba(14, 165, 233, 0.3)',
        'glow': '0 0 20px rgba(14, 165, 233, 0.4), 0 0 40px rgba(14, 165, 233, 0.1)',
        'glow-lg': '0 0 30px rgba(14, 165, 233, 0.5), 0 0 60px rgba(14, 165, 233, 0.2)',
        'glow-xl': '0 0 40px rgba(14, 165, 233, 0.6), 0 0 80px rgba(14, 165, 233, 0.25), 0 0 120px rgba(14, 165, 233, 0.1)',
        'glow-white': '0 0 20px rgba(255, 255, 255, 0.15), 0 0 40px rgba(255, 255, 255, 0.05)',
        'inner-glow': 'inset 0 0 20px rgba(14, 165, 233, 0.15)',
        'glass': '0 8px 32px rgba(0, 0, 0, 0.12)',
        'glass-lg': '0 12px 48px rgba(0, 0, 0, 0.2)',
      },
    },
  },
  plugins: [],
};
