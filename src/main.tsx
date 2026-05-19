import React from 'react'
import { createRoot } from 'react-dom/client'
import { Root } from './routes/root'
import { ErrorBoundary } from './components/ErrorBoundary'
import './styles/index.css'

console.log('Oryxa: Initializing Application...')

try {
  const rootEl = document.getElementById('root')
  if (!rootEl) {
    throw new Error('Failed to find the root element "#root"')
  }

  const root = createRoot(rootEl)
  root.render(
    <React.StrictMode>
      <ErrorBoundary fallback={<div className="min-h-screen bg-background flex items-center justify-center text-white">Something went wrong during startup.</div>}>
        <Root />
      </ErrorBoundary>
    </React.StrictMode>
  )
  console.log('Oryxa: Application Rendered Successfully')
} catch (error) {
  console.error('Oryxa: Startup Error:', error)
}
