import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { solarizedlight } from "react-syntax-highlighter/dist/esm/styles/prism";

const robotLearningProject = {
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
						<strong>Goal-Conditioned Trajectory Learning</strong> —
						an adaptive MPC controller that searches action space
						with symmetric perturbations, tuned on-the-fly to the
						arm's degrees of freedom.
					</li>
					<li>
						<strong>Diffusion Policy for Push-T</strong> — a DDPM
						that learns a distribution over action sequences,
						generating full trajectories in one pass conditioned on
						the latest observations.
					</li>
				</ul>
				<h3 className="font-semibold mt-4">Key Responsibilities</h3>
				<ul className="list-disc ml-6">
					<li>
						Collected &amp; labelled 40k state-action samples across
						1-, 2- &amp; 3-link arms for supervised dynamics
						learning.
					</li>
					<li>
						Designed semi-implicit update physics in{" "}
						<code>Model2Link</code> for stable rollouts at 100-Hz.
					</li>
					<li>
						Implemented cosine-schedule DDPM with EMA &amp; FiLM
						conditioning to push blocks with 92% success on unseen
						layouts.
					</li>
				</ul>
			</section>
			<section>
				<h3 className="font-semibold mt-4">Adaptive MPC Search Loop</h3>
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
					<em>Why it matters:</em> Automatically adapts exploration
					scale, horizon &amp; iteration budget to robot DOF, finding
					low-torque solutions in &lt;40-ms per action.
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
                print(f"Stopping early at step {s+1}, goal reached!\\n")
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
						state-action pairs (X) and next states (Y) for dynamics
						learning, using MPC incrementally to refine
						trajectories.
					</li>
					<li>
						Implements early stopping when goal is reached within
						distance and velocity thresholds
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
						signal (small β), later timesteps add more noise, which
						the policy finds easier to model than a linear schedule.
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
    alpha_bar_k = self.alpha_k_cumprod[k]\\
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
						Diffuse: adds Gaussian noise with variance scheduled by
						α̅ₖ. A clean separation between coefficients and shapes
						keeps it batch-agnostic and vectorised
					</li>
					<li>
						Denoise: Implements the exact posterior mean &variance
						from DDPM theory, so every reverse step is fully
						probabilistic—no heuristic tweaks needed
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

    print(f"Epoch {epoch:02d}  |  loss = {np.mean(losses):.4f}")
`}
				</SyntaxHighlighter>
				<ul className="list-disc ml-6">
					<li>
						Uses EMA to track the moving average of the model
						parameters, which helps stabilize the training process.
					</li>
					<li>
						Uses FiLM conditioning (through nobs, the last 2
						observations)to inject the observation into the noise
						prediction network (global_cond vector is pushed through
						an MLP that outputs a pair of scale y and shift β values
						for each residual block), which helps the model learn
						better.
					</li>
				</ul>
			</section>
			<h2 className="font-bold mt-4 text-xl">
				Full Github Repo here:{" "}
				<a
					href="https://github.com/sucrammal/robotLearning"
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

export default robotLearningProject;
