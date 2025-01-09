import React from 'react'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'

interface ModalType {
  active: boolean
  index: number
}

interface ProjectType {
  index: number
  title: string
  roles: string[]
  location: string
  setModal: React.Dispatch<React.SetStateAction<ModalType>>
}

const ListOfProject: React.FC<ProjectType> = ({
  index,
  title,
  roles,
  location,
  setModal,
}) => {
  return (
    <NavLink
      to={location}
      onMouseEnter={() => {
        setModal({ active: true, index })
      }}
      onMouseLeave={() => setModal({ active: false, index })}
      className='border-b p-4 flex items-center justify-between duration-200 cursor-pointer group'
    >
      <motion.h1
        initial={{ translateX: '-100px', opacity: 0 }}
        whileInView={{
          translateX: 0,
          opacity: 1,
          transition: {
            type: 'spring',
            duration: 0.3,
            bounce: 0.4,
            delay: 0.1,
          },
        }}
        viewport={{ once: true, amount: 1 }}
        className='font-alegreya text-xl font-medium group-hover:-translate-x-3 duration-200'
      >
        {title}
      </motion.h1>
      <motion.div
        initial={{ translateX: '100px', opacity: 0 }}
        whileInView={{
          translateX: 0,
          opacity: 1,
          transition: {
            type: 'spring',
            duration: 0.3,
            bounce: 0.4,
            delay: 0.1,
          },
        }}
        viewport={{ once: true, amount: 1 }}
        className='gap-x-3 group-hover:translate-x-3 duration-200 grid grid-cols-2 place-items-center'
      >
        {roles.map((role, index) => {
          return (
            <p
              key={index}
              className='text-[15px] font-medium text-black/50 font-alegreya'
            >
              {role}
            </p>
          )
        })}
      </motion.div>
    </NavLink>
  )
}

export default ListOfProject
