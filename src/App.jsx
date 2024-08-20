import React from "react";

// packages
import { useSelector } from "react-redux";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { motion } from "framer-motion";

// components
import Header from "./components/screens/Header";
import About from "./components/screens/About";
import Skills from "./components/screens/Skills";
import Experience from "./components/screens/Experience";
import Contact from "./components/screens/Contact";

function App() {
	const darkMode = useSelector((state) => state.theme.darkMode);

	const theme = createTheme({
		palette: {
			mode: darkMode ? "dark" : "light",
		},
	});

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.5 }}
				className={`min-h-screen ${
					darkMode
						? "bg-gray-900 text-white"
						: "bg-white text-gray-900"
				}`}
			>
				<Header />
				<section id="about-section">
					<About />
				</section>
				<section id="skills-section">
					<Skills />
				</section>
				<section id="experience-section">
					<Experience />
				</section>
				<section id="contact-section">
					<Contact />
				</section>
			</motion.div>
		</ThemeProvider>
	);
}

export default App;
