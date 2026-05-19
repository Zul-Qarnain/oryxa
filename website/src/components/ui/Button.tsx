import React from 'react'

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'outline' | 'glass'
  size?: 'sm' | 'md' | 'lg'
}

export const Button: React.FC<Props> = ({ variant = 'primary', size = 'md', className = '', children, ...props }) => {
  const base = 'font-semibold rounded-xl transition-all duration-300 inline-flex items-center justify-center gap-2 active:scale-95 whitespace-nowrap'
  
  const variants: Record<string, string> = {
    primary: 'bg-primary text-white shadow-glow-primary hover:bg-primary-light hover:shadow-primary/40',
    secondary: 'bg-white/10 border border-white/10 text-white hover:bg-white/20',
    tertiary: 'bg-transparent text-primary hover:text-primary-light',
    outline: 'bg-transparent border border-primary/50 text-white hover:border-primary hover:bg-primary/5',
    glass: 'bg-white/5 backdrop-blur-md border border-white/10 text-white hover:bg-white/10 hover:border-white/20'
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
