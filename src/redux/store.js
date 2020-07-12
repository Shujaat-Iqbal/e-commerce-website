// Redux Imports
import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';

// Logger Import
import logger from 'redux-logger';

// Reducer Import
import rootReducer from './root-reducer';

// middlewares array is used to store all middlewsres to be used by store
const middlewares = [logger];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

// Persisted version of the store
export const persistor = persistStore(store);
