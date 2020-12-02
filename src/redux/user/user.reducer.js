import UserActionTypes from './user.types';

const INITIAL_STATE = {
    currentUser: null,
    error : null
}

const userReducer = ( state = INITIAL_STATE, action ) => {
    switch (action.type) {
        case UserActionTypes.SIGN_IN_SUCCESS:
            return {
                ...state,
                currentUser: action.payload,
                error : null    
            }
        case UserActionTypes.SIGN_IN_FAILURE:
        case UserActionTypes.SIGN_UP_FAILURE:
            return {
                ...state,
                error : action.payload
            }
        case UserActionTypes.REMOVE_CURRENT_USER:
            return {
                ...state,
                currentUser: null
            }
        case UserActionTypes.CLEAR_ERROR:
            return{
                ...state,
                error: null
            }
        default :
            return state;
    }
}

export default userReducer;