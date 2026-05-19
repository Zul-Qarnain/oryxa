import React from 'react'
import { Card } from './ui/Card'
import { Button } from './ui/Button'

const plans = [
  {
    name: 'Starter Node',
    price: '$0',
    description: 'Perfect for small operations initializing their AI presence.',
    features: [
      '1 Neural Agent',
      '500 Logic Cycles/mo',
      'Standard Post Reply',
      'Email Support Link',
    ],
    cta: 'Initialize Node',
    variant: 'glass'
  },
  {
    name: 'Pro Network',
    price: '$49',
    description: 'Advanced features for scaling high-frequency automation.',
    features: [
      '3 Neural Agents',
      '5,000 Logic Cycles/mo',
      'Smart Catalog Sync',
      'Neural Post Creation',
      'Priority Priority Sync',
    ],
    cta: 'Start Evolution',
    variant: 'primary',
    popular: true
  },
  {
    name: 'Enterprise Mesh',
    price: 'Custom',
    description: 'Global-scale infrastructure for massive distributed intelligence.',
    features: [
      'Unlimited Agents',
      'Unlimited Cycles',
      'Full Neural API Access',
      'Dedicated Architect',
      'SLA Guaranteed Latency',
    ],
    cta: 'Contact Architect',
    variant: 'glass'
  }
]

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-32 relative overflow-hidden">
       {/* Background glow */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -z-10"></div>

      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="text-center mb-24 space-y-4">
          <h2 className="font-headline-xl text-4xl md:text-6xl font-bold text-white leading-tight">Investment Tiers</h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto">Choose the processing power that matches your operational scale.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <Card 
              key={plan.name} 
              padding="p-10"
              className={`flex flex-col relative group transition-all duration-500 ${plan.popular ? 'border-primary/50 bg-primary/[0.03] scale-105 z-10 shadow-glow-primary' : ''}`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white px-6 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] shadow-glow-primary">
                  Recommended Node
                </div>
              )}
              
              <div className="mb-10">
                <h3 className="text-xl font-bold text-white/50 group-hover:text-white transition-colors mb-6 uppercase tracking-widest">{plan.name}</h3>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-5xl font-bold text-white">{plan.price}</span>
                  {plan.price !== 'Custom' && <span className="text-on-surface-variant font-mono text-sm">/cycle</span>}
                </div>
                <p className="text-sm text-on-surface-variant leading-relaxed">{plan.description}</p>
              </div>

              <ul className="space-y-5 mb-12 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-4 text-sm text-on-surface-variant group-hover:text-white/80 transition-colors">
                    <span className="material-symbols-outlined text-primary text-lg">memory</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <Button 
                variant={plan.variant as any} 
                size="lg"
                className="w-full py-4 text-sm font-bold uppercase tracking-widest"
              >
                {plan.cta}
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
