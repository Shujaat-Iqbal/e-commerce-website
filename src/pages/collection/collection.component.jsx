// React Import
import React from 'react';

// Styles Import
import './collection.styles.scss';

// Redux Imports
import { selectCollection } from '../../redux/shop/shop.selectors';
import { connect } from 'react-redux';

// TODO: Add functionality to the component
const CollectionPage = ({ collection }) => (
  <div className='collection-page'>
    <h2>Collection Page</h2>
  </div>
);

/**
 * Maps State to component Props
 * @param {storeObject} state
 * @param {any} componentProps Props Already passed on to the component
 */
const mapStateToProps = (state, componentProps) => ({
  collection: selectCollection(componentProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);
