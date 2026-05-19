import React from 'react'
import { Button } from './ui/Button'
import { Badge } from './ui/Badge'

export const Hero: React.FC = () => {
  return (
    <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-section-padding grid md:grid-cols-2 gap-16 items-center">
      <div className="space-y-stack-lg">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-fixed text-on-primary-fixed-variant rounded-full font-label-sm text-label-sm">
          <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
          Agents as a Service for Messenger
        </div>
        <h1 className="font-display-lg text-headline-xl md:text-display-lg text-on-surface leading-tight">
          Messenger AI Agents That <span className="text-primary">Sell, Reply & Automate</span> 24/7
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg">
          Automate customer conversations, close more sales, generate posts, and manage your business using AI employees that work while you sleep.
        </p>
        <div className="flex flex-wrap gap-4 pt-4">
          <Button size="lg" className="gap-2">
            Get Started Free
            <span className="material-symbols-outlined">arrow_forward</span>
          </Button>
          <Button variant="secondary" size="lg" className="gap-2">
            <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>play_circle</span>
            Book a Demo
          </Button>
        </div>
        <div className="flex flex-wrap gap-6 pt-4 text-on-surface-variant">
          <div className="flex items-center gap-2 font-label-sm text-label-sm">
            <span className="material-symbols-outlined text-primary text-lg">check_circle</span> No Coding Needed
          </div>
          <div className="flex items-center gap-2 font-label-sm text-label-sm">
            <span className="material-symbols-outlined text-primary text-lg">check_circle</span> Quick Setup
          </div>
          <div className="flex items-center gap-2 font-label-sm text-label-sm">
            <span className="material-symbols-outlined text-primary text-lg">check_circle</span> Cancel Anytime
          </div>
        </div>
      </div>

      {/* Hero Mockup */}
      <div className="relative">
        <div className="bg-surface-container-lowest rounded-2xl p-4 shadow-soft border border-outline-variant/20 overflow-hidden">
          <div className="flex h-[500px]">
            {/* Sidebar */}
            <div className="w-16 border-r border-outline-variant/20 flex flex-col items-center py-6 gap-8">
              <span className="material-symbols-outlined text-primary">home</span>
              <span className="material-symbols-outlined text-outline">forum</span>
              <span className="material-symbols-outlined text-outline">group</span>
              <span className="material-symbols-outlined text-outline">monitoring</span>
              <span className="material-symbols-outlined text-outline">settings</span>
            </div>
            {/* Content */}
            <div className="flex-1 p-6 space-y-6">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <span className="font-headline-md text-headline-md">Messenger Agent</span>
                  <Badge variant="success" className="text-[10px] px-2 py-0.5 uppercase tracking-wider gap-1">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span> Active
                  </Badge>
                </div>
                <div className="flex gap-2">
                  <span className="material-symbols-outlined text-outline">more_horiz</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 h-full">
                <div className="bg-surface-container-low rounded-xl p-4">
                  <h4 className="font-label-md text-label-md mb-4">Live Conversations</h4>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-slate-200"></div>
                      <div className="flex-1">
                        <p className="font-label-sm text-label-sm font-bold">John D.</p>
                        <p className="text-[10px] text-outline truncate">Is this still available?</p>
                      </div>
                      <span className="text-[10px] text-outline">2m</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-slate-300"></div>
                      <div className="flex-1">
                        <p className="font-label-sm text-label-sm font-bold">Maria S.</p>
                        <p className="text-[10px] text-outline">Can I get the price?</p>
                      </div>
                      <span className="text-[10px] text-outline">3m</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-slate-400"></div>
                      <div className="flex-1">
                        <p className="font-label-sm text-label-sm font-bold">Alex R.</p>
                        <p className="text-[10px] text-outline">Thanks! I'll take it.</p>
                      </div>
                      <span className="text-[10px] text-outline">5m</span>
                    </div>
                  </div>
                  <button className="mt-4 w-full text-center text-primary font-label-sm text-label-sm border-t border-outline-variant/20 pt-4">View All Conversations</button>
                </div>
                <div className="space-y-4">
                  <div className="bg-primary rounded-xl p-3 text-on-primary text-[10px] self-end ml-4">
                    Yes! It is available. Would you like more details?
                  </div>
                  <div className="bg-surface-container-high rounded-xl p-3 text-on-surface text-[10px] mr-4">
                    Yes, please send details.
                  </div>
                  <div className="bg-primary rounded-xl p-3 text-on-primary text-[10px] flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center">
                       <span className="material-symbols-outlined text-white text-sm">image</span>
                    </div>
                    <div>
                      <p className="font-bold">Modern Minimal Chair</p>
                      <p>$89.00</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Floating Cards */}
        <div className="absolute -right-8 top-12 bg-white rounded-2xl p-6 shadow-soft border border-outline-variant/20 w-48 hidden lg:block">
          <p className="font-label-sm text-label-sm text-outline">Agent Performance</p>
          <div className="h-20 flex items-end gap-1 mb-2">
            <div className="w-full h-1/2 bg-primary/10 rounded-t-sm"></div>
            <div className="w-full h-2/3 bg-primary/20 rounded-t-sm"></div>
            <div className="w-full h-1/2 bg-primary/10 rounded-t-sm"></div>
            <div className="w-full h-3/4 bg-primary/40 rounded-t-sm"></div>
            <div className="w-full h-full bg-primary rounded-t-sm"></div>
          </div>
          <p className="font-headline-md text-headline-md text-emerald-500 font-bold">+32%</p>
          <p className="text-[10px] text-outline">Sales Increase</p>
        </div>
        <div className="absolute -right-12 bottom-12 bg-white rounded-2xl p-4 shadow-soft border border-outline-variant/20 w-56 hidden lg:block">
          <div className="flex items-center justify-between mb-3">
            <p className="font-label-sm text-label-sm font-bold">Smart AI Post</p>
          </div>
          <div className="w-full h-24 bg-surface-container rounded-lg mb-3 flex items-center justify-center">
            <span className="material-symbols-outlined text-outline">image</span>
          </div>
          <p className="text-[10px] text-on-surface-variant leading-tight mb-3">Transform your space with style & comfort.</p>
          <button className="w-full py-2 bg-primary text-on-primary rounded-lg text-[10px] font-bold">Post Now</button>
        </div>
      </div>
    </section>
  )
}
