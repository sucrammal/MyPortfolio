const viamProject = {
	title: "Robotics Internship @ Viam",
	shortDescription:
		"Shipped LLM-assisted robot config editing and a 3D motion-plan debugger for Viam's robotics platform.",
	tags: [
		"TypeScript",
		"Svelte",
		"Go",
		"gRPC",
		"LLMs",
		"3D Visualization",
		"Robotics",
	],
	image: "/images/viam/viam-group.jpg",
	labels: ["Robotics", "Web Development"],
	fullContent: (
		<div>
			<section>
				<img
					src="/images/viam/viam-group.jpg"
					alt="Viam team"
					className="w-full rounded-lg shadow-lg"
				/>
				<h3 className="font-semibold mt-4">Premise</h3>
				<ul className="list-disc ml-6">
					<li>
						Software engineering intern for a summer on the
						Visualization team at{" "}
						<a
							href="https://www.viam.com/"
							target="_blank"
							rel="noopener noreferrer"
							className="text-teal-600 hover:text-teal-700 underline decoration-teal-300 hover:decoration-teal-500 transition-colors"
						>
							Viam
						</a>
						, a platform (and open-source robot control software,
						RDK) for configuring, monitoring, and debugging real
						robots.{" "}
					</li>
					<li>
						My team owned the in-browser 3D visualizer used across
						Viam's app — the tool people use to see their robot's
						current frame geometry, obstacles, and motion plans in
						3D instead of reading raw configs and logs.{" "}
					</li>
					<li>
						No code samples in this entry — Viam's codebase is
						proprietary — but the projects, decisions, and bugs
						below are all mine to talk about.{" "}
					</li>
				</ul>
				<h3 className="font-semibold mt-4">Responsibilities</h3>
				<ul className="list-disc ml-6">
					<li>
						Shipped two features end-to-end, each spanning the
						visualizer package and the main web app: scoping,
						implementation, testing against real robot data, and
						review.{" "}
					</li>
					<li>
						Wrote short scope docs before building anything
						nontrivial, to force architecture disagreements onto
						paper before they became expensive to unwind in code.{" "}
					</li>
					<li>
						Picked up a rotating set of smaller tickets alongside
						the two main features, and wrote handoff
						documentation at the end of the internship so the team
						could pick up unfinished and future work without
						re-deriving my context.{" "}
					</li>
				</ul>
				<h3 className="font-semibold mt-4">Technologies Used</h3>
				<div className="mt-3 flex flex-wrap gap-1.5">
					<span className="px-2 py-1 text-s rounded-full bg-gray-100 text-gray-600">
						TypeScript
					</span>
					<span className="px-2 py-1 text-s rounded-full bg-gray-100 text-gray-600">
						Svelte
					</span>
					<span className="px-2 py-1 text-s rounded-full bg-gray-100 text-gray-600">
						Go
					</span>
					<span className="px-2 py-1 text-s rounded-full bg-gray-100 text-gray-600">
						gRPC / Protobuf
					</span>
					<span className="px-2 py-1 text-s rounded-full bg-gray-100 text-gray-600">
						3D Visualization (ECS)
					</span>
					<span className="px-2 py-1 text-s rounded-full bg-gray-100 text-gray-600">
						LLM structured outputs
					</span>
				</div>
			</section>

			<section>
				<br></br>
				<h2 className="font-bold mt-4 text-xl">
					Motion Plan Replayer
				</h2>
				<ul className="list-disc ml-6">
					<li>
						A robot "motion plan" is a request (frame config,
						start and end pose) plus a response (the resulting
						joint trajectory). Before this tool, the only way to
						know why a plan failed or looked wrong was reading
						logs and guessing.{" "}
					</li>
					<li>
						Built a tool to load a captured motion-plan JSON and
						scrub a robot arm through its planned trajectory in
						3D — in both the standalone visualizer dev tool and
						embedded in the main app — so a plan can be visually
						inspected and replayed instead of trusted blind.{" "}
					</li>
					<li>
						The trajectory's forward kinematics can be computed
						two ways: an authoritative path that runs against
						Viam's real robot-control library on a backend
						service, and a lighter client-side fallback for the
						standalone tool. Keeping both paths honestly in sync
						with each other turned out to be the harder half of
						the project.{" "}
					</li>
				</ul>
				<h3 className="font-semibold mt-4">
					Three bugs that shaped the project
				</h3>
				<ul className="list-disc ml-6">
					<li>
						<strong>Two fields, same name.</strong> The first
						working version rendered an arm's pose visibly and
						badly wrong. Root cause: the plan JSON has two
						different attributes both named "geometry" — one for
						a frame's own local origin, one for its collision
						geometry's center — and the code was reading the
						wrong one. The fix was small; the lesson was bigger:
						list out every point of possible confusion before
						writing code, and change one variable at a time when
						something looks wrong.{" "}
					</li>
					<li>
						<strong>An assumption that only some robots share.</strong>{" "}
						Early logic assumed every joint frame started in a
						neutral (identity) rotation. True for some arm
						models, false for others — it only surfaced once I
						tested against a diverse set of real arm models
						instead of my own hand-built fixtures. Your own test
						cases are always too clean; going and finding messy
						real-world data early would have caught it sooner.{" "}
					</li>
					<li>
						<strong>A data model that didn't fit the domain.</strong>{" "}
						Joints and non-joint components (cameras, grippers)
						were originally tracked in separate maps, which
						silently orphaned components parented to certain
						frame types. Consolidating everything into one
						node-tree structure — every joint and frame a node in
						the same tree — removed the class of bug rather than
						patching each instance of it.{" "}
					</li>
				</ul>
				<h3 className="font-semibold mt-4">
					Writing it down before writing code
				</h3>
				<ul className="list-disc ml-6">
					<li>
						The backend-vs-client-side kinematics question was a
						genuine architecture disagreement across the team. I
						wrote a short scope doc rather than defaulting to
						whichever path I'd already started, and we landed on
						doing both deliberately: ship the client-side version
						first to get the tool in front of users fast, and
						build the backend service in parallel as the
						long-term, fully-accurate source of truth. A document
						is a much cheaper place to find disagreements than
						code is.{" "}
					</li>
				</ul>
			</section>

			<section>
				<br></br>
				<h2 className="font-bold mt-4 text-xl">LLM Scene Builder</h2>
				<ul className="list-disc ml-6">
					<li>
						A natural-language editor for a robot's component
						frames in the visualizer — type "move the camera 100mm
						up and rotate the gripper 90°" and an LLM returns
						structured per-component edits (position, rotation,
						parent, geometry), shown as a reviewable diff before
						anything is applied.{" "}
					</li>
					<li>
						Scoped deliberately narrow for v1: the model can only
						modify existing components, not add or remove them —
						a request to add something comes back as an explicit
						refusal rather than a hallucinated edit.{" "}
					</li>
					<li>
						Every request — prompt, proposed edits, and the
						model's own explanation for each one — gets logged.
						That observability was a hard requirement, and it's
						the only way agent-behavior bugs and bad prompts get
						caught after shipping instead of silently degrading
						trust in the feature.{" "}
					</li>
				</ul>
				<h3 className="font-semibold mt-4">
					The representation the model sees isn't the one you
					store
				</h3>
				<ul className="list-disc ml-6">
					<li>
						Viam stores component orientation in a compact
						internal vector encoding. That encoding is what I'd
						call LLM-hostile: language models reliably reason
						about Euler angles and quaternions, and unreliably
						about a custom axis-plus-angle representation. The
						fix was converting at the boundary — the model only
						ever sees and returns Euler degrees, translated to
						and from the internal format on the way in and out —
						rather than trying to prompt the model into
						understanding the internal format directly.{" "}
					</li>
					<li>
						Kept the editor itself generic: all Viam-specific
						wiring (which model to call, how to fetch the org's
						data) lives in the app layer behind a single injected
						callback, so the reusable component has no
						app-specific logic baked in.{" "}
					</li>
				</ul>
			</section>

			<section>
				<br></br>
				<h2 className="font-bold mt-4 text-xl">
					Other things that stuck
				</h2>
				<ul className="list-disc ml-6">
					<li>
						Split large changes into small, independently
						reviewable and revertible pull request stacks rather
						than one large diff — much faster to review, and much
						cheaper to back out if one piece was wrong.{" "}
					</li>
					<li>
						Kept reusable internal tools and the app that embeds
						them on opposite sides of a clean boundary — the tool
						exposes a small interface, the app supplies
						app-specific behavior through it, and neither leaks
						into the other.{" "}
					</li>
					<li>
						Picked up a handful of smaller fixes along the way —
						a config-sync bug for a robot component with
						configurable dimensions, a bidirectional
						selection/highlight feature between a table and its
						3D view, and adding a new gRPC backend route
						end-to-end (including learning the hard way that
						routing infrastructure has to be deployed, not just
						merged, before it actually takes traffic).{" "}
					</li>
					<li>
						Documented my two main features, plus a couple of
						designed-but-unbuilt ones, in handoff docs for the
						team — the kind of writing that's easy to skip and
						expensive to have skipped.{" "}
					</li>
				</ul>
			</section>
		</div>
	),
};

export default viamProject;
