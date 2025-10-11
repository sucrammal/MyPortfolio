const gambitProject = {
	title: "Gambit Robotics",
	shortDescription:
		"Built and improved computer vision, model evaluation, and interface systems for a smart cooking robot powered by Viam.",
	tags: [
		"Computer Vision",
		"Machine Learning",
		"Viam",
		"Full-Stack",
		"Data Engineering",
		"UX Design",
		"Python",
		"JavaScript",
		"Robotics",
	],
	image: "/images/gambit/gambit-demo.jpg",
	labels: ["Computer Vision", "Robotics"],
	fullContent: (
		<div>
			<section>
				<img
					src="/images/gambit/gambit-demo.jpg"
					alt="Gambit Robotics cooking robot"
					className="w-6/12"
				/>
				<h3 className="font-semibold mt-4">Premise</h3>
				<ul className="list-disc ml-6">
					<li>
						Gambit Robotics (
						<a
							href="https://www.gambitrobotics.ai/"
							target="_blank"
							rel="noopener noreferrer"
							className="text-teal-600 hover:text-teal-700 underline decoration-teal-300 hover:decoration-teal-500 transition-colors"
						>
							website
						</a>
						) builds intelligent cooking robots powered by{" "}
						<a
							href="https://www.techbrew.com/stories/2025/10/02/viam-engineers-robots"
							target="_blank"
							rel="noopener noreferrer"
							className="text-teal-600 hover:text-teal-700 underline decoration-teal-300 hover:decoration-teal-500 transition-colors"
						>
							Viam’s robotics software
						</a>
						, combining perception, control, and automation to
						create reliable kitchen assistants.
					</li>
					<li>
						I joined as a Computer Vision Engineer intern to help
						train, test, and deploy real-time perception and control
						systems for multi-burner cooking robots.
					</li>
				</ul>

				<div className="bg-amber-50 border-l-4 border-amber-500 p-4 my-4">
					<p className="text-amber-700">
						<strong>Confidentiality Notice:</strong> Due to the
						proprietary nature of this work, specific technical
						implementations, source code, and media content shown
						here are limited. The details provided are high-level
						descriptions of my contributions while respecting
						confidentiality agreements.
					</p>
				</div>

				<h3 className="font-semibold mt-4">Responsibilities</h3>
				<ul className="list-disc ml-6">
					<li>
						Trained and benchmarked burner detection models using
						enhanced preprocessing and error analysis, reducing
						detection failures to <strong>8.1%</strong> across
						8,400+ images.
					</li>
					<li>
						Built a replay-based testing suite to evaluate motion
						classifiers on real hardware, improving accuracy from{" "}
						<strong>41.7% → 83%</strong> by integrating temperature,
						color, and object-state cues.
					</li>
					<li>
						Contributed to Viam open-source components to make video
						replay and model evaluation easier on robotic hardware.
					</li>
					<li>
						Since I made progress quickly, I was also tasked with{" "}
						<strong>web and UX development projects</strong> —
						building out the recipe-generation suite, user control
						dashboard that enabled dynamic cook-time adjustments
						based on temperature readings, implemented LLM response
						caching to speed up planning, coordinated multi-burner
						agents, and designed a visual overlay for real-time blob
						detection of food items, etc...
					</li>
					<li>
						Developed pipelines for image preprocessing (CLAHE, HSV
						color analysis) and lighting/angle robustness testing to
						ensure consistent real-world performance.
					</li>
				</ul>

				<h3 className="font-semibold mt-4">Outcomes</h3>
				<ul className="list-disc ml-6">
					<li>
						Improved perception robustness and reduced detection
						error rates across multiple camera conditions, bringing
						models closer to production deployment.
					</li>
					<li>
						Expanded role beyond CV/ML to include{" "}
						<strong>front-end interface design</strong> that bridged
						user experience with underlying ML
						pipelines—streamlining model interpretability and
						debugging.
					</li>
					<li>
						Enhanced the Viam ecosystem through real-world feedback,
						helping shape its data workflows for robotics
						developers.
					</li>
				</ul>

				<h3 className="font-semibold mt-4">Technologies Used</h3>
				<div className="mt-3 flex flex-wrap gap-1.5">
					<span className="px-2 py-1 text-s rounded-full bg-gray-100 text-gray-600">
						Python
					</span>
					<span className="px-2 py-1 text-s rounded-full bg-gray-100 text-gray-600">
						Viam Platform
					</span>
					<span className="px-2 py-1 text-s rounded-full bg-gray-100 text-gray-600">
						React
					</span>
					<span className="px-2 py-1 text-s rounded-full bg-gray-100 text-gray-600">
						UI/UX Design
					</span>
					<span className="px-2 py-1 text-s rounded-full bg-gray-100 text-gray-600">
						Machine Learning
					</span>
					<span className="px-2 py-1 text-s rounded-full bg-gray-100 text-gray-600">
						Computer Vision
					</span>
				</div>
			</section>

			<section>
				<h2 className="font-bold mt-6 text-xl">Links</h2>
				<ul className="list-disc ml-6 mt-2">
					<li>
						<a
							href="https://www.gambitrobotics.ai/"
							target="_blank"
							rel="noopener noreferrer"
							className="text-teal-600 hover:text-teal-700 underline decoration-teal-300 hover:decoration-teal-500 transition-colors"
						>
							Gambit Robotics Website
						</a>
					</li>
					<li>
						<a
							href="https://www.techbrew.com/stories/2025/10/02/viam-engineers-robots"
							target="_blank"
							rel="noopener noreferrer"
							className="text-teal-600 hover:text-teal-700 underline decoration-teal-300 hover:decoration-teal-500 transition-colors"
						>
							TechBrew Article: How Viam Engineers Robots
						</a>
					</li>
				</ul>
			</section>
		</div>
	),
};

export default gambitProject;
