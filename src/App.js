import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";

function App() {
	return (
		<div className="min-h-screen flex flex-col">
			{/* Header with navigation */}
			<Header />
			{/* Main content */}
			<main className="flex-grow">
				<Home />
				<Portfolio />
			</main>
			{/* Footer */}
			<Footer />
		</div>
	);
}

export default App;
