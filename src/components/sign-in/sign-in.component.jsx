import React from 'react';
import './sign-in.style.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {auth, signInWithGoogle} from '../../firebase/firebase.utils';

class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state={
            email:'',
            password: ''
        };
    }

    handleSubmit = async event => {
        event.preventDefault();

        try {
            const { email, password } = this.state;
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email:'',password: ''})
        } catch (error) {
            console.log(error);
        }    
    };

    handleChange = event => {
        const {value, name} = event.target;

        this.setState({ [name]:value });
    }
    
    render(){
        return(
            <div className='sign-in'>
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
                    <div className='btns-container'>
                        <CustomButton type='submit' signin_signup>Sign in</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn >
                        {''}
                        Sign in with Google{''}
                        </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;  