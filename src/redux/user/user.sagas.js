import { takeLatest, put, all, call } from "redux-saga/effects";

import UserActionTypes from "./user.types";
import { signInSuccess, signInFailure, signUpSuccess, signUpFailure } from "./user.actions";

import { auth, googleProvider, createUserProfileDocument } from "../../firebase/firebase.utils";

export function* getSnapshotFromUserAuth(userAuth, additinalData) {
    try{
        const userRef = yield call(createUserProfileDocument, userAuth, additinalData);
        const userSnapshot = yield userRef.get();
        yield put(signInSuccess({id: userSnapshot.id ,...userSnapshot.data()}));
    } catch (error) {
        yield put(signInFailure(error))
    }
}

export function* signInWithGoogle() {
    try {
        const {user} = yield auth.signInWithPopup(googleProvider);
        yield getSnapshotFromUserAuth(user)
    } catch (error) {
        yield put(signInFailure(error));
    }
}


export function* signInWithEmail({payload : { email, password }}) {
    try {
        const {user} = yield auth.signInWithEmailAndPassword(email, password);
        yield getSnapshotFromUserAuth(user)
    } catch (error) {
        yield put(signInFailure(error))
    }
}

export function* signUp ({payload : {email, password, displayName}}) {
    try {
        const { user } = yield auth.createUserWithEmailAndPassword(
          email,
          password
        );
        yield put(signUpSuccess({user, additinalData:{displayName}}))

    } catch(error) {
        yield put(signUpFailure(error))
    }
}

export function* signInAfterSignUp({payload :{user, additinalData}}) {
    yield getSnapshotFromUserAuth(user, additinalData);
}

export function* onGoogleSignInStart () {
    yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle)
}

export function* onEmailSignInStart () {
    yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail)
}


export function* onSignUpStart () {
    yield takeLatest(UserActionTypes.SIGN_UP_START, signUp)
}

export function* onSignUpSuccess () {
    yield takeLatest(UserActionTypes.SIGN_UP_SUCCESS, signInAfterSignUp)
}

export function* userSagas() {
   yield all([
       call(onGoogleSignInStart),
       call(onEmailSignInStart),
       call(onSignUpStart),
       call(onSignUpSuccess)
    ]);
}