const newsData = [
    {
      id: 1,
      title: "Breaking News: AI Breakthrough in Healthcare",
      shortDescription: "Researchers have developed a new AI model that can diagnose diseases with 99% accuracy.",
      tags: ["AI", "Healthcare", "Technology"],
      fullContent: (
        <div>
          <p>
            In a groundbreaking development, researchers have created an AI model capable of diagnosing diseases with unprecedented accuracy. This innovation is expected to revolutionize the healthcare industry.
          </p>
          <img src="/images/ai-healthcare.jpg" alt="AI in Healthcare" className="w-full my-4 rounded-lg" />
          <section>
            <h4 className="font-semibold mt-4">Key Highlights</h4>
            <ul className="list-disc ml-6">
              <li>99% accuracy in disease diagnosis.</li>
              <li>Reduces diagnosis time by 80%.</li>
              <li>Potential to save millions of lives annually.</li>
            </ul>
          </section>
        </div>
      ),
    },
    {
      id: 2,
      title: "New Renewable Energy Source Discovered",
      shortDescription: "Scientists have discovered a new renewable energy source that could replace fossil fuels.",
      tags: ["Renewable Energy", "Environment", "Science"],
      fullContent: (
        <div>
          <p>
            A team of scientists has discovered a new renewable energy source that could potentially replace fossil fuels. This discovery could significantly reduce global carbon emissions.
          </p>
          <img src="/images/renewable-energy.jpg" alt="Renewable Energy" className="w-full my-4 rounded-lg" />
          <section>
            <h4 className="font-semibold mt-4">Key Highlights</h4>
            <ul className="list-disc ml-6">
              <li>100% renewable and sustainable.</li>
              <li>No harmful emissions.</li>
              <li>Cost-effective compared to fossil fuels.</li>
            </ul>
          </section>
        </div>
      ),
    },
    // Add more news articles here
  ];
  export default newsData;