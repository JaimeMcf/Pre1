import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) => {
    const index = cart.findIndex((prod) => prod.id === item.id);
    if (index !== -1) {
      const cartCopy = [...cart];
      cartCopy[index].quantity += quantity;
      setCart(cartCopy);
    } else {
      setCart([...cart, { ...item, quantity }]);
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  const totalQuantity = cart.reduce((acc, prod) => acc + prod.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, addItem, clearCart, totalQuantity }}>
      {children}
    </CartContext.Provider>
  );
}