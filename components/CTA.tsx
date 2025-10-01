import styled from "styled-components";

const Section = styled.section`
	padding: 3rem 1rem;
	background: linear-gradient(90deg, #2563eb 0%, #1e40af 100%);
	color: #fff;
	text-align: center;

	@media (max-width: ${({ theme }) => theme.breakpoints.md}) {
		padding: 2rem 1rem;
	}
`;

const Container = styled.div`
	max-width: ${(p) => p.theme.sizes.maxWidth};
	margin: 0 auto;
`;

const Btn = styled.button<{ $filled?: boolean }>`
	padding: 0.75rem 1.5rem;
	border-radius: 8px;
	border: ${(p) => (p.$filled ? "none" : "2px solid #fff")};
	background: ${(p) => (p.$filled ? "#fff" : "transparent")};
	color: ${(p) => (p.$filled ? "#2563EB" : "#fff")};
	font-weight: 600;
	cursor: pointer;
	transition: all 0.2s;
	min-height: 44px;
	min-width: 44px;

	&:hover {
		transform: translateY(-1px);
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
	}

	@media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
		width: 100%;
		margin: 0.25rem 0;
	}
`;

const ButtonContainer = styled.div`
	display: flex;
	justify-content: center;
	gap: 0.75rem;

	@media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
		flex-direction: column;
		gap: 0.5rem;
		width: 100%;
		max-width: 280px;
		margin: 0 auto;
	}
`;

const Title = styled.h2`
	font-size: 1.5rem;
	font-weight: 700;
	margin-bottom: 0.5rem;

	@media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
		font-size: 1.25rem;
	}
`;

const Description = styled.p`
	max-width: 640px;
	margin: 0 auto 1.5rem;
	line-height: 1.6;
	opacity: 0.95;

	@media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
		font-size: 0.9rem;
		margin-bottom: 1.25rem;
	}
`;

export default function CTA() {
	return (
		<Section>
			<Container data-aos="fade-up">
				<Title>Ready to Make a Difference?</Title>
				<Description>
					Join thousands of neighbors who are actively improving their
					communities
				</Description>
				<ButtonContainer>
					<Btn $filled>Get Started</Btn>
					<Btn>Learn More</Btn>
				</ButtonContainer>
			</Container>
		</Section>
	);
}
