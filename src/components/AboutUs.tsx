import React from 'react'

export const AboutUs: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>

      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-primary font-bold text-sm uppercase tracking-[0.2em]">About RR Computers</p>
              <h2 className="font-headline-xl text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
                Building the <span className="gradient-text">Digital Backbone</span> of Modern Business
              </h2>
            </div>
            
            <p className="text-on-surface-variant text-base sm:text-lg leading-relaxed">
              RR Computers is a technology infrastructure company providing dedicated server rental, VPS hosting, cloud infrastructure, IT services, and enterprise technology solutions. We serve businesses, startups, agencies, developers, and enterprises who demand reliability and performance.
            </p>
            
            <p className="text-on-surface-variant text-base sm:text-lg leading-relaxed">
              Our mission is to deliver reliable, scalable, and secure technology infrastructure for businesses of all sizes. We combine enterprise-grade hardware with expert technical support to ensure your operations run smoothly around the clock.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-4">
              {[
                { value: '500+', label: 'Active Servers' },
                { value: '99.9%', label: 'Uptime SLA' },
                { value: '24/7', label: 'Expert Support' },
                { value: '10+', label: 'Data Centers' },
              ].map((stat) => (
                <div key={stat.label} className="space-y-1">
                  <p className="text-3xl sm:text-4xl font-black text-white">{stat.value}</p>
                  <p className="text-xs sm:text-sm text-on-surface-variant font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 to-accent/5 rounded-3xl blur-xl"></div>
            <div className="relative bg-base-900 border border-white/10 rounded-2xl overflow-hidden p-8 sm:p-10 space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <span className="text-white font-black text-sm">RR</span>
                </div>
                <div>
                  <p className="text-white font-bold text-lg">RR Computers</p>
                  <p className="text-on-surface-variant text-xs">Technology Infrastructure</p>
                </div>
              </div>

              <div className="space-y-4">
                {[
                  { label: 'Server Reliability', value: 99.9, color: 'bg-green-400' },
                  { label: 'Network Performance', value: 98, color: 'bg-primary' },
                  { label: 'Security Score', value: 97, color: 'bg-accent' },
                  { label: 'Customer Satisfaction', value: 96, color: 'bg-purple-400' },
                ].map((metric) => (
                  <div key={metric.label} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-on-surface-variant">{metric.label}</span>
                      <span className="text-sm font-bold text-white">{metric.value}%</span>
                    </div>
                    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                      <div
                        className={`h-full ${metric.color} rounded-full transition-all duration-1000`}
                        style={{ width: `${metric.value}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/5">
                {[
                  { icon: 'dns', label: 'Servers' },
                  { icon: 'cloud', label: 'Cloud' },
                  { icon: 'shield', label: 'Security' },
                ].map((item) => (
                  <div key={item.label} className="flex flex-col items-center gap-2 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                    <span className="material-symbols-outlined text-primary text-xl">{item.icon}</span>
                    <span className="text-[10px] text-on-surface-variant font-medium uppercase tracking-wider">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
