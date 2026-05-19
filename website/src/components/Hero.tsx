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
            Evolutionizing Customer Interactions
          </Badge>
          
          <h1 className="font-display-lg text-5xl md:text-7xl font-bold tracking-tight text-white leading-[1.1]">
            Neural AI Agents that <br />
            <span className="gradient-text">Command & Automate</span>
          </h1>
          
          <p className="text-body-lg text-on-surface-variant max-w-xl text-lg leading-relaxed">
            Deploy autonomous digital employees that handle sales, support, and content generation with human-like precision and infinite scalability.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <Button size="lg" className="px-10 py-5 text-lg group">
              Start Your Evolution
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </Button>
            <Button variant="glass" size="lg" className="px-10 py-5 text-lg">
              Watch Intelligence in Action
            </Button>
          </div>

          <div className="flex flex-wrap gap-8 pt-6">
            {['Zero Latency', 'Multi-Modal', 'Self-Learning'].map((feature) => (
              <div key={feature} className="flex items-center gap-2 text-sm font-medium text-on-surface-variant">
                <span className="material-symbols-outlined text-accent text-lg">verified</span>
                {feature}
              </div>
            ))}
          </div>
        </div>

        {/* Neural Dashboard Mockup */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative bg-base-900 border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
            <div className="flex flex-col h-[550px]">
              {/* Toolbar */}
              <div className="h-14 border-b border-white/5 bg-white/5 flex items-center px-6 justify-between">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                </div>
                <div className="flex items-center gap-2 bg-white/5 px-3 py-1 rounded-full border border-white/5 text-[10px] text-on-surface-variant font-mono uppercase tracking-widest">
                  Agent Terminal v2.0.4
                </div>
                <div className="w-6 h-6 rounded-full bg-white/5"></div>
              </div>
              
              <div className="flex flex-1 overflow-hidden">
                {/* Side Nav */}
                <div className="w-16 border-r border-white/5 flex flex-col items-center py-8 gap-8 bg-base-950/50">
                  <span className="material-symbols-outlined text-primary shadow-glow-primary">hub</span>
                  <span className="material-symbols-outlined text-white/20">memory</span>
                  <span className="material-symbols-outlined text-white/20">query_stats</span>
                  <span className="material-symbols-outlined text-white/20">settings_input_antenna</span>
                  <div className="mt-auto mb-4 w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary p-[1px]">
                    <div className="w-full h-full bg-base-900 rounded-lg flex items-center justify-center">
                      <span className="material-symbols-outlined text-[14px]">bolt</span>
                    </div>
                  </div>
                </div>

                {/* Real-time Interaction */}
                <div className="flex-1 p-8 space-y-8 overflow-y-auto">
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-bold text-white flex items-center gap-3">
                      Core Intelligence Node
                      <span className="flex h-3 w-3 relative">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                      </span>
                    </h3>
                  </div>

                  <div className="space-y-6">
                    <div className="flex gap-4 animate-slide-up">
                      <div className="w-10 h-10 rounded-2xl bg-primary/20 flex items-center justify-center border border-primary/30">
                        <span className="material-symbols-outlined text-primary text-xl">psychology</span>
                      </div>
                      <div className="flex-1 bg-white/5 rounded-2xl rounded-tl-none p-5 border border-white/5 text-sm text-on-surface-variant leading-relaxed">
                        I've analyzed the customer's sentiment. They are looking for a high-performance workspace. I'll suggest the **Titan Elite Series**.
                      </div>
                    </div>

                    <div className="flex gap-4 justify-end animate-slide-up" style={{ animationDelay: '0.2s' }}>
                      <div className="flex-1 bg-accent/10 rounded-2xl rounded-tr-none p-5 border border-accent/20 text-sm text-white/90 text-right leading-relaxed">
                        Great choice. Can you also check the inventory for the Grey Oak finish?
                      </div>
                      <div className="w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center border border-white/10">
                        <span className="material-symbols-outlined text-white/40 text-xl">person</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 animate-slide-up" style={{ animationDelay: '0.4s' }}>
                       <div className="bg-base-950/80 p-4 rounded-2xl border border-white/5">
                          <p className="text-[10px] uppercase text-on-surface-variant mb-2">Live Inventory</p>
                          <div className="flex justify-between items-end">
                            <span className="text-2xl font-bold text-white">42</span>
                            <span className="text-emerald-400 text-xs flex items-center gap-1"><span className="material-symbols-outlined text-xs">trending_up</span>8%</span>
                          </div>
                       </div>
                       <div className="bg-base-950/80 p-4 rounded-2xl border border-white/5">
                          <p className="text-[10px] uppercase text-on-surface-variant mb-2">Confidence Score</p>
                          <div className="flex justify-between items-end">
                            <span className="text-2xl font-bold text-white">99.8%</span>
                            <span className="text-primary text-xs">Optimal</span>
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
              <p className="text-xs font-bold text-white">Sale Captured</p>
            </div>
            <p className="text-2xl font-bold text-white">$1,249.00</p>
            <p className="text-[10px] text-on-surface-variant">Transaction ID: #82910</p>
          </div>
        </div>
      </div>
    </section>
  )
}
