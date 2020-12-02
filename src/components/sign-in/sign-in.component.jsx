import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { createStructuredSelector } from 'reselect'; 
import { selectErrorUser } from "../../redux/user/user.selectors";

import { SigninContainer, ButtonsContainer } from "./sign-in.styles";
import { googleSignInStart, emailSignInStart, clearError } from "../../redux/user/user.actions";

const SignIn = ({dispatch, errorUser}) => {
    const [userCredentials, setCredentials] = useState({email: '', password: ''});
    
    useEffect(() => {
        if(errorUser){
            alert(errorUser.message);
            dispatch(clearError())
        }
    }, [errorUser, dispatch])
    
    const { email, password } = userCredentials;
    
    const handleSubmit = async event => {
        event.preventDefault();
        dispatch(emailSignInStart({email, password}));
    };

    const handleChange = event => {
        const {value, name} = event.target;

        setCredentials({...userCredentials, [name]:value });
    }
    
    return(
        <SigninContainer>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit} >
                <FormInput 
                name='email' 
                type='email' 
                handleChange={handleChange} 
                value={email} 
                label='email'
                required />
                <FormInput 
                name='password' 
                type='password' 
                handleChange={handleChange} 
                value={password} 
                label='password'
                required />
                <ButtonsContainer>
                    <CustomButton type='submit' signin_signup>Sign in</CustomButton>
                    <CustomButton type='button' onClick={() => dispatch(googleSignInStart())} isGoogleSignIn >
                    {''}
                    Sign in with Google{''}
                    </CustomButton>
                </ButtonsContainer>
            </form>
        </SigninContainer>
    )
}

const mapStateToProps = createStructuredSelector ({
    errorUser: selectErrorUser
})

export default connect(mapStateToProps)(SignIn);  