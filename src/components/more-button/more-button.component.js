import React from 'react';
import { ButtonContainer, MoreButtonContainer  } from "./more-button.styles";

const MoreButton = ({ children, ...otherProps }) => (
    <ButtonContainer {...otherProps}>
        <MoreButtonContainer>
            {children}
        </MoreButtonContainer>
    </ButtonContainer>
)

export default MoreButton;
