import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AboutMe from './AboutMe.jsx'
import React from 'react';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AboutMe/>
    <App />
  </StrictMode>,
)