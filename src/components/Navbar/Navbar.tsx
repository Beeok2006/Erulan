import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import logo from '../../assets/logo.png';
import cartIcon from '../../assets/cartIcon.svg';

const NavBar: React.FC = () => {
  const location = useLocation();
  const [isActive, setIsActive] = useState(false);
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  const handleSetActive = () => {
    setIsActive(!isActive);
  };

  return (
    <nav className={`bg-custom-green p-4 ${isActive ? 'active' : ''}`}>
      <div className="container mx-auto flex justify-between items-start flex flex-col lg:flex">
        {/* Logo and Cart Icon */}
        <div className="flex items-center">
          <Link to="/catalog" className="text-black font-bold text-xl logo">
            <img src={logo} alt="Logo" />
          </Link>
          {!isMobile && (
            <Link to="/cart" className={`text-white hover:text-gray-300 px-4 py-2 ${location.pathname === '/cart' ? 'active' : ''}`} onClick={handleSetActive}>
            <img src={cartIcon} alt="Cart Icon" style={{ width: '77px', height: '24px' }} />
          </Link>
          )}
        </div>

        {/* Navigation Links (visible on small screens) */}
        {isMobile && (
          <div className='flex'>
            <Link to="/" className={`text-white hover:text-gray-300 px-4 py-2 ${location.pathname === '/' ? 'active' : ''}`} onClick={handleSetActive}>Главная</Link>
            <Link to="/catalog" className={`text-white hover:text-gray-300 px-4 py-2 ${location.pathname === '/catalog' ? 'active' : ''}`} onClick={handleSetActive}>Каталог</Link>
            <Link to="/cart" className={`text-white hover:text-gray-300 px-4 py-2 ${location.pathname === '/cart' ? 'active' : ''}`} onClick={handleSetActive}>
  <img src={cartIcon} alt="Cart Icon" style={{ width: '77px', height: '24px' }} />
</Link>

            
          </div>
        )}

        {/* Mobile Menu Button (hidden on small screens) */}

        {/* Navigation Links (visible on large screens) */}
        {!isMobile && (
          <div className="lg:flex space-x-4">
            <Link to="/" className={`text-white hover:text-gray-300 ${location.pathname === '/' ? 'active' : ''}`} onClick={handleSetActive}>Главная</Link>
            <Link to="/catalog" className={`text-white hover:text-gray-300 ${location.pathname === '/catalog' ? 'active' : ''}`} onClick={handleSetActive}>Каталог</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
