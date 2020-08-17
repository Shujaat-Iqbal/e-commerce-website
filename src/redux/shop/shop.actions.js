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
