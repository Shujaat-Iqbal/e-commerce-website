// React  Imports
import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

// Styles Import
import './App.css';

// Component Imports
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import AuthenticationPage from './pages/authentication/authentication.component';
import Checkout from './pages/checkout/checkout.component';

// Redux HOC import
import { connect } from 'react-redux';

// Redux Imports
import { checkUserSession } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';
import { createStructuredSelector } from 'reselect';

class App extends Component {

  unsubscribeAuth = null;

  componentDidMount() {
    const { checkUserSession } = this.props;
    checkUserSession();
  }

  componentWillUnmount() {
    this.unsubscribeAuth();
  }

  render() {
    return (
      <div>
        <Header />
        {/* Routing */}
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/checkout' component={Checkout} />
          <Route
            exact
            path='/signin'
            render={() =>
              this.props.currentUser
                ? (<Redirect to='/' />)
                : (<AuthenticationPage />) 
            }
          />
          <Route path='/shop' component={ShopPage} />
        </Switch>
      </div>
    );
  }
};

/**
 * maps required properties from state to our props which we can then use inside our component through connect
 * @param {storeObject} state
 */
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

/**
 * maps dispatch actions to component props
 * @param dispatch
 */
const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
