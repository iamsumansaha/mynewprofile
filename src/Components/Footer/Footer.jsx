import React from "react";
import "./Footer.css";
import Mypic from "../../img/my-pic2.png";
import Github from '@iconscout/react-unicons/icons/uil-github'
import LinkedIn from "@iconscout/react-unicons/icons/uil-linkedin";
import Instagram from "@iconscout/react-unicons/icons/uil-instagram";
import { themeContext } from "../../Context";
import { useContext } from "react";
// import Github from "../../img/github.png";
// import LinkedIn from "../../img/linkedin.png";
// import Instagram from "../../img/instagram.png";
// import { themeContext } from '../../Context';
// import { useContext } from 'react';
// import Wave from '../../img/wave.png';

const Footer = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  
  return (<>
    <div className="footer"
     style={{background : darkMode? 'black': ''}}>
      <div className="name">
        <h2 style={{ color: darkMode ? "white" : "" }}>Suman Saha</h2>
        <p>8016241953 | suman.saha5858@gmail.com</p>
      </div>
      <div className="l-footer">
        <img src={Mypic} alt="MyPic" />
      </div>

      <div className="r-footer">
        <h2>Social Media</h2>

        <div className="i-icons">
          <a href="https://github.com/iamsumansaha">
            <Github
            style={{ color: darkMode ? "white" : "" }} />
          </a>
          <a href="https://www.linkedin.com/nwlite/in/iamsumansaha">
           <LinkedIn
           style={{ color: darkMode ? "white" : "" }}/>
          </a>
          <a href="https://instagram.com/its_sumansaha_/">
          <Instagram
          style={{ color: darkMode ? "white" : "" }}/>
          </a>
        
        <div className="i-icons"> 
          <a href="https://github.com/iamsumansaha">
            <img src={Github} alt="" />
          </a>
          <a href="https://www.linkedin.com/nwlite/in/iamsumansaha">
            <img src={LinkedIn} alt="" />
          </a>
          <a href="https://instagram.com/its_sumansaha_/">

            <img src={Instagram} alt="" />
          </a>
        </div>
      </div>
    </div>
    </div>
    </>
    
    
    
  );
};

export default Footer;
