import React, { useEffect } from 'react';
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Header = () => {
	useEffect(() => {
	  // Load Inter font
	  const loadFont = async () => {
		await document.fonts.load('1rem "Inter"');
		document.body.classList.add('font-inter');
	  };
	  
	  const link = document.createElement('link');
	  link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap';
	  link.rel = 'stylesheet';
	  document.head.appendChild(link);
	  
	  loadFont();
	}, []);
	return (
	  <header className="w-full bg-gradient-to-r from-purple-500/10 to-purple-600/5 backdrop-blur-sm border-b border-purple-100/20">
		<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		  <nav className="flex items-center justify-between h-16">
			{/* Logo/Name */}
			<div className="flex-shrink-0">
			  <Link 
				to="/" 
				className="text-5xl font-semibold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent hover:opacity-80 transition-opacity font-inter"
			  >
				Marcus Lam
			  </Link>
			</div>
			{/* Navigation Links */}
			<div className="hidden sm:flex sm:space-x-8">
			  <Link
				to="/projects"
				className="group relative px-3 py-2 text-lg font-medium text-gray-700 transition-colors font-inter"
			  >
				<span className="relative">
				  Projects
				  <span className="absolute bottom-[-24px] left-0 h-[2px] w-full origin-left scale-x-0 transform bg-purple-600 transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
				</span>
			  </Link>
			  <Link
				to="/news"
				className="group relative px-3 py-2 text-lg font-medium text-gray-700 transition-colors font-inter"
			  >
				<span className="relative">
				  News
				  <span className="absolute bottom-[-24px] left-0 h-[2px] w-full origin-left scale-x-0 transform bg-purple-600 transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
				</span>
			  </Link>
			</div>
			{/* Mobile Menu Button */}
			<div className="sm:hidden">
			  <button
				type="button"
				className="text-gray-700 hover:text-purple-600 p-2 rounded-md transition-colors"
				aria-label="Toggle menu"
			  >
				<svg
				  className="h-6 w-6"
				  fill="none"
				  viewBox="0 0 24 24"
				  stroke="currentColor"
				>
				  <path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
					d="M4 6h16M4 12h16M4 18h16"
				  />
				</svg>
			  </button>
			</div>
		  </nav>
		</div>
	  </header>
	);
  };
  export default Header;