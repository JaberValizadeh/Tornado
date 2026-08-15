'use client'

interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'accent'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  onClick?: () => void
  href?: string
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
}

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  href,
  disabled = false,
  type = 'button',
}: ButtonProps) => {
  const baseClasses =
    'inline-flex items-center justify-center rounded-full font-medium whitespace-nowrap transition-colors duration-200 disabled:opacity-40 disabled:cursor-not-allowed'

  const variantClasses = {
    primary: 'bg-primary-500 text-neutral-950 hover:bg-primary-400',
    secondary:
      'border border-neutral-300 text-neutral-900 hover:border-neutral-900 hover:bg-neutral-50',
    accent: 'bg-neutral-950 text-white hover:bg-neutral-800',
  }

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-sm',
    lg: 'px-7 py-3.5 text-base',
  }

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} className={classes} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  )
}

export default Button
