const loopwattProject = {
	title: "LoopWatt: Energy-Aware Robot Policies on the Edge (WIP)",
	shortDescription:
		"In progress: a runtime controller that jointly picks a diffusion policy's inference budget and a Jetson's power state, per task phase, to minimize energy per successful robot task.",
	tags: [
		"Python",
		"PyTorch",
		"TensorRT",
		"NVIDIA Jetson",
		"Diffusion Policy",
		"LeRobot",
		"DVFS",
		"Embedded Systems",
	],
	image: "/images/loopwatt/delay-by-phase.svg",
	labels: ["Robotics", "Hardware"],
	fullContent: (
		<div>
			<section>
				<img
					src="/images/loopwatt/delay-by-phase.svg"
					alt="Grouped bar chart: held-out action error by task phase at 0, 5, and 8 steps of inference delay. Transport stays nearly flat; every other phase degrades 17-35%."
					className="w-full rounded-lg shadow-lg"
				/>
				<p className="mt-4 italic text-gray-600">
					Work in progress (Fall 2026). This entry reflects the
					project as of the first checkpoint report; numbers are
					provisional and will be updated as the project moves
					toward the final paper in December.
				</p>
				<h3 className="font-semibold mt-4">Premise</h3>
				<ul className="list-disc ml-6">
					<li>
						Semester research project for COMS 6998 (AI-Native
						Computing) at Columbia, with Shawn Kathuria and Mikul
						Saravanan.{" "}
					</li>
					<li>
						A robot arm running a learned policy on an edge board
						loops forever: infer a chunk of actions, execute it,
						infer again. Energy work on these systems usually
						reports joules per inference, but for a robot that's
						the wrong unit. A cheap inference that makes the arm
						miss costs a whole retry, and the servos draw power
						every second the task takes.{" "}
					</li>
					<li>
						LoopWatt measures <strong>energy per successful
						task</strong> (compute + servo energy, over every
						attempt including failures) and asks whether a runtime
						controller can lower it by choosing three knobs
						together, once per action chunk: the policy's
						denoising steps <code>K</code>, its execution horizon{" "}
						<code>T_a</code>, and the Jetson's power state{" "}
						<code>S</code> (power mode + GPU clock).{" "}
					</li>
					<li>
						The bet is that these knobs are coupled and that the
						best setting depends on the task phase: approach and
						transport are routine and can run slow and cheap,
						while grasp and insertion are precise and need fresh,
						accurate actions.{" "}
					</li>
				</ul>
				<h3 className="font-semibold mt-4">Responsibilities</h3>
				<ul className="list-disc ml-6">
					<li>
						Robot side: the SO-100 arm, teleoperated demonstration
						collection, camera setup, the evaluation task and
						fixtures, and running physical trials.{" "}
					</li>
					<li>
						Built the deployment runtime on the Jetson: a TensorRT
						FP16 hybrid that swaps only the denoising U-Net (the
						one part whose cost scales with <code>K</code>) into
						LeRobot's inference path, and an asynchronous chunked
						execution engine, since LeRobot only supports async
						execution for flow-matching VLAs.{" "}
					</li>
					<li>
						Wrote the power-state grid harness (pins
						<code> nvpmodel</code> mode, GPU clock, and memory
						clock without <code>jetson_clocks</code>), the
						switching-overhead benchmark, and the report that
						produces the per-cell optimal power-state map.{" "}
					</li>
					<li>
						Teammates own policy training and the offline quality
						sweeps (Mikul) and Jetson power measurement and
						calibration (Shawn).{" "}
					</li>
				</ul>
				<h3 className="font-semibold mt-4">Technologies Used</h3>
				<div className="mt-3 flex flex-wrap gap-1.5">
					<span className="px-2 py-1 text-s rounded-full bg-gray-100 text-gray-600">
						Python
					</span>
					<span className="px-2 py-1 text-s rounded-full bg-gray-100 text-gray-600">
						PyTorch
					</span>
					<span className="px-2 py-1 text-s rounded-full bg-gray-100 text-gray-600">
						TensorRT / ONNX
					</span>
					<span className="px-2 py-1 text-s rounded-full bg-gray-100 text-gray-600">
						Jetson AGX Orin
					</span>
					<span className="px-2 py-1 text-s rounded-full bg-gray-100 text-gray-600">
						LeRobot
					</span>
					<span className="px-2 py-1 text-s rounded-full bg-gray-100 text-gray-600">
						Diffusion Policy / ACT
					</span>
					<span className="px-2 py-1 text-s rounded-full bg-gray-100 text-gray-600">
						SO-100 arm
					</span>
					<span className="px-2 py-1 text-s rounded-full bg-gray-100 text-gray-600">
						Fusion 360 / 3D printing
					</span>
				</div>
			</section>

			<section>
				<br></br>
				<h2 className="font-bold mt-4 text-xl">
					The controller, as proposed
				</h2>
				<ul className="list-disc ml-6">
					<li>
						Once per chunk, the controller reads the{" "}
						<strong>phase</strong> (a rule-based state machine on
						gripper state, end-effector speed, and height, with no
						learned model) and the <strong>slack</strong>: time
						left in the current chunk minus inference latency.{" "}
					</li>
					<li>
						Negative slack means the arm stalls and the servos burn
						power while waiting. Large positive slack means the
						Jetson ran faster than it needed to and paid for it.
						The target is the cheapest configuration whose slack
						stays just above a safety margin, with action error
						inside that phase's budget.{" "}
					</li>
					<li>
						The lookup table is built offline by replaying recorded
						camera frames and joint states through the inference
						engine with the arm unplugged, so every configuration
						sees an identical input stream. Sweeping every
						configuration on the real arm would take on the order
						of a thousand trials.{" "}
					</li>
					<li>
						It will be compared against the best static
						configuration, everything-at-max, hardware-only and
						algorithm-only adaptation, and both tuned
						independently, which directly tests whether choosing
						them jointly matters.{" "}
					</li>
				</ul>
			</section>

			<section>
				<br></br>
				<h2 className="font-bold mt-4 text-xl">
					What the first checkpoint found
				</h2>
				<h3 className="font-semibold mt-4">
					The hardware knobs really are coupled
				</h3>
				<ul className="list-disc ml-6">
					<li>
						Sweeping 15 power states × <code>K</code> ×{" "}
						<code>T_a</code>, the cheapest feasible power state
						changes across the grid: five different states win
						under TensorRT. That's the hardware half of the core
						hypothesis, measured before any controller exists.{" "}
					</li>
				</ul>
				<div className="overflow-x-auto mt-3">
					<table className="text-sm border-collapse mx-auto">
						<thead>
							<tr className="border-b border-gray-300">
								<th className="px-3 py-1 text-right">K</th>
								<th className="px-3 py-1">T_a = 8</th>
								<th className="px-3 py-1">T_a = 16</th>
								<th className="px-3 py-1">T_a = 32</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td className="px-3 py-1 text-right">4</td>
								<td className="px-3 py-1">15W@408 (2.4 J)</td>
								<td className="px-3 py-1">15W@408 (4.2 J)</td>
								<td className="px-3 py-1">15W@306 (7.8 J)</td>
							</tr>
							<tr>
								<td className="px-3 py-1 text-right">8</td>
								<td className="px-3 py-1">15W@408 (2.8 J)</td>
								<td className="px-3 py-1">15W@408 (4.6 J)</td>
								<td className="px-3 py-1">15W@408 (8.2 J)</td>
							</tr>
							<tr>
								<td className="px-3 py-1 text-right">16</td>
								<td className="px-3 py-1">50W@408 (3.7 J)</td>
								<td className="px-3 py-1">15W@408 (5.4 J)</td>
								<td className="px-3 py-1">15W@408 (9.1 J)</td>
							</tr>
							<tr>
								<td className="px-3 py-1 text-right">32</td>
								<td className="px-3 py-1">50W@816 (5.4 J)</td>
								<td className="px-3 py-1">50W@612 (7.4 J)</td>
								<td className="px-3 py-1">15W@408 (10.7 J)</td>
							</tr>
						</tbody>
					</table>
					<p className="text-xs text-gray-500 text-center mt-1">
						Cheapest feasible power state (mode@GPU MHz) and energy
						per chunk, TensorRT hybrid, Jetson AGX Orin.
					</p>
				</div>
				<h3 className="font-semibold mt-4">
					Running slow beats racing to idle
				</h3>
				<ul className="list-disc ml-6">
					<li>
						15 W at 408 MHz is cheapest in 8 of 12 cells, 23–29%
						below <code>MAXN</code> at full clock. Idle power
						barely moves across power states (6.7–9.2 W) while
						busy power more than doubles, so finishing early buys
						almost nothing.{" "}
					</li>
				</ul>
				<h3 className="font-semibold mt-4">
					Switching cost limits what the controller can use
				</h3>
				<ul className="list-disc ml-6">
					<li>
						A full <code>nvpmodel</code> mode change takes ~1.36 s
						to settle, longer than any action chunk, and some modes
						need a reboot. A GPU clock change applies in 58 ms. So
						the live controller switches GPU clocks only, within
						one mode. Per-cell optimal states would save 9.7% over
						a single static state, but only 3.5–4.2% is reachable
						with clock-only switching: switching cost, not the
						coupling, bounds the payoff.{" "}
					</li>
				</ul>
				<h3 className="font-semibold mt-4">
					Denoising steps are nearly free; delay is not
				</h3>
				<ul className="list-disc ml-6">
					<li>
						On held-out demos, cutting <code>K</code> from 16 to 4
						moves the actions ~10× less than the policy's own
						error. Inference delay is what costs, and it splits the
						task in two (chart above): free-space transport
						tolerates it, while contact-rich insertion at 1 mm
						clearance does not. That split is what makes a
						per-phase table worth building.{" "}
					</li>
				</ul>
				<h3 className="font-semibold mt-4">
					Measuring the right thing
				</h3>
				<ul className="list-disc ml-6">
					<li>
						My first async engine queued each new chunk behind the
						old one. Control rate read a perfect 29.9 Hz with zero
						stalls, yet the executed actions were a median 769 ms
						stale, twice as stale as the synchronous engine, and the
						arm oscillated while carrying the peg. Skipping the
						first <code>d</code> actions of each new chunk (the
						timing model from Real-Time Chunking) brought it to 385
						ms at the same rate. Rate and stall counts can look
						perfect while the quantity that actually destabilizes
						the arm is wrong, so we now report staleness
						directly.{" "}
					</li>
				</ul>
			</section>

			<section>
				<br></br>
				<h2 className="font-bold mt-4 text-xl">
					What the measurements forced us to change
				</h2>
				<img
					src="/images/loopwatt/peg-fixture-v1.png"
					alt="Dimensioned drawing of the v1 peg-insertion fixture: block, peg, base plate, tolerance coupon, and assembly render"
					className="w-full rounded-lg shadow-lg mt-3"
				/>
				<p className="text-xs text-gray-500 text-center mt-1">
					The v1 peg-in-hole fixture. It turned out to be blind at
					the moment of mating, which drove the redesign below.
				</p>
				<ul className="list-disc ml-6 mt-3">
					<li>
						<strong>The task.</strong> In the original peg-in-hole
						scene, the carried block hid the peg from both cameras
						right when it mattered. I redesigned it as a
						peg-into-slot task where the wrist camera sees peg tip
						and slot together, and recorded 76 new teleoperated
						demonstrations.{" "}
					</li>
					<li>
						<strong>The engine.</strong> Plain PyTorch takes 671 ms
						at <code>K</code>=16 against a 533 ms chunk: infeasible
						at every horizon. The TensorRT U-Net hybrid brings it to
						128 ms.{" "}
					</li>
					<li>
						<strong>The board.</strong> The Orin Nano Super wasn't
						available, so P1 ran on a borrowed Jetson AGX Orin 64
						GB. The worry was that it would be too fast for the
						knobs to interact. It isn't.{" "}
					</li>
					<li>
						<strong>The policy.</strong> Real trials never cleared
						the 12/20 success gate (best: 3/10), always failing at
						the final insertion while pick and approach were
						reliable. We traced it to four training-config bugs,
						the main one being an unmasked loss on padded actions
						that taught the policy to freeze at the end of each
						episode, exactly at insertion. Retraining is underway.{" "}
					</li>
				</ul>
			</section>

			<section>
				<br></br>
				<h2 className="font-bold mt-4 text-xl">Next up</h2>
				<ul className="list-disc ml-6">
					<li>
						Retrain Diffusion Policy and ACT with the fixes and pass
						the 20-trial success gate on the new scene.{" "}
					</li>
					<li>
						Wire the INA260 power rig so power numbers are
						calibrated and include servo energy (every number above
						is uncalibrated <code>tegrastats</code>).{" "}
					</li>
					<li>
						Build the first lookup table, run the controller end to
						end on the arm, and pilot it against the best static
						config and everything-at-max, then the full head-to-head
						for the December paper.{" "}
					</li>
				</ul>
			</section>
			<h2 className="font-bold mt-4 text-xl">
				Paper and full Github repo: coming soon
			</h2>
		</div>
	),
};

export default loopwattProject;
