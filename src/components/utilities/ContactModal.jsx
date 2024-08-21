import React, { useState } from "react";
import axios from "axios";
import styled, { keyframes } from "styled-components";
import { useSelector } from "react-redux";
import { Button } from "@mui/material";

export default function ContactModal({ onClose }) {
	const darkMode = useSelector((state) => state.theme.darkMode);

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [message, setMessage] = useState("");
	const [statusMessage, setStatusMessage] = useState(""); // State for status message

	const handleSubmit = async (e) => {
		e.preventDefault();

		const serviceId = "service_ga38qaf";
		const templateId = "template_ovr259n";
		const publicKey = "CEWBlMUzbqvNaELv8";

		const data = {
			service_id: serviceId,
			template_id: templateId,
			user_id: publicKey,
			template_params: {
				from_name: name,
				from_email: email,
				to_name: "Jassim SM",
				message: message,
				phone: phone,
			},
		};

		try {
			const res = await axios.post(
				"https://api.emailjs.com/api/v1.0/email/send",
				data
			);

			if (res.status === 200) {
				setStatusMessage("Email sent successfully!");
			} else {
				setStatusMessage("Something went wrong. Please try again.");
			}

			// Clear the form fields after submission
			setName("");
			setEmail("");
			setMessage("");
			setPhone("");
		} catch (error) {
			setStatusMessage("An error occurred. Please try again.");
			console.error(error);
		}
	};

	return (
		<Modal onClick={() => onClose()}>
			<ModalContent
				onClick={(e) => e.stopPropagation()}
				darkMode={darkMode}
			>
				<Card className="container" darkMode={darkMode}>
					<Title className="flex justify-center">
						Contact Details
					</Title>
					<div className="container">
						<form className="w-fit m-auto" onSubmit={handleSubmit}>
							<Label>Enter your Name</Label>
							<input
								type="text"
								placeholder=""
								value={name}
								onChange={(e) => setName(e.target.value)}
								className="mb-3 rounded-lg p-3"
								required
							/>
							<Label>Enter your Mobile Number</Label>
							<input
								type="number"
								placeholder=""
								value={phone}
								onChange={(e) => setPhone(e.target.value)}
								className="mb-3 rounded-lg p-3"
								required
							/>
							<Label>Enter your Email</Label>
							<input
								type="email"
								placeholder=""
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								className="mb-3 rounded-lg p-3"
								required
							/>
							<Label>Enter your Message</Label>
							<textarea
								value={message}
								onChange={(e) => setMessage(e.target.value)}
								className="mb-3 rounded-lg p-3"
							></textarea>
							<Button
								style={{ display: "block", margin: "0 auto" }}
								type="submit"
								variant="contained"
								color="success"
							>
								SUBMIT
							</Button>
						</form>
						{/* Display status message */}
						{statusMessage && (
							<p
								style={{
									color: "red",
									textAlign: "center",
									marginTop: "10px",
								}}
							>
								{statusMessage}
							</p>
						)}
					</div>
				</Card>
			</ModalContent>
		</Modal>
	);
}

const popup = keyframes`
    0% {
        scale: 0;
    }
    100% {       
        scale: 1;
    }
`;

const Modal = styled.section`
	width: 100%;
	height: 100vh;
	justify-content: center;
	align-items: center;
	position: fixed;
	left: 0;
	top: 0;
	z-index: 305;
	display: flex;
`;

const ModalContent = styled.div`
	width: 450px;
	border-radius: 24px;
	padding-top: 5px;
	animation: ${popup} 0.4s ease-in-out;
	background-color: #000;
	@media all and (max-width: 480px) {
		width: 100%;
		position: absolute;
		bottom: 0;
		border-bottom-left-radius: 0;
		border-bottom-right-radius: 0;
		animation-name: modal;
		animation-duration: 0.3s;
	}
`;

const Card = styled.div`
	border-radius: 24px;
	padding: 32px;
	@media all and (max-width: 480px) {
		border-bottom-left-radius: 0;
		border-bottom-right-radius: 0;
		padding: 6px 32px;
	}
`;

const Title = styled.h4`
	font-family: "content_font";
	font-size: 20px;
	margin-bottom: 20px;
`;

const Label = styled.div`
	font-family: "content_font";
	margin-bottom: 8px;
`;
