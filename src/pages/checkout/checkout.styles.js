import styled from 'styled-components';

export const TextContainer = styled.div `
    text-align: center;
    margin-top: 40px;
    font-size: 35px;
    color:white;

    @media screen and (max-width: 800px) {
        font-size: 150%; 
    }
`;

export const TotalContainer = styled.div `
    margin-top: 30px;
    margin-left: auto;
    font-size: 36px;

    @media screen and (max-width: 800px) {
        font-size: 150%; 
    }
`;

export const HeaderBlockContainer = styled.div `
    text-transform: capitalize;
    width: 23%;

    &:last-child {
        width: 8%;

        @media screen and (max-width: 800px) {
         width: 12%
        }
    }

    @media screen and (max-width: 800px) {
        width: 22%
    }
`;

export const CheckoutHeader = styled.div `
    width: 100%;
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid darkgrey;
`;

export const CheckoutContainer = styled.div `
    width: 55%;
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 50px auto 0;
    
    button {
      margin-left: auto;
      margin-top: 50px;
    }

    @media screen and (max-width: 800px) {
        width: 90%;
    }
`;