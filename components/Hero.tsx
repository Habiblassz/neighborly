"use client";

import { useEffect } from "react";
import styled from "styled-components";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

const Wrapper = styled.section`
	position: relative;
	padding-top: 4rem;
	padding-bottom: 8rem;
	background: linear-gradient(90deg, #2563eb 0%, #1e40af 100%);
	color: #fff;
`;

const Container = styled.div`
	max-width: ${(p) => p.theme.sizes.maxWidth};
	margin: 0 auto;
	padding: 2.5rem 1rem;
	text-align: center;
`;

const H1 = styled.h1`
	font-weight: 800;
	font-size: 2.25rem;
	line-height: 1.1;
	margin: 0;
	@media (min-width: 768px) {
		font-size: 3.5rem;
	}
`;

const P = styled.p`
	margin-top: 1.5rem;
	font-size: 1.125rem;
	max-width: 48rem;
	margin-left: auto;
	margin-right: auto;
	color: rgba(255, 255, 255, 0.95);
`;

const ButtonsRow = styled.div`
	margin-top: 2.25rem;
	display: flex;
	justify-content: center;
	gap: 1rem;
	flex-direction: column;
	@media (min-width: 640px) {
		flex-direction: row;
	}
`;

const ButtonLink = styled(Link)`
	display: inline-block;
	padding: 0.75rem 2rem;
	border-radius: 12px;
	font-weight: 700;
	text-decoration: none;
	transition: all 0.2s;
	cursor: pointer;
`;

const PrimaryBtn = styled(ButtonLink)`
	background: #fff;
	color: #2563eb;
	border: none;

	&:hover {
		background: #f3f4f6;
		transform: translateY(-1px);
	}
`;

const SecondaryBtn = styled(ButtonLink)`
	background: transparent;
	border: 2px solid rgba(255, 255, 255, 0.9);
	color: #fff;

	&:hover {
		background: #fff;
		color: #2563eb;
		transform: translateY(-1px);
	}
`;

export default function Hero() {
	useEffect(() => {
		AOS.init({
			duration: 800,
			once: true,
		});

		import("feather-icons").then((feather) => {
			feather.replace();
		});
	}, []);

	return (
		<Wrapper>
			<Container data-aos="fade-up">
				<H1>Report. Track. Resolve.</H1>
				<P>
					Join your community in making your neighborhood a better place to
					live. Report issues, track progress, and see real change happen.
				</P>
				<ButtonsRow>
					<PrimaryBtn href="/report">Report an Issue</PrimaryBtn>
					<SecondaryBtn href="/map">Explore Map</SecondaryBtn>
				</ButtonsRow>
			</Container>

			<div
				style={{
					position: "absolute",
					bottom: 0,
					left: 0,
					right: 0,
					height: 48,
					background: "#fff",
					transform: "skewY(2deg)",
				}}
			/>
		</Wrapper>
	);
}
