import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { solarizedlight } from "react-syntax-highlighter/dist/esm/styles/prism";

const aquasProject = {
	title: "Building AQUAS",
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
		"ESP32",
	],
	image: "/images/aquas/aquas-thumbnail.JPG",
	labels: ["Robotics", "Web Development"],
	fullContent: (
		<div>
			<section>
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
						to further their algecide by evaluating the efficacy of
						their experimental algecide treatments.
					</li>
				</ul>
			</section>

			<section>
				<h2 className="font-bold mt-4 text-xl">Overarching Design</h2>
				<img
					src="/images/aquas/aquasBD.png"
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
				<h2 className="font-bold mt-4 text-xl">V1 System</h2>
				<br></br>
				<img
					src="/images/aquas/aquasBoat_v1.JPG"
					alt="AQUAS V1 Boat"
					className="w-6/12"
				/>

				<h3 className="font-semibold mt-4">Water Sampler</h3>
				<ul className="list-disc ml-6">
					<li>
						Currently supports sampling up to 3 containers at a time
						before needing to reload. Capacity can be expanded.
					</li>
					<li>
						For our next V2 iteration, we will be trying to shrink
						the physical form factor to allow us to add more of
						these water sample modules to expand capacity.
					</li>
					<li>
						Features fuse, flip switch, and emergency stop to
						protect the circuit. All circuitry is elevated in case
						of any water leaking into the system.
					</li>
					<li>
						Fills a sample vial in less than 10 seconds. Program
						tracks when a vial is filled via optical water sensors.
					</li>
				</ul>

				<h3 className="font-semibold mt-4">Solenoid Shield</h3>
				<ul className="list-disc ml-6">
					<li>
						Includes 4 TIP120 NPN BJTs with flyback diode protection
						across the solenoid load.
					</li>
					<li>
						4 independent signal pins come from a 4-pin JST
						connection.
					</li>
				</ul>

				<h3 className="font-semibold mt-4">Sensors and Pump Shield</h3>
				<ul className="list-disc ml-6">
					<li>
						Includes one more TIP120 BJT to control the peristaltic
						pump.
					</li>
					<li>Wiring for all the water level sensors.</li>
					<li>Plugs straight into the arduino as a shield.</li>
				</ul>

				<h3 className="font-semibold mt-4">Sensor Buoy</h3>

				<div className="flex flex-col md:flex-row items-start gap-6 my-4">
					<img
						src="/images/aquas/aquas-v1-buoy-guts.JPG"
						alt="Sensor Buoy"
						className="w-full md:w-3/12 object-contain"
					/>
					<ul className="list-disc ml-6 flex-1">
						<li>SD card for saving data</li>
						<li>
							TP4056 Solar charger with cycling circuitry to
							protect the battery and keep the circuit running.
						</li>
						<li>
							ESP32 for low power consumption and future
							WiFi/wireless integration
						</li>
						<li>
							Modified the underlying EZO_I2C library to work with
							ESP32.
						</li>
						<li>
							Power cycling that switches off all sensor
							peripheries during down time, sampling only at
							custom intervals.
						</li>
						<li>
							Waterproof packaging and anchor. Weighting allows
							the buoy to stay mostly beneath the surface to
							prevent tampering and keep a low profile.
						</li>
					</ul>
				</div>

				<h4 className="font-semibold mt-4">ESP32 Sensor Buoy Code</h4>
				<SyntaxHighlighter
					language="cpp"
					style={solarizedlight}
					customStyle={{
						padding: "1rem",
						borderRadius: "0.5rem",
						background: "#f5f2f0",
						fontSize: "0.75rem",
					}}
				>
					{`

/*
 * ESP32 Sensor Buoy Operation Pattern:
 * 
 * 1. SETUP (runs once when powered on):
 *    - Initialize sequencer, SD card, ADC for turbidity sensor
 *    - Calibrate ADC, Wake up interlink channels
 *    - Initialize the sequencer, Ready to run sensor sequence
 * 
 * 2. SEQUENCER OPERATION (runs continuously):
 *    - step1: Wake sensors and send read commands
 *    - step2: Receive readings and send EC command
 *    - step3: Receive EC, read turbidity, write data, sleep sensors
 *    - sleepStep: Sleep interlink channels and go to deep sleep
 * 
 * 3. WAKE CYCLE (repeats every SLEEP_DURATION):
 *    - ESP32 wakes up from deep sleep
 *    - loop() runs sequencer again
 *    - sleepStep puts ESP32 back to deep sleep
 */

# an important sleep function I wanted to highlight that switches off unneeded peripherals to keep power consumption low.
void sleepStep() {
  Serial.println("Sleep step completed - going to deep sleep...");
  
  // Sleep sensors with proper delays
  sleepSensors();
  
  // Sleep interlink channels using RTC GPIO
  sleepInterlinkChannels();
  
  // Power off SD card to save power during sleep
  powerOffSDCard();
  
  // Disable I2C to prevent communication attempts during sleep
  Wire.end();
  
  // Force hold all RTC GPIO pins for deep sleep
  rtc_gpio_force_hold_en_all();
  
  Serial.flush();
  Serial.printf("Going to deep sleep for %llu microseconds\\n", SLEEP_DURATION);
  
  // Go to deep sleep – timer based wakeup configured in setup()
  esp_deep_sleep_start();
}`}
				</SyntaxHighlighter>

				<h3 className="font-semibold mt-4">BlueBoat</h3>
				<ul className="list-disc ml-6">
					<li>
						Slots for 8 14.4V (4 cell) LiPo batteries with charging
						capabilities
					</li>
					<li>
						Onboard 6-DOF IMU, Dual 3-DOF compasses, and Internal
						barometer
					</li>
					<li>
						RaspberryPi and Pixhawk running BlueOS and ArduRover to
						perform networking and waypoint navigation
					</li>
					<li>Connects via WiFi and base station.</li>
				</ul>

				<h4 className="font-semibold mt-4">What we did:</h4>
				<ul className="list-disc ml-6">
					<li>
						Programmed waypointing and missions so that the robot
						can autonomously patrol, stop, and sample at various
						places in the deployed body of water.
					</li>
					<li>
						PID tuning based to control the drivetrain when near
						waypoints for smooth stopping and going.
					</li>
				</ul>

				<h4 className="font-semibold mt-4">Future:</h4>
				<ul className="list-disc ml-6">
					<li>
						Integration of a LiDAR and vision system for obstacle
						detection and docking.
					</li>
				</ul>
				<h3 className="font-semibold mt-4">
					Autonomous Sampling and Patrol
				</h3>
				<video width="640" height="480" controls className="mt-4">
					<source
						src="/images/aquas/aquasAutonShortened.mp4"
						type="video/mp4"
					/>
					Your browser does not support the video tag.
				</video>
				<p className="text-sm text-gray-600 mt-2">
					Autonomous sampling collection and patrol demonstration
				</p>
			</section>

			<section>
				<h2 className="font-bold mt-4 text-xl">V0 System</h2>
				<img
					src="/images/aquas/aquasBoat_v0.JPG"
					alt="AQUAS V0 Boat"
					className="w-6/12"
				/>

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

				<h3 className="font-semibold mt-4">Electronic systems</h3>
				<img
					src="/images/aquas/aquasSchematicF24.png"
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
					style={solarizedlight}
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

				<h3 className="font-semibold mt-4">
					Environmental Data Backend
				</h3>
				<p>
					Arduino reads incoming sensor data, RasPi reads this data
					through serial port, then sends data to remote server via 4G
					shield.
				</p>
				<SyntaxHighlighter
					language="go"
					style={solarizedlight}
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

				<h3 className="font-semibold mt-4">CAD Components</h3>
				<img
					src="/images/aquas/aquasPumpCad.png"
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
