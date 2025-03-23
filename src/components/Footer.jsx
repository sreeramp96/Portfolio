import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();

  return (
    <div className="text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Left section */}
          <div className="flex-1 text-left">
            <h3 className="text-lg font-semibold">
              Designed and Developed by Sreeram P
            </h3>
          </div>

          {/* Center section */}
          <div className="flex-1 text-center">
            <h3 className="text-lg font-semibold">Copyright © {year} SRM</h3>
          </div>

          {/* Right section - Social icons */}
          <div className="flex-1 text-right">
            <ul className="flex justify-end space-x-6">
              <li>
                <a
                  href="https://github.com/sreeramp96"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-400"
                >
                  <FontAwesomeIcon icon={faGithub} size="lg" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/sreeramp96/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-400"
                >
                  <FontAwesomeIcon icon={faLinkedin} size="lg" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/sreeramp96"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-400"
                >
                  <FontAwesomeIcon icon={faInstagram} size="lg" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
