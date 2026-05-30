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
          DEFAULT: '#050402',
          raised: '#0C0A07',
          elevated: '#141009',
          warm: '#1A150D',
        },
        // Sacred Gold — warm, devotional, luminous
        gold: {
          DEFAULT: '#D4A843',
          dim: '#A68535',
          glow: '#D4A84326',
          pale: '#E8CC7A',
        },
        // Rose Mist — soft, dreamlike, reverb wash
        mist: {
          DEFAULT: '#C9A0B8',
          dim: '#9A7A8E',
          glow: '#C9A0B826',
        },
        // Deep Indigo — night sky, contemplation
        indigo: {
          deep: '#2D1B4E',
          mid: '#4A2D7A',
        },
        // Warm light — for body text on dark
        light: {
          DEFAULT: '#E8DDD0',
          dim: '#A8998A',
          muted: '#6B5F54',
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