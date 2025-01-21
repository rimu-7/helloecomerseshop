import React from "react";
import { dummy_posts } from "./../../api/dummy_posts"; // Adjust the path to where you have the data
import { FiHeart } from "react-icons/fi";
import { Link } from "react-router-dom";

function Men() {
  // Filter products that are in the "Man" category (you can add more filters if needed)
  const menProducts = dummy_posts.filter(
    (product) => product.category === "Kids"
  );

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4 text-center">Kid's Products</h1>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {menProducts.length > 0 ? (
          menProducts.map((product) => (
            <div key={product.id} className="product-item bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-all">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-40 object-cover rounded-lg mb-3" // Reduced image height
              />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h3>
              <p className="text-gray-600 text-xs mb-2">{product.description}</p>
              <p className="text-gray-900 font-bold text-md mb-2">Price: ${product.price}</p>
              <p>
                {product.stock > 0 ? (
                  <span className="text-green-500 text-sm">In Stock</span>
                ) : (
                  <span className="text-red-500 text-sm">Out of Stock</span>
                )}
              </p>
              <Link className="text-gray-500 text-sm hover:text-green-300 hover:duration-300 hover:transition-colors"> <FiHeart/> </Link>
            </div>
          ))
        ) : (
          <p>No men's products available.</p>
        )}
      </div>
    </div>
  );
}

export default Men;
