import { createRoot } from "react-dom/client";
import "./index.css";
import router from "./App.tsx";
import { RouterProvider } from "react-router";
import CartContextProvider from "./context/index.tsx";

createRoot(document.getElementById("root")!).render(
  <CartContextProvider>
    <RouterProvider router={router} />
  </CartContextProvider>
);
