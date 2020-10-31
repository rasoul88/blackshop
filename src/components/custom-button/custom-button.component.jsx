import React from 'react';
import './custom-button.style.scss';

const CustomButton = ({ children, isGoogleSignIn, signin_signup, inverted, ...otherProps }) => (
    <button className={`${signin_signup ? 'signin-signup' : '' } ${inverted ? 'inverted' : '' } ${isGoogleSignIn ? 'google-sign-in' : '' } custom-button`} 
    {...otherProps} 
    >
        {children}
    </button>
)

export default CustomButton;