import React, { useState } from "react";
import { products as allProducts } from "./../../../api/newarraival";

const NewArrival = () => {
  const [page, setPage] = useState(1);
  const itemsPerPage = 12;
  const paginatedProducts = allProducts.slice(0, page * itemsPerPage);

  const loadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div className="py-2 md:ml-4 md:mr-4 m-2">
      <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 bg-green-100 text-green-500 text-center font-mono px-6 mx-auto py-4">
        New Arrival Product...
      </div>

      <section
        id="Projects"
        className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-2"
      >
        {paginatedProducts.map((product) => (
          <div
            key={product.id}
            className=" border border-gray-200  rounded-sm shadow-m"
          >
            <a href="#">
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-auto object-cover rounded-t-sm"
                  style={{ aspectRatio: "3/4" }}
                />
              </div>
              <div className="p-4">
                <span className="text-gray-400 uppercase text-xs">
                  {product.brand}
                </span>
                <p className="text-lg font-bold text-black truncate">
                  {product.name}
                </p>
                <div className="flex items-center mt-3">
                  <p className="text-lg font-semibold text-black">
                    ${product.price}
                  </p>
                  <del className="text-sm text-gray-600 ml-2">
                    ${product.originalPrice}
                  </del>
                  <div className="ml-auto">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="bi bi-bag-plus"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                      />
                      <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                    </svg>
                  </div>
                </div>
              </div>
            </a>
          </div>
        ))}
      </section>

      {paginatedProducts.length < allProducts.length && (
        <div className="text-center mt-4">
          <button
            onClick={loadMore}
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default NewArrival;
