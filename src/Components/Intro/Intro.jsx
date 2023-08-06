import React from 'react'
import './Intro.css'
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png'
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import Mypic from '../../img/my-pic (1).png';
import thumbup from '../../img/thumbup.png';
import Crown from '../../img/crown.png';
import glassesimoji from '../../img/glassesimoji.png';
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import { themeContext } from '../../Context';
import { useContext } from 'react';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect'

const Intro = () => {

    const transition = {duration : 2, type : 'spring'}


    const theme =useContext(themeContext);
    const darkMode = theme.state.darkMode;

  return (
<div className="intro">
    <div className="i-left">
        <div className="i-name">
            <span style={{color: darkMode? 'white' : ''}}>Hay! I am</span>
            <span>Suman Saha</span>
            <Typewriter options={{
                strings: ["CS Engineer", "Frontend Developer"],
                autoStart: true,
                loop: true,
                cursor:"",
            }}>
            </Typewriter>
            
        </div>
        <div className="i-button">
        {/* <button className="button i-button"> */}
            <a href="mailto:suman.saha5858@gmail.com"><button className='button i-button'>Email</button></a>
        </div>
        <div className="i-icons">
            <a href="https://github.com/iamsumansaha"><img src={Github} alt="" /></a>
            <a href="https://www.linkedin.com/nwlite/in/iamsumansaha"><img src={LinkedIn} alt="" /></a>
            <a href="https://instagram.com/its_sumansaha_/"> <img src={Instagram} alt="" /></a>
        </div>
    </div>



    <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={Mypic} alt="" />
        <motion.img 
        initial={{left: '-30%' ,opacity: 0}}
        whileInView={{left: '-20%', opacity: 1}}
        transition={transition}

        src={glassesimoji} alt="" />

        <motion.div
        initial={{left: '80%', top: '-4%', opacity: 0}}
        whileInView={{left: '68%', opacity: 1}}
        transition={transition} 
        style={{top: '-3%', left: '68%'}}
        className='floating-div'>
            <FloatingDiv image={Crown} text1="Web" text2="Developer"/>
        </motion.div>
        <motion.div
        initial={{left: '9rem', top: '18rem', opacity: 0}}
        whileInView={{left: '2rem', opacity: 1}}
        transition={transition} 
         style={{top: '18rem', left: '0rem'}}
         className='floating-div'>
            <FloatingDiv image={thumbup} text1="Create" text2="Own Design"/>
        </motion.div>

        <div className="blur" style={{background: "rgb(238 210 255)"}}></div>
        <div className="blur" style={{
            background: "#C1F5FF",
            top: '17rem',
            width: '21rem',
            height: '11rem',
            left: '-9rem' }}></div>

    </div>
</div>  )
}

export default Intro