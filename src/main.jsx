import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { HashRouter } from "react-router-dom";
import AppContextProvider from './components/AppContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <AppContextProvider>
    <HashRouter>
      <App  />
    </HashRouter>
  </AppContextProvider>
)
