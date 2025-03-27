import { useContext, useEffect } from "react";
import { CartContext } from "../../context";
import { FaRegTrashAlt } from "react-icons/fa";
import { TbShoppingBagX } from "react-icons/tb";
import { Link, useLocation } from "react-router";

import { easeIn, motion } from "framer-motion";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const Modal = ({ isOpen, onClose }: ModalProps) => {
  const { cart, addItemCart, total, removeItemsCart, removeSomeItems } =
    useContext(CartContext);

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/cart") {
      onClose();
    }
  }, [location, onClose]);

  if (!isOpen) return null;

  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black/50 flex justify-center md:justify-end"
      onClick={handleOverlayClick}
    >
      <motion.div
        initial={{ x: 200 }}
        animate={{ x: 0 }}
        transition={{
          duration: ".500",
          ease: easeIn,
        }}
        className="md:h-screen md:w-md w-full h-[90%] max-h-[540px] md:max-h-none bottom-0 bg-white p-4 rounded-md overflow-y-scroll fixed"
      >
        <div className="flex flex-col justify-between items-center relative">
          <div className="w-full flex items-center justify-between px-2 border-b-2 border-slate-200 pb-3">
            <h3 className="text-xl font-usually font-medium">Sacola</h3>
            <button
              className="cursor-pointer absolute -top-2 -right-1 text-md text-white bg-red-500 rounded-full px-2"
              onClick={onClose}
            >
              X
            </button>
          </div>

          {cart.length < 1 && (
            <div className="mt-10 flex flex-col items-center gap-5">
              <p className="text-lg font-usually text-center font-medium">
                Sem Produtos na Sacola
              </p>

              <TbShoppingBagX size={40} className="self-center" color="#000" />

              <Link
                to={"/"}
                onClick={onClose}
                className="cursor-pointer underline"
              >
                Acessar Produtos
              </Link>
            </div>
          )}
        </div>

        {cart.map((item) => (
          <article
            key={item.id}
            className="flex flex-col md:flex-row items-center justify-between w-full mt-10 border-b-1 border-slate-300 pb-4 gap-4"
          >
            <img src={item.cover} alt={item.description} className="w-24" />
            <div className="flex flex-col gap-1">
              <p className="w-52 text-sm">{item.title}</p>
              <span className="font-medium">
                {item.price.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </span>

              <div className="flex justify-between items-center border-1 border-slate-200 px-2 py-1">
                <button
                  className={` font-medium md:text-xl text-lg ${
                    item.amount > 1
                      ? "cursor-pointer"
                      : "cursor-not-allowed opacity-50"
                  }`}
                  onClick={() => item.amount > 1 && removeSomeItems(item)}
                  disabled={item.amount < 1}
                >
                  -
                </button>
                <span className="font-bold md:text-lg text-md">
                  {item.amount}
                </span>
                <button
                  className="cursor-pointer font-medium md:text-xl text-lg"
                  onClick={() => addItemCart(item)}
                >
                  +
                </button>
              </div>
            </div>

            <button
              className="cursor-pointer"
              onClick={() => removeItemsCart(item)}
            >
              <FaRegTrashAlt size={18} color="#000" />
            </button>
          </article>
        ))}

        {cart.length > 0 && (
          <>
            <div className="flex justify-between px-2 md:text-xl text-lg font-medium mt-4">
              <p>SubTotal</p>
              <span>{total}</span>
            </div>
            <div className="flex flex-col items-center mt-3 gap-2">
              <Link
                to={"/cart"}
                className="bg-blue-500 w-full py-2 text-white font-bold shadow-md rounded-md cursor-pointer text-center"
              >
                Sacola
              </Link>

              <button className="cursor-pointer underline" onClick={onClose}>
                Voltar
              </button>
            </div>
          </>
        )}
      </motion.div>
    </div>
  );
};

export default Modal;
