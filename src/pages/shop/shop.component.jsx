// React Imports
import React, { Component } from 'react';
import { Route } from 'react-router-dom';

// Component Import
import CollectionOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';

// Redux Imports
import { fetchCollectionStartAsync } from '../../redux/shop/shop.actions';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectIsCollectionFetching, selectIsCollectionLoaded } from '../../redux/shop/shop.selectors';

// Custom HOC component Import
import withSpinner from '../../components/with-spinner/with-spinner.component';

// Wrapped components with spinner
const CollectionOverviewWithSpinnner = withSpinner(CollectionOverview);
const CollectionPageWithSpinnner = withSpinner(CollectionPage);

class ShopPage extends Component {
  componentDidMount() {
    const { fetchCollectionStartAsync } = this.props;
    fetchCollectionStartAsync(); // fetching collections using thunk
  }

  render() {
    const { match, isCollectionFetching, isCollectionLoaded } = this.props;
    return (
      <div>
        <Route
          exact
          path={`${match.path}`}
          render={() => (
            <CollectionOverviewWithSpinnner
              isLoading={isCollectionFetching}
            />
          )}
        />
        {/* ':' provides us to pass text from that point as a parameter to the component it points to */}
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionPageWithSpinnner
              isLoading={!isCollectionLoaded}
              {...props}
            />
          )}
        />
      </div>
    );
  }
};

/**
 * maps required properties from state to our props which we can then use inside our component through connect
 * @param {storeObject} state
 */
const mapStateToProps = createStructuredSelector({
  isCollectionFetching: selectIsCollectionFetching,
  isCollectionLoaded: selectIsCollectionLoaded
});

/**
 * maps dispatch actions to component props
 * @param dispatch
 */
const mapDispatchToProps = dispatch => ({
  fetchCollectionStartAsync: () => dispatch(fetchCollectionStartAsync())
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
