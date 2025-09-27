import type { ReactNode } from "react";
import { Providers } from "./providers";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "aos/dist/aos";

export const metadata = {
	title: "Neighbourly - Community Issue Reporting",
	description: "Report. Track. Resolve.",
	icon: "",
};

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="en">
			<body>
				<Providers>
					<Header />
					<main>{children}</main>
					<Footer />
				</Providers>
			</body>
		</html>
	);
}
