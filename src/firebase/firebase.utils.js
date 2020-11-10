import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config ={
  apiKey: "AIzaSyBAb2KjMKNHgNu7_2tl_IrEVBgarsaMDso",
  authDomain: "blackshop-86f70.firebaseapp.com",
  databaseURL: "https://blackshop-86f70.firebaseio.com",
  projectId: "blackshop-86f70",
  storageBucket: "blackshop-86f70.appspot.com",
  messagingSenderId: "9828841261",
  appId: "1:9828841261:web:af40ba60eef4fd9f1b85a4"
};

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

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map(doc => {
    const {title, items} = doc.data();
    return {
      routeName: encodeURI(title.toLowerCase()),
      id:doc.id,
      items,
      title
    };
  })

  //convert array collection to an object collection
  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  },{});
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle= () => auth.signInWithPopup(provider); 

export default firebase;