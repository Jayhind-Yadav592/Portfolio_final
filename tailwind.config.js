/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#F8FAFC',
          subtle: '#F1F5F9',
          card: '#FFFFFF',
          elevated: '#FFFFFF',
        },
        primary: {
          50: '#EEF2FF',
          100: '#E0E7FF',
          200: '#C7D2FE',
          300: '#A5B4FC',
          400: '#818CF8',
          500: '#6366F1',
          600: '#4F46E5',
          700: '#4338CA',
          800: '#3730A3',
          900: '#312E81',
          DEFAULT: '#4F46E5',
        },
        accent: {
          50: '#F5F3FF',
          100: '#EDE9FE',
          200: '#DDD6FE',
          300: '#C4B5FD',
          400: '#A78BFA',
          500: '#8B5CF6',
          600: '#7C3AED',
          700: '#6D28D9',
          DEFAULT: '#7C3AED',
        },
        surface: {
          border: 'rgba(226, 232, 240, 0.8)',
          'border-light': 'rgba(241, 245, 249, 0.9)',
          'border-hover': 'rgba(199, 210, 254, 0.8)',
          glass: 'rgba(255, 255, 255, 0.75)',
          'glass-elevated': 'rgba(255, 255, 255, 0.9)',
        },
      },
      fontFamily: {
        sans: [
          'Plus Jakarta Sans',
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'sans-serif',
        ],
        mono: [
          'JetBrains Mono',
          'Fira Code',
          'monospace',
        ],
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(15, 23, 42, 0.06), 0 4px 6px -2px rgba(15, 23, 42, 0.03)',
        'card': '0 4px 20px -2px rgba(15, 23, 42, 0.08), 0 2px 8px -1px rgba(15, 23, 42, 0.04)',
        'card-hover': '0 20px 35px -8px rgba(79, 70, 229, 0.16), 0 8px 16px -4px rgba(15, 23, 42, 0.08)',
        'tile': '0 2px 6px -1px rgba(15, 23, 42, 0.05), 0 1px 3px -1px rgba(15, 23, 42, 0.04)',
        'tile-hover': '0 8px 20px -3px rgba(79, 70, 229, 0.14), 0 3px 6px -2px rgba(15, 23, 42, 0.06)',
        'glow': '0 0 25px -5px rgba(99, 102, 241, 0.3)',
        'glow-sm': '0 0 15px -3px rgba(99, 102, 241, 0.25)',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.25rem',
        '3xl': '1.75rem',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-mesh': 'radial-gradient(at 10% 10%, rgba(99, 102, 241, 0.08) 0px, transparent 50%), radial-gradient(at 90% 0%, rgba(139, 92, 246, 0.08) 0px, transparent 50%), radial-gradient(at 50% 50%, rgba(56, 189, 248, 0.04) 0px, transparent 50%)',
        'brand-gradient': 'linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)',
        'subtle-gradient': 'linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)',
      },
      animation: {
        'pulse-subtle': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
}
