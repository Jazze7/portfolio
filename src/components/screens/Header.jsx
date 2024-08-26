import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../redux/theme/ThemeSlice";
import {
	IconButton,
	Drawer,
	List,
	ListItem,
	ListItemText,
} from "@mui/material";
import { Brightness4, Brightness7, Menu } from "@mui/icons-material";
import styled from "styled-components";
import { Helmet } from "react-helmet";

function Header() {
	const dispatch = useDispatch();
	const darkMode = useSelector((state) => state.theme.darkMode);
	const [drawerOpen, setDrawerOpen] = useState(false);

	const menuItems = [
		{ text: "About", id: "about-section" },
		{ text: "Skills", id: "skills-section" },
		{ text: "Experience", id: "experience-section" },
		{ text: "Contact", id: "contact-section" },
	];

	const handleScroll = (id) => {
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
		setDrawerOpen(false);
	};

	return (
		<>
			<Helmet>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossorigin
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Bungee+Tint&display=swap"
					rel="stylesheet"
				/>
			</Helmet>
			<Head className="flex items-center">
				<Wrapper>
					<Navbar>
						<Heading>Jassim Soopi Mohammed</Heading>
						<NavItems>
							{menuItems.map((item) => (
								<ListItem
									key={item.text}
									onClick={() => handleScroll(item.id)}
									style={{ cursor: "pointer" }}
									className="!font-['content-font']"
								>
									{item.text}
								</ListItem>
							))}
						</NavItems>
						{/* Dark mode toggle button */}
						<IconButton
							color="inherit"
							onClick={() => dispatch(toggleTheme())}
							className="ml-4"
						>
							{darkMode ? <Brightness7 /> : <Brightness4 />}
						</IconButton>
						<Hamburger
							color="inherit"
							onClick={() => setDrawerOpen(true)}
							className="hamburger"
						>
							<Menu />
						</Hamburger>
						<Drawer
							anchor="right"
							open={drawerOpen}
							onClose={() => setDrawerOpen(false)}
						>
							<List>
								{menuItems.map((item, index) => (
									<ListItem
										button
										key={index}
										onClick={() => handleScroll(item.id)}
										className="!font-['content-font']"
									>
										<ListItemText primary={item.text} />
									</ListItem>
								))}
							</List>
						</Drawer>
					</Navbar>
				</Wrapper>
			</Head>
		</>
	);
}

const Head = styled.div`
	height: 100px;
`;

const Wrapper = styled.div`
	width: 90%;
	margin: 0 auto;
`;

const Heading = styled.h1`
	font-family: "Bungee Tint", sans-serif;
	font-size: 24px;
	cursor: pointer;
`;

const Navbar = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const NavItems = styled.div`
	display: flex;
	justify-content: space-between;
	width: 40%;
	font-family: "content_font", sans-serif;

	@media (max-width: 768px) {
		display: none;
	}
`;

const Hamburger = styled.div`
	display: none;
	@media (max-width: 768px) {
		display: flex;
		margin-left: auto;
	}
`;

export default Header;
