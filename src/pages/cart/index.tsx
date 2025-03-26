import { useContext } from "react";
import { CartContext } from "../../context";
import { FaRegTrashAlt } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import { FaShop } from "react-icons/fa6";
import { Link } from "react-router";

const Cart = () => {
  const { cart, addItemCart, removeSomeItems, removeItemsCart, total } =
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

      <section className="grid grid-cols-6 w-full h-screen gap-5">
        <div className="col-span-4">
          {cart.map((item) => (
            <article
              className="flex w-full justify-between px-4 items-center border-1 border-slate-200 font-usually rounded-md mb-3"
              key={item.id}
            >
              <img
                src={item.cover}
                alt={item.description}
                className="w-30 p-2"
              />

              <p className="font-medium text-md">
                Preço{" "}
                {item.price.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </p>

              <div className="flex items-center gap-4">
                <button
                  className={`${
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
                  className="cursor-pointer text-lg font-bold"
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
                className="cursor-pointer"
              >
                <FaRegTrashAlt size={20} color="#000" />
              </button>
            </article>
          ))}
        </div>
        {cart.length > 0 && (
          <section className="col-span-2 flex flex-col gap-3">
            <h2 className="text-center font-medium">
              Escolha a forma de Entega
            </h2>
            <article className="border-1 border-slate-200 p-2">
              <div className="flex items-center justify-between">
                <div className="flex gap-3 items-center">
                  <TbTruckDelivery size={30} color="#000" />
                  <div className="flex flex-col">
                    <span className="font-bold text-sm">Padrão</span>
                    <span className="text-xs">Até amanha</span>
                  </div>
                </div>
                <p className="font-md text-green-600 font-bold">Grátis</p>
              </div>
            </article>

            <article className="border-1 border-slate-200 p-2">
              <div className="flex items-center justify-between">
                <div className="flex gap-3 items-center">
                  <FaShop size={30} color="#000" />
                  <div className="flex flex-col">
                    <span className="font-bold text-sm ">Retire na Loja</span>
                    <span className="text-xs w-30 ">
                      Em algumas lojas a partir de 30 minutos
                    </span>
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-center bg-green-600 text-white rounded-full">
                    Maior economia
                  </span>
                  <span className="text-green-600 font-bold">
                    Gratis +5% OFF
                  </span>
                </div>
              </div>
            </article>

            <article className="border-b-1 border-slate-200 p-2 flex flex-col gap-2">
              <h3 className="font-medium tex-lg">Resumo do Pedido</h3>
              <div className="flex justify-between">
                <span className="font-bold text-xl text-slate-700">Total</span>
                <span className="font-bold text-xl text-slate-700">
                  {total}
                </span>
              </div>

              <button className="bg-blue-800 hover:bg-blue-600 transition duration-200 ease-in-out text-white p-2 rounded-md cursor-pointer font-medium">
                Pagar
              </button>
              <Link
                to="/"
                className="text-center border-2 border-slate-800 p-2 rounded-md hover:text-indigo-900 hover:border-indigo-900 transition duration-200 ease-in-out font-medium"
              >
                Escolher mais Produtos
              </Link>
            </article>
          </section>
        )}
      </section>
    </main>
  );
};

export default Cart;
