import React from 'react'
import './About.css'
import aboutImg from '/about-portfolio.png'

const About = () => {
  return (
    <div>
      <div id='about'>About</div>
      <div className='about-container'>
        <img className='about-img' src={aboutImg} alt="Man welding on metal for About image"/>
        <h4 className='about-details'>My name is Wyatt Yousey, and as a 21-year-old frontend developer, I am excited to bring a fresh perspective and adaptable work ethic to your team.
             My journey into web development over the past year has been one of intentional growth, driven by a desire for a more motivating career.
              Through intensive bootcamps, focused study, and practical application, I have developed a strong skill base in web technologies.
               My commitment to personal and professional development ensures I am a quick learner and a dedicated team member.
                Let's connect via this website to discuss how my unique background and renewed motivation can contribute to your goals. </h4>
      </div>
    </div>
  )
}

export default About
