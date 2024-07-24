/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			spacing: {
				"144": "40rem",
				"188": "48rem",
				
			},
			width: {
				"1/3.5": "30%"
			},
			height: {
				"1/3.5": "30%"
			},
			rotate: {
				"360": "360deg"
			},
			backgroundImage : {
				"pc" : "url('../../assets/headerPhone.jpg')",
				"tablet" : "url('../../assets/headerTablet.jpg')",
				'phone' : "url('../../assets/headerPhone.jpg')"

			}
			
		},
	},
	plugins: [],
}
