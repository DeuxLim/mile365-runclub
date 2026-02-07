/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				brand: {
					black: "#000000",
					white: "#ffffff",
					gray: "#9CA3AF",
				},
			},
			letterSpacing: {
				widest: ".25em",
			},
			fontFamily: {
				sans: ["IBM Plex Sans Condensed", "system-ui", "sans-serif"],
			},
		},
	},
	plugins: [],
};
