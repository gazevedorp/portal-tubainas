/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta "Tubaínas e Afins"
        primary: {
          DEFAULT: '#8FD14F', // Verde-limão suave
          light: '#a8dc71',
          dark: '#76b83d',
        },
        secondary: {
          DEFAULT: '#F4A22C', // Laranja dourado
          light: '#f7b555',
          dark: '#d18a1e',
        },
        accent: {
          DEFAULT: '#E85B4A', // Coral quente (realce/ação)
          light: '#ed7a6d',
          dark: '#d13d2a',
        },
        complement: {
          DEFAULT: '#7B5DE3', // Roxo-azulado
          light: '#9479e8',
          dark: '#6345d0',
        },
        neutral: {
          light: '#F6F6F6', // Off-white
          DEFAULT: '#6B7280', // Cinza médio
          dark: '#1F1F1F', // Cinza antracito
        },
        // Manter amber para compatibilidade
        amber: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Georgia', 'Times New Roman', 'serif'],
      },
      transitionDuration: {
        '600': '600ms',
      },
      borderWidth: {
        '3': '3px',
      },
    },
  },
  plugins: [],
  safelist: [
    'border-b-3',
    'scrollbar-none',
  ],
}
