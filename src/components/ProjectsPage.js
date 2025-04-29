import { useState } from "react";
import Header from "../components/Header";
import { Search } from "lucide-react";
import projectsData from "../data/projectsData"; // Import all project entry data

function ProjectsPage() {
	const [selectedCategory, setSelectedCategory] = useState("All");
	const [selectedProject, setSelectedProject] = useState(null);
	const [isSearchExpanded, setIsSearchExpanded] = useState(false);
	const [searchTerm, setSearchTerm] = useState("");

	// category filter
	const filterProjects = (projects) => {
		let filtered = projects;

		// Category filter
		if (selectedCategory !== "All") {
			filtered = filtered.filter((project) =>
				project.labels.includes(selectedCategory)
			);
		}

		// Search filter
		if (searchTerm) {
			const searchRegex = new RegExp(searchTerm, "i");
			filtered = filtered.filter(
				(project) =>
					project.title.match(searchRegex) ||
					project.tags.some((tag) => tag.match(searchRegex)) ||
					project.labels.some((label) => label.match(searchRegex))
			);
		}

		return filtered;
	};

	const filteredProjects = filterProjects(projectsData);

	const handleProjectClick = (project) => {
		setSelectedProject(project);
	};

	const closeOverlay = () => {
		setSelectedProject(null);
	};

	return (
		<div className="min-h-screen bg-gradient-to-b from-purple-50 to-white text-gray-800 font-inter">
			<title>Marcus Lam - Portfolio</title>
			<div className="border-b-4 border-purple-300/40">
				<Header />
			</div>

			{/* Navigation Bar with Search */}
			<nav className="flex flex-col sm:flex-row justify-between items-center bg-gradient-to-r from-purple-500/10 to-purple-600/5 backdrop-blur-sm py-4 sm:py-6 px-4 sm:px-36 shadow-sm mx-auto gap-4 sm:gap-0">
				<div className="flex flex-wrap justify-center sm:justify-start gap-2 w-full sm:w-auto">
					{["All", "Data Science", "Robotics", "Web Development"].map(
						(category) => (
							<button
								key={category}
								onClick={() => setSelectedCategory(category)}
								className={`px-4 sm:px-6 py-2 rounded-md transition-all duration-200 text-sm sm:text-base ${
									selectedCategory === category
										? "bg-gradient-to-r from-purple-600 to-purple-800 text-white shadow-md"
										: "bg-white/80 text-gray-700 border border-purple-100 hover:border-purple-300 hover:bg-purple-50"
								}`}
							>
								{category}
							</button>
						)
					)}
				</div>

				<div className="relative flex items-center w-full sm:w-auto justify-end">
					<div
						className={`flex items-center transition-all duration-300 ${
							isSearchExpanded ? "w-full sm:w-64" : "w-10"
						}`}
					>
						<button
							onClick={() =>
								setIsSearchExpanded(!isSearchExpanded)
							}
							className="absolute right-0 p-2 text-purple-600 hover:text-purple-800 transition-colors z-10"
						>
							<Search size={24} />
						</button>
						<input
							type="text"
							placeholder="Search projects..."
							value={searchTerm}
							onChange={(e) => setSearchTerm(e.target.value)}
							className={`w-full py-2 px-4 pr-10 rounded-full border border-purple-100 focus:outline-none focus:border-purple-300 transition-all duration-300 text-sm sm:text-base ${
								isSearchExpanded
									? "opacity-100"
									: "opacity-0 w-0 p-0"
							}`}
							style={{
								pointerEvents: isSearchExpanded
									? "auto"
									: "none",
							}}
						/>
					</div>
				</div>
			</nav>

			{/* Projects Section */}
			<main className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-10">
				<h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent mb-4">
					My Projects
				</h1>

				{filteredProjects.length > 0 ? (
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
						{filteredProjects.map((project, index) => (
							<div
								key={index}
								className="p-4 sm:p-6 rounded-lg shadow-md bg-white/80 backdrop-blur-sm border border-purple-100/20 hover:shadow-lg transition-all duration-200 hover:-translate-y-1 cursor-pointer"
								onClick={() => handleProjectClick(project)}
							>
								<h3 className="text-lg sm:text-xl font-semibold text-gray-800">
									{project.title}
								</h3>
								<p className="mt-2 text-sm text-gray-600">
									{project.shortDescription}
								</p>
								{/* Project Image */}
								<img
									src={project.image}
									alt={project.title}
									className="w-full h-48 object-cover rounded-lg my-4"
								/>
								<div className="mt-3 flex flex-wrap gap-2">
									{project.labels.map((label) => (
										<span
											key={label}
											className="px-2 sm:px-3 py-1 text-xs sm:text-sm rounded-full bg-purple-100 text-purple-700"
										>
											{label}
										</span>
									))}
								</div>
								<div className="mt-3 flex flex-wrap gap-1.5">
									{project.tags.map((tag) => (
										<span
											key={tag}
											className="px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-600"
										>
											{tag}
										</span>
									))}
								</div>
							</div>
						))}
					</div>
				) : (
					<p className="text-center text-gray-600 text-base sm:text-lg">
						No projects found.
					</p>
				)}
			</main>

			{/* Full content overlay */}
			{selectedProject && (
				<div
					className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center p-4 z-50"
					onClick={closeOverlay}
				>
					<div
						className="bg-white rounded-lg shadow-lg p-4 sm:p-6 max-w-5xl w-full max-h-[90vh] overflow-y-auto"
						onClick={(e) => e.stopPropagation()}
					>
						<h2 className="text-xl sm:text-2xl font-bold mb-4">
							{selectedProject.title}
						</h2>
						<div className="prose prose-sm sm:prose max-w-none">
							{selectedProject.fullContent}
						</div>
						<button
							className="mt-4 px-4 py-2 bg-purple-600 text-white rounded-md text-sm sm:text-base"
							onClick={closeOverlay}
						>
							Close
						</button>
					</div>
				</div>
			)}
		</div>
	);
}

export default ProjectsPage;
