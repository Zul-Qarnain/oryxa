import React from 'react'
import { Card } from './ui/Card'

const features = [
  {
    id: 1,
    icon: 'chat_bubble',
    title: 'Automate Sales Conversations',
    description: 'Engage leads, answer questions, recommend products, and close sales—automatically.',
    highlights: ['Lead qualification', 'Product recommendations', 'Seamless checkout & handoff'],
    color: 'bg-primary/10 text-primary'
  },
  {
    id: 2,
    icon: 'quickreply',
    title: 'Smart Post Reply',
    description: 'Instant, accurate replies to comments and messages to build trust and boost engagement.',
    highlights: ['Comment auto-reply', 'DM auto-response', 'Context-aware conversations'],
    color: 'bg-emerald-100 text-emerald-600'
  },
  {
    id: 3,
    icon: 'auto_awesome',
    title: 'AI Post Creation',
    description: 'Create high-converting, on-brand posts in seconds with our smart AI content engine.',
    highlights: ['Captions that convert', 'Hashtag & emoji suggestions', 'Auto post scheduling'],
    color: 'bg-orange-100 text-orange-600'
  },
  {
    id: 4,
    icon: 'inventory_2',
    title: 'Smart Inventory Management',
    description: 'Sync your product catalog and let AI manage stock updates in real-time during chats.',
    highlights: ['Real-time catalog sync', 'AI handles stock queries', 'Auto-stock alerts'],
    color: 'bg-blue-100 text-blue-600'
  },
  {
    id: 5,
    icon: 'receipt_long',
    title: 'Automated Order Processing',
    description: 'From initial query to final payment link, your AI agent handles the entire sales funnel.',
    highlights: ['Order flow automation', 'Payment link generation', 'Status tracking'],
    color: 'bg-purple-100 text-purple-600'
  },
  {
    id: 6,
    icon: 'support_agent',
    title: 'AI Customer Support',
    description: 'Resolve up to 80% of support tickets without human intervention, 24/7/365.',
    highlights: ['Ticket resolution', 'Escalate when needed', 'Knowledge base sync'],
    color: 'bg-rose-100 text-rose-600'
  },
]

export const Features: React.FC = () => {
  return (
    <section id="features" className="bg-surface-container-lowest py-section-padding">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-headline-xl text-headline-xl">Everything You Need to <span className="text-primary">Grow with AI</span></h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            Our agents help you automate conversations, close more sales, and create engaging posts that drive results across all social channels.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-gutter">
          {features.map((feature) => (
            <Card key={feature.id} padding="p-8" className="hover:-translate-y-1 transition-all">
              <div className={`w-14 h-14 ${feature.color} rounded-2xl flex items-center justify-center mb-6`}>
                <span className="material-symbols-outlined text-3xl">{feature.icon}</span>
              </div>
              <h3 className="font-headline-md text-headline-md mb-3">{feature.title}</h3>
              <p className="text-on-surface-variant mb-6">{feature.description}</p>
              <ul className="space-y-3">
                {feature.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-label-md">
                    <span className="material-symbols-outlined text-primary text-lg">check</span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
