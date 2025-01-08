import React, { useState } from "react";
import Footer from "./Footer";
import { Link } from 'react-router-dom';
import Header from "./Header";

function HomePage() {
	
	return (
		<div className="min-h-screen bg-gradient-to-b from-purple-50 to-white text-gray-800 font-inter">
		<Header />
		<div className="flex flex-col md:flex-row items-start gap-8 py-12 px-6 bg-white/80 backdrop-blur-sm shadow-md h-auto min-h-[500px] max-w-7xl mx-auto mt-8 rounded-lg">
			{/* Left Section: Image and Icons */}
			<div className="flex flex-col items-center md:w-1/3">
			<img
				src="/images/meWelding.png"
				alt="Your Profile"
				className="rounded-full w-72 h-72 border-4 border-purple-200 object-cover shadow-lg"
			/>
			<div className="mt-6 flex gap-6">
				<a
				href="https://github.com/sucrammal"
				target="_blank"
				rel="noopener noreferrer"
				className="transform hover:scale-110 transition-transform duration-200"
				>
				<img
					src="/images/github-icon.png"
					alt="GitHub"
					className="w-10 aspect-square"
				/>
				</a>
				<a
				href="https://www.linkedin.com/in/marcus-lam-maker/"
				target="_blank"
				rel="noopener noreferrer"
				className="transform hover:scale-110 transition-transform duration-200"
				>
				<img
					src="/images/linkedin-icon.png"
					alt="LinkedIn"
					className="w-10 aspect-square"
				/>
				</a>
				<a
				href="mailto:sml2286@columbia.edu.hk"
				target="_blank"
				rel="noopener noreferrer"
				className="transform hover:scale-110 transition-transform duration-200"
				>
				<img
					src="/images/gmail-icon.png"
					alt="Email"
					className="w-10 aspect-square"
				/>
				</a>
			</div>
			</div>
			{/* Right Section: Description */}
			<div className="flex flex-col justify-start md:w-2/3">
			<h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
				Hi, I'm Marcus Lam
			</h1>
			<p className="mt-6 text-lg leading-relaxed text-gray-700">
				From an autonomous robot to detect and clear harmful algal blooms, to NLP and CV explorations, and to online multiplayer games, I try to inject my passion for building into three main disciplines: data science, robotics, and web development.
				<br />
				<br />
				I'm a Sophomore studying Computer Engineering at Columbia University, and my various projects come from the Columbia Space Initiative{" "}
				<a
				href="https://columbiaspace.org/"
				target="_blank"
				rel="noopener noreferrer"
				className="text-purple-600 hover:text-purple-800 underline decoration-purple-300 hover:decoration-purple-500 transition-colors"
				>
				(CSI)
				</a>
				, one of campus's premier STEM clubs where I lead a team of my own, the Robotic Manipulation and Mobility{" "}
				<a
				href="https://avachen.net/"
				target="_blank"
				rel="noopener noreferrer"
				className="text-purple-600 hover:text-purple-800 underline decoration-purple-300 hover:decoration-purple-500 transition-colors"
				>
				(ROAM)
				</a>
				{" "} Research Lab where I work under{" "}
				<a
				href="https://avachen.net/"
				target="_blank"
				rel="noopener noreferrer"
				className="text-purple-600 hover:text-purple-800 underline decoration-purple-300 hover:decoration-purple-500 transition-colors"
				>
				Ava Chen
				</a>
				, and my own spare time. Welcome to my portfolio!
			</p>
			<Link to="/projects">
				<button className="mt-8 px-8 py-3 bg-gradient-to-r from-purple-600 to-purple-800 text-white rounded-lg text-lg font-medium hover:opacity-90 transition-opacity shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all">
				View My Projects
				</button>
			</Link>
			</div>
		</div>
		{/* Latest News Section */}
		<section className="bg-gradient-to-r from-purple-500/10 to-purple-600/5 backdrop-blur-sm border-t border-purple-100/20 py-6 mt-12">
			<p className="text-center text-gray-700 font-medium max-w-4xl mx-auto px-4">
			Latest news: <strong className="text-purple-800">[2024/12]</strong> Closed out the semester with a CSI AQUAS wrap up, putting together sponsorship materials over break!
			</p>
		</section>
		</div>
	);
  };
  

export default HomePage;
