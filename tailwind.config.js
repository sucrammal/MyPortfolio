module.exports = {
	content: [
		"./src/**/*.{js,jsx,ts,tsx}", // JavaScript, TypeScript
	],
	theme: {
		extend: {
			colors: {
				teal: {
					300: "#78d296", // Light green/teal
					500: "#83e09f", // Neutral green - main brand color
					700: "#0e7d69", // Dark green - hover states and emphasis
				},
			},
		},
	},
	plugins: [],
};
