"use client";

import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import "leaflet/dist/leaflet.css";

import {
	MarkerData,
	LeafletMapInstance,
	LeafletMarkerInstance,
	LeafletEvent,
	LeafletModuleWithDefault,
	FeatherIconsModuleWithDefault,
} from "@/types";

const Section = styled.section`
	padding: 4rem 1rem;
	background: #f3f4f6;
`;

const Container = styled.div`
	max-width: ${(p) => p.theme.sizes.maxWidth};
	margin: 0 auto;
`;

const Card = styled.div`
	background: #fff;
	border-radius: 12px;
	overflow: hidden;
	box-shadow: 0 8px 30px rgba(2, 6, 23, 0.06);
`;

const MapContainer = styled.div`
	width: 100%;
	height: 384px;

	@media (max-width: ${({ theme }) => theme.breakpoints.md}) {
		height: 300px;
	}

	@media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
		height: 250px;
	}
`;

const CardBody = styled.div`
	padding: 1.25rem;
`;

const Badge = styled.span<{ $bg?: string }>`
	display: inline-flex;
	align-items: center;
	gap: 0.5rem;
	padding: 0.25rem 0.6rem;
	border-radius: 9999px;
	font-size: 0.875rem;
	background: ${(p) => p.$bg ?? "#fee2e2"};
`;

const ButtonLink = styled.a`
	display: block;
	width: 100%;
	background: #2563eb;
	color: #fff;
	padding: 0.75rem;
	border-radius: 10px;
	border: none;
	text-align: center;
	text-decoration: none;
	font-weight: 600;
	cursor: pointer;

	&:hover {
		background: #1d4ed8;
	}
`;

// Simple client-side check
function useIsClient() {
	const [isClient, setIsClient] = useState(false);
	useEffect(() => {
		setIsClient(true);
	}, []);
	return isClient;
}

function MapPreviewContent() {
	const mapRef = useRef<HTMLDivElement>(null);
	const isClient = useIsClient();

	useEffect(() => {
		if (!isClient || !mapRef.current) return;

		let map: LeafletMapInstance | null = null;

		const initializeMap = async () => {
			// Fix the import type assertion
			const L = (await import(
				"leaflet"
			)) as unknown as LeafletModuleWithDefault;
			const leaflet = L.default;

			// Fix for default markers
			delete leaflet.Icon.Default.prototype._getIconUrl;
			leaflet.Icon.Default.mergeOptions({
				iconRetinaUrl:
					"https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
				iconUrl:
					"https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
				shadowUrl:
					"https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
			});

			map = leaflet.map(mapRef.current!).setView([40.7128, -74.006], 13);

			leaflet
				.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
					attribution: "&copy; OpenStreetMap contributors",
				})
				.addTo(map);

			const markers: MarkerData[] = [
				{
					lat: 40.7128,
					lng: -74.006,
					type: "pothole",
					title: "Large pothole on Main St",
				},
				{
					lat: 40.7135,
					lng: -74.008,
					type: "streetlight",
					title: "Broken streetlight",
				},
				{
					lat: 40.711,
					lng: -74.005,
					type: "waste",
					title: "Overflowing trash bin",
				},
			];

			markers.forEach((m) => {
				const color =
					m.type === "pothole"
						? "red"
						: m.type === "streetlight"
						? "yellow"
						: "green";
				const iconHtml = `
          <div style="width:24px;height:24px;border-radius:12px;border:2px solid #fff;background:${color};display:flex;align-items:center;justify-content:center">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="white">
              <circle cx="12" cy="12" r="6"></circle>
            </svg>
          </div>
        `;

				const icon = L.default.divIcon({
					className: "custom-marker",
					html: iconHtml,
					iconSize: [24, 24],
				});

				L.default
					.marker([m.lat, m.lng], { icon })
					.addTo(map!)
					.bindPopup(m.title);
			});
		};

		initializeMap();

		return () => {
			if (map) {
				map.remove();
			}
		};
	}, [isClient]);

	if (!isClient) {
		return (
			<div
				style={{
					width: "100%",
					height: "384px",
					background: "#f3f4f6",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					color: "#6b7280",
				}}>
				Loading map...
			</div>
		);
	}

	return <MapContainer ref={mapRef} />;
}

