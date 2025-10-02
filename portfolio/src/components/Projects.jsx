import React from 'react'
import './Projects.css'
import githubIcon from '/github-mark.svg'

const Projects = () => {
  return (
    <div>
        <div id='projects'>Projects</div>
      <div className='projects-container'>
        <div className='project-1'>
            <a href='https://velvety-bubblegum-4bf9a8.netlify.app/'>
                <img className='project-1-img' src='/snake-game.png' alt='Snake game'/>
            </a>
            <div className='project-description'>
                <a href='https://github.com/Yournd/snake-game'>
                    <img className='github-icon' src={githubIcon} alt='Github Icon'/>
                </a>
                <h4 className='project-details'>My first project is this snake game created with HTML, CSS, and JS. 
                    This project taught me a lot about basic javascript principles, as well as basic css principles. 
                    This game features collision, as well as a highscore counter.
                    To play simply click the screenshot of the game and this site will take you there! 
                    You can use the arrow keys or WASD to move the snake around!
                    To view the source code click on the github icon next to the project screenshot!
                </h4>    
            </div>
        </div>
        <div className='project-2'>
            <a href='https://enchanting-faun-0e06a8.netlify.app/'>
                <img className='project-2-img' src='/weather-app.png' alt='Weather App'/>
            </a>
            <div className='project-description2'>
                <a href='https://github.com/Yournd/Wyatts-weather-app'>
                    <img className='github-icon' src={githubIcon} alt='Github Icon'/>
                </a>
                <h4 className='project-details2'>My second project is this weather app, which is made with react and css. 
                    The app is linked to an OpenWeatherMap api in order to update the shown data based on searched cities.
                    Search must only provide city name, for most accurate results, stick to larger cities!
                    To use simply click the screenshot of the app and this site will take you there! 
                    To view the source code click on the github icon next to the project screenshot!
                </h4>    
            </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
