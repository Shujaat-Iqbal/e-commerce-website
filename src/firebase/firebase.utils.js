// FireBase Imports
import firebase from 'firebase/app';
// DB Import
import 'firebase/firestore';
// Auth Import
import 'firebase/auth'

const config = {
  // FirebaseKey
};

/**
 * Creates a user in firestore if it doesn't exist
 * @param userAuth
 * @param secondaryProperties
 * @returns {documentRef} Reference of current user
 */
export const createUserProfileDocument = async (userAuth, secondaryProperties) => {
  if (userAuth) {

    // firestore returns document reference object from which we can retrieve the snapshot object
    const userRef = firestore.doc(`users/${userAuth.uid}`);

    // from snapshot object we can determine whether or not there is any data in our object or not
    const snapShot = await userRef.get();

    if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
        userRef.set({
          displayName,
          email,
          createdAt,
          ...secondaryProperties
        });
      } catch (error) {
        console.error('error while creating user. ', error.message);
      }
    }

    return userRef;
  }
}

firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

// For Google Authentication
const provider = new firebase.auth.GoogleAuthProvider();
// Following will prompth the google popup whenever we use provider
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

// Full Library export
export default firebase;
