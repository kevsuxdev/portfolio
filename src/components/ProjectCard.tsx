import React from 'react'
import { IconType } from 'react-icons'
import TechnologyCard from './TechnologyCard'
import Button from './Button'
import { FaFolder } from 'react-icons/fa'
import { motion } from 'framer-motion'

interface Technology {
  id: number
  name: string
  icon?: IconType | string
}

interface ProjectType {
  title: string
  overview: string
  cover: string
  technologies: Technology[]
}

const ProjectCard: React.FC<ProjectType> = ({
  title,
  overview,
  cover,
  technologies,
}) => {
  return (
    <article className='flex items-center justify-between min-h-[40vh] gap-10'>
      <div className='w-1/2 flex items-start self-start flex-col gap-5'>
        <motion.h1
          initial={{
            opacity: 0,
            translateX: '-100px',
          }}
          whileInView={{
            opacity: 1,
            translateX: 0,
            transition: {
              type: 'spring',
              duration: 1,
              bounce: 0.5,
              delay: 0.4,
            },
          }}
          viewport={{ once: true, amount: 1 }}
          className='font-bree-serif text-2xl'
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{
            opacity: 0,
            translateX: '-100px',
          }}
          whileInView={{
            opacity: 1,
            translateX: 0,
            transition: {
              type: 'spring',
              duration: 2,
              bounce: 0.5,
              delay: 0.5,
            },
          }}
          viewport={{ once: false, amount: 1 }}
          className='font-alegreya text-lg tracking-wide'
        >
          {overview}
        </motion.p>
        <div className='flex items-center gap-4 flex-wrap'>
          {technologies.map((technology) => {
            const { id, name, icon } = technology
            return <TechnologyCard key={id} name={name} icon={icon} />
          })}
        </div>
        <Button title='View Project' icon={FaFolder} />
      </div>
      <motion.img
        initial={{
          scale: 0,
        }}
        whileInView={{
          scale: 1,
          transition: { type: 'spring', duration: 1, bounce: 0.5, delay: 1 },
        }}
        viewport={{ once: true, amount: 0.8 }}
        src={cover}
        alt='Project Image'
        width={800}
        className='object-contain'
      />
    </article>
  )
}

export default ProjectCard
