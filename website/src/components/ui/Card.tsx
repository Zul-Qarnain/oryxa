import React from 'react'

export const Card: React.FC<{children?: React.ReactNode, className?: string, padding?: string}> = ({ children, className = '', padding = 'p-6' }) => {
  return (
    <div className={`bg-white rounded-2xl border border-outline-variant/20 shadow-soft ${padding} ${className}`}>
      {children}
    </div>
  )
}
