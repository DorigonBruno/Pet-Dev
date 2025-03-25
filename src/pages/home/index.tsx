import { MdOutlineAddShoppingCart } from "react-icons/md";

const Home = () => {
  return (
    <main className="w-full h-screen max-w-7xl m-auto px-4">
      <h1 className="text-center my-6 font-bold md:text-4xl text-2xl">
        Principais Produtos
      </h1>
      <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 justify-items-center place-items-center mt-5 gap-6">
        <article className="flex flex-col items-center gap-2 border-1 border-slate-100 p-2 rounded-md">
          <img
            src="https://cdn.awsli.com.br/600x450/1226/1226108/produto/192410842/daa73a6443.jpg"
            alt="ração"
            className="lg:w-24 md:w-34 w-44 block object-cover"
          />

          <p className="w-54 text-center">
            Descrição genérica blalbalablal asjdhadasd
          </p>

          <div className="flex flex-col">
            <span className="text-xs md:text-sm text-slate-500">
              A partir de
            </span>
            <div className="flex items-center gap-5">
              <span className="font-medium">R$ 20,00</span>
              <button className="cursor-pointer">
                <MdOutlineAddShoppingCart size={20} color="#000" />
              </button>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
};

export default Home;
