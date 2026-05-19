import React from 'react'
import { Card } from './ui/Card'
import { Button } from './ui/Button'

const plans = [
  {
    name: 'Starter',
    price: '$0',
    description: 'Perfect for small businesses just getting started with AI.',
    features: [
      '1 AI Agent',
      '500 Conversations/mo',
      'Basic Post Reply',
      'Email Support',
    ],
    cta: 'Get Started Free',
    variant: 'secondary'
  },
  {
    name: 'Pro',
    price: '$49',
    description: 'Advanced features for growing businesses and power users.',
    features: [
      '3 AI Agents',
      '5,000 Conversations/mo',
      'Smart Inventory Sync',
      'AI Post Creation',
      'Priority Support',
    ],
    cta: 'Start 7-Day Free Trial',
    variant: 'primary',
    popular: true
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'Scalable solutions for large organizations with complex needs.',
    features: [
      'Unlimited AI Agents',
      'Unlimited Conversations',
      'Full API Access',
      'Dedicated Manager',
    ],
    cta: 'Contact Sales',
    variant: 'secondary'
  }
]

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-section-padding bg-surface-container-low">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="text-center mb-16">
          <h2 className="font-headline-xl text-headline-xl mb-4">Simple, Transparent Pricing</h2>
          <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto">Choose the plan that fits your business needs.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <Card 
              key={plan.name} 
              padding="p-8"
              className={`flex flex-col relative ${plan.popular ? 'border-primary ring-1 ring-primary' : ''}`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white px-4 py-1 rounded-full text-label-sm font-bold uppercase tracking-wider">
                  Most Popular
                </div>
              )}
              <div className="mb-8">
                <h3 className="font-headline-md text-headline-md mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-display-lg font-bold text-on-surface">{plan.price}</span>
                  {plan.price !== 'Custom' && <span className="text-body-md text-on-surface-variant">/mo</span>}
                </div>
                <p className="text-body-md text-on-surface-variant">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-body-md text-on-surface">
                    <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <Button 
                variant={plan.variant as any} 
                size="lg"
                className="w-full"
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
