import { createRoot } from "react-dom/client";
import "./index.css";
import router from "./App.tsx";
import { RouterProvider } from "react-router";
import CartContextProvider from "./context/index.tsx";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")!).render(
  <CartContextProvider>
    <RouterProvider router={router} />
    <Toaster position="bottom-center" />
  </CartContextProvider>
);
