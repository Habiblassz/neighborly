"use client";
import dynamic from "next/dynamic";
import CTA from "@/components/CTA";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import React from "react";

const MapPreview = dynamic(() => import("@/components/MapPreview"), {
	ssr: false,
});

export default function HomePage() {
	return (
		<>
			<Hero />
			<Features />
			<MapPreview />
			<Stats />
			<CTA />
		</>
	);
}
