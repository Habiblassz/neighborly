import styled from "styled-components";

const Section = styled.section`
	padding: 3rem 1rem;
	background: white;

	@media (max-width: ${({ theme }) => theme.breakpoints.md}) {
		padding: 2rem 1rem;
	}
`;

const Container = styled.div`
	max-width: ${(p) => p.theme.sizes.maxWidth};
	margin: 0 auto;
	text-align: center;
`;

const Header = styled.div`
	margin-bottom: 2rem;

	@media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
		margin-bottom: 1.5rem;
	}
`;

const Title = styled.h2`
	font-size: 1.5rem;
	font-weight: 700;
	margin-bottom: 0.5rem;
	color: ${({ theme }) => theme.colors.gray900};

	@media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
		font-size: 1.25rem;
	}
`;

const Subtitle = styled.p`
	color: ${({ theme }) => theme.colors.gray700};
	font-size: 1rem;
	max-width: 500px;
	margin: 0 auto;

	@media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
		font-size: 0.9rem;
		padding: 0 0.5rem;
	}
`;

const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 1.5rem;

	@media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		grid-template-columns: repeat(2, 1fr);
		gap: 2rem;
	}

	@media (min-width: ${({ theme }) => theme.breakpoints.md}) {
		grid-template-columns: repeat(4, 1fr);
		gap: 1.5rem;
	}
`;

const StatCard = styled.div`
	padding: 1.5rem 1rem;
	border-radius: 12px;
	transition: transform 0.2s;

	&:hover {
		transform: translateY(-2px);
	}

	@media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
		padding: 1rem 0.5rem;
	}
`;

const StatNumber = styled.div<{ color?: string }>`
	font-size: 2rem;
	font-weight: 700;
	color: ${(p) => p.color || "#2563EB"};
	margin-bottom: 0.5rem;

	@media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
		font-size: 1.75rem;
	}

	@media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
		font-size: 1.5rem;
	}
`;

const StatLabel = styled.div`
	color: ${({ theme }) => theme.colors.gray700};
	font-size: 0.9rem;
	font-weight: 500;

	@media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
		font-size: 0.85rem;
	}
`;

export default function Stats() {
	return (
		<Section>
			<Container>
				<Header>
					<Title>Community Impact</Title>
					<Subtitle>Real results from active citizen participation</Subtitle>
				</Header>

				<Grid>
					<StatCard data-aos="fade-up" data-aos-delay="100">
						<StatNumber color="#2563EB">2,847</StatNumber>
						<StatLabel>Issues Reported</StatLabel>
					</StatCard>
					<StatCard data-aos="fade-up" data-aos-delay="200">
						<StatNumber color="#10B981">1,923</StatNumber>
						<StatLabel>Issues Resolved</StatLabel>
					</StatCard>
					<StatCard data-aos="fade-up" data-aos-delay="300">
						<StatNumber color="#7C3AED">8,456</StatNumber>
						<StatLabel>Community Votes</StatLabel>
					</StatCard>
					<StatCard data-aos="fade-up" data-aos-delay="400">
						<StatNumber color="#F97316">3.2</StatNumber>
						<StatLabel>Avg. Resolution Days</StatLabel>
					</StatCard>
				</Grid>
			</Container>
		</Section>
	);
}
