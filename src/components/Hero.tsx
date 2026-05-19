import React from 'react'
import { Button } from './ui/Button'
import { Badge } from './ui/Badge'

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-48 md:pb-32">
      {/* Background Atmosphere */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8 relative z-10">
          <Badge variant="accent" className="animate-fade-in">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse mr-2"></span>
            AI Agents for Social Commerce
          </Badge>
          
          <h1 className="font-display-lg text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-white leading-[1.1]">
            Turn Your Messages <br />
            <span className="gradient-text">Into Sales Automatically</span>
          </h1>
          
          <p className="text-body-lg text-on-surface-variant max-w-xl text-base sm:text-lg leading-relaxed">
            Automate your Facebook, Instagram, and WhatsApp conversations. Our AI agents reply instantly, manage orders, and support customers 24/7 so you never miss a sale.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button size="lg" className="w-full sm:w-auto px-10 py-5 text-lg group">
              Start Free Trial
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </Button>
            <Button variant="glass" size="lg" className="w-full sm:w-auto px-10 py-5 text-lg">
              Watch Demo
            </Button>
          </div>

          <div className="flex flex-wrap gap-x-8 gap-y-4 pt-6">
            {['24/7 AI Replies', 'Instant Setup', 'No Coding Required'].map((feature) => (
              <div key={feature} className="flex items-center gap-2 text-xs sm:text-sm font-medium text-on-surface-variant">
                <span className="material-symbols-outlined text-accent text-lg">verified</span>
                {feature}
              </div>
            ))}
          </div>
        </div>

        {/* Neural Dashboard Mockup */}
        <div className="relative group mt-8 lg:mt-0">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative bg-base-900 border border-white/10 rounded-3xl overflow-hidden shadow-2xl scale-[0.95] sm:scale-100 origin-center transition-transform">
            <div className="flex flex-col h-[400px] sm:h-[550px]">
              {/* Toolbar */}
              <div className="h-14 border-b border-white/5 bg-white/5 flex items-center px-4 sm:px-6 justify-between">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                </div>
                <div className="flex items-center gap-2 bg-white/5 px-3 py-1 rounded-full border border-white/5 text-[10px] text-on-surface-variant font-mono uppercase tracking-widest">
                  Social Sales Manager v1.0
                </div>
                <div className="w-6 h-6 rounded-full bg-white/5"></div>
              </div>
              
              <div className="flex flex-1 overflow-hidden">
                {/* Side Nav */}
                <div className="w-12 sm:w-16 border-r border-white/5 flex flex-col items-center py-6 sm:py-8 gap-6 sm:gap-8 bg-base-950/50">
                  <span className="material-symbols-outlined text-primary shadow-glow-primary text-lg sm:text-2xl">forum</span>
                  <span className="material-symbols-outlined text-white/20 text-lg sm:text-2xl">shopping_cart</span>
                  <span className="material-symbols-outlined text-white/20 text-lg sm:text-2xl">analytics</span>
                  <span className="material-symbols-outlined text-white/20 text-lg sm:text-2xl">person_add</span>
                  <div className="mt-auto mb-4 w-6 h-6 sm:w-8 sm:h-8 rounded-lg bg-gradient-to-br from-primary to-secondary p-[1px]">
                    <div className="w-full h-full bg-base-900 rounded-lg flex items-center justify-center">
                      <span className="material-symbols-outlined text-[10px] sm:text-[14px]">bolt</span>
                    </div>
                  </div>
                </div>

                {/* Real-time Interaction */}
                <div className="flex-1 p-4 sm:p-8 space-y-6 sm:space-y-8 overflow-y-auto">
                  <div className="flex justify-between items-center">
                    <h3 className="text-base sm:text-xl font-bold text-white flex items-center gap-2 sm:gap-3">
                      Live Sales Automation
                      <span className="flex h-2 w-2 sm:h-3 sm:w-3 relative">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 sm:h-3 sm:w-3 bg-emerald-500"></span>
                      </span>
                    </h3>
                  </div>

                  <div className="space-y-4 sm:space-y-6">
                    <div className="flex gap-3 sm:gap-4 animate-slide-up">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl bg-primary/20 flex items-center justify-center border border-primary/30 shrink-0">
                        <span className="material-symbols-outlined text-primary text-lg sm:text-xl">smart_toy</span>
                      </div>
                      <div className="flex-1 bg-white/5 rounded-2xl rounded-tl-none p-3 sm:p-5 border border-white/5 text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                        Hi! I've handled the inquiry from Instagram. They were asking about the **Summer Collection**. I've sent the catalog and size guide.
                      </div>
                    </div>

                    <div className="flex gap-3 sm:gap-4 justify-end animate-slide-up" style={{ animationDelay: '0.2s' }}>
                      <div className="flex-1 bg-accent/10 rounded-2xl rounded-tr-none p-3 sm:p-5 border border-accent/20 text-xs sm:text-sm text-white/90 text-right leading-relaxed">
                        Perfect. Did they ask about the shipping time to Manila?
                      </div>
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl bg-white/10 flex items-center justify-center border border-white/10 shrink-0">
                        <span className="material-symbols-outlined text-white/40 text-lg sm:text-xl">person</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 sm:gap-4 animate-slide-up" style={{ animationDelay: '0.4s' }}>
                       <div className="bg-base-950/80 p-3 sm:p-4 rounded-2xl border border-white/5">
                          <p className="text-[8px] sm:text-[10px] uppercase text-on-surface-variant mb-1 sm:mb-2">Active Conversations</p>
                          <div className="flex justify-between items-end">
                            <span className="text-lg sm:text-2xl font-bold text-white">128</span>
                            <span className="text-emerald-400 text-[10px] sm:text-xs flex items-center gap-0.5 sm:gap-1"><span className="material-symbols-outlined text-[10px] sm:text-xs">trending_up</span>12%</span>
                          </div>
                       </div>
                       <div className="bg-base-950/80 p-3 sm:p-4 rounded-2xl border border-white/5">
                          <p className="text-[8px] sm:text-[10px] uppercase text-on-surface-variant mb-1 sm:mb-2">Sales Conversion</p>
                          <div className="flex justify-between items-end">
                            <span className="text-lg sm:text-2xl font-bold text-white">24.5%</span>
                            <span className="text-primary text-[10px] sm:text-xs">High</span>
                          </div>
                       </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating UI Elements */}
          <div className="absolute -left-12 bottom-20 w-48 p-5 glass-card animate-bounce-slow hidden lg:block">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center">
                <span className="material-symbols-outlined text-emerald-500 text-sm">payments</span>
              </div>
              <p className="text-xs font-bold text-white">Order Managed</p>
            </div>
            <p className="text-2xl font-bold text-white">$429.00</p>
            <p className="text-[10px] text-on-surface-variant">Transaction ID: #Social-8291</p>
          </div>
        </div>
      </div>
    </section>
  )
}
