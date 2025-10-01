"use client";

import { useEffect } from "react";
import styled from "styled-components";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

const Wrapper = styled.section`
	position: relative;
	padding-top: 3rem;
	padding-bottom: 6rem;
	background: linear-gradient(90deg, #2563eb 0%, #1e40af 100%);
	color: #fff;
	overflow: hidden;

	@media (max-width: ${({ theme }) => theme.breakpoints.md}) {
		padding-top: 2rem;
		padding-bottom: 4rem;
	}
`;

const Container = styled.div`
	max-width: ${(p) => p.theme.sizes.maxWidth};
	margin: 0 auto;
	padding: 2rem 1rem;
	text-align: center;
	position: relative;
	z-index: 2;

	@media (max-width: ${({ theme }) => theme.breakpoints.md}) {
		padding: 1.5rem 1rem;
	}
`;

const H1 = styled.h1`
	font-weight: 800;
	font-size: 2.25rem;
	line-height: 1.2;
	margin: 0 0 1rem 0;
	letter-spacing: -0.025em;

	@media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		font-size: 2.5rem;
	}

	@media (min-width: ${({ theme }) => theme.breakpoints.md}) {
		font-size: 3rem;
	}

	@media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
		font-size: 3.5rem;
	}
`;

const P = styled.p`
	margin-top: 1rem;
	margin-bottom: 1.5rem;
	font-size: 1.125rem;
	max-width: 48rem;
	margin-left: auto;
	margin-right: auto;
	color: rgba(255, 255, 255, 0.95);
	line-height: 1.6;

	@media (max-width: ${({ theme }) => theme.breakpoints.md}) {
		font-size: 1rem;
		padding: 0 0.5rem;
	}

	@media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
		font-size: 0.9rem;
		margin-bottom: 1.25rem;
	}
`;

const ButtonsRow = styled.div`
	margin-top: 2rem;
	display: flex;
	justify-content: center;
	gap: 1rem;
	flex-direction: column;
	align-items: center;

	@media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		flex-direction: row;
	}

	@media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
		width: 100%;
		max-width: 280px;
		margin-left: auto;
		margin-right: auto;
	}
`;

const ButtonLink = styled(Link)`
	display: inline-flex;
	align-items: center;
	justify-content: center;
	padding: 0.75rem 2rem;
	border-radius: 8px;
	font-weight: 600;
	text-decoration: none;
	transition: all 0.2s;
	cursor: pointer;
	min-height: 52px;
	min-width: 44px;
	font-size: 1rem;

	&:hover {
		transform: translateY(-1px);
		box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
	}

	@media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
		width: 100%;
		padding: 0.875rem 1.5rem;
		font-size: 0.9rem;
	}
`;

const PrimaryBtn = styled(ButtonLink)`
	background: #fff;
	color: #2563eb;
	border: none;

	&:hover {
		background: #f8fafc;
	}
`;

const SecondaryBtn = styled(ButtonLink)`
	background: transparent;
	border: 2px solid rgba(255, 255, 255, 0.9);
	color: #fff;

	&:hover {
		background: #fff;
		color: #2563eb;
	}
`;

const SkewedBackground = styled.div`
	position: absolute;
	bottom: 0;
	left: 0;
	right: 0;
	height: 60px;
	background: #fff;
	transform: skewY(2deg);
	transform-origin: bottom right;

	@media (max-width: ${({ theme }) => theme.breakpoints.md}) {
		height: 40px;
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

			<SkewedBackground />
		</Wrapper>
	);
}
