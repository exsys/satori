import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        main: {
          "light-bg-1": "#EFEFEF",
          "light-bg-2": "",
          "light-bg-3": "",
          "light-text-1": "#0A0610",
          "light-text-2": "",
          "dark-bg-1": "",
          "dark-bg-2": "",
          "dark-bg-3": "",
          "dark-text-1": "#EFEFEF",
          "dark-text-2": "",
          "primary": "#1D1044",
          "secondary": "#0FB8B8",
          "tertiary": "",
        },
      },
      fontFamily: {
        poppins: [ "Poppins", "sans-serif" ],
        azonix: ["Azonix", "sans-serif"],
      }
    },
  },
  plugins: [],
}
export default config
