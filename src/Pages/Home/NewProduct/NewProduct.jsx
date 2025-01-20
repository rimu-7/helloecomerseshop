import React, { useState } from "react";
import { FiHeart } from "react-icons/fi";
import { products as allProducts } from "../../../api/products";

const ProductPage = () => {
  const [page, setPage] = useState(1);
  const itemsPerPage = 12; // Number of products displayed per page
  const paginatedProducts = allProducts.slice(0, page * itemsPerPage);

  const loadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div className="">
      <main className="py-2 px-2 md:px-4">
        <div className="max-w-7xl mx-auto">
          <div className="pt-5 grid grid-cols-2 md:grid-cols-4 gap-1 md:gap-2">
            {paginatedProducts.map((product) => (
              <div
                key={product.id}
                className="relative bg-white border-2 border-gray-200 rounded-sm shadow-sm"
              >
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-auto object-cover rounded-t-sm"
                    style={{ aspectRatio: "3/4" }}
                  />
                </div>
                <div className="p-1.5">
                  <p className="text-[10px] text-gray-800 truncate">
                    {product.name}
                  </p>
                  <div className="flex items-center space-x-1 mt-0.5">
                    {product.originalPrice && (
                      <p className="line-through text-gray-500 text-[8px]">
                        ৳ {product.originalPrice}
                      </p>
                    )}
                    <p className="text-gray-900 font-medium text-[10px]">
                      ৳ {product.price}
                    </p>
                  </div>
                </div>
                {/* Heart Icon */}
                <div className="absolute bottom-1 right-1">
                  <FiHeart
                    className="text-gray-500 hover:text-red-500 transition-colors duration-300"
                    size={16}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          {paginatedProducts.length < allProducts.length && (
            <div className="text-center mt-4">
              <button
                onClick={loadMore}
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors duration-300"
              >
                Load More
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default ProductPage;
