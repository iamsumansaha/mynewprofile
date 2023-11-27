import React, { useState } from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { themeContext } from '../../Context';
import { useContext } from 'react';
import { motion } from "framer-motion";
import Hii from '../../img/hiboy.webp';
import Hi from '../../img/hi.webp'


const Contact = () => {
    const Animation = { 
        form:{
            initial:{
                x : '-100%',
                opacity: 0,
            },
            whileInView:{
                x : 0,
                opacity: 1,
            }
        },
        button:{
            initial:{
                y : '-100%',
                opacity: 0,
            },
            whileInView:{
                y: 0,
                opacity: 1,
            },
            transition:{
                delay: 1, 
            }
        }
       };
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
<div className="contact-form" id='Contact'
style={{
    background : darkMode? 'black': '',
  }}>
<div className="w-left">

    <div
    className="awesome2">
        <span>Contact Me</span>
        <img src={Hi} alt="" />
            <img
            src={Hii} alt="" style={{width: '50%'}}
            />
    </div>
    

    
</div>

<div className="c-right">
    <form ref={form} onSubmit={sendEmail}>
        <motion.input {...Animation.form} type="text" name='user_name' required className='user' placeholder='Name' />
        <motion.input {...Animation.form}  type="email" name='user_email' required className='user' placeholder='E-mail' />
        <motion.textarea {...Animation.form} name="message" className="user" re placeholder='Message'></motion.textarea>
        <motion.input {...Animation.button} type="submit" value="send" className='button'/>
        <span>{done && "Thanks for contacing Me!!!"}</span>
    </form>
</div>

</div>  
)
}

export default Contact
