import React from "react";
import { Container, Typography, Grid, Paper } from "@mui/material";
import { motion } from "framer-motion";
import {
	FaReact,
	FaPython,
	FaHtml5,
	FaCss3,
	FaAws,
	FaGitAlt,
	FaGithub,
	FaGitlab,
} from "react-icons/fa";
import {
	SiDjango,
	SiJavascript,
	SiJquery,
	SiBootstrap,
	SiTailwindcss,
	SiRedux,
	SiPostgresql,
	SiMysql,
	SiSqlite,
	SiDigitalocean,
	SiVisualstudiocode,
	SiPycharm,
	SiJupyter,
	SiSublimetext,
} from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";
import styled, { keyframes } from "styled-components";

// Floating Particles Animation
const floating = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

const Particles = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	overflow: hidden;
	z-index: -1;
	pointer-events: none;

	.particle {
		position: absolute;
		width: 20px;
		height: 20px;
		background: rgba(255, 255, 255, 0.2);
		border-radius: 50%;
		animation: ${floating} 4s ease-in-out infinite;
	}

	.particle:nth-child(1) {
		left: 25%;
		animation-duration: 6s;
		animation-delay: 1s;
	}
	.particle:nth-child(2) {
		left: 50%;
		animation-duration: 4s;
		animation-delay: 2s;
	}
	.particle:nth-child(3) {
		left: 75%;
		animation-duration: 5s;
		animation-delay: 3s;
	}
	.particle:nth-child(4) {
		left: 90%;
		animation-duration: 7s;
		animation-delay: 4s;
	}
`;

function Skills() {
	const skillCategories = [
		{
			name: "Programming Languages",
			skills: [
				{ name: "JavaScript", icon: <SiJavascript /> },
				{ name: "Python", icon: <FaPython /> },
				{ name: "HTML", icon: <FaHtml5 /> },
				{ name: "CSS", icon: <FaCss3 /> },
				{ name: "C", icon: <TbBrandCpp /> },
			],
		},
		{
			name: "Front-end",
			skills: [
				{ name: "ReactJS", icon: <FaReact /> },
				{ name: "jQuery", icon: <SiJquery /> },
				{ name: "Bootstrap", icon: <SiBootstrap /> },
				{ name: "TailwindCSS", icon: <SiTailwindcss /> },
				{ name: "Redux", icon: <SiRedux /> },
			],
		},
		{
			name: "Back-end",
			skills: [
				{ name: "Django", icon: <SiDjango /> },
				{ name: "Django Rest Framework", icon: <SiDjango /> },
			],
		},
		{
			name: "Databases",
			skills: [
				{ name: "PostgreSQL", icon: <SiPostgresql /> },
				{ name: "MySQL", icon: <SiMysql /> },
				{ name: "SQLite", icon: <SiSqlite /> },
			],
		},
		{
			name: "DevOps",
			skills: [
				{ name: "AWS", icon: <FaAws /> },
				{ name: "DigitalOcean", icon: <SiDigitalocean /> },
				{ name: "Git", icon: <FaGitAlt /> },
				{ name: "GitHub", icon: <FaGithub /> },
				{ name: "GitLab", icon: <FaGitlab /> },
			],
		},
		{
			name: "IDE",
			skills: [
				{ name: "VS Code", icon: <SiVisualstudiocode /> },
				{ name: "PyCharm", icon: <SiPycharm /> },
				{ name: "Jupyter Notebook", icon: <SiJupyter /> },
				{ name: "Sublime Text", icon: <SiSublimetext /> },
			],
		},
	];

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.3,
			},
		},
	};

	const categoryVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.5,
				staggerChildren: 0.1,
			},
		},
	};

	const skillVariants = {
		hidden: { opacity: 0, scale: 0.8 },
		visible: {
			opacity: 1,
			scale: 1,
			transition: {
				duration: 0.3,
			},
		},
	};

	return (
		<Container maxWidth="lg" className="py-16 relative">
			{/* Background Particles */}
			<Particles>
				<div className="particle"></div>
				<div className="particle"></div>
				<div className="particle"></div>
				<div className="particle"></div>
			</Particles>

			{/* Main Content */}
			<motion.div
				variants={containerVariants}
				initial="hidden"
				animate="visible"
			>
				<Typography
					variant="h2"
					gutterBottom
					className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-center"
					style={{ fontFamily: "content_font" }}
				>
					My Skills
				</Typography>
				{skillCategories.map((category, categoryIndex) => (
					<motion.div
						key={categoryIndex}
						variants={categoryVariants}
						className="mb-12"
					>
						<Typography
							variant="h4"
							gutterBottom
							className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-center"
							style={{ fontFamily: "content_font" }}
						>
							{category.name}
						</Typography>
						<Grid container spacing={3} justifyContent="center">
							{category.skills.map((skill, skillIndex) => (
								<Grid
									item
									xs={6}
									sm={4}
									md={3}
									key={skillIndex}
								>
									<motion.div variants={skillVariants}>
										<Paper
											className="p-4 text-center h-full flex flex-col justify-between items-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
											elevation={3}
										>
											<div className="text-4xl mb-3 text-blue-600">
												{skill.icon}
											</div>
											<Typography
												variant="body1"
												className="font-medium"
												style={{
													fontFamily: "content_font",
												}}
											>
												{skill.name}
											</Typography>
										</Paper>
									</motion.div>
								</Grid>
							))}
						</Grid>
					</motion.div>
				))}
			</motion.div>
		</Container>
	);
}

export default Skills;
