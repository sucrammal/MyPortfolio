import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';

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
          <section>
            <h3 className="font-semibold mt-4">Premise</h3>
            <ul className="list-disc ml-6">
                <li>Design a mass-manufacturable aquatic robot/boat that collects environmental data, collect water samples, and disperse research algecide to defeat HABs.</li>
                <li>Working alongside Dr. Joaqium Goes and the {" "}
                <a
                  href="https://www.thegoes-gomeslab.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-600 hover:text-purple-800 underline decoration-purple-300 hover:decoration-purple-500 transition-colors"
                  >
                  Goes-Gomes lab
                </a>
                {" "}to further their algecide by evaluating evaluate the efficacy of their experimental algecide treatments.</li>
              </ul>
            <h3 className="font-semibold mt-4">Responsibilities</h3>
            <ul className="list-disc ml-6">
                <li>Make high-level design choices for the robot to fulfill overarching goals by considering the flow of data channels. </li>
                <li>Coordinate with vehicle design team to implement internal electronics and instruments mounted outside the vehicle given their space constraints. </li>
                <li>Lead recruitment and training of new members on hardware, software, and electronics fundamentals. Manage and track weekly tasks. </li>
              </ul>
            <h3 className="font-semibold mt-4">Outcomes</h3>
            <ul className="list-disc ml-6">
                <li>Designed and tested low and high voltage systems to control the dispersal pumps and drivetrain motors using an RC receiver, Arduino, and a flight controller. </li>
                <li>Lead the implementation of an environmental data collection pipeline to collect and send data to a research database.</li>
                <li>CADed various components of the boat including a sensor buoy and height-adjustable bilge pump mounting clamps. </li>
              </ul>
            <h3 className="font-semibold mt-4">Technologies Used</h3>
            <div className="mt-3 flex flex-wrap gap-1.5">
              <span className="px-2 py-1 text-s rounded-full bg-gray-100 text-gray-600">
                Go
              </span>
              <span className="px-2 py-1 text-s rounded-full bg-gray-100 text-gray-600">
                EasyEDA
              </span>
              <span className="px-2 py-1 text-s rounded-full bg-gray-100 text-gray-600">
                Fusion360
              </span>
              <span className="px-2 py-1 text-s rounded-full bg-gray-100 text-gray-600">
                Arduino
              </span>
              <span className="px-2 py-1 text-s rounded-full bg-gray-100 text-gray-600">
                Raspberry Pi
              </span>
            </div>
          </section>
          <section>
            <h2 className="font-bold mt-4 text-xl">Overarching Design</h2>
            <img src="/images/aquasBD.png" alt="Block Diagram" className="w-7/12" />
            {/* Design decision table */}
            <table className="min-w-full bg-white border border-gray-400">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-800 border-b border-gray-400">
                      Design Goal
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-800 border-b border-gray-400 w-2/3">
                      Design Choice
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/* Row 1 */}
                  <tr className="hover:bg-purple-50 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-600 border-b border-gray-400">
                      Control flexibility
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600 border-b border-gray-400">
                      Implementing both manual control through RC for testing and autonomous control through a flight controller for research missions.
                    </td>
                  </tr>

                  {/* Row 2 */}
                  <tr className="hover:bg-purple-50 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-600 border-b border-gray-400">
                      Data durability
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600 border-b border-gray-400">
                      Onboard data storage combined with continual wireless transmission to research database to ensure data is not lost.
                    </td>
                  </tr>

                  {/* Row 3 */}
                  <tr className="hover:bg-purple-50 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-600 border-b border-gray-400">
                      Mass manufacturable
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600 border-b border-gray-400">
                      Maximize usage of off-the-shelf parts, 3D-printed components, and easily programmable components to reduce cost and complexity (e.g. consumer RC and FPV components, microcontrollers, brushed DC motors).
                    </td>
                  </tr>
                </tbody>
            </table>
          </section>
          <section>
            <h2 className="font-bold mt-4 text-xl">Electronic systems</h2>
            <img src="/images/aquasSchematicF24.png" alt="Circuit Diagram" className="w-7/12" />
            <p>A common 14V power source powers the high-voltage motors and pumps, while a step-down module routes power to the low-voltage control system. The circuit takes full advantage of the arduino, which collects environmental data through the Atlas Scientific EZO shield through I2C, controls the motor controllers through PWM, and processes signals from the receiver using some nifty pre-processing after looking into its specs. 
            </p>
            <SyntaxHighlighter
                language="cpp"
                style={solarizedlight} // You can change this to any Prism.js theme
                customStyle={{
                  padding: '1rem',
                  borderRadius: '0.5rem',
                  background: '#f5f2f0',
                  fontSize: '0.8rem',
                }}
              >
                {`int readChannel(int channelInput, int minLimit, int maxLimit, int defaultValue) {
  int ch = pulseIn(channelInput, HIGH, 30000);
  if (ch < 100) return defaultValue;
  return map(ch, 1000, 2000, minLimit, maxLimit);
}

// Read the switch channel and return a boolean value
bool readSwitch(byte channelInput, bool defaultValue) {
  int intDefaultValue = (defaultValue) ? 100 : 0;
  int ch = readChannel(channelInput, 0, 100, intDefaultValue);
  return (ch > 50);
}`}
          </SyntaxHighlighter>
          <p>
            <strong>Debugging and testing: </strong>
          </p>
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