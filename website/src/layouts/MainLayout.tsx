import React from 'react'
import { Header, Footer } from '../components'
import { Outlet } from '@tanstack/react-router'

export const MainLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-on-background font-sans">
      <Header />
      <main className="pt-20">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
