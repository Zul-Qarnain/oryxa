import React from 'react'
import { Button } from './ui/Button'

export const CTA: React.FC = () => {
  return (
    <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-24 md:py-32">
      <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-base-900 border border-white/5 group shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/15 to-accent/5 opacity-50"></div>
        <div className="absolute inset-0 grid-bg opacity-50"></div>
        
        <div className="relative z-10 px-6 py-16 sm:px-12 sm:py-20 md:p-24 text-center max-w-4xl mx-auto space-y-8 md:space-y-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
            Ready to Power Your Business <br /> <span className="gradient-text">With Reliable Infrastructure?</span>
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            Get started with enterprise-grade servers, cloud hosting, and managed IT solutions. Our team is ready to deploy the perfect infrastructure for your needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center pt-4 md:pt-8">
            <a href="/contact">
              <Button size="lg" className="w-full sm:w-auto px-12 py-5 text-lg group">
                Get Started
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </Button>
            </a>
            <a href="/contact">
              <Button variant="outline" size="lg" className="w-full sm:w-auto px-12 py-5 text-lg">Talk to Sales</Button>
            </a>
          </div>
          
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-4 sm:gap-10">
            {[
              { icon: 'bolt', text: 'Fast Deployment' },
              { icon: 'support_agent', text: '24/7 Support' },
              { icon: 'shield', text: 'Enterprise Security' },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-2 text-[10px] sm:text-sm font-bold text-white/50 uppercase tracking-widest">
                <span className="material-symbols-outlined text-primary text-lg">{item.icon}</span>
                {item.text}
              </div>
            ))}
          </div>
        </div>

        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-accent/10 rounded-full blur-[80px]"></div>
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-primary/10 rounded-full blur-[80px]"></div>
      </div>
    </section>
  )
}
