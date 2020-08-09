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

class ShopPage extends Component {

  // Used to unsubscribe from collection snapshot on component destroy to avoid memory leaks
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;

    // Colllection reference for collections
    const collectionRef = firestore.collection('collections');

    collectionRef.onSnapshot(async snapshot => {
      const collections = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collections); // Updating Store
    });
  }

  render() {
    const { match } = this.props;
    return (
      <div>
        <Route exact path={`${match.path}`} component={CollectionOverview} />
        {/* ':' provides us to pass text from that point as a parameter to the component it points to */}
        <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
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
