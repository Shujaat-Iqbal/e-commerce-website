// Root reducer is an object that represents whole state of our application

// Redux Import
import { combineReducers } from 'redux';

// Reducer Import
import userReducer from './user/user.reducer';

// Combined reducers
export default combineReducers({
  user: userReducer
});
