import React from "react";
import "./Footer.css";
import Mypic from "../../img/my-pic2.jpeg";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import { themeContext } from '../../Context';
import { useContext } from 'react';
import Wave from '../../img/wave.png'

const Footer = () => {
    const theme =useContext(themeContext);
    const darkMode = theme.state.darkMode;
  return (
    <div className="footer">
         

        <div className="name">
        
        <h2 style={{color: darkMode? 'white' : ''}}>Suman Saha</h2>
        <p>8016241953 | suman.saha5858@gmail.com
        </p>
        </div>
      <div className="l-footer">
        <img src={Mypic} alt="MyPic" />
        </div>

      <div className="r-footer">
      <div className="blur-2" style={{background: "var(--purple)"}}></div>
        <h2>Social Media</h2>
        
        <div className="i-icons"> 
          <a href="">
            <img src={Github} alt="" />
          </a>
          <a href="">
            <img src={LinkedIn} alt="" />
          </a>
          <a href="">
            {" "}
            <img src={Instagram} alt="" />
          </a>
          
        </div> 
         
      </div>
      
    </div>
  );
};

export default Footer;
