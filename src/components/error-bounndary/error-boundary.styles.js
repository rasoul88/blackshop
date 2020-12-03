import styled from 'styled-components';

export const ErrorImageOverlay = styled.div`
  height: 70vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ErrorImageContainer = styled.div`
  display: inline-block;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  background-size: cover;
  background-position: center;
  width: 40vh;
  height: 40vh;
`;

export const ErrorImageText = styled.h2`
  text-align:center;
  font-size: 22px;
  color: lightgray;
  letter-spacing:1.3px;

  p {
    padding:0;
    margin:0 ;
    font-size: 28px;
    color: gold;
  }
  span {
    color: red;
  }
`;