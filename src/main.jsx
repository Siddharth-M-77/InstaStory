import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import StoryContextProvider from './context/StoryContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StoryContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StoryContextProvider>
  </StrictMode>,
)
