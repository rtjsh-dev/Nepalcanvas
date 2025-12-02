import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white mt-12">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-3">NepalCanvas</h3>
            <p className="text-gray-300 text-sm">
              Discover the magic of Nepal through our curated destinations and
              experiences.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
            <div className="flex flex-col space-y-2">
              <Link to="/" className="text-gray-300 hover:text-white text-sm">
                Home
              </Link>
              <Link
                to="/destinations"
                className="text-gray-300 hover:text-white text-sm"
              >
                Destinations
              </Link>
              <Link
                to="/about"
                className="text-gray-300 hover:text-white text-sm"
              >
                About
              </Link>
              <Link
                to="/contact"
                className="text-gray-300 hover:text-white text-sm"
              >
                Contact
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white">
                Facebook
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                Twitter
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                Instagram
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-6 pt-6 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} NepalCanvas. Made with ❤️ in Nepal.
          </p>
        </div>
      </div>
    </footer>
  );
}
