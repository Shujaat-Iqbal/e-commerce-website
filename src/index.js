// React Imports
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

// Styles Import
import './index.css';

// App Component
import App from './App';

// Store Import
import store from './redux/store';

ReactDOM.render(
  // Provider gives access to eveything related to the store to the whole app.
  <Provider store={store}>
    {/* 
      BrowserRouter provides all of the routing functionality provided by react-router-dom
      to whatever component is wrapped inside it. In our case that's our app.
    */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
