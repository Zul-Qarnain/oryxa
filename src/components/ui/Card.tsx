import React from 'react'

export const Card: React.FC<{children?: React.ReactNode, className?: string, padding?: string}> = ({ children, className = '', padding = 'p-6' }) => {
  return (
    <div className={`bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-elevated transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:shadow-glow-primary ${padding} ${className}`}>
      {children}
    </div>
  )
}
