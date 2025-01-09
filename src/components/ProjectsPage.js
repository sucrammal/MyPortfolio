import { useState } from 'react';
import Header from "../components/Header";
import { Search } from "lucide-react";

// Example project data with custom JSX content
const projectsData = [
  {
    id: 1,
    title: "Project 1",
    shortDescription: "This is a short description of Project 1.",
    tags: ["python", "pandas", "matplotlib", "data visualization", "statistical analysis"],
    labels: ["Data Science"],
    fullContent: (
      <div>
        <p>This is the full content of Project 1.</p>
        <img src="/images/project1-image.png" alt="Project 1" className="w-full" />
        <section>
          <h4 className="font-semibold mt-4">Technologies Used</h4>
          <ul className="list-disc ml-6">
            <li>React</li>
            <li>Tailwind CSS</li>
            <li>Node.js</li>
          </ul>
        </section>
      </div>
    ),
  },
  {
    id: 2,
    title: "Project 2",
    shortDescription: "This is a short description of Project 2.",
    tags: ["python", "pandas", "matplotlib", "data visualization", "statistical analysis"],
    labels: ["Web Development"],
    fullContent: (
      <div>
        <p>This is the full content of Project 2.</p>
        <img src="/images/project2-image.png" alt="Project 2" className="w-full" />
        <section>
          <h4 className="font-semibold mt-4">Technologies Used</h4>
          <ul className="list-disc ml-6">
            <li>Python</li>
            <li>TensorFlow</li>
            <li>Django</li>
          </ul>
        </section>
      </div>
    ),
  },
  // Add more projects here
];

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
      const searchRegex = new RegExp(searchTerm, 'i');
      filtered = filtered.filter((project) =>
        project.title.match(searchRegex) ||
        project.tags.some(tag => tag.match(searchRegex)) ||
        project.labels.some(label => label.match(searchRegex))
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
      {/* Header bar */}
      <div className="border-b-4 border-purple-300/40">
        <Header />
      </div>
      {/* Navigation Bar with Search */}
      <nav className="flex justify-between items-center bg-gradient-to-r from-purple-500/10 to-purple-600/5 backdrop-blur-sm py-6 px-6 shadow-sm">
        <div className="flex flex-wrap gap-2">
          {["All", "Data Science", "Robotics", "Web Development"].map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-md transition-all duration-200 ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-purple-600 to-purple-800 text-white shadow-md"
                  : "bg-white/80 text-gray-700 border border-purple-100 hover:border-purple-300 hover:bg-purple-50"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="relative flex items-center">
          <div className={`flex items-center transition-all duration-300 ${
            isSearchExpanded ? 'w-64' : 'w-10'
          }`}>
            <button
              onClick={() => setIsSearchExpanded(!isSearchExpanded)}
              className="absolute right-0 p-2 text-purple-600 hover:text-purple-800 transition-colors z-10"
            >
              <Search size={24} />
            </button>
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={`w-full py-2 px-4 pr-10 rounded-full border border-purple-100 focus:outline-none focus:border-purple-300 transition-all duration-300 ${
                isSearchExpanded ? 'opacity-100' : 'opacity-0 w-0 p-0'
              }`}
              style={{ pointerEvents: isSearchExpanded ? 'auto' : 'none' }}
            />
          </div>
        </div>
      </nav>

      {/* Projects Section */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent mb-12">
          My Projects
        </h1>

        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="p-6 rounded-lg shadow-md bg-white/80 backdrop-blur-sm border border-purple-100/20 hover:shadow-lg transition-all duration-200 hover:-translate-y-1 cursor-pointer"
                onClick={() => handleProjectClick(project)}
              >
                <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{project.shortDescription}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.labels.map((label) => (
                    <span
                      key={label}
                      className="px-3 py-1 text-sm rounded-full bg-purple-100 text-purple-700"
                    >
                      {label}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600 text-lg">No projects found.</p>
        )}
      </main>

      {/* Full content overlay */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50"
          onClick={closeOverlay}
        >
          <div
            className="bg-white p-6 rounded-lg max-w-4xl w-full h-full overflow-y-auto"
            onClick={(e) => e.stopPropagation()} // Prevent click propagation to close overlay
          >
            <h2 className="text-2xl font-semibold">{selectedProject.title}</h2>
            <div className="mt-4">{selectedProject.fullContent}</div>
            <button
              className="mt-6 px-4 py-2 bg-gradient-to-r from-purple-600 to-purple-800 text-white rounded-md"
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