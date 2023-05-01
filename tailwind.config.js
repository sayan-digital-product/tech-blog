/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  important: true,
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './core/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      error: '#ff0000',
      buttonColor: '#AD974F',
      cardBackground: '#eaece6',
      teal: {
        50: '#f0fdfa',
        100: '#ccfbf1',
        200: '#99f6e4',
        300: '#6ee7b7',
        400: '#2dd4bf',
        500: '#14b8a6',
        600: '#0d9488',
        700: '#0f766e',
        800: '#115e59',
        900: '#134e4a',
        950: '#042f2e'
      },
      dark: {
        50: '#f0fdfa',
        100: '#ccfbf1',
        200: '#99f6e4',
        300: '#6ee7b7',
        400: '#2dd4bf',
        500: '#14b8a6',
        600: '#0d9488',
        700: '#0f766e',
        800: '#115e59',
        900: '#134e4a',
        950: '#042f2e'
      },
      pegasus:{
        50: '#e8eae3',
        100: '#cacbc5',
        200: '#acaea8',
        300: '#90918c',
        400: '#747571',
        500: '#595a57',
        600: '#40413f',
        700: '#292927',
        800: '#131312',
        900: '#030303'
      },
      gremlin:{
        50: '#ad974f',
        100: '#968344',
        200: '#7f6f38',
        300: '#6a5c2e',
        400: '#554923',
        500: '#413719',
        600: '#2d2610',
        700: '#1b1707',
        800: '#0b0802',
        900: '#010100'
      }
    }
  },
  plugins: [
    'tailwindcss'
  ],
}
