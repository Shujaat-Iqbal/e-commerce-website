// Sagas Imports
import { takeLatest, put, call, all } from 'redux-saga/effects';

// Actions & its Types Import 
import userActionTypes from "./user.types";
import {
  signInSuccess,
  signInFailure,
  signOutFailure,
  signOutSuccess,
  signUpFailure,
  signUpSuccess
} from './user.actions';

// firebase Utils Import
import {
  auth,
  googleProvider,
  createUserProfileDocument,
  getCurrentUser
} from '../../firebase/firebase.utils';

// Utility Generator Function
export function* saveUserAuth(user, additionalData) {
  try {
    const userRef = yield call(createUserProfileDocument, user, additionalData);
    const userSnapshot = yield userRef.get();

    yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (error) {
    yield put(signInFailure(error.message));
  }
}

// Start action Generator functions
export function* signInWithGoogle() {
  try {
    // Colllection reference for user
    const { user } = yield auth.signInWithPopup(googleProvider);
    yield saveUserAuth(user);
  } catch (error) {
    yield put(signInFailure(error.message));
  }
}

export function* signInWithEmail({ payload: { email, password } }) {
  try {
    // Colllection reference for user
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield saveUserAuth(user);
  } catch (error) {
    yield put(signInFailure(error.message));
  }
}

export function* isUserActive() {
  try {
    // Colllection reference for user
    const userAuth = yield getCurrentUser();
    if (!userAuth) return;
    yield saveUserAuth(userAuth);
  } catch (error) {
    yield put(signInFailure(error.message));
  }
}

export function* signOut() {
  try {
    yield auth.signOut();

    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFailure(error.message));
  }
}

export function* signUp({ payload: { email, password, displayName } }) {
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);
    yield put(signUpSuccess({ user, additionalData: { displayName } }));
  } catch (error) {
    yield put(signUpFailure(error.message));
  }
}

export function* signInAfterSignUp({ payload: { user, additionalData } }) {
  yield saveUserAuth(user, additionalData);
}

// Listener Generator functions
export function* onGoogleSignInStart() {
  yield takeLatest(
    userActionTypes.GOOGLE_SIGN_IN_START,
    signInWithGoogle
  );
}

export function* onEmailSignInStart() {
  yield takeLatest(
    userActionTypes.EMAIL_SIGN_IN_START,
    signInWithEmail
  );
}

export function* onCheckUserSession() {
  yield takeLatest(
    userActionTypes.CHECK_USER_SESSION,
    isUserActive
  );
}

export function* onSignOutStart() {
  yield takeLatest(
    userActionTypes.SIGN_OUT_START,
    signOut
  )
}

export function* onSignUpStart() {
  yield takeLatest(
    userActionTypes.SIGN_UP_START,
    signUp
  )
}

export function* onSignUpSuccess() {
  yield takeLatest(
    userActionTypes.SIGN_UP_SUCCESS,
    signInAfterSignUp
  )
}

// User Saga
export function* userSagas() {
  yield all([
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onCheckUserSession),
    call(onSignOutStart),
    call(onSignUpStart),
    call(onSignUpSuccess)
  ]);
}
