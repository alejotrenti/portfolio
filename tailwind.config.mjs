/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		fontFamily:{
			sans:['Josefin Sans, sans-serif']
		},
		extend: {
			animation: {
				'loop-scroll': 'loop-scroll 30s linear infinite',
			  },
			  keyframes: {
				'loop-scroll': {
				  from: { transform: 'translateX(0)' },
				  to: { transform: 'translateX(-100%)' },
				}
			},
		},
	},
	plugins: [
		require("daisyui"),
		require('tailwindcss-animated'),
	],
	
	daisyui: {
		themes: [],
	  },
	

	"editor.quickSuggestions": {
		"strings": "on"
	  }
}


