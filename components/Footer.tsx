"use client";

import { useEffect } from "react";
import styled from "styled-components";

const Foot = styled.footer`
	background: #111827;
	color: #fff;
	padding: 2rem 1rem;

	@media (max-width: ${({ theme }) => theme.breakpoints.md}) {
		padding: 1.5rem 1rem;
	}
`;

const Container = styled.div`
	max-width: ${(p) => p.theme.sizes.maxWidth};
	margin: 0 auto;
	display: grid;
	grid-template-columns: 1fr;
	gap: 2rem;

	@media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media (min-width: ${({ theme }) => theme.breakpoints.md}) {
		grid-template-columns: repeat(4, 1fr);
		gap: 1.5rem;
	}
`;

const BrandSection = styled.div`
	@media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		grid-column: 1 / -1;
	}

	@media (min-width: ${({ theme }) => theme.breakpoints.md}) {
		grid-column: auto;
	}
`;

const Brand = styled.div`
	display: flex;
	align-items: center;
	gap: 0.5rem;
	margin-bottom: 0.75rem;
	font-weight: 700;
	font-size: 1.125rem;
`;

const BrandDescription = styled.p`
	color: #9ca3af;
	line-height: 1.6;
	font-size: 0.9rem;
`;

const Column = styled.div`
	@media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
		text-align: center;
	}
`;

const ColumnTitle = styled.h4`
	font-weight: 600;
	margin-bottom: 0.75rem;
	font-size: 1rem;
`;

const LinkList = styled.ul`
	color: #9ca3af;
	list-style: none;
	padding: 0;
	margin: 0;
	font-size: 0.9rem;
`;

const LinkItem = styled.li`
	margin-bottom: 0.5rem;
	cursor: pointer;
	transition: color 0.2s;

	&:hover {
		color: #fff;
	}
`;

const SocialLinks = styled.div`
	display: flex;
	gap: 1rem;

	@media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
		justify-content: center;
	}
`;

const SocialLink = styled.a`
	color: #9ca3af;
	transition: color 0.2s;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 36px;
	height: 36px;
	border-radius: 6px;
	background: rgba(255, 255, 255, 0.05);

	&:hover {
		color: #fff;
		background: rgba(255, 255, 255, 0.1);
	}
`;

const Copyright = styled.div`
	border-top: 1px solid rgba(255, 255, 255, 0.08);
	margin-top: 2rem;
	padding-top: 1rem;
	text-align: center;
	color: #9ca3af;
	font-size: 0.85rem;

	@media (max-width: ${({ theme }) => theme.breakpoints.md}) {
		margin-top: 1.5rem;
		padding-top: 0.75rem;
	}
`;

export default function Footer() {
	useEffect(() => {
		import("feather-icons").then((f) => f.replace());
	}, []);

	return (
		<Foot>
			<Container>
				<BrandSection>
					<Brand>
						<i data-feather="alert-circle" />
						<div>CivicConnect</div>
					</Brand>
					<BrandDescription>
						Empowering communities through collaborative issue reporting and
						resolution.
					</BrandDescription>
				</BrandSection>

				<Column>
					<ColumnTitle>Quick Links</ColumnTitle>
					<LinkList>
						<LinkItem>Report Issue</LinkItem>
						<LinkItem>Browse Map</LinkItem>
						<LinkItem>Community</LinkItem>
						<LinkItem>Dashboard</LinkItem>
					</LinkList>
				</Column>

				<Column>
					<ColumnTitle>Support</ColumnTitle>
					<LinkList>
						<LinkItem>Help Center</LinkItem>
						<LinkItem>Contact Us</LinkItem>
						<LinkItem>Privacy Policy</LinkItem>
						<LinkItem>Terms of Service</LinkItem>
					</LinkList>
				</Column>

				<Column>
					<ColumnTitle>Stay Connected</ColumnTitle>
					<SocialLinks>
						<SocialLink>
							<i data-feather="facebook" />
						</SocialLink>
						<SocialLink>
							<i data-feather="twitter" />
						</SocialLink>
						<SocialLink>
							<i data-feather="instagram" />
						</SocialLink>
						<SocialLink>
							<i data-feather="linkedin" />
						</SocialLink>
					</SocialLinks>
				</Column>
			</Container>

			<Copyright>
				<p>© 2025 CivicConnect. All rights reserved.</p>
			</Copyright>
		</Foot>
	);
}
