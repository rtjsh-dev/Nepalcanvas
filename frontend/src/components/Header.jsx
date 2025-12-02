import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-red-700">
          NepalCanvas
        </Link>
        <nav className="space-x-4 hidden md:block">
          <Link to="/" className="text-gray-700 hover:text-red-700">
            Home
          </Link>
          <Link to="/destinations" className="text-gray-700 hover:text-red-700">
            Destinations
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-red-700">
            About
          </Link>
          <Link to="/contact" className="text-gray-700 hover:text-red-700">
            Contact
          </Link>
        </nav>
        <div className="md:hidden">
          <Link to="/destinations" className="text-gray-700">
            Explore
          </Link>
        </div>
      </div>
    </header>
  );
}
