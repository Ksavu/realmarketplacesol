import React from "react";
import Logo from "../assets/logo.png";
import { FaTelegramPlane } from "react-icons/fa";
import { SiX } from "react-icons/si"; // X (bivši Twitter)

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 mt-16 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={Logo} alt="Logo" className="w-20" />
          <span className="text-sm md:text-base text-gray-400">
            &copy; {new Date().getFullYear()} Real Marketplace
          </span>
        </div>

        {/* Social links with gradient + blur effect */}
        <div className="flex gap-4 text-xl">
          <a
            href="https://x.com/YourXLink"
            target="_blank"
            rel="noopener noreferrer"
            className="relative p-3 rounded-full bg-gradient-to-tr from-red-400 to-red-600 text-white
                       hover:scale-110 transition-transform duration-300"
            aria-label="X"
          >
            <SiX className="relative z-10" />
            {/* Glow effect */}
            <span className="absolute inset-0 rounded-full bg-red-500 blur-xl opacity-30"></span>
          </a>

          <a
            href="https://t.me/YourTelegramLink"
            target="_blank"
            rel="noopener noreferrer"
            className="relative p-3 rounded-full bg-gradient-to-tr from-purple-400 to-purple-600 text-white
                       hover:scale-110 transition-transform duration-300"
            aria-label="Telegram"
          >
            <FaTelegramPlane className="relative z-10" />
            <span className="absolute inset-0 rounded-full bg-purple-500 blur-xl opacity-30"></span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
