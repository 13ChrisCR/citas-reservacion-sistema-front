import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.jsx'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  
  <React.Fragment>
    <h1>Hoal</h1>
    <App/>
  </React.Fragment>
)

