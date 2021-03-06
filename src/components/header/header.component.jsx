// React Import
import React from 'react';

// Logo Import
// ReactComponent in SVG import tells Create React App that you want a React component that renders an SVG, rather than its filename
import { ReactComponent as Logo } from '../../assets/icons/crown.svg';

// Redux HOC import
import { connect } from 'react-redux';

// Styled Components Imports
import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from './header.styles';

// Components Imoprt
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

// Redux Imports
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect'; // used for multiple states
import { signOutStart } from '../../redux/user/user.actions';

const Header = ({ currentUser, hide, signOutStart }) => (
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
            <OptionLink
              as='div'
              onClick={signOutStart}
            >
              SIGN OUT
            </OptionLink>
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

/**
 * maps dispatch actions to component props
 * @param dispatch
 */
const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch(signOutStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
