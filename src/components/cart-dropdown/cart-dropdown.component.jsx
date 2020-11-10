import React from 'react';
import { connect } from 'react-redux';
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { withRouter } from 'react-router-dom';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import  CustomButton from '../custom-button/custom-button.component';
import { createStructuredSelector } from 'reselect'; 

import { CartDropdownContainer, CartItemsContainer, MassageContainer } from "./cart-dropdown.styles";

const CartDropdown = ({cartItems, history, dispatch}) => ( 
    <CartDropdownContainer >
        <CartItemsContainer >
            {cartItems.length
                ? (cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem}/>))
                : <MassageContainer >your cart is empty</MassageContainer>
            }
        </CartItemsContainer>
        <CustomButton onClick={() => {
            history.push('/checkout');
            dispatch(toggleCartHidden());
            }} 
        >GO TO CHECKOUT</CustomButton>
    </CartDropdownContainer>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown));
