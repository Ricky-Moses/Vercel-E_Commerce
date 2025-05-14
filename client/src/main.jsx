import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './App/Store';
import App from './App';
import './main.scss'

// console.log('main.jsx - Store:', store);
// console.log('main.jsx - Persistor:', persistor);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
      <App />
  </Provider>
);