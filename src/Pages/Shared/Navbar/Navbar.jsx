import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbard from "./Navbard";
import { BiHome } from "react-icons/bi";
import { IoPersonOutline } from "react-icons/io5";
import ProductSearchCard from "../Search/Searchwork";
import Message from "./Message";
import AddToCartButton from "./AddToCartButton";
import { FiHeart } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false); // Added state to track navbar visibility
  const [lastScrollTop, setLastScrollTop] = useState(0); // Added state to track last scroll position

  const toggleMenu = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  // Added useEffect to handle scroll direction and navbar visibility
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll =
        window.pageYOffset || document.documentElement.scrollTop;

      if (currentScroll > lastScrollTop) {
        setIsHidden(true); // Hide navbar on scroll down
      } else {
        setIsHidden(false); // Show navbar on scroll up
      }

      setLastScrollTop(currentScroll <= 0 ? 0 : currentScroll); // Prevent negative scroll values
    };

    window.addEventListener("scroll", handleScroll); // Attach scroll event listener
    return () => window.removeEventListener("scroll", handleScroll); // Cleanup event listener
  }, [lastScrollTop]);

  return (
    <div
      className={`bg-gray-50 sticky bg-opacity-60 backdrop-blur-lg py-3  top-0 w-full transition-transform duration-300 ${
        isHidden ? "-translate-y-full" : "translate-y-0"
      }`} // Added dynamic class for navbar hide/show effect
    >
      <div className="flex items-center justify- px-4 text-xl relative">
        {/* Search Box */}

        {/* lg nav  */}
        <div className="hidden sm:block text-center w-full">
          <div className="flex items-center justify-center space-x-3">
            <div className="">
              <div className=" gap-4 mr-4">
                <div className="flex items-center justify-between space-x-5">
                  <Link to="/" className="">
                    <BiHome className="text-2xl hover:text-green-600 duration-200" />
                  </Link>
                  <Link to="/profile" className=" px-">
                    <IoPersonOutline className="text-2xl hover:text-green-600 duration-200" />
                  </Link>

                  <div className="text- hover:text-green-600 duration-200">
                    <Message />
                  </div>
                  <div className="text-2xl hover:text-green-600 hover:duration-300  hover:transition-colors">
                    <ProductSearchCard />
                  </div>
                  <Link
                    to="/wishtobuy"
                    className=" hover:text-green-600 hover:duration-300  hover:transition-colors"
                  >
                    <FiHeart />
                  </Link>

                  <div className="mt-1 hover:text-green-600 hover:duration-300  hover:transition-colors">
                    <AddToCartButton />
                  </div>
                </div>
              </div>

              {/* Dropdown Menu */}
              <div
                className={`absolute  left-0 top-10 z-50 w-full bg-white sm:static sm:w-auto sm:flex sm:bg-transparent transition-all duration-300 ease-in-out ${
                  isOpen ? "block" : "hidden"
                }`}
              >
                <ul className="flex mt-3 flex-col sm:flex-row gap-4 sm:gap-6 text-gray-700 text-right sm:p-0">
                  <li>
                    <Link to="/men" className="animate-button">
                      MEN
                    </Link>
                  </li>
                  <li>
                    <Link to="/women" className="animate-button">
                      WOMEN
                    </Link>
                  </li>
                  <li>
                    <Link to="/kids" className="animate-button">
                      KIDS
                    </Link>
                  </li>
                  <li>
                    <Link to="/electronics" className="animate-button">
                      ELECTRONICS
                    </Link>
                  </li>
                  <li>
                    <Link to="/login" className="animate-button">
                    Accessories
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* Social Media Icons or Additional Buttons */}
            <div className="flex items-center space-x-5 ">
              <button
                className="focus:outline-none sm:hidden"
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
                        ? "M6 18L18 6M6 6l12 12" // X icon when open
                        : "M4 6h16M4 12h16M4 18h16" // Hamburger icon when closed
                    }
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* mobile nav  */}
        <div
          className={`absolute sm:hidden left-0 top-10 z-50 w-full bg-white sm:static sm:w-auto sm:bg-transparent transition-all duration-300 ease-in-out ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex mt-2 mr-4 flex-col sm:flex-row gap-4 sm:gap-6 text-gray-700 text-right sm:p-0">
            <li>
              <Link to="/men" className="animate-button">
                MEN
              </Link>
            </li>
            <li>
              <Link to="/women" className="animate-button">
                WOMEN
              </Link>
            </li>
            <li>
              <Link to="/kids" className="animate-button">
                KIDS
              </Link>
            </li>
            <li>
              <Link to="/electronics" className="animate-button">
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
        <div className="flex items-center justify-between sm:hidden w-full">
          <Link to="/" className="">
            <BiHome className="text-2xl hover:text-green-600 duration-200" />
          </Link>
          <Link to="/" className=" px-">
            <IoPersonOutline className="text-2xl hover:text-green-600 duration-200" />
          </Link>

          <div className="">
            <Message />
          </div>

          <Link className="text-2xl hover:text-green-600 hover:duration-200">
            <ProductSearchCard />
          </Link>
          <div className="text-xl hover:text-green-600 hover:duration-200">
            <FiHeart />
          </div>
          <div className="text-xl mt-1 hover:text-green-600 hover:duration-200">
            <AddToCartButton />
          </div>

          <button
            className="focus:outline-none sm:hidden"
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
                    ? "M6 18L18 6M6 6l12 12" // X icon when open
                    : "M4 6h16M4 12h16M4 18h16" // Hamburger icon when closed
                }
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
