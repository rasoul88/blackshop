import styled, {css} from 'styled-components';

const getSizeStyles = props =>{
    return (props.size === 'large') && css`
        height: 380px;
    `;
}

export const ContentContainer = styled.div `
    height: 90px;
    padding: 0 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    background-color: white;
    opacity: 0.7;
    position: absolute;
    color: #4a4a4a;

    @media screen and (max-width : 800px) {
      transform: scale(.75);
    }

    h1 {
        font-weight: bold;
        margin-bottom: 6px;
        font-size: 22px;

        @media screen and (max-width : 800px) {
          font-size: 26px;
          font-weight: bolder;
        }

    }

    span {
        font-weight: lighter;
        font-size: 16px;
        
        @media screen and (max-width : 800px) {
          font-size: 18px;
          font-weight: normal;
        }
    }

`;

export const BackgroundImage = styled.div `
    width: 100%;
    height: 100%;
    background-position: center;
    background-size: cover;
`;

export const MenuItemContainer = styled.div `
    min-width: 30%;
    height: 240px;
    flex: 1 1 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 7.5px 15px;
    overflow: hidden;
    border-radius: 7px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4), 0 6px 20px 0 rgba(0, 0, 0, 0.4);
    
    @media screen and (max-width : 480px) {
      border-radius: 4px;
    }

    &:hover {
        cursor: pointer;
      
        & ${BackgroundImage} {
          transform: scale(1.1);
          transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
        }
      
        & ${ContentContainer} {
          opacity: 0.9;
        }
      }

    &:first-child {
      margin-right: 7.5px;
    }
  
    &:last-child {
      margin-left: 7.5px;
    }

    ${getSizeStyles}

    @media screen and (max-width : 800px) {
        height: 200px;
    }
`;