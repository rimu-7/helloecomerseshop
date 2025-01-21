import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";

import ProductPage from "../Pages/Home/ProductCategory/ProductPage";
import SubcategoryPage from "../Pages/Home/ProductCategory/SubcategoryPage";
import CategoryPage from "../Pages/Home/ProductCategory/CategoryPage";
import Home from "../Pages/Home/Home/Home";
import CustomerCare from "../Pages/CustomerCare/CustomerCare"; 
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Men from "../Pages/AllProduct/Men";
import Women from "../Pages/AllProduct/Women";
import Kids from "../Pages/AllProduct/Kids";
import Electronics from "../Pages/AllProduct/Electronics";
import ProductCartPage from "../Pages/Shared/Cart/ProductCartPage";
import Profile from "../Pages/Profile/Profile";
import WishToBuy from "../Pages/WishToBuy/WishToBuy";
import ProductDetails from "../Pages/AllProduct/ProductDetails/ProductDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />, // Main layout
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />, // Home Page
      },
      {
        path: "/categories",
        element: <CategoryPage />, // Categories Page
      },
      {
        path: "/subcategory/:categoryId",
        element: <SubcategoryPage />, // Subcategories Page
      },
      {
        path: "/products/:subcategoryId",
        element: <ProductPage />, // Products Page
      },
      {
        path: "/customer-care",
        element: <CustomerCare />, // Products Page
      },
      {
        path: "/details",
        element: <ProductDetails />, // Products Page
      },
      {
        name: "men",
        path: "/men",
        element: <Men />, //men page
      },
      {
        path: "/women",
        element: <Women />,
      },
      {
        path: "/kids",
        element: <Kids />,
      },
      {
        path: "/electronics",
        element: <Electronics />,
      },
      {
        path: "/cart",
        element: <ProductCartPage />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/wishtobuy",
        element: <WishToBuy />,
      },
    ],
  },
]);
