import React from 'react';
import { connect } from "react-redux";

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';


import { SigninContainer, ButtonsContainer } from "./sign-in.styles";
import { googleSignInStart, emailSignInStart } from "../../redux/user/user.actions";
class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state={
            email:'',
            password: ''
        };
    }

    handleSubmit = async event => {
        const {dispatch} = this.props;
        event.preventDefault();
        const { email, password } = this.state;
        dispatch(emailSignInStart({email, password}))
    };

    handleChange = event => {
        const {value, name} = event.target;

        this.setState({ [name]:value });
    }
    
    render(){
        const {dispatch} = this.props;
        return(
            <SigninContainer>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit} >
                    <FormInput 
                    name='email' 
                    type='email' 
                    handleChange={this.handleChange} 
                    value={this.state.email} 
                    label='email'
                    required />
                    <FormInput 
                    name='password' 
                    type='password' 
                    handleChange={this.handleChange} 
                    value={this.state.password} 
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
}

export default connect()(SignIn);  