import React from 'react'

export const Footer: React.FC = () => {
  return (
    <footer className="bg-surface-dim border-t border-outline-variant/20 pt-20 pb-10">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-2 md:grid-cols-4 gap-gutter mb-20">
        <div className="col-span-2 md:col-span-1 space-y-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>smart_toy</span>
            </div>
            <span className="font-headline-md text-headline-md font-bold">Agentic</span>
          </div>
          <p className="text-on-surface-variant font-body-md text-body-md max-w-xs">
            AI agents for Messenger that help you sell more, reply faster, and create better content automatically.
          </p>
          <div className="flex gap-4">
            <a className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:text-primary transition-all" href="#"><span className="material-symbols-outlined text-xl">share</span></a>
            <a className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:text-primary transition-all" href="#"><span className="material-symbols-outlined text-xl">public</span></a>
            <a className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:text-primary transition-all" href="#"><span className="material-symbols-outlined text-xl">alternate_email</span></a>
          </div>
        </div>
        
        <div className="space-y-6">
          <h5 className="font-headline-md text-headline-md">Product</h5>
          <ul className="space-y-4">
            <li><a className="text-on-surface-variant hover:text-primary transition-all" href="#">Features</a></li>
            <li><a className="text-on-surface-variant hover:text-primary transition-all" href="#">Pricing</a></li>
            <li><a className="text-on-surface-variant hover:text-primary transition-all" href="#">Use Cases</a></li>
            <li><a className="text-on-surface-variant hover:text-primary transition-all" href="#">Integrations</a></li>
          </ul>
        </div>

        <div className="space-y-6">
          <h5 className="font-headline-md text-headline-md">Resources</h5>
          <ul className="space-y-4">
            <li><a className="text-on-surface-variant hover:text-primary transition-all" href="#">Docs</a></li>
            <li><a className="text-on-surface-variant hover:text-primary transition-all" href="#">Blog</a></li>
            <li><a className="text-on-surface-variant hover:text-primary transition-all" href="#">Help Center</a></li>
            <li><a className="text-on-surface-variant hover:text-primary transition-all" href="#">Community</a></li>
          </ul>
        </div>

        <div className="space-y-6">
          <h5 className="font-headline-md text-headline-md">Company</h5>
          <ul className="space-y-4">
            <li><a className="text-on-surface-variant hover:text-primary transition-all" href="#">About Us</a></li>
            <li><a className="text-on-surface-variant hover:text-primary transition-all" href="#">Careers</a></li>
            <li><a className="text-on-surface-variant hover:text-primary transition-all" href="#">Privacy Policy</a></li>
            <li><a className="text-on-surface-variant hover:text-primary transition-all" href="#">Terms</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pt-10 border-t border-outline-variant/10 text-center text-on-surface-variant font-label-sm text-label-sm">
        © 2024 Agentic AI. All rights reserved.
      </div>
    </footer>
  )
}
