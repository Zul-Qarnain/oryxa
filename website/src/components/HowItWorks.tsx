import React from 'react'
import { Card } from './ui/Card'

const steps = [
  {
    id: 1,
    icon: 'link',
    title: '1. Connect',
    description: 'Connect your Facebook Page & Messenger in minutes. No coding needed.',
  },
  {
    id: 2,
    icon: 'settings',
    title: '2. Configure',
    description: 'Choose your agent type and set your business goals. No coding needed.',
  },
  {
    id: 3,
    icon: 'bolt',
    title: '3. Automate',
    description: 'Your AI agent starts chatting, selling & creating instantly.',
  },
  {
    id: 4,
    icon: 'trending_up',
    title: '4. Grow',
    description: 'Save time, close more deals, and grow your business exponentially.',
  },
]

export const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-section-padding">
      <h2 className="font-headline-xl text-headline-xl text-center mb-24">How It Works</h2>
      <div className="relative grid md:grid-cols-4 gap-12">
        {/* Connectors (Desktop only) */}
        <div className="hidden md:block absolute top-12 left-[12.5%] right-[12.5%] h-0.5 border-t-2 border-dashed border-outline-variant/30"></div>
        
        {steps.map((step) => (
          <div key={step.id} className="relative flex flex-col items-center text-center">
            <div className="w-24 h-24 bg-white rounded-full border-2 border-primary/20 flex items-center justify-center mb-8 relative z-10 shadow-lg">
              <span className="material-symbols-outlined text-primary text-4xl">{step.icon}</span>
            </div>
            <h4 className="font-headline-md text-headline-md mb-2">{step.title}</h4>
            <p className="text-on-surface-variant font-body-md text-body-md">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
