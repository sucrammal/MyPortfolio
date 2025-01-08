import React from "react";

function Header() {
	return (
		<header className="bg-gray-800 text-white py-4">
			<nav className="container mx-auto flex justify-between">
				<h1 className="text-2xl font-bold">My Portfolio</h1>
				<div>
					<a href="#home" className="mx-2 hover:underline">
						Home
					</a>
					<a href="#portfolio" className="mx-2 hover:underline">
						Portfolio
					</a>
				</div>
			</nav>
		</header>
	);
}

export default Header;
