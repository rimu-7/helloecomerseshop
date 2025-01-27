import React, { useState, useEffect } from "react";
import { FiHeart } from "react-icons/fi";
import { Link } from "react-router-dom";
import { BiAddToQueue } from "react-icons/bi";
import { fetchProducts } from "./APIFetching/Api"; // Import the API function

function Accesorise() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getAccesoriseProducts = async () => {
      try {
        const allProducts = await fetchProducts();
        // Filter products for the "Man" category
        const AccesoriseProducts = allProducts.filter(
          (product) => product.category === "Accesorise"
        );
        setProducts(AccesoriseProducts);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getAccesoriseProducts();
  }, []);

  if (loading) {
    return <p>Loading Accesorise products...</p>;
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4 text-center">Accesorise Products</h1>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.length > 0 ? (
          products.map((product) => (
            <div
              key={product.id}
              className="product-item bg-white p-3 rounded-lg shadow-sm hover:shadow-lg transition-all"
            >
              <Link to={`/details/${product.id}`}>
                <img
                  src={product.image_1} // Assuming your API sends image URLs in `image_1`
                  alt={product.name}
                  className="w-full h-40 object-cover rounded-lg mb-3"
                />
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-xs mb-2">
                  {product.description}
                </p>
                <p className="text-gray-900 font-bold text-md mb-2">
                  Price: ${product.price}
                </p>
                <p>
                  {product.stock > 0 ? (
                    <span className="text-green-500 text-sm">In Stock</span>
                  ) : (
                    <span className="text-red-500 text-sm">Out of Stock</span>
                  )}
                </p>
                <div className="flex w-full justify-between items-center ">
                  <Link className="text-gray-500 text-sm hover:text-green-300 hover:duration-300 hover:transition-colors flex items-center">
                    <FiHeart />
                    <span className="ml-2">Wish to buy</span>
                  </Link>
                  <Link className="text-gray-500 text-sm hover:text-green-300 hover:duration-300 hover:transition-colors flex items-center">
                    <BiAddToQueue />
                    <span className="ml-2">Add to cart</span>
                  </Link>
                </div>
              </Link>
            </div>
          ))
        ) : (
          <p>No eccesorise products available.</p>
        )}
      </div>
    </div>
  );
}

export default Accesorise;
