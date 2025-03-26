import { MdCheckCircle } from "react-icons/md";

const Success = () => {
  return (
    <main className="w-full h-screen max-w-7-xl m-auto">
      <h2 className="text-xl font-bold font-title mt-4 text-center">
        Pedido Confirmado
      </h2>
      <section className="mt-1 bg-green-300 border-2 border-green-700 w-full m-auto max-w-xl p-3 flex flex-col gap-1">
        <h4 className="text-lg text-green-800 font-bold">
          Seu pedido foi confirmado
        </h4>
        <p className="font-medium text-green-700">
          Será encaminhado os detalhes da compra para seu E-mail
        </p>

        <span className="flex items-center  gap-2 font-bold text-green-900">
          <MdCheckCircle size={20} />
          Pagamento aprovado
        </span>
      </section>
    </main>
  );
};

export default Success;
