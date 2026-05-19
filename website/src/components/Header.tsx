import React, { useState } from 'react'
import { Button } from './ui/Button'

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-md border-b border-outline-variant/30 h-20">
      <div className="flex justify-between items-center max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop h-full">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary-container rounded-lg flex items-center justify-center text-on-primary-container">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>smart_toy</span>
          </div>
          <span className="font-headline-md text-headline-md font-bold text-on-surface">Agentic</span>
        </div>
        
        <div className="hidden md:flex gap-8 items-center">
          <a className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors" href="#features">Features</a>
          <a className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors" href="#how-it-works">How It Works</a>
          <a className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors" href="#pricing">Pricing</a>
          <a className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors" href="#">Use Cases</a>
          <a className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors" href="#">Docs</a>
          <a className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors" href="#">Blog</a>
        </div>

        <div className="flex items-center gap-4">
          <button className="hidden sm:block font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors">Log in</button>
          <Button size="md" className="hidden sm:flex">Get Started Free</Button>
          
          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className={`w-6 h-0.5 bg-primary transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <div className={`w-6 h-0.5 bg-primary transition-all ${isOpen ? 'opacity-0' : ''}`} />
            <div className={`w-6 h-0.5 bg-primary transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-surface border-b border-outline-variant/30 p-4 space-y-4 absolute w-full left-0 shadow-lg">
          <a className="block font-label-md text-label-md text-on-surface-variant" href="#features" onClick={() => setIsOpen(false)}>Features</a>
          <a className="block font-label-md text-label-md text-on-surface-variant" href="#how-it-works" onClick={() => setIsOpen(false)}>How It Works</a>
          <a className="block font-label-md text-label-md text-on-surface-variant" href="#pricing" onClick={() => setIsOpen(false)}>Pricing</a>
          <Button size="md" className="w-full">Get Started Free</Button>
        </div>
      )}
    </nav>
  )
}
