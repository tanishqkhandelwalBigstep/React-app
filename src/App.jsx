import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Description from './pages/Description'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/desc/:id' element={<Description />} />
    </Routes>
  )
}

export default App
