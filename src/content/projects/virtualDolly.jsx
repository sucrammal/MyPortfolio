import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { solarizedlight } from "react-syntax-highlighter/dist/esm/styles/prism";

const virtualDollyProject = {
	title: "Virtual Dolly — AI Video Production Platform",
	shortDescription:
		"1st Place at NYC Bootstrapping Reality Hackathon. Scan scenes with Gaussian Splatting, explore using autonomous agents, film B-roll shots, and generate cinematic videos with AI. Built in 10 hours.",
	tags: [
		"React",
		"Next.js",
		"Three.js",
		"AI/ML",
		"Computer Vision",
		"GSAP",
		"TypeScript",
		"Zustand",
		"API Integration",
	],
	image: "/images/virtualDolly/vdolly_thumbnail.png",
	labels: ["Web Development", "Robotics", "Data Science"],
	fullContent: (
		<div>
			<section>
				<h3 className="font-semibold mt-4">Award</h3>
				<p className="mt-2">
					<strong>1st Place</strong> at NYC Bootstrapping Reality
					Hackathon — Built in 10 hours with a 4-person team
				</p>
				<p className="mt-2 text-sm text-gray-600">
					Hosted by leading startups in the spatial computing space,
					showcasing cutting-edge innovations in 3D technology and
					AI-powered content creation.
				</p>

				<h3 className="font-semibold mt-4">Overview</h3>
				<p className="mt-2">
					Virtual Dolly is a human-in-the-loop video production
					platform that combines 3D Gaussian Splatting, autonomous
					exploration agents, and AI video generation. It enables
					anyone to create professional "dolly" shots by scanning real
					environments and using AI to generate smooth camera
					movements.
				</p>

				<h3 className="font-semibold mt-4">The Problem</h3>
				<p className="mt-2">
					Creating professional video content requires expensive
					equipment and cinematography expertise. AI video generation
					models like Luma Labs can create videos, but lack precise
					camera control and scene awareness.
				</p>

				<h3 className="font-semibold mt-4">Our Solution</h3>
				<ul className="list-disc ml-6">
					<li>
						<strong>Scan real environments</strong> into 3D Gaussian
						Splats
					</li>
					<li>
						<strong>Autonomous exploration</strong> to discover
						visually interesting angles
					</li>
					<li>
						<strong>Precise camera control</strong> with
						professional dolly movements
					</li>
					<li>
						<strong>AI-powered video generation</strong> with
						multi-image keyframe guidance
					</li>
				</ul>
			</section>

			<section>
				<h2 className="font-bold mt-4 text-xl">System Architecture</h2>
				<div className="bg-gray-50 p-4 rounded-lg my-4 font-mono text-sm">
					<pre>{`┌─────────────────────────────────────────────────────────┐
│                    Virtual Dolly                        │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐ │
│  │  3D Viewer   │  │   Editor     │  │  B-roll Gen  │ │
│  │  (Three.js)  │  │  (Timeline)  │  │  (Agents)    │ │
│  └──────┬───────┘  └──────┬───────┘  └──────┬───────┘ │
│         │                 │                  │         │
│         └─────────────────┼──────────────────┘         │
│                           │                            │
│              ┌────────────▼───────────┐                │
│              │   Zustand Store        │                │
│              │  (Global State)        │                │
│              └────────────┬───────────┘                │
│                           │                            │
│         ┌─────────────────┼─────────────────┐          │
│         │                 │                 │          │
│  ┌──────▼────────┐ ┌──────▼────────┐ ┌─────▼──────┐  │
│  │   Camera      │ │   Scene       │ │    POI     │  │
│  │   Animator    │ │   Analysis    │ │   Manager  │  │
│  └───────────────┘ └───────────────┘ └────────────┘  │
│         │                 │                 │          │
│         └─────────────────┼─────────────────┘          │
│                           │                            │
│              ┌────────────▼───────────┐                │
│              │   Frame Generation     │                │
│              │   Service              │                │
│              └────────────┬───────────┘                │
│                           │                            │
│              ┌────────────▼───────────┐                │
│              │   Luma Labs API        │                │
│              │   (AI Video Gen)       │                │
│              └────────────────────────┘                │
│                                                         │
└─────────────────────────────────────────────────────────┘`}</pre>
				</div>
			</section>

			<section>
				<h2 className="font-bold mt-4 text-xl">
					My Technical Contributions
				</h2>

				<h3 className="font-semibold mt-4">
					1. Autonomous Exploration Agent System
				</h3>
				<p className="mt-2">
					Designed and implemented a multi-agent system that
					autonomously explores 3D Gaussian splat environments to
					discover optimal camera angles for B-roll footage.
				</p>
				<ul className="list-disc ml-6 mt-2">
					<li>
						<strong>Multi-strategy pathfinding</strong>: Grid-based,
						random walk, and frontier exploration
					</li>
					<li>
						<strong>Real-time scene analysis</strong>: Agents
						analyze visual content at each position
					</li>
					<li>
						<strong>Spatial indexing</strong>: Efficient grid-based
						cell tracking for exploration progress
					</li>
					<li>
						<strong>Autonomous decision-making</strong>: Agents
						independently choose next exploration targets
					</li>
				</ul>
				<SyntaxHighlighter
					language="typescript"
					style={solarizedlight}
					customStyle={{
						padding: "1rem",
						borderRadius: "0.5rem",
						background: "#f5f2f0",
						fontSize: "0.75rem",
					}}
				>
					{`export class ExplorationManager {
  private config: ExplorationConfig;

  // Generate agents with different exploration strategies
  generateAgents(count: number): Agent[] {
    const agents: Agent[] = [];
    const colors = ["#3b82f6", "#ef4444", "#10b981", "#f59e0b", "#8b5cf6"];

    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2;
      const radius = 0.5;
      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;

      agents.push({
        id: \`agent-\${i}\`,
        position: { x, y: this.config.height, z },
        direction: { x: Math.cos(angle), y: 0, z: Math.sin(angle) },
        status: "idle",
        color: colors[i % colors.length],
      });
    }
    return agents;
  }

  // Autonomous navigation with different strategies
  getNextTarget(
    agent: Agent,
    exploredCells: Set<string>
  ): { x: number; z: number } | null {
    if (this.config.strategy === "grid") {
      return this.getNextGridCell(agent, exploredCells);
    } else if (this.config.strategy === "frontier") {
      return this.getFrontierTarget(exploredCells); // Prioritize edges
    }
    return this.getRandomTarget();
  }
}`}
				</SyntaxHighlighter>

				<h3 className="font-semibold mt-4">
					2. Computer Vision Scene Analysis Engine
				</h3>
				<p className="mt-2">
					Built sophisticated image analysis algorithms to identify
					visually interesting camera angles using edge detection,
					color variance, and contrast scoring.
				</p>
				<ul className="list-disc ml-6 mt-2">
					<li>
						<strong>Sobel Edge Detection</strong>: Classic computer
						vision algorithm implemented from scratch
					</li>
					<li>
						<strong>Statistical Analysis</strong>: Color variance
						and contrast scoring using standard deviation
					</li>
					<li>
						<strong>Weighted Scoring System</strong>: Multi-factor
						heuristic for visual interest
					</li>
					<li>
						<strong>Performance Optimization</strong>: Spatial
						sampling (every 4th pixel) for real-time analysis
					</li>
				</ul>
				<SyntaxHighlighter
					language="typescript"
					style={solarizedlight}
					customStyle={{
						padding: "1rem",
						borderRadius: "0.5rem",
						background: "#f5f2f0",
						fontSize: "0.75rem",
					}}
				>
					{`// Sobel operator for edge detection
function calculateEdgeScore(
  data: Uint8ClampedArray, 
  width: number, 
  height: number
): number {
  let totalEdgeStrength = 0;
  let sampleCount = 0;

  for (let y = 1; y < height - 1; y += 4) {
    for (let x = 1; x < width - 1; x += 4) {
      // Sobel kernels for x and y gradients
      const gx =
        -1 * getGrayscale(data, x - 1, y - 1, width) +
         1 * getGrayscale(data, x + 1, y - 1, width) +
        -2 * getGrayscale(data, x - 1, y, width) +
         2 * getGrayscale(data, x + 1, y, width) +
        -1 * getGrayscale(data, x - 1, y + 1, width) +
         1 * getGrayscale(data, x + 1, y + 1, width);

      const gy = /* ... y-direction gradients ... */;

      const edgeStrength = Math.sqrt(gx * gx + gy * gy);
      totalEdgeStrength += edgeStrength;
      sampleCount++;
    }
  }

  return Math.min(100, (totalEdgeStrength / sampleCount / 255) * 100 * 2);
}

// Composite interest scoring
export function analyzeFrame(imageData: ImageData): AnalysisResult {
  const edgeScore = calculateEdgeScore(data, width, height);
  const colorVariance = calculateColorVariance(data);
  const contrastScore = calculateContrast(data);

  // Weighted composite score
  const interestScore = Math.round(
    edgeScore * 0.4 +
    colorVariance * 0.3 +
    contrastScore * 0.3
  );

  return { interestScore, edgeScore, colorVariance, contrastScore };
}`}
				</SyntaxHighlighter>

				<h3 className="font-semibold mt-4">
					3. Professional Camera Animation System
				</h3>
				<p className="mt-2">
					Created a GSAP-powered cinematic camera animation system
					with support for multiple dolly movements (orbit, truck,
					pedestal, dolly in/out, arc paths).
				</p>
				<ul className="list-disc ml-6 mt-2">
					<li>
						<strong>GSAP Integration</strong>: Professional-grade
						animation library for smooth interpolation
					</li>
					<li>
						<strong>6 Camera Movement Types</strong>: Orbit, truck,
						pedestal, dolly in/out, arc, linear
					</li>
					<li>
						<strong>Sine In/Out Easing</strong>: Cinematic-quality
						motion curves
					</li>
					<li>
						<strong>Keyframe System</strong>: Timeline-based
						animation with precise control
					</li>
				</ul>
				<SyntaxHighlighter
					language="typescript"
					style={solarizedlight}
					customStyle={{
						padding: "1rem",
						borderRadius: "0.5rem",
						background: "#f5f2f0",
						fontSize: "0.75rem",
					}}
				>
					{`export class CameraAnimator {
  private timeline: gsap.core.Timeline | null = null;

  // Generate smooth circular orbit path
  generateCircularPath(
    center: THREE.Vector3,
    radius: number,
    height: number,
    numKeyframes: number,
    duration: number
  ): void {
    this.keyframes = [];
    const angleStep = (Math.PI * 2) / numKeyframes;
    const timeStep = duration / numKeyframes;

    for (let i = 0; i <= numKeyframes; i++) {
      const angle = angleStep * i;
      const x = center.x + radius * Math.cos(angle);
      const z = center.z + radius * Math.sin(angle);

      this.addKeyframe({
        time: timeStep * i,
        position: { x, y: height, z },
        target: { x: center.x, y: center.y, z: center.z },
      });
    }
  }

  // Professional easing for cinematic feel
  private buildTimeline(): void {
    this.timeline = gsap.timeline({
      paused: true,
      onUpdate: () => {
        this.currentTime = this.timeline?.time() || 0;
        this.controls.update();
      },
    });

    for (let i = 0; i < this.keyframes.length - 1; i++) {
      const current = this.keyframes[i];
      const next = this.keyframes[i + 1];
      const duration = next.time - current.time;

      // Smooth cinematic easing
      this.timeline.to(
        this.camera.position,
        {
          x: next.position.x,
          y: next.position.y,
          z: next.position.z,
          duration,
          ease: "sine.inOut", // Professional easing curve
        },
        current.time
      );
    }
  }
}`}
				</SyntaxHighlighter>

				<h3 className="font-semibold mt-4">
					4. Frame Generation & Video Pipeline
				</h3>
				<p className="mt-2">
					Implemented a sophisticated frame capture system that
					generates intermediate frames from keyframes with precise
					interpolation for AI video generation.
				</p>
				<ul className="list-disc ml-6 mt-2">
					<li>
						<strong>Parametric Interpolation</strong>: Smooth
						interpolation with easing functions
					</li>
					<li>
						<strong>Render Synchronization</strong>: Waits for WebGL
						to complete rendering before capture
					</li>
					<li>
						<strong>Efficient Sampling</strong>: Configurable frame
						count with uniform distribution
					</li>
					<li>
						<strong>Canvas-to-Blob Pipeline</strong>: Async image
						capture with quality/format control
					</li>
				</ul>
				<SyntaxHighlighter
					language="typescript"
					style={solarizedlight}
					customStyle={{
						padding: "1rem",
						borderRadius: "0.5rem",
						background: "#f5f2f0",
						fontSize: "0.75rem",
					}}
				>
					{`// Sine easing function matching GSAP's "sine.inOut"
function easeInOutSine(t: number): number {
  return -(Math.cos(Math.PI * t) - 1) / 2;
}

// Interpolate camera position/rotation between keyframes
export function interpolateKeyframe(
  k1: CameraKeyframe,
  k2: CameraKeyframe,
  t: number,
  useEasing = true
): Omit<CameraKeyframe, "id"> {
  const easedT = useEasing ? easeInOutSine(t) : t;

  return {
    time: lerp(k1.time, k2.time, t),
    position: {
      x: lerp(k1.position.x, k2.position.x, easedT),
      y: lerp(k1.position.y, k2.position.y, easedT),
      z: lerp(k1.position.z, k2.position.z, easedT),
    },
    target: {
      x: lerp(k1.target.x, k2.target.x, easedT),
      y: lerp(k1.target.y, k2.target.y, easedT),
      z: lerp(k1.target.z, k2.target.z, easedT),
    },
    fov: k1.fov !== undefined && k2.fov !== undefined
      ? lerp(k1.fov, k2.fov, easedT)
      : k1.fov,
  };
}`}
				</SyntaxHighlighter>

				<h3 className="font-semibold mt-4">
					5. Luma Labs AI Video Integration
				</h3>
				<p className="mt-2">
					Integrated Luma Labs Dream Machine API for AI-powered video
					generation from keyframe images.
				</p>
				<ul className="list-disc ml-6 mt-2">
					<li>
						<strong>Multi-step Pipeline</strong>: Upload → API call
						→ Polling → Download
					</li>
					<li>
						<strong>Cloudflare R2 Integration</strong>: Handles
						image hosting for API compatibility
					</li>
					<li>
						<strong>Async/Await Pattern</strong>: Clean asynchronous
						code flow
					</li>
					<li>
						<strong>Polling Mechanism</strong>: Recursive polling
						with timeout protection
					</li>
				</ul>
				<SyntaxHighlighter
					language="typescript"
					style={solarizedlight}
					customStyle={{
						padding: "1rem",
						borderRadius: "0.5rem",
						background: "#f5f2f0",
						fontSize: "0.75rem",
					}}
				>
					{`export class LumaService {
  // Generate video from keyframe images
  async generateVideo(
    request: LumaGenerationRequest
  ): Promise<LumaGenerationResponse> {
    // Upload all images to R2
    const imageUrls: string[] = [];
    for (const image of request.images) {
      const url = await this.uploadImageToHosting(image);
      imageUrls.push(url);
    }

    // Build keyframes object for Luma API
    const keyframes: Record<string, { type: string; url: string }> = {};
    imageUrls.forEach((url, index) => {
      keyframes[\`frame\${index}\`] = { type: "image", url };
    });

    // Call Luma Labs API
    const requestData = {
      prompt: request.prompt || "A cinematic video with smooth transitions",
      model: "ray-2",
      keyframes,
      loop: false,
      aspect_ratio: "16:9",
    };

    const response = await fetch(
      \`\${this.baseUrl}/dream-machine/v1/generations\`,
      {
        method: "POST",
        headers: {
          Authorization: \`Bearer \${this.apiKey}\`,
          "content-type": "application/json",
        },
        body: JSON.stringify(requestData),
      }
    );

    return await response.json();
  }

  // Poll for video completion
  async pollGenerationStatus(
    jobId: string,
    onStatusUpdate: (status: LumaGenerationResponse) => void,
    maxAttempts: number = 60
  ): Promise<LumaGenerationResponse> {
    let attempts = 0;
    const poll = async (): Promise<LumaGenerationResponse> => {
      const status = await this.getGenerationStatus(jobId);
      onStatusUpdate(status);

      if (status.status === "completed" || status.status === "failed") {
        return status;
      }

      if (attempts >= maxAttempts) {
        return { id: jobId, status: "failed", error: "Timeout" };
      }

      attempts++;
      await new Promise((resolve) => setTimeout(resolve, 5000));
      return poll();
    };
    return poll();
  }
}`}
				</SyntaxHighlighter>

				<h3 className="font-semibold mt-4">
					6. React State Management & UI Architecture
				</h3>
				<p className="mt-2">
					Architected the React state management system and designed
					the video editor timeline interface.
				</p>
				<ul className="list-disc ml-6 mt-2">
					<li>
						<strong>Zustand Store</strong>: Lightweight global state
						for multi-scene management
					</li>
					<li>
						<strong>Timeline Editor</strong>: Drag-and-drop clips
						with visual timeline
					</li>
					<li>
						<strong>Real-time Preview</strong>: Live camera preview
						with playback controls
					</li>
					<li>
						<strong>Agent Visualization</strong>: Real-time agent
						positions and exploration progress
					</li>
				</ul>
			</section>

			<section>
				<h2 className="font-bold mt-4 text-xl">
					Performance Highlights
				</h2>
				<ul className="list-disc ml-6">
					<li>
						<strong>Exploration Speed</strong>: 100 cells/second
						with 5 agents
					</li>
					<li>
						<strong>Frame Generation</strong>: 10 frames in ~2
						seconds
					</li>
					<li>
						<strong>Image Processing</strong>: Real-time analysis of
						256x256 images
					</li>
					<li>
						<strong>Spatial Sampling</strong>: 16x performance boost
						via every-4th-pixel sampling
					</li>
				</ul>
			</section>

			<section>
				<h2 className="font-bold mt-4 text-xl">Tech Stack</h2>
				<div className="mt-3 flex flex-wrap gap-2">
					<span className="px-3 py-1 text-sm rounded-full bg-teal-100 text-teal-700">
						React 19
					</span>
					<span className="px-3 py-1 text-sm rounded-full bg-teal-100 text-teal-700">
						Next.js 15
					</span>
					<span className="px-3 py-1 text-sm rounded-full bg-teal-100 text-teal-700">
						Three.js
					</span>
					<span className="px-3 py-1 text-sm rounded-full bg-teal-100 text-teal-700">
						TypeScript
					</span>
					<span className="px-3 py-1 text-sm rounded-full bg-teal-100 text-teal-700">
						GSAP
					</span>
					<span className="px-3 py-1 text-sm rounded-full bg-teal-100 text-teal-700">
						Zustand
					</span>
					<span className="px-3 py-1 text-sm rounded-full bg-teal-100 text-teal-700">
						Gaussian Splatting
					</span>
					<span className="px-3 py-1 text-sm rounded-full bg-teal-100 text-teal-700">
						Luma Labs API
					</span>
					<span className="px-3 py-1 text-sm rounded-full bg-teal-100 text-teal-700">
						Cloudflare R2
					</span>
					<span className="px-3 py-1 text-sm rounded-full bg-teal-100 text-teal-700">
						shadcn/ui
					</span>
				</div>
			</section>

			<section>
				<h2 className="font-bold mt-4 text-xl">Key Design Patterns</h2>
				<ul className="list-disc ml-6">
					<li>
						<strong>Service Layer Pattern</strong>: Separate
						services for frame generation, video API, scene analysis
					</li>
					<li>
						<strong>Manager Pattern</strong>: POIManager,
						ExplorationManager encapsulate complex logic
					</li>
					<li>
						<strong>Hook Composition</strong>: Custom React hooks
						for reusable logic
					</li>
					<li>
						<strong>Observer Pattern</strong>: Agents observe and
						react to scene state
					</li>
					<li>
						<strong>Strategy Pattern</strong>: Multiple exploration
						strategies (grid, random, frontier)
					</li>
				</ul>
			</section>

			<section>
				<h2 className="font-bold mt-4 text-xl">What I Learned</h2>
				<ul className="list-disc ml-6">
					<li>
						Built complex computer vision algorithms (Sobel edge
						detection) from first principles
					</li>
					<li>
						Designed autonomous multi-agent systems with spatial
						pathfinding
					</li>
					<li>
						Integrated multiple APIs with async polling mechanisms
					</li>
					<li>
						Optimized real-time performance with spatial sampling
						techniques
					</li>
					<li>
						Architected complex React applications with global state
						management
					</li>
					<li>
						Delivered a complete, production-ready product in 10
						hours under pressure
					</li>
				</ul>
			</section>

			<section>
				<h2 className="font-bold mt-4 text-xl">Impact & Recognition</h2>
				<p className="mt-2">
					Virtual Dolly won <strong>1st Place</strong> at the NYC
					Bootstrapping Reality Hackathon, demonstrating:
				</p>
				<ul className="list-disc ml-6">
					<li>
						Advanced 3D graphics programming with Three.js and
						Gaussian Splatting
					</li>
					<li>
						Computer vision algorithm implementation (edge
						detection, statistical analysis)
					</li>
					<li>
						AI/ML API integration with complex multi-step pipelines
					</li>
					<li>Complex state management and React architecture</li>
					<li>Professional UI/UX design with modern frameworks</li>
					<li>
						Ability to deliver production-ready software under tight
						time constraints
					</li>
				</ul>
			</section>

			<h2 className="font-bold mt-4 text-xl">Links</h2>
			<div className="flex gap-4 mt-2">
				<a
					href="https://videodolly.vercel.app"
					target="_blank"
					rel="noopener noreferrer"
					className="text-teal-600 hover:text-teal-700 underline decoration-teal-300 hover:decoration-teal-500 transition-colors"
				>
					Try the App →
				</a>
			</div>
		</div>
	),
};

export default virtualDollyProject;
