import { useContext } from "react";
import { CartContext } from "../../context";
import { FaRegTrashAlt } from "react-icons/fa";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const Modal = ({ isOpen, onClose }: ModalProps) => {
  const { cart, addItemCart, total } = useContext(CartContext);

  if (!isOpen) return null;

  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black/50 flex justify-end"
      onClick={handleOverlayClick}
    >
      <div className="h-screen w-md bg-white p-4 rounded-md overflow-y-scroll">
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
            <div className="mt-5">
              <p className="text-lg font-usually text-center font-medium">
                Você ainda não tem produtos adicionado na sacola
              </p>
            </div>
          )}
        </div>

        {cart.map((item) => (
          <article
            key={item.id}
            className="flex items-center justify-between w-full mt-10 border-b-1 border-slate-300 pb-3 "
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
                <button className="cursor-pointer font-medium text-xl">
                  -
                </button>
                <span className="font-bold text-lg">{item.amount}</span>
                <button
                  className="cursor-pointer font-medium text-xl"
                  onClick={() => addItemCart(item)}
                >
                  +
                </button>
              </div>
            </div>

            <button className="cursor-pointer">
              <FaRegTrashAlt size={18} color="#000" />
            </button>
          </article>
        ))}

        {cart.length > 0 && (
          <>
            <div className="flex justify-between px-2 text-xl font-medium mt-4">
              <p>SubTotal</p>
              <span>{total}</span>
            </div>
            <div className="flex flex-col items-center mt-3 gap-2">
              <button className="bg-blue-500 w-full py-2 text-white rounded-md cursor-pointer">
                Sacola
              </button>
              <button className="cursor-pointer" onClick={onClose}>
                Voltar
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Modal;
