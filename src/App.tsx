import { useState } from 'react'
import Navbar from './components/navbar'
import Home from './pages/home'
import About from './pages/about'
import NotFound from './pages/notFound'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <div className="App">
    <Router>
      <Navbar />
        <Routes>
            <Route path="/" element={<Home title={'Home page'} />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
