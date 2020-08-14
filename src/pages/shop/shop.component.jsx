// React Imports
import React, { Component } from 'react';
import { Route } from 'react-router-dom';

// Redux Imports
import { fetchCollectionStartAsync } from '../../redux/shop/shop.actions';
import { connect } from 'react-redux';

// Container component Imports
import CollectionOverviewContainer from '../../components/collections-overview/collection-overview.container';
import CollectionPageContainer from '../collection/collection.container';

class ShopPage extends Component {
  componentDidMount() {
    const { fetchCollectionStartAsync } = this.props;
    fetchCollectionStartAsync(); // fetching collections using thunk
  }

  render() {
    const { match } = this.props;
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
  }
};

/**
 * maps dispatch actions to component props
 * @param dispatch
 */
const mapDispatchToProps = dispatch => ({
  fetchCollectionStartAsync: () => dispatch(fetchCollectionStartAsync())
});

export default connect(null, mapDispatchToProps)(ShopPage);
