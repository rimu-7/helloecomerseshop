import axios from "axios";

const API_BASE_URL = "https://freeapi.vercel.app"; // Replace with your backend API URL

export const fetchProducts = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/products`);
    return response.data.products; // Adjust based on your API response structure
  } catch (error) {
    console.error("Error fetching products:", error);
    throw new Error("Failed to fetch products.");
  }
};
