import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { solarizedlight } from "react-syntax-highlighter/dist/esm/styles/prism";

const bb8Project = {
	title: "Star Wars BB8 Robot",
	shortDescription:
		"An X-drive robot that goes inside a sphere to look like BB8",
	tags: ["CAD", "Arduino", "RC", "Electronics"],
	image: "/images/bb8/bb8CAD.png",
	labels: ["Robotics"],
	fullContent: (
		<div>
			<section>
				<img
					src="/images/bb8/bb8CADFull.png"
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
						I have never built a drivetrain of my own from scratch,
						let alone an X-drive like this one. I was inspired by{" "}
						<a
							href="https://www.youtube.com/watch?v=J5MxFm6p5Uc&list=PLpwJoq86vov8gnKpQkZUH4szapX1jxcmC&index=1"
							target="_blank"
							rel="noopener noreferrer"
							className="text-teal-600 hover:text-teal-700 underline decoration-teal-300 hover:decoration-teal-500 transition-colors"
						>
							James Bruton's
						</a>{" "}
						own BB8 Droid which used a suspension for the wheels of
						the robot to grip onto the top of the styrofoam ball
						body.{" "}
					</li>
				</ul>
				<h3 className="font-semibold mt-4">Outcomes</h3>
				<ul className="list-disc ml-6">
					<li>
						Used an X-drive robot with a suspension system so that
						the wheels can tilt and comply to the internal surface
						of a sphere.{" "}
					</li>
					<li>
						Fine-tuned GPT 3.5 to push classification precisions for
						certain complaint categories to 96% out of a 5-category
						dataset, distilling from GPT 4.0.{" "}
					</li>
					<li>
						Worked on a more lightweight BERT model to classify
						complaints.{" "}
					</li>
					<li>
						Utilised Ray Tune for hyperparameter optimization,
						boosting SetFit classification accuracies from 75% to
						90%.{" "}
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
				<h2 className="font-bold mt-4 text-xl">Suspension System </h2>
				<br></br>
				<video className="w-full rounded-lg shadow-lg" controls>
					<source
						src="/images/bb8/bb8Suspension.mp4"
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
						Used springs attached to the hooks to allow each motor
						to rotate upwards and hold tension to grip on inner
						surface of the sphere.{" "}
					</li>
					<li>
						Main roadblock: getting the margins right for clearance
						for smooth rotation, splitting the base into wings to
						fit print bed and increase re-manufacturing.{" "}
					</li>
				</ul>
			</section>
			<section>
				<h2 className="font-bold mt-4 text-xl">Circuit Design: </h2>
				<br></br>
				<img
					src="/images/bb8/bb8Schematic.png"
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
						isolate high voltage interference, control electronics
						and RC receiver on separate top tier.
					</li>
				</ul>
			</section>
			<section>
				<h2 className="font-bold mt-4 text-xl">Demo: </h2>
				<br></br>
				<video className="w-full rounded-lg shadow-lg" controls>
					<source src="/images/bb8/bb8Drive.mp4" type="video/mp4" />
				</video>
			</section>
		</div>
	),
};

export default bb8Project;
