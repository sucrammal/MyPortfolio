import React from "react";

function Portfolio() {
	// Example portfolio entries
	const entries = [
		{
			title: "Project 1",
			description: "A web application for tracking tasks.",
			link: "https://github.com/yourgithub/project1",
		},
		{
			title: "Project 2",
			description: "An Arduino-based water level sensor system.",
			link: "https://github.com/yourgithub/project2",
		},
	];

	return (
		<section id="portfolio" className="bg-gray-100 py-10">
			<div className="container mx-auto">
				<h2 className="text-3xl font-bold text-center mb-6">
					Portfolio
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					{entries.map((entry, index) => (
						<div
							key={index}
							className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow"
						>
							<h3 className="text-xl font-bold mb-2">
								{entry.title}
							</h3>
							<p className="text-gray-700 mb-4">
								{entry.description}
							</p>
							<a
								href={entry.link}
								className="text-blue-500 hover:underline"
								target="_blank"
								rel="noopener noreferrer"
							>
								View Project
							</a>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

export default Portfolio;
