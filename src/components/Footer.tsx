import React from "react";
import { FaTelegramPlane } from "react-icons/fa";
import { SiX } from "react-icons/si"; // X (bivši Twitter)

const Footer = () => {
  return (
    <footer className="bg-gray-900/80 backdrop-blur-md border-t border-gray-700 py-6 mt-12">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Logo / text */}
        <div className="text-white font-bold text-lg">
          Real Marketplace
        </div>

        {/* Social links */}
        <div className="flex gap-6 text-white text-xl">
          <a
            href="https://t.me/YourTelegramLink"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
            title="Telegram"
          >
            <FaTelegramPlane />
          </a>

          <a
            href="https://x.com/YourXLink"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-500 transition"
            title="X"
          >
            <SiX />
          </a>
        </div>
      </div>

      <p className="text-gray-400 text-sm text-center mt-4">
        &copy; {new Date().getFullYear()} Real Marketplace. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
