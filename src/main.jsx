/* eslint-disable react-refresh/only-export-components */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { useOktaAuth } from '@okta/okta-react'
import { ProgressProvider } from './context/ProgressContext'
import { BookProvider } from './context/BookContext'
import OktaSecurity from './components/auth/OktaSecurity'
import App from './App.jsx'
import './index.css'

function AppWithProgress() {
  const { authState } = useOktaAuth()
  const userId = authState?.idToken?.claims?.sub

  return (
    <BookProvider>
      <ProgressProvider key={userId} userId={userId}>
        <App />
      </ProgressProvider>
    </BookProvider>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <OktaSecurity>
        <AppWithProgress />
      </OktaSecurity>
    </BrowserRouter>
  </StrictMode>,
)
