/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			spacing: {
				"144": "40rem",
				"188": "48rem",
				"1/3": "20%"
			},
		},
	},
	plugins: [],
}
