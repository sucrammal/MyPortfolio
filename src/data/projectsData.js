import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { solarizedlight } from "react-syntax-highlighter/dist/esm/styles/prism";

const projectsData = [
	{
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
							collects environmental data, collect water samples,
							and disperse research algecide to defeat HABs.
						</li>
						<li>
							Working alongside Dr. Joaqium Goes and the{" "}
							<a
								href="https://www.thegoes-gomeslab.org/"
								target="_blank"
								rel="noopener noreferrer"
								className="text-purple-600 hover:text-purple-800 underline decoration-purple-300 hover:decoration-purple-500 transition-colors"
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
							Make high-level design choices for the robot to
							fulfill overarching goals by considering the flow of
							data channels. Design tasks and specs for hardware,
							software, and electronics teams to test and
							integrate.{" "}
						</li>
						<li>
							Coordinate with vehicle design team to implement
							internal electronics and instruments mounted outside
							the vehicle given their space constraints.{" "}
						</li>
						<li>
							Lead recruitment and training of new members on
							hardware, software, and electronics fundamentals.
							Manage and track weekly tasks.{" "}
						</li>
					</ul>
					<h3 className="font-semibold mt-4">Outcomes</h3>
					<ul className="list-disc ml-6">
						<li>
							Designed on-board high-voltage and low-voltage
							electronics, including the RC transceiver,
							environmental sensor array, motor control, water
							dispersal pumps, and safety components like a
							kill-switch, fuse box, and water-leakage sensors.{" "}
						</li>
						<li>
							Lead the implementation of an environmental data
							collection pipeline to collect and send data to a
							research database via a sensor buoy.{" "}
						</li>
						<li>
							Designed the sensor reading database schema
							according to our research PI's specifications and
							implemented in mySQL.{" "}
						</li>
						<li>
							CADed various components of the boat including a
							sensor buoy and height-adjustable bilge pump
							mounting clamps.{" "}
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
					<h2 className="font-bold mt-4 text-xl">
						Overarching Design
					</h2>
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
							<tr className="hover:bg-purple-50 transition-colors">
								<td className="px-6 py-4 text-sm text-gray-600 border-b border-gray-400">
									Control flexibility
								</td>
								<td className="px-6 py-4 text-sm text-gray-600 border-b border-gray-400">
									Implementing both manual control through RC
									for testing and autonomous control through a
									flight controller for research missions.
								</td>
							</tr>

							{/* Row 2 */}
							<tr className="hover:bg-purple-50 transition-colors">
								<td className="px-6 py-4 text-sm text-gray-600 border-b border-gray-400">
									Data durability
								</td>
								<td className="px-6 py-4 text-sm text-gray-600 border-b border-gray-400">
									Onboard data storage combined with continual
									wireless transmission to research database
									to ensure data is not lost.
								</td>
							</tr>

							{/* Row 3 */}
							<tr className="hover:bg-purple-50 transition-colors">
								<td className="px-6 py-4 text-sm text-gray-600 border-b border-gray-400">
									Mass manufacturable
								</td>
								<td className="px-6 py-4 text-sm text-gray-600 border-b border-gray-400">
									Maximize usage of off-the-shelf parts,
									3D-printed components, and easily
									programmable components to reduce cost and
									complexity (e.g. consumer RC and FPV
									components, microcontrollers, brushed DC
									motors).
								</td>
							</tr>
						</tbody>
					</table>
				</section>
				<section>
					<h2 className="font-bold mt-4 text-xl">
						Electronic systems
					</h2>
					<img
						src="./images/aquas/aquasSchematicF24.png"
						alt="Circuit Diagram"
						className="w-7/12"
					/>
					<ul className="list-disc ml-6">
						<li>
							A common 14V power source powers the high-voltage
							motors and pumps, while a step-down module routes
							power to the low-voltage control system
						</li>
						<li>
							Arduino, Atlas Scientific EZO sensor array, PWM
							motor controllers, nifty pre-processing of receiver
							signals.
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
							Used a soldered breakout board with hotswap
							electronics for modularity but encountered shorts
							from water leakage, motor jams, and faulty wiring.
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
						Arduino reads incoming sensor data, RasPi reads this
						data through serial port, then sends data to remote
						server via 4G shield.
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
							Read-Write Mutex to protect a shared resource: the
							queue array, which stores the 10 most recent rows of
							sensor data.
						</li>
						<li>
							Ensure no inconsistent reading of the incoming data
							- lock until current write is complete{" "}
						</li>
						<li>
							Store data via SQL DB, read and displayed in
							frontend.
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
						className="text-purple-600 hover:text-purple-800 underline decoration-purple-300 hover:decoration-purple-500 transition-colors"
					>
						Link
					</a>
				</h2>
			</div>
		),
	},
	{
		title: "OddishWater",
		shortDescription:
			"SO-100 powered by Lerobot, ACT, and GR00T to automatically tend to your garden",
		tags: [
			"Lerobot",
			"ML",
			"Teleop",
			"Web App",
			"Python",
			"ACT",
			"GR00T",
			"GPU",
		],
		image: "./images/oddishWater/oddishWaterLayout.png",
		labels: ["Robotics", "Web Development"],
		fullContent: (
			<div>
				<section>
					<video
						className="w-full rounded-lg shadow-lg oddish-video"
						controls
					>
						<source
							src="./images/oddishWater/oddishWaterDemo.mp4"
							type="video/mp4"
						/>
						Your browser does not support the video tag.
					</video>
					<h3 className="font-semibold mt-4">Premise</h3>
					<ul className="list-disc ml-6">
						<li>
							Plant care can be surprisingly tricky—especially for
							busy individuals. OddishWater aims to automate plant
							care using a robotic arm, vision, and learning.
						</li>
						<li>
							Inspired by a desire to blend sustainable living
							with robotics, the robot helps detect when plants
							need water or nutrients and takes care of them
							autonomously.
						</li>
					</ul>
					<h3 className="font-semibold mt-4">Responsibilities</h3>
					<ul className="list-disc ml-6">
						<li>
							Led data collection experiments by varying the plant
							scene and setup to build a diverse training dataset.
						</li>
						<li>
							Trained the Action Chunking Transformer (ACT) policy
							on servo-smoothed teleoperation demonstrations using
							GPU acceleration.
						</li>
						<li>
							Wrote shell scripts to launch inference via our web
							app, activating Lerobot's SO-100 arm with custom
							prompts.
						</li>
					</ul>
					<h3 className="font-semibold mt-4">
						Servo Smoothing for Better Teleop
					</h3>
					<p>
						To minimize jitter in teleoperation and generate
						smoother trajectories for training, I implemented a
						low-pass filter on the teacher arm's actions before
						applying them to the student arm:
					</p>
					<SyntaxHighlighter
						language="python"
						style={solarizedlight} // You can change this to any Prism.js theme
						customStyle={{
							padding: "1rem",
							borderRadius: "0.5rem",
							background: "#f5f2f0",
							fontSize: "0.8rem",
						}}
					>
						{`class ServoSmoother:
    def __init__(self, alpha=0.2):
        self.prev_action = None
        self.alpha = alpha

    def smooth(self, action):
        if self.prev_action is None:
            self.prev_action = action
        smoothed_action = {
            k: self.alpha * action[k] + (1 - self.alpha) * self.prev_action[k]
            for k in action
        }
        self.prev_action = smoothed_action
        return smoothed_action`}
					</SyntaxHighlighter>
					<p>
						This smoother was integrated into our control loop for
						inference and teleoperation:
					</p>
					<SyntaxHighlighter
						language="python"
						style={solarizedlight}
						customStyle={{
							padding: "1rem",
							borderRadius: "0.5rem",
							background: "#f5f2f0",
							fontSize: "0.8rem",
						}}
					>
						{`# In control_loop(...):
if teleoperate:
    observation, action = robot.teleop_step(record_data=True)
    if isinstance(action, dict) and "teacher" in action and "student" in robot.arms:
        smoothed_student_action = smoother.smooth(action["teacher"])
        action["student"] = smoothed_student_action
        robot.send_action(action)`}
					</SyntaxHighlighter>
					<h3 className="font-semibold mt-4">
						Inference Triggered by Web App
					</h3>
					<p>
						We integrated a Node.js backend with shell scripting to
						allow the web interface to initiate robotic inference
						via a button click. This executes a shell script which
						activates our trained ACT policy and executes a
						plant-care episode using Lerobot:
					</p>
					<SyntaxHighlighter
						language="typescript"
						style={solarizedlight}
						customStyle={{
							padding: "1rem",
							borderRadius: "0.5rem",
							background: "#f5f2f0",
							fontSize: "0.8rem",
						}}
					>
						{`// runInference.ts
import { exec } from "node:child_process";
import path from "node:path";

export function runInference(): Promise<string> {
  return new Promise((resolve, reject) => {
    const projectRoot = process.cwd();
    const scriptPath = path.join(projectRoot, "scripts", "run_inference.sh");
    const command = \`bash \${scriptPath}\`;

    exec(command, (error, stdout, stderr) => {
      if (error) reject(\`Error: \${error.message}\`);
      else if (stderr) resolve(stderr);
      else resolve(stdout);
    });
  });
}`}
					</SyntaxHighlighter>
					<SyntaxHighlighter
						language="bash"
						style={solarizedlight}
						customStyle={{
							padding: "1rem",
							borderRadius: "0.5rem",
							background: "#f5f2f0",
							fontSize: "0.8rem",
						}}
					>
						{`#!/bin/bash
source /Users/marcuslam/anaconda3/etc/profile.d/conda.sh
conda activate lerobot
cd lerobot

RAND_ID=$RANDOM
HF_USER="sucrammal"

python lerobot/scripts/control_robot.py \
  --robot.type=so100 \
  --control.type=record \
  --control.fps=30 \
  --control.single_task="Grasp the black cup..." \
  --control.repo_id=\${HF_USER}/eval_act_\${RAND_ID} \
  --control.tags='["tutorial"]' \
  --control.warmup_time_s=3 \
  --control.episode_time_s=30 \
  --control.reset_time_s=30 \
  --control.num_episodes=1 \
  --control.push_to_hub=false \
  --control.policy.path=outputs/train/plant_pour_data_again/checkpoints/last/pretrained_model`}
					</SyntaxHighlighter>
					<h3 className="font-semibold mt-4">Features</h3>
					<ul className="list-disc ml-6">
						<li>
							Detects plant hydration and nutrient deficiencies
							using various environmental sensors, paired with a
							ESP32 microcontroller.
						</li>
						<li>
							Performs robotic actuation via SO-100 to deliver
							care precisely.
						</li>
						<li>
							Voice command through Fish Audio API and web
							interface with live camera feed.
						</li>
						<li>
							Logs activity and plant health metrics; playful
							Oddish-themed UI.
						</li>
					</ul>
					<h3 className="font-semibold mt-4">How We Built It</h3>
					<ul className="list-disc ml-6">
						<li>
							Planned the hardware layout with camera visibility,
							lighting conditions, object placement in mind; 3D
							printed custom planters to aid sensing.
						</li>
						<li>
							Trained both ACT and GR00T models on 50+ episodes
							with trainer-student arm configuration, ultimately
							selecting ACT for its more predictable and stable
							trajectories.
						</li>
						<li>
							Used Lerobot's teleoperation and inference API to
							call the robot after training completion.
						</li>
						<li>
							Web app built to interface with robot backend and
							host voice and vision APIs.
						</li>
					</ul>
					<h3 className="font-semibold mt-4">Challenges</h3>
					<ul className="list-disc ml-6">
						<li>
							Bridging Python-based ML training scripts with a
							Node.js backend.
						</li>
						<li>
							Risk of water damaging electronics led to pivoting
							to nutrient delivery.
						</li>
						<li>
							Training generalizable policies was hard; used data
							augmentation and plant diversity to improve
							robustness.
						</li>
					</ul>
					<h3 className="font-semibold mt-4">Accomplishments</h3>
					<ul className="list-disc ml-6">
						<li>
							Successfully delivers nutrients based on plant
							health prediction with no human input.
						</li>
						<li>
							Built an integrated web app with real-time camera
							feedback and voice control.
						</li>
						<li>
							Learned end-to-end robotic system design:
							perception, policy training, deployment, and
							interface.
						</li>
					</ul>
					<h3 className="font-semibold mt-4">What's Next</h3>
					<ul className="list-disc ml-6">
						<li>
							Support for more plant types and custom care
							profiles.
						</li>
						<li>Mobile interface for remote monitoring.</li>
						<li>ML improvements for pest/disease detection.</li>
						<li>Integration with smart home systems.</li>
					</ul>
				</section>
				<h2 className="font-bold mt-4 text-xl">
					Full Github Repo here:{" "}
					<a
						href="https://github.com/alexakayman/OddishWater"
						target="_blank"
						rel="noopener noreferrer"
						className="text-purple-600 hover:text-purple-800 underline decoration-purple-300 hover:decoration-purple-500 transition-colors"
					>
						Link
					</a>
				</h2>
			</div>
		),
	},
	{
		title: "Robot Learning — MPC & Diffusion Policy",
		shortDescription:
			"Goal-conditioned MPC with learned dynamics model and a DPPM for the PushT environment.",
		tags: [
			"MPC",
			"PyTorch",
			"Diffusion",
			"Robotics",
			"Control",
			"Deep-Learning",
			"Python",
		],
		image: "./images/robotLearning/robotLearningThumbnail.png",
		labels: ["Robotics"],
		fullContent: (
			<div>
				<section>
					<video className="w-full rounded-lg shadow-lg" controls>
						<source
							src="./images/robotLearning/robotLearningPushT.mp4"
							type="video/mp4"
						/>
						Your browser does not support the video tag.
					</video>
					<h3 className="font-semibold mt-4">Premise</h3>
					<ul className="list-disc ml-6">
						<li>
							<strong>
								Goal-Conditioned Trajectory Learning
							</strong>{" "}
							— an adaptive MPC controller that searches action
							space with symmetric perturbations, tuned on-the-fly
							to the arm's degrees of freedom.
						</li>
						<li>
							<strong>Diffusion Policy for Push-T</strong> — a
							DDPM that learns a distribution over action
							sequences, generating full trajectories in one pass
							conditioned on the latest observations.
						</li>
					</ul>
					<h3 className="font-semibold mt-4">Key Responsibilities</h3>
					<ul className="list-disc ml-6">
						<li>
							Collected &amp; labelled 40k state-action samples
							across 1-, 2- &amp; 3-link arms for supervised
							dynamics learning.
						</li>
						<li>
							Designed semi-implicit update physics in{" "}
							<code>Model2Link</code> for stable rollouts at
							100-Hz.
						</li>
						<li>
							Implemented cosine-schedule DDPM with EMA &amp; FiLM
							conditioning to push blocks with 92% success on
							unseen layouts.
						</li>
					</ul>
				</section>
				<section>
					<h3 className="font-semibold mt-4">
						Adaptive MPC Search Loop
					</h3>
					<SyntaxHighlighter
						language="python"
						style={solarizedlight}
						customStyle={{
							padding: "1rem",
							borderRadius: "0.5rem",
							background: "#f5f2f0",
							fontSize: "0.8rem",
						}}
					>
						{`class MPC:
			def compute_action(self, dynamics, state, goal, prev):
				num = dynamics.get_num_links()
				self.perturb = self.perturbation_amounts[num]
				self.horizon = self.horizons[num]
				self.iters   = self.total_iterations_dict[num]
				best = prev if prev is not None else np.zeros((dynamics.get_action_dim(),1))
				for _ in range(self.iters):
					improved = False
					for i in range(num):
						a_plus, a_minus = best.copy(), best.copy()
						a_plus[i]  += np.random.uniform( 0, self.perturb)
						a_minus[i] += np.random.uniform(-self.perturb, 0)
						costs = [self.rollout(dynamics, state, goal, a, num)[0] for a in (best,a_plus,a_minus)]
						best_idx = int(np.argmin(costs))
						if best_idx: best, improved = (a_plus,a_minus)[best_idx-1], True
					if not improved:
						self.perturb *= self.perturbation_decay
				return best`}
					</SyntaxHighlighter>
					<p className="mt-2">
						<em>Why it matters:</em> Automatically adapts
						exploration scale, horizon &amp; iteration budget to
						robot DOF, finding low-torque solutions in &lt;40-ms per
						action.
					</p>
					<h3 className="font-semibold mt-4">
						Trajectory Generation to train dynamics model
					</h3>
					<SyntaxHighlighter
						language="python"
						style={solarizedlight}
						customStyle={{
							padding: "1rem",
							borderRadius: "0.5rem",
							background: "#f5f2f0",
							fontSize: "0.8rem",
						}}
					>
						{`def collect_data(arm_teacher):
	...
    for i in range(num_samples):
        arm_teacher.reset() # reset back to resting
        # Sample random goal state
        goal_radius = np.random.uniform(0.05, 1.95)  # Between 0.05 and 1.95 link lengths
        goal_angle = np.random.uniform(-math.pi, 0)  # Between 0 and -π
        goal = np.array([[goal_radius * np.cos(goal_angle)],
                         [goal_radius * np.sin(goal_angle)]])
        # Start with some initial random action to kick off the MPC.
        action = np.random.rand(arm_teacher.dynamics.get_action_dim(), 1)

        print(f" Trial {i} with goal: {goal.flatten()}")

        for s in range(nsteps):
            # Every control_horizon, use MPC to compute an optimal trajectory. If not, apply the same action
            if s % controller.control_horizon==0:
                # Get initial state of the arm
                state = arm_teacher.get_state()
                # Compute end-effector position and velocity
                pos_ee = arm_teacher.dynamics.compute_fk(state)
                vel_ee = np.linalg.norm(arm_teacher.dynamics.compute_vel_ee(state))
                # Check stopping condition
                dist_to_goal = np.linalg.norm(pos_ee - goal)
                # Compute action using MPC
                action = controller.compute_action(arm_teacher.dynamics, state, goal, action)

            arm_teacher.set_action(action)

            if dist_to_goal < dist_thres and vel_ee < vel_thres:
                print(f"Stopping early at step {s+1}, goal reached!\n")
                break  # Stop early if goal is reached


            state = arm_teacher.get_state()  # Update state for next step
            # Store state-action pair
            X_list.append(np.hstack((state.flatten(), action.flatten())))

            # Advance the system and get new state
            arm_teacher.advance()
            next_state = arm_teacher.get_state()
            Y_list.append(next_state.flatten())

            # update the state
            state = next_state

        pos_ee = arm_teacher.dynamics.compute_fk(state)
        print(f"After trial {i}, reached {pos_ee}")


    # Convert lists to NumPy arrays
    X = np.array(X_list)
    Y = np.array(Y_list)

    return X, Y`}
					</SyntaxHighlighter>
					<ul className="list-disc ml-6">
						<li>
							Generate initial states and torques, collects
							state-action pairs (X) and next states (Y) for
							dynamics learning, using MPC incrementally to refine
							trajectories.
						</li>
						<li>
							Implements early stopping when goal is reached
							within distance and velocity thresholds
						</li>
						<li>Using this data, train an MLP forward model.</li>
					</ul>
				</section>
				<section>
					<h3 className="font-semibold mt-4">
						Cosine beta noise-scheduler
					</h3>
					<SyntaxHighlighter
						language="python"
						style={solarizedlight}
						customStyle={{
							padding: "1rem",
							borderRadius: "0.5rem",
							background: "#f5f2f0",
							fontSize: "0.8rem",
						}}
					>
						{`def cosine_beta_schedule(T: int, s: float = 0.008) -> torch.Tensor:
    """
    Cosine schedule from Nichol & Dhariwal (2021).
    Produces low variance early, high variance late.
    """
    # f(k)  ▸ cumulative signal-to-noise ratio
    f = np.cos(((np.linspace(0, T, T + 1) / T + s) / (1 + s))
               * np.pi / 2) ** 2       # (T+1,)
    alpha_bar = f / f[0]               # normalise so α̅₀ = 1
    betas = 1.0 - alpha_bar[1:] / alpha_bar[:-1]
    return torch.tensor(np.clip(betas, 0, 0.999), dtype=torch.float32)`}
					</SyntaxHighlighter>
					<ul className="list-disc ml-6">
						<li>
							Implements the exact closed-form schedule in nine
							lines—no loops, single NumPy call.
						</li>
						<li>
							Gives smoother learning: early timesteps keep more
							signal (small β), later timesteps add more noise,
							which the policy finds easier to model than a linear
							schedule.
						</li>
					</ul>
					<h3 className="font-semibold mt-4">
						Diffuse and denoise steps
					</h3>
					<SyntaxHighlighter
						language="python"
						style={solarizedlight}
						customStyle={{
							padding: "1rem",
							borderRadius: "0.5rem",
							background: "#f5f2f0",
							fontSize: "0.8rem",
						}}
					>
						{`def diffuse(self, a_start, k, noise):
    """
    Create noisy sample a_k from clean action a_0 at timestep k.
    """
    # α̅ₖ — cumulative product of alphas at step k
    alpha_bar_k = self.alpha_k_cumprod[k]\
        .to(a_start.dtype).view(-1, *[1]*(a_start.dim()-1))

    # √ α̅ₖ  · a₀  +  √(1-α̅ₖ) · ε
    return (alpha_bar_k.sqrt() * a_start +
            (1.0 - alpha_bar_k).sqrt() * noise)

			def denoise(self, eps_hat, k, a_k):
    """
    Predict a_{k-1} from noisy a_k and estimated noise ε̂.
    """
    beta   = self.beta_k[k].view(-1, *[1]*(a_k.dim()-1))
    alpha  = self.alpha_k[k].view(-1, *[1]*(a_k.dim()-1))
    alpha_bar     = self.alpha_k_cumprod[k]    .view_as(beta)
    alpha_bar_prev= self.alpha_k_cumprod_prev[k].view_as(beta)

    # μₖ = (1/√αₖ) (a_k - (βₖ / √(1-α̅ₖ)) ε̂)
    mu = (a_k - (beta / (1 - alpha_bar).sqrt()) * eps_hat) / alpha.sqrt()

    # σ²ₖ = βₖ (1-α̅ₖ₋₁) / (1-α̅ₖ)
    var = beta * (1 - alpha_bar_prev) / (1 - alpha_bar)

    noise = torch.randn_like(a_k) * var.clamp(min=1e-20).sqrt() if k > 0 else 0
    return mu + noise
`}
					</SyntaxHighlighter>
					<ul className="list-disc ml-6">
						<li>
							Diffuse: adds Gaussian noise with variance scheduled
							by α̅ₖ. A clean separation between coefficients and
							shapes keeps it batch-agnostic and vectorised
						</li>
						<li>
							Denoise: Implements the exact posterior mean
							&variance from DDPM theory, so every reverse step is
							fully probabilistic—no heuristic tweaks needed
						</li>
					</ul>
					<h3 className="font-semibold mt-4">
						Training loop with EMA, FiLM conditioning, and Cosine LR
					</h3>
					<SyntaxHighlighter
						language="python"
						style={solarizedlight}
						customStyle={{
							padding: "1rem",
							borderRadius: "0.5rem",
							background: "#f5f2f0",
							fontSize: "0.8rem",
						}}
					>
						{`ema = EMAModel(noise_pred_net.parameters(), power=0.75)
opt = torch.optim.AdamW(noise_pred_net.parameters(), lr=3e-4, weight_decay=1e-6)
sched = get_cosine_schedule_with_warmup(
    optimizer=opt,
    num_warmup_steps=50,
    num_training_steps=len(loader) * num_epochs,
)

for epoch in range(num_epochs):
    losses = []
    for batch in loader:                          # (B, obs, act)
        nobs   = batch['obs'].to(device)
        naction= batch['action'].to(device)
        B = nobs.size(0)

        # sample random timestep & target noise
        k = torch.randint(0, T, (B,), device=device)
        eps = torch.randn_like(naction)
        ak  = ddpm.diffuse(naction, k, eps)       # forward process

        # predict ε̂ and compute loss
        eps_hat = noise_pred_net(ak, k, nobs.flatten(1))
        loss = F.mse_loss(eps_hat, eps)

        loss.backward()
        opt.step();  opt.zero_grad()
        sched.step();                # cosine LR per *batch*
        ema.step(noise_pred_net.parameters())

        losses.append(loss.item())

    print(f\"Epoch {epoch:02d}  |  loss = {np.mean(losses):.4f}\")
`}
					</SyntaxHighlighter>
					<ul className="list-disc ml-6">
						<li>
							Uses EMA to track the moving average of the model
							parameters, which helps stabilize the training
							process.
						</li>
						<li>
							Uses FiLM conditioning (through nobs, the last 2
							observations)to inject the observation into the
							noise prediction network (global_cond vector is
							pushed through an MLP that outputs a pair of scale y
							and shift β values for each residual block), which
							helps the model learn better.
						</li>
					</ul>
				</section>
				<h2 className="font-bold mt-4 text-xl">
					Full Github Repo here:{" "}
					<a
						href="https://github.com/sucrammal/robotLearning"
						target="_blank"
						rel="noopener noreferrer"
						className="text-purple-600 hover:text-purple-800 underline decoration-purple-300 hover:decoration-purple-500 transition-colors"
					>
						Link
					</a>
				</h2>
			</div>
		),
	},
	{
		title: "ROAM Lab MyHandSCI",
		shortDescription:
			"Orthosis for stroke and spinal cord injury patients.",
		tags: [
			"ML",
			"python",
			"pandas",
			"matplotlib",
			"data visualization",
			"stats",
			"signals",
			"CAD",
		],
		image: "./images/ROAM/roamMyHandThumbnail.png",
		labels: ["Robotics", "Data Science"],
		fullContent: (
			<div>
				<section>
					<div className="flex sm:flex-row flex-col items-center">
						<img
							src="./images/ROAM/roamMyHand.png"
							alt="PSD_Chart"
							className="w-6/12"
						/>
						<img
							src="./images/ROAM/roamPSD.png"
							alt="PSD_Chart"
							className="w-6/12"
						/>
					</div>
					<h3 className="font-semibold mt-4">Premise</h3>
					<ul className="list-disc ml-6">
						<li>
							Help design improvements to the hardware and control
							software of the MyHandSCI, an assistive orthosis for
							spinal cord injury and stroke patients as a research
							assistant.
						</li>
					</ul>
					<h3 className="font-semibold mt-4">Responsibilities</h3>
					<ul className="list-disc ml-6">
						<li>
							Prototype and propose an original hardware
							modification to improve orthosis user experience.{" "}
						</li>
						<li>
							Help improve activation algorithm behind controlling
							the orthosis.
						</li>
						<li>
							Read up on provided studies and concepts from PIs,
							and discuss research in weekly check-ins.{" "}
						</li>
					</ul>
					<h3 className="font-semibold mt-4">Outcomes</h3>
					<ul className="list-disc ml-6">
						<li>
							Performed signal decomposition (Fast Fourier
							Transform) to analyze stroke patient EMG data
							patterns, applying MSE, cosine similarity, and
							averaging to distinguish patient actions, such as
							opening and closing a grasp, to control an orthosis.{" "}
						</li>
						<li>
							Used t-SNE and k-nearest neighbours to classify
							live, incoming EMG data for the patient as open,
							close, or relax signals.
						</li>
						<li>
							Computed power spectral densities and median
							frequency to identify downshifts in frequency,
							indicating fatigue.
						</li>
						<li>
							Designed a variable-radius pulley system that allows
							for customizable cable tensioning and retraction
							lengths to suit patient's liking.{" "}
						</li>
					</ul>
					<h3 className="font-semibold mt-4">Technologies Used</h3>
					<div className="mt-3 flex flex-wrap gap-1.5">
						<span className="px-2 py-1 text-s rounded-full bg-gray-100 text-gray-600">
							Python
						</span>
						<span className="px-2 py-1 text-s rounded-full bg-gray-100 text-gray-600">
							SciPy
						</span>
						<span className="px-2 py-1 text-s rounded-full bg-gray-100 text-gray-600">
							NumPy
						</span>
						<span className="px-2 py-1 text-s rounded-full bg-gray-100 text-gray-600">
							Pandas
						</span>
						<span className="px-2 py-1 text-s rounded-full bg-gray-100 text-gray-600">
							Matplotlib
						</span>
						<span className="px-2 py-1 text-s rounded-full bg-gray-100 text-gray-600">
							Onshape
						</span>
					</div>
				</section>
				<section>
					<h2 className="font-bold mt-4 text-xl">
						Analyzing EMG Frequency Domains
					</h2>
					<strong> Signal decomposition: </strong>
					<SyntaxHighlighter
						language="python"
						style={solarizedlight} // You can change this to any Prism.js theme
						customStyle={{
							padding: "1rem",
							borderRadius: "0.5rem",
							background: "#f5f2f0",
							fontSize: "0.8rem",
						}}
					>
						{`def preprocess(time, emg, sampling_rate):
    # First pass: round each time step to the nearest 1/sampling_rate. Ensure that there are no samples that 
    # have erroneous time steps that are too precise given sampling rate. 
    time = pd.to_numeric(time, errors='coerce').fillna(0)
    emg = pd.to_numeric(emg, errors='coerce').fillna(0)
    
    time = np.round(time*sampling_rate) / sampling_rate
    
    # Repackage
    time_domain = pd.DataFrame({"time_elapsed": time, 'emg': emg})
    
    cleaned_time_domain = time_domain.groupby("time_elapsed", as_index = False).mean()
    
    time_cleaned = cleaned_time_domain["time_elapsed"]
    emg_cleaned = cleaned_time_domain["emg"]
    
    return time_cleaned, emg_cleaned

def decompose(time, emg, sampling_rate):
    time_cleaned, emg_cleaned = preprocess(time, emg, sampling_rate) 
    time_cleaned = np.asarray(time_cleaned)
    emg_cleaned = np.asarray(emg_cleaned)
    
    # Perform FFT on the EMG signal
    emg_FFT = fft(emg_cleaned)
    
    # Calculate the number of samples and the spacing between them
    samples = len(time_cleaned)
    
    # Compute frequency bins based on the Nyquist frequency
    time_step = time_cleaned[1] - time_cleaned[0]
    frequency_bins = fftfreq(samples, time_step)
    
    positive_frequencies = frequency_bins[:samples // 2]
    positive_amplitudes = (2 / samples) * np.abs(emg_FFT[:samples // 2])  # Normalize and take magnitude
    
    return positive_frequencies, positive_amplitudes`}
					</SyntaxHighlighter>
					<ul className="list-disc ml-6">
						<li>
							Despite inconsistent or jittery sampling, preprocess
							data to fit ideal sampling frequency.{" "}
						</li>
						<li>
							Ensures the FFT will output frequencies up to half
							of Nyquist.{" "}
						</li>
					</ul>
					<br></br>
					<strong> Separating ground truth (GT) bins: </strong>
					<SyntaxHighlighter
						language="python"
						style={solarizedlight} // You can change this to any Prism.js theme
						customStyle={{
							padding: "1rem",
							borderRadius: "0.5rem",
							background: "#f5f2f0",
							fontSize: "0.8rem",
						}}
					>
						{`def separate_gt_bins(dataset): 
    relax_sets = []
    open_sets = []
    close_sets = []
    
    current_gt = dataset.iloc[0]['gt']
    new_columns = dataset.columns.tolist()
    current_set = pd.DataFrame(columns = new_columns) 
    
    for index, row in tqdm(dataset.iterrows(), desc="separating bins"):
        if (row.loc['gt'] == current_gt):
            current_set = pd.concat([current_set, row.to_frame().T], ignore_index=True)
        else:
            # add a buffer to not add the "transition" noise. 
            if (current_gt == 0): 
                relax_sets.append(current_set)
            elif (current_gt == 1):
                open_sets.append(current_set)
            elif (current_gt == 2):
                close_sets.append(current_set)
            current_gt = row.loc['gt']
            current_set = pd.DataFrame(columns = new_columns) 
    
    return relax_sets, open_sets, close_sets`}
					</SyntaxHighlighter>
					<ul className="list-disc ml-6">
						<li>
							Patient EMG data was collected by having the patient
							perform a sequence of relaxes, opens, and closes,
							creating labeled signal data to train the orthosis
							activation classifier.
						</li>
						<li>
							Separates the time domain into these different
							actions using windowing, then decompose.{" "}
						</li>
					</ul>
					<br></br>
					<strong>
						{" "}
						PSD and mean frequency, benchmarking fatigue:{" "}
					</strong>
					<SyntaxHighlighter
						language="python"
						style={solarizedlight} // You can change this to any Prism.js theme
						customStyle={{
							padding: "1rem",
							borderRadius: "0.5rem",
							background: "#f5f2f0",
							fontSize: "0.8rem",
						}}
					>
						{`def plot_psd_with_mean(frequency_bins, psd_value, title, x_lower, x_upper, y_lower, y_upper, trim, color):
    frequency_bins = np.array(frequency_bins) 
    psd_value = np.array(psd_value)      
    
    cumulative_psd = psd_value[trim:].cumsum()
    
    # Find median
    total_power = cumulative_psd[-1]
    half_total_power = 0.5 * total_power # location of the median. 
    
    median_index = np.where(cumulative_psd >= 0.5 * total_power)[0][0] # where returns tuple of arrays matching conditions 
    median_frequency = frequency_bins[median_index]
    print(median_frequency)
    
    plt.figure(figsize=(25, 10))
    plt.plot(frequency_bins, psd_value, color = color)
    plt.axvline(median_frequency, color="tab:green", linestyle='--', linewidth = 4, label=f'Median Frequency: {median_frequency} Hz')
    plt.ylim(y_lower,y_upper)
    plt.xlim(x_lower,x_upper)
    plt.xlabel("Frequency Bins")
    plt.ylabel("db/Hz")
    plt.title(title)
    plt.legend()
    plt.grid(True)
    plt.show()`}
					</SyntaxHighlighter>
					<div className="flex sm:flex-row flex-col items-center">
						<img
							src="./images//ROAM/roamMinEffort.png"
							alt="Min_effort"
							className="w-6/12"
						/>
						<img
							src="./images//ROAM/roamMaxEffort.png"
							alt="Max_effort"
							className="w-6/12"
						/>
					</div>
					<ul className="list-disc ml-6">
						<li>
							Computed the PSD and mean frequency of averages
							across 2 types of trials: rested muscles vs.
							fatigued muscles. Compared trials sampled at 50 Hz
							and 200 Hz{" "}
						</li>
						<li>
							Found approximately ~3 Hz downshift in frequency in
							fatigued, 200 Hz trials. This will be used to modify
							the classifier to account for fatigue.
						</li>
					</ul>
					<br></br>
				</section>
				<section>
					<h2 className="font-bold mt-4 text-xl">
						Variable Radius Pulley:
					</h2>
					<video className="w-full rounded-lg shadow-lg" controls>
						<source
							src="./images//ROAM/roamPulleyVideo.mp4"
							type="video/mp4"
						/>
						Your browser does not support the video tag.
					</video>
					<br></br>
					<ul className="list-disc ml-6">
						<li>
							Created a 2 slider design that emphasized
							durability, and a 3 slider design that maximized
							extention.{" "}
						</li>
						<li>
							Test jig to benchmark retraction length and force of
							cable using both standard and extended pulleys,
							limit testing to try to break (and repeatedly break)
							the assembly to catch weakpoints.{" "}
						</li>
						<li>
							E.g. weak 3D printed pins that were replaced with
							metal ones, jams/looseness solved by iterating to
							tweak lengths and thicknesses of the slider pieces.
						</li>
					</ul>
					<br></br>
					<div className="flex sm:flex-row flex-col items-center">
						<img
							src="./images//ROAM/roam2slider1.JPG"
							alt="Min_effort"
							className="w-3/12"
						/>
						<img
							src="./images//ROAM/roam2slider2.JPG"
							alt="Max_effort"
							className="w-3/12"
						/>
						<img
							src="./images//ROAM/roam3slider.JPG"
							alt="Max_effort"
							className="w-3/12"
						/>
					</div>
					<img
						src="./images//ROAM/roam3sliderCad.png"
						alt="Min_effort"
						className="w-6/12"
					/>
					<br></br>
					<ul className="list-disc ml-6">
						<li>
							CAD assembly to check margins and animate joints
							(sliders).{" "}
						</li>
					</ul>
				</section>
				<br></br>
				<h2 className="font-bold mt-4 text-xl">
					Frequency domain analysis technical documentation:{" "}
					<a
						href="https://docs.google.com/document/d/1r1BxkqsloVJc1AsoWS4szQCYteCuOGAJ/edit?usp=sharing&ouid=102824943698376675022&rtpof=true&sd=true"
						target="_blank"
						rel="noopener noreferrer"
						className="text-purple-600 hover:text-purple-800 underline decoration-purple-300 hover:decoration-purple-500 transition-colors"
					>
						Link
					</a>
				</h2>
				<h2 className="font-bold mt-4 text-xl">
					Pulley design technical documentation:{" "}
					<a
						href="https://drive.google.com/drive/folders/16aeht0bvV5tNa-OCeqyF9rbCM6SBzODY?usp=sharing"
						target="_blank"
						rel="noopener noreferrer"
						className="text-purple-600 hover:text-purple-800 underline decoration-purple-300 hover:decoration-purple-500 transition-colors"
					>
						Link
					</a>
				</h2>
			</div>
		),
	},
	{
		title: "GenMD",
		shortDescription: "Your AI-powered healthcare navigator",
		tags: [
			"Typescript",
			"Chrome API",
			"OpenAI",
			"React",
			"Vite",
			"HTML",
			"CSS",
			"Agents",
		],
		image: "./images/genMD/genMDDesign.png",
		labels: ["Web Development"],
		fullContent: (
			<div>
				<section>
					<img
						src="./images/genMD/genMDWhiteboard.jpg"
						alt="Whiteboard planning"
						className="w-6/12"
					/>
					<h3 className="font-semibold mt-4">Premise</h3>
					<ul className="list-disc ml-6">
						<li>
							Healthcare is hard: especially here in America. As
							international students living away from home, we've
							experienced the challenges of navigating the complex
							healthcare system in the U.S. for the first time.
						</li>
						<li>
							Vast range of medical services and cryptic insurance
							docs = difficult to find the best providers for our
							specific needs, especially those covered by our
							insurance plans.{" "}
						</li>
						<li>
							GenMD extracts and understands your medical and
							insurance info, interacts with you to answer your
							inquiries, and speedup appointment bookings by
							filling in the booking forms for you.{" "}
						</li>
					</ul>
					<h3 className="font-semibold mt-4">Responsibilities</h3>
					<ul className="list-disc ml-6">
						<li>
							Design basic agentic feedback loops, LLM tooling,
							and document extraction with OpenAI LLMs, and design
							the API requests.{" "}
						</li>
						<li>
							Learn and add Chrome extension development
							dependencies to design overall project structure and
							"backend" emissions.{" "}
						</li>
					</ul>
					<h3 className="font-semibold mt-4">Outcomes</h3>
					<ul className="list-disc ml-6">
						<li>
							Designed emitters and receivers between backend and
							frontend to send LLM responses to extension and
							browser DOM.{" "}
						</li>
						<li>
							Designed the main conversation function to maintain
							and update context and perform tool calling
							inference.{" "}
						</li>
						<li>
							{" "}
							Designed functions to extract text from uploaded doc
							and image files, and the user data schema that the
							LLM infers and fills.{" "}
						</li>
					</ul>
					<h3 className="font-semibold mt-4">Technologies Used</h3>
					<div className="mt-3 flex flex-wrap gap-1.5">
						<span className="px-2 py-1 text-s rounded-full bg-gray-100 text-gray-600">
							Typescript
						</span>
						<span className="px-2 py-1 text-s rounded-full bg-gray-100 text-gray-600">
							React
						</span>
						<span className="px-2 py-1 text-s rounded-full bg-gray-100 text-gray-600">
							Vite
						</span>
						<span className="px-2 py-1 text-s rounded-full bg-gray-100 text-gray-600">
							Git
						</span>
						<span className="px-2 py-1 text-s rounded-full bg-gray-100 text-gray-600">
							Chrome API
						</span>
						<span className="px-2 py-1 text-s rounded-full bg-gray-100 text-gray-600">
							OpenAI
						</span>
						<span className="px-2 py-1 text-s rounded-full bg-gray-100 text-gray-600">
							HTML
						</span>
						<span className="px-2 py-1 text-s rounded-full bg-gray-100 text-gray-600">
							CSS
						</span>
					</div>
				</section>
				<section>
					<br></br>
					<h2 className="font-bold mt-4 text-xl">
						LLM calls and tooling
					</h2>
					<SyntaxHighlighter
						language="js"
						style={solarizedlight} // You can change this to any Prism.js theme
						customStyle={{
							padding: "1rem",
							borderRadius: "0.5rem",
							background: "#f5f2f0",
							fontSize: "0.8rem",
						}}
					>
						{`export async function toolInference(prompt: string) {
    try {
      // Get the response from GPT-4o with function call inference
      const response = await openai.chat.completions.create({
        model: "gpt-4o",
        messages: [{ role: "user", content: prompt }],
        temperature: 0,
        functions: tools, // Include the predefined function definitions
        function_call: "auto", // Let GPT decide on function to call
      });
  
      // Get the top inferred tool call
      console.log("Response: " + JSON.stringify(response));
      const toolCall = response.choices[0]?.message.function_call?.name;
      const toolArgs = response.choices[0]?.message.function_call?.arguments;
      
      if (!toolCall || !toolArgs) {
        throw new Error("No valid tool call or arguments found in response.");
      }
      
      // Route the request to the appropriate function
      if (toolCall === "emergency_services") {
        return await emergency_services();
      } else if (toolCall === "book_appointment") {
        const { specialty, areaOfConcern } = JSON.parse(toolArgs);
        return await book_appointment(specialty, areaOfConcern, location, insurance);
      } else if (toolCall == "general_health_inquiry"){
        return await general_health_inquiry(prompt);
      } else {
        throw new Error("Unrecognized function call.");
      }
    } catch (error) {
      console.error("Error during tool inference:", error);
      throw error;
    }
}

`}
					</SyntaxHighlighter>
					<br></br>
					<ul className="list-disc ml-6">
						<li>
							OpenAI's function-calling mechanism to automate
							healthcare tasks.{" "}
						</li>
						<li>
							Dynamically parses AI-generated function calls and
							invokes the right service.
						</li>
						<li>
							Ensures error handling for unrecognized function
							calls.
						</li>
					</ul>
					<br></br>
					<h2 className="font-bold mt-4 text-xl">
						Location Validation Logic
					</h2>
					<SyntaxHighlighter
						language="js"
						style={solarizedlight} // You can change this to any Prism.js theme
						customStyle={{
							padding: "1rem",
							borderRadius: "0.5rem",
							background: "#f5f2f0",
							fontSize: "0.8rem",
						}}
					>
						{`import { fetchOpenAI, toolInference } from "./api/fetchOpenAI.ts";

chrome.runtime.onMessage.addListener((message, _sender, sendResponse) => {
  if (message.action === "saveUserData") {
    const userData = message.data;
    console.log("Received user data:", userData);

    // Call AI to find an appointment based on user info
    toolInference("I need to find a {userData.specialty} in {userData.location} who accepts {userData.insurance}.")
      .then(appointment => {
        const { message: msg, search_prompt } = appointment;

        // Send appointment details to the active tab
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
          if (tabs[0]?.id) {
            chrome.tabs.sendMessage(tabs[0].id, {
              action: "sendMessageAndSearchPrompt",
              data: { msg, search_prompt },
            }, (response) => {
              console.log("Response from content script:", response);
            });
          }
        });
      })
      .catch(error => console.error("Error fetching appointment:", error));

    sendResponse({ status: "success", message: "User data processed successfully!" });
  }
  
  return true; // Enables async response handling
});
`}
					</SyntaxHighlighter>
					<br></br>
					<ul className="list-disc ml-6">
						<li>
							The server normalizes the user's input and finds the
							closest match in the locationsMap using the
							string-similarity library.
						</li>
						<li>
							If a close-enough match is found, we return the
							location name. The caller of this function can use
							locationMap (a hashmap) to access the lat and lon of
							the location to display on the map.
						</li>
					</ul>
					<br></br>
					<h2 className="font-bold mt-4 text-xl">
						Timer and end condition logic
					</h2>
					<SyntaxHighlighter
						language="js"
						style={solarizedlight} // You can change this to any Prism.js theme
						customStyle={{
							padding: "1rem",
							borderRadius: "0.5rem",
							background: "#f5f2f0",
							fontSize: "0.8rem",
						}}
					>
						{`const startTurnTimer = (gameId) => {
    const room = gameRooms[gameId];
    if (!room) return;

    if (room.timer) {
        clearInterval(room.timer);
        room.timer = null;
    }

    room.timeLeft = room.timeLimit;

    room.timer = setInterval(() => {
        io.to(gameId).emit("update-timeLeft", room.timeLeft);
        room.timeLeft -= 1;

        if (room.timeLeft <= 0) {
            clearInterval(room.timer);

            const currentTurnUser = room.users[room.currentTurnIndex];
            if (currentTurnUser.lives > 0) {
                currentTurnUser.lives -= 1;
                io.to(gameId).emit("update-users", room.users);
            }

            const remainingPlayers = room.users.filter(user => user.lives > 0);
            if (remainingPlayers.length === 1 && !room.isSolo) {
                const winner = remainingPlayers[0];
                io.to(gameId).emit("end-game", { 
                    reason: "Last player standing", 
                    winner: winner.name, 
                    totalLocations: room.locations.length,
                    isSolo: room.isSolo 
                });
                return;
            } else if (room.isSolo && room.users[0].lives <= 0) {
                io.to(gameId).emit("end-game", { 
                    reason: "You lost all lives", 
                    winner: "SOLO", 
                    totalLocations: room.locations.length,
                    isSolo: room.isSolo 
                });
                return;
            } 
            else if (!room.isSolo && room.users.length === 1) {
                const winner = room.users[0];
                io.to(gameId).emit("end-game", { 
                    reason: "Players have disconnected in multiplayer game", 
                    winner: winner.name, 
                    totalLocations: room.locations.length,
                    isSolo: room.isSolo 
                });
                return;
            }

            passTurn(gameId);
        }
        io.to(gameId).emit("update-timeLeft", room.timeLeft);
    }, 1000);
};    ;`}
					</SyntaxHighlighter>
					<br></br>
					<ul className="list-disc ml-6">
						<li>
							Updating and synchronizing timer and lives data
							across clients, checking end-condition depending on
							solo/multiplayer.{" "}
						</li>
						<li>
							Passes the turn if the current player runs out of
							time (or if a valid location is guessed).{" "}
						</li>
					</ul>
					<br></br>
				</section>
				<h2 className="font-bold mt-4 text-xl">
					Full Github repo here:{" "}
					<a
						href="https://github.com/ldang04/CCS-Game"
						target="_blank"
						rel="noopener noreferrer"
						className="text-purple-600 hover:text-purple-800 underline decoration-purple-300 hover:decoration-purple-500 transition-colors"
					>
						Link
					</a>
				</h2>
			</div>
		),
	},
	{
		title: "Geochain.io",
		shortDescription: "Multiplayer, geography hot-potato game.",
		tags: [
			"Javascript",
			"WebSockets",
			"React",
			"Node.js",
			"Express.js",
			"HTML",
			"CSS",
		],
		image: "./images/geochain/geochainGameRoom.png",
		labels: ["Web Development"],
		fullContent: (
			<div>
				<section>
					<video className="w-full rounded-lg shadow-lg" controls>
						<source
							src="./images//geochain/geochainDemoVid.mp4"
							type="video/mp4"
						/>
						Your browser does not support the video tag.
					</video>
					<h3 className="font-semibold mt-4">Premise</h3>
					<ul className="list-disc ml-6">
						<li>
							Port a childhood dinnertime game into an online
							competitive format. The game is played by naming a
							Country, City, or State (CCS). The next person has
							to name another CCS starting with the last letter of
							the previously named CCS. This ends until someone
							fails to name one.{" "}
						</li>
					</ul>
					<h3 className="font-semibold mt-4">Responsibilities</h3>
					<ul className="list-disc ml-6">
						<li>Learn the MERN stack and the Web Sockets API. </li>
						<li>
							Work alongisde Linh, a classmate, while using
							concurrency control (git) to track work, bugs, and
							patches.
						</li>
					</ul>
					<h3 className="font-semibold mt-4">Outcomes</h3>
					<ul className="list-disc ml-6">
						<li>
							Designed the data structure for the CCS data to be
							stored and accessed from, and wrote logic to verify
							a user's CCS guess using RegEx.{" "}
						</li>
						<li>
							Designed the timer, player lives, map and marker,
							and end game condition logic.{" "}
						</li>
						<li>
							Used Web Sockets to to process the above logic in
							the server, and send concurrent updates to clients
							(players).{" "}
						</li>
					</ul>
					<h3 className="font-semibold mt-4">Technologies Used</h3>
					<div className="mt-3 flex flex-wrap gap-1.5">
						<span className="px-2 py-1 text-s rounded-full bg-gray-100 text-gray-600">
							Javascript
						</span>
						<span className="px-2 py-1 text-s rounded-full bg-gray-100 text-gray-600">
							Python
						</span>
						<span className="px-2 py-1 text-s rounded-full bg-gray-100 text-gray-600">
							Git
						</span>
						<span className="px-2 py-1 text-s rounded-full bg-gray-100 text-gray-600">
							React
						</span>
						<span className="px-2 py-1 text-s rounded-full bg-gray-100 text-gray-600">
							Express
						</span>
						<span className="px-2 py-1 text-s rounded-full bg-gray-100 text-gray-600">
							Node
						</span>
						<span className="px-2 py-1 text-s rounded-full bg-gray-100 text-gray-600">
							Websockets
						</span>
						<span className="px-2 py-1 text-s rounded-full bg-gray-100 text-gray-600">
							HTML
						</span>
						<span className="px-2 py-1 text-s rounded-full bg-gray-100 text-gray-600">
							CSS
						</span>
					</div>
				</section>
				<section>
					<br></br>
					<h2 className="font-bold mt-4 text-xl">
						Server-Side: Game Room Management
					</h2>
					<SyntaxHighlighter
						language="js"
						style={solarizedlight} // You can change this to any Prism.js theme
						customStyle={{
							padding: "1rem",
							borderRadius: "0.5rem",
							background: "#f5f2f0",
							fontSize: "0.8rem",
						}}
					>
						{`io.on("connection", (socket) => {
      console.log("A user connected:", socket.id);

      // Handle user joining a room
      socket.on("join-room", ({ gameId, nickname, timeLimit, lives }) => {
          if (!gameRooms[gameId]) {
              gameRooms[gameId] = {
                  isStarted: false,
                  users: [],
                  locations: [],
                  currentLetter: "A",
                  currentTurnIndex: 0,
                  timeLimit: timeLimit ?? 60, // Default to 60 seconds
                  timeLeft: timeLimit ?? 60, // Set to the timeLimit
                  timer: null, // Timer for the current turn
                  lives: lives ?? 3, // Default to 3 lives
                  guessedLocations: new Set(),
                  isSolo: false, // Default to multiplayer
              };
          }
      
          const room = gameRooms[gameId];
      
          // Prevent users from joining if the game has already started
          if (room.isStarted) {
              socket.emit("game-started-error", { message: "The game has already started." });
              return;
          }
      
          // Add the user to the room
          const user = { id: socket.id, name: nickname, lives: room.lives };
          room.users.push(user);
          socket.join(gameId);
      
          // ... 
      
          io.to(gameId).emit("update-users", room.users);
          io.to(gameId).emit("update-turn", room.users[room.currentTurnIndex]);
          io.to(gameId).emit("update-timeLeft", room.timeLeft);
      });
  });`}
					</SyntaxHighlighter>
					<br></br>
					<ul className="list-disc ml-6">
						<li>
							Manage real-time multiplayer game rooms using
							websockets, including handling user connections,
							room creation, and state synchronization.{" "}
						</li>
						<li>
							Implemented error handling to prevent users from
							joining a game that has already started.
						</li>
					</ul>
					<br></br>
					<h2 className="font-bold mt-4 text-xl">
						Location Validation Logic
					</h2>
					<SyntaxHighlighter
						language="js"
						style={solarizedlight} // You can change this to any Prism.js theme
						customStyle={{
							padding: "1rem",
							borderRadius: "0.5rem",
							background: "#f5f2f0",
							fontSize: "0.8rem",
						}}
					>
						{`function validateLocation(input, gameId) { 
    const inputName = input.toLowerCase().trim();

    const keys = Array.from(locationsMap.keys());
    const { bestMatch } = stringSimilarity.findBestMatch(inputName, keys);

    if (bestMatch.rating > 0.95) { // Threshold for similarity set at 0.95
        const location = locationsMap.get(bestMatch.target);

        const guessedLocations = gameRooms[gameId]?.guessedLocations;
        if (guessedLocations?.has(bestMatch.target)) {
            return { success: false, message: "$bestMatch.target has already been guessed!" };
        } else {
            guessedLocations?.add(bestMatch.target);
            return { success: true, location_data: location };
        }
    } else {
        return { success: false, message: "$input" is not a valid location!" };
    }
}`}
					</SyntaxHighlighter>
					<br></br>
					<ul className="list-disc ml-6">
						<li>
							Uses toolInference() to dynamically call OpenAI's
							function-based reasoning.
						</li>
						<li>
							Sends AI-generated recommendations to the active tab
							via chrome.tabs.sendMessage()
						</li>
						<li>
							Asynchronous handling - Ensures smooth background
							execution without blocking responses.
						</li>
					</ul>
					<br></br>
				</section>
				<h2 className="font-bold mt-4 text-xl">
					Full Github repo here:{" "}
					<a
						href="https://github.com/sucrammal/GenMD"
						target="_blank"
						rel="noopener noreferrer"
						className="text-purple-600 hover:text-purple-800 underline decoration-purple-300 hover:decoration-purple-500 transition-colors"
					>
						Link
					</a>
				</h2>
			</div>
		),
	},
	{
		title: "Vectari (Now CredytU)",
		shortDescription:
			"Building LLM, AI classifiers for digital transaction complaints.",
		tags: [
			"LLMs",
			"OpenAI",
			"NLP",
			"HPO",
			"BERT",
			"Python",
			"Numpy",
			"pandas",
			"t-SNE",
			"RF",
			"K-means",
		],
		image: "./images/vectari/vectari3DKmeans.png",
		labels: ["Data Science"],
		fullContent: (
			<div>
				<section>
					<img
						src="./images//vectari/vectari3DKmeans.png"
						alt="K-means with tSNE"
						className="w-6/12"
					/>
					<h3 className="font-semibold mt-4">Premise</h3>
					<ul className="list-disc ml-6">
						<li>
							One of two interns place on a team to classify 2
							types of bank complaints: digital transactions and
							mortgages.{" "}
						</li>
						<li>
							Startup sells software to flag bank vulnerabilities
							based on consumer complaint trends to prevent
							compliance violations.{" "}
						</li>
					</ul>
					<h3 className="font-semibold mt-4">Responsibilities</h3>
					<ul className="list-disc ml-6">
						<li>
							Use various ML algos and LLMs to build a classifier
							for digital transaction complaints.{" "}
						</li>
						<li>
							Work alongisde Harris, my co-intern in the team,
							helping with each other's code.{" "}
						</li>
						<li>
							Weekly check-ins with CTO for feedback and progress.
							Present researched findings at the end of the
							internship.{" "}
						</li>
					</ul>
					<h3 className="font-semibold mt-4">Outcomes</h3>
					<ul className="list-disc ml-6">
						<li>
							Developed algorithms to categorise bank complaints
							and identify compliance violations using traditional
							NLP, Hugging Face ML models, OpenAI LLMs, and
							CO-STAR and TIDD-EC prompting frameworks.{" "}
						</li>
						<li>
							Fine-tuned GPT 3.5 to push classification precisions
							for certain complaint categories to 96% out of a
							5-category dataset, distilling from GPT 4.0.{" "}
						</li>
						<li>
							Worked on a more lightweight BERT model to classify
							complaints.{" "}
						</li>
						<li>
							Utilised Ray Tune for hyperparameter optimization,
							boosting SetFit classification accuracies from 75%
							to 90%.{" "}
						</li>
					</ul>
					<h3 className="font-semibold mt-4">Technologies Used</h3>
					<div className="mt-3 flex flex-wrap gap-1.5">
						<span className="px-2 py-1 text-s rounded-full bg-gray-100 text-gray-600">
							Python
						</span>
						<span className="px-2 py-1 text-s rounded-full bg-gray-100 text-gray-600">
							pandas
						</span>
						<span className="px-2 py-1 text-s rounded-full bg-gray-100 text-gray-600">
							NumPy
						</span>
						<span className="px-2 py-1 text-s rounded-full bg-gray-100 text-gray-600">
							SciPy
						</span>
						<span className="px-2 py-1 text-s rounded-full bg-gray-100 text-gray-600">
							Matplotlib
						</span>
						<span className="px-2 py-1 text-s rounded-full bg-gray-100 text-gray-600">
							TensorFlow
						</span>
					</div>
				</section>
				<section>
					<br></br>
					<h2 className="font-bold mt-4 text-xl">
						LLM cleanup and data exploration with K-means.
					</h2>
					<p>
						I used classic NLP techniques and an LLM to cleanup CFPB
						bank complaints which were low-quality: this
						preprocessing combo is used in all other projects at
						Vectari.
						<br />
						<br />
						These compliants are then vectorized, and I train a
						k-means clustering model on this data to group similar
						complaints together, finally, I use Latent Dirichlet
						Allocation (LDA) to identify topics within the clusters
						based on the most frequent terms.
					</p>
					<SyntaxHighlighter
						language="python"
						style={solarizedlight} // You can change this to any Prism.js theme
						customStyle={{
							padding: "1rem",
							borderRadius: "0.5rem",
							background: "#f5f2f0",
							fontSize: "0.8rem",
						}}
					>
						{`system = """You will receive a transcript of a phone call between a call center agent at a mortgage servicing company and a customer/borrower.
The transcription text is also low quality. These are calls about financial services and we have seen some text completely out of place.  For instance 'the first drug was fixed, and any drug after that was gonna be viral' should pretty clearly be
'the first rate was fixed, and any rate after that was going to be variable'.
Your job is to parse the text and using your natural language understanding and contextual awareness, please re-write the transcript and clean any grammar / things that do not make sense in financial use cases. After the response is generated, remove all full stops, commas, semicolons, colons, and quotation marks.
"""
def LLM_cleanup(transcript):
    messages = [
        {"role": "system", "content": system},
        {"role": "user", "content": f'"""{transcript}"""'}
    ]
    response = client.chat.completions.create(
        model=gpt_config['model'],
        messages=messages
    )
    LLM_cleaned_sample = response.choices[0].message.content
    return LLM_cleaned_sample

def NL_cleanup(LLM_cleaned_sample):
    for punctuation in string.punctuation:
        LLM_cleaned_sample = LLM_cleaned_sample.replace(punctuation, '')
    tokenized_sample = word_tokenize(LLM_cleaned_sample)
    stemmer = PorterStemmer()
    wnl = WordNetLemmatizer()
    removed_stopwords_sample = []
    for word in tokenized_sample:
        if word not in STOPWORD_SET and not word.isdigit():
            word = word.lower()
            wnl.lemmatize(word) if wnl.lemmatize(word).endswith('e') else stemmer.stem(word)
            removed_stopwords_sample.append(word)
    cleaned_sentence = " ".join(removed_stopwords_sample)
    return cleaned_sentence`}
					</SyntaxHighlighter>
					<br></br>
					<ul className="list-disc ml-6">
						<li>
							The LLM_cleanup function uses OpenAI's GPT model to
							clean and summarize low-quality transcripts.
						</li>
						<li>
							The NL_cleanup function further processes the text
							by removing punctuation, tokenizing, and applying
							stemming and lemmatization. Stopwords and digits are
							removed to focus on meaningful words
						</li>
					</ul>
					<br></br>
					<SyntaxHighlighter
						language="python"
						style={solarizedlight} // You can change this to any Prism.js theme
						customStyle={{
							padding: "1rem",
							borderRadius: "0.5rem",
							background: "#f5f2f0",
							fontSize: "0.8rem",
						}}
					>
						{`# Vectorize training data
vectorizer = CountVectorizer()
vectorizer.fit(X)
train_vect = vectorizer.transform(X)

# K-Means Clustering
num_clusters = 6
kmeans = KMeans(n_clusters=num_clusters, random_state=42)
kmeans.fit(train_vect)
clusters = kmeans.predict(train_vect)

# t-SNE for 2D Visualization
tsne = TSNE(n_components=2, random_state=42)
X_reduced = tsne.fit_transform(train_vect.toarray())
plt.scatter(X_reduced[:, 0], X_reduced[:, 1], c=clusters, cmap='viridis', alpha=0.6)
plt.title('Consumer Complaints Clustered (2D representation)')
plt.show()

# LDA for Topic Modeling
vectorizer = CountVectorizer(ngram_range=(1, 3), stop_words='english')
X = vectorizer.fit_transform(cleaned_dataset['Consumer complaint narrative'])
tfidf_transformer = TfidfTransformer()
X_tfidf = tfidf_transformer.fit_transform(X)
lda = LatentDirichletAllocation(n_components=5, random_state=0)
lda.fit(X_tfidf)

# Display Topics
def display_topics(model, feature_names, no_top_words):
    for topic_idx, topic in enumerate(model.components_):
        print("Topic %d:" % (topic_idx))
        print(" ".join([feature_names[i] for i in topic.argsort()[:-no_top_words - 1:-1]]))

display_topics(lda, vectorizer.get_feature_names_out(), no_top_words=10)`}
					</SyntaxHighlighter>
					<br></br>
					<ul className="list-disc ml-6">
						<li>
							A k-means clustering model is trained to group
							similar complaints into 6 clusters. t-SNE is used to
							reduce the dimensionality of the data for 2D
							visualization, helping to understand the clustering
							results.
						</li>
						<li>
							TF-IDF transformation is applied to weigh the
							importance of words in the documents. Latent
							Dirichlet Allocation (LDA) is used to identify 5
							topics within the clusters, and the top 10 words for
							each topic are displayed.
						</li>
					</ul>
					<br></br>
				</section>
				<section>
					<h2 className="font-bold mt-4 text-xl">
						Hyperparameter optimization (HPO) with Ray Tune
					</h2>
					<SyntaxHighlighter
						language="python"
						style={solarizedlight} // You can change this to any Prism.js theme
						customStyle={{
							padding: "1rem",
							borderRadius: "0.5rem",
							background: "#f5f2f0",
							fontSize: "0.8rem",
						}}
					>
						{`# Put large datasets in the Ray object store
train_ds_ref = ray.put(train_ds)
test_ds_ref = ray.put(test_ds)

#Define the train_model function with necessary arguments
def train_model(config, train_ds_ref, test_ds_ref):
    model = SetFitModel.from_pretrained("sentence-transformers/paraphrase-mpnet-base-v2")

    trainer = SetFitTrainer(
        model=model,
        train_dataset=train_ds_ref,
        eval_dataset=test_ds_ref,
        loss_class=CosineSimilarityLoss,
        batch_size=config["batch_size"],
        num_iterations=config["num_iterations"],
        column_mapping={"cleaned_text": "text", "labels": "label"}
    )

    trainer.train()
    metrics = trainer.evaluate()

    return metrics['accuracy']`}
					</SyntaxHighlighter>
					<br></br>
					<ul className="list-disc ml-6">
						<li>
							Used SetFit, a HuggingFace model suited for few-shot
							learning for classification.
						</li>
						<li>
							After using Ray objects to batch training to reduce
							function size, used Ray Tune to distribute
							hyperparameter tuning across multiple trials to
							discover optimized hyperparameters.
						</li>
					</ul>
				</section>
				<section>
					<h2 className="font-bold mt-4 text-xl">
						LLM classifier and fine tuning.{" "}
					</h2>
					<br></br>
					<SyntaxHighlighter
						language="python"
						style={solarizedlight} // You can change this to any Prism.js theme
						customStyle={{
							padding: "1rem",
							borderRadius: "0.5rem",
							background: "#f5f2f0",
							fontSize: "0.8rem",
						}}
					>
						{`tools = [{
                "type": "function",
                "function": {
                    "name": "complaint_classifier",
                    "description": "select the correct category for an incoming complaint",
                    "parameters": {
                        "type": "object",
                        "properties": {
                            "category": {
                              "type": "string",
                              "enum": ["Fraud or scam", "Money was not available when promised", "Wrong amount charged or receive", "Incorrect/missing disclosures or info"]

                            },
                        },
                    },
                    "required": ["category"],
                },
            }]
            
  def fine_tune_classifier(new_transcript, json_file_name):
    messages = [
        {
            "role": "system",
            "content": generate_fine_tune_prompt(json_file_name)
        },
        {
            "role": "user",
            "content": f'""" Transcript to-be classified: \n {new_transcript} """'
        }
    ]

    # Include the tool in the API call
    response = client.chat.completions.create(
        model=gpt_config['model'],
        messages=messages,
        tools=tools,
        tool_choice={"type": "function", "function": {"name": "complaint_classifier"}},
        temperature=0,
        top_p=0.2
    )

    # Extract the function call from the response
    if response.choices[0].message.tool_calls:
        function_call = response.choices[0].message.tool_calls[0].function
        if function_call.name == "complaint_classifier":
            # Parse the arguments
            import json
            arguments = json.loads(function_call.arguments)
            category = arguments.get("category")
            return category
        else:
            return response.choices[0].message.content
    else:
        return response.choices[0].message.content`}
					</SyntaxHighlighter>
					<br></br>
					<ul className="list-disc ml-6">
						<li>
							Originally used GPT 3.5 to analyze labeled training
							complaint transcripts, and classify an unlabeled
							complaint.
						</li>
						<li>
							2 detailed and structured prompting frameworks -
							CO-STAR and TIDD-EC - were used to defines the task,
							instructions, and constraints, ensuring the AI
							understands the context and requirements to classify
							the complaints.{" "}
						</li>
						<li>
							Improved the model by tooling and modifying
							parameters to stricten/constrain output.{" "}
						</li>
					</ul>
					<SyntaxHighlighter
						language="python"
						style={solarizedlight} // You can change this to any Prism.js theme
						customStyle={{
							padding: "1rem",
							borderRadius: "0.5rem",
							background: "#f5f2f0",
							fontSize: "0.8rem",
						}}
					>
						{`# Convert the input-output training data into standardized JSON format.
# Can change the JSON format for different structure and clarity
import json
def convert_to_jsonl(labeled_df, output_file):
  jsonl_data = []
  for index, row in labeled_df.iterrows():
    # Assuming the dataset is comma-separated
    user_message = row['Consumer complaint narrative']
    model_response = row["Issue"]
    conversation = [
    {'role': 'system', 'content': raw_prompt},
    {'role': 'user', 'content': user_message},
    {'role': 'assistant', 'content': model_response}]
    jsonl_data.append(json.dumps({"messages": conversation}))

  with open(output_file, 'w', encoding='utf-8') as outfile:
    outfile.write($n.join(jsonl_data))`}
					</SyntaxHighlighter>
					<ul className="list-disc ml-6">
						<li>
							Then, converted some selected, high-quality
							complaint transcript data into JSON format to
							fine-tune in OpenAI playground.{" "}
						</li>
						<li>
							The new classifier's F1 scores and overall accuracy
							on the test cases were much better than the previous
							"vanilla" prompt classifier.
						</li>
						<li>
							Complaint categories with more distinct/unique
							language were naturally easier to classify: e.g.
							"fraud or scam" complaints reaching a top precision
							of 96%.{" "}
						</li>
					</ul>
				</section>
				<section>
					<h2 className="font-bold mt-4 text-xl">
						BERT model to classify complaints:{" "}
					</h2>
					<br></br>
					<p>
						{" "}
						Bank complaints often contain complex language,
						financial jargon, and nuanced customer sentiments.
						BERT's bidirectional nature allows it to understand the
						context of words in a sentence by considering both the
						left and right context simultaneously. I wanted to fine
						tune the BERT model based on this bank complaint
						application.
					</p>
					<br></br>
					<SyntaxHighlighter
						language="python"
						style={solarizedlight} // You can change this to any Prism.js theme
						customStyle={{
							padding: "1rem",
							borderRadius: "0.5rem",
							background: "#f5f2f0",
							fontSize: "0.8rem",
						}}
					>
						{`# Load the BERT tokenizer
tokenizer = BertTokenizer.from_pretrained("bert-base-uncased", do_lower_case=True)

# Tokenize the text data
def tokenize_text(text_series, max_length=256):
    tokenized_texts = text_series.apply(
        lambda x: tokenizer.encode(
            str(x),                  
            add_special_tokens=True, # Add [CLS] and [SEP] tokens for BERT 
            max_length=max_length,   # Truncate/pad to max_length
            truncation=True,         # Truncate long sequences
            padding='max_length'     # Pad short sequences
        )
    )
    return tokenized_texts

# Create attention masks
def create_attention_masks(sequences):
    masks = []
    for seq in sequences:
        mask = [float(token != 0) for token in seq]
        masks.append(mask)
    return masks`}
					</SyntaxHighlighter>
					<ul className="list-disc ml-6">
						<li>
							After cleaning the low-quality complaints with an
							LLM, tokenized text data using the BERT tokenizer,
							ensuring the input is compatible with the BERT
							model.
						</li>
						<li>
							Created attention masks to distinguish between
							actual tokens and padding
						</li>
					</ul>
					<br></br>
					<SyntaxHighlighter
						language="python"
						style={solarizedlight} // You can change this to any Prism.js theme
						customStyle={{
							padding: "1rem",
							borderRadius: "0.5rem",
							background: "#f5f2f0",
							fontSize: "0.8rem",
						}}
					>
						{`# Training loop
for epoch_i in range(epochs):
    print(f'Epoch {epoch_i + 1} / {epochs}')
    model.train()
    total_train_loss = 0

    for step, batch in enumerate(train_dataloader):
        b_input_ids, b_input_mask, b_labels = tuple(t.to(device) for t in batch)
        model.zero_grad()
        outputs = model(b_input_ids, attention_mask=b_input_mask, labels=b_labels)
        loss = outputs.loss
        total_train_loss += loss.item()
        loss.backward()
        torch.nn.utils.clip_grad_norm_(model.parameters(), 1.0)
        optimizer.step()
        scheduler.step()

    avg_train_loss = total_train_loss / len(train_dataloader)
    print(f'Average training loss: {avg_train_loss:.2f}')`}
					</SyntaxHighlighter>
					<ul className="list-disc ml-6">
						<li>
							Trained the BERT model for sequence classification
							using a training loop over multiple epochs.
						</li>
						<li>
							Applied gradient clipping to prevent exploding
							gradients, ensuring stable training.
						</li>
						<li>
							Tracked and averaged the training loss across
							batches to monitor model performance during
							training.
						</li>
					</ul>
					<br></br>
					<img
						src="./images//vectari/vectariBERTPerformance.png"
						alt="BERT-Performance"
						className="w-6/12"
					/>
				</section>
				<h2 className="font-bold mt-4 text-xl">
					Final presentation:{" "}
					<a
						href="https://docs.google.com/presentation/d/1am6Zv3sxWqALaUhsjy8YzaZsJKurehfETtIDXvgW8Ss/edit?usp=sharing"
						target="_blank"
						rel="noopener noreferrer"
						className="text-purple-600 hover:text-purple-800 underline decoration-purple-300 hover:decoration-purple-500 transition-colors"
					>
						Link
					</a>
				</h2>
				<h2 className="font-bold mt-4 text-xl">
					Engineering logs:{" "}
					<a
						href="https://docs.google.com/document/d/1sDD8cvhMrt4eLYHbqxYHbcyDKNMZV67mp7X5LGi41m8/edit?usp=sharing"
						target="_blank"
						rel="noopener noreferrer"
						className="text-purple-600 hover:text-purple-800 underline decoration-purple-300 hover:decoration-purple-500 transition-colors"
					>
						Link
					</a>
				</h2>
			</div>
		),
	},
	{
		title: "Star Wars BB8 Robot",
		shortDescription:
			"An X-drive robot that goes inside a sphere to look like BB8",
		tags: ["CAD", "Arduino", "RC", "Electronics"],
		image: "./images/bb8/bb8CAD.png",
		labels: ["Robotics"],
		fullContent: (
			<div>
				<section>
					<img
						src="./images//bb8/bb8CADFull.png"
						alt="bb8-CAD"
						className="w-6/12"
					/>
					<h3 className="font-semibold mt-4">Premise</h3>
					<ul className="list-disc ml-6">
						<li>
							Wanted to replicate a to-scale BB8 Robot using an
							omni-directional internal robot.{" "}
						</li>
						<li>
							I have never built a drivetrain of my own from
							scratch, let alone an X-drive like this one. I was
							inspired by{" "}
							<a
								href="https://www.youtube.com/watch?v=J5MxFm6p5Uc&list=PLpwJoq86vov8gnKpQkZUH4szapX1jxcmC&index=1"
								target="_blank"
								rel="noopener noreferrer"
								className="text-purple-600 hover:text-purple-800 underline decoration-purple-300 hover:decoration-purple-500 transition-colors"
							>
								James Bruton's
							</a>{" "}
							own BB8 Droid which used a suspension for the wheels
							of the robot to grip onto the top of the styrofoam
							ball body.{" "}
						</li>
					</ul>
					<h3 className="font-semibold mt-4">Outcomes</h3>
					<ul className="list-disc ml-6">
						<li>
							Used an X-drive robot with a suspension system so
							that the wheels can tilt and comply to the internal
							surface of a sphere.{" "}
						</li>
						<li>
							Fine-tuned GPT 3.5 to push classification precisions
							for certain complaint categories to 96% out of a
							5-category dataset, distilling from GPT 4.0.{" "}
						</li>
						<li>
							Worked on a more lightweight BERT model to classify
							complaints.{" "}
						</li>
						<li>
							Utilised Ray Tune for hyperparameter optimization,
							boosting SetFit classification accuracies from 75%
							to 90%.{" "}
						</li>
					</ul>
					<h3 className="font-semibold mt-4">Technologies Used</h3>
					<div className="mt-3 flex flex-wrap gap-1.5">
						<span className="px-2 py-1 text-s rounded-full bg-gray-100 text-gray-600">
							Onshape
						</span>
						<span className="px-2 py-1 text-s rounded-full bg-gray-100 text-gray-600">
							Arduino
						</span>
						<span className="px-2 py-1 text-s rounded-full bg-gray-100 text-gray-600">
							EasyEDA
						</span>
					</div>
				</section>
				<section>
					<h2 className="font-bold mt-4 text-xl">
						Suspension System{" "}
					</h2>
					<br></br>
					<video className="w-full rounded-lg shadow-lg" controls>
						<source
							src="./images//bb8/bb8Suspension.mp4"
							type="video/mp4"
						/>
					</video>
					<br></br>
					<ul className="list-disc ml-6">
						<li>
							Re-purposed old VEX DC motors, and designed shaft
							collars to secure the square shaft.
						</li>
						<li>
							Used springs attached to the hooks to allow each
							motor to rotate upwards and hold tension to grip on
							inner surface of the sphere.{" "}
						</li>
						<li>
							Main roadblock: getting the margins right for
							clearance for smooth rotation, splitting the base
							into wings to fit print bed and increase
							re-manufacturing.{" "}
						</li>
					</ul>
				</section>
				<section>
					<h2 className="font-bold mt-4 text-xl">Circuit Design: </h2>
					<br></br>
					<img
						src="./images//bb8/bb8Schematic.png"
						alt="bb8-Schematic"
						className="w-6/12"
					/>
					<br></br>
					<ul className="list-disc ml-6">
						<li>
							Sharing a 14V LiPo power source using a voltage
							step-down.
						</li>
						<li>
							Dual 2-motor motor controllers in the first tier to
							isolate high voltage interference, control
							electronics and RC receiver on separate top tier.
						</li>
					</ul>
				</section>
				<section>
					<h2 className="font-bold mt-4 text-xl">Demo: </h2>
					<br></br>
					<video className="w-full rounded-lg shadow-lg" controls>
						<source
							src="./images//bb8/bb8Drive.mp4"
							type="video/mp4"
						/>
					</video>
				</section>
			</div>
		),
	},
	{
		title: "Convolutional Neural Network (CNN) for Skin Cancer Detection",
		shortDescription: "Distinguish benign and harmful skin lesions",
		tags: [
			"python",
			"ML",
			"CNN",
			"CV",
			"HPO",
			"Flask",
			"TF",
			"Keras",
			"numpy",
			"pandas",
		],
		image: "https://stanford.edu/~shervine/teaching/cs-230/illustrations/convolution-layer-a.png?1c517e00cb8d709baf32fc3d39ebae67",
		labels: ["Data Science"],
		fullContent: (
			<div>
				<section>
					<img
						src="https://sds-platform-private.s3-us-east-2.amazonaws.com/uploads/74_blog_image_1.png"
						alt="DNN"
						className="w-6/12"
					/>
					<h3 className="font-semibold mt-4">Premise</h3>
					<ul className="list-disc ml-6">
						<li>
							First ever ML project: Wanted to learn the basics of
							Machine Learning and CV.{" "}
						</li>
					</ul>
					<h3 className="font-semibold mt-4">Outcomes</h3>
					<ul className="list-disc ml-6">
						<li>
							Implemented a Convolutional Neural Network that
							classifed skin lesions at 55% accuracy, ROC AUC of
							80%.{" "}
						</li>
						<li>
							Improved the model through Hyperparameter
							Optimization (HPO), pushing accuracy to 70%.{" "}
						</li>
						<li>
							Fine-tuned MobileNet architecture to make a transfer
							learning model.{" "}
						</li>
						<li>
							Wrote code to deploy the model on a simple webapp to
							allow upload and diagnosis with Flask.{" "}
						</li>
					</ul>
					<h3 className="font-semibold mt-4">Technologies Used</h3>
					<div className="mt-3 flex flex-wrap gap-1.5">
						<span className="px-2 py-1 text-s rounded-full bg-gray-100 text-gray-600">
							Python
						</span>
						<span className="px-2 py-1 text-s rounded-full bg-gray-100 text-gray-600">
							TensorFlow
						</span>
						<span className="px-2 py-1 text-s rounded-full bg-gray-100 text-gray-600">
							Keras
						</span>
						<span className="px-2 py-1 text-s rounded-full bg-gray-100 text-gray-600">
							HPOpt
						</span>
						<span className="px-2 py-1 text-s rounded-full bg-gray-100 text-gray-600">
							Flask
						</span>
						<span className="px-2 py-1 text-s rounded-full bg-gray-100 text-gray-600">
							HTML/CSS
						</span>
						<span className="px-2 py-1 text-s rounded-full bg-gray-100 text-gray-600">
							JS
						</span>
					</div>
				</section>
				<section>
					<h2 className="font-bold mt-4 text-xl">CNN breakdown:</h2>
					<SyntaxHighlighter
						language="python"
						style={solarizedlight} // You can change this to any Prism.js theme
						customStyle={{
							padding: "1rem",
							borderRadius: "0.5rem",
							background: "#f5f2f0",
							fontSize: "0.8rem",
						}}
					>
						{`def CNNClassifier(epochs=1, batch_size=10, layers=5, dropout=0.5, activation='relu'):
  def set_params():
    i = 1
  def create_model():
    model = Sequential()
    model.add(Reshape((IMG_WIDTH, IMG_HEIGHT, 3)))

    for i in range(layers):
      model.add(Conv2D(64, (3, 3), padding='same'))     #Processes it 64 times. 3x3 Kernels
      model.add(Activation(activation))

    model.add(Conv2D(64, (3, 3)))
    model.add(Activation(activation))
    model.add(MaxPooling2D(pool_size=(2, 2)))
    model.add(Dropout(dropout / 2.0))

    model.add(Conv2D(128, (3, 3), padding='same'))
    model.add(Activation(activation))
    model.add(Conv2D(128, (3, 3)))
    model.add(Activation(activation))
    model.add(MaxPooling2D(pool_size=(2, 2)))
    model.add(Dropout(dropout / 2.0))

    model.add(Flatten())
    model.add(Dense(512))
    model.add(Activation(activation))
    model.add(Dropout(dropout))
    model.add(Dense(7))
    model.add(Activation('softmax'))

    # initiate RMSprop optimizer
    opt = keras.optimizers.RMSprop(lr=0.0001, decay=1e-6)

    # Train the model using RMSprop
    model.compile(loss='categorical_crossentropy',
                  optimizer=opt,
                  metrics=[tf.keras.metrics.AUC()])
    return model
  return KerasClassifier(build_fn=create_model, epochs=epochs, batch_size=batch_size, verbose=1)
  
  gs = GridSearch(model=gridSearchCNN(),param_grid=param_grid,parallelize=False)
  grid_result = grid.fit(X_train, y_train_onehot)

  # Print the best parameters and score
  print("Best Parameters: ", grid_result.best_params_)
  print("Best Accuracy: ", grid_result.best_score_)

  # Train the best model
  best_model = grid_result.best_estimator_.model
  best_model.fit(X_train, y_train_onehot, validation_data=(X_test, y_test_onehot), epochs=grid_result.best_params_['epochs'], batch_size=grid_result.best_params_['batch_size'], verbose=1)

  # Evaluate the best model
  y_pred = best_model.predict(X_test)
  y_pred_classes = np.argmax(y_pred, axis=1)
  y_true_classes = np.argmax(y_test_onehot, axis=1)
`}
					</SyntaxHighlighter>
					<br></br>
					<ul className="list-disc ml-6">
						<li>
							Learned about activation functions, and the
							different types of layers: Convolutional Layers,
							Pooling Layers, and Fully Connected Layers.
						</li>
						<li>
							Used RMSprop to optimize training, and the simple
							grid search algorithm to perform HPO.
						</li>
					</ul>
					<br></br>
					<img
						src="./images//cnn/cnn_cm1.png"
						alt="Confusion Matrix"
						className="w-6/12"
					/>
					<ul className="list-disc ml-6">
						<li>
							Labels are different diagnoses, benign and
							dangerous.
						</li>
					</ul>
				</section>
				<section>
					<h2 className="font-bold mt-4 text-xl">
						Deploying the CNN:{" "}
					</h2>
					<br></br>
					<SyntaxHighlighter
						language="python"
						style={solarizedlight} // You can change this to any Prism.js theme
						customStyle={{
							padding: "1rem",
							borderRadius: "0.5rem",
							background: "#f5f2f0",
							fontSize: "0.8rem",
						}}
					>
						{`# API route for prediction
@app.route('/predict', methods=['POST'])
def predict():
    if 'file' not in request.files:
        return jsonify({'error': 'No file uploaded'}), 400

    file = request.files['file']
    if file.filename == '':
        return jsonify({'error': 'No file selected'}), 400

    try:
        # Read and preprocess image file
        image = Image.open(io.BytesIO(file.read()))
        processed_image = preprocess_image(image)
        # Make a prediction
        predictions = loaded_model.predict(processed_image)
        predicted_class = np.argmax(predictions, axis=1)[0]
        class_names = ['akiec', 'bcc', 'bkl', 'df', 'mel', 'nv', 'vasc']
        result = class_names[predicted_class]
        return jsonify({'prediction': result})
    except Exception as e:
        return jsonify({'error': str(e)}), 500`}
					</SyntaxHighlighter>
					<br></br>
					<ul className="list-disc ml-6">
						<li>
							Simple API route to read and preprocess the uploaded
							image, and return the model's prediction.{" "}
						</li>
					</ul>
				</section>
				<section>
					<h2 className="font-bold mt-4 text-xl">
						Transfer Learning Model:{" "}
					</h2>
					<SyntaxHighlighter
						language="python"
						style={solarizedlight} // You can change this to any Prism.js theme
						customStyle={{
							padding: "1rem",
							borderRadius: "0.5rem",
							background: "#f5f2f0",
							fontSize: "0.8rem",
						}}
					>
						{`def transfer_learning_model():
  mobilenet_model = MobileNet(input_shape=(IMG_HEIGHT,IMG_WIDTH,3), include_top=False, pooling="max")

  transfer_model = Sequential()
  transfer_model.add(mobilenet_model)     # Input the mobilenet transfer model as a "layer"
  transfer_model.add(Dropout(0.1))
  transfer_model.add(BatchNormalization())
  transfer_model.add(Dense(256, activation="relu"))
  transfer_model.add(Dropout(0.1))
  transfer_model.add(BatchNormalization())
  transfer_model.add(Dense(7, activation="softmax"))

  # initiate RMSprop optimizer
  opt = keras.optimizers.RMSprop(lr=0.0001, decay=1e-6)

  # Train the model using RMSprop again
  transfer_model.compile(loss='categorical_crossentropy',
                optimizer=opt,
                metrics=[tf.keras.metrics.AUC()])

  return transfer_model`}
					</SyntaxHighlighter>
				</section>
				<h2 className="font-bold mt-4 text-xl">
					Full code:{" "}
					<a
						href="https://colab.research.google.com/drive/1YrXuevHji5A9_ShettiXvMJJZbrOwEPZ?usp=sharing"
						target="_blank"
						rel="noopener noreferrer"
						className="text-purple-600 hover:text-purple-800 underline decoration-purple-300 hover:decoration-purple-500 transition-colors"
					>
						Link
					</a>
				</h2>
			</div>
		),
	},
];

export default projectsData;
