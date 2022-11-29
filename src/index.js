import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Provider} from 'react-redux'
import store from './redux/store'
import './index.css'

// axios.get(`https://cors-anywhere.herokuapp.com/https://www.api.com/`)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
  
);
