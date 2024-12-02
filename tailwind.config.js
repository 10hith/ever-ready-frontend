/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'byteloop': {
          green: '#25D366',  // WhatsApp green
          dark: '#111111',   // Dark background
        }
      },
    },
  },
  plugins: [],
}
