import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './index.css'
import {ProductsContextProvider} from './context/ProductsContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <BrowserRouter>
          <ProductsContextProvider>
            <App />
          </ProductsContextProvider>
        </BrowserRouter>
  </React.StrictMode>
)
