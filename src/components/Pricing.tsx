import React from 'react'
import { Card } from './ui/Card'
import { Button } from './ui/Button'
import { useNavigate } from '@tanstack/react-router'

const plans = [
  {
    name: 'Starter',
    price: '$0',
    description: 'Perfect for small shops starting with basic automation.',
    features: [
      '500 Conversations/mo',
      'Messenger & Instagram',
      'Basic AI Training',
      'Order Status FAQ',
      'Email Support',
    ],
    cta: 'Start Free',
    variant: 'glass'
  },
  {
    name: 'Pro',
    price: '$49',
    description: 'Advanced tools for growing businesses with high volume.',
    features: [
      '5,000 Conversations/mo',
      'WhatsApp Business API',
      'Smart Order Sync',
      'Custom AI Personality',
      'Sales Analytics',
      'Priority Support',
    ],
    cta: 'Start Pro Trial',
    variant: 'primary',
    popular: true
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'Custom AI workflows for large-scale social commerce.',
    features: [
      'Unlimited Conversations',
      'Custom CRM Integration',
      'Multi-Agent Workflow',
      'Dedicated Manager',
      'SLA & 99.9% Uptime',
      'Advanced AI Training',
    ],
    cta: 'Contact Sales',
    variant: 'glass'
  }
]

export const Pricing: React.FC = () => {
  const navigate = useNavigate()

  return (
    <section id="pricing" className="py-24 md:py-32 relative overflow-hidden">
       {/* Background glow */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -z-10"></div>

      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="text-center mb-16 md:mb-24 space-y-4">
          <h2 className="font-headline-xl text-3xl sm:text-4xl md:text-6xl font-bold text-white leading-tight">Simple, Transparent Pricing</h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto text-base sm:text-lg">Choose the plan that fits your business scale. Scale up as you grow with no hidden fees.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <Card 
              key={plan.name} 
              padding="p-6 sm:p-8 md:p-10"
              className={`flex flex-col relative group transition-all duration-500 ${plan.popular ? 'border-primary/50 bg-primary/[0.03] md:scale-105 z-10 shadow-glow-primary' : ''}`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white px-6 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] shadow-glow-primary">
                  Most Popular
                </div>
              )}
              
              <div className="mb-10">
                <h3 className="text-xl font-bold text-white/50 group-hover:text-white transition-colors mb-6 uppercase tracking-widest">{plan.name}</h3>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-5xl font-bold text-white">{plan.price}</span>
                  {plan.price !== 'Custom' && <span className="text-on-surface-variant font-mono text-sm">/mo</span>}
                </div>
                <p className="text-sm text-on-surface-variant leading-relaxed">{plan.description}</p>
              </div>

              <ul className="space-y-5 mb-12 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-4 text-sm text-on-surface-variant group-hover:text-white/80 transition-colors">
                    <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <Button 
                variant={plan.variant as any} 
                size="lg"
                className="w-full py-4 text-sm font-bold uppercase tracking-widest"
                onClick={plan.cta === 'Start Pro Trial' ? () => navigate({ to: '/new-account' }) : undefined}
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
