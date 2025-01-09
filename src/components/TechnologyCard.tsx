import React from 'react'
import { IconType } from 'react-icons'
import { motion } from 'framer-motion'

interface Technology {
  index: number
  name: string
  icon?: IconType | string
  className?: string
}

const fadeInView = {
  initial: { opacity: 0, translateY: 100 },
  animate: (index: number) => ({
    opacity: 1,
    translateY: 0,
    transition: {
      type: 'spring',
      duration: 0.4,
      delay: 0.05 * index,
      bounce: 0.5,
    },
  }),
}

const TechnologyCard: React.FC<Technology> = ({
  index,
  name,
  icon,
  className,
}) => {
  return (
    <motion.div
      variants={fadeInView}
      initial='initial'
      whileInView='animate'
      viewport={{ amount: 0.5, once: true }}
      custom={index}
      className={`flex items-center gap-2 border border-main rounded-lg px-6 p-1 ${className}`}
    >
      {typeof icon === 'string' ? (
        <img src={icon} alt='Icon' className='w-5 h-5 object-contain' />
      ) : (
        React.createElement(icon as IconType)
      )}
      <h4 className='font-alegreya text-sm font-medium'>{name}</h4>
    </motion.div>
  )
}

export default TechnologyCard
