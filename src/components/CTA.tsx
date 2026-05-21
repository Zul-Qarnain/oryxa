import React from 'react'
import { Button } from './ui/Button'
import { useNavigate } from '@tanstack/react-router'

export const CTA: React.FC = () => {
  const navigate = useNavigate()

  return (
    <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-24 md:py-32">
      <div className="relative rounded-2xl sm:rounded-3xl md:rounded-[2.5rem] overflow-hidden bg-base-900 border border-white/5 group shadow-2xl">
        {/* Background Mesh */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/10 opacity-50 group-hover:scale-110 transition-transform duration-1000"></div>
        
        <div className="relative z-10 px-6 py-16 sm:px-12 sm:py-20 md:p-24 text-center max-w-4xl mx-auto space-y-8 md:space-y-12">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white leading-tight">
            Stop Losing Customers. <br /> <span className="gradient-text">Start Automating.</span>
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            Your customers are messaging right now. Let your AI agent handle them instantly while you focus on growing your brand.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center pt-4 md:pt-8">
            <Button size="lg" className="w-full sm:w-auto px-12 py-5 text-lg" onClick={() => navigate({ to: '/new-account' })}>Start Free Trial</Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto px-12 py-5 text-lg" onClick={() => navigate({ to: '/new-account' })}>Book a Demo</Button>
          </div>
          
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-4 sm:gap-10 opacity-40 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700">
             <div className="flex items-center gap-2 text-[10px] sm:text-sm font-bold text-white uppercase tracking-widest">
               <span className="material-symbols-outlined text-primary text-lg">credit_card_off</span> No Credit Card Required
             </div>
             <div className="flex items-center gap-2 text-[10px] sm:text-sm font-bold text-white uppercase tracking-widest">
               <span className="material-symbols-outlined text-primary text-lg">bolt</span> Instant Setup
             </div>
             <div className="flex items-center gap-2 text-[10px] sm:text-sm font-bold text-white uppercase tracking-widest">
               <span className="material-symbols-outlined text-primary text-lg">support_agent</span> 24/7 AI Sales
             </div>
          </div>
        </div>

        {/* Decorative corner glow */}
        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-accent/20 rounded-full blur-[80px]"></div>
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-primary/20 rounded-full blur-[80px]"></div>
      </div>
    </section>
  )
}
