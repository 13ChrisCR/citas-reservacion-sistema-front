import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { FooterHome, HeaderHome, MainHome } from './App'
import './App.css'
import './index.css'
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  
  <React.Fragment>
    
    <header>
      <HeaderHome />
    </header>
    <main>
      <MainHome />
    </main>
    <footer>
      <FooterHome />
    </footer>
  </React.Fragment>
)

