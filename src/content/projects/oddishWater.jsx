import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { solarizedlight } from "react-syntax-highlighter/dist/esm/styles/prism";

const oddishWaterProject = {
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
	image: "/images/oddishWater/oddishWaterLayout.png",
	labels: ["Robotics", "Web Development"],
	fullContent: (
		<div>
			<section>
				<video
					className="w-full rounded-lg shadow-lg oddish-video"
					controls
				>
					<source
						src="/images/oddishWater/oddishWaterDemo.mp4"
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
						Inspired by a desire to blend sustainable living with
						robotics, the robot helps detect when plants need water
						or nutrients and takes care of them autonomously.
					</li>
				</ul>
				<h3 className="font-semibold mt-4">Responsibilities</h3>
				<ul className="list-disc ml-6">
					<li>
						Led data collection experiments by varying the plant
						scene and setup to build a diverse training dataset.
					</li>
					<li>
						Trained the Action Chunking Transformer (ACT) policy on
						servo-smoothed teleoperation demonstrations using GPU
						acceleration.
					</li>
					<li>
						Wrote shell scripts to launch inference via our web app,
						activating Lerobot's SO-100 arm with custom prompts.
					</li>
				</ul>
				<h3 className="font-semibold mt-4">
					Servo Smoothing for Better Teleop
				</h3>
				<p>
					To minimize jitter in teleoperation and generate smoother
					trajectories for training, I implemented a low-pass filter
					on the teacher arm's actions before applying them to the
					student arm:
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
					allow the web interface to initiate robotic inference via a
					button click. This executes a shell script which activates
					our trained ACT policy and executes a plant-care episode
					using Lerobot:
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

python lerobot/scripts/control_robot.py \\
  --robot.type=so100 \\
  --control.type=record \\
  --control.fps=30 \\
  --control.single_task="Grasp the black cup..." \\
  --control.repo_id=\${HF_USER}/eval_act_\${RAND_ID} \\
  --control.tags='["tutorial"]' \\
  --control.warmup_time_s=3 \\
  --control.episode_time_s=30 \\
  --control.reset_time_s=30 \\
  --control.num_episodes=1 \\
  --control.push_to_hub=false \\
  --control.policy.path=outputs/train/plant_pour_data_again/checkpoints/last/pretrained_model`}
				</SyntaxHighlighter>
				<h3 className="font-semibold mt-4">Features</h3>
				<ul className="list-disc ml-6">
					<li>
						Detects plant hydration and nutrient deficiencies using
						various environmental sensors, paired with a ESP32
						microcontroller.
					</li>
					<li>
						Performs robotic actuation via SO-100 to deliver care
						precisely.
					</li>
					<li>
						Voice command through Fish Audio API and web interface
						with live camera feed.
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
						Trained both ACT and GR00T models on 50+ episodes with
						trainer-student arm configuration, ultimately selecting
						ACT for its more predictable and stable trajectories.
					</li>
					<li>
						Used Lerobot's teleoperation and inference API to call
						the robot after training completion.
					</li>
					<li>
						Web app built to interface with robot backend and host
						voice and vision APIs.
					</li>
				</ul>
				<h3 className="font-semibold mt-4">Challenges</h3>
				<ul className="list-disc ml-6">
					<li>
						Bridging Python-based ML training scripts with a Node.js
						backend.
					</li>
					<li>
						Risk of water damaging electronics led to pivoting to
						nutrient delivery.
					</li>
					<li>
						Training generalizable policies was hard; used data
						augmentation and plant diversity to improve robustness.
					</li>
				</ul>
				<h3 className="font-semibold mt-4">Accomplishments</h3>
				<ul className="list-disc ml-6">
					<li>
						Successfully delivers nutrients based on plant health
						prediction with no human input.
					</li>
					<li>
						Built an integrated web app with real-time camera
						feedback and voice control.
					</li>
					<li>
						Learned end-to-end robotic system design: perception,
						policy training, deployment, and interface.
					</li>
				</ul>
				<h3 className="font-semibold mt-4">What's Next</h3>
				<ul className="list-disc ml-6">
					<li>
						Support for more plant types and custom care profiles.
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
					className="text-teal-600 hover:text-teal-700 underline decoration-teal-300 hover:decoration-teal-500 transition-colors"
				>
					Link
				</a>
			</h2>
		</div>
	),
};

export default oddishWaterProject;
