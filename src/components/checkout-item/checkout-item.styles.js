import styled from 'styled-components';

export const CheckoutItemContainer = styled.div `
    width: 100%;
    display: flex;
    min-height: 100px;
    border-bottom: 1px solid darkgrey;
    padding: 15px 0;
    font-size: 20px;
    align-items: center;   
    
    @media screen and (max-width: 800px) {
        font-size: 90%; 
    }
`;

export const ImageContainer = styled.div `
    width: 21%;
    padding-right: 15px;
    

    img {
    width: 95%;
    height: 100%;
    border-radius: 7px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4), 0 6px 20px 0 rgba(0, 0, 0, 0.4);
    }
`;

export const QuantityContainer = styled.span `
    display: flex;
    width: 24%;
    
    div {
        cursor: pointer;
        transition: 400ms ease all;

        &:hover{
          transform: scale(1.35);
          @media screen and (max-width: 800px) {
            transform: unset; 
          }
        }
    }

    span {
        margin: 0 10px;
    }
`;

export const TextContainer = styled.span `
    width: 24%;
`;

export const RemoveButtonContainer = styled.span `
    cursor: pointer;
    transition: 400ms ease all;

    &:hover {
    transform: scale(1.5);
    }
`;

