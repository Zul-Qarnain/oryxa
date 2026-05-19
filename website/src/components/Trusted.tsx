import React from 'react'

const companies = [
  { name: 'ShopEase', icon: 'shopping_bag' },
  { name: 'TrendMart', icon: 'trending_up' },
  { name: 'Homeify', icon: 'home' },
  { name: 'GearZone', icon: 'settings_input_component' },
  { name: 'BeautyCo', icon: 'face' },
]

export const Trusted: React.FC = () => {
  return (
    <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12 border-y border-white/5 bg-white/[0.02]">
      <p className="font-bold text-[10px] uppercase tracking-[0.3em] text-center text-white/30 mb-12">Authorized Ecosystem Partners</p>
      <div className="flex flex-wrap justify-center items-center gap-16 md:gap-24 opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700 cursor-default">
        {companies.map((company) => (
          <div key={company.name} className="flex items-center gap-3 font-bold text-xl text-white">
            <span className="material-symbols-outlined text-primary">{company.icon}</span>
            {company.name}
          </div>
        ))}
      </div>
    </section>
  )
}
