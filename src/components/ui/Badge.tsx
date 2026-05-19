import React from 'react'

type Variant = 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'accent'

interface Props {
  children: React.ReactNode
  variant?: Variant
  className?: string
}

export const Badge: React.FC<Props> = ({ children, variant = 'primary', className = '' }) => {
  const variants: Record<Variant, string> = {
    primary: 'bg-primary/20 text-primary-light border border-primary/30',
    secondary: 'bg-secondary/20 text-secondary-light border border-secondary/30',
    success: 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30',
    warning: 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30',
    error: 'bg-red-500/20 text-red-400 border border-red-500/30',
    accent: 'bg-accent/20 text-accent border border-accent/30',
  }

  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-label-sm font-semibold backdrop-blur-sm ${variants[variant]} ${className}`}>
      {children}
    </span>
  )
}
