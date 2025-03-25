import { MdOutlineShoppingBag } from "react-icons/md";
import Modal from "../modal";
import { useState } from "react";
import { Link } from "react-router";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

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

        <button
          className="cursor-pointer relative"
          onClick={() => setIsOpen(true)}
        >
          <MdOutlineShoppingBag size={24} color="#000" />
          <span className="bg-blue-700 text-white px-1 rounded-full text-xs absolute -right-0 -top-1">
            4
          </span>
        </button>
      </nav>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </header>
  );
};

export default Header;
