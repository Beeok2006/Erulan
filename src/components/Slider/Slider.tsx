import React, { useState, useEffect } from 'react';
import './slider.css';
import first from './images/first.png'
import second from './images/second.png'
import third from './images/third.png'

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
    }, 3000); // Change the interval (in milliseconds) based on your preference

    return () => clearInterval(intervalId); // Cleanup the interval on component unmount
  }, [currentSlide]);

  return (
    <div className="relative slider">
      <div
        className="flex transition-transform duration-500 ease-in-out slides"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className=" md:w-screen flex-shrink-0">
            <img src={slide} alt={`Slide ${index + 1}`} className="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AutoSlider;
