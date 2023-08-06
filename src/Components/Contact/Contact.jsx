import React, { useState } from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { themeContext } from '../../Context';
import { useContext } from 'react';
import Hii from '../../img/hiboy.webp'
import { motion } from 'framer-motion';

const Contact = () => {
    const transition = {duration : 2, type : 'spring'}
    const theme =useContext(themeContext);
    const darkMode = theme.state.darkMode;
    const form = useRef();
    const [done, setDone] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_o2wdiyl', 'template_htw3mnp', form.current, 'rT-2JH7KZ6TKeR-NA')
      .then((result) => {
          console.log(result.text);
          setDone(true)
      }, (error) => {
          console.log(error.text);
      });
  };



  return (
<div className="contact-form" id='Contact'>
<div className="w-left">

    <motion.div 
    initial={{left: '-30%' ,opacity: 0}}
    whileInView={{left: '10%', opacity: 1}}
    transition={transition}
    className="awesome">
        <span style={{color: darkMode? 'white' : ''}}>Contact Me</span>
            <img
            src={Hii} alt="" style={{width: '50%'}}
            />
    </motion.div>
    

    
</div>

<div className="c-right">
    <form ref={form} onSubmit={sendEmail}>
        <input type="text" name='user_name' className='user' placeholder='Name' />
        <input type="email" name='user_email' className='user' placeholder='E-mail' />
        <textarea name="message" className="user" placeholder='Message'></textarea>
        <input type="submit" value="send" className='button'/>
        <span>{done && "Thanks for contacing Me!!!"}</span>
       
        <div className="blur c-blur"
        style={{background: "var(--purple)"}}></div>
    </form>
</div>

</div>  
)
}

export default Contact