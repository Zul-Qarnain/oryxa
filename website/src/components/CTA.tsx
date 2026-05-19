import React from 'react'
import { Button } from './ui/Button'

export const CTA: React.FC = () => {
  return (
    <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-32">
      <div className="relative rounded-[2.5rem] overflow-hidden bg-base-900 border border-white/5 group shadow-2xl">
        {/* Background Mesh */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/10 opacity-50 group-hover:scale-110 transition-transform duration-1000"></div>
        
        <div className="relative z-10 px-8 py-20 md:p-24 text-center max-w-4xl mx-auto space-y-12">
          <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            Ready to Initialize Your <br /> <span className="gradient-text">Neural Network?</span>
          </h2>
          
          <p className="text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            Join the elite circle of businesses leveraging autonomous intelligence. Deployment takes less than 10 minutes.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <Button size="lg" className="px-12 py-5 text-lg">Deploy First Agent</Button>
            <Button variant="outline" size="lg" className="px-12 py-5 text-lg">Consult an Engineer</Button>
          </div>
          
          <div className="flex flex-wrap justify-center gap-10 opacity-40 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700">
             <div className="flex items-center gap-2 text-sm font-bold text-white uppercase tracking-widest">
               <span className="material-symbols-outlined text-primary">security</span> AES-256 Encrypted
             </div>
             <div className="flex items-center gap-2 text-sm font-bold text-white uppercase tracking-widest">
               <span className="material-symbols-outlined text-primary">cloud_done</span> Multi-Cloud
             </div>
             <div className="flex items-center gap-2 text-sm font-bold text-white uppercase tracking-widest">
               <span className="material-symbols-outlined text-primary">lan</span> Zero Latency
             </div>
          </div>
        </div>

        {/* Decorative corner glow */}
        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-accent/20 rounded-full blur-[80px]"></div>
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-primary/20 rounded-full blur-[80px]"></div>
      </div>
    </section>
  )
}
