// React Import
import React from 'react';

// Styles Import
import './header.component.styles.scss';

// Component Import
import { Link } from 'react-router-dom';

// Logo Import
// ReactComponent in SVG import tells Create React App that you want a React component that renders an SVG, rather than its filename
import { ReactComponent as Logo } from '../../assets/icons/crown.svg';

const Header = () => (
  <div className='header'>
    {/* Logo */}
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>
    {/* Options */}
    <div className='options'>
      <Link
        className='option'
        to='/shop'
      >
        SHOP
      </Link>
      <Link
        className='option'
        to='/contact'
      >
        CONTACT
      </Link>
    </div>
  </div>
);

export default Header;
