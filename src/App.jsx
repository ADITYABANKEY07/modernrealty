import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import About from './pages/About'
import Listings from './pages/Listings'

const App = () => {
  return (
    <div className='h-screen bg-dg'>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/blog" element={<Blog/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/listing" element={<Listings/>} />
    </Routes>
    </div>
  )
}

export default App