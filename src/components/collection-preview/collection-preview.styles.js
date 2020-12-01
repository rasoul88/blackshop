import styled from 'styled-components';

export const Preview = styled.div `
    display: flex;
    justify-content: space-between;
    
    @media screen and (max-width : 800px) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 15px;
    }
`;

export const Title = styled.h1 `
    width: auto;
    cursor: pointer;
    font-size: 28px;
    margin-bottom: 25px;

    &:hover{
      color: gray;
    }
`;

export const CollectionPreviewContainer = styled.div `
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;

    @media screen and (max-width : 480px) {
      align-items: center;
    }
`;

