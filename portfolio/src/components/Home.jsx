import React from 'react'
import './Home.css'
import gitHubIcon from '/github-mark.svg'
import linkedInIcon from '/linkedin-icon.png'
import arrowIcon from '/arrow-icon.png'

const Home = () => {
  return (
    <div className='home-container'>
        <div id='home'>Home</div>
        <div className='home-contents'>
            <img className='home-pic' src='/headshot-portfolio.png' alt='Headshot for portfolio'/>
            <div className='home-details'>
                <h1 className='name'>Wyatt Yousey</h1>
                <h3 className='job-title'>Frontend Developer</h3>
                <p className='experience'>Experience~1+ years</p>   
                <div className='icon-container'>
                    <a href='https://github.com/Yournd'>
                        <img className='g-icon' src={gitHubIcon} alt='Git Hub Icon'/>
                    </a>
                    <a href='https://www.linkedin.com/in/wyatt-yousey-43618824a'>
                        <img className='i-icon' src={linkedInIcon} alt='Linkedin Icon'/>
                    </a>
                    <a href='#about'>
                        <img className='arrow-icon' src={arrowIcon} alt='Arrow Icon'/>
                    </a>
                </div>
            </div>
        </div>    
    </div>
  )
}

export default Home
