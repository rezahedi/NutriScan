import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'text': {
          DEFAULT: 'var(--text)',
          1: 'var(--text-1)',
          2: 'var(--text-2)',
          3: 'var(--text-3)',
        },
        'background': {
          DEFAULT: 'var(--background)',
          1: 'var(--background-1)',
          2: 'var(--background-2)',
          3: 'var(--background-3)',
        },
        'primary': {
          DEFAULT: 'var(--primary)',
          1: 'var(--primary-1)',
          2: 'var(--primary-2)',
          3: 'var(--primary-3)',
        },
        'secondary': {
          DEFAULT: 'var(--secondary)',
          1: 'var(--secondary-1)',
          2: 'var(--secondary-2)',
          3: 'var(--secondary-3)',
        },
        'accent': {
          DEFAULT: 'var(--accent)',
          1: 'var(--accent-1)',
          2: 'var(--accent-2)',
          3: 'var(--accent-3)',
        },
      },
    },
  },
  plugins: [],
}
export default config
