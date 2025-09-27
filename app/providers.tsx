"use client";

import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";
import { GlobalStyle } from "@/styles/global";
import { ReactNode, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export function Providers({ children }: { children: ReactNode }) {
	useEffect(() => {
		AOS.init({
			duration: 800,
			once: true,
			offset: 100,
		});
	}, []);

	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			{children}
		</ThemeProvider>
	);
}
