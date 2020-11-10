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
    }
`;

export const CrownLogo = styled(Logo)`
    justify-content:center;
    margin-top: 15px;
`;

export const OptionsContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

export const OptionLink = styled(Link)`
    ${OptionContainerStyle}
`;

