import styled from 'styled-components';

export const CartDropdownContainer = styled.div `
    position: absolute;
    width: 240px;
    height: 340px;
    display: flex;
    flex-direction: column;
    border-radius: 7px 0 7px 7px;   //add 
    padding: 10px;
    padding-right: 2px;
    box-shadow: 0 2px 8px 0 rgba(255, 255, 255, 0.25), 0 3px 20px 0 rgba(255, 255, 255, 0.25); // add
    background-color: rgba(0, 0, 0, 0.8);
    top: 90px;
    right: 30px;
    z-index: 5;
    backface-visibility: hidden;


    @media screen and (max-width: 800px) {
        top: 60px;
    }

    button {
      margin-top: 5px;
      margin-bottom: -2px;
      margin-right: 8px;
    }
`;

export const CartItemsContainer = styled.div `
    height: 280px;
    display: flex;
    flex-direction: column;
    overflow: auto; 
`;

export const MassageContainer = styled.span `
    font-size: 22px;
    margin: 50px auto;
    color: white;
`;