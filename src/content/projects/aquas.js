import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { solarizedlight } from "react-syntax-highlighter/dist/esm/styles/prism";

const aquasProject = {
	title: "Leading CSI AQUAS",
	shortDescription:
		"Autonomous Harmful Algal Bloom (HAB) Detection and Eradication Robot that won an $11K grant, working with NASA, NYC, and international governments.",
	tags: [
		"CAD",
		"Electronics",
		"Autonomous",
		"Arduino",
		"Environment",
		"Linux",
		"Go",
	],
	image: "./images/aquas/aquas-thumbnail.JPG",
	labels: ["Robotics", "Web Development"],
	fullContent: (
		<div>
			<section>
				<img
					src="./images/aquas/aquasBoat.JPG"
					alt="Boat"
					className="w-6/12"
				/>
				<h3 className="font-semibold mt-4">Premise</h3>
				<ul className="list-disc ml-6">
					<li>
						Design a mass-manufacturable aquatic robot/boat that
						collects environmental data, collect water samples, and
						disperse research algecide to defeat HABs.
					</li>
					<li>
						Working alongside Dr. Joaqium Goes and the{" "}
						<a
							href="https://www.thegoes-gomeslab.org/"
							target="_blank"
							rel="noopener noreferrer"
							className="text-teal-600 hover:text-teal-700 underline decoration-teal-300 hover:decoration-teal-500 transition-colors"
						>
							Goes-Gomes lab
						</a>{" "}
						to further their algecide by evaluating evaluate the
						efficacy of their experimental algecide treatments.
					</li>
				</ul>
				<h3 className="font-semibold mt-4">Responsibilities</h3>
				<ul className="list-disc ml-6">
					<li>
						Make high-level design choices for the robot to fulfill
						overarching goals by considering the flow of data
						channels. Design tasks and specs for hardware, software,
						and electronics teams to test and integrate.{" "}
					</li>
					<li>
						Coordinate with vehicle design team to implement
						internal electronics and instruments mounted outside the
						vehicle given their space constraints.{" "}
					</li>
					<li>
						Lead recruitment and training of new members on
						hardware, software, and electronics fundamentals. Manage
						and track weekly tasks.{" "}
					</li>
				</ul>
				<h3 className="font-semibold mt-4">Outcomes</h3>
				<ul className="list-disc ml-6">
					<li>
						Designed on-board high-voltage and low-voltage
						electronics, including the RC transceiver, environmental
						sensor array, motor control, water dispersal pumps, and
						safety components like a kill-switch, fuse box, and
						water-leakage sensors.{" "}
					</li>
					<li>
						Lead the implementation of an environmental data
						collection pipeline to collect and send data to a
						research database via a sensor buoy.{" "}
					</li>
					<li>
						Designed the sensor reading database schema according to
						our research PI's specifications and implemented in
						mySQL.{" "}
					</li>
					<li>
						CADed various components of the boat including a sensor
						buoy and height-adjustable bilge pump mounting clamps.{" "}
					</li>
				</ul>
				<h3 className="font-semibold mt-4">Technologies Used</h3>
				<div className="mt-3 flex flex-wrap gap-1.5">
					<span className="px-2 py-1 text-s rounded-full bg-gray-100 text-gray-600">
						EasyEDA
					</span>
					<span className="px-2 py-1 text-s rounded-full bg-gray-100 text-gray-600">
						Fusion360
					</span>
					<span className="px-2 py-1 text-s rounded-full bg-gray-100 text-gray-600">
						Go
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
				<img
					src="./images//aquas/aquasBD.png"
					alt="Block Diagram"
					className="w-7/12"
				/>
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
						<tr className="hover:bg-teal-50 transition-colors">
							<td className="px-6 py-4 text-sm text-gray-600 border-b border-gray-400">
								Control flexibility
							</td>
							<td className="px-6 py-4 text-sm text-gray-600 border-b border-gray-400">
								Implementing both manual control through RC for
								testing and autonomous control through a flight
								controller for research missions.
							</td>
						</tr>

						{/* Row 2 */}
						<tr className="hover:bg-teal-50 transition-colors">
							<td className="px-6 py-4 text-sm text-gray-600 border-b border-gray-400">
								Data durability
							</td>
							<td className="px-6 py-4 text-sm text-gray-600 border-b border-gray-400">
								Onboard data storage combined with continual
								wireless transmission to research database to
								ensure data is not lost.
							</td>
						</tr>

						{/* Row 3 */}
						<tr className="hover:bg-teal-50 transition-colors">
							<td className="px-6 py-4 text-sm text-gray-600 border-b border-gray-400">
								Mass manufacturable
							</td>
							<td className="px-6 py-4 text-sm text-gray-600 border-b border-gray-400">
								Maximize usage of off-the-shelf parts,
								3D-printed components, and easily programmable
								components to reduce cost and complexity (e.g.
								consumer RC and FPV components,
								microcontrollers, brushed DC motors).
							</td>
						</tr>
					</tbody>
				</table>
			</section>
			<section>
				<h2 className="font-bold mt-4 text-xl">Electronic systems</h2>
				<img
					src="./images/aquas/aquasSchematicF24.png"
					alt="Circuit Diagram"
					className="w-7/12"
				/>
				<ul className="list-disc ml-6">
					<li>
						A common 14V power source powers the high-voltage motors
						and pumps, while a step-down module routes power to the
						low-voltage control system
					</li>
					<li>
						Arduino, Atlas Scientific EZO sensor array, PWM motor
						controllers, nifty pre-processing of receiver signals.
					</li>
				</ul>
				<SyntaxHighlighter
					language="cpp"
					style={solarizedlight} // You can change this to any Prism.js theme
					customStyle={{
						padding: "1rem",
						borderRadius: "0.5rem",
						background: "#f5f2f0",
						fontSize: "0.8rem",
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
				<strong>Debugging and testing: </strong>
				<ul className="list-disc ml-6">
					<li>
						Used a soldered breakout board with hotswap electronics
						for modularity but encountered shorts from water
						leakage, motor jams, and faulty wiring.
					</li>
					<li>
						Replaced the breakout board with a fusebox and
						benchmarked max current draw to select a suitable
						stepdown module.
					</li>
					<li>
						Created a testing checklist with test circuits and
						multimeter readings to ensure all components were
						functional before deployment.
					</li>
				</ul>
			</section>
			<section>
				<h2 className="font-bold mt-4 text-xl">
					Environmental Data Backend
				</h2>
				<p>
					Arduino reads incoming sensor data, RasPi reads this data
					through serial port, then sends data to remote server via 4G
					shield.
				</p>
				<SyntaxHighlighter
					language="go"
					style={solarizedlight} // You can change this to any Prism.js theme
					customStyle={{
						padding: "1rem",
						borderRadius: "0.5rem",
						background: "#f5f2f0",
						fontSize: "0.8rem",
					}}
				>
					{`var queue [10]DataRow
var RWmutex *sync.RWMutex

func SetQueue(db *sql.DB) {
    RWmutex.Lock()
    defer RWmutex.Unlock()
    rows, err := db.Query("select * from AQUAS1 order by timestamp desc limit 10")
    if err != nil {
        return
    }
    index := 0
    for rows.Next() && index < 10 {
        var timestamp int64
        rows.Scan(&timestamp, &queue[index].Temp, &queue[index].Ph, &queue[index].Sal)
        myDate := time.Unix(timestamp, 0)
        queue[index].Time = myDate.Format(time.UnixDate)
        index++
    }
}

func GetQueue() [10]DataRow {
    RWmutex.RLock()
    defer RWmutex.RUnlock()
    return queue
}`}
				</SyntaxHighlighter>
				<ul className="list-disc ml-6">
					<li>
						Read-Write Mutex to protect a shared resource: the queue
						array, which stores the 10 most recent rows of sensor
						data.
					</li>
					<li>
						Ensure no inconsistent reading of the incoming data -
						lock until current write is complete{" "}
					</li>
					<li>
						Store data via SQL DB, read and displayed in frontend.
					</li>
				</ul>
			</section>
			<section>
				<h2 className="font-bold mt-4 text-xl">CAD Components</h2>
				<img
					src="./images//aquas/aquasPumpCad.png"
					alt="Pump Clamps"
					className="w-7/12"
				/>
				<ul className="list-disc ml-6">
					<li>Adjustable height mount for dispersal pumps.</li>
					<li>
						Heat inserts for screws, CADded using subtraction of
						pump model.
					</li>
				</ul>
			</section>
			<br></br>
			<h2 className="font-bold mt-4 text-xl">
				Full technical documentation:{" "}
				<a
					href="https://drive.google.com/drive/folders/1ryR1xIvl53I18dHhbSsgC-XQLU9zjmJD?usp=sharing"
					target="_blank"
					rel="noopener noreferrer"
					className="text-teal-600 hover:text-teal-700 underline decoration-teal-300 hover:decoration-teal-500 transition-colors"
				>
					Link
				</a>
			</h2>
		</div>
	),
};

export default aquasProject;
