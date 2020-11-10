import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemCount,selectCartHidden } from '../../redux/cart/cart.selectors';

import { CartIconContainer, ShoppingIcon, ItemCount } from "./cart-icon.styled";

const CartIcon = ({ toggleCartHidden, itemCount, hidden }) => (
    <CartIconContainer hidden={hidden} onClick={toggleCartHidden}>
        <ShoppingIcon />
        <ItemCount >{itemCount}</ItemCount>
    </CartIconContainer>
);

const mapStateToProps = createStructuredSelector ({
    hidden: selectCartHidden,
    itemCount: selectCartItemCount
})

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);