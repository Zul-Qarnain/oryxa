import React from 'react'
import { Link } from '@tanstack/react-router'

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-base-950 border-t border-white/5 pt-20 md:pt-32 pb-12 overflow-hidden relative">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-96 bg-primary/5 rounded-full blur-[150px] -z-10"></div>
      
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-20">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <span className="text-white font-black text-lg">RR</span>
              </div>
              <span className="text-xl font-bold text-white tracking-tight">RR Computers</span>
            </Link>
            <p className="text-on-surface-variant text-sm leading-relaxed">
              Powering businesses with reliable infrastructure. Enterprise dedicated servers, VPS hosting, cloud solutions, and managed IT services.
            </p>
            <div className="space-y-3">
              <a href="mailto:support@oryxa.us" className="flex items-center gap-3 text-sm text-on-surface-variant hover:text-white transition-colors">
                <span className="material-symbols-outlined text-base text-primary">mail</span>
                support@oryxa.us
              </a>
              <a href="tel:01881982949" className="flex items-center gap-3 text-sm text-on-surface-variant hover:text-white transition-colors">
                <span className="material-symbols-outlined text-base text-primary">call</span>
                01881-982949
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h5 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Services</h5>
            <ul className="space-y-3">
              {[
                'Dedicated Server Rental',
                'VPS Hosting',
                'Cloud Infrastructure',
                'IT Solutions',
                'Computer Sales',
                'Technical Support',
              ].map((item) => (
                <li key={item}>
                  <a className="text-sm text-on-surface-variant hover:text-white transition-colors" href="#services">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Quick Links</h5>
            <ul className="space-y-3">
              <li><Link to="/" className="text-sm text-on-surface-variant hover:text-white transition-colors">Home</Link></li>
              <li><a href="#services" className="text-sm text-on-surface-variant hover:text-white transition-colors">Services</a></li>
              <li><a href="#about" className="text-sm text-on-surface-variant hover:text-white transition-colors">About</a></li>
              <li><Link to="/contact" className="text-sm text-on-surface-variant hover:text-white transition-colors">Contact</Link></li>
              <li><Link to="/privacy" className="text-sm text-on-surface-variant hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-sm text-on-surface-variant hover:text-white transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/refund" className="text-sm text-on-surface-variant hover:text-white transition-colors">Refund Policy</Link></li>
            </ul>
          </div>

          {/* Newsletter / Contact */}
          <div>
            <h5 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Stay Updated</h5>
            <p className="text-sm text-on-surface-variant mb-4">Get the latest updates on infrastructure, new services, and special offers.</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-primary/50 transition-colors"
              />
              <button className="bg-primary hover:bg-primary-light text-white px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors">
                <span className="material-symbols-outlined text-[18px]">send</span>
              </button>
            </div>
            <div className="mt-6 p-4 rounded-xl bg-white/[0.02] border border-white/5">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                <span className="text-xs text-green-400 font-medium">All Systems Operational</span>
              </div>
              <p className="text-[10px] text-on-surface-variant">Network uptime: 99.99%</p>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-on-surface-variant text-xs font-medium">
            &copy; {currentYear} RR Computers. All Rights Reserved.
          </p>
          <div className="flex gap-6 text-[10px] font-bold text-white/20 uppercase tracking-widest">
            <Link to="/privacy" className="hover:text-white/40 transition-colors">Privacy</Link>
            <Link to="/terms" className="hover:text-white/40 transition-colors">Terms</Link>
            <Link to="/refund" className="hover:text-white/40 transition-colors">Refund</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
