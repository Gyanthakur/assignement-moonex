import React, { useState } from 'react';

const Header = () => {
  // State to manage the visibility of the menu on mobile
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle the menu open/close
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="bg-darkBlue flex items-center justify-between px-8 py-4 shadow-md">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img
          src="logo.png" // Replace with the correct logo path
          alt="MoonEX Logo"
          className="w-32 h-12" // Adjust logo size as needed
        />
      </div>

      {/* Hamburger Menu (Mobile) */}
      <button
        className="lg:hidden text-white"
        onClick={toggleMenu}
        aria-label="Toggle Menu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Navigation Links */}
      <nav>
        <ul
          className={`lg:flex gap-6 text-white font-medium ${
            menuOpen ? 'block' : 'hidden' // Show menu on mobile if open
          } lg:block`} // Ensure the menu is always visible on large screens
        >
          <li className="hover:text-yellow cursor-pointer">
            <a href="/">Home</a>
          </li>
          <li className="hover:text-yellow cursor-pointer">
            <a href="/about">About Us</a>
          </li>
          <li className="hover:text-yellow cursor-pointer">
            <a href="/roadmap">Roadmap</a>
          </li>
          <li className="hover:text-yellow cursor-pointer">
            <a href="/faqs">FAQs</a>
          </li>
          <li className="hover:text-yellow cursor-pointer">
            <a href="/contact">Contact Us</a>
          </li>
        </ul>
      </nav>

      {/* Connect Wallet Button */}
      <button className="bg-yellow text-darkBlue px-6 py-2 rounded-lg font-semibold shadow-lg hover:bg-yellow-500">
        Connect Wallet
      </button>
    </header>
  );
};

export default Header;
