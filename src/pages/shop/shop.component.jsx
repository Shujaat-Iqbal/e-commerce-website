// React Imports
import React, { Component } from 'react';

// Constants Import
import shopData from './shop.data';

class ShopPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: shopData
    };
  }

  render() {
    return (
      <div>Shop Page</div>
    );
  }
};

export default ShopPage;
