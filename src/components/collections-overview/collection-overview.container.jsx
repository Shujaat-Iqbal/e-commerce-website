// Component Import
import CollectionOverview from '../../components/collections-overview/collections-overview.component';

// Redux Imports
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectIsCollectionFetching } from '../../redux/shop/shop.selectors';
import { compose } from 'redux'; // lets us pass component wrappings by a function which then get evaluated from right to left

// Custom HOC component Import
import withSpinner from '../../components/with-spinner/with-spinner.component';

/**
 * maps required properties from state to our props which we can then use inside our component through connect
 * @param {storeObject} state
 */
const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching
});

const CollectionOverviewContainer = compose(
  connect(mapStateToProps),
  withSpinner
)(CollectionOverview);

export default CollectionOverviewContainer;
