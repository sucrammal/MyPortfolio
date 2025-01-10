const projectsData = [
    {
      id: 1,
      title: "Leading CSI AQUAS",
      shortDescription: "Autonomous Harmful Algal Bloom (HAB) Detection and Eradication Robot",
      tags: ["CAD", "Electronics", "Autonomous", "Arduino", "Environment"],
      image: "/images/aquas-thumbnail.JPG",
      labels: ["Robotics"],
      fullContent: (
        <div>
          <h3 className="font-semibold mt-4">Premise</h3>
          <h3 className="font-semibold mt-4">Responsibilities</h3>
          <h3 className="font-semibold mt-4">Outcomes</h3>
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
      image: "",
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
  
  export default projectsData;