import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
<<<<<<< HEAD
import { persistor, store } from './redux/store.js' 
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
=======
import { store } from './redux/store.js' 
import { Provider } from 'react-redux';
>>>>>>> 72cac592f780457b4ab8224889ad75c4c41ee0c5


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store = {store} >
<<<<<<< HEAD
    <PersistGate loading={null} persistor={persistor}>
    <App />
    </PersistGate> 
=======
    <App />
>>>>>>> 72cac592f780457b4ab8224889ad75c4c41ee0c5
  </Provider>,
)
