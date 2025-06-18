import { createContext, useContext, useState } from "react";

const ShopContext = createContext({});
export const useShop = () => useContext(ShopContext);

export function ShopProvider({ children }) {
  const [buyItems, setBuyItems] = useState([]);

  const purchasedItem = (itemName) => {
    setBuyItems((prev) => [...prev, itemName]);
  };

  return (
    <ShopContext.Provider value={{ buyItems, setBuyItems, purchasedItem }}>
      {children}
    </ShopContext.Provider>
  );
}
