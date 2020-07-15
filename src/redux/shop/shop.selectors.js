// Reselect Import
import { createSelector } from 'reselect';

const COLLECTIO_ID_MAP = {
  hats: 1,
  sneakers: 2,
  jackets: 3,
  womens: 4,
  mens: 5
};


// Input Selector
const selectShop = state => state.shop;

// Output Selector
export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

// Concept displayed here is Currying i.e. instead of taking multiple parameters take one at a time
// And the later parameter has access to the previous ones because of closures
export const selectCollection = collectionUrlParam => createSelector(
  [selectCollections],
  collections => collections.find(collection => collection.id === COLLECTIO_ID_MAP[collectionUrlParam])
)
