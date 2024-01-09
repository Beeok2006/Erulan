// CartContext.tsx
import React, { createContext, useContext, useState } from 'react';
import { ProductData } from '../../assets/services/dataService';

interface CartContextProps {
  cart: { product: ProductData; quantity: number }[];
  addToCart: (product: ProductData, quantity: number) => void;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

export const CartProvider: React.FunctionComponent<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<{ product: ProductData; quantity: number }[]>([]);

  const addToCart = (product: ProductData, quantity: number) => {
    setCart((prevCart) => [
      ...prevCart,
      {
        product,
        quantity,
      },
    ]);
  };

  return <CartContext.Provider value={{ cart, addToCart }}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
