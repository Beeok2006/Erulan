// Footer.tsx

import React from 'react';
import './Footer.css';
import liszt from './images/footer_shape01.png';
import liszt2 from './images/footer_shape02.png';
import logo from '/src/assets/logo.png'


  

  

const Footer: React.FC = () => {
  return (
    <div className="footer-top-wrap bg-black text-white">
      <div className="container mx-auto">
        <div className="footer-widgets-wrap">
          <div className="lg:flex lg:justify-between">
            <div className="lg:w-4/12 md:w-7/12 mb-8 lg:mb-0">
              <div className="footer-widget">
                <div className="footer-about">
                  <div className="footer-logo logo">
                    <a href="#contacts"><img src={logo} alt="Logo" /></a>
                  </div>
                  <div className="footer-text">
                    <p>Наш продукт – это искусство заботы. Красиво. Инновационно. Ваше благополучие в наших лучших руках.</p>
                  </div>
                  {/* Добавьте социальные иконки здесь, если нужно */}
                </div>
              </div>
            </div>
            <div className="lg:w-3/12 md:w-5/12 sm:w-6/12">
              <div className="footer-widget">
                <h4 className="fw-title">О нас</h4>
                <ul className="list-wrap">
                  <li><a href="#about_us">О компании</a></li>
                  <li><a href="#about_prd">О продукте</a></li>
                  <li><a href="#issues">Заболевание</a></li>
                  <li><a href="#contacts">Контакты</a></li>
                </ul>
              </div>
            </div>
            <div className="lg:w-5/12 md:w-7/12">
              <div className="footer-widget">
                <h4 className="fw-title">СВЯЗАТЬСЯ С НАМИ</h4>
                <div className="footer-contact-wrap">
                  <ul className="list-wrap">
                   <li className="phone"><svg width="1em" height="1em" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" style={{ fontSize: '18px', marginRight: '10px' }}>
    <path fill="#0D9B4D" d="m493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464c0-11.2-7.7-20.9-18.6-23.4"></path>
  </svg>+7 778 836 35 74</li>
                    <li className="mail"><svg width="24" height="24" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" style={{ fontSize: '18px', marginRight: '10px' }}>
    <path fill="#0D9B4D" fillRule="evenodd" d="m7.172 11.334l2.83 1.935l2.728-1.882l6.115 6.033c-.161.052-.333.08-.512.08H1.667c-.22 0-.43-.043-.623-.12zM20 6.376v9.457c0 .247-.054.481-.15.692l-5.994-5.914zM0 6.429l6.042 4.132l-5.936 5.858A1.663 1.663 0 0 1 0 15.833zM18.333 2.5c.92 0 1.667.746 1.667 1.667v.586L9.998 11.648L0 4.81v-.643C0 3.247.746 2.5 1.667 2.5z"/>
</svg> vita-balance24@gmail.com</li>
                    <li className="website"><svg width="24" height="24" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" style={{ fontSize: '18px', marginRight: '10px' }}>
    <g fill="#0D9B4D">
        <path fillRule="evenodd" d="M1.25 10a8.75 8.75 0 1 0 17.5 0a8.75 8.75 0 0 0-17.5 0m16 0a7.25 7.25 0 1 1-14.5 0a7.25 7.25 0 0 1 14.5 0" clipRule="evenodd"/>
        <path fillRule="evenodd" d="M6.25 10c0 4.522 1.491 8.25 3.75 8.25s3.75-3.728 3.75-8.25S12.259 1.75 10 1.75S6.25 5.478 6.25 10m6 0c0 3.762-1.195 6.75-2.25 6.75S7.75 13.762 7.75 10S8.945 3.25 10 3.25s2.25 2.988 2.25 6.75" clipRule="evenodd"/>
        <path d="m3.602 5.467l1.006-1.112c.1.09.209.18.325.267c1.271.952 3.3 1.54 5.515 1.54c1.891 0 3.653-.427 4.931-1.158c.308-.176.582-.367.819-.57l.974 1.141a6.73 6.73 0 0 1-1.048.73c-1.516.868-3.534 1.356-5.676 1.356c-2.522 0-4.865-.678-6.415-1.839a6.063 6.063 0 0 1-.431-.355m0 9.082l1.006 1.112c.1-.091.209-.18.325-.267c1.271-.952 3.3-1.54 5.515-1.54c1.891 0 3.653.427 4.931 1.158c.308.176.582.367.819.57l.974-1.141a6.841 6.841 0 0 0-1.048-.73c-1.516-.868-3.534-1.356-5.676-1.356c-2.522 0-4.865.678-6.415 1.839a6.06 6.06 0 0 0-.431.355M1.75 10.75v-1.5h16.5v1.5z"/>
    </g>
</svg> vita-balance.kz</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="footer-shape one">
        <img src={liszt} alt="img" className="wow fadeInLeft" data-wow-delay=".3s" data-wow-duration="1s" />
      </div>
      <div className="footer-shape two">
        <img src={liszt2} alt="img" className="wow fadeInRight" data-wow-delay=".3s" data-wow-duration="1s" />
      </div>
      <div className="copyright-wrap text-white">
      <div className="container mx-auto">
        <div className="lg:flex lg:justify-between">
          <div className="lg:w-7/12 mb-4 lg:mb-0">
            <div className="copyright-text">
              <a href="/privacy-policy.html" className="block mb-2">Политика Конфиденциальности</a>
              <a href="/privacy-back.html" className="block mb-2">Политика Возврата</a>
              <a href="/privacy-delivery.html" className="block">Политика Доставки</a>
            </div>
          </div>
          <div className="lg:w-5/12 text-center lg:text-md-end">
            <div className="payment-card">
              <img src="assets/img/others/card_img.png" alt="card" />
            </div>
          </div>
        </div>
      </div>
    </div>  
    </div>
    
    
    
  );
};

export default Footer;
