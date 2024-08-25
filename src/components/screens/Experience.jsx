import React from "react";
import { motion } from "framer-motion";

export default function Experience() {
	const experienceData = [
		{
			company: "STEYP PVT LTD",
			position: "Support Engineer",
			period: "January 2023-Present",
			responsibilities: [
				"Empowered over 1000 students in full-stack development, providing personalized guidance and support in mastering web technologies, including ReactJS and Django.",
				"Assigned and evaluated projects, ensuring students achieved skill mastery and professional growth.",
				"Conducted 5+ interactive workshops, resulting in a 15% average improvement in student project performance by enhancing understanding of programming concepts and best practices.",
				"Developed a comprehensive library of learning resources, including tutorials and cheat sheets, addressing over 100 student inquiries and improving resource accessibility.",
				"Established a mentorship program for coding standards through code review sessions, impacting 100+ students; issued 100+ certificates to recognize achievements on half of organisation, fostering a culture of continuous improvement and technical skill development.",
			],
		},
		{
			company: "TALROP PVT LTD",
			position: "Software Engineer",
			period: "July 2022-Oct 2023",
			responsibilities: [
				"Developed and maintained 2+ high-traffic websites utilizing ReactJS, Python Django, and DevOps methodologies, improving user engagement by 30% through enhanced performance and intuitive design.",
				"Collaborated with stakeholders on multiple enterprise-level applications, translating requirements into technical specifications, ensuring alignment with project goals.",
				"Engineered and launched scalable, responsive web applications with cross-device compatibility, boosting user engagement and satisfaction.",
				"Architected over 10 RESTful APIs using Django Rest Framework, enhancing data transfer speed by 30% and reducing server response time by 15%.",
				"Troubleshoot and resolved 100+ user-reported issues, maintaining a 90%+ code quality rating and ensuring smooth application performance.",
				"Deployed web applications using DevOps tools across various cloud platforms, ensuring seamless operation and availability.",
				"Managed a process re-engineering project to improve end-to-end service processes, streamlining communication and enhancing efficiency across departments.",
				"Continuously updated technical knowledge by attending 2+ industry conferences/workshops annually, integrating new technologies and best practices.",
				"Provided mentorship and support to junior team members, fostering technical skill development and professional growth",
			],
		},
		{
			company: "CHEGG INDIA",
			position: "Chegg Expert",
			period: "October 2021-July 2022",
			responsibilities: [
				"Provided online computer science tutoring to over 100,000 students, simplifying complex concepts and fostering academic success.",
				"Authored and disseminated a series of concise, actionable documents to clarify complex support concepts, improving student comprehension and resourcefulness.",
				"Ensured adherence to academic integrity standards, guiding students towards ethical problem-solving and learning practices.",
			],
		},
	];

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 1 }}
		>
			<h1>Experience</h1>
			{experienceData.map((job, index) => (
				<motion.div
					key={index}
					initial={{ y: 50, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ delay: index * 0.2 }}
				>
					<h2>{job.company}</h2>
					<h3>{job.position}</h3>
					<p>{job.period}</p>
					<ul>
						{job.responsibilities.map((responsibility, idx) => (
							<motion.li
								key={idx}
								initial={{ x: -20, opacity: 0 }}
								animate={{ x: 0, opacity: 1 }}
								transition={{ delay: index * 0.2 + idx * 0.1 }}
							>
								{responsibility}
							</motion.li>
						))}
					</ul>
				</motion.div>
			))}
		</motion.div>
	);
}
