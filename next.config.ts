import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	reactStrictMode: true,
	compiler: {
		// Enables the SWC styled-components transform for better SSR & display names
		styledComponents: true,
	},
};

export default nextConfig;
