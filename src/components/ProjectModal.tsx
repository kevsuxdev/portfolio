import React, { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'

interface ProjectType {
  title: string
  cover: string
  roles: string[]
  color: string
}

interface ModalType {
  modal: { active: boolean; index: number }
  projects: ProjectType[]
}

const ProjectModal: React.FC<ModalType> = ({ modal, projects }) => {
  const { active, index } = modal

  const scaleAnimation = {
    initial: { scale: 0, x: '-50%', y: '-50%' },
    enter: {
      scale: 1,
      x: '-50%',
      y: '-50%',
      transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
    },
    closed: {
      scale: 0,
      x: '-50%',
      y: '-50%',
      transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
    },
  }

  const modalContainer = useRef(null)

  const cursor = useRef(null)

  const cursorLabel = useRef(null)

  useEffect(() => {
    const xMoveContainer = gsap.quickTo(modalContainer.current, 'left', {
      duration: 0.8,
      ease: 'power3',
    })

    const yMoveContainer = gsap.quickTo(modalContainer.current, 'top', {
      duration: 0.8,
      ease: 'power3',
    })
    const xMoveCursor = gsap.quickTo(cursor.current, 'left', {
      duration: 0.5,
      ease: 'power3',
    })

    const yMoveCursor = gsap.quickTo(cursor.current, 'top', {
      duration: 0.5,
      ease: 'power3',
    })

    const xMoveCursorLabel = gsap.quickTo(cursorLabel.current, 'left', {
      duration: 0.45,
      ease: 'power3',
    })

    const yMoveCursorLabel = gsap.quickTo(cursorLabel.current, 'top', {
      duration: 0.45,
      ease: 'power3',
    })

    window.addEventListener('mousemove', (e) => {
      const { pageX, pageY } = e
      xMoveContainer(pageX)
      yMoveContainer(pageY)
      xMoveCursor(pageX)
      yMoveCursor(pageY)
      xMoveCursorLabel(pageX)
      yMoveCursorLabel(pageY)
    })
  }, [])

  return (
    <>
      <motion.article
        ref={modalContainer}
        variants={scaleAnimation}
        initial='initial'
        animate={active ? 'enter' : 'closed'}
        className={`h-[220px] w-[400px] absolute overflow-hidden pointer-events-none flex items-center justify-center rounded-lg`}
      >
        <div
          style={{ top: index * -100 + '%' }}
          className={`h-full w-full absolute transition-all duration-500 ease-[0.76, 0, 0.24, 1]`}
        >
          {projects.map((project, index) => {
            const { cover, color } = project
            return (
              <div
                key={index}
                style={{ backgroundColor: color }}
                className={
                  'h-full w-full flex items-center justify-center px-5'
                }
              >
                <img
                  src={cover}
                  width={400}
                  height={0}
                  alt={`ProjectImage-${cover}`}
                  className='h-auto'
                />
              </div>
            )
          })}
        </div>
      </motion.article>

      <motion.div
        ref={cursor}
        className={
          'w-[80px] h-[80px] rounded-full bg-blue-950 text-white absolute z-[2] flex items-center justify-center font-alegreya text-sm pointer-events-none'
        }
        variants={scaleAnimation}
        initial='initial'
        animate={active ? 'enter' : 'closed'}
      ></motion.div>
      <motion.h1
        ref={cursorLabel}
        className={
          'w-[80px] h-[80px] font-bold tracking-wider rounded-full bg-blue-950 text-white absolute z-[2] flex items-center justify-center font-alegreya text-sm pointer-events-none'
        }
        variants={scaleAnimation}
        initial='initial'
        animate={active ? 'enter' : 'closed'}
      >
        View
      </motion.h1>
    </>
  )
}

export default ProjectModal
