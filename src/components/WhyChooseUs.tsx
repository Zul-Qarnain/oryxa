import React from 'react'

const reasons = [
  {
    icon: 'verified',
    title: '99.9% Uptime',
    description: 'Industry-leading uptime guarantee backed by redundant infrastructure and proactive monitoring systems.',
    stat: '99.9%',
  },
  {
    icon: 'support_agent',
    title: '24/7 Technical Support',
    description: 'Round-the-clock expert support from certified engineers ready to resolve any issue immediately.',
    stat: '24/7',
  },
  {
    icon: 'shield',
    title: 'Enterprise Security',
    description: 'Multi-layered security with DDoS protection, firewalls, SSL certificates, and regular security audits.',
    stat: '256-bit',
  },
  {
    icon: 'trending_up',
    title: 'Scalable Infrastructure',
    description: 'Seamlessly scale resources up or down based on your business demands without downtime.',
    stat: '100%',
  },
  {
    icon: 'bolt',
    title: 'Fast Deployment',
    description: 'Get your servers provisioned and deployed within minutes, not days. Instant setup on all plans.',
    stat: '<5 min',
  },
  {
    icon: 'payments',
    title: 'Affordable Pricing',
    description: 'Competitive pricing with transparent billing. No hidden fees, no surprises on your invoice.',
    stat: '0 hidden',
  },
]

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] -z-10"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>

      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="text-center mb-16 md:mb-20 space-y-4">
          <p className="text-accent font-bold text-sm uppercase tracking-[0.2em]">Why RR Computers</p>
          <h2 className="font-headline-xl text-3xl sm:text-4xl md:text-6xl font-bold text-white leading-tight">
            Infrastructure You Can <br /><span className="gradient-text">Trust</span>
          </h2>
          <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto text-base sm:text-lg">
            Built on enterprise-grade hardware with the reliability and support your business deserves.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="group relative p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-primary/30 hover:bg-white/[0.04] transition-all duration-500"
            >
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/5 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary text-xl">{reason.icon}</span>
                  </div>
                  <span className="text-2xl sm:text-3xl font-black text-white/10 group-hover:text-primary/20 transition-colors font-mono">
                    {reason.stat}
                  </span>
                </div>
                
                <h3 className="text-lg font-bold text-white mb-3">{reason.title}</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
