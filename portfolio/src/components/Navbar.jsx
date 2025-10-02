import React from 'react'
import './Navbar.css'
import siteLogo from '/logo-portfolio1.svg'

const Navbar = () => {
  return (
    <div>
      <div className='nav-container'>
        <div className='logo-container'>
          <img className='site-logo' src={siteLogo} alt='Website Logo' />
          <h1 className='title'>Wyatt Yousey</h1>
        </div>
        <div className='links-container'>
          <ul className='nav-links'>
            <a href='#home' className='home' >Home</a>
            <a href='#about' className='about'>About</a>
            <a href='#projects' className='projects'>Projects</a>
            <a href='#skills' className='skills'>Skills</a>
            <a href='#contact' className='contact'>Get Connected</a>
          </ul>  
        </div>    
      </div>
    </div>
  )
}

export default Navbar
