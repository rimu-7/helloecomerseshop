import React from "react";

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
      <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 bg-green-100 text-green-500 text-center font-mono px-6 mx-auto py-4">
              Products
            </div>
      <main className="py-2 px-2 md:px-4">
        {" "}
        {/* Reduced padding even further */}
        <div className="max-w-7xl mx-auto">
        
          <div className="pt-5 grid grid-cols-2 md:grid-cols-4 gap-1 md:gap-2">
            
            {/* Tightened gaps */}
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white borde-2 border-gray-200 rounded-sm shadow-sm" // Smaller rounded corners
              >
                <div className="relative">
                  {" "}
                  {/* Added relative positioning */}
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-auto object-cover rounded-t-sm" // Smaller rounded corners
                    style={{ aspectRatio: "3/4" }}
                  />
                </div>
                <div className="p-1.5">
                  {" "}
                  {/* Reduced padding */}
                  <p className="text-[10px] text-gray-800 truncate">
                    {product.name}
                  </p>{" "}
                  {/* Smaller font size */}
                  <div className="flex items-center justify-between mt-0.5">
                    {" "}
                    {/* Reduced margin top */}
                    <p className="text-gray-900 font-medium text-[10px]">
                      ৳ {product.price}
                    </p>
                    {/* Smaller font size */}
                    {product.originalPrice && (
                      <p className="line-through text-gray-500 text-[8px]">
                        ৳ {product.originalPrice}
                      </p>
                    )}
                  </div>
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
