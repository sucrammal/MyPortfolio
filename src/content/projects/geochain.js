import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { solarizedlight } from "react-syntax-highlighter/dist/esm/styles/prism";

const geochainProject = {
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
						Country, City, or State (CCS). The next person has to
						name another CCS starting with the last letter of the
						previously named CCS. This ends until someone fails to
						name one.{" "}
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
						stored and accessed from, and wrote logic to verify a
						user's CCS guess using RegEx.{" "}
					</li>
					<li>
						Designed the timer, player lives, map and marker, and
						end game condition logic.{" "}
					</li>
					<li>
						Used Web Sockets to to process the above logic in the
						server, and send concurrent updates to clients
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
						websockets, including handling user connections, room
						creation, and state synchronization.{" "}
					</li>
					<li>
						Implemented error handling to prevent users from joining
						a game that has already started.
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
						Sends AI-generated recommendations to the active tab via
						chrome.tabs.sendMessage()
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
					className="text-teal-600 hover:text-teal-700 underline decoration-teal-300 hover:decoration-teal-500 transition-colors"
				>
					Link
				</a>
			</h2>
		</div>
	),
};

export default geochainProject;
