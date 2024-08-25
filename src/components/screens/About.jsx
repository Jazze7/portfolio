import React, { useState, useEffect } from "react";
import {
	Container,
	Typography,
	Grid,
	Paper,
	Box,
	Button,
	useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import jazze from "../../assets/images/jazze.jpg";
import Meteor from "../animations/Globe"; // Ensure Meteor component is correctly imported
import ContactModal from "../utilities/ContactModal";

function About() {
	const theme = useTheme();
	const [meteors, setMeteors] = useState([]);
	const [isOpen, setOpen] = useState(false);

	useEffect(() => {
		const createMeteor = () => {
			setMeteors((prev) => [...prev, Date.now()]);
		};

		const intervalId = setInterval(createMeteor, 500); // More frequent meteor creation

		return () => clearInterval(intervalId);
	}, []);

	return (
		<>
			{isOpen && <ContactModal onClose={() => setOpen(false)} />}
			<Container style={{ position: "relative", overflow: "hidden" }}>
				{meteors.map((key) => (
					<Meteor key={key} theme={theme} />
				))}
				<Grid container spacing={4} alignItems="center">
					<Grid item xs={12} md={6}>
						<motion.div
							initial={{ opacity: 0, scale: 0.8 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.6 }}
						>
							<Paper
								className="p-4 gradient-border" // Apply the gradient border class here
								elevation={3}
								style={{
									overflow: "hidden",
									boxShadow: "0 15px 30px rgba(0,0,0,0.2)",
								}}
							>
								<img
									style={{
										width: "100%",
										filter: "grayscale(50%)",
									}}
									src={jazze}
									alt="Jassim Soopi Mohammed"
									className="w-full h-auto rounded-lg transition-all duration-500 hover:filter-none"
								/>
							</Paper>
						</motion.div>
					</Grid>

					<Grid item xs={12} md={6}>
						<Box position="relative">
							<motion.div
								initial={{ opacity: 0, x: 50 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.6, delay: 0.2 }}
							>
								<Typography
									variant="h4"
									gutterBottom
									className="text-2xl sm:text-3xl md:text-4xl font-bold"
									style={{
										position: "relative",
										zIndex: 2,
										fontFamily: "logo_font",
									}}
								>
									ABOUT ME
								</Typography>
							</motion.div>
							<motion.div
								initial={{ width: 0 }}
								animate={{ width: "100%" }}
								transition={{ duration: 0.6, delay: 0.4 }}
								style={{
									position: "absolute",
									bottom: 0,
									height: "5px",
									backgroundColor: theme.palette.primary.main,
									zIndex: 1,
								}}
							/>
						</Box>
						<motion.div
							initial={{ opacity: 0, x: 50 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.6, delay: 0.3 }}
						>
							<Typography
								variant="body1"
								className="text-sm sm:text-base leading-relaxed"
								style={{
									marginTop: "16px",
									fontFamily: "content-font",
								}}
							>
								Full-stack developer with 2+ years of experience
								in ReactJS, Django, and DevOps. Expertise in
								high-traffic website development, user
								engagement optimization, and RESTful API
								architecture. Mentored 1000+ students in
								full-stack development.
							</Typography>
							<div className="flex justify-center m-3">
								<Button
									onClick={() => setOpen(true)}
									variant="contained"
									style={{ fontFamily: "content-font" }}
								>
									Contact Me
								</Button>
							</div>
						</motion.div>
					</Grid>
				</Grid>
			</Container>
		</>
	);
}

export default About;
