import React from 'react';
import { connect } from 'react-redux';

import { addItem } from '../../redux/cart/cart.actions';

import { CollectionItemContainer, BackgroundImage, 
         CollectionFooterContainer,NameContainer,
         PriceContainer, AddButton } from "./collection-item.styles";

const CollectionItem = ({item, addItem}) => {
    const { imageUrl, name, price } = item;
    return (
                <CollectionItemContainer >
                        <BackgroundImage
                            style={{
                                backgroundImage:`url(${imageUrl})`
                            }}
                        />
                        <CollectionFooterContainer >
                            <NameContainer >{name}</NameContainer>
                            <PriceContainer >${price}</PriceContainer>
                        </CollectionFooterContainer>
                        <AddButton onClick={() => addItem(item)} inverted> Add to cart </AddButton>
                </CollectionItemContainer>
    
)}

const mapDispathToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispathToProps)(CollectionItem);