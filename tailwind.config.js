/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      color: {
         orange: '#FF9F3E',
         hijau: '#47B096',
         hijau2:'#589687',
         hitam: '#1E1E1E',
      },
    },
  },
  plugins: [],
}
