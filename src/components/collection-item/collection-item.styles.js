import styled from 'styled-components';
import CustomButton from '../custom-button/custom-button.component';

export const AddButton = styled(CustomButton)`
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 255px;
    display: none;

    @media screen and (max-width : 800px) {
      opacity: 0.85;
      display: flex;
    }

`;

export const CollectionFooterContainer = styled.div `
    position: relative;
    width: 100%;
    height: 8%;     
    display: flex;
    justify-content: space-between;
    font-size: 18px;
`;

export const BackgroundImage = styled.div `
    width: 100%;
    height: 95%;
    background-size: cover;
    background-position: center;
    margin-bottom: 5px;
`;

export const CollectionItemContainer = styled.div `
    width: 22vw;
    display: flex;
    flex-direction: column;
    height: 350px;
    align-items: center;
    position: relative;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4), 0 6px 20px 0 rgba(0, 0, 0, 0.4); // add
    border-radius: 7px 7px 7px 7px;
    overflow: hidden;
    
    &:hover { 
      cursor: pointer;
      transform: scale(1.05);
      transition: transform 1s cubic-bezier(0.25, 0.45, 0.45, 0.95);

      @media screen and (max-width : 800px) {
        transform: scale(1);
      }

      ${BackgroundImage}{
        opacity: 0.8;
      }

      ${AddButton}{
        opacity: 0.85;
        display: flex;
      }
    }

    @media screen and (max-width : 800px) {
      width: 46.5vw;
    }
`;




export const NameContainer = styled.span `
    width: 90%;
    margin-bottom: 15px;

    @media screen and (max-width : 800px) {
      width: 80%;
      padding-left: 3px;
    }
`;
export const PriceContainer = styled.span `
    width: 10%;

    @media screen and (max-width : 800px) {
      width: 20%;
    }
`;