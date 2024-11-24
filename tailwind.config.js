/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      backdropBlur: {
        xs: '2px',
        sm: '4px',
        DEFAULT: '8px',
        md: '12px',
        lg: '16px',
      },
      colors: {
        'custom-yellow': '#DCCC3D',
        'dark-blue': '#0C1E28',
        white: '#FFFFFF',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      fontSize: {
        '36px': ['36px', '54px'],
        '128px': ['128px', '192px'],
      },
      borderRadius: {
        '20px': '20px',
        '40px': '40px',
      },
      boxShadow: {
        custom: '10px 4px 4px rgba(0, 0, 0, 0.25)',
      },
      textShadow: {
        custom: '0px 4px 4px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [
    require('tailwindcss-textshadow'),
  ],
};
