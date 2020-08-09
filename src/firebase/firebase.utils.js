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

/**
 * Takes key and collection ojects or documents and add those in to DB
 * NOTE: TO BE USED ONCE
 * @param {string} collectionKey
 * @param {any} objectsToAdd
 * @returns {Promise}
 */
export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
}

/**
 * Transforms received collection data from array to hash tabble or json object as expected bby our current implementation
 * @param {any} collections
 * @returns {any} Updated object for collection
 */
export const convertCollectionsSnapshotToMap = collections => {

  // .docs exists on the snapshot object for collection containing all the documents in a collection
  const transformdCollection = collections.docs.map(doc => {
    const { title, items } = doc.data();

    // Forming data in required format
    return {
      routeName: encodeURI(title.toLowerCase()), // JS function to map strings according to URL format
      id: doc.id,
      title,
      items
    }
  });

  // Transforming array to object in order to achieve data normalization
  return transformdCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {} /* empty object as accumulative value */)
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
