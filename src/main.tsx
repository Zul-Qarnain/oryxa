import React from 'react'
import { createRoot } from 'react-dom/client'
import { Root } from './routes/root'
import './styles/index.css'

const rootEl = document.getElementById('root')!
const root = createRoot(rootEl)

root.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
)
