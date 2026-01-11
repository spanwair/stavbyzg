/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'oxford-navy': 'hsl(var(--oxford-navy-hsl) / <alpha-value>)',
        'cerulean': 'hsl(var(--cerulean-hsl) / <alpha-value>)',
        'honeydew': 'hsl(var(--honeydew-hsl) / <alpha-value>)',
        'frosted-blue': 'hsl(var(--frosted-blue-hsl) / <alpha-value>)',
        'light-bronze': 'hsl(var(--light-bronze-hsl) / <alpha-value>)',
      },
    },
  },
  plugins: [],
}
