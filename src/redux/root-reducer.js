// Root reducer is an object that represents whole state of our application

// Redux Imports
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage' // Local storage object on our window browser;

// Reducer Import
import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';

// Configs for persistence in state
const persistConfig = {
  key: 'root',
  storage, // local storage
  whiteList: ['cart'] // contains list of reducer to be added in storage
};

// Combined reducers
const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer
});

export default persistReducer(persistConfig, rootReducer);
