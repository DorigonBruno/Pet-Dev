import Success from "../../components/success";

import { useContext, useEffect } from "react";
import { CartContext } from "../../context";

const PaymentPage = () => {
  const { cart, clearCart } = useContext(CartContext);

  useEffect(() => {
    if (cart.length > 0) {
      clearCart();
    }
  }, [cart, clearCart]);

  return (
    <div className="w-full max-w-7xl h-screen m-auto px-4">
      <Success />
    </div>
  );
};

export default PaymentPage;
