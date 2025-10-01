const theme = {
	colors: {
		blue600: "#2563EB",
		blue800: "#1E40AF",
		white: "#ffffff",
		gray50: "#F9FAFB",
		gray100: "#F3F4F6",
		gray300: "#D1D5DB",
		gray700: "#374151",
		gray900: "#111827",
	},
	sizes: {
		maxWidth: "1120px",
	},
	// Add breakpoints for responsive design
	breakpoints: {
		xs: "320px",
		sm: "640px",
		md: "768px",
		lg: "1024px",
		xl: "1280px",
		xxl: "1536px",
	},
	// Add spacing scale
	spacing: {
		xs: "0.5rem",
		sm: "1rem",
		md: "1.5rem",
		lg: "2rem",
		xl: "3rem",
		xxl: "4rem",
	},
};

export type Theme = typeof theme;
export default theme;
