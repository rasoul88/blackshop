import React from 'react';
import {useTransition, animated} from 'react-spring';
import * as easings from 'd3-ease'
import { auth } from '../../firebase/firebase.utils';

import { removeCurrentUser } from "../../redux/user/user.actions";
import { clearCart } from "../../redux/cart/cart.actions";

import { connect } from 'react-redux'; 
import CartIcon from '../cart-icon/cart-icon.component';
import { createStructuredSelector } from 'reselect'; 
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartHidden } from '../../redux/cart/cart.selectors'; 
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import { HeaderContainer, LogoContainer, CrownLogo, OptionsContainer, OptionLink } from "./heder.styles";

const Header = ({ currentUser, hidden, dispatch }) => {
  const transitions = useTransition(!hidden, null, {
    config: { duration: 250, easing: easings.easeBackOut.overshoot(1.2) },
    from: { position: 'absolute', right: '0px',opacity: 0 , transform: 'scale(0)' },
    enter: { opacity: 1, transform: 'scale(1)'  },
    leave: { opacity: 0 , transform: 'scale(0)' },
  })

  return(
  <HeaderContainer>
    <LogoContainer to='/'>
      <CrownLogo />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to='/shop'>
        SHOP
      </OptionLink>
      <OptionLink to='/shop'>
        CONTACT
      </OptionLink>
      {currentUser ? (
        <OptionLink as='div' onClick={() => {
            auth.signOut();
            dispatch(removeCurrentUser());
            dispatch(clearCart());
          }}>
          SIGN OUT
        </OptionLink>
      ) : (
        <OptionLink to='/signin'>
          SIGN IN
        </OptionLink>
      )}
      <CartIcon />
    </OptionsContainer>
    {transitions.map(({ item, key, props }) =>
      item && <animated.div key={key} style={props}><CartDropdown /></animated.div>
    )}
    {/* {hidden ? null : <CartDropdown />} */}
  </HeaderContainer>
)};

const mapStateToProps = createStructuredSelector ({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
