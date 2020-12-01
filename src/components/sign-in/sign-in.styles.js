import styled from 'styled-components';

export const SigninContainer = styled.div `
    border-radius: 7px;
    width: 500px;
    padding: 15px;
    display: flex;
    flex-direction: column;
    margin: 20px;
    box-shadow: 0 2px 8px 0 rgba(255,255,255, 0.4), 0 3px 10px 0 rgba(0, 0, 0, 0.4);
    
    @media screen and (max-width : 515px) {
        width:90%;
        font-size: 90%;
    }
    @media screen and (max-width : 480px) {
        width:99%;
    }
`;

export const ButtonsContainer = styled.div `
    display: flex;
    justify-content: space-between;
    font-size: inherit;
    
    button {
        @media screen and (max-width : 480px) {
            padding : 0 10px;
        }
    }
`;