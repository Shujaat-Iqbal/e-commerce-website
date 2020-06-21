// Redux Import
import { createStore, applyMiddleware } from 'redux';

// Logger Import
import logger from 'redux-logger';

// Reducer Import
import rootReducer from './root-reducer';

// middlewares array is used to store all middlewsres to be used by store
const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
