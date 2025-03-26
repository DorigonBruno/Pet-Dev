import { createBrowserRouter } from "react-router";
import Layout from "./pages/layout";
import Home from "./pages/home";
import Products from "./pages/products";
import NotFound from "./pages/notFound";
import Cart from "./pages/cart";
import PaymentPage from "./pages/payment";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/payment",
        element: <PaymentPage />,
      },
      {
        path: "/products/:id",
        element: <Products />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
