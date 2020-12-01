import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from '../../assets/crown.svg';

const OptionContainerStyle = css`
    padding: 10px 15px;
    cursor: pointer;

    &:hover{
        border-radius: 4px;
        box-shadow: 0 4px 8px 0 rgba(255, 255, 255, 0.2), 0 6px 20px 0 rgba(255, 255, 255, 0.2);
        font-weight: 600;

        @media screen and (max-width : 800px) {
            box-shadow: unset;
        }
    }

    @media screen and (max-width : 800px) {
        padding: 7px;
        margin: 0 5px;
    }
    
`;

export const HeaderContainer = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width : 800px) {
        height: 60px;
        padding: 10px;
        margin-bottom: 20px;
    }
`;


export const LogoContainer = styled(Link)`
    height: 70px;    
    width: 70px;
    padding: 5px;   
    text-align: center;
    border-radius: 50%;
    transition: 600ms ease all;
      
    &:hover{
        transform: translate3d(0px,-5px,5px);
        box-shadow: 0 2px 8px 0 rgba(255, 0, 0, 0.8), 0 6px 20px 0 rgba(255, 0, 0, 0.8);

        @media screen and (max-width : 800px) {
            box-shadow: unset;
            transform: unset;
        }
    }

    @media screen and (max-width : 800px) {
        width: 50px;
        padding: 0;
    }
`;

export const CrownLogo = styled(Logo)`
    justify-content:center;
    margin-top: 15px;

    @media screen and (max-width : 800px) {
        margin: 0;
    }
`;

export const OptionsContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    @media screen and (max-width : 800px) {
        width: 80%;
    }
`;

export const OptionLink = styled(Link)`
    ${OptionContainerStyle};

`;

