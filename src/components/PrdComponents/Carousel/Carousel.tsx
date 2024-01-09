import React, { useState, useEffect } from 'react';
import './ProductCarousel.css';
import first from './images/first.png'
import second from './images/second.png'
import third from './images/third.png'

// ... (previous imports and code)

const AutoSlider: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState<number>(0);
  
    const slides = [
      first,
      second,
      third,
    ];
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
      }, 3000);
  
      return () => clearInterval(intervalId);
    }, [currentSlide, slides.length]);
  
    const handleDotClick = (index: number) => {
      setCurrentSlide(index);
    };
  
    return (
      <div className="relative overflow-hidden slider">
        <div
          className="flex transition-transform duration-500 ease-in-out slides"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="w-full md:w-screen flex-shrink-0">
              <img src={slide} alt={`Slide ${index + 1}`} className="w-full h-auto object-cover" />
            </div>
          ))}
        </div>
        
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex space-x-2 ">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-4 h-4 rounded-full ${currentSlide === index ? 'bg-black' : 'bg-green-300'}`}
            ></button>
          ))}
        </div>
      </div>
    );
  };
  
  export default AutoSlider;