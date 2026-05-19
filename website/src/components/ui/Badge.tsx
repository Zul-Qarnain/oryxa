import React from 'react'

type Variant = 'primary' | 'secondary' | 'success' | 'warning' | 'error'

interface Props {
  children: React.ReactNode
  variant?: Variant
  className?: string
}

export const Badge: React.FC<Props> = ({ children, variant = 'primary', className = '' }) => {
  const variants: Record<Variant, string> = {
    primary: 'bg-primary/10 text-primary',
    secondary: 'bg-secondary/10 text-secondary',
    success: 'bg-emerald-100 text-emerald-700',
    warning: 'bg-yellow-100 text-yellow-700',
    error: 'bg-error/10 text-error',
  }

  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-label-sm font-semibold ${variants[variant]} ${className}`}>
      {children}
    </span>
  )
}
