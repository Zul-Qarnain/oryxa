import React from 'react'
import { Card } from './ui/Card'

const services = [
  {
    id: 1,
    icon: 'dns',
    title: 'Dedicated Servers',
    description: 'High-performance dedicated server rental solutions with full root access, premium hardware, and enterprise-grade reliability for mission-critical workloads.',
    size: 'col-span-2',
    color: 'text-primary',
    gradient: 'from-primary/20 to-primary/5',
  },
  {
    id: 2,
    icon: 'cloud',
    title: 'VPS Hosting',
    description: 'Flexible and scalable virtual private servers with instant deployment and full customization.',
    size: 'col-span-1',
    color: 'text-accent',
    gradient: 'from-accent/20 to-accent/5',
  },
  {
    id: 3,
    icon: 'cloud_queue',
    title: 'Cloud Infrastructure',
    description: 'Reliable cloud computing resources that scale with your business demands in real-time.',
    size: 'col-span-1',
    color: 'text-green-400',
    gradient: 'from-green-400/20 to-green-400/5',
  },
  {
    id: 4,
    icon: 'settings_suggest',
    title: 'Managed Hosting',
    description: 'Fully managed server environments with proactive monitoring, security patching, performance optimization, and 24/7 expert support.',
    size: 'col-span-2',
    color: 'text-orange-400',
    gradient: 'from-orange-400/20 to-orange-400/5',
  },
  {
    id: 5,
    icon: 'architecture',
    title: 'IT Solutions',
    description: 'Infrastructure consulting, deployment, and ongoing management for complex technology environments.',
    size: 'col-span-1',
    color: 'text-purple-400',
    gradient: 'from-purple-400/20 to-purple-400/5',
  },
  {
    id: 6,
    icon: 'computer',
    title: 'Computer Sales',
    description: 'Business-grade computer hardware, workstations, and peripherals with expert setup and technical support for organizations of all sizes.',
    size: 'col-span-2',
    color: 'text-rose-400',
    gradient: 'from-rose-400/20 to-rose-400/5',
  },
]

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 md:py-32 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
      
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="text-center mb-16 md:mb-20 space-y-4">
          <p className="text-primary font-bold text-sm uppercase tracking-[0.2em]">What We Offer</p>
          <h2 className="font-headline-xl text-3xl sm:text-4xl md:text-6xl font-bold text-white leading-tight">
            Enterprise Solutions Built <br /><span className="gradient-text">For Scale</span>
          </h2>
          <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto text-base sm:text-lg">
            From dedicated servers to complete IT infrastructure, we provide the technology backbone your business needs to grow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => (
            <Card 
              key={service.id} 
              padding="p-6 sm:p-8 md:p-10" 
              className={`${service.size === 'col-span-2' ? 'md:col-span-2' : ''} flex flex-col justify-between group overflow-hidden relative`}
            >
              <div className={`absolute -top-32 -right-32 w-64 h-64 bg-gradient-to-br ${service.gradient} rounded-full blur-[80px] group-hover:opacity-150 transition-all duration-500 opacity-0`}></div>
              
              <div>
                <div className={`w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center mb-8 border border-white/10 group-hover:border-white/20 transition-all ${service.color}`}>
                  <span className="material-symbols-outlined text-2xl">{service.icon}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-on-surface-variant leading-relaxed mb-8">{service.description}</p>
              </div>
              
              <div className="flex items-center gap-2 text-sm font-bold text-white/40 group-hover:text-primary transition-colors cursor-pointer">
                Learn More
                <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
