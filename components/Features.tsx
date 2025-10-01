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
`;

const Title = styled.h2`
	text-align: center;
	font-size: 1.5rem;
	font-weight: 700;
	margin-bottom: 0.5rem;
	color: ${({ theme }) => theme.colors.gray900};

	@media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
		font-size: 1.25rem;
	}
`;

const Subtitle = styled.p`
	text-align: center;
	color: ${({ theme }) => theme.colors.gray700};
	margin-bottom: 2rem;
	font-size: 1rem;
	max-width: 600px;
	margin-left: auto;
	margin-right: auto;

	@media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
		font-size: 0.9rem;
		margin-bottom: 1.5rem;
		padding: 0 0.5rem;
	}
`;

const Grid = styled.div`
	display: grid;
	gap: 1.5rem;
	grid-template-columns: 1fr;

	@media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media (min-width: ${({ theme }) => theme.breakpoints.md}) {
		grid-template-columns: repeat(3, 1fr);
		gap: 2rem;
	}
`;

const Card = styled.div`
	text-align: center;
	padding: 1.5rem 1rem;
	border-radius: 12px;
	transition: transform 0.2s, box-shadow 0.2s;

	&:hover {
		transform: translateY(-2px);
		box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
	}

	@media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
		padding: 1rem 0.5rem;
	}
`;

const IconCircle = styled.div`
	background: #dbeafe;
	width: 80px;
	height: 80px;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 0 auto;
	transition: transform 0.2s;

	${Card}:hover & {
		transform: scale(1.05);
	}

	@media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
		width: 64px;
		height: 64px;
	}
`;

const CardTitle = styled.h3`
	margin-top: 1rem;
	margin-bottom: 0.75rem;
	font-size: 1.125rem;
	font-weight: 600;
	color: ${({ theme }) => theme.colors.gray900};

	@media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
		font-size: 1rem;
		margin-top: 0.75rem;
	}
`;

const CardDescription = styled.p`
	color: ${({ theme }) => theme.colors.gray700};
	line-height: 1.6;
	font-size: 0.9rem;

	@media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
		font-size: 0.85rem;
	}
`;

export default function Features() {
	return (
		<Section>
			<Container>
				<div data-aos="fade-up">
					<Title>How CivicConnect Works</Title>
					<Subtitle>Simple steps to make your community better</Subtitle>
				</div>

				<Grid>
					<Card data-aos="fade-up" data-aos-delay="100">
						<IconCircle>
							<i data-feather="map-pin" />
						</IconCircle>
						<CardTitle>Report Issues</CardTitle>
						<CardDescription>
							Pinpoint problems on our interactive map with photos and
							descriptions
						</CardDescription>
					</Card>

					<Card data-aos="fade-up" data-aos-delay="200">
						<IconCircle>
							<i data-feather="thumbs-up" />
						</IconCircle>
						<CardTitle>Community Voting</CardTitle>
						<CardDescription>
							Upvote issues to prioritize what matters most to your neighborhood
						</CardDescription>
					</Card>

					<Card data-aos="fade-up" data-aos-delay="300">
						<IconCircle>
							<i data-feather="check-circle" />
						</IconCircle>
						<CardTitle>Track Progress</CardTitle>
						<CardDescription>
							Follow issue resolution from reported to in-progress to fixed
						</CardDescription>
					</Card>
				</Grid>
			</Container>
		</Section>
	);
}
