// Reselect Import
import { createSelector } from 'reselect';

// Input Selector
const selectShop = state => state.shop;

// Output Selector
export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);
