import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faFileAlt,
  faHome,
  faUser,
  faProjectDiagram,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

function NavBar() {
  const [expand, setExpand] = useState(false);
  const [navColour, setNavColour] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      setNavColour(true);
    } else {
      setNavColour(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <nav
      className={`fixed w-full z-20 transition-all duration-300 ${
        navColour ? "bg-gray-900 shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-screen-xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src="#" alt="brand" className="h-10 w-auto" />
        </Link>

        {/* Mobile Toggle Button */}
        <button
          className="block md:hidden text-white"
          onClick={() => setExpand(!expand)}
        >
          <span className="block w-6 h-0.5 bg-white mb-1"></span>
          <span className="block w-6 h-0.5 bg-white mb-1"></span>
          <span className="block w-6 h-0.5 bg-white mb-1"></span>
        </button>

        {/* Navigation Links */}
        <div
          className={`md:flex items-center space-x-6 ${
            expand ? "block" : "hidden"
          } md:block`}
        >
          <Link
            to="/"
            className="text-white hover:text-gray-400 flex items-center"
            onClick={() => setExpand(false)}
          >
            <FontAwesomeIcon icon={faHome} className="mr-2" />
            Home
          </Link>

          <Link
            to="/about"
            className="text-white hover:text-gray-400 flex items-center"
            onClick={() => setExpand(false)}
          >
            <FontAwesomeIcon icon={faUser} className="mr-2" />
            About
          </Link>

          <Link
            to="/projects"
            className="text-white hover:text-gray-400 flex items-center"
            onClick={() => setExpand(false)}
          >
            <FontAwesomeIcon icon={faProjectDiagram} className="mr-2" />
            Projects
          </Link>

          <Link
            to="/resume"
            className="text-white hover:text-gray-400 flex items-center"
            onClick={() => setExpand(false)}
          >
            <FontAwesomeIcon icon={faFileAlt} className="mr-2" />
            Resume
          </Link>

          <a
            href="https://github.com/sreeramp96/Portfolio"
            target="_blank"
            className="bg-blue-500 text-white hover:bg-blue-600 px-4 py-2 rounded-md flex items-center"
          >
            <FontAwesomeIcon icon={faGithub} className="mr-2" />
            <FontAwesomeIcon icon={faStar} className="mr-2" />
            Fork
          </a>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
