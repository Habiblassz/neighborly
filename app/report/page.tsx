"use client";
import styled from "styled-components";
import dynamic from "next/dynamic";

const MapForReport = dynamic(
	() => import("@/components/MapPreview").then((m) => m.ReportMap),
	{ ssr: false }
);

const Container = styled.div`
	max-width: 56rem;
	margin: 0 auto;
	padding: 1rem;
	min-height: calc(100vh - 120px);

	@media (max-width: ${({ theme }) => theme.breakpoints.md}) {
		padding: 0.5rem;
		margin: 0;
	}
`;

const Card = styled.div`
	background: #fff;
	border-radius: 12px;
	box-shadow: 0 6px 20px rgba(16, 24, 40, 0.08);
	padding: 1.5rem;
	margin: 1rem 0;

	@media (max-width: ${({ theme }) => theme.breakpoints.md}) {
		padding: 1rem;
		margin: 0.5rem 0;
		border-radius: 8px;
		box-shadow: 0 2px 8px rgba(16, 24, 40, 0.08);
	}
`;

const FormGroup = styled.div`
	margin-bottom: 1.5rem;

	@media (max-width: ${({ theme }) => theme.breakpoints.md}) {
		margin-bottom: 1rem;
	}
`;

const Label = styled.label`
	display: block;
	margin-bottom: 0.5rem;
	font-weight: 500;
	color: ${({ theme }) => theme.colors.gray700};
`;

const Input = styled.input`
	width: 100%;
	padding: 0.75rem;
	border-radius: 8px;
	border: 1px solid ${({ theme }) => theme.colors.gray300};
	font-size: 1rem;

	@media (max-width: ${({ theme }) => theme.breakpoints.md}) {
		padding: 1rem;
		font-size: 16px; /* Prevent zoom on iOS */
	}
`;

const TextArea = styled.textarea`
	width: 100%;
	padding: 0.75rem;
	border-radius: 8px;
	border: 1px solid ${({ theme }) => theme.colors.gray300};
	font-size: 1rem;
	resize: vertical;
	min-height: 120px;

	@media (max-width: ${({ theme }) => theme.breakpoints.md}) {
		padding: 1rem;
		font-size: 16px;
		min-height: 100px;
	}
`;

const Select = styled.select`
	width: 100%;
	padding: 0.75rem;
	border-radius: 8px;
	border: 1px solid ${({ theme }) => theme.colors.gray300};
	font-size: 1rem;
	background: white;

	@media (max-width: ${({ theme }) => theme.breakpoints.md}) {
		padding: 1rem;
		font-size: 16px;
	}
`;

const FileUploadArea = styled.div`
	border: 2px dashed ${({ theme }) => theme.colors.gray300};
	border-radius: 8px;
	padding: 2rem;
	text-align: center;
	cursor: pointer;
	transition: border-color 0.2s;

	&:hover {
		border-color: ${({ theme }) => theme.colors.blue600};
	}

	@media (max-width: ${({ theme }) => theme.breakpoints.md}) {
		padding: 1.5rem;
	}
`;

const MapContainer = styled.div`
	height: 300px;
	border: 1px solid ${({ theme }) => theme.colors.gray300};
	border-radius: 8px;
	overflow: hidden;
	margin-bottom: 0.5rem;

	@media (max-width: ${({ theme }) => theme.breakpoints.md}) {
		height: 250px;
	}

	@media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
		height: 200px;
	}
`;

const ButtonGroup = styled.div`
	display: flex;
	justify-content: flex-end;
	margin-top: 2rem;
	gap: 1rem;

	@media (max-width: ${({ theme }) => theme.breakpoints.md}) {
		flex-direction: column-reverse;
		margin-top: 1.5rem;
		gap: 0.75rem;
	}
`;

const Button = styled.button<{ $variant?: "primary" | "secondary" }>`
	padding: 0.75rem 1.5rem;
	border-radius: 8px;
	font-weight: 500;
	cursor: pointer;
	border: none;
	min-height: 44px;
	min-width: 44px;
	transition: all 0.2s;

	${({ $variant, theme }) =>
		$variant === "primary"
			? `
        background: ${theme.colors.blue600};
        color: white;
        
        &:hover {
          background: ${theme.colors.blue800};
        }
      `
			: `
        background: white;
        color: ${theme.colors.gray700};
        border: 1px solid ${theme.colors.gray300};
        
        &:hover {
          background: ${theme.colors.gray50};
        }
      `}

	@media (max-width: ${({ theme }) => theme.breakpoints.md}) {
		width: 100%;
		padding: 1rem;
	}
`;

const FormSection = styled.div`
	border-top: 1px solid ${({ theme }) => theme.colors.gray300};
	padding-top: 1.5rem;
	display: grid;
	gap: 1rem;

	@media (max-width: ${({ theme }) => theme.breakpoints.md}) {
		padding-top: 1rem;
		gap: 0.75rem;
	}
`;

export default function ReportPage() {
	return (
		<Container>
			<Card>
				<h1
					style={{
						fontSize: "1.5rem",
						marginBottom: "1.5rem",
						fontWeight: 600,
					}}>
					Report a Community Issue
				</h1>
				<form className="report-form" onSubmit={(e) => e.preventDefault()}>
					<FormGroup>
						<Label>Issue Title*</Label>
						<Input type="text" placeholder="Brief description of the issue" />
					</FormGroup>

					<FormGroup>
						<Label>Category*</Label>
						<Select>
							<option value="">Select a category</option>
							<option value="pothole">Pothole</option>
							<option value="streetlight">Streetlight</option>
							<option value="waste">Waste Management</option>
							<option value="other">Other</option>
						</Select>
					</FormGroup>

					<FormGroup>
						<Label>Description*</Label>
						<TextArea placeholder="Please provide detailed information about the issue..." />
					</FormGroup>

					<FormGroup>
						<Label>Upload Photos (Optional)</Label>
						<FileUploadArea>
							<p>Drag and drop photos here, or click to browse</p>
							<input
								type="file"
								style={{ display: "none" }}
								multiple
								accept="image/*"
							/>
						</FileUploadArea>
					</FormGroup>

					<FormGroup>
						<Label>Location*</Label>
						<MapContainer>
							<MapForReport />
						</MapContainer>
						<button
							type="button"
							style={{
								marginTop: 8,
								color: "#2563EB",
								background: "transparent",
								border: "none",
								cursor: "pointer",
								fontSize: "0.875rem",
								minHeight: "auto",
								padding: 0,
							}}>
							Use my current location
						</button>
					</FormGroup>

					<FormSection>
						<FormGroup>
							<Label>Name*</Label>
							<Input type="text" />
						</FormGroup>
						<FormGroup>
							<Label>Email*</Label>
							<Input type="email" />
						</FormGroup>
					</FormSection>

					<ButtonGroup>
						<Button type="button" $variant="secondary">
							Cancel
						</Button>
						<Button type="submit" $variant="primary">
							Submit Report
						</Button>
					</ButtonGroup>
				</form>
			</Card>
		</Container>
	);
}
