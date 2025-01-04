import React from 'react'
import { IconType } from 'react-icons'

interface Technology {
  name: string
  icon?: IconType | string
}

const TechnologyCard: React.FC<Technology> = ({ name, icon }) => {
  return (
    <div className='flex items-center gap-2 border border-main rounded-lg px-6 p-1'>
      {typeof icon === 'string' ? (
        <img src={icon} alt='Icon' className='w-5 h-5 object-contain' />
      ) : (
        React.createElement(icon as IconType)
      )}
      <h4 className='font-alegreya text-sm font-medium'>{name}</h4>
    </div>
  )
}

export default TechnologyCard
