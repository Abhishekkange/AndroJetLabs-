import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold">
          YourLogo
        </Link>
        <div className="flex space-x-4">
          <div className="hidden md:flex space-x-4">
            <Link to="/" className="text-white hover:text-gray-300">
              Home
            </Link>
            <Link to="/services" className="text-white hover:text-gray-300">
              Services
            </Link>
            <Link to="/projects" className="text-white hover:text-gray-300">
              Projects
            </Link>
            <Link to="/contact" className="text-white hover:text-gray-300">
              Contact Us
            </Link>
            <Link to="/blog" className="text-white hover:text-gray-300">
              Blog
            </Link>
          </div>
          <div className="md:hidden">
            {/* Hamburger menu for mobile */}
            <button className="text-white hover:text-gray-300">
              <svg
                className="w-6 h-6"
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
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
