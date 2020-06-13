// React  Imports
import React from 'react';
import { Route } from 'react-router-dom';

// Styles Import
import './App.css';

import HomePage from './pages/homepage/homepage.component';


// TODO: Remove TestComp to create a separate component for item page
const TestComp = props => {
  return (
    <div>
      <button onClick={() => props.history.push('/')}> Go Back </button>
      <h1>HATS</h1>
    </div>
  );
}

function App() {
  return (
    <div>
      <Route exact path='/' component={HomePage} />
      {/* TODO: Remove TestComp and manage Routing accordingly after creating separate component */}
      <Route exact path='/shop/hats' component={TestComp} />
    </div>
  );
}

export default App;
