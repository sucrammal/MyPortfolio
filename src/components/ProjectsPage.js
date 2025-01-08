import { useState } from 'react';
import Header from "../components/Header";

const ProjectsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  const projects = [
    { id: 1, title: "Data Analysis with Python", labels: ["Data Science"] },
    { id: 2, title: "Portfolio Website", labels: ["Web Development"] },
    { id: 3, title: "Line Following Robot", labels: ["Robotics"] },
    { id: 4, title: "Machine Learning Model", labels: ["Data Science", "Robotics"] },
    { id: 5, title: "E-Commerce Platform", labels: ["Web Development"] },
  ];
  
  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) =>
          project.labels.includes(selectedCategory)
        );

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white text-gray-800 font-inter">
      <Header />
      
      {/* Navigation Bar */}
      <nav className="flex justify-center bg-gradient-to-r from-purple-500/10 to-purple-600/5 backdrop-blur-sm py-6 shadow-sm">
        {["All", "Data Science", "Robotics", "Web Development"].map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-2 mx-2 rounded-md transition-all duration-200 ${
              selectedCategory === category
                ? "bg-gradient-to-r from-purple-600 to-purple-800 text-white shadow-md"
                : "bg-white/80 text-gray-700 border border-purple-100 hover:border-purple-300 hover:bg-purple-50"
            }`}
          >
            {category}
          </button>
        ))}
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
                className="p-6 rounded-lg shadow-md bg-white/80 backdrop-blur-sm border border-purple-100/20 hover:shadow-lg transition-all duration-200 hover:-translate-y-1"
              >
                <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
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
    </div>
  );
};

export default ProjectsPage;