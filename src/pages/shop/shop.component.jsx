// React Imports
import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';

// Redux Imports
import { fetchCollectionStart } from '../../redux/shop/shop.actions';
import { connect } from 'react-redux';

// Container component Imports
import CollectionOverviewContainer from '../../components/collections-overview/collection-overview.container';
import CollectionPageContainer from '../collection/collection.container';

const ShopPage = ({ fetchCollectionStart, match }) => {

  // React Hooks
  useEffect(() => {
    fetchCollectionStart(); // fetching collections using sagas
  }, [fetchCollectionStart]);

  // Component JSX code
  return (
    <div>
      <Route
        exact
        path={`${match.path}`}
        component={CollectionOverviewContainer}
      />
      {/* ':' provides us to pass text from that point as a parameter to the component it points to */}
      <Route
        path={`${match.path}/:collectionId`}
        component={CollectionPageContainer}
      />
    </div>
  );
};

/**
 * maps dispatch actions to component props
 * @param dispatch
 */
const mapDispatchToProps = dispatch => ({
  fetchCollectionStart: () => dispatch(fetchCollectionStart())
});

export default connect(null, mapDispatchToProps)(ShopPage);
