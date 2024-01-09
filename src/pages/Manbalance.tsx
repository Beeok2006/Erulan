import AutoSlider from "../components/PrdComponents/Carousel/Carousel";
import Card from "../components/PrdComponents/Сards/Card";

// import ProductDetailsPage from "../components/ProductPage/ProductPage";
const ProductPage: React.FC = () => {
  const cardData = [
    {
      id: 1,
      title: 'Название продукта 1',
      description: 'Описание продукта 1',
      imageSrc: 'https://mdbootstrap.com/img/new/standard/nature/111.webp',
      
     
    },
    {
      id: 2,  
      title: 'Название продукта 2',
      description: 'Описание продукта 2',
      imageSrc: 'https://mdbootstrap.com/img/new/standard/nature/222.webp',
      
     
    },
    {
        id: 3,
        title: 'Название продукта 3',
        description: 'Описание продукта 3',
        imageSrc: 'https://mdbootstrap.com/img/new/standard/nature/222.webp',
     
      
      },
      {
        id: 4,
        title: 'Название продукта 4',
        description: 'Описание продукта 4',
        imageSrc: 'https://mdbootstrap.com/img/new/standard/nature/222.webp',
       
      },
      {
        id: 5,
        title: 'Название продукта 5',
        description: 'Описание продукта 5',
        imageSrc: 'https://mdbootstrap.com/img/new/standard/nature/222.webp',
       
      },
      {
        id: 6,
        title: 'Название продукта 6',
        description: 'Описание продукта 6',
        imageSrc: 'https://mdbootstrap.com/img/new/standard/nature/222.webp',
       
      },
    
    
    // Add more card data as needed
  ];

  return (
    <>
      <AutoSlider />
      <h1 className="mt-4">КАТАЛОГ ТОВАРОВ</h1>
      <div className="resp">
        {cardData.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
      
    </>
  );
}

export default ProductPage;
