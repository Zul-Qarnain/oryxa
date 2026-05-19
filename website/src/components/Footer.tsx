import React from 'react'
import logo from '../assets/brand/logo.png'

export const Footer: React.FC = () => {
  return (
    <footer className="bg-base-950 border-t border-white/5 pt-32 pb-12 overflow-hidden relative">
      {/* Decorative Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-96 bg-primary/10 rounded-full blur-[120px] -z-10"></div>
      
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
          <div className="col-span-1 md:col-span-1 space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 flex items-center justify-center overflow-hidden">
                <img src={logo} alt="Oryxa Logo" className="w-full h-full object-contain" />
              </div>
              <span className="text-2xl font-bold text-white tracking-tight">Oryxa</span>
            </div>
            <p className="text-on-surface-variant leading-relaxed">
              AI-powered automation for modern online businesses. Turn your social media messages into automated sales.
            </p>
            <div className="flex gap-6">
              {['facebook', 'instagram', 'x'].map((icon) => (
                <a key={icon} className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-on-surface-variant hover:text-primary hover:bg-white/10 transition-all border border-white/5" href="#">
                  <span className="material-symbols-outlined text-xl">public</span>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h5 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Product</h5>
            <ul className="space-y-4">
              {['AI Auto Replies', 'WhatsApp Automation', 'Instagram DMs', 'Order Management', 'Integrations'].map((item) => (
                <li key={item}><a className="text-on-surface-variant hover:text-white transition-colors" href="#">{item}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Resources</h5>
            <ul className="space-y-4">
              {['Documentation', 'Help Center', 'API Reference', 'Community', 'Status'].map((item) => (
                <li key={item}><a className="text-on-surface-variant hover:text-white transition-colors" href="#">{item}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Company</h5>
            <ul className="space-y-4">
              {['About Oryxa', 'Pricing', 'Privacy Policy', 'Terms of Service', 'Contact'].map((item) => (
                <li key={item}><a className="text-on-surface-variant hover:text-white transition-colors" href="#">{item}</a></li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
           <p className="text-on-surface-variant text-[12px] font-medium uppercase tracking-[0.2em]">
            © 2024 ORYXA AI. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-8 text-[10px] font-bold text-white/20 uppercase tracking-widest">
            <span>Platform Status: Operational</span>
            <span>v1.0.0</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
