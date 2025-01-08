import React from "react";

function Home() {
	return (
		<section id="home" className="bg-blue-100 py-10">
			<div className="container mx-auto text-center">
				<h2 className="text-4xl font-bold mb-4">
					Welcome to My Portfolio
				</h2>
				<p className="text-lg mb-6">
					Hi, I'm Marcus Lam, a student at Columbia University
					majoring in Operations Research with a passion for computer
					science and problem-solving!
				</p>
				<div className="space-x-4">
					{/* Replace '#' with your actual links */}
					<a
						href="https://github.com/yourgithub"
						className="text-blue-500 hover:underline"
						target="_blank"
						rel="noopener noreferrer"
					>
						GitHub
					</a>
					<a
						href="https://www.linkedin.com/in/yourlinkedin"
						className="text-blue-500 hover:underline"
						target="_blank"
						rel="noopener noreferrer"
					>
						LinkedIn
					</a>
				</div>
			</div>
		</section>
	);
}

export default Home;
