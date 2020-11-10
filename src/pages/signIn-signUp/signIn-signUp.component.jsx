import React from 'react';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

import { SignInSignUpContainer } from "./signIn-signUp.styles";

const SignInAndSignUpPage=() => (
    <SignInSignUpContainer>
        <SignIn />
        <SignUp />
    </SignInSignUpContainer>
)

export default SignInAndSignUpPage;