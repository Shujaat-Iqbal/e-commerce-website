// React  Imports
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

// Styles Import
import './App.css';

// Component Imports
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import AuthenticationPage from './pages/authentication/authentication.component';

// Firease Utils Import
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends Component {

  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }

  unsubscribeAuth = null;

  componentDidMount() {
    this.unsubscribeAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        // Retrieving data from snapShot and assigning it to currentUser
        userRef.onSnapshot(userData => {
          this.setState({
            currentUser: {
              id: userData.id,
              ...userData.data()
            }
          });
        });
      } else {
        // Assigning null to currentUser in case of user being null
        // so our app is aware that there is no user
        this.setState({ currentUser: userAuth });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        {/* Routing */}
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/signin' component={AuthenticationPage} />
        </Switch>
      </div>
    );
  }
};

export default App;
