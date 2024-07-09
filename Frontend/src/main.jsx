import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { SidebarCollapseProvider } from "./Context/SidebarCollapseContext.jsx"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <SidebarCollapseProvider>
    <App />
    </SidebarCollapseProvider>
    </BrowserRouter>
    
  </React.StrictMode>,
)
