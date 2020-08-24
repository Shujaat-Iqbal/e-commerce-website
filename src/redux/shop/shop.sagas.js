// Sagas Imports
import { takeEvery, put, call, all } from 'redux-saga/effects';

// Firebase Utils Import
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

// Actions & action types Imports
import ShopActionTypes from './shop.types';
import { fetchCollectionFailure, fetchCollectionSuccess } from './shop.actions';

/**
 * Generator function to perforn asynchronous request for collection
 * and calling appropriate actions to update the store
 */
export function* fetchCollectionsAsync() {
  try {
    // Colllection reference for collections
    const collectionRef = firestore.collection('collections');

    // Normalizing snapshot data
    const snapShot = yield collectionRef.get();
    const collections = yield call(convertCollectionsSnapshotToMap, snapShot);

    yield put(fetchCollectionSuccess(collections));
  } catch (error) {
    yield put(fetchCollectionFailure(error.message));
  }
}

/**
 * Listener generator function that starts on fetching process for collections
 */
export function* fetchCollectionsStart() {
  // takeEvery Listens for actions
  yield takeEvery(
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}

export function* shopSaga() {
  yield all([
    call(fetchCollectionsStart)
  ]);
}
