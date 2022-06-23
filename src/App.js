import React from 'react'
import { Route, Routes } from 'react-router'
import Home from "./Pages/Home"
import Mahsoolat from "./Pages/Mahsoolat"
import Navbar from "./content/Navbar/Navbar"
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/pages" element={<Mahsoolat />} />
      </Routes>
    </div>
  )
}

export default App