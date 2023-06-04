/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        skin: {
          primary: 'var(--primary)',
          secondary: 'var(--secondary)',
        },
      },

      backgroundImage: {
        'hero-image': 'url(/header.png)',
      },
    },
  },
  plugins: [],
};
