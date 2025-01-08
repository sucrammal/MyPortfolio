import { useState } from 'react';
import Header from "./Header";

const ProjectsPage = () => {
  // State for selected category
    const [selectedCategory, setSelectedCategory] = useState("All");
  
    // Project entries
    const projects = [
      { id: 1, title: "Data Analysis with Python", labels: ["Data Science"] },
      { id: 2, title: "Portfolio Website", labels: ["Web Development"] },
      { id: 3, title: "Line Following Robot", labels: ["Robotics"] },
      { id: 4, title: "Machine Learning Model", labels: ["Data Science", "Robotics"] },
      { id: 5, title: "E-Commerce Platform", labels: ["Web Development"] },
    ];
    
    // Filter projects based on selected category
    const filteredProjects =
      selectedCategory === "All"
      ? projects
      : projects.filter((project) =>
        project.labels.includes(selectedCategory)
        );

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {/* Header Section */}
      <Header />
      {/* Navigation Bar */}
      <nav className="flex justify-center bg-gray-200 py-4 shadow-inner">
        {["All", "Data Science", "Robotics", "Web Development"].map((category) => (
        <button
          key={category}
          onClick={() => setSelectedCategory(category)}
          className={`px-4 py-2 mx-2 rounded-md ${
          selectedCategory === category
            ? "bg-blue-500 text-white"
            : "bg-white text-gray-800 border"
          } hover:bg-blue-100`}
        >
          {category}
        </button>
        ))}
      </nav>
    
      {/* Projects Section */}
      <main className="p-6">
        {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="p-4 border rounded-lg shadow-sm bg-white"
          >
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="mt-2 text-sm text-gray-600">
            Labels: {project.labels.join(", ")}
            </p>
          </div>
          ))}
        </div>
        ) : (
        <p className="text-center text-gray-600">No projects found.</p>
        )}
      </main>
      </div>
  );
};

export default ProjectsPage;
