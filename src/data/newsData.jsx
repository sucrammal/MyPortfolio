const newsData = [
    {
      id: 2,
      title: "Senior Year Update - 2026",
      shortDescription: "AQUAS wins Columbia Global Impact Labs grant, Viam internship wrap-up, focusing on value-driven engineering for ag-robotics",
      tags: ["AQUAS", "Viam", "Robotics", "Internship"],
      fullContent: (
        <div>
          <section>
            <h4 className="font-semibold mt-4">Senior Year Highlights</h4>
            <ul className="list-disc ml-6">
              <li>AQUAS won a $100K Columbia Global Impact Labs grant</li>
              <li>Had an amazing internship at Viam</li>
              <li>Reflecting on value-driven engineering and joining an ag-robotics startup post-grad</li>
            </ul>
          </section>
          <br></br>
          <p>
            What a year it's been! As I head into my senior year at Columbia, I'm excited to share some major developments and reflections.
            <br></br>
            <br></br>
            <strong>AQUAS - Columbia Global Impact Labs Grant</strong>
            <br></br>
            The hard work from our team on AQUAS finally paid off! We won a $50,000 grant from Columbia Global Impact Labs to monitor and help clean more bodies of water in NYC. There's also an additional $50,000 available if we execute well on the grant's objectives. This is huge for us - it validates the work we've been doing to address harmful algal blooms and gives us the resources to scale our efforts across more water bodies in the city. The team is pumped!
            <br></br>
            <br></br>
            <strong>Viam Internship - Growth and Independence</strong>
            <br></br>
            This summer, I had an incredible internship at Viam working alongside other talented interns and team members. The experience was way more than just coding - I got to work super independently on meaningful projects, learn from exceptional engineers, and really internalize how production robotics systems work. The team environment was collaborative and supportive, and I bonded with fellow interns over shared love for robotics. Some highlights include shipping LLM-assisted robot config editing features and building a 3D motion-plan debugger that's now part of the platform. Honestly, the learning velocity and autonomy were exactly what I needed heading into my final year.
            <br></br>
            <br></br>
            <strong>Post-Grad Vision - Value-Driven Engineering</strong>
            <br></br>
            After reflecting on my experiences, I've decided to be much more intentional about what kind of problems I want to solve and who I want to build with. Rather than just optimizing for prestige or compensation, I'm focusing on:
            <br></br>
            - Working on problems that directly impact sustainability or agriculture (areas I care deeply about)
            <br></br>
            - Joining smaller teams where I can have outsized learning and impact
            <br></br>
            - Building with people who are mission-driven and collaborative
            <br></br>
            <br></br>
            I'm excited to share that I'll likely be joining an ag-robotics startup post-grad! This aligns perfectly with my passion for robotics, sustainability, and independent learning. I'm looking forward to contributing to the future of agricultural technology.
          </p>
        </div>
      ),
    },
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