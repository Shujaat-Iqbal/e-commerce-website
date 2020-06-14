// React Import
import React from 'react';
import { Link } from 'react-router-dom';

// Styles Import
import './header.component.styles.scss';

// Logo Import
// ReactComponent in SVG import tells Create React App that you want a React component that renders an SVG, rather than its filename
import { ReactComponent as Logo } from '../../assets/icons/crown.svg';

// Firebase Util Import
import { auth } from '../../firebase/firebase.utils';

const Header = ({ currentUser }) => (
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
      {
        currentUser
          ? (
            <div
              className='option'
              onClick={() => auth.signOut()}
            >
              SIGN OUT
            </div>
          )
          : (
            <Link
              className='option'
              to='/signin'
            >
              SIGN IN
            </Link>
          )
      }
    </div>
  </div>
);

export default Header;
