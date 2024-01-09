// dataService.ts


export interface ProductData {
  productId: string;
  name: string;
  description: string;
  price: number;
  characteristics: string[];
  images: ProductImage[];
}

interface ProductImage {
  id: string;
  url: string;
}

class DataService {
  async getAllProducts(): Promise<ProductData[]> {
    return [
      {
        productId: '1',
        name: 'Product 1',
        description: 'Description for Product 1',
        price: 19.99,
        characteristics: ['Characteristic 1', 'Characteristic 2'],
        images: [
          { id: '1', url: 'https://via.placeholder.com/400x300' },
          { id: '2', url: 'https://via.placeholder.com/400x300' },
        ],
      },
      {
        productId: '2',
        name: 'Product 2',
        description: 'Description for Product 2',
        price: 29.99,
        characteristics: ['Characteristic 3', 'Characteristic 4'],
        images: [
          { id: '3', url: 'https://via.placeholder.com/400x300' },
          { id: '4', url: 'https://via.placeholder.com/400x300' },
        ],
      },
      // Add more products as needed
    ];
  }
}

export default new DataService();
