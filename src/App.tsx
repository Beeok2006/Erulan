// App.tsx
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom'; // Обновлен импорт
import NavBar from './components/Navbar/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer/Footer';
import ProductDetailsPage from './components/ProductPage/ProductPage';
import { CartProvider } from './components/ProductPage/CartContext';
import CartPage from './pages/CartPage';
import ProductPage from './pages/Manbalance';

const App: React.FC = () => {
  const [] = useState([]);

 

  return (
    <CartProvider>
      
        <>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/product/:productId"
              element={<ProductDetailsPage />}
            />
            <Route path="/catalog" element={<ProductPage />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
          <Footer />
        </>
      
    </CartProvider>
  );
};

export default App;
