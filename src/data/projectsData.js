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
  
  export default projectsData;