import { useContext } from "react";
import { CartContext } from "../../context";
import { FaRegTrashAlt } from "react-icons/fa";

import { Link } from "react-router";
import Payments from "../../components/payment";
import { motion } from "framer-motion";

const Cart = () => {
  const { cart, addItemCart, removeSomeItems, removeItemsCart } =
    useContext(CartContext);

  return (
    <main className="w-full h-screen max-w-7xl px-4 m-auto">
      <h1 className="text-center font-title font-medium text-4xl mt-4 mb-5">
        Sacola
      </h1>

      {cart.length < 1 && (
        <div className="mt-10 flex flex-col items-center gap-5">
          <p className="text-lg font-usually text-center font-medium">
            Sem Produtos na Sacola
          </p>
          <Link to={"/"} className="underline">
            Acessar Produtos
          </Link>
        </div>
      )}

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="grid md:grid-cols-4 lg:grid-cols-6 grid-cols-1 w-full h-screen gap-5"
      >
        <div className="col-span-4 flex flex-col justify-center md:justify-start">
          {cart.map((item) => (
            <article
              className="flex flex-col md:flex-row gap-3 w-full justify-between px-4 items-center border-1 border-slate-200 font-usually rounded-md mb-3"
              key={item.id}
            >
              <img
                src={item.cover}
                alt={item.description}
                className="md:w-30 w-44 p-2"
              />

              <p className="w-40 font-light text-sm">{item.title}</p>

              <div className="flex items-center gap-4">
                <button
                  className={`font-bold text-md border-2 rounded-xl px-1 ${
                    item.amount > 1
                      ? "cursor-pointer"
                      : "cursor-not-allowed opacity-50"
                  }`}
                  onClick={() => removeSomeItems(item)}
                >
                  -
                </button>
                <span>{item.amount}</span>
                <button
                  className="cursor-pointer text-md font-bold border-2 rounded-xl px-1"
                  onClick={() => addItemCart(item)}
                >
                  +
                </button>
              </div>

              <p className="font-bold text-lg">
                Total:{" "}
                {item.total.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </p>

              <button
                onClick={() => removeItemsCart(item)}
                className="cursor-pointer mb-4 md:mb-none"
              >
                <FaRegTrashAlt size={20} color="#000" />
              </button>
            </article>
          ))}
        </div>
        {cart.length > 0 && <Payments />}
      </motion.div>
    </main>
  );
};

export default Cart;
