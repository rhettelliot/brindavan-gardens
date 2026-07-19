import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Brindavan Gardens — sacred, shoegaze, golden haze
        void: {
          DEFAULT: '#020203',
          raised: '#0A0A0B',
          elevated: '#121214',
          warm: '#1A1A1C',
        },
        // Solar Gold — vibrant, energetic, luminous
        gold: {
          DEFAULT: '#D4A843',
          dim: '#A8862F',
          glow: 'rgba(212, 168, 67, 0.15)',
          pale: '#E6C87D',
        },
        // Twilight Sapphire — deep, mystical, ethereal
        blue: {
          DEFAULT: '#3E7B99',
          dim: '#2B576C',
          glow: 'rgba(62, 123, 153, 0.15)',
          pale: '#7FAEC5',
        },
        // Light — for body text on dark
        light: {
          DEFAULT: '#EDE6DA',
          dim: '#ADA495',
          muted: '#8B7D70',
        },
        edge: {
          faint: 'rgba(212,168,67,0.06)',
          subtle: 'rgba(212,168,67,0.12)',
          medium: 'rgba(212,168,67,0.2)',
          bright: 'rgba(212,168,67,0.4)',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      keyframes: {
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        'slide-up': {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'breathe': {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.02)' },
        },
        'dissolve': {
          '0%': { opacity: '0', filter: 'blur(8px)' },
          '100%': { opacity: '1', filter: 'blur(0)' },
        },
        'shimmer': {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
      },
      animation: {
        'fade-in': 'fade-in 1.2s ease-out forwards',
        'slide-up': 'slide-up 0.8s ease-out forwards',
        breathe: 'breathe 8s ease-in-out infinite',
        dissolve: 'dissolve 0.8s ease-out forwards',
        shimmer: 'shimmer 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

export default config