// Saga Imports
import { all, call } from 'redux-saga/effects';
import { fetchCollectionsStart } from './shop/shop.sagas';

// Root Saga
export function* rootSaga() {
  yield all([call(fetchCollectionsStart)]);
}
