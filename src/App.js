// React  Imports
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Styles Import
import './App.css';

// Component Imports
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import AuthenticationPage from './pages/authentication/authentication.component';

function App() {
  return (
    <div>
      <Header />
      {/* Routing */}
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
        <Route exact path='/signin' component={AuthenticationPage} />
      </Switch>
    </div>
  );
}

export default App;
