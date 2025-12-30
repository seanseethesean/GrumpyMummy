import forms from '@tailwindcss/forms'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          base: '#C45F4B',
          dark: '#8E3B2F',
          light: '#F8E9E4',
        },
        charcoal: '#1F1B1A',
        cream: '#FFF8F3',
        accent: '#F2B8A0',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['"Space Grotesk"', 'sans-serif'],
      },
      boxShadow: {
        card: '0 10px 25px rgba(196, 95, 75, 0.15)',
      },
      gridTemplateColumns: {
        autoFill: 'repeat(auto-fill, minmax(260px, 1fr))',
      },
    },
  },
  plugins: [forms],
}

