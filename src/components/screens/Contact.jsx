import React from "react";

// packages
import { Container, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

function Contact() {
	const isDarkMode = useSelector((state) => state.darkMode);

	const iconColor = isDarkMode ? "#FFFFFF" : "#000000"; // White for dark mode, black for light mode

	return (
		<Container className="py-2 ">
			<motion.div
				initial={{ opacity: 0, y: 50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
			>
				<Typography
					variant="h3"
					gutterBottom
					className="!text-3xl sm:!text-3xl md:!text-4xl font-bold mb-8 text-center"
					style={{ fontFamily: "logo_font" }}
				>
					Hit me up
				</Typography>
				<ul className="wrapper ">
					<li className="icon email">
						<a href="mailto:jassimsm9@gmail.com" target="_blank">
							<span className="tooltip">Email</span>
							<span>
								<i
									className="fa-regular fa-envelope"
									style={{ color: iconColor }}
								></i>
							</span>
						</a>
					</li>
					<li className="icon call">
						<a href="tel:+918089823143" target="_blank">
							<span className="tooltip">Call</span>
							<span>
								<i
									className="fa-solid fa-phone"
									style={{ color: iconColor }}
								></i>
							</span>
						</a>
					</li>
					<li className="icon linkedin">
						<a
							href="https://www.linkedin.com/in/jassim-soopi-mohammed/"
							target="_blank"
						>
							<span className="tooltip">LinkedIn</span>
							<span>
								<i
									className="fab fa-linkedin"
									style={{ color: iconColor }}
								></i>
							</span>
						</a>
					</li>
					<li className="icon github">
						<a href="https://github.com/Jazze7" target="_blank">
							<span className="tooltip">Github</span>
							<span>
								<i
									className="fab fa-github"
									style={{ color: iconColor }}
								></i>
							</span>
						</a>
					</li>
					<li className="icon twitter">
						<a
							href="https://x.com/jazz_e7?t=HVYMsK-wGPckVbqjVI5-Pw&s=08 "
							target="_blank"
						>
							<span className="tooltip">X(twitter)</span>
							<span>
								<i
									className=" fa-brands fa-x-twitter"
									style={{ color: iconColor }}
								></i>
							</span>
						</a>
					</li>
					<li className="icon instagram">
						<a
							href="https://www.instagram.com/jazz_e/"
							target="_blank"
						>
							<span className="tooltip">Instagram</span>
							<span>
								<i
									className="fab fa-instagram"
									style={{ color: iconColor }}
								></i>
							</span>
						</a>
					</li>
				</ul>
			</motion.div>
		</Container>
	);
}

export default Contact;
