import React from 'react'
import { Button } from './ui/Button'
import { Badge } from './ui/Badge'

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-44 md:pb-32">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/15 rounded-full blur-[150px] animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[120px]"></div>
        <div className="absolute inset-0 grid-bg"></div>
      </div>

      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <Badge variant="accent" className="animate-fade-in">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse mr-2"></span>
            Enterprise Infrastructure Solutions
          </Badge>
          
          <h1 className="font-display-lg text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-white leading-[1.1] animate-slide-up">
            Enterprise Server Infrastructure{' '}
            <span className="gradient-text">For Modern Businesses</span>
          </h1>
          
          <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto text-base sm:text-lg leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Reliable dedicated servers, VPS hosting, cloud infrastructure, and managed IT solutions designed to help your business scale.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <Button size="lg" className="w-full sm:w-auto px-10 py-5 text-lg group">
              Get Started
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </Button>
            <a href="/contact">
              <Button variant="glass" size="lg" className="w-full sm:w-auto px-10 py-5 text-lg">
                Contact Sales
              </Button>
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 pt-6 animate-slide-up" style={{ animationDelay: '0.6s' }}>
            {[
              { icon: 'verified', text: '99.9% Uptime SLA' },
              { icon: 'support_agent', text: '24/7 Technical Support' },
              { icon: 'shield', text: 'Enterprise Security' },
            ].map((feature) => (
              <div key={feature.text} className="flex items-center gap-2 text-xs sm:text-sm font-medium text-on-surface-variant">
                <span className="material-symbols-outlined text-accent text-lg">{feature.icon}</span>
                {feature.text}
              </div>
            ))}
          </div>
        </div>

        {/* Server Infrastructure Visual */}
        <div className="mt-20 md:mt-28 relative animate-slide-up" style={{ animationDelay: '0.8s' }}>
          <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-3xl blur opacity-10"></div>
          <div className="relative bg-base-900 border border-white/10 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
            <div className="flex flex-col h-[350px] sm:h-[480px]">
              {/* Terminal Header */}
              <div className="h-12 sm:h-14 border-b border-white/5 bg-white/[0.02] flex items-center px-4 sm:px-6 justify-between">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/60"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/60"></div>
                </div>
                <div className="flex items-center gap-2 bg-white/5 px-3 py-1 rounded-full border border-white/5 text-[10px] text-on-surface-variant font-mono tracking-wider">
                  <span className="material-symbols-outlined text-[12px] text-green-400">terminal</span>
                  rr-servers-01.infra.oryxa.us
                </div>
                <div className="w-6"></div>
              </div>
              
              <div className="flex flex-1 overflow-hidden">
                {/* Side Panel */}
                <div className="hidden sm:flex w-56 border-r border-white/5 flex-col py-6 gap-1 bg-base-950/50 overflow-hidden">
                  <div className="px-4 mb-4">
                    <p className="text-[10px] uppercase tracking-widest text-on-surface-variant/50 font-bold mb-3">Infrastructure</p>
                  </div>
                  {[
                    { icon: 'dns', label: 'Dedicated Servers', count: '24', active: true },
                    { icon: 'cloud', label: 'Cloud Instances', count: '156' },
                    { icon: 'storage', label: 'VPS Nodes', count: '89' },
                    { icon: 'network_check', label: 'Load Balancers', count: '12' },
                    { icon: 'database', label: 'Databases', count: '34' },
                  ].map((item) => (
                    <div key={item.label} className={`flex items-center gap-3 px-4 py-2.5 mx-2 rounded-lg cursor-default transition-colors ${item.active ? 'bg-primary/10 text-primary border border-primary/20' : 'text-on-surface-variant hover:bg-white/5'}`}>
                      <span className="material-symbols-outlined text-[18px]">{item.icon}</span>
                      <span className="text-xs font-medium flex-1 truncate">{item.label}</span>
                      <span className={`text-[10px] font-mono ${item.active ? 'text-primary' : 'text-white/20'}`}>{item.count}</span>
                    </div>
                  ))}
                  <div className="mt-auto px-4 pt-4 border-t border-white/5 mx-2">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                      <span className="text-[10px] text-green-400 font-medium">All Systems Operational</span>
                    </div>
                  </div>
                </div>

                {/* Main Content */}
                <div className="flex-1 p-4 sm:p-6 space-y-4 sm:space-y-6 overflow-y-auto">
                  <div className="flex justify-between items-center">
                    <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                      Server Fleet Overview
                      <span className="flex h-2 w-2 relative">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                      </span>
                    </h3>
                    <span className="text-[10px] font-mono text-on-surface-variant bg-white/5 px-3 py-1 rounded-full border border-white/5">LIVE</span>
                  </div>

                  {/* Server Stats Grid */}
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                    {[
                      { label: 'Active Servers', value: '315', trend: '+12', icon: 'dns', color: 'text-primary' },
                      { label: 'CPU Utilization', value: '34%', trend: 'Normal', icon: 'memory', color: 'text-green-400' },
                      { label: 'Network I/O', value: '2.4 Gbps', trend: 'Stable', icon: 'speed', color: 'text-accent' },
                      { label: 'Uptime', value: '99.99%', trend: 'SLA Met', icon: 'verified', color: 'text-green-400' },
                    ].map((stat) => (
                      <div key={stat.label} className="bg-base-950/80 p-3 sm:p-4 rounded-xl border border-white/5">
                        <div className="flex items-center justify-between mb-2">
                          <span className="material-symbols-outlined text-[16px] text-white/30">{stat.icon}</span>
                          <span className={`text-[9px] font-bold uppercase tracking-wider ${stat.color}`}>{stat.trend}</span>
                        </div>
                        <p className="text-lg sm:text-xl font-bold text-white">{stat.value}</p>
                        <p className="text-[9px] sm:text-[10px] uppercase text-on-surface-variant/60 tracking-wider mt-1">{stat.label}</p>
                      </div>
                    ))}
                  </div>

                  {/* Server List */}
                  <div className="bg-base-950/60 rounded-xl border border-white/5 overflow-hidden">
                    <div className="hidden sm:grid grid-cols-5 gap-4 px-4 py-3 text-[9px] uppercase tracking-widest text-on-surface-variant/50 border-b border-white/5 font-bold">
                      <span>Server</span>
                      <span>Location</span>
                      <span>CPU</span>
                      <span>RAM</span>
                      <span>Status</span>
                    </div>
                    {[
                      { name: 'RR-DED-001', location: 'Singapore', cpu: '16%', ram: '32 GB', status: 'Running' },
                      { name: 'RR-DED-014', location: 'Frankfurt', cpu: '42%', ram: '64 GB', status: 'Running' },
                      { name: 'RR-VPS-089', location: 'New York', cpu: '8%', ram: '16 GB', status: 'Running' },
                      { name: 'RR-CLD-034', location: 'Tokyo', cpu: '67%', ram: '128 GB', status: 'Running' },
                    ].map((server) => (
                      <div key={server.name} className="grid grid-cols-5 gap-4 px-4 py-3 border-b border-white/[0.03] last:border-0 text-xs items-center">
                        <span className="font-mono font-medium text-white">{server.name}</span>
                        <span className="text-on-surface-variant hidden sm:block">{server.location}</span>
                        <span className="hidden sm:block">
                          <span className="text-on-surface-variant">{server.cpu}</span>
                        </span>
                        <span className="text-on-surface-variant hidden sm:block">{server.ram}</span>
                        <span className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span>
                          <span className="text-green-400 text-[10px]">{server.status}</span>
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Elements */}
          <div className="absolute -left-4 sm:-left-12 bottom-16 sm:bottom-20 w-44 sm:w-52 p-4 sm:p-5 glass-card animate-bounce-slow hidden md:block">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                <span className="material-symbols-outlined text-green-500 text-sm">speed</span>
              </div>
              <p className="text-xs font-bold text-white">Network Speed</p>
            </div>
            <p className="text-2xl font-bold text-white">10 Gbps</p>
            <p className="text-[10px] text-on-surface-variant">Dedicated Bandwidth</p>
          </div>

          <div className="absolute -right-4 sm:-right-12 top-16 sm:top-20 w-44 sm:w-52 p-4 sm:p-5 glass-card animate-bounce-slow hidden md:block" style={{ animationDelay: '3s' }}>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary text-sm">shield</span>
              </div>
              <p className="text-xs font-bold text-white">DDoS Protection</p>
            </div>
            <p className="text-lg font-bold text-white">Active</p>
            <p className="text-[10px] text-on-surface-variant">Enterprise-grade security</p>
          </div>
        </div>
      </div>
    </section>
  )
}
