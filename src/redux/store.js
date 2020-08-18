// Redux Imports
import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';

// Middleware Importa
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

// Reducer Import
import rootReducer from './root-reducer';

// Sagas Import
import { rootSaga } from './root-saga';

// Saga middleware
const sagaMiddleware = createSagaMiddleware();

// middlewares array is used to store all middlewsres to be used by store
const middlewares = [sagaMiddleware];

// Environment Setup
if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

// Sagas Run (takes on individual written sagas to be listened)
sagaMiddleware.run(rootSaga);

// Persisted version of the store
export const persistor = persistStore(store);
