// Saga Imports
import { all, call } from 'redux-saga/effects';
import { fetchCollectionsStart } from './shop/shop.sagas';
import { userSagas } from './user/user.sagas';

// Root Saga
export function* rootSaga() {
  yield all([
    call(fetchCollectionsStart),
    call(userSagas)
  ]);
}
