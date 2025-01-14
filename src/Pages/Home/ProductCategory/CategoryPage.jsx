import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchSections } from "../../../api/data";

const CategoryPage = () => {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const data = fetchSections(); // Fetch categories from the local API
    setCategories(data);
  }, []);

  const handleCategoryClick = (category) => {
    navigate(`/subcategory/${category.id}`); // Navigate to Subcategory Page
  };

  return (
    <div className="  py-8 ">
      <hr className="border-2 border-green-500"/>
      <div className=" ">
        
      <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 bg-green-100 text-green-500 text-center font mono px-6 mx-auto py-4">
          Categories
        </div>
        <div className="grid mt-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 p-4">
          {categories.map((category) => (
            <div
              key={category.id}
              className="p-6 py-10 bg-green-100 hover:bg-green-200 hover:scale-105 cursor-pointer rounded-lg shadow-lg hover:shadow-2xl transition-transform transform"
              onClick={() => handleCategoryClick(category)}
            >
              <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-800 justify text-center">
                {category.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>

  );
};

export default CategoryPage;
