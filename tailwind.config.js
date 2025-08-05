/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}', 
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        // Define your theme colors using CSS vars so Tailwind picks them up
        background: 'var(--color-background)',
        foreground: 'var(--color-foreground)',
        borderGradientStart: 'var(--color-border-gradient-start)',
        borderGradientEnd: 'var(--color-border-gradient-end)',
      },
      backgroundImage: {
        'card-border-gradient': 'linear-gradient(to right, var(--color-border-gradient-start), var(--color-border-gradient-end))',
      },
    },
  },
  plugins: [],
};
