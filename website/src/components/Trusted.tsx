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
    <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12 text-center">
      <p className="font-label-md text-label-md text-on-surface-variant mb-8">Trusted by growing businesses worldwide</p>
      <div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale">
        {companies.map((company) => (
          <div key={company.name} className="flex items-center gap-2 font-bold text-headline-md">
            <span className="material-symbols-outlined">{company.icon}</span>
            {company.name}
          </div>
        ))}
      </div>
    </section>
  )
}
