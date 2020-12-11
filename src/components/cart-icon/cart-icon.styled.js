import styled, { css } from 'styled-components';
import { ReactComponent as ShoppingIconSVG } from '../../assets/shopping-bag.svg';

const stableShadow = props => {
    return !props.hidden && css`
      box-shadow: 0 2px 8px 0 rgba(255, 0, 0, 0.8), 0 6px 20px 0 rgba(255, 0, 0, 0.8);
    `;
}

export const ShoppingIcon = styled(ShoppingIconSVG) `
  width: 24px;
  height: 24px;
  transition: 400ms ease all;
`;

export const ItemCount = styled.span `
  position: absolute;
  font-size: 10px;
  font-weight: bold;
  bottom: 12px;
`;

export const CartIconContainer = styled.div`
    width: 45px;
    height: 45px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border-radius: 50%;
    transition: 400ms ease all;
    backface-visibility: hidden;

    &:hover{
      box-shadow: 0 4px 8px 0 rgba(255, 255, 255, 0.4), 0 6px 20px 0 rgba(255, 255, 255, 0.4);
      @media screen and (max-width : 800px) {
        box-shadow: none;
      }
      
    
      ${ShoppingIcon}{
        transform: scale(1.15);
      }
    }

    &:active{
      @media screen and (max-width : 800px) {
        box-shadow: 0 4px 8px 0 rgba(255, 255, 255, 0.4), 0 6px 20px 0 rgba(255, 255, 255, 0.4);
        transform: translateY(4px);
      }
    }

    ${stableShadow}
`;


