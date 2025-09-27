"use client";
import dynamic from "next/dynamic";

const MapFull = dynamic(
	() => import("@/components/MapPreview").then((m) => m.MapFull),
	{
		ssr: false,
		loading: () => (
			<div
				style={{
					display: "flex",
					height: "100vh",
					alignItems: "center",
					justifyContent: "center",
				}}>
				Loading map...
			</div>
		),
	}
);

export default function MapPage() {
	return <MapFull />;
}
