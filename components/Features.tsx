import styled from "styled-components";

const Section = styled.section`
	padding: 4rem 1rem;
	background: white;
`;

const Container = styled.div`
	max-width: ${(p) => p.theme.sizes.maxWidth};
	margin: 0 auto;
`;

const Title = styled.h2`
	text-align: center;
	font-size: 1.5rem;
	margin-bottom: 0.5rem;
`;

const Subtitle = styled.p`
	text-align: center;
	color: #6b7280;
	margin-bottom: 2rem;
`;

const Grid = styled.div`
	display: grid;
	gap: 1.5rem;
	grid-template-columns: repeat(1, 1fr);
	@media (min-width: 768px) {
		grid-template-columns: repeat(3, 1fr);
	}
`;

const Card = styled.div`
	text-align: center;
	padding: 1rem;
`;

const IconCircle = styled.div`
	background: #dbeafe;
	width: 64px;
	height: 64px;
	border-radius: 9999px;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 0 auto;
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
						<h3 style={{ marginTop: 16 }}>Report Issues</h3>
						<p style={{ color: "#6b7280" }}>
							Pinpoint problems on our interactive map with photos and
							descriptions
						</p>
					</Card>

					<Card data-aos="fade-up" data-aos-delay="200">
						<IconCircle>
							<i data-feather="thumbs-up" />
						</IconCircle>
						<h3 style={{ marginTop: 16 }}>Community Voting</h3>
						<p style={{ color: "#6b7280" }}>
							Upvote issues to prioritize what matters most to your neighborhood
						</p>
					</Card>

					<Card data-aos="fade-up" data-aos-delay="300">
						<IconCircle>
							<i data-feather="check-circle" />
						</IconCircle>
						<h3 style={{ marginTop: 16 }}>Track Progress</h3>
						<p style={{ color: "#6b7280" }}>
							Follow issue resolution from reported to in-progress to fixed
						</p>
					</Card>
				</Grid>
			</Container>
		</Section>
	);
}
