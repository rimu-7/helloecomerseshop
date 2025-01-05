import React, { useState } from "react";
import SocialMedia from "../social-media-icons/SocialMedia";

const SearchBox = () => {
  const [query, setQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleSearchChange = (event) => {
    setQuery(event.target.value);
    setShowSuggestions(event.target.value.length > 0);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      console.log("Searching for:", query);
      // Implement your search logic here
    }
  };

  const handleClear = () => {
    setQuery("");
    setShowSuggestions(false);
  };

  const suggestions = [
    "Smartphones",
    "Laptops",
    "Shoes",
    "T-shirts",
    "Headphones",
    "Watches",
  ];

  return (
    <div className="flex flex-col md:flex-row justify-center items-center container mx-auto py-4 w-full px-4">
      <div className="relative w-full md:w-80">
        {/* Search Input Wrapper with Background Blur */}
        <div className="bg-white bg-opacity-70 backdrop-blur-md rounded-full shadow-lg">
          <input
            type="text"
            value={query}
            onChange={handleSearchChange}
            onKeyPress={handleKeyPress}
            placeholder="Search products..."
            className="w-full max-w-md py-2 pl-10 pr-4 text-gray-800 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 transition-all ease-in-out duration-300 shadow-sm hover:shadow-md mx-auto"
          />

          {/* Search Icon */}
          <div className="absolute top-1/2 left-3 transform -translate-y-1/2 text-green-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </div>

          {/* Clear Button */}
          {query && (
            <button
              onClick={handleClear}
              className="absolute top-1/2 right-4 transform -translate-y-1/2 flex items-center text-gray-500 hover:text-gray-800"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="6" y1="18" x2="18" y2="6" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          )}
        </div>

        {/* Suggestions Dropdown */}
        {showSuggestions && query && (
          <div className="absolute w-full mt-2 bg-white rounded-xl border border-gray-200 shadow-lg z-50 max-h-48 overflow-y-auto">
            <ul>
              {suggestions.map((item, index) => (
                <li
                  key={index}
                  className="px-4 py-2 text-gray-700 hover:bg-green-50 cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Social Media Icons */}
      <div className="mt-4 md:mt-0 md:ml-4">
        <div className="bg-opacity-50 backdrop-blur-lg">
          <SocialMedia />
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
