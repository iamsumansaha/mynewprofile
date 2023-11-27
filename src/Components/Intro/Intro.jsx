import React from "react";
import "./Intro.css";
import Github from "@iconscout/react-unicons/icons/uil-github";
import LinkedIn from "@iconscout/react-unicons/icons/uil-linkedin";
import Instagram from "@iconscout/react-unicons/icons/uil-instagram";
import Back from "../../img/back.png";
import Mypic from "../../img/WhatsApp_Imag-removebg.png";
import Crown from "../../img/crown.png";
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import { themeContext } from "../../Context";
import { useContext } from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

const Intro = () => {
  const transition = { duration: 2, type: "spring" };
  const Animation = { 
    whileInView:{
      x:0, y:0, opacity:1
    },
    one:{
      opacity:0,
      x: "-100%"
    }
  };

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <motion.span 
          whileInView={Animation.whileInView}
          initial={Animation.one}style={{ color: darkMode ? "white" : "" }}>Hay! I am</motion.span>
          <span>Suman Saha</span>
          <Typewriter
            options={{
              strings: ["CS Engineer", "Frontend Developer"],
              autoStart: true,
              loop: true,
              cursor: "",
            }}
          ></Typewriter>
        </div>
        <div className="i-button">
          {/* <button className="button i-button"> */}
          <a href="mailto:suman.saha5858@gmail.com">
            <button className="button i-button">Email</button>
          </a>
        </div>



        
        <div className="i-icons">
          <a href="https://github.com/iamsumansaha">
            <Github
            style={{ color: darkMode ? "white" : "" }}/>
          </a>
          <a href="https://www.linkedin.com/nwlite/in/iamsumansaha">
           <LinkedIn
           style={{ color: darkMode ? "white" : "" }}/>
          </a>
          <a href="https://instagram.com/its_sumansaha_/">
           <Instagram
           style={{ color: darkMode ? "white" : "" }}/>
          </a>
        </div>
      </div>

      <div className="i-right">
        <img src={Back} alt="" />
        <img src={Mypic} alt="" />
      

        <motion.div
          initial={{ left: "0%", top: "-4%", opacity: 0 }}
          whileInView={{ left: "59%", opacity: 1 }}
          transition={transition}
          style={{ top: "-3%", left: "60%" }}
          className="floating-div"
        >
          <FloatingDiv image={Crown} text1="Web" text2="Developer" />
        </motion.div>
       

      </div>
    </div>
  );
};

export default Intro;
