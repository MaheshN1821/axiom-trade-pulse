import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: ["class"],
	content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
	theme: {
		extend: {
			colors: {
				background: "var(--background)",
				backgroundSecondary: "rgb(var(--background-secondary))",
				backgroundTertiary: "rgb(var(--background-tertiary))",

				primaryStroke: "rgb(var(--primary-stroke))",
				secondaryStroke: "rgb(var(--secondary-stroke))",

				textPrimary: "rgb(var(--text-primary))",
				textSecondary: "rgb(var(--text-secondary))",
				textTertiary: "rgb(var(--text-tertiary))",

				primaryBlue: "rgb(var(--primary-color))",
				primaryBlueHover: "rgb(var(--primary-color-hover))",

				primaryGreen: "rgb(var(--primary-green))",
				primaryYellow: "rgb(var(--primary-yellow))",
			},
		},
	},
	plugins: [],
};

export default config;
