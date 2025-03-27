import { Link } from "react-router";

const NotFound = () => {
  return (
    <main className="w-full h-screen max-w-7xl m-auto mt-10">
      <div className="flex flex-col justify-center gap-3 items-center font-usually">
        <h1 className="text-xl md:text-3xl font-bold">404</h1>
        <p className="text-slate-700 font-medium">Página não Encontrada</p>

        <Link to={"/"} className="underline font-medium">
          Acessar Produtos
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
