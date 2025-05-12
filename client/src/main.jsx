import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// Main Mapping
import App from './App.jsx'
// Redux
import { Provider } from 'react-redux'
import Store from './App/Store.js'
// Sass
import './main.scss'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={Store} >
      <App />
    </Provider>
  </StrictMode>,
)
