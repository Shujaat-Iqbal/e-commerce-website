// React Import
import React from 'react';

// Styles Import
import './collection-item.styles.scss';

// Component Import
import CustomButton from '../custom-button/custom-button.component';

// Actions Import
import { addItem } from '../../redux/cart/cart.actions';

// Redux Import
import { connect } from 'react-redux';

const CollectionItem = ({item, addItem}) => {
  const { name, price, imageUrl } = item;
  return (
    <div className='collection-item'>
      <div
        className='image'
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>

      <CustomButton
        inverted
        onClick={() => addItem(item)}
      >
        Add to Cart
      </CustomButton>
    </div>
  );
};

/**
 * maps Dispatch actions to component props
 * @param dispatch
 */
const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);
