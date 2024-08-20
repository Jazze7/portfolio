// Typewriter.js
import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
	hidden: { opacity: 0 },
	visible: { opacity: 1, transition: { duration: 0.5 } },
};

const characterVariants = {
	hidden: { opacity: 0 },
	visible: { opacity: 1, transition: { duration: 0.05 } }, // Adjust duration for typing speed
};

const Typewriter = ({ text }) => {
	const characters = text.split("");

	return (
		<motion.div
			variants={containerVariants}
			initial="hidden"
			animate="visible"
			style={{ display: "inline-block", whiteSpace: "pre" }}
		>
			{characters.map((char, index) => (
				<motion.span
					key={index}
					variants={characterVariants}
					initial="hidden"
					animate="visible"
					style={{ display: "inline-block" }}
					transition={{ delay: index * 0.05 }} // Adjust delay to control typing speed
				>
					{char}
				</motion.span>
			))}
		</motion.div>
	);
};

export default Typewriter;
