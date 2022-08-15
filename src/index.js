import {Provider} from 'react-redux'
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { ThemeProvider } from './context';
import './App.css';
import { UserProvider } from './context/userContext';

import { persistor, store } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
const root =ReactDOM.createRoot(document.getElementById('root'));


root.render(

  <Provider store={store}>
  <PersistGate loading={null} persistor={persistor}>
<BrowserRouter> 
<ThemeProvider>
  <App/>
  </ThemeProvider>
  </BrowserRouter>
</PersistGate>
</Provider>

)