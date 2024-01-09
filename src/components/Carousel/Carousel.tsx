// CardCarousel.tsx

import React, { useState, useEffect } from 'react';
import './Carousel.css'; 
import manbalance from './images/manbalance.png'
import flexbalance from './images/flexbalance.png'

const CardCarousel: React.FC = () => {
  const [currentCard, setCurrentCard] = useState<number>(0);

  const cards = [
    { id: 1, title: 'ManBalance', image: manbalance , content: 'MAN BALANCE - универсальное средство для мужчин, с помощью инновационных технологий и лучших врачей с России, помогает мужчинам найти свой баланс. Теперь и в Казахстане!'   },
    { id: 2, title: 'FlexBalance',image: flexbalance , content: 'Flex-balance - источник биологически активных веществ, направленный на поддержание сбалансированного здоровья современного человека.'},
    
  ];

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setCurrentCard((prevCard) => (prevCard + 1) % cards.length);
//     }, 3000);

//     return () => clearInterval(intervalId);
//   }, [currentCard]);

  return (
    <div className="card-carousel">                                                              
      <div
        className="responsive-cards"
        style={{ transform: `translateX(-${currentCard * 100}%)`, width: '100%', display: 'flex' }}
      >
        {cards.map((card) => (
          <div key={card.id} className="card ">
            <h2 className="card-title">{card.title}</h2>
            <img src={card.image} alt={card.title} className="card-image  " />
            <p className="card-content">{card.content}</p>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardCarousel;
