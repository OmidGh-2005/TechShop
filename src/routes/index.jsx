import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/main";
import HomePage from "../pages/Home";
import ShopPage from "../pages/shop";
import AboutPage from "../pages/about";
import ItemDetailPage from "../pages/ItemDetail";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/shop/:category",
        element: <ShopPage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/shop/:category/:productId",
        element: <ItemDetailPage />,
      },
    ],
  },
]);
