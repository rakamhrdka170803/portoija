/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        galaxy: {
          950: '#04020b',
          900: '#0a0518',
          850: '#0e0824',
          800: '#140c32',
          700: '#1e144a',
          600: '#341f7a',
          purple: '#8b5cf6',
          violet: '#a855f7',
          neon: '#c084fc',
          cyan: '#38bdf8',
          blue: '#3b82f6',
          deepBlue: '#1d4ed8',
          accent: '#ec4899',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        heading: ['Outfit', 'Space Grotesk', 'sans-serif'],
      },
      backgroundImage: {
        'galaxy-gradient': 'linear-gradient(135deg, #04020b 0%, #0e0824 50%, #040817 100%)',
        'radial-purple': 'radial-gradient(circle at 50% 30%, rgba(139, 92, 246, 0.18), transparent 70%)',
        'radial-blue': 'radial-gradient(circle at 80% 80%, rgba(59, 130, 246, 0.15), transparent 60%)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { filter: 'drop-shadow(0 0 15px rgba(168, 85, 247, 0.35))' },
          '100%': { filter: 'drop-shadow(0 0 30px rgba(56, 189, 248, 0.6))' },
        }
      }
    },
  },
  plugins: [],
}
