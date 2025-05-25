import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { initialState, reducer } from './context/reducer'
import { ContextProvider } from './context'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ContextProvider initialState={initialState} reducer={reducer}>
        <App />
      </ContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
