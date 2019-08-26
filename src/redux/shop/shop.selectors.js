import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
);

export const selectCollectionsForPreview = createSelector (
  [selectCollections],
  collections => Object.keys(collections).map(key => collections[key])
);

export const selectCollection = collectionUrlParam =>
  createSelector(
    [selectCollections],
    collections => {
      // for some reason collections is an object acting like an array and not recognizing the top level property names
      var correctedId = { hats: 0, sneakers: 1, jackets: 2, womens: 3, mens: 4 }[collectionUrlParam];
      return collections[correctedId];
    }
  );
