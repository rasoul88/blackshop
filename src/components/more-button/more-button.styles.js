import styled from "styled-components";

export const ButtonContainer = styled.div`
    width: 100%;
    display: flex;
    align-items:center;
    justify-content: center;
`;

export const MoreButtonContainer = styled.button`
    min-width: 50px;
    width: 130px;
    height: 45px;
    margin-top: 30px;
    background-color: gold;
    color: red;
    font-size: 16px;
    font-style: bolder;
    box-shadow: 0 2px 8px 0px rgba(255, 0, 0, 0.568), 0 4px 15px 0px rgba(255, 0, 0, 0.568);
    border: none;
    border-radius: 50px;
    outline: none;
    transition : all .5s ease;

    &:hover {
        background-color: gold;
        color: red;
        transform: scaleX(1.1);
        border:none;
    }

    &:active {
        transform: scaleX(1.1);
    }
`;
