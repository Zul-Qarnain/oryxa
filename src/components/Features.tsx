import React from 'react'
import { Card } from './ui/Card'

const features = [
  {
    id: 1,
    icon: 'forum',
    title: 'AI Customer Conversations',
    description: 'Our AI doesn’t just chat—it sells. It qualifies leads, recommends products, and guides customers to checkout on Messenger, Instagram, and WhatsApp.',
    size: 'col-span-2',
    color: 'text-primary'
  },
  {
    id: 2,
    icon: 'bolt',
    title: 'Instant DM Replies',
    description: 'Never keep a customer waiting. Reply to every message and comment in under 1 second, 24/7.',
    size: 'col-span-1',
    color: 'text-emerald-400'
  },
  {
    id: 3,
    icon: 'shopping_cart',
    title: 'Smart Order Tracking',
    description: 'Automate order status updates and shipping inquiries without lifting a finger.',
    size: 'col-span-1',
    color: 'text-orange-400'
  },
  {
    id: 4,
    icon: 'hub',
    title: 'Multi-Platform Integration',
    description: 'Sync your products and orders across Facebook Shop, Instagram, WhatsApp Business, and Shopify in real-time.',
    size: 'col-span-2',
    color: 'text-accent'
  },
  {
    id: 5,
    icon: 'person_add',
    title: 'Sales Follow-Up',
    description: 'Automatically follow up with customers who showed interest but didn’t buy yet.',
    size: 'col-span-1',
    color: 'text-purple-400'
  },
  {
    id: 6,
    icon: 'support_agent',
    title: '24/7 AI Support',
    description: 'Handle customer complaints and FAQs automatically with an AI that knows your business inside out.',
    size: 'col-span-2',
    color: 'text-rose-400'
  }
]

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 md:py-32 relative">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8 text-center md:text-left">
          <div className="space-y-4">
            <h2 className="font-headline-xl text-3xl sm:text-4xl md:text-6xl font-bold text-white leading-tight">
              Everything You Need to <br /><span className="gradient-text">Scale Your Sales</span>
            </h2>
            <p className="text-body-lg text-on-surface-variant max-w-xl mx-auto md:mx-0 text-base sm:text-lg">
              A complete suite of AI-powered tools designed to handle every part of your social media business automatically.
            </p>
          </div>
          <div className="hidden md:block">
             <div className="flex -space-x-4 justify-center md:justify-end">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-12 h-12 rounded-full border-2 border-base-950 bg-base-900 flex items-center justify-center overflow-hidden">
                    <div className={`w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center`}>
                      <span className="material-symbols-outlined text-[18px] text-white/50">person</span>
                    </div>
                  </div>
                ))}
                <div className="w-12 h-12 rounded-full border-2 border-base-950 bg-primary flex items-center justify-center text-[12px] font-bold text-white z-10">
                  +2k
                </div>
             </div>
             <p className="text-[10px] uppercase tracking-widest text-on-surface-variant mt-3 text-center md:text-right">Trusted by Shop Owners</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature) => (
            <Card 
              key={feature.id} 
              padding="p-6 sm:p-8 md:p-10" 
              className={`${feature.size === 'col-span-2' ? 'md:col-span-2' : ''} flex flex-col justify-between group overflow-hidden relative`}
            >
              {/* Decorative light hit */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/10 rounded-full blur-[60px] group-hover:bg-primary/20 transition-all duration-500"></div>
              
              <div>
                <div className={`w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-8 border border-white/10 group-hover:border-white/20 transition-all ${feature.color}`}>
                  <span className="material-symbols-outlined text-2xl">{feature.icon}</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-on-surface-variant leading-relaxed mb-8">{feature.description}</p>
              </div>
              
              <div className="flex items-center gap-2 text-sm font-bold text-white/40 group-hover:text-primary transition-colors cursor-pointer">
                Explore Feature
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
