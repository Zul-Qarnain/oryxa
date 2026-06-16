import React, { useState, useEffect } from 'react'
import { Link } from '@tanstack/react-router'
import { Button } from './ui/Button'

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'h-20 bg-base-950/90 backdrop-blur-xl border-b border-white/5' : 'h-24 bg-transparent'}`}>
      <div className="flex justify-between items-center max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop h-full">
        <Link to="/" className="flex items-center gap-3 group cursor-pointer">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:scale-110 transition-transform">
            <span className="text-white font-black text-lg">RR</span>
          </div>
          <span className="text-xl font-bold text-white tracking-tight hidden sm:block">RR Computers</span>
        </Link>
        
        <div className="hidden md:flex gap-10 items-center">
          {navItems.map((item) => (
            item.href.startsWith('/') ? (
              <Link
                key={item.label}
                to={item.href}
                className="text-sm font-medium text-on-surface-variant hover:text-white transition-colors relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary group-hover:w-full transition-all duration-300"></span>
              </Link>
            ) : (
              <a 
                key={item.label}
                className="text-sm font-medium text-on-surface-variant hover:text-white transition-colors relative group" 
                href={item.href}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary group-hover:w-full transition-all duration-300"></span>
              </a>
            )
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a href="tel:01881982949" className="hidden lg:flex items-center gap-2 text-sm text-on-surface-variant hover:text-white transition-colors">
            <span className="material-symbols-outlined text-base">call</span>
            01881-982949
          </a>
          <Link to="/contact" className="hidden sm:inline-flex">
            <Button size="md" className="px-8">Contact Sales</Button>
          </Link>
          
          <button 
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <div className={`w-6 h-[1.5px] bg-white transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <div className={`w-6 h-[1.5px] bg-white transition-all ${isOpen ? 'opacity-0' : ''}`} />
            <div className={`w-6 h-[1.5px] bg-white transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-base-950/95 backdrop-blur-xl border-b border-white/5 p-8 space-y-6 absolute top-full left-0 w-full shadow-2xl animate-fade-in max-h-[calc(100vh-100%)] overflow-y-auto">
          {navItems.map((item) => (
            item.href.startsWith('/') ? (
              <Link key={item.label} to={item.href} className="block text-xl font-bold text-white hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>
                {item.label}
              </Link>
            ) : (
              <a key={item.label} className="block text-xl font-bold text-white hover:text-primary transition-colors" href={item.href} onClick={() => setIsOpen(false)}>
                {item.label}
              </a>
            )
          ))}
          <div className="pt-4 border-t border-white/5 space-y-4">
            <a href="tel:01881982949" className="flex items-center gap-2 text-on-surface-variant">
              <span className="material-symbols-outlined text-base">call</span>
              01881-982949
            </a>
            <Link to="/contact">
              <Button size="lg" className="w-full" onClick={() => setIsOpen(false)}>Contact Sales</Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
