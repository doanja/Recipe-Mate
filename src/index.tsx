import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.min.css';
import './styles/reset.min.css';
import App from './App';

// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
