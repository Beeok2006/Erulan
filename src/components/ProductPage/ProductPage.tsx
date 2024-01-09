// ProductDetailsPage.tsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DataService, { ProductData } from '../../assets/services/dataService';
import { useCart } from './CartContext'; // Укажите правильный путь

interface ProductDetailsPageProps {}

const ProductDetailsPage: React.FC<ProductDetailsPageProps> = () => {
  const { productId } = useParams<{ productId: string }>();
  const { addToCart } = useCart();
  const [product, setProduct] = useState<ProductData | null>(null);
  const [quantity, setQuantity] = useState<number>(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const products = await DataService.getAllProducts();
        const foundProduct = products.find((p) => p.productId === productId);
        setProduct(foundProduct || null);
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    };

    fetchData();
  }, [productId]);

  const handleAddToCart = () => {
    if (product) {
      addToCart(product, quantity);
    }
  };

  if (!product) {
    return <div className="text-center mt-8 text-gray-700">Продукт не найден</div>;
  }

  return (
    <div className="container mx-auto mt-8 p-4 bg-white shadow-lg rounded-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img
            src={`https://via.placeholder.com/400?text=${product.name}`}
            alt="Product Image"
            className="w-full h-auto rounded"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-4 text-gray-800">{product.name}</h1>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <div className="flex flex-col md:flex-row items-center justify-between mb-4">
            <span className="text-2xl font-bold text-blue-500 mb-2 md:mb-0 md:mr-4">
              Цена: ${product.price}
            </span>
            <div className="flex items-center">
              <button
                className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600"
                onClick={() => setQuantity(quantity - 1)}
              >
                -
              </button>
              <span className="mx-4">{quantity}</span>
              <button
                className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600"
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </button>
            </div>
          </div>
          <button
            className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600"
            onClick={handleAddToCart}
          >
            В корзину
          </button>
          <div>
            <h2 className="text-xl font-bold mb-2 text-gray-800">Характеристики:</h2>
            <ul className="list-disc pl-6">
              {product.characteristics.map((char, index) => (
                <li key={index}>{char}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
