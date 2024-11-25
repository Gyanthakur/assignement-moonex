import React from "react";
import { TelegramLogo, RedditLogo, TwitterLogo } from "phosphor-react";

const Footer = () => {
  return (
    <footer className="bg-footer text-white py-6 px-6">
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row justify-between items-center">
        {/* Left Section - Logo */}
        <div className="flex items-center mb-4 lg:mb-0">
          <img src="logo.png" alt="MoonEX Logo" className="h-10 mr-2" />
        </div>

        {/* Center Section - Navigation Links */}
        <div className="flex flex-col lg:flex-row lg:space-x-8 text-center lg:text-left mb-4 lg:mb-0">
          <a href="/about" className="text-gray-400 hover:text-white mb-2 lg:mb-0">
            About Us
          </a>
          <a href="/roadmap" className="text-gray-400 hover:text-white mb-2 lg:mb-0">
            Roadmap
          </a>
          <a href="/faq" className="text-gray-400 hover:text-white mb-2 lg:mb-0">
            FAQs
          </a>
          <a href="/contact" className="text-gray-400 hover:text-white mb-2 lg:mb-0">
            Contact Us
          </a>
        </div>

        {/* Right Section - Social Media Icons */}
        <div className="flex items-center gap-5 flex-col lg:space-x-4">
          <span className="text-yellow-500 font-bold text-center lg:text-left mb-4 lg:mb-0">
            Contact <span className="text-yellow">Us</span>
          </span>
          <div className="flex items-center gap-4">
            <a href="https://t.me" target="_blank" rel="noopener noreferrer">
              <TelegramLogo className="h-6 w-6 text-white hover:text-yellow-500" />
            </a>
            <a href="https://reddit.com" target="_blank" rel="noopener noreferrer">
              <RedditLogo className="h-6 w-6 text-white hover:text-yellow-500" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <TwitterLogo className="h-6 w-6 text-white hover:text-yellow-500" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
