import type { Config } from "tailwindcss";

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
			fontFamily: {
				sans: ["Archivo", "system-ui", "sans-serif"], // body
				editorial: ["Archivo Narrow", "system-ui", "sans-serif"], // nav, labels, hero
			},
			letterSpacing: {
				nav: "0.14em",
				editorial: "0.18em",
			},
		},
	},
	plugins: [],
} satisfies Config;
