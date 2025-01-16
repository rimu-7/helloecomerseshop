import React from "react";
import { FiHeart } from "react-icons/fi";

const ProductPage = () => {
  const products = [
    {
      id: 1,
      name: "Sports T-shirt",
      brand: "FabriLife",
      price: 570,
      originalPrice: 595,
      image: "https://picsum.photos/200/300",
    },
    {
      id: 2,
      name: "Red Sports T-shirt",
      brand: "FabriLife",
      price: 570,
      originalPrice: 595,
      image: "https://picsum.photos/id/1/200/300",
    },
    {
      id: 3,
      name: "Grey Sports T-shirt",
      brand: "FabriLife",
      price: 570,
      originalPrice: null,
      image: "https://picsum.photos/id/1/200/300",
    },
    {
      id: 4,
      name: "Blue Sports T-shirt",
      brand: "FabriLife",
      price: 595,
      originalPrice: 750,
      image: "https://picsum.photos/id/1/200/300",
    },
    {
      id: 5,
      name: "Green Sports T-shirt",
      brand: "FabriLife",
      price: 570,
      originalPrice: null,
      image: "https://picsum.photos/200/400",
    },
    {
      id: 6,
      name: "Light Grey Sports T-shirt",
      brand: "FabriLife",
      price: 570,
      originalPrice: null,
      image: "https://picsum.photos/200/500",
    },
    {
      id: 7,
      name: "Teal Sports T-shirt",
      brand: "FabriLife",
      price: 640,
      originalPrice: null,
      image: "https://picsum.photos/200/300",
    },
    {
      id: 8,
      name: "Dark Blue Sports T-shirt",
      brand: "FabriLife",
      price: 570,
      originalPrice: null,
      image: "https://picsum.photos/200/300",
    },
  ];

  return (
    <div className="">
      <main className="py-2 px-2 md:px-4">
        <div className="max-w-7xl mx-auto">
          <div className="pt-5 grid grid-cols-2 md:grid-cols-4 gap-1 md:gap-2">
            {products.map((product) => (
              <div
                key={product.id}
                className="relative bg-white borde-2 border-gray-200 rounded-sm shadow-sm"
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
                  <FiHeart className="text-gray-500 hover:text-red-500 transition-colors duration-300" size={16} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductPage;
