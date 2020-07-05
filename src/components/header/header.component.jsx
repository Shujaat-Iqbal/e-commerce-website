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

// Redux HOC import
import { connect } from 'react-redux';

// Components Imoprt
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

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
      <CartIcon />
    </div>

    {/* Cart DropDown */}
    <CartDropdown />
  </div>
);

/**
 * maps required properties from state to our props which we can then use inside our component through connect
 * @param {storeObject} state
 */
const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(Header);
