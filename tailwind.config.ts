import type { Config } from 'tailwindcss'

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}', './node_modules/preline/preline.js'],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms'),  require('preline/plugin')],
} satisfies Config                 

