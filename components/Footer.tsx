"use client";

import { useEffect } from "react";
import styled from "styled-components";

const Foot = styled.footer`
	background: #111827;
	color: #fff;
	padding: 3rem 1rem;
`;

const Container = styled.div`
	max-width: ${(p) => p.theme.sizes.maxWidth};
	margin: 0 auto;
	display: grid;
	grid-template-columns: repeat(1, 1fr);
	gap: 1rem;
	@media (min-width: 768px) {
		grid-template-columns: repeat(4, 1fr);
	}
`;

const ColumnTitle = styled.h4`
	font-weight: 700;
	margin-bottom: 0.5rem;
`;

export default function Footer() {
	useEffect(() => {
		import("feather-icons").then((f) => f.replace());
	}, []);

	return (
		<Foot>
			<Container>
				<div>
					<div
						style={{
							display: "flex",
							alignItems: "center",
							gap: 8,
							marginBottom: 8,
						}}>
						<i data-feather="alert-circle" />
						<div style={{ fontWeight: 700, fontSize: 18 }}>CivicConnect</div>
					</div>
					<p style={{ color: "#9CA3AF" }}>
						Empowering communities through collaborative issue reporting and
						resolution.
					</p>
				</div>

				<div>
					<ColumnTitle>Quick Links</ColumnTitle>
					<ul style={{ color: "#9CA3AF", listStyle: "none", padding: 0 }}>
						<li>Report Issue</li>
						<li>Browse Map</li>
						<li>Community</li>
						<li>Dashboard</li>
					</ul>
				</div>

				<div>
					<ColumnTitle>Support</ColumnTitle>
					<ul style={{ color: "#9CA3AF", listStyle: "none", padding: 0 }}>
						<li>Help Center</li>
						<li>Contact Us</li>
						<li>Privacy Policy</li>
						<li>Terms of Service</li>
					</ul>
				</div>

				<div>
					<ColumnTitle>Stay Connected</ColumnTitle>
					<div style={{ display: "flex", gap: 12 }}>
						<a>
							<i data-feather="facebook" />
						</a>
						<a>
							<i data-feather="twitter" />
						</a>
						<a>
							<i data-feather="instagram" />
						</a>
						<a>
							<i data-feather="linkedin" />
						</a>
					</div>
				</div>
			</Container>

			<div
				style={{
					borderTop: "1px solid rgba(255,255,255,0.08)",
					marginTop: 24,
					paddingTop: 16,
					textAlign: "center",
					color: "#9CA3AF",
				}}>
				<p>© 2025 CivicConnect. All rights reserved.</p>
			</div>
		</Foot>
	);
}
