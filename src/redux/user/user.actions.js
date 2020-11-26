import UserActionTypes from './user.types';

export const googleSignInStart = () => ({
    type : UserActionTypes.GOOGLE_SIGN_IN_START
})

export const emailSignInStart = (emailAndPassword) => ({
    type : UserActionTypes.EMAIL_SIGN_IN_START,
    payload : emailAndPassword
})

export const signInSuccess = (user) => ({
    type : UserActionTypes.SIGN_IN_SUCCESS,
    payload : user
})

export const signInFailure = (error) => ({
    type : UserActionTypes.SIGN_IN_FAILURE,
    payload : error
})

// export const checkUserSession = () => ({
//     type : UserActionTypes.CHECK_USER_SESSION
// })

export const removeCurrentUser = () => ({
    type : UserActionTypes.REMOVE_CURRENT_USER
})

export const signUpStart = (userCredentials) => ({
    type : UserActionTypes.SIGN_UP_START,
    payload : userCredentials
})
export const signUpSuccess = ({user, additinalData}) => ({
    type : UserActionTypes.SIGN_UP_SUCCESS,
    payload : {user, additinalData}
})
export const signUpFailure = (error) => ({
    type : UserActionTypes.SIGN_UP_FAILURE,
    payload : error
})
