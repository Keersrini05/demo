import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//importing app.jsx
import App from './App.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/*calling the app*/}
    <App />
  </StrictMode>,
)
