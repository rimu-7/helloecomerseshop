// AddToCartButton.jsx
import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const AddToCartButton = () => {
  const handleClick = () => {
    // Add your add to cart logic here
    console.log("Item added to cart");
  };

  return (
    <button
      onClick={handleClick}
      className="flex items-center rounded-md hover:transition hover:text-green-600 hover:duration-300"
    >
      <FaShoppingCart className="text-xl" />
    </button>
  );
};

export default AddToCartButton;