function MapFullContent() {
	const mapWrapper = useRef<HTMLDivElement>(null);
	const isClient = useIsClient();

	useEffect(() => {
		if (!isClient || !mapWrapper.current) return;

		let map: LeafletMapInstance | null = null;

		const initializeMap = async () => {
			const L = (await import(
				"leaflet"
			)) as unknown as LeafletModuleWithDefault;
			const leaflet = L.default;

			// Fix for default markers
			delete leaflet.Icon.Default.prototype._getIconUrl;
			leaflet.Icon.Default.mergeOptions({
				iconRetinaUrl:
					"https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
				iconUrl:
					"https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
				shadowUrl:
					"https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
			});

			map = leaflet.map(mapWrapper.current!).setView([40.7128, -74.006], 13);

			leaflet
				.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png")
				.addTo(map);

			const markers = [
				{
					lat: 40.7128,
					lng: -74.006,
					type: "pothole",
					title: "Large pothole on Main St",
				},
				{
					lat: 40.7135,
					lng: -74.008,
					type: "streetlight",
					title: "Broken streetlight",
				},
				{
					lat: 40.711,
					lng: -74.005,
					type: "waste",
					title: "Overflowing trash bin",
				},
			];

			markers.forEach((m) => {
				const color =
					m.type === "pothole"
						? "#ef4444"
						: m.type === "streetlight"
						? "#f59e0b"
						: "#10b981";
				const icon = L.default.divIcon({
					className: "custom-marker",
					html: `<div style="width:24px;height:24px;border-radius:12px;border:2px solid #fff;background:${color};"></div>`,
					iconSize: [24, 24],
				});
				const marker = L.default.marker([m.lat, m.lng], { icon }).addTo(map!);
				marker.bindPopup(`
          <div style="margin:0.5rem 0;">
            <strong style="display:block">${m.title}</strong>
          </div>
        `);
			});

			// Initialize feather icons
			const feather = (await import(
				"feather-icons"
			)) as unknown as FeatherIconsModuleWithDefault;
			feather.default.replace();
		};

		initializeMap();

		return () => {
			if (map) {
				map.remove();
			}
		};
	}, [isClient]);

	if (!isClient) {
		return <div style={{ width: "100%", height: "100vh" }}>Loading map...</div>;
	}

	return (
		<>
			<aside
				style={{
					width: 320,
					background: "#fff",
					boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
					overflowY: "auto",
					padding: 16,
				}}>
				<h2 style={{ fontSize: 18 }}>Issue Filters</h2>
				<div style={{ marginTop: 12 }}>
					<h3 style={{ marginBottom: 8 }}>Categories</h3>
					<label>
						<input type="checkbox" /> Potholes
					</label>
					<br />
					<label>
						<input type="checkbox" /> Streetlights
					</label>
					<br />
					<label>
						<input type="checkbox" /> Waste Management
					</label>
				</div>

				<div style={{ marginTop: 18 }}>
					<h3>Recent Issues</h3>
					<div
						style={{
							background: "#F9FAFB",
							padding: 12,
							borderRadius: 8,
							marginTop: 8,
						}}>
						<strong>Large pothole on Oak Street</strong>
						<p style={{ color: "#6b7280" }}>Near intersection with Pine Ave</p>
					</div>
					<div
						style={{
							background: "#F9FAFB",
							padding: 12,
							borderRadius: 8,
							marginTop: 8,
						}}>
						<strong>Broken light on Maple Road</strong>
						<p style={{ color: "#6b7280" }}>Light out for 3 days</p>
					</div>
				</div>
			</aside>

			<div style={{ flex: 1 }}>
				<div ref={mapWrapper} style={{ width: "100%", height: "100vh" }} />
			</div>
		</>
	);
}

function ReportMapContent() {
	const mapRef = useRef<HTMLDivElement>(null);
	const isClient = useIsClient();

	useEffect(() => {
		if (!isClient || !mapRef.current) return;

		let map: LeafletMapInstance | null = null;
		let marker: LeafletMarkerInstance | null = null;

		const initializeMap = async () => {
			const L = (await import(
				"leaflet"
			)) as unknown as LeafletModuleWithDefault;
			const leaflet = L.default;

			// Fix for default markers
			delete leaflet.Icon.Default.prototype._getIconUrl;
			leaflet.Icon.Default.mergeOptions({
				iconRetinaUrl:
					"https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
				iconUrl:
					"https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
				shadowUrl:
					"https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
			});

			map = leaflet.map(mapRef.current!).setView([40.7128, -74.006], 15);

			leaflet
				.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png")
				.addTo(map);

			marker = L.default
				.marker([40.7128, -74.006], { draggable: true })
				.addTo(map);

			map.on("click", (e: LeafletEvent) => {
				marker!.setLatLng([e.latlng.lat, e.latlng.lng]);
			});
		};

		initializeMap();

		return () => {
			if (map) {
				map.remove();
			}
		};
	}, [isClient]);

	if (!isClient) {
		return <div style={{ width: "100%", height: "100%" }}>Loading map...</div>;
	}

	return <div style={{ width: "100%", height: "100%" }} ref={mapRef} />;
}

// Main exported components
export default function MapPreview() {
	return (
		<Section>
			<Container>
				<div
					style={{ textAlign: "center", marginBottom: 24 }}
					data-aos="fade-up">
					<h2 style={{ fontSize: "1.5rem" }}>Live Community Issues Map</h2>
					<p style={{ color: "#6b7280" }}>
						See what&apos;s happening in your neighborhood
					</p>
				</div>

				<Card data-aos="fade-up">
					<MapPreviewContent />
					<CardBody>
						<div
							style={{
								display: "flex",
								gap: 8,
								flexWrap: "wrap",
								marginBottom: 12,
							}}>
							<Badge $bg="#fee2e2">
								<span
									style={{
										width: 8,
										height: 8,
										background: "#ef4444",
										borderRadius: 8,
										display: "inline-block",
									}}
								/>
								Potholes
							</Badge>
							<Badge $bg="#fffbeb">
								<span
									style={{
										width: 8,
										height: 8,
										background: "#f59e0b",
										borderRadius: 8,
										display: "inline-block",
									}}
								/>
								Streetlights
							</Badge>
							<Badge $bg="#ecfdf5">
								<span
									style={{
										width: 8,
										height: 8,
										background: "#10b981",
										borderRadius: 8,
										display: "inline-block",
									}}
								/>
								Waste Management
							</Badge>
						</div>
						<ButtonLink href="/map">Explore Full Map</ButtonLink>
					</CardBody>
				</Card>
			</Container>
		</Section>
	);
}

export function MapFull() {
	return (
		<div style={{ display: "flex", height: "100vh" }}>
			<MapFullContent />
		</div>
	);
}

export function ReportMap() {
	return <ReportMapContent />;
}
