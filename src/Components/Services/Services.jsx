import React, { useState } from 'react'
import './Services.css'
import Humble from '../../img/humble.webp'
import Heartemoji from '../../img/heartemoji.png'
import Glasses from '../../img/glasses (2).png'
import Card from '../Card/Card'
import Resume from './SumanSahaCV.pdf'
import { themeContext } from '../../Context'
import { useContext } from 'react'
import {motion} from 'framer-motion'






const Services = () => {
  const transition = {duration : 1, type : 'spring'};

  const theme =useContext(themeContext);
  const darkMode = theme.state.darkMode;


  return (
<div className="services" id='Skill'
 style={{background : darkMode? 'black': ''}}>

    {/* left */}
    <div className="awesome">
      <span style={{color: darkMode? 'white' : ''}}>My </span>
      <span>Resume</span>
      <span></span>


      <a href= {Resume} download>
      <button className ='s-button'>
        Download CV</button>
        
      </a>

    </div>


    {/* right */}
    <div className="cards">

          <motion.div
          initial={{left: '40rem', top:'1rem', opacity: 0}}
          whileInView={{left: '30rem', top:'1rem', opacity: 1}}
          transition={transition} 
          style={{left:'10rem'}}>
            <Card
            emoji = {Heartemoji}
            heading = {'Programming'}
            detail = {"HTML5, CSS, JavaScript, Java"}
            />
          </motion.div>

          <motion.div
           initial={{left: '5rem', opacity:0}}
           whileInView={{left: '14.4rem', opacity: 1}}
           transition={transition} 
          
          style={{left:'4rem', top: '10rem'}}>
            <Card
            emoji = {Glasses}
            heading = {'FrameWork'}
            detail = {"Bootstrap, Tailwind CSS, ReactJS"}
            />
          </motion.div>

          <motion.div 
          initial={{left: '35rem', opacity:0}}
          whileInView={{left: '30rem', opacity:1}}
          transition={transition} 
          style={{left:'22rem', top: '17rem'}}>
            <Card
            emoji = {Humble}
            heading = {'TOOLS'}
            detail = {"GIT, GITHUB, VS CODE"}
            />
          </motion.div>
          {/* <div className="blur s-blur" style={{background: "#ABF1FF94"}}></div> */}

 

    </div>
</div>
    )
}

export default Services
