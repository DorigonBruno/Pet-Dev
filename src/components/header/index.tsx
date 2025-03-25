import { MdOutlineShoppingBag } from "react-icons/md";
import Modal from "../modal";
import { useState, useContext } from "react";
import { Link, useLocation } from "react-router";
import { CartContext } from "../../context";
import { GiPadlock } from "react-icons/gi";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { cartAmount } = useContext(CartContext);

  const location = useLocation();
  const pageCart = location.pathname === "/cart";

  return (
    <header className="w-full">
      <nav className="w-full max-w-7xl m-auto flex items-center justify-between p-4">
        <Link to={"/"}>
          <h1 className="md:text-3xl text-xl font-display text-slate-600">
            Pet{" "}
            <span className="bg-linear-120 from-slate-600 to-blue-500 bg-clip-text text-transparent">
              Dev
            </span>
          </h1>
        </Link>

        {!pageCart ? (
          <button
            className="cursor-pointer relative hover:bg-gray-300 rounded-full p-1 transition duration-200 ease-in-out"
            onClick={() => setIsOpen(true)}
          >
            <MdOutlineShoppingBag size={24} color="#000" />

            {cartAmount >= 1 && (
              <span className="bg-blue-700 text-white px-1 rounded-full text-xs absolute -right-0 -top-1">
                {cartAmount}
              </span>
            )}
          </button>
        ) : (
          <div className="flex items-center gap-4">
            <GiPadlock size={30} className="hidden md:block" />
            <span className="hidden md:block">|</span>
            <p className="font-medium md:text-xl text-md  text-slate-700">
              {" "}
              Ambiente Seguro
            </p>
          </div>
        )}
      </nav>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </header>
  );
};

export default Header;
