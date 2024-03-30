import React from 'react'
import './App.css'
import Info from "./Info"
import About from "./About"
import Interest from './Interests'
import Footer from './Footer'

function App() {
  return (
    <div className='container'>
      <Info />
      <div className="subContainer">
        <About />
        <Interest />
      </div>
      <Footer />
    </div>
  )
}

export default App
