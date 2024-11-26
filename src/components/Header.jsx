import React, { useState } from 'react';

const Header = () => {
  // State to manage the visibility of the menu on mobile
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle the menu open/close
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <header className="bg-darkBlue flex items-center justify-between px-4 sm:px-8 py-4 shadow-md relative">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img
          src="logo.png" // Replace with the correct logo path
          alt="MoonEX Logo"
          className="w-24 h-10 sm:w-32 sm:h-12" // Adjust logo size for responsiveness
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
      <nav
        className={`fixed top-0 left-0 h-full w-2/3 bg-darkBlue z-20 opacity-[0.9] shadow-lg  transform transition-transform duration-300 lg:static lg:w-auto lg:shadow-none ${
          menuOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0`}
      >
        <ul className="flex flex-col lg:flex-row gap-6 mt-10 pl-10 text-white font-medium p-6 lg:p-0 lg:items-center">
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
      <button className="hidden lg:block bg-yellow text-darkBlue px-6 py-2 rounded-lg font-semibold shadow-lg hover:bg-yellow-500">
        Connect Wallet
      </button>

      {/* Overlay for Mobile Menu */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 lg:hidden"
          onClick={toggleMenu}
        ></div>
      )}
    </header>
  );
};

export default Header;
