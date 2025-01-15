import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiHome } from "react-icons/bi";
import { GoPeople } from "react-icons/go";
import ProductSearchCard from "../Search/Searchwork";
import Message from "./Message";
import AddToCartButton from "./AddToCartButton";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <div className="">
      <div className="bg-gray-50 bg-opacity-60 backdrop-blur-lg py-3">
        <div className="flex items-center justify-between px-4 relative">
          {/* Search Box */}
          <div className="hidden sm:flex md:ml-96 mb-3 text-2xl items-center">
            <Link to="/" className="">
              <BiHome className="hover:text-green-600 hover:transition-colors duration-200" />
            </Link>
            <Link to="/" className="px-3">
              <GoPeople className="hover:text-green-600 duration-200" />
            </Link>
          </div>

          {/* Dropdown Menu */}
          <div
            className={`absolute left-0 top-10 z-50 w-full bg-white sm:static sm:w-auto sm:flex sm:bg-transparent transition-all duration-300 ease-in-out ${
              isOpen ? "block" : "hidden"
            }`}
          >
            <ul className="mr-5 flex flex-col sm:flex-row gap-4 sm:gap-6 text-gray-700 text-right sm:p-0">
              <li>
                <Link to="/" className="animate-button">
                  MEN
                </Link>
              </li>
              <li>
                <Link to="/shipping-agencies" className="animate-button">
                  WOMEN
                </Link>
              </li>
              <li>
                <Link to="/about" className="animate-button">
                  KIDS
                </Link>
              </li>
              <li>
                <Link to="/login" className="animate-button">
                  ELECTRONICS
                </Link>
              </li>
              <li>
                <Link to="/login" className="animate-button">
                  BUILDINGS
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media Icons or Additional Buttons */}

          <div className=" w-full flex  items-center space-y-4 sm:space-y-0">
            <div className="hidden md:flex md:mr-96 text-2xl ml-3 mb-2 flex-row text-center items-center gap-4">
              <div className="hover:text-green-600 hover:transition-colors duration-200">
                <ProductSearchCard />
              </div>
              <div className="mb-3 hover:text-green-600 hover:transition-colors duration-200">
                <Message />
              </div>
              <div className="hover:text-green-600 hover:transition-colors duration-200">
                <AddToCartButton />
              </div>
            </div>

            <div className="sm:hidden w-full flex  sm:flex-row text-2xl items-center justify-between">
              <Link
                to="/"
                className="flex-1 flex justify-center py-2   hover:text-green-600 hover:transition-colors duration-200"
              >
                <BiHome />
              </Link>
              <Link
                to="/"
                className="flex-1 flex justify-center py-2   hover:text-green-600 hover:transition-colors duration-200"
              >
                <GoPeople />
              </Link>
              <div className="flex-1 flex justify-center py-2   hover:text-green-600 hover:transition-colors duration-200">
                <ProductSearchCard />
              </div>
              <div className="flex-1 flex justify-center py-2   hover:text-green-600 hover:transition-colors duration-200">
                <Message />
              </div>
              <div className="flex-1 flex justify-center py-2  hover:text-green-600 hover:transition-colors duration-200">
                <AddToCartButton />
              </div>
              <button
                className="flex-1 flex justify-center py-2  hover:text-green-600 hover:transition-colors duration-200 focus:outline-none"
                onClick={toggleMenu}
                aria-label="Toggle Menu"
              >
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
                        ? "M8 18L18 6M6 6l12 12" // X icon when open
                        : "M4 6h16M4 12h16M4 18h16" // Hamburger icon when closed
                    }
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
