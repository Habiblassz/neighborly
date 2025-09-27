"use client";
import styled from "styled-components";
import dynamic from "next/dynamic";

const MapForReport = dynamic(
	() => import("@/components/MapPreview").then((m) => m.ReportMap),
	{ ssr: false }
);

const Container = styled.div`
	max-width: 56rem;
	margin: 2rem auto;
	padding: 1rem;
`;

const Card = styled.div`
	background: #fff;
	border-radius: 12px;
	box-shadow: 0 6px 20px rgba(16, 24, 40, 0.08);
	padding: 1.5rem;
`;

export default function ReportPage() {
	return (
		<Container>
			<Card>
				<h1 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>
					Report a Community Issue
				</h1>
				<form className="report-form" onSubmit={(e) => e.preventDefault()}>
					<div style={{ marginBottom: "1rem" }}>
						<label>Issue Title*</label>
						<input
							type="text"
							placeholder="Brief description"
							style={{
								width: "100%",
								padding: "0.5rem",
								borderRadius: 8,
								border: "1px solid #D1D5DB",
							}}
						/>
					</div>

					<div style={{ marginBottom: "1rem" }}>
						<label>Category*</label>
						<select
							style={{
								width: "100%",
								padding: "0.5rem",
								borderRadius: 8,
								border: "1px solid #D1D5DB",
							}}>
							<option value="">Select a category</option>
							<option value="pothole">Pothole</option>
							<option value="streetlight">Streetlight</option>
							<option value="waste">Waste Management</option>
							<option value="other">Other</option>
						</select>
					</div>

					<div style={{ marginBottom: "1rem" }}>
						<label>Description*</label>
						<textarea
							rows={4}
							style={{
								width: "100%",
								padding: "0.5rem",
								borderRadius: 8,
								border: "1px solid #D1D5DB",
							}}
						/>
					</div>

					<div style={{ marginBottom: "1rem" }}>
						<label>Upload Photos (Optional)</label>
						<div
							style={{
								border: "2px dashed #D1D5DB",
								borderRadius: 8,
								padding: "1rem",
								textAlign: "center",
							}}>
							<p>Drag and drop photos here, or click to browse</p>
							<input type="file" className="hidden" multiple accept="image/*" />
						</div>
					</div>

					<div style={{ marginBottom: "1rem" }}>
						<label>Location*</label>
						<div
							style={{
								height: 256,
								border: "1px solid #D1D5DB",
								borderRadius: 8,
								overflow: "hidden",
							}}>
							<MapForReport />
						</div>
						<button
							type="button"
							style={{
								marginTop: 8,
								color: "#2563EB",
								background: "transparent",
								border: "none",
							}}>
							Use my current location
						</button>
					</div>

					<div
						style={{
							borderTop: "1px solid #E5E7EB",
							paddingTop: "1rem",
							display: "grid",
							gap: 12,
						}}>
						<div>
							<label>Name*</label>
							<input
								type="text"
								style={{
									width: "100%",
									padding: "0.5rem",
									borderRadius: 8,
									border: "1px solid #D1D5DB",
								}}
							/>
						</div>
						<div>
							<label>Email*</label>
							<input
								type="email"
								style={{
									width: "100%",
									padding: "0.5rem",
									borderRadius: 8,
									border: "1px solid #D1D5DB",
								}}
							/>
						</div>
					</div>

					<div
						style={{
							display: "flex",
							justifyContent: "flex-end",
							marginTop: "1rem",
						}}>
						<button
							type="button"
							style={{
								marginRight: 8,
								padding: "0.5rem 1rem",
								borderRadius: 8,
								border: "1px solid #D1D5DB",
							}}>
							Cancel
						</button>
						<button
							type="submit"
							style={{
								background: "#2563EB",
								color: "#fff",
								padding: "0.5rem 1rem",
								borderRadius: 8,
								border: "none",
							}}>
							Submit Report
						</button>
					</div>
				</form>
			</Card>
		</Container>
	);
}
