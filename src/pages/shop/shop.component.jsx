// React Imports
import React, { Component } from 'react';
import { Route } from 'react-router-dom';

// Component Import
import CollectionOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';

// Firebase Utils Import
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

// Redux Imports
import { updateCollections } from '../../redux/shop/shop.actions';
import { connect } from 'react-redux';

// Custom HOC component Import
import withSpinner from '../../components/with-spinner/with-spinner.component';

// Wrapped components with spinner
const CollectionOverviewWithSpinnner = withSpinner(CollectionOverview);
const CollectionPageWithSpinnner = withSpinner(CollectionPage);

class ShopPage extends Component {

  // Component State
  state = {
    loading: true
  };

  // Used to unsubscribe from collection snapshot on component destroy to avoid memory leaks
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;

    // Colllection reference for collections
    const collectionRef = firestore.collection('collections');

    // Normalizing snapshot data
    collectionRef.onSnapshot(async snapshot => {
      const collections = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collections); // Updating Store
      this.setState({ loading: false });
    });
  }

  render() {
    const { match } = this.props;
    const { loading } = this.state;
    return (
      <div>
        <Route exact path={`${match.path}`} render={() => (<CollectionOverviewWithSpinnner isLoading={loading} />)} />
        {/* ':' provides us to pass text from that point as a parameter to the component it points to */}
        <Route path={`${match.path}/:collectionId`} render={(props) => (<CollectionPageWithSpinnner isLoading={loading} {...props} />)} />
      </div>
    );
  }
};

/**
 * maps dispatch actions to component props
 * @param dispatch
 */
const mapDispatchToProps = dispatch => ({
  updateCollections: collections => dispatch(updateCollections(collections))
});

export default connect(null, mapDispatchToProps)(ShopPage);
