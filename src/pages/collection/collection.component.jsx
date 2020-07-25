// React Import
import React from 'react';

// Styles Import
import './collection.styles.scss';

// Redux Imports
import { selectCollection } from '../../redux/shop/shop.selectors';
import { connect } from 'react-redux';

// Component Import
import CollectionItem from './../../components/collection-item/collection-item.component';


const CollectionPage = ({ collection }) => {
  const { title, items } = collection;
  return (
    <div className='collection-page'>
      <h2 className='title'>{title}</h2>
      <div className='items'>
        {
          items.map(item => (<CollectionItem key={item.id} item={item} />))
        }
      </div>
    </div>
  )
};

/**
 * Maps State to component Props
 * @param {storeObject} state
 * @param {any} componentProps Props Already passed on to the component
 */
const mapStateToProps = (state, componentProps) => ({
  collection: selectCollection(componentProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);
