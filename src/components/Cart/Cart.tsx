// Cart.tsx
import React from 'react';

interface CartProps {
  cartItems: { product: string; quantity: number }[];
}

const Cart: React.FC<CartProps> = ({ cartItems }) => {
  return (
    <div>
      <h2>Корзина</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            {item.product} - Количество: {item.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
