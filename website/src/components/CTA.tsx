import React from 'react'
import { Button } from './ui/Button'

export const CTA: React.FC = () => {
  return (
    <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-section-padding">
      <div className="bg-primary-container rounded-3xl p-12 md:p-20 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Abstract Patterns */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/10 to-transparent"></div>
        <div className="relative z-10 space-y-8 max-w-2xl text-on-primary-container">
          <h2 className="font-headline-xl text-headline-xl">Ready to 10x Your Conversations?</h2>
          <p className="font-body-lg text-body-lg opacity-90">Get started for free and launch your first AI agent today. Experience the power of 24/7 automation.</p>
          <div className="flex flex-wrap gap-6 text-on-primary-container/80">
            <div className="flex items-center gap-2 font-label-md text-label-md">
              <span className="material-symbols-outlined">verified</span> Free 7-day trial
            </div>
            <div className="flex items-center gap-2 font-label-md text-label-md">
              <span className="material-symbols-outlined">credit_card_off</span> No credit card required
            </div>
            <div className="flex items-center gap-2 font-label-md text-label-md">
              <span className="material-symbols-outlined">timer</span> Setup in under 10 minutes
            </div>
          </div>
          <div className="flex flex-wrap gap-4 pt-4">
            <Button variant="secondary" size="lg" className="bg-white text-primary border-0 hover:bg-surface-variant gap-2">
              Get Started Free
              <span className="material-symbols-outlined">arrow_forward</span>
            </Button>
            <Button variant="outline" size="lg" className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 gap-2">
              <span className="material-symbols-outlined">calendar_today</span>
              Book a Demo
            </Button>
          </div>
        </div>
        <div className="relative z-10 w-full md:w-80 h-80 flex items-center justify-center">
          <div className="w-64 h-64 bg-white/20 rounded-full flex items-center justify-center animate-bounce">
            <div className="w-48 h-48 bg-white/40 rounded-full flex items-center justify-center">
              <span className="material-symbols-outlined text-white text-8xl" style={{ fontVariationSettings: "'FILL' 1" }}>smart_toy</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
