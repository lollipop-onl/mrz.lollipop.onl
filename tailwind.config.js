/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./{app,components}/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				body: ["IBM Plex Sans JP", "sans-serif"],
			},
		},
	},
	plugins: [],
};
