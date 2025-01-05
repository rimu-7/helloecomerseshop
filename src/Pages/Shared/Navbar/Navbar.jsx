import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBox";
import SocialMedia from "../social-media-icons/SocialMedia";
import Message from "./message";
import AddToCartButton from "./AddToCartButton";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full bg-white bg-opacity-50 backdrop-blur-md shadow-md left-0 z-30">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between relative">
        {/* Logo */}
        <div className="text-2xl font-semibold cursor-pointer">
          <Link to="/">BrandName</Link>
        </div>

        {/* Search Bar */}
        <div className="hidden sm:block">{/* <SearchBar /> */}</div>
        <div className="sm:flex items-center space-x-4">
          <Message />
          {/* <SocialMedia /> */}
        </div>
        <div className="sm:flex items-center space-x-4">
          <AddToCartButton />
          {/* <SocialMedia /> */}
        </div>

        {/* Hamburger Menu Button */}
        <div className="sm:hidden">
          <button className="focus:outline-none" onClick={toggleMenu}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  isOpen
                    ? "M6 18L18 6M6 6l12 12" // X icon when open
                    : "M4 6h16M4 12h16M4 18h16" // Hamburger icon when closed
                }
              ></path>
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <nav
          className={`${
            isOpen ? "block" : "hidden"
          } bg-white bg-opacity-80 backdrop-blur-md absolute top-full left-0 w-full sm:static sm:flex sm:w-auto sm:ml-8 sm:bg-transparent transition-all duration-300 ease-in-out`}
        >
          <ul className="flex flex-col sm:flex-row gap-4 sm:gap-6 text-gray-70000 text-right p-4 sm:p-0 rounded-md sm:w-auto sm:max-w-4xl">
            <li className="relative group">
              <Link
                to="/"
                className="hover:text-green-500 transition duration-300 ease-in-out"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/shipping-agencies"
                className="hover:text-green-500 transition duration-300 ease-in-out"
              >
                Shipping Agencies
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-green-500 transition duration-300 ease-in-out"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/login"
                className="hover:text-green-500 transition duration-300 ease-in-out"
              >
                Login
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
