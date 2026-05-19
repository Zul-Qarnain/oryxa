import React from 'react'

const steps = [
  {
    id: 1,
    icon: 'lan',
    title: 'Initialize Node',
    description: 'Establish secure neural links with your Meta and Shopify ecosystems.',
  },
  {
    id: 2,
    icon: 'cognition',
    title: 'Cognitive Sync',
    description: 'Configure agent parameters, objectives, and brand personality protocols.',
  },
  {
    id: 3,
    icon: 'auto_mode',
    title: 'Activate Neural Net',
    description: 'Deploy agents into live environments for autonomous operations.',
  },
  {
    id: 4,
    icon: 'monitoring',
    title: 'Scale Intelligence',
    description: 'Analyze real-time performance and evolve capabilities automatically.',
  },
]

export const HowItWorks: React.FC = () => {
  return (
    <section id="intelligence" className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-32">
      <div className="text-center mb-24 space-y-4">
        <h2 className="font-headline-xl text-4xl md:text-6xl font-bold text-white leading-tight">Deployment Protocol</h2>
        <p className="text-on-surface-variant max-w-2xl mx-auto">Follow our zero-friction initialization sequence to activate your global agent network.</p>
      </div>
      
      <div className="relative grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Connector Line */}
        <div className="hidden md:block absolute top-12 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        
        {steps.map((step, idx) => (
          <div key={step.id} className="relative flex flex-col items-center text-center group">
            <div className="w-24 h-24 rounded-2xl bg-base-900 border border-white/5 flex items-center justify-center mb-8 relative z-10 shadow-2xl group-hover:border-primary/50 transition-all duration-500 overflow-hidden">
               <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
               <span className="material-symbols-outlined text-primary text-4xl group-hover:scale-110 transition-transform duration-500">{step.icon}</span>
               <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-base-950 border border-white/10 flex items-center justify-center text-[10px] font-bold text-white/40">
                  {idx + 1}
               </div>
            </div>
            <h4 className="text-xl font-bold text-white mb-4">{step.title}</h4>
            <p className="text-on-surface-variant text-sm leading-relaxed">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
