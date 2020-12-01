import styled, { css } from "styled-components";

const getSingInStyle = (props) => {
    return props.signin_signup && css `
        &:hover {
          background-color: rgba(255, 255, 255, 0.1);
          color: black;
          border: none;
          box-shadow: 0 4px 8px 0px rgba(255, 0, 0, 0.568), 0 6px 20px 0px rgba(255, 0, 0, 0.568);
        }
        &:active {
          box-shadow: none;
        }
    `;
}
const getInvertedStyle = (props) => {
    return props.inverted && css `
        background-color: white;
        color: black;
        border: 1px solid black;
        display: flex;
        justify-content: center;

        @media screen and (max-width : 480px) {
          min-width: 155px;
          padding: 0 10px;
        }

        &:hover {
          background-color: black;
          color: white;
          border: none;
          box-shadow: 0 4px 8px 0px rgba(255, 0, 0, 0.568), 0 6px 20px 0px rgba(255, 0, 0, 0.568);
        }
        &:active {
          box-shadow: none;
        }
    `;
}
const getGoogleStyle = (props) => {
    return props.isGoogleSignIn && css `
    background-color: #4285f4;
    color: white;

    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
      color: black;
      border: none;
      box-shadow: 0 4px 8px 0px rgba(255, 0, 0, 0.568), 0 6px 20px 0px rgba(255, 0, 0, 0.568);
    }
    &:active {
      box-shadow: none;
    }
`;
}
export const CustomButtonContainer = styled.button`
    min-width: 165px;
    width: auto;
    height: 50px;
    border-radius: 7px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 35px;
    font-size: 15px;
    background-color: black;
    color: white;
    text-transform: uppercase;
    font-family: 'Open Sans Condensed';
    font-weight: bolder;
    border: none;
    cursor: pointer;
    transition: 600ms ease all;
    outline: none;

    @media screen and (max-width : 392px) {
      min-width:145px;
    }

    &:hover {
      background-color: white;
      color: black;
      border: 1px solid black;
    }

    &:active {
      transform: scale(.9);
      box-shadow: none;
    }

    ${getSingInStyle}
    ${getInvertedStyle}
    ${getGoogleStyle}
`;
