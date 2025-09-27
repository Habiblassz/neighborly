"use client";

import { useEffect } from "react";
import styled from "styled-components";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Nav = styled.nav`
	background: #fff;
	box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
	position: sticky;
	top: 0;
	z-index: 500000;
`;

const Container = styled.div`
	max-width: ${(p) => p.theme.sizes.maxWidth};
	margin: 0 auto;
	padding: 0 1rem;
`;

const Row = styled.div`
	height: 64px;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const Brand = styled.div`
	display: flex;
	align-items: center;
	font-weight: 700;
	color: #111827;
	font-size: 1.125rem;
`;

const BrandIcon = styled.div`
	width: 32px;
	height: 32px;
	background: #dbeafe;
	color: #2563eb;
	border-radius: 6px;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-right: 0.5rem;
`;

const NavLinks = styled.div`
	display: flex;
	gap: 1rem;
	align-items: center;
`;

const NavLink = styled(Link)<{ $active?: boolean }>`
	color: ${(p) => (p.$active ? "#111827" : "#6b7280")};
	text-decoration: none;
	font-weight: ${(p) => (p.$active ? "600" : "400")};
	padding: 0.5rem 1rem;
	border-radius: 6px;
	transition: all 0.2s;
	text-transform: capitalize;

	&:hover {
		color: #111827;
		background: #f3f4f6;
	}
`;

const Actions = styled.div`
	display: flex;
	gap: 0.5rem;
	align-items: center;
`;

const ButtonPrimary = styled.button`
	background: #2563eb;
	color: white;
	padding: 0.5rem 1rem;
	border-radius: 8px;
	border: none;
	cursor: pointer;
`;

const ButtonSecondary = styled.button`
	background: white;
	color: #374151;
	padding: 0.5rem 1rem;
	border-radius: 8px;
	border: 1px solid #d1d5db;
	cursor: pointer;
`;

export default function Header() {
	const pathname = usePathname();

	useEffect(() => {
		import("feather-icons").then((feather) => {
			feather.replace();
		});
	}, []);

	return (
		<Nav>
			<Container>
				<Row>
					<div style={{ display: "flex", alignItems: "center", gap: 12 }}>
						<Brand>
							<BrandIcon>
								<i data-feather="alert-circle" />
							</BrandIcon>
							CivicConnect
						</Brand>
						<NavLinks>
							<NavLink href="/" $active={pathname === "/"}>
								Home
							</NavLink>
							<NavLink href="/map" $active={pathname === "/map"}>
								Map
							</NavLink>
							<NavLink href="/report" $active={pathname === "/report"}>
								Report
							</NavLink>
						</NavLinks>
					</div>
					<Actions>
						<ButtonPrimary>Sign In</ButtonPrimary>
						<ButtonSecondary>Sign Up</ButtonSecondary>
					</Actions>
				</Row>
			</Container>
		</Nav>
	);
}
