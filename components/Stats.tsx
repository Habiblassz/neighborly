import styled from "styled-components";

const Section = styled.section`
	padding: 4rem 1rem;
	background: white;
`;

const Container = styled.div`
	max-width: ${(p) => p.theme.sizes.maxWidth};
	margin: 0 auto;
	text-align: center;
`;

const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(1, 1fr);
	gap: 1rem;
	@media (min-width: 768px) {
		grid-template-columns: repeat(4, 1fr);
	}
`;

const StatCard = styled.div`
	padding: 1rem;
`;

export default function Stats() {
	return (
		<Section>
			<Container>
				<div style={{ marginBottom: 24 }}>
					<h2>Community Impact</h2>
					<p style={{ color: "#6b7280" }}>
						Real results from active citizen participation
					</p>
				</div>

				<Grid>
					<StatCard data-aos="fade-up" data-aos-delay="100">
						<div style={{ fontSize: 32, color: "#2563EB", fontWeight: 700 }}>
							2,847
						</div>
						<div style={{ color: "#6b7280" }}>Issues Reported</div>
					</StatCard>
					<StatCard data-aos="fade-up" data-aos-delay="200">
						<div style={{ fontSize: 32, color: "#10B981", fontWeight: 700 }}>
							1,923
						</div>
						<div style={{ color: "#6b7280" }}>Issues Resolved</div>
					</StatCard>
					<StatCard data-aos="fade-up" data-aos-delay="300">
						<div style={{ fontSize: 32, color: "#7C3AED", fontWeight: 700 }}>
							8,456
						</div>
						<div style={{ color: "#6b7280" }}>Community Votes</div>
					</StatCard>
					<StatCard data-aos="fade-up" data-aos-delay="400">
						<div style={{ fontSize: 32, color: "#F97316", fontWeight: 700 }}>
							3.2
						</div>
						<div style={{ color: "#6b7280" }}>Avg. Resolution Days</div>
					</StatCard>
				</Grid>
			</Container>
		</Section>
	);
}
