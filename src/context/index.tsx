import { createContext, ReactNode, useState, useEffect } from "react";
import { ApiProps } from "../pages/home";

type CartContextData = {
  cart: CartRequisitionProps[];
  cartAmount: number;
  addItemCart: (item: ApiProps) => void;
  total: string;
};

type CartRequisitionProps = {
  id: string;
  cover: string;
  description: string;
  price: number;
  title: string;
  amount: number;
  total: number;
};

type CartProviderProps = {
  children: ReactNode;
};

export const CartContext = createContext({} as CartContextData);

const CartContextProvider = ({ children }: CartProviderProps) => {
  const [cart, setCart] = useState<CartRequisitionProps[]>([]);
  const [total, setTotal] = useState("");

  function addItemCart(product: ApiProps) {
    const findItem = cart.findIndex((item) => item.id === product.id);

    if (findItem !== -1) {
      const cartList = cart;

      cartList[findItem].amount = cartList[findItem].amount + 1;
      cartList[findItem].total =
        cartList[findItem].amount * cartList[findItem].price;

      setCart(cartList);
      totalItemsCart(cartList);
      return;
    }

    const data = {
      ...product,
      amount: 1,
      total: product.price,
    };

    setCart((value) => [...value, data]);
    totalItemsCart([...cart, data]);
  }

  function totalItemsCart(items: CartRequisitionProps[]) {
    const totalCart = items.reduce((acc, item) => {
      return acc + item.total;
    }, 0);

    const totalCartFormated = totalCart.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });

    setTotal(totalCartFormated);
  }

  return (
    <CartContext.Provider
      value={{ cart, cartAmount: cart.length, addItemCart, total }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
