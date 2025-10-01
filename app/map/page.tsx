"use client";
import dynamic from "next/dynamic";
import styled from "styled-components";

const MapContainer = styled.div`
	height: 100vh;
	width: 100%;

	/* Adjust for mobile browsers with address bar */
	@media (max-width: 768px) and (orientation: portrait) {
		height: calc(100vh - 56px);
	}

	@media (max-width: 768px) and (orientation: landscape) {
		height: 100vh;
	}
`;

const LoadingContainer = styled.div`
	display: flex;
	height: 100vh;
	align-items: center;
	justify-content: center;
	font-size: 1.125rem;

	@media (max-width: ${({ theme }) => theme.breakpoints.md}) {
		font-size: 1rem;
	}
`;

const MapFull = dynamic(
	() => import("@/components/MapPreview").then((m) => m.MapFull),
	{
		ssr: false,
		loading: () => <LoadingContainer>Loading map...</LoadingContainer>,
	}
);

export default function MapPage() {
	return (
		<MapContainer>
			<MapFull />
		</MapContainer>
	);
}
