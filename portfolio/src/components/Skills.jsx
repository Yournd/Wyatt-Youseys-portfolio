import React from 'react'
import './Skills.css'
import cppIcon from '/c-plus-plus.png'
import cssIcon from '/css.png'
import htmlIcon from '/html.png'
import jsIcon from '/javascript.png'
import nodeIcon from '/node-js.png'
import pyIcon from '/python.png'
import reactIcon from '/react.png'

const Skills = () => {
  return (
    <div>
      <div id='skills'>Skills</div>
        <div className='section-container'>
            <div className='skills-container'>
                <h4 className='skills-descr'>Below are a list of all the skills that I have picked up the last year.
                    Obviously seen by my projects, React, HTML, JS, and CSS are my most prominent.
                    The rest are either in support of that stack, or simply learned to help me better understand code as a whole.</h4>
                        <div className='skills-list'>
                            <img src={htmlIcon} alt='HTML Icon'/>
                            <img src={cssIcon} alt='CSS Icon'/>
                            <img src={jsIcon} alt='JS Icon'/>
                            <img src={pyIcon} alt='Python Icon'/>
                            <img src={cppIcon} alt='C++ Icon'/>
                            <img src={reactIcon} alt='React Icon'/>
                            <img src={nodeIcon} alt='Node Icon'/>
                        </div>    
            </div>
        </div>    
    </div>
  )
}

export default Skills
