import { useState, useEffect } from "react";
import { ApiProps } from "../home";
import { useParams } from "react-router";
import { useContext } from "react";
import { CartContext } from "../../context";
import { MdOutlineAddShoppingCart } from "react-icons/md";

import api from "../../services/api";
import NotFound from "../notFound";

const Products = () => {
  const [product, setProduct] = useState<ApiProps | null>(null);
  const [error, setError] = useState(false);

  const { id } = useParams();

  const { addItemCart } = useContext(CartContext);

  useEffect(() => {
    async function getProduct() {
      try {
        const response = await api.get(`/products/${id}`);
        const data = await response.data;

        if (!data) {
          setError(true);
        } else {
          setProduct(data);
          setError(false);
        }
      } catch (error) {
        console.log(error);
        setError(true);
      }
    }

    getProduct();
  }, [id]);

  if (error) return <NotFound />;

  if (product === null) return null;

  return (
    <main className="w-full h-screen max-w-7xl m-auto px-4">
      <section className="flex flex-col md:flex-row items-center gap-8 md:gap-1 md:mt-20 mt-10">
        <img
          src={product.cover}
          alt={product.description}
          className="lg:w-100 w-50 block object-cover self-center"
        />
        <article className="flex flex-col gap-4 md:max-w-lg max-w-sm w-full m-auto">
          <h1 className="font-bold font-title lg:text-4xl md:text-2xl text-lg md:mb-4 text-slate-700">
            {product.title}
          </h1>
          <p className="font-usually lg:text-base md:text-sm text-xs text-slate-600">
            {product.description}
          </p>
          <div className="flex gap-10">
            <span className="font-usually lg:text-xl md:text-lg font-bold text-slate-700">
              {product.price.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </span>
            <button
              className="cursor-pointer"
              onClick={() => addItemCart(product)}
            >
              <MdOutlineAddShoppingCart size={20} />
            </button>
          </div>
        </article>
      </section>
    </main>
  );
};

export default Products;
