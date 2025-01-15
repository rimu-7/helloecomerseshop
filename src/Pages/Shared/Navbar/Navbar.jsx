import { useState } from "react";
import { Link } from "react-router-dom";
import { BiHome } from "react-icons/bi";
// import { IoMdPerson } from "react-icons/io";
import { IoPersonOutline } from "react-icons/io5";
import ProductSearchCard from "../Search/Searchwork";
import Message from "./Message";
import AddToCartButton from "./AddToCartButton";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <div className="bg-gray-50 bg-opacity-60 backdrop-blur-lg">
      <div className="flex items-center justify-between px-4 py-2">
        {/* Search Box */}
        <div className="ml-96 mb-4 mr-3 flex items-center space-x-4">
          <div className="text-xl hover:text-green-600 transition duration-300">
            <BiHome  />
          </div>
          <div className="text-xl hover:text-green-600 transition duration-300">
            <IoPersonOutline />
          </div>
        </div>

        {/* Dropdown Menu */}
        <div
          className={`absolute left-0 top-16 z-50 w-full bg-white sm:static sm:w-auto sm:flex sm:bg-transparent transition-all duration-300 ease-in-out ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-gray-700 text-center p-4 sm:p-0">
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

        {/* Icons Container */}
        <div className="ml-3 mr-3 text-lg mb-1 hover:text-green-600 transition duration-300">
            <ProductSearchCard />
          </div>
          
        <div className="mr-96 mb-3 text-xl flex items-center space-x-4">
          <AddToCartButton className=""/>
          <Message  />
        </div>

        {/* Toggle Button */}
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
  );
};

export default Navbar;
