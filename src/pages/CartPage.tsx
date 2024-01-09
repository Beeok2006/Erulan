// CartPage.tsx
import React, { useEffect, useState } from 'react';
import CartItem from '../components/Cart/CartItem'; // Путь к вашему CartItem
import dataService, { ProductData } from '../assets/services/dataService';

const CartPage: React.FC = () => {
  const [cartItems, setCartItems] = useState<{ product: ProductData; quantity: number }[]>([]);

  useEffect(() => {
    // Предположим, что у вас есть функция, которая возвращает текущую корзину
    const fetchCartItems = async () => {
      // Здесь получите текущие товары в корзине
      // const currentCartItems = await getCartItems(); // Напишите свою функцию получения корзины
      const products = await dataService.getAllProducts(); // Получаем все продукты
      const currentCartItems = products.slice(0, 2).map((product) => ({ product, quantity: 2 }));
      setCartItems(currentCartItems);
    };

    fetchCartItems();
  }, []);

  return (
    <div>
      {cartItems.map((cartItem, index) => (
        <CartItem key={index} item={cartItem.product} quantity={cartItem.quantity} />
      ))}
    </div>
  );
};

export default CartPage;
