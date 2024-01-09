// CartItem.tsx
import React from 'react';
import { ProductData } from '../../assets/services/dataService'; // Путь к вашему сервису данных

interface CartItemProps {
  item: ProductData;
  quantity: number;
}

const CartItem: React.FC<CartItemProps> = ({ item, quantity }) => {
  return (
    <div className="cart-item">
      <img src={item.url} alt={item.name} className="cart-item-image" />
      <div className="cart-item-details">
        <h3>{item.name}</h3>
        <p>{item.description}</p>
        <p>Цена: ${item.price}</p>
        <p>Количество: {quantity}</p>
      </div>
    </div>
  );
};

export default CartItem;
