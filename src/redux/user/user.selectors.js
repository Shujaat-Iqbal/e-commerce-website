// Selectors Import
import { createSelector } from 'reselect';

// Base Input Selector
const selectUser = state => state.user;

// Output Selectors
export const selectCurrentUser = createSelector(
  selectUser,
  user => user.currentUser
);
