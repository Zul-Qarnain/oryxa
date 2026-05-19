import React from 'react'

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
}

export const Button: React.FC<Props> = ({ variant = 'primary', size = 'md', className = '', children, ...props }) => {
  const base = 'font-semibold rounded-xl transition-all duration-200 inline-flex items-center justify-center gap-2 active:scale-95 whitespace-nowrap'
  
  const variants: Record<string, string> = {
    primary: 'gradient-primary-135 text-white shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/25',
    secondary: 'bg-white border border-outline-variant/30 text-on-surface hover:bg-surface-container-low',
    tertiary: 'bg-transparent text-primary hover:bg-primary/5',
    outline: 'bg-transparent border border-primary text-primary hover:bg-primary/5'
  }
  
  const sizes: Record<string, string> = {
    sm: 'px-4 py-2 text-label-sm',
    md: 'px-6 py-3 text-label-md',
    lg: 'px-8 py-4 text-headline-md'
  }

  return (
    <button className={`${base} ${variants[variant]} ${sizes[size]} ${className}`} {...props}>
      {children}
    </button>
  )
}
