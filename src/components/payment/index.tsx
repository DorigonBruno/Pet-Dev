import { FaShop } from "react-icons/fa6";
import { TbTruckDelivery } from "react-icons/tb";
import { Link } from "react-router";

import { useContext } from "react";
import { CartContext } from "../../context";

const Payments = () => {
  const { total } = useContext(CartContext);

  return (
    <section className="col-span-4 lg:col-span-2 w-full max-w-xl mx-auto flex flex-col gap-3 py-3 md:py-0">
      <h2 className="text-center md:font-medium md:text-xl font-bold">
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
            <span className="text-green-600 font-bold">Gratis +5% OFF</span>
          </div>
        </div>
      </article>

      <article className="border-b-0 lg:border-b-1 border-slate-200 p-2 flex flex-col gap-2">
        <h3 className="font-medium tex-lg">Resumo do Pedido</h3>
        <div className="flex justify-between">
          <span className="font-bold text-xl text-slate-700">Total</span>
          <span className="font-bold text-xl text-slate-700">{total}</span>
        </div>

        <Link
          to={"/payment"}
          className="bg-blue-800 hover:bg-blue-600 transition duration-200 ease-in-out text-white p-2 rounded-md cursor-pointer font-medium text-center"
        >
          Pagar
        </Link>
        <Link
          to="/"
          className="text-center border-2 border-slate-800 p-2 rounded-md hover:text-indigo-900 hover:border-indigo-900 transition duration-200 ease-in-out font-medium"
        >
          Escolher mais Produtos
        </Link>
      </article>
    </section>
  );
};

export default Payments;
