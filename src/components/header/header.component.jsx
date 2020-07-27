// React Import
import React from 'react';

// Logo Import
// ReactComponent in SVG import tells Create React App that you want a React component that renders an SVG, rather than its filename
import { ReactComponent as Logo } from '../../assets/icons/crown.svg';

// Firebase Util Import
import { auth } from '../../firebase/firebase.utils';

// Redux HOC import
import { connect } from 'react-redux';

// Styled Components Imports
import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink, OptionDiv } from './header.styles';

// Components Imoprt
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

// Redux Imports
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect'; // used for multiple states

const Header = ({ currentUser, hide }) => (
  <HeaderContainer>
    {/* Logo */}
    <LogoContainer to='/'>
      <Logo className='logo' />
    </LogoContainer>
    {/* Options */}
    <OptionsContainer>
      <OptionLink
        to='/shop'
      >
        SHOP
      </OptionLink>
      <OptionLink
        to='/contact'
      >
        CONTACT
      </OptionLink>
      {
        currentUser
          ? (
            <OptionDiv
              onClick={() => auth.signOut()}
            >
              SIGN OUT
            </OptionDiv>
          )
          : (
            <OptionLink
              to='/signin'
            >
              SIGN IN
            </OptionLink>
          )
      }
      <CartIcon />
    </OptionsContainer>

    {/* Cart DropDown */}
    {
      hide
        ? null
        : <CartDropdown />
    }
  </HeaderContainer>
);

/**
 * maps required properties from state to our props which we can then use inside our component through connect
 * @param {storeObject} state passed on to createStructuredSelector which then uses it for multiple states 
 */
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hide: selectCartHidden
});

export default connect(mapStateToProps)(Header);
