import Button from '../components/Button'
import { RiShareLine } from 'react-icons/ri'
import ProjectCard from '../components/ProjectCard'
import { listOfProjects, socialLinks } from '../constant'
import { NavLink } from 'react-router-dom'
import React from 'react'
import { IconType } from 'react-icons'

const Landing = () => {
  return (
    <main className='min-h-screen px-52 py-10'>
      <section className='h-[80vh] flex items-center justify-center flex-col gap-5'>
        <article>
          <button className='flex items-center gap-x-2 border-black border px-8 py-1 rounded-full cursor-auto'>
            <div className='w-3 h-3 bg-green-400 rounded-full' />
            <span className='font-alegreya text-sm'>Available to Work</span>
          </button>
        </article>
        <h1 className='font-bree-serif text-7xl w-1/2 text-center leading-[100px]'>
          Hey! I’m Kevin. <br /> A Full-Stack Developer <br />
          of your project.
        </h1>
        <Button title="Let's work together" icon={RiShareLine} />
      </section>

      <section className='space-y-5'>
        <h2 className='font-bree-serif text-4xl'>Projects</h2>
        {listOfProjects.map((project) => {
          const { projectId, title, overview, cover, technologies } = project
          return (
            <ProjectCard
              key={projectId}
              title={title}
              overview={overview}
              cover={cover}
              technologies={technologies}
            />
          )
        })}
      </section>

      <section className='flex items-center justify-center'>
        <article className='flex items-center gap-x-2'>
          {socialLinks.map((link) => {
            const { id, icon, location } = link
            return (
              <NavLink
                target='_blank'
                to={location}
                key={id}
                className={`text-3xl ${id === 3 && '!text-4xl'}`}
              >
                {React.createElement(icon as IconType)}
              </NavLink>
            )
          })}
        </article>
      </section>
    </main>
  )
}

export default Landing
