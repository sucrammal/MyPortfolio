import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { solarizedlight } from "react-syntax-highlighter/dist/esm/styles/prism";

const genMDProject = {
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
	image: "/images/genMD/genMDDesign.png",
	labels: ["Web Development"],
	fullContent: (
		<div>
			<section>
				<img
					src="/images/genMD/genMDWhiteboard.jpg"
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
						inquiries, and speedup appointment bookings by filling
						in the booking forms for you.{" "}
					</li>
				</ul>
				<h3 className="font-semibold mt-4">Responsibilities</h3>
				<ul className="list-disc ml-6">
					<li>
						Design basic agentic feedback loops, LLM tooling, and
						document extraction with OpenAI LLMs, and design the API
						requests.{" "}
					</li>
					<li>
						Learn and add Chrome extension development dependencies
						to design overall project structure and "backend"
						emissions.{" "}
					</li>
				</ul>
				<h3 className="font-semibold mt-4">Outcomes</h3>
				<ul className="list-disc ml-6">
					<li>
						Designed emitters and receivers between backend and
						frontend to send LLM responses to extension and browser
						DOM.{" "}
					</li>
					<li>
						Designed the main conversation function to maintain and
						update context and perform tool calling inference.{" "}
					</li>
					<li>
						{" "}
						Designed functions to extract text from uploaded doc and
						image files, and the user data schema that the LLM
						infers and fills.{" "}
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
						Ensures error handling for unrecognized function calls.
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
						If a close-enough match is found, we return the location
						name. The caller of this function can use locationMap (a
						hashmap) to access the lat and lon of the location to
						display on the map.
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
						Updating and synchronizing timer and lives data across
						clients, checking end-condition depending on
						solo/multiplayer.{" "}
					</li>
					<li>
						Passes the turn if the current player runs out of time
						(or if a valid location is guessed).{" "}
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
					className="text-teal-600 hover:text-teal-700 underline decoration-teal-300 hover:decoration-teal-500 transition-colors"
				>
					Link
				</a>
			</h2>
		</div>
	),
};

export default genMDProject;
