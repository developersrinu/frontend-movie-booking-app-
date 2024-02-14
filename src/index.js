import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import store from './redux-store/store';
import axios from 'axios';
axios.defaults.baseURL = 'https://filmbackend.vercel.app'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <BrowserRouter>
    <Provider store={store}>
    
        <React.StrictMode>
          <App />
        </React.StrictMode>
    
    </Provider>
  </BrowserRouter>

);


