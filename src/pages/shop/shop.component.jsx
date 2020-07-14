// React Imports
import React from 'react';

// Component Import
import CollectionPreview from '../../components/collection-preview/collection-preview.component';

// Redux Imports
import { createStructuredSelector } from 'reselect';
import { selectCollections } from '../../redux/shop/shop.selectors';
import { connect } from 'react-redux';

const ShopPage = ({ collections }) => (
  <div>
    {
      collections.map( ({id, ...collectionProps}) => <CollectionPreview key={id} {...collectionProps} />)
    }
  </div>
);

/**
 * maps required properties from state to our props which we can then use inside our component through connect
 * @param {storeObject} state
 */
const mapStateToProps = createStructuredSelector({
  collections: selectCollections
});

export default connect(mapStateToProps)(ShopPage);
