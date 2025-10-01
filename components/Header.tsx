"use client";

import { useEffect, useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Nav = styled.nav`
	background: #fff;
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
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
	position: relative;

	@media (max-width: ${({ theme }) => theme.breakpoints.md}) {
		height: 56px;
	}
`;

const Brand = styled(Link)`
	display: flex;
	align-items: center;
	font-weight: 700;
	color: #111827;
	font-size: 1.125rem;
	text-decoration: none;
	z-index: 1001;

	@media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
		font-size: 1rem;
	}
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

	@media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
		width: 28px;
		height: 28px;
	}
`;

// Desktop Navigation Links
const DesktopNavLinks = styled.div`
	display: flex;
	gap: 0.5rem;
	align-items: center;
	margin-left: 2rem;

	@media (max-width: ${({ theme }) => theme.breakpoints.md}) {
		display: none;
	}
`;

const NavLink = styled(Link)<{ $active?: boolean }>`
	color: ${(p) => (p.$active ? "#111827" : "#6b7280")};
	text-decoration: none;
	font-weight: ${(p) => (p.$active ? "600" : "500")};
	padding: 0.5rem 1rem;
	border-radius: 6px;
	transition: all 0.2s;
	text-transform: capitalize;
	font-size: 0.9rem;

	&:hover {
		color: #111827;
		background: #f3f4f6;
	}
`;

// Mobile Navigation
const MobileNav = styled.div<{ $isOpen: boolean }>`
	display: none;

	@media (max-width: ${({ theme }) => theme.breakpoints.md}) {
		display: block;
		position: fixed;
		top: 56px;
		left: 0;
		right: 0;
		bottom: 0;
		background: #fff;
		transform: ${({ $isOpen }) =>
			$isOpen ? "translateX(0)" : "translateX(-100%)"};
		transition: transform 0.3s ease;
		z-index: 999;
		padding: 1rem;
		overflow-y: auto;
	}
`;

const MobileNavLink = styled(Link)<{ $active?: boolean }>`
	display: block;
	color: ${(p) => (p.$active ? "#111827" : "#6b7280")};
	text-decoration: none;
	font-weight: ${(p) => (p.$active ? "600" : "500")};
	padding: 1rem;
	border-radius: 6px;
	transition: all 0.2s;
	text-transform: capitalize;
	font-size: 1rem;
	margin-bottom: 0.5rem;
	border-left: 3px solid ${(p) => (p.$active ? "#2563eb" : "transparent")};

	&:hover {
		color: #111827;
		background: #f3f4f6;
	}
`;

// Desktop Actions (Sign In/Sign Up)
const DesktopActions = styled.div`
	display: flex;
	gap: 0.75rem;
	align-items: center;

	@media (max-width: ${({ theme }) => theme.breakpoints.md}) {
		display: none;
	}
`;

// Mobile Actions (Sign In/Sign Up)
const MobileActions = styled.div`
	display: none;

	@media (max-width: ${({ theme }) => theme.breakpoints.md}) {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
		padding: 1rem 0;
		border-top: 1px solid #f3f4f6;
		margin-top: 1rem;
	}
`;

const ButtonPrimary = styled(Link)`
	background: #2563eb;
	color: white;
	padding: 0.5rem 1rem;
	border-radius: 8px;
	border: none;
	cursor: pointer;
	font-weight: 500;
	transition: background 0.2s;
	text-decoration: none;
	font-size: 0.9rem;
	text-align: center;
	display: block;

	&:hover {
		background: #1d4ed8;
	}

	@media (max-width: ${({ theme }) => theme.breakpoints.md}) {
		padding: 0.75rem;
		font-size: 1rem;
		width: 100%;
	}
`;

const ButtonSecondary = styled(Link)`
	background: white;
	color: #374151;
	padding: 0.5rem 1rem;
	border-radius: 8px;
	border: 1px solid #d1d5db;
	cursor: pointer;
	font-weight: 500;
	transition: all 0.2s;
	text-decoration: none;
	font-size: 0.9rem;
	text-align: center;
	display: block;

	&:hover {
		background: #f9fafb;
		border-color: #9ca3af;
	}

	@media (max-width: ${({ theme }) => theme.breakpoints.md}) {
		padding: 0.75rem;
		font-size: 1rem;
		width: 100%;
	}
`;

const MobileMenuButton = styled.button<{ $isOpen: boolean }>`
	display: none;
	background: none;
	border: none;
	cursor: pointer;
	padding: 0.5rem;
	border-radius: 6px;
	color: #374151;
	z-index: 1001;

	&:hover {
		background: #f3f4f6;
	}

	@media (max-width: ${({ theme }) => theme.breakpoints.md}) {
		display: flex;
		align-items: center;
		justify-content: center;
	}
`;

const Overlay = styled.div<{ $isOpen: boolean }>`
	display: none;

	@media (max-width: ${({ theme }) => theme.breakpoints.md}) {
		display: ${({ $isOpen }) => ($isOpen ? "block" : "none")};
		position: fixed;
		top: 56px;
		left: 0;
		right: 0;
		bottom: 0;
		background: rgba(0, 0, 0, 0.5);
		z-index: 998;
	}
`;

export default function Header() {
	const pathname = usePathname();
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	useEffect(() => {
		import("feather-icons").then((feather) => {
			feather.replace();
		});
	}, []);

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	// Close mobile menu when route changes
	useEffect(() => {
		setIsMobileMenuOpen(false);
	}, [pathname]);

	// Prevent body scroll when mobile menu is open
	useEffect(() => {
		if (isMobileMenuOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "unset";
		}

		return () => {
			document.body.style.overflow = "unset";
		};
	}, [isMobileMenuOpen]);

	return (
		<Nav>
			<Container>
				<Row>
					{/* Left side - Brand and Desktop Navigation */}
					<div style={{ display: "flex", alignItems: "center" }}>
						<Brand href="/">
							<BrandIcon>
								<i data-feather="alert-circle" />
							</BrandIcon>
							CivicConnect
						</Brand>

						<DesktopNavLinks>
							<NavLink href="/" $active={pathname === "/"}>
								Home
							</NavLink>
							<NavLink href="/map" $active={pathname === "/map"}>
								Map
							</NavLink>
							<NavLink href="/report" $active={pathname === "/report"}>
								Report
							</NavLink>
						</DesktopNavLinks>
					</div>

					{/* Right side - Desktop Actions and Mobile Menu Button */}
					<div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
						<DesktopActions>
							<ButtonPrimary href="/login">Sign In</ButtonPrimary>
							<ButtonSecondary href="/register">Sign Up</ButtonSecondary>
						</DesktopActions>

						<MobileMenuButton
							onClick={toggleMobileMenu}
							$isOpen={isMobileMenuOpen}
							aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}>
							<i data-feather={isMobileMenuOpen ? "x" : "menu"} />
						</MobileMenuButton>
					</div>
				</Row>

				{/* Mobile Navigation Menu */}
				<Overlay $isOpen={isMobileMenuOpen} onClick={toggleMobileMenu} />
				<MobileNav $isOpen={isMobileMenuOpen}>
					<MobileNavLink href="/" $active={pathname === "/"}>
						Home
					</MobileNavLink>
					<MobileNavLink href="/map" $active={pathname === "/map"}>
						Map
					</MobileNavLink>
					<MobileNavLink href="/report" $active={pathname === "/report"}>
						Report
					</MobileNavLink>

					<MobileActions>
						<ButtonPrimary href="/login">Sign In</ButtonPrimary>
						<ButtonSecondary href="/register">Sign Up</ButtonSecondary>
					</MobileActions>
				</MobileNav>
			</Container>
		</Nav>
	);
}
