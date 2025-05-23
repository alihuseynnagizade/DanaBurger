import React from 'react'
// import './assets/css/home.css'
// import './assets/css/about.css'
import { Route, Router, Routes } from 'react-router-dom'
import Home from './companent/home'
import About from './companent/About'
import Menu from './companent/Menu'
import Contact from './companent/Contact'

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Menu' element={<Menu/>}/>
      <Route path='/Contact' element={<Contact/>}/>
    </Routes>
    </>
  )
}

export default App