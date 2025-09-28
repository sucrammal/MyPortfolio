import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";

function HomePage() {
	return (
		<div className="min-h-screen bg-white text-gray-800 font-inter">
			<title>Marcus Lam - Portfolio</title>
			<Header />
			<div className="flex flex-col md:flex-row items-center md:items-start gap-8 py-8 md:py-12 px-4 md:px-6 bg-white/80 backdrop-blur-sm shadow-md h-auto min-h-[500px] max-w-7xl mx-auto mt-4 md:mt-8 rounded-lg">
				{/* Left Section: Image and Icons */}
				<div className="flex flex-col items-center w-full md:w-1/3">
					<img
						src="./images/meWelding.png"
						alt="Your Profile"
						className="rounded-full w-48 h-48 md:w-72 md:h-72 border-4 border-teal-200 object-cover shadow-lg"
					/>
					<div className="mt-4 md:mt-6 flex gap-4 md:gap-6">
						<a
							href="https://github.com/sucrammal"
							target="_blank"
							rel="noopener noreferrer"
							className="transform hover:scale-110 transition-transform duration-200"
						>
							<img
								src="./images/github-icon.png"
								alt="GitHub"
								className="w-8 md:w-10 aspect-square"
							/>
						</a>
						<a
							href="https://www.linkedin.com/in/marcus-lam-maker/"
							target="_blank"
							rel="noopener noreferrer"
							className="transform hover:scale-110 transition-transform duration-200"
						>
							<img
								src="./images/linkedin-icon.png"
								alt="LinkedIn"
								className="w-8 md:w-10 aspect-square"
							/>
						</a>
						<a
							href="mailto:sml2286@columbia.edu"
							target="_blank"
							rel="noopener noreferrer"
							className="transform hover:scale-110 transition-transform duration-200"
						>
							<img
								src="./images/gmail-icon.png"
								alt="Email"
								className="w-8 md:w-10 aspect-square"
							/>
						</a>
					</div>
				</div>

				{/* Right Section: Description */}
				<div className="flex flex-col justify-start w-full md:w-2/3 px-4 md:px-0">
					<h1 className="text-3xl md:text-4xl font-bold text-teal-600 text-center md:text-left">
						Hello! I'm Marcus. 👋
					</h1>
					<p className="mt-4 md:mt-6 text-base md:text-lg leading-relaxed text-gray-700">
						From an autonomous robot to detect and clear harmful
						algal blooms, to NLP and CV explorations, and to online
						multiplayer games, I try to inject my passion for
						building into three main disciplines: data science,
						robotics, and web development.
						<br />
						<br />
						I'm a Sophomore studying Computer Engineering at
						Columbia University, and my various projects come from
						the Columbia Space Initiative{" "}
						<a
							href="https://columbiaspace.org/"
							target="_blank"
							rel="noopener noreferrer"
							className="text-teal-600 hover:text-teal-700 underline decoration-teal-300 hover:decoration-teal-500 transition-colors"
						>
							(CSI)
						</a>
						, one of campus's largest engineering clubs where I lead
						a team of my own, the Robotic Manipulation and Mobility{" "}
						<a
							href="https://roam.me.columbia.edu/"
							target="_blank"
							rel="noopener noreferrer"
							className="text-teal-600 hover:text-teal-700 underline decoration-teal-300 hover:decoration-teal-500 transition-colors"
						>
							(ROAM)
						</a>{" "}
						Research Lab where I work under{" "}
						<a
							href="https://avachen.net/"
							target="_blank"
							rel="noopener noreferrer"
							className="text-teal-600 hover:text-teal-700 underline decoration-teal-300 hover:decoration-teal-500 transition-colors"
						>
							Ava Chen
						</a>{" "}
						on the MyHandSCI project, and my own spare time. Welcome
						to my portfolio!
					</p>
					<div className="flex justify-center md:justify-start">
						<Link to="/projects">
							<button className="mt-6 md:mt-8 px-6 md:px-8 py-2 md:py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-lg text-base md:text-lg font-medium transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all">
								View My Projects
							</button>
						</Link>
					</div>
				</div>
			</div>

			{/* Latest News Section */}
			<section className="bg-teal-50/50 backdrop-blur-sm border-t border-teal-100/20 py-4 md:py-6 mt-8 md:mt-12">
				<p className="text-center text-sm md:text-base text-gray-700 font-medium max-w-4xl mx-auto px-4">
					Latest news:{" "}
					<strong className="text-teal-700">[2025/3]</strong> Finished
					the new environmental sensor buoy subsystem for AQUAS along
					with testing and deployment procedures. Will be moving onto
					designing the water dispersal system! 🌊
				</p>
			</section>
		</div>
	);
}

export default HomePage;
