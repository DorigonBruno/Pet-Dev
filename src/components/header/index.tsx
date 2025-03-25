import { MdOutlineShoppingBag } from "react-icons/md";
import Modal from "../modal";
import { useState } from "react";
import { Link } from "react-router";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-slate-200">
      <nav className="w-full max-w-7xl m-auto flex items-center justify-between p-4">
        <Link to={"/"}>
          <h1>
            Pet <span>Dev</span>
          </h1>
        </Link>

        <button className="cursor-pointer" onClick={() => setIsOpen(true)}>
          <MdOutlineShoppingBag size={20} color="#000" />
        </button>
      </nav>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </header>
  );
};

export default Header;
