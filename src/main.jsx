import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { AOSInit } from './components/Aos'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AOSInit />
    <App />
  </React.StrictMode>,
)
