import React from 'react'
import { IconType } from 'react-icons'

interface ButtonType {
  title: string
  icon: string | IconType
  variant?: 'outline' | 'fill'
}

const Button: React.FC<ButtonType> = ({ title, icon, variant = 'fill' }) => {
  return (
    <button
      className={`font-alegreya p-2 px-6 rounded-full flex items-center gap-x-2 duration-200 ${
        variant === 'outline'
          ? 'border border-black text-dark hover:border-transparent hover:bg-dark hover:text-light'
          : 'border border-transparent bg-dark text-light hover:bg-transparent hover:border-black hover:text-dark'
      }`}
    >
      {title || 'Button'}

      {icon && typeof icon === 'string' ? (
        <img src={icon} alt='Icon' />
      ) : (
        React.createElement(icon as IconType, { className: 'w-4 h-4' })
      )}
    </button>
  )
}

export default Button
