import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'

const App = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route path='/' element={<Landing/>} />
      </Routes>
    </React.Fragment>
  )
}

export default App
