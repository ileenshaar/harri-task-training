import { createContext, useState } from "react";

export const cartContext = createContext();

export function CartProvider({ children }) {
  let [cartItems, setCartItems] = useState([]);
  return (
    <cartContext.Provider value={{ cartItems, setCartItems }}>
      {children}
    </cartContext.Provider>
  );
}
