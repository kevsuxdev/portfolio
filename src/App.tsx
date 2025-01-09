import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Contact from './pages/Contact'
import { AnimatePresence } from 'framer-motion'

const App = () => {
  return (
    <AnimatePresence>
      <React.Fragment>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </React.Fragment>
    </AnimatePresence>
  )
}

export default App
