import ExpenseTracker from './assets/expense-tracker.png'
import POS from './assets/pos-cafe.png'
import NodeIcon from './assets/icons/Node.png'
import ReactIcon from './assets/icons/react.png'
import MongoDB from './assets/icons/mongo.png'
import Express from './assets/icons/express.png'
import Tailwind from './assets/icons/tailwind.png'
import Laravel from './assets/icons/laravel.png'
import MySQL from './assets/icons/mysql.png'
import { IconType } from 'react-icons'

import { FaFacebookSquare, FaGithubSquare } from 'react-icons/fa'
import { IoLogoLinkedin } from 'react-icons/io'

interface Technology {
  id: number
  name: string
  icon: IconType | string
}

interface ProjectType {
  projectId: number
  title: string
  overview: string
  cover: string
  technologies: Technology[]
  location: string
}

interface LinkType {
  id: number
  name: string
  icon?: IconType
  location: string
}

export const listOfProjects: ProjectType[] = [
  {
    projectId: 1,
    title: 'Expense Tracker Web Application (Funday)',
    overview:
      'Funday is a user-friendly web application designed to help individuals effectively manage their personal finances. This project focuses on simplifying the process of tracking savings and expenses, offering full CRUD functionality for seamless management of financial data. Users can record their daily transactions, view detailed histories, and edit or delete records as needed.',
    cover: ExpenseTracker,
    technologies: [
      { id: 1, name: 'Node', icon: NodeIcon },
      { id: 2, name: 'React', icon: ReactIcon },
      { id: 3, name: 'MongoDB', icon: MongoDB },
      { id: 4, name: 'Express', icon: Express },
      { id: 5, name: 'Tailwind', icon: Tailwind },
    ],
    location: '',
  },
  {
    projectId: 2,
    title: 'Point of Sale with Cashier (Coffee Shop)',
    overview:
      'The coffee shop POS system streamlines transactions with cashier-side tools for discounts, payments, and receipts, while the admin side tracks profits, expenses, and inventory. It offers detailed reports, real-time insights, and user management, enhancing efficiency and decision-making.',
    cover: POS,
    technologies: [
      { id: 1, name: 'Laravel', icon: Laravel },
      { id: 2, name: 'MySQL', icon: MySQL },
      { id: 3, name: 'Tailwind', icon: Tailwind },
    ],
    location: '',
  },
]

export const socialLinks: LinkType[] = [
  {
    id: 1,
    name: 'Facebook',
    icon: FaFacebookSquare,
    location: 'https://www.facebook.com/kevs.codm.7/',
  },
  {
    id: 2,
    name: 'Github',
    icon: FaGithubSquare,
    location: 'https://github.com/kevsuxdev',
  },
  {
    id: 3,
    name: 'LinkedIn',
    icon: IoLogoLinkedin,
    location: 'https://www.linkedin.com/in/mark-kevin-romero-6951a3284/',
  },
]
