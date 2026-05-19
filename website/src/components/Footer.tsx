import React from 'react'

export const Footer: React.FC = () => {
  return (
    <footer className="bg-base-950 border-t border-white/5 pt-32 pb-12 overflow-hidden relative">
      {/* Decorative Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-96 bg-primary/10 rounded-full blur-[120px] -z-10"></div>
      
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
          <div className="col-span-1 md:col-span-1 space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                <span className="material-symbols-outlined text-white" style={{ fontVariationSettings: "'FILL' 1" }}>hub</span>
              </div>
              <span className="text-2xl font-bold text-white tracking-tight">Agentic</span>
            </div>
            <p className="text-on-surface-variant leading-relaxed">
              Global neural network for autonomous customer operations. Scale your intelligence with the speed of thought.
            </p>
            <div className="flex gap-6">
              {['share', 'public', 'alternate_email'].map((icon) => (
                <a key={icon} className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-on-surface-variant hover:text-primary hover:bg-white/10 transition-all border border-white/5" href="#">
                  <span className="material-symbols-outlined text-xl">{icon}</span>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h5 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Architecture</h5>
            <ul className="space-y-4">
              {['Intelligence Nodes', 'Security Protocols', 'Neural Links', 'API Mesh'].map((item) => (
                <li key={item}><a className="text-on-surface-variant hover:text-white transition-colors" href="#">{item}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Resources</h5>
            <ul className="space-y-4">
              {['Documentation', 'Developer Portal', 'Performance Logs', 'System Status'].map((item) => (
                <li key={item}><a className="text-on-surface-variant hover:text-white transition-colors" href="#">{item}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Nexus</h5>
            <ul className="space-y-4">
              {['About the Network', 'Join the Evolution', 'Privacy Encrypt', 'Terms of Access'].map((item) => (
                <li key={item}><a className="text-on-surface-variant hover:text-white transition-colors" href="#">{item}</a></li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
           <p className="text-on-surface-variant text-[12px] font-medium uppercase tracking-[0.2em]">
            © 2024 AGENTIC NEURAL NETWORK. ALL TRANSMISSIONS SECURED.
          </p>
          <div className="flex gap-8 text-[10px] font-bold text-white/20 uppercase tracking-widest">
            <span>Uptime: 99.99%</span>
            <span>Version: 2.0.4-Final</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
