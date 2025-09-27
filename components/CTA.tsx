import styled from "styled-components";

const Section = styled.section`
	padding: 4rem 1rem;
	background: linear-gradient(90deg, #2563eb 0%, #1e40af 100%);
	color: #fff;
	text-align: center;
`;

const Container = styled.div`
	max-width: ${(p) => p.theme.sizes.maxWidth};
	margin: 0 auto;
`;

const Btn = styled.button<{ $filled?: boolean }>`
	padding: 0.75rem 1.5rem;
	border-radius: 12px;
	border: ${(p) => (p.$filled ? "none" : "2px solid #fff")};
	background: ${(p) => (p.$filled ? "#fff" : "transparent")};
	color: ${(p) => (p.$filled ? "#2563EB" : "#fff")};
	font-weight: 700;
	margin: 0 8px;
	cursor: pointer;
`;

export default function CTA() {
	return (
		<Section>
			<Container data-aos="fade-up">
				<h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 8 }}>
					Ready to Make a Difference?
				</h2>
				<p style={{ maxWidth: 640, margin: "0 auto 1rem" }}>
					Join thousands of neighbors who are actively improving their
					communities
				</p>
				<div style={{ display: "flex", justifyContent: "center", gap: 8 }}>
					<Btn $filled>Get Started</Btn>
					<Btn>Learn More</Btn>
				</div>
			</Container>
		</Section>
	);
}
