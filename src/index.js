// React Imports
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  // BrowserRouter provides all of the routing functionality provided by react-router-dom
  // to whatever component is wrapped inside it. In our case that's our app.
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
