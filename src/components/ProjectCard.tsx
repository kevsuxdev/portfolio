import React from 'react'
import { IconType } from 'react-icons'
import TechnologyCard from './TechnologyCard'
import Button from './Button'
import { FaFolder } from 'react-icons/fa'

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
        <h1 className='font-bree-serif text-2xl'>{title}</h1>
        <p className='font-alegreya text-lg tracking-wide'>{overview}</p>
        <div className='flex items-center gap-4 flex-wrap'>
          {technologies.map((technology) => {
            const { id, name, icon } = technology
            return <TechnologyCard key={id} name={name} icon={icon} />
          })}
        </div>
        <Button title='View Project' icon={FaFolder} />
      </div>
      <img
        src={cover}
        alt='Project Image'
        width={800}
        className='object-contain'
      />
    </article>
  )
}

export default ProjectCard
