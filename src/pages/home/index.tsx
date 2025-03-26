import { useState, useEffect, useContext } from "react";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { Link } from "react-router";
import { CartContext } from "../../context";
import api from "../../services/api";

export type ApiProps = {
  id: string;
  cover: string;
  description: string;
  price: number;
  title: string;
};

const Home = () => {
  const [products, setProducts] = useState<ApiProps[]>([]);

  const { addItemCart } = useContext(CartContext);

  useEffect(() => {
    async function getData() {
      const response = await api.get("/products");
      const data = await response.data;

      setProducts(data);
    }

    getData();
  }, []);

  return (
    <main className="w-full h-screen max-w-7xl m-auto px-4">
      <h1 className="text-center my-6 font-medium font-title md:text-4xl text-2xl">
        Produtos em Alta
      </h1>
      <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 justify-items-center place-items-center mt-5 gap-3 ">
        {products.map((product) => (
          <article
            className="flex flex-col items-center justify-center gap-2 border-2 border-slate-100 hover:border-2 hover:border-slate-500 p-2 rounded-md font-usually"
            key={product.id}
          >
            <Link
              to={`/products/${product.id}`}
              className="flex flex-col items-center"
            >
              <img
                src={product.cover}
                alt={product.description}
                className="lg:w-34 md:w-44 w-54 block object-cover self-center"
              />

              <p className="w-54 text-center text-sm">{product.title}</p>
            </Link>

            <div className="flex flex-col">
              <span className="text-xs md:text-sm text-slate-500">
                A partir de
              </span>
              <div className="flex items-center gap-7">
                <span className="font-medium">
                  {product.price.toLocaleString("pt-Br", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </span>
                <button
                  className="cursor-pointer"
                  onClick={() => addItemCart(product)}
                >
                  <MdOutlineAddShoppingCart size={20} color="#000" />
                </button>
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
};

export default Home;
