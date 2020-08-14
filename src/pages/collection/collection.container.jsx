// Component Import
import CollectionPage from '../collection/collection.component';

// Redux Imports
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectIsCollectionLoaded } from '../../redux/shop/shop.selectors';
import { compose } from 'redux'; // lets us pass component wrappings by a function which then get evaluated from right to left

// Custom HOC component Import
import withSpinner from '../../components/with-spinner/with-spinner.component';

/**
 * maps required properties from state to our props which we can then use inside our component through connect
 * @param {storeObject} state
 */
const mapStateToProps = createStructuredSelector({
  isLoading: state => !selectIsCollectionLoaded(state)
});

const CollectionPageContainer = compose(
  connect(mapStateToProps),
  withSpinner
)(CollectionPage);

export default CollectionPageContainer;