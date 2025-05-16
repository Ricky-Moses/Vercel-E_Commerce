import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './App/Store';
import { MenuProvider } from './Hooks/useContext'
import App from './App';
import './main.scss'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <MenuProvider>
      <App />
    </MenuProvider>
  </Provider>
);