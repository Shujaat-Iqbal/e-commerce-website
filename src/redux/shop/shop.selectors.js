// Reselect Import
import { createSelector } from 'reselect';


// Input Selector
const selectShop = state => state.shop;

// Output Selector
export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  collections => collections ? Object.keys(collections).map((key) => collections[key]) : []
);

// Concept displayed here is Currying i.e. instead of taking multiple parameters take one at a time
// And the later parameter has access to the previous ones because of closures
export const selectCollection = collectionUrlParam => createSelector(
  [selectCollections],
  collections => collections ? collections[collectionUrlParam] : null
)
