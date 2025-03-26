import { createContext, ReactNode, useState, useEffect } from "react";
import { ApiProps } from "../pages/home";
import toast from "react-hot-toast";

type CartContextData = {
  cart: CartRequisitionProps[];
  cartAmount: number;
  addItemCart: (item: ApiProps) => void;
  total: string;
  removeItemsCart: (item: CartRequisitionProps) => void;
  removeSomeItems: (item: CartRequisitionProps) => void;
  clearCart: () => void;
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

  useEffect(() => {
    const localItem = localStorage.getItem("petItems");

    if (localItem) {
      const parseItem = JSON.parse(localItem);

      setCart(parseItem);
      totalItemsCart(parseItem);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("petItems", JSON.stringify(cart));
  }, [cart]);

  function addItemCart(product: ApiProps) {
    const findItem = cart.findIndex((item) => item.id === product.id);

    if (findItem !== -1) {
      const cartList = cart;

      cartList[findItem].amount = cartList[findItem].amount + 1;
      cartList[findItem].total =
        cartList[findItem].amount * cartList[findItem].price;

      setCart(cartList);
      totalItemsCart(cartList);

      toast.success("Item Adicionado", {
        style: {
          background: "#282832",
          color: "#c6d6d6",
        },
      });

      return;
    }

    const data = {
      ...product,
      amount: 1,
      total: product.price,
    };

    setCart((value) => [...value, data]);
    totalItemsCart([...cart, data]);
    toast.success("Item Adicionado", {
      style: {
        background: "#282832",
        color: "#c6d6d6",
      },
    });
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

  function removeSomeItems(product: CartRequisitionProps) {
    const findItem = cart.findIndex((item) => item.id === product.id);

    if (cart[findItem].amount > 1) {
      const myCart = cart;

      myCart[findItem].amount = myCart[findItem].amount - 1;
      myCart[findItem].total = myCart[findItem].total - myCart[findItem].price;

      setCart(myCart);
      totalItemsCart(myCart);

      return;
    }
  }

  function removeItemsCart(product: CartRequisitionProps) {
    const removeItem = cart.filter((item) => item.id !== product.id);

    setCart(removeItem);
    totalItemsCart(removeItem);
    toast.error("Item Removido", {
      style: {
        background: "#282832",
        color: "#c6d6d6",
      },
    });
  }

  function clearCart() {
    setCart([]);
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        cartAmount: cart.length,
        addItemCart,
        total,
        removeItemsCart,
        removeSomeItems,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
