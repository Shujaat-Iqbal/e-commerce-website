// React Import
import React from 'react';

// Styles Import
import './collections.overview.styles.scss';

// Component Import
import CollectionPreview from '../../components/collection-preview/collection-preview.component';

// Redux Imports
import { createStructuredSelector } from 'reselect';
import { selectCollections } from '../../redux/shop/shop.selectors';
import { connect } from 'react-redux';

const CollectionOverview = ({ collections }) => (
  <div className='collections-overview'>
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

export default connect(mapStateToProps)(CollectionOverview);
