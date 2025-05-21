import ReactDOM from 'react-dom/client';
// Redux
import { Provider } from 'react-redux';
import store from './App/Store';
// Context
import { MenuProvider } from './Hooks/useContext'
// Main Routing
import App from './App';
// Scss
import './main.scss'
// Slick & Carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <MenuProvider>
      <App />
    </MenuProvider>
  </Provider>
);