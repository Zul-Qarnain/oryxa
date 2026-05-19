import React, { useState, useEffect } from 'react'
import { Button } from './ui/Button'
import logo from '../assets/brand/logo.png'

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'h-20 bg-base-950/80 backdrop-blur-xl border-b border-white/5' : 'h-24 bg-transparent'}`}>
      <div className="flex justify-between items-center max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop h-full">
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="w-12 h-12 flex items-center justify-center group-hover:scale-110 transition-transform overflow-hidden">
            <img src={logo} alt="Oryxa Logo" className="w-full h-full object-contain" />
          </div>
          <span className="text-2xl font-bold text-white tracking-tight">Oryxa</span>
        </div>
        
        <div className="hidden md:flex gap-10 items-center">
          {['Features', 'How It Works', 'Pricing', 'Docs'].map((item) => (
            <a 
              key={item}
              className="text-sm font-medium text-on-surface-variant hover:text-white transition-colors relative group" 
              href={`#${item.toLowerCase().replace(/ /g, '-') === 'how-it-works' ? 'intelligence' : item.toLowerCase()}`}
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </div>

        <div className="flex items-center gap-6">
          <button className="hidden sm:block text-sm font-bold text-on-surface-variant hover:text-white transition-colors">Login</button>
          <Button size="md" className="hidden sm:flex px-8">Get Started</Button>
          
          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className={`w-6 h-[1.5px] bg-white transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <div className={`w-6 h-[1.5px] bg-white transition-all ${isOpen ? 'opacity-0' : ''}`} />
            <div className={`w-6 h-[1.5px] bg-white transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-base-950 border-b border-white/5 p-8 space-y-8 absolute top-full left-0 w-full shadow-2xl animate-fade-in max-h-[calc(100vh-100%)] overflow-y-auto backdrop-blur-xl">
          {['Features', 'How It Works', 'Pricing', 'Docs'].map((item) => (
             <a key={item} className="block text-xl font-bold text-white hover:text-primary transition-colors" href={`#${item.toLowerCase().replace(/ /g, '-') === 'how-it-works' ? 'intelligence' : item.toLowerCase()}`} onClick={() => setIsOpen(false)}>{item}</a>
          ))}
          <div className="pt-4 border-t border-white/5">
            <Button size="lg" className="w-full">Get Started</Button>
          </div>
        </div>
      )}
    </nav>
  )
}
