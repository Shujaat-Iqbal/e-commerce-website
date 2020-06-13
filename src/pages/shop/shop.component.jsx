// React Imports
import React, { Component } from 'react';

// Constants Import
import shopData from './shop.data';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';

class ShopPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: shopData
    };
  }

  render() {
    // State de-structuring
    const {collections} = this.state

    // JSX return
    return (
      <div>
        {
          collections.map( ({id, ...collectionProps}) => <CollectionPreview key={id} {...collectionProps} />)
        }
      </div>
    );
  }
};

export default ShopPage;
