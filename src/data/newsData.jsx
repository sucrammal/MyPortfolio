const newsData = [
    {
      id: 1,
      title: "Winter 2024 Update",
      shortDescription: "New porfolio site, building Geochain, improving engineering documentation",
      tags: ["Engineering", "Technology"],
      fullContent: (
        <div>
          <section>
            <h4 className="font-semibold mt-4">Key Highlights</h4>
            <ul className="list-disc ml-6">
              <li>Ported the portfolio! </li>
              <li>Geochain: Geography hot-potato game. </li>
              <li>Improving engineering docs for MechE and EE teams. </li>
            </ul>
          </section>
          <br></br>
          <p>
            1. Geochain was a small side project with my friend Linh to explore Web Sockets. To be honest, it was a little hard to motivate myself to work on it while catching up with my family, but I'm glad we got it done! I dove head first into her webdev stack with no previous experience, and got a childhood game ported to an online format. Check the project entry out. 
            <br></br>
            <br></br>
            2. After picking up the basic MERN stack, I quickly ported my portfolio site to React. Lots of entries to type up and update!
            <br></br>
            <br></br>
            3. I've been thinking a lot about how to improve engineering documentation - especially in cross-functional teams that use complex hardware and electronic design tools and processes which are much harder to centrally document and visualize changes. I asked a couple of my student engineering intern friends, and reached out to a couple of PMs in robotics and biotech to get a better gauge on any current frustrations in the space. I came across the startup {" "}
            
            <a
                href="https://www.firstresonance.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 hover:text-teal-700 underline decoration-teal-300 hover:decoration-teal-500 transition-colors"
              >
              First Resonance 
          </a>
          {" "} and their product that focuses on manufacturing and production workflows and management. I'm gonna keep researching and interviewing to see if there's a gap in the market that I can fill. Even if nothing comes out of this, I'd love to build a tool for engineering clubs (thinking about my FIRST robotics team and many others alike) to streamline their documentation process - because gosh its a pain!
          </p>
        </div>
      ),
    }
  ];
  export default newsData;