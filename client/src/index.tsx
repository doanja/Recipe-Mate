import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// redux
import { Provider } from 'react-redux';
import store from './redux/store';

// styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/main.min.css';
import './styles/reset.min.css';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
