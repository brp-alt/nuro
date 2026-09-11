import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        space: {
          50: '#f8f6ff',
          100: '#f0ebff',
          200: '#e6d9ff',
          300: '#d9bfff',
          400: '#c99eff',
          500: '#b366ff',
          600: '#8f3bff',
          700: '#6b1fbf',
          800: '#4a1080',
          900: '#2d0652',
        },
        nebula: {
          blue: '#00d9ff',
          purple: '#b366ff',
          pink: '#ff006e',
        },
      },
      backgroundImage: {
        'gradient-space': 'radial-gradient(ellipse at bottom, #1B2735 0%, #090A0F 100%)',
        'gradient-nebula': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(185, 102, 255, 0.3)',
        'glow-lg': '0 0 40px rgba(0, 217, 255, 0.2)',
      },
    },
  },
  plugins: [],
};

export default config;
