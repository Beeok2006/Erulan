import React from 'react';
import './Header.css';

interface HeaderProps {
  logoSrc: string;
}

const Header: React.FC<HeaderProps> = ({ logoSrc }) => {
  return (
    <header> 
      <div className="logo">
        <img src={logoSrc} alt="Logo" />
      </div>
    </header>
  );
};

export default Header;
