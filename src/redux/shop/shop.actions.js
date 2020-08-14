// Action Types Import
import ShopActionTypes from './shop.types';

// Firebase Utils Import
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

export const fetchCollectionStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_START
});

export const fetchCollectionSuccess = collections => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collections
})

export const fetchCollectionFailure = errorMsg => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_FALIURE,
  payload: errorMsg
});

/**
 * A function using thunk which gives a function taking a dispatch
 * THUNK: thunk provides dispatch to th e functions passed not opjects
 */
export const fetchCollectionStartAsync = () => {
  return dispatch => {
    // Colllection reference for collections
    const collectionRef = firestore.collection('collections');

    // Thunk operations along with asynchronous requests
    dispatch(fetchCollectionStart());

    // Normalizing snapshot data
    collectionRef.get()
      .then(snapshot => {
        const collections = convertCollectionsSnapshotToMap(snapshot);
        dispatch(fetchCollectionSuccess(collections));
      })
      .catch(error => dispatch(fetchCollectionFailure(error.message)));
  }
}
