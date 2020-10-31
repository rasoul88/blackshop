import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config ={
    apiKey: "AIzaSyAN2E2rnt1sNAtXU02e7lcLs06tPc8bfeo",
    authDomain: "crwn-db-d6876.firebaseapp.com",
    databaseURL: "https://crwn-db-d6876.firebaseio.com",
    projectId: "crwn-db-d6876",
    storageBucket: "crwn-db-d6876.appspot.com",
    messagingSenderId: "345666336017",
    appId: "1:345666336017:web:97150ca67249692f7b88b0",
    measurementId: "G-D8YFB9EGFN"
  }

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    
    if(!snapShot.exists){     
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        });
      } catch (error){
        console.log('error creating user', error.message);
      }
    }
    return userRef;
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle= () => auth.signInWithPopup(provider); 

  export default firebase;