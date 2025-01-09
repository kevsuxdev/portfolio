import Button from '../components/Button'
import { RiShareLine } from 'react-icons/ri'
import { personalSkills, socialLinks } from '../constant'
import { NavLink } from 'react-router-dom'
import React, { useState } from 'react'
import { IconType } from 'react-icons'
import { motion } from 'framer-motion'
import ListOfProject from '../components/ListOfProject'
import ProjectModal from '../components/ProjectModal'
import ExpenseTracker from '../assets/expense-tracker.png'
import POS from '../assets/pos-cafe.png'
import TechnologyCard from '../components/TechnologyCard'

interface ProjectType {
  title: string
  cover: string
  roles: string[]
  color: string
  location: string
}

interface ModalType {
  active: boolean
  index: number
}

const listOfProjectsLine: ProjectType[] = [
  {
    title: 'Expense Tracker',
    cover: ExpenseTracker,
    roles: ['Developer', 'Designer', 'Front-end', 'Back-end'],
    color: '#131313',
    location: '/expense-tracker',
  },
  {
    title: 'Pont of Sale with Cashier',
    cover: POS,
    roles: ['Developer', 'Designer', 'Front-end', 'Back-end'],
    color: '#c68823',
    location: '/pos',
  },
]

const Landing = () => {
  const [modal, setModal] = useState<ModalType>({ active: false, index: 0 })

  return (
    <main className='min-h-screen px-52 py-10 overflow-x-hidden'>
      <section className='h-screen flex items-center justify-center flex-col gap-5'>
        <article>
          <motion.button
            drag
            dragConstraints={{
              left: 0,
              top: 0,
              right: 0,
              bottom: 0,
            }}
            className='flex items-center gap-x-2 border-black border px-8 py-1 rounded-full cursor-auto'
          >
            <div className='w-3 h-3 bg-green-400 rounded-full' />
            <span className='font-alegreya text-sm'>Available to Work</span>
          </motion.button>
        </article>
        <h1 className='font-bree-serif text-7xl w-1/2 text-center leading-[100px]'>
          Hey! I’m Kevin. <br />A Full-Stack Developer <br /> of your project.
        </h1>

        <NavLink to={'/contact'}>
          <Button title="Let's work together" icon={RiShareLine} />
        </NavLink>
      </section>

      <section className='mt-10 flex items-start gap-5 flex-col h-screen'>
        <h2 className='font-bree-serif text-4xl'>About Me</h2>
        <p className='font-alegreya text-lg text-justify leading-9'>
          I'm Kevin Romero, a{' '}
          <strong>Third-year Information Technology Student</strong> and
          freelancer specializing in web development. I take on commissioned
          projects to develop dynamic and flexible websites that balance
          functionality and design to deliver a user-friendly experience. My
          goal is to always improve my skill set and keep up with the most
          recent developments in the field. I feel that combining creativity and
          technical expertise is critical to producing remarkable services that
          fulfill my clients' needs.
        </p>
      </section>

      <section className='space-y-5 mt-10 h-screen'>
        <h2 className='font-bree-serif text-4xl'>Projects</h2>
        {listOfProjectsLine.map((project, index) => {
          const { title, roles, location } = project
          return (
            <ListOfProject
              key={index}
              index={index}
              title={title}
              roles={roles}
              setModal={setModal}
              location={location}
            />
          )
        })}
        <ProjectModal modal={modal} projects={listOfProjectsLine} />
      </section>

      <section className='mt-10 flex flex-col gap-5'>
        <h2 className='font-bree-serif text-4xl'>Skills</h2>
        <article className='flex items-center flex-wrap gap-5 justify-center px-32 self-center'>
          {personalSkills.map((skill, index) => {
            const { id, name, icon } = skill
            return (
              <TechnologyCard
                key={id}
                index={index}
                name={name}
                icon={icon}
                className='py-3 border-black/30'
              />
            )
          })}
        </article>
      </section>

      <section className='flex items-center justify-center mt-10'>
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
